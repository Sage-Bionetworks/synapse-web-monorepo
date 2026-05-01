import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ab as n,Ct as r,Mv as i,St as a,bt as o,bx as s,jS as c,xt as l,zS as u}from"./iframe-Ds5PMKR1.js";import{n as d,t as f}from"./AccessRequirementAclEditor-CSX72RfA.js";var p,m,h,g,_,v,y;e((()=>{l(),r(),i(),p=t(u(),1),d(),m=c(),h={title:`Governance/AccessRequirementAclEditor`,component:f,render:function(e){let[t,r]=(0,p.useState)(!1),i=(0,p.useRef)(null);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(n,{onClick:()=>{r(!0),i.current?.save()},variant:`contained`,disabled:t,children:`Save ACL`}),(0,m.jsx)(s,{sx:{mx:`auto`,p:`44px`,maxWidth:`750px`},children:(0,m.jsx)(f,{...e,ref:i,onSaveComplete:()=>r(!1)})})]})}},g={args:{accessRequirementId:o.id},parameters:{stack:`mock`}},_={args:{accessRequirementId:String(a)},parameters:{stack:`mock`}},v={args:{accessRequirementId:`9602671`},parameters:{stack:`development`}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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