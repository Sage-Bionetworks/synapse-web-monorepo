import{o as e}from"./preload-helper-CsHsquCd.js";import{n as t,t as n}from"./ReorderColumnsDialog-DEXPbmKf.js";var r,i,a,o,s,c,l,u;e((()=>{t(),r={title:`Components/DataGrid/ReorderColumnsDialog`,component:n,args:{open:!0,columnNames:[`species`,`name`,`age`,`notes`,`comments`],columnOrder:[0,1,2,3,4],jsonSchema:{properties:{name:{type:`string`},age:{type:`integer`},species:{type:`string`},notes:{type:`string`}}},onSave:e=>console.log(`onSave`,e),onCancel:()=>console.log(`onCancel`)}},i={},a={args:{columnOrder:[1,2,0,3,4]}},o={args:{upsertKey:[`name`]}},s={args:{canRemoveColumns:!0}},c={args:{columnOrder:[0,1,2,4],canRemoveColumns:!0}},l={args:{jsonSchema:{definitions:{Animal:{type:`object`,properties:{name:{type:`string`},age:{type:`integer`}}}},properties:{notes:{type:`string`}},allOf:[{$ref:`#/definitions/Animal`},{properties:{species:{type:`string`}}}]},canRemoveColumns:!0}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    columnOrder: [1, 2, 0, 3, 4]
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    upsertKey: ['name']
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    canRemoveColumns: true
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    // 'notes' (identity index 3, a schema column) was already removed and saved in a
    // prior session -- it can be restored, but (being a schema column) not re-removed.
    columnOrder: [0, 1, 2, 4],
    canRemoveColumns: true
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    // Validation schemas returned by Synapse inline referenced schemas under \`definitions\` and
    // compose them with allOf. Every column but 'comments' is schema-defined here, even though
    // only 'notes' is declared in the schema's own top-level \`properties\`.
    jsonSchema: {
      definitions: {
        Animal: {
          type: 'object',
          properties: {
            name: {
              type: 'string'
            },
            age: {
              type: 'integer'
            }
          }
        }
      },
      properties: {
        notes: {
          type: 'string'
        }
      },
      allOf: [{
        $ref: '#/definitions/Animal'
      }, {
        properties: {
          species: {
            type: 'string'
          }
        }
      }]
    },
    canRemoveColumns: true
  }
}`,...l.parameters?.docs?.source}}},u=[`Default`,`AlreadyInDefaultOrder`,`WithUpsertKey`,`WithColumnRemoval`,`WithPreviouslyRemovedColumn`,`WithComposedSchema`]}))();export{a as AlreadyInDefaultOrder,i as Default,s as WithColumnRemoval,l as WithComposedSchema,c as WithPreviouslyRemovedColumn,o as WithUpsertKey,u as __namedExportsOrder,r as default};