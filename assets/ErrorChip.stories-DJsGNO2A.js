import{n as e}from"./chunk-jRWAZmH_.js";import{ih as t,rh as n}from"./iframe-DZy_Ubg6.js";import{n as r,t as i}from"./ErrorChip-CLEKRKPc.js";var a,o,s,c,l,u,d,f;e((()=>{r(),t(),a={title:`Components/ErrorChip`,component:i,argTypes:{isAuthenticated:{control:{type:`boolean`}}},args:{isAuthenticated:!0}},o=new n(401,`You must be signed in to access this resource.`,``),s={args:{chipText:`syn1234567`,error:o,isAuthenticated:!1}},c=new n(403,`You do not have READ access on this entity.`,``),l={args:{chipText:`syn1234567`,error:c,isAuthenticated:!0}},u=new n(404,`The entity does not exist.`,``),d={args:{chipText:`syn1234567`,error:u,isAuthenticated:!0}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    chipText: 'syn1234567',
    error: NotSignedInError,
    isAuthenticated: false
  }
}`,...s.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    chipText: 'syn1234567',
    error: NoAccessError,
    isAuthenticated: true
  }
}`,...l.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    chipText: 'syn1234567',
    error: NotFoundError,
    isAuthenticated: true
  }
}`,...d.parameters?.docs?.source}}},f=[`NotSignedIn`,`NoAccess`,`NotFound`]}))();export{l as NoAccess,d as NotFound,s as NotSignedIn,f as __namedExportsOrder,a as default};