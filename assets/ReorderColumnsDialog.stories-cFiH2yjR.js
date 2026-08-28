import{o as e}from"./preload-helper-CsHsquCd.js";import{n as t,t as n}from"./ReorderColumnsDialog-Qu_FQh68.js";var r,i,a,o,s;e((()=>{t(),r={title:`Components/DataGrid/ReorderColumnsDialog`,component:n,args:{open:!0,columnNames:[`species`,`name`,`age`,`notes`],columnOrder:[0,1,2,3],jsonSchema:{properties:{name:{type:`string`},age:{type:`integer`},species:{type:`string`},notes:{type:`string`}}},onSave:e=>console.log(`onSave`,e),onCancel:()=>console.log(`onCancel`)}},i={},a={args:{columnOrder:[1,2,0,3]}},o={args:{upsertKey:[`name`]}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    columnOrder: [1, 2, 0, 3]
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    upsertKey: ['name']
  }
}`,...o.parameters?.docs?.source}}},s=[`Default`,`AlreadyInDefaultOrder`,`WithUpsertKey`]}))();export{a as AlreadyInDefaultOrder,i as Default,o as WithUpsertKey,s as __namedExportsOrder,r as default};