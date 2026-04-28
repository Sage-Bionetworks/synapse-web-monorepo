import{n as e}from"./chunk-zsgVPwQN.js";import{n as t,r as n,t as r}from"./ErrorPage-CjnNqm7H.js";var i,a,o,s,c,l;e((()=>{n(),{fn:i}=__STORYBOOK_MODULE_TEST__,a={title:`Synapse/ErrorPage`,args:{gotoPlace:i()},component:r},o={args:{type:t.DOWN,message:`We're busy updating Synapse for you and will be back soon.`}},s={args:{type:t.ACCESS_DENIED,entityId:`syn12345`}},c={args:{type:t.NOT_FOUND}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    type: SynapseErrorType.DOWN,
    message: "We're busy updating Synapse for you and will be back soon."
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    type: SynapseErrorType.ACCESS_DENIED,
    entityId: 'syn12345'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    type: SynapseErrorType.NOT_FOUND
  }
}`,...c.parameters?.docs?.source}}},l=[`Maintenance`,`NoAccess`,`Unavailable`]}))();export{o as Maintenance,s as NoAccess,c as Unavailable,l as __namedExportsOrder,a as default};