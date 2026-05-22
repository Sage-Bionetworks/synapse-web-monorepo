import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{$S as n,Dt as r,Et as i,GS as a,Kv as o,Ot as s,Px as c,Tt as l,Wb as u}from"./iframe-B_TqoETD.js";import{n as d,t as f}from"./AccessRequirementAclEditor-CQxFvjFo.js";var p,m,h,g,_,v,y;e((()=>{i(),s(),o(),p=t(n(),1),d(),m=a(),h={title:`Governance/AccessRequirementAclEditor`,component:f,render:function(e){let[t,n]=(0,p.useState)(!1),r=(0,p.useRef)(null);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(u,{onClick:()=>{n(!0),r.current?.save()},variant:`contained`,disabled:t,children:`Save ACL`}),(0,m.jsx)(c,{sx:{mx:`auto`,p:`44px`,maxWidth:`750px`},children:(0,m.jsx)(f,{...e,ref:r,onSaveComplete:()=>n(!1)})})]})}},g={args:{accessRequirementId:l.id},parameters:{stack:`mock`}},_={args:{accessRequirementId:String(r)},parameters:{stack:`mock`}},v={args:{accessRequirementId:`9602671`},parameters:{stack:`development`}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: MOCK_MANAGED_ACCESS_REQUIREMENT_ACL.id
  },
  parameters: {
    stack: 'mock'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: String(MOCK_ACCESS_REQUIREMENT_WITHOUT_ACL_ID)
  },
  parameters: {
    stack: 'mock'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: '9602671'
  },
  parameters: {
    stack: 'development'
  }
}`,...v.parameters?.docs?.source}}},y=[`MockDemoExistingAcl`,`MockDemoNoExistingAcl`,`DevDemo`]}))();export{v as DevDemo,g as MockDemoExistingAcl,_ as MockDemoNoExistingAcl,y as __namedExportsOrder,h as default};