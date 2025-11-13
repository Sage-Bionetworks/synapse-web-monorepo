import{E as h}from"./ErrorChip-DNFoiOID.js";import{ex as o}from"./iframe-DIMEjUPI.js";import"./Chip-ZO2rUNAI.js";import"./index-r8ZA1smB.js";const S={title:"Components/ErrorChip",component:h,argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},g=new o(401,"You must be signed in to access this resource.",""),r={args:{chipText:"syn1234567",error:g,isAuthenticated:!1}},A=new o(403,"You do not have READ access on this entity.",""),e={args:{chipText:"syn1234567",error:A,isAuthenticated:!0}},E=new o(404,"The entity does not exist.",""),t={args:{chipText:"syn1234567",error:E,isAuthenticated:!0}};var s,n,a;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    chipText: 'syn1234567',
    error: NotSignedInError,
    isAuthenticated: false
  }
}`,...(a=(n=r.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};var c,i,d;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    chipText: 'syn1234567',
    error: NoAccessError,
    isAuthenticated: true
  }
}`,...(d=(i=e.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var p,u,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    chipText: 'syn1234567',
    error: NotFoundError,
    isAuthenticated: true
  }
}`,...(m=(u=t.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const T=["NotSignedIn","NoAccess","NotFound"];export{e as NoAccess,t as NotFound,r as NotSignedIn,T as __namedExportsOrder,S as default};
