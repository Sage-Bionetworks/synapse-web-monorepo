import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-DjCs0N9T.js";import{A as i}from"./AccessRequirementAclEditor-sPdhdrww.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-rMfVBDt3.js";import"./index-Cwlx-Oul.js";import"./_baseOrderBy-DVAlmebq.js";import"./_baseIteratee-BxSzENNZ.js";import"./_baseMap-BXvVAQO1.js";import"./_baseEach-DCQjENFm.js";import"./useInfiniteQuery-D7nav_iQ.js";import"./AclEditor-2qZFpWfc.js";import"./UserSearchBox-DUBv2mqO.js";import"./useDebouncedEffect-COmGLK0u.js";import"./UserBadge-BDehV7Zq.js";import"./useUserBundle-Bj8x-K_h.js";import"./SkeletonTable-C6E9liFP.js";import"./MenuItem-DkdGwV6_.js";import"./Card-CYz3fxIC.js";import"./Chip-DtYkZqnx.js";import"./UserOrTeamBadge-WK5CmVHD.js";import"./TeamBadge-BxjCEMls.js";import"./Autocomplete-BWEgSIuX.js";import"./usePreviousProps-BWpwLj3U.js";import"./SkeletonButton-ra5Cjzqp.js";import"./SkeletonInlineBlock-BcoZAk2Q.js";import"./SkeletonParagraph-COuF-1cd.js";import"./IconSvgButton-BmN8kKr0.js";import"./FormControlLabel-DzJTgcEX.js";import"./Checkbox-s3F0M9zi.js";import"./SwitchBase-VN_kzZ6i.js";import"./useUpdateAcl-O_SlrhZB.js";const y={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: MOCK_MANAGED_ACCESS_REQUIREMENT_ACL.id
  },
  parameters: {
    stack: 'mock'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: String(MOCK_ACCESS_REQUIREMENT_WITHOUT_ACL_ID)
  },
  parameters: {
    stack: 'mock'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: '9602671'
  },
  parameters: {
    stack: 'development'
  }
}`,...s.parameters?.docs?.source}}};const z=["MockDemoExistingAcl","MockDemoNoExistingAcl","DevDemo"];export{s as DevDemo,r as MockDemoExistingAcl,t as MockDemoNoExistingAcl,z as __namedExportsOrder,y as default};
