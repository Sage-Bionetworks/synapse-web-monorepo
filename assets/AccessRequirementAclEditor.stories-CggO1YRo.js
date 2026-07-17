import{o as e,u as t}from"./preload-helper-CsHsquCd.js";import{t as n}from"./react-BXiJfEW5.js";import{An as r}from"./TextField-DshmLCH7.js";import{t as i}from"./jsx-runtime-l3w3GfrB.js";import{ln as a,t as o}from"./esm-CeuVXgHQ.js";import{i as s,t as c}from"./mockAccessRequirements-BmJzEkPX.js";import{Dt as l,Ot as u}from"./iframe-De9uwe33.js";import{n as d,t as f}from"./AccessRequirementAclEditor-C3VvuMA9.js";var p,m,h,g,_,v,y;e((()=>{u(),s(),o(),p=t(n(),1),d(),m=i(),h={title:`Governance/AccessRequirementAclEditor`,component:f,render:function(e){let[t,n]=(0,p.useState)(!1),i=(0,p.useRef)(null);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(a,{onClick:()=>{n(!0),i.current?.save()},variant:`contained`,disabled:t,children:`Save ACL`}),(0,m.jsx)(r,{sx:{mx:`auto`,p:`44px`,maxWidth:`750px`},children:(0,m.jsx)(f,{...e,ref:i,onSaveComplete:()=>n(!1)})})]})}},g={args:{accessRequirementId:l.id},parameters:{stack:`mock`}},_={args:{accessRequirementId:String(c)},parameters:{stack:`mock`}},v={args:{accessRequirementId:`9602671`},parameters:{stack:`development`}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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