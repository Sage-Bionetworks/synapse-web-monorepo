import{n as e}from"./chunk-jRWAZmH_.js";import{eh as t,vh as n}from"./iframe-DZy_Ubg6.js";import{n as r,r as i,t as a}from"./ErrorPage-vc3Hj1Ny.js";var o,s,c,l,u,d;e((()=>{i(),t(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Synapse/ErrorPage`,args:{gotoPlace:o()},component:a},c={args:{type:r.DOWN,message:`We're busy updating Synapse for you and will be back soon.`}},l={args:{type:r.ACCESS_DENIED,id:`syn12345`,objectType:n.ENTITY}},u={args:{type:r.NOT_FOUND}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    type: SynapseErrorType.DOWN,
    message: "We're busy updating Synapse for you and will be back soon."
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    type: SynapseErrorType.ACCESS_DENIED,
    id: 'syn12345',
    objectType: DoiObjectType.ENTITY
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    type: SynapseErrorType.NOT_FOUND
  }
}`,...u.parameters?.docs?.source}}},d=[`Maintenance`,`NoAccess`,`Unavailable`]}))();export{c as Maintenance,l as NoAccess,u as Unavailable,d as __namedExportsOrder,s as default};