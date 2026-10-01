import{o as e}from"./preload-helper-CsHsquCd.js";import{n as t,t as n}from"./FieldLibraryRow-COpLmstL.js";var r,i,a,o,s,c;e((()=>{t(),r={title:`Components/FormTemplateEditor/FieldLibraryRow`,component:n,args:{propertyKey:`institution`,property:{type:`string`,title:`Institution`},isRequired:!1,context:`ALWAYS`,isUsedInSteps:!1,onClick:()=>console.log(`onClick`)}},i={},a={args:{isRequired:!0,context:`RENEWAL_ONLY`}},o={args:{isUsedInSteps:!0}},s={args:{propertyKey:`preferredContactMethod`,property:{type:`string`,title:`Preferred contact method`,enum:[`Email`,`Phone`,`Mail`]}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isRequired: true,
    context: 'RENEWAL_ONLY'
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    isUsedInSteps: true
  }
}`,...o.parameters?.docs?.source},description:{story:`Already in a form step -- its drag handle is disabled and dropped from the tab order.`,...o.parameters?.docs?.description}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    propertyKey: 'preferredContactMethod',
    property: {
      type: 'string',
      title: 'Preferred contact method',
      enum: ['Email', 'Phone', 'Mail']
    }
  }
}`,...s.parameters?.docs?.source}}},c=[`NotInForm`,`RequiredWithSubmissionContext`,`InForm`,`ChoiceField`]}))();export{s as ChoiceField,o as InForm,i as NotInForm,a as RequiredWithSubmissionContext,c as __namedExportsOrder,r as default};