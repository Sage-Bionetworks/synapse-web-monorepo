import { RJSFSchema } from '@rjsf/utils'
import { DataAccessRequestType } from '@sage-bionetworks/synapse-client'
import {
  resolveSchemaPropertyAtPointer,
  SUBMISSION_CONTEXT_PROPERTY,
} from '@/utils/jsonschema/submissionContext'
import {
  bindField,
  changeContext,
  changeFieldType,
  changeRequired,
  createField,
  FormTemplateDraftState,
  listUnboundProperties,
  moveSlot,
  moveStep,
  NEW_FIELD_TITLE,
  removeProperty,
  renamePropertyKey,
  replaceJsonSchema,
  replaceProperty,
  replaceSteps,
  updateProperty,
} from './formTemplateDraftState'
import { LONG_TEXT_WIDGET } from './schemaFieldUtils'
import { EditableFormTemplateStep } from './utils'

/**
 * `institution` (required, ALWAYS), `age` (optional, ALWAYS, title matches its key), and
 * `summaryOfUse` (required, RENEWAL_ONLY).
 */
const schema: RJSFSchema = {
  type: 'object',
  properties: {
    [SUBMISSION_CONTEXT_PROPERTY]: { type: 'string' },
    institution: { type: 'string', title: 'Institution Name' },
    age: { type: 'number', title: 'Age' },
  },
  required: [SUBMISSION_CONTEXT_PROPERTY, 'institution'],
  allOf: [
    {
      if: {
        properties: {
          [SUBMISSION_CONTEXT_PROPERTY]: {
            const: DataAccessRequestType.RENEWAL,
          },
        },
      },
      then: {
        properties: { summaryOfUse: { type: 'string' } },
        required: ['summaryOfUse'],
      },
    },
  ],
}

function step(
  uiKey: string,
  schemaPaths: string[] = [],
): EditableFormTemplateStep {
  return {
    uiKey,
    title: uiKey,
    fields: schemaPaths.map(schemaPath => ({
      schemaPath,
      uiDefinition: {},
      isPublic: false,
    })),
  }
}

function draft(
  steps: EditableFormTemplateStep[] = [step('s1', ['/institution'])],
  editingPropertyKey: string | null = null,
): FormTemplateDraftState {
  return {
    jsonSchema: schema,
    steps,
    editingPropertyKey,
    unboundUiDefinitions: {},
  }
}

/** Each step's bound schemaPaths, for readable assertions. */
function pathsByStep(state: FormTemplateDraftState): string[][] {
  return state.steps.map(s => s.fields.map(f => f.schemaPath))
}

function resolve(state: FormTemplateDraftState, key: string) {
  return resolveSchemaPropertyAtPointer(state.jsonSchema, `/${key}`)
}

describe('createField', () => {
  it('adds an unbound text property under a fresh key and opens it for editing', () => {
    const first = createField(draft())
    const second = createField(first)

    expect(first.editingPropertyKey).not.toBe(second.editingPropertyKey)
    for (const state of [first, second]) {
      expect(resolve(state, state.editingPropertyKey!)).toMatchObject({
        subSchema: { type: 'string', title: NEW_FIELD_TITLE },
        context: 'ALWAYS',
        isRequired: false,
      })
    }
    expect(pathsByStep(second)).toEqual(pathsByStep(draft()))
  })
})

describe('renamePropertyKey', () => {
  it('renames the property, every step field bound to it, and the open drawer', () => {
    const next = renamePropertyKey(
      draft(
        [step('s1', ['/age']), step('s2', ['/institution'])],
        'institution',
      ),
      'institution',
      'org',
    )

    expect(resolve(next, 'institution')).toBeUndefined()
    expect(resolve(next, 'org')).toMatchObject({ isRequired: true })
    expect(pathsByStep(next)).toEqual([['/age'], ['/org']])
    expect(next.editingPropertyKey).toBe('org')
  })

  it.each([
    ['the new key is already taken', 'institution', 'age'],
    ['the old key does not exist', 'missing', 'org'],
    ['the key is unchanged', 'institution', 'institution'],
  ])('is a no-op when %s', (_label, oldKey, newKey) => {
    const state = draft()
    expect(renamePropertyKey(state, oldKey, newKey)).toBe(state)
  })
})

describe('updateProperty', () => {
  it.each([
    ['an ALWAYS', 'institution'],
    ['a RENEWAL_ONLY', 'summaryOfUse'],
  ])('keeps %s property required when its definition changes', (_l, key) => {
    const retitled = updateProperty(draft(), key, { description: 'Changed' })
    const retyped = updateProperty(draft(), key, { type: 'number' })

    expect(resolve(retitled, key)).toMatchObject({
      subSchema: { description: 'Changed' },
      isRequired: true,
    })
    expect(resolve(retyped, key)).toMatchObject({
      subSchema: { type: 'number' },
      isRequired: true,
    })
  })

  it('renames a key that still follows its title, including where it is bound', () => {
    const next = updateProperty(draft([step('s1', ['/age'])], 'age'), 'age', {
      title: 'Years Old',
    })

    expect(resolve(next, 'age')).toBeUndefined()
    expect(resolve(next, 'yearsOld')).toMatchObject({
      subSchema: { type: 'number', title: 'Years Old' },
    })
    expect(pathsByStep(next)).toEqual([['/yearsOld']])
    expect(next.editingPropertyKey).toBe('yearsOld')
  })

  it('leaves a manually overridden key alone when the title changes', () => {
    const next = updateProperty(draft(), 'institution', { title: 'Org' })

    expect(resolve(next, 'institution')).toMatchObject({
      subSchema: { title: 'Org' },
    })
  })

  it('is a no-op for a property that does not exist', () => {
    const state = draft()
    expect(updateProperty(state, 'missing', { title: 'X' })).toBe(state)
  })
})

describe('replaceProperty', () => {
  it('replaces the definition, keeping its context and required-ness', () => {
    const next = replaceProperty(draft(), 'summaryOfUse', { type: 'boolean' })

    expect(resolve(next, 'summaryOfUse')).toEqual(
      expect.objectContaining({
        subSchema: { type: 'boolean' },
        context: 'RENEWAL_ONLY',
        isRequired: true,
      }),
    )
  })
})

describe('changeRequired / changeContext', () => {
  it('toggles required-ness at the property’s own context', () => {
    const optional = changeRequired(draft(), 'summaryOfUse', false)
    const required = changeRequired(optional, 'summaryOfUse', true)

    expect(resolve(optional, 'summaryOfUse')).toMatchObject({
      context: 'RENEWAL_ONLY',
      isRequired: false,
    })
    expect(resolve(required, 'summaryOfUse')).toMatchObject({
      context: 'RENEWAL_ONLY',
      isRequired: true,
    })
  })

  it('moves a property to another context, keeping it required', () => {
    const next = changeContext(draft(), 'institution', 'REQUEST_ONLY')

    expect(resolve(next, 'institution')).toMatchObject({
      context: 'REQUEST_ONLY',
      isRequired: true,
    })
  })
})

describe('removeProperty', () => {
  it('removes the property, unbinds it from every step, and closes its drawer', () => {
    const next = removeProperty(
      draft([step('s1', ['/institution', '/age'])], 'institution'),
      'institution',
    )

    expect(resolve(next, 'institution')).toBeUndefined()
    expect(pathsByStep(next)).toEqual([['/age']])
    expect(next.editingPropertyKey).toBeNull()
  })

  it('keeps a different property’s drawer open', () => {
    const next = removeProperty(draft(undefined, 'age'), 'institution')
    expect(next.editingPropertyKey).toBe('age')
  })
})

describe('moveStep', () => {
  const steps = [step('a'), step('b'), step('c')]

  it.each([
    [0, 2, ['b', 'c', 'a']],
    [2, 0, ['c', 'a', 'b']],
    [1, 2, ['a', 'c', 'b']],
  ])('moves the step at %i to %i', (from, to, expected) => {
    expect(moveStep(draft(steps), from, to).steps.map(s => s.uiKey)).toEqual(
      expected,
    )
  })

  it.each([
    [0, 0],
    [-1, 1],
    [0, 3],
  ])('is a no-op for %i -> %i', (from, to) => {
    const state = draft(steps)
    expect(moveStep(state, from, to)).toBe(state)
  })
})

describe('moveSlot', () => {
  const steps = [step('s1', ['/a', '/b', '/c']), step('s2', ['/d']), step('s3')]

  it.each([
    ['within its step', '/a', 's1', 2, [['/b', '/c', '/a'], ['/d'], []]],
    ['into another step', '/b', 's2', 0, [['/a', '/c'], ['/b', '/d'], []]],
    ['into an empty step', '/c', 's3', 0, [['/a', '/b'], ['/d'], ['/c']]],
    ['past the end, clamped', '/a', 's2', 99, [['/b', '/c'], ['/d', '/a'], []]],
  ])('moves a slot %s', (_label, path, toStep, toIndex, expected) => {
    expect(pathsByStep(moveSlot(draft(steps), path, toStep, toIndex))).toEqual(
      expected,
    )
  })

  it.each([
    ['the slot is not bound anywhere', '/missing', 's2'],
    ['the target step does not exist', '/a', 'missing'],
  ])('is a no-op when %s', (_label, path, toStep) => {
    const state = draft(steps)
    expect(moveSlot(state, path, toStep, 0)).toBe(state)
  })
})

describe('bindField', () => {
  it('appends a field bound to the property with default slot config', () => {
    const next = bindField(draft([step('s1'), step('s2')]), 'age', 's2')

    expect(next.steps[1].fields).toEqual([
      { schemaPath: '/age', uiDefinition: {}, isPublic: false },
    ])
    expect(next.steps[0].fields).toEqual([])
  })

  it.each([
    ['the property is already bound to a step', 'institution', 's2'],
    ['the step does not exist', 'age', 'missing'],
  ])('is a no-op when %s', (_label, propertyKey, stepKey) => {
    const state = draft([step('s1', ['/institution']), step('s2')])
    expect(bindField(state, propertyKey, stepKey)).toBe(state)
  })
})

describe('replaceSteps', () => {
  const uiDefinition = {
    'ui:widget': LONG_TEXT_WIDGET,
    'ui:options': { rows: 5 },
  }
  const boundWithUi = () =>
    draft([
      {
        ...step('s1'),
        fields: [{ schemaPath: '/age', uiDefinition, isPublic: false }],
      },
      step('s2'),
    ])

  it("keeps an unbound slot's uiDefinition for when the property is bound again", () => {
    const state = boundWithUi()
    const unbound = replaceSteps(state, [step('s1'), step('s2')])
    const rebound = bindField(unbound, 'age', 's2')

    expect(rebound.steps[1].fields).toEqual([
      { schemaPath: '/age', uiDefinition, isPublic: false },
    ])
    expect(rebound.unboundUiDefinitions).toEqual({})
  })

  it('drops a held uiDefinition once the new steps bind its property again', () => {
    const state = boundWithUi()
    const unbound = replaceSteps(state, [step('s1'), step('s2')])
    expect(replaceSteps(unbound, state.steps).unboundUiDefinitions).toEqual({})
  })

  it('follows a rename and is dropped with the property', () => {
    const unbound = replaceSteps(boundWithUi(), [step('s1'), step('s2')])

    const renamed = renamePropertyKey(unbound, 'age', 'yearsOld')
    expect(renamed.unboundUiDefinitions).toEqual({ '/yearsOld': uiDefinition })
    expect(removeProperty(renamed, 'yearsOld').unboundUiDefinitions).toEqual({})
  })
})

describe('changeFieldType', () => {
  it('writes the long-answer widget to the bound slot, and removes only that when switched back', () => {
    const state = draft([
      {
        ...step('s1'),
        fields: [
          {
            schemaPath: '/age',
            uiDefinition: { 'ui:options': { rows: 3 } },
            isPublic: false,
          },
        ],
      },
    ])

    const long = changeFieldType(state, 'age', 'longText')
    expect(resolve(long, 'age')?.subSchema).toMatchObject({ type: 'string' })
    expect(long.steps[0].fields[0].uiDefinition).toEqual({
      'ui:options': { rows: 3 },
      'ui:widget': LONG_TEXT_WIDGET,
    })

    const text = changeFieldType(long, 'age', 'text')
    expect(text.steps[0].fields[0].uiDefinition).toEqual({
      'ui:options': { rows: 3 },
    })
  })

  it('holds the choice for an unbound property until it is bound', () => {
    const long = changeFieldType(draft([step('s1')]), 'age', 'longText')
    expect(long.unboundUiDefinitions).toEqual({
      '/age': { 'ui:widget': LONG_TEXT_WIDGET },
    })
    expect(
      bindField(long, 'age', 's1').steps[0].fields[0].uiDefinition,
    ).toEqual({ 'ui:widget': LONG_TEXT_WIDGET })
    expect(changeFieldType(long, 'age', 'number').unboundUiDefinitions).toEqual(
      {},
    )
  })

  it('keeps other held keys when an unbound property switches away', () => {
    const state = {
      ...draft([step('s1')]),
      unboundUiDefinitions: {
        '/age': { 'ui:widget': LONG_TEXT_WIDGET, 'ui:options': { rows: 3 } },
      },
    }
    expect(changeFieldType(state, 'age', 'text').unboundUiDefinitions).toEqual({
      '/age': { 'ui:options': { rows: 3 } },
    })
  })

  it('makes a must-be-checked property a required boolean that must be true, and drops const when switched away', () => {
    const mustCheck = changeFieldType(draft(), 'age', 'mustCheck')
    expect(resolve(mustCheck, 'age')).toMatchObject({
      subSchema: { type: 'boolean', const: true },
      isRequired: true,
      context: 'ALWAYS',
    })

    const yesNo = changeFieldType(mustCheck, 'age', 'boolean')
    expect(resolve(yesNo, 'age')?.subSchema).not.toHaveProperty('const')
    expect(resolve(yesNo, 'age')?.subSchema).toMatchObject({ type: 'boolean' })
  })

  it('makes an optional renewal-only property required in its own context when it becomes must-be-checked', () => {
    const mustCheck = changeFieldType(
      changeRequired(draft(), 'summaryOfUse', false),
      'summaryOfUse',
      'mustCheck',
    )
    expect(resolve(mustCheck, 'summaryOfUse')).toMatchObject({
      context: 'RENEWAL_ONLY',
      isRequired: true,
    })
  })
})

describe('replaceJsonSchema', () => {
  it('drops a held uiDefinition whose property the new schema no longer has', () => {
    const state = {
      ...draft([step('s1')]),
      unboundUiDefinitions: {
        '/age': { 'ui:widget': LONG_TEXT_WIDGET },
        '/gone': { 'ui:widget': LONG_TEXT_WIDGET },
      },
    }
    expect(replaceJsonSchema(state, schema).unboundUiDefinitions).toEqual({
      '/age': { 'ui:widget': LONG_TEXT_WIDGET },
    })
  })
})

describe('listUnboundProperties', () => {
  it('lists every schema property that no step binds, conditional ones included', () => {
    const keys = (steps: EditableFormTemplateStep[]) =>
      listUnboundProperties(schema, steps).map(p => p.propertyKey)

    expect(keys([step('s1', ['/institution'])])).toEqual([
      'age',
      'summaryOfUse',
    ])
    expect(
      keys([
        step('s1', ['/institution', '/age']),
        step('s2', ['/summaryOfUse']),
      ]),
    ).toEqual([])
  })
})
