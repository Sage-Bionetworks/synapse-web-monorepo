import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{BS as n,Ct as r,MS as i,Nv as a,Ot as o,jb as s,xx as c}from"./iframe-CmK4Wj0A.js";import{n as l,t as u}from"./SetManagedAccessRequirementFields-CZvuFZ4p.js";var d,f,p,m,h,g;e((()=>{r(),a(),d=t(n(),1),l(),f=i(),p={title:`Governance/SetManagedAccessRequirementFields`,component:u,render:function(e){let[t,n]=(0,d.useState)(!1),r=(0,d.useRef)(null);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(s,{onClick:()=>{n(!0),r.current?.save()},variant:`contained`,disabled:t,children:`Save AR`}),(0,f.jsx)(c,{sx:{mx:`auto`,p:`44px`,maxWidth:`750px`},children:(0,f.jsx)(u,{...e,ref:r,onSave:()=>n(!1),onError:()=>n(!1)})})]})}},m={args:{accessRequirementId:o.id.toString()},parameters:{stack:`mock`}},h={args:{accessRequirementId:`9602704`},parameters:{stack:`development`}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: mockManagedACTAccessRequirement.id.toString()
  },
  parameters: {
    stack: 'mock'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: '9602704'
  },
  parameters: {
    stack: 'development'
  }
}`,...h.parameters?.docs?.source}}},g=[`MockDemo`,`DevDemo`]}))();export{h as DevDemo,m as MockDemo,g as __namedExportsOrder,p as default};