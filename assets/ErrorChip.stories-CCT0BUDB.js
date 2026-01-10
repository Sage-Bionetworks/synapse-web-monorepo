import{E as s}from"./ErrorChip-D6aUT_uY.js";import{et as o}from"./iframe-xmmb_I0l.js";import"./Chip-5gf_Tn0T.js";import"./index-Chi_LkuB.js";const m={title:"Components/ErrorChip",component:s,argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},n=new o(401,"You must be signed in to access this resource.",""),r={args:{chipText:"syn1234567",error:n,isAuthenticated:!1}},a=new o(403,"You do not have READ access on this entity.",""),e={args:{chipText:"syn1234567",error:a,isAuthenticated:!0}},c=new o(404,"The entity does not exist.",""),t={args:{chipText:"syn1234567",error:c,isAuthenticated:!0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    chipText: 'syn1234567',
    error: NotSignedInError,
    isAuthenticated: false
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    chipText: 'syn1234567',
    error: NoAccessError,
    isAuthenticated: true
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    chipText: 'syn1234567',
    error: NotFoundError,
    isAuthenticated: true
  }
}`,...t.parameters?.docs?.source}}};const h=["NotSignedIn","NoAccess","NotFound"];export{e as NoAccess,t as NotFound,r as NotSignedIn,h as __namedExportsOrder,m as default};
