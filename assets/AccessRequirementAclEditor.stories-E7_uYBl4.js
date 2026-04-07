import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-p1uXGzN2.js";import{A as i}from"./AccessRequirementAclEditor-C7Qit25G.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CWIpC9-Y.js";import"./index-B5EXqrid.js";import"./_baseOrderBy-Dmq-bvsO.js";import"./_baseIteratee-CIctm2fK.js";import"./_baseMap-CyND8cEz.js";import"./_baseEach-BJaCKh2_.js";import"./useInfiniteQuery-DTskVG3G.js";import"./AclEditor-CylmefhY.js";import"./UserSearchBox-CK4kOgWE.js";import"./useDebouncedEffect-Bc1BBC9L.js";import"./UserBadge-K3qD0Tmi.js";import"./useUserBundle-DMNSYcHB.js";import"./SkeletonTable-DxscU1yp.js";import"./MenuItem-CvsWYU-W.js";import"./Card-DhYE1SZe.js";import"./Chip-D-yl_WD6.js";import"./UserOrTeamBadge-CnBNkKAD.js";import"./TeamBadge-BOnbPe8U.js";import"./Autocomplete-DDVyrGPS.js";import"./usePreviousProps-DkgZ2N9x.js";import"./SkeletonButton-DFboq54i.js";import"./SkeletonInlineBlock-Bg4QuJBO.js";import"./SkeletonParagraph-D9GGG1Tt.js";import"./IconSvgButton-CEoGRdl6.js";import"./FormControlLabel-BR7dDpyV.js";import"./Checkbox-Dr9iAAR2.js";import"./SwitchBase-CaT_nPZV.js";import"./useUpdateAcl-DLwZkMjo.js";const y={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
