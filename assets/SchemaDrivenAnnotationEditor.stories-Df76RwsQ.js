import{n as e}from"./chunk-zsgVPwQN.js";import{a as t,t as n}from"./mockSchema-usGs0SAH.js";import{n as r,t as i}from"./SchemaDrivenAnnotationEditor-BG2vuTFt.js";var a,o,s,c,l,u,d,f,p;e((()=>{n(),r(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Synapse/SchemaDrivenAnnotationEditor`,component:i,args:{onSuccess:a(),onCancel:a(),onChange:a()}},s={args:{schemaId:`dev.grosenbacher.test-Arrays`,entityId:`syn25959281`}},c={args:{schemaId:`dev.grosenbacher.test-IfThenElse`}},l={args:{schemaId:`nkauer-ad.main`}},u={args:{entityId:`syn32673093`}},d={args:{entityId:`syn25959288`}},f={args:{validationSchema:{$schema:`http://json-schema.org/draft-07/schema#`,$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${t.jsonSchemaVersionInfo.$id}`,type:`object`,properties:{country:{enum:[`USA`,`CA`],description:`Test description for country property`},showStringArray:{type:`boolean`}},required:[`country`],allOf:[{if:{properties:{country:{const:`USA`}},required:[`country`]},then:{properties:{state:{type:`string`}},required:[`state`]}},{if:{properties:{country:{const:`CA`}},required:[`country`]},then:{properties:{province:{type:`string`}},required:[`province`]}},{if:{properties:{showStringArray:{const:!0}},required:[`showStringArray`]},then:{properties:{stringArray:{type:`array`,items:{type:`string`}}}}}]}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-Arrays',
    entityId: 'syn25959281'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-IfThenElse'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    schemaId: 'nkauer-ad.main'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    entityId: 'syn32673093'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    entityId: 'syn25959288'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    validationSchema: {
      $schema: 'http://json-schema.org/draft-07/schema#',
      $id: \`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/\${mockSchemaBinding.jsonSchemaVersionInfo.$id}\`,
      type: 'object',
      properties: {
        country: {
          enum: ['USA', 'CA'],
          description: 'Test description for country property'
        },
        showStringArray: {
          type: 'boolean'
        }
      },
      required: ['country'],
      allOf: [{
        if: {
          properties: {
            country: {
              const: 'USA'
            }
          },
          required: ['country']
        },
        then: {
          properties: {
            state: {
              type: 'string'
            }
          },
          required: ['state']
        }
      }, {
        if: {
          properties: {
            country: {
              const: 'CA'
            }
          },
          required: ['country']
        },
        then: {
          properties: {
            province: {
              type: 'string'
            }
          },
          required: ['province']
        }
      }, {
        if: {
          properties: {
            showStringArray: {
              const: true
            }
          },
          required: ['showStringArray']
        },
        then: {
          properties: {
            stringArray: {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          }
        }
      }]
    }
  }
}`,...f.parameters?.docs?.source}}},p=[`Arrays`,`IfThenElse`,`ComplexSchema`,`DerivedAnnotations`,`ErrorsEntity`,`DirectlyProvidedSchema`]}))();export{s as Arrays,l as ComplexSchema,u as DerivedAnnotations,f as DirectlyProvidedSchema,d as ErrorsEntity,c as IfThenElse,p as __namedExportsOrder,o as default};