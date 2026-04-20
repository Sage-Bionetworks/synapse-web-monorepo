import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-sZrYZ6Wp.js";import{A as i}from"./AccessRequirementAclEditor-0o8oMF5p.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-FRzdfuUo.js";import"./index-DHfNFGWR.js";import"./_baseOrderBy-Cj6R3fxo.js";import"./_baseIteratee-BL55nfgn.js";import"./_baseMap-BOgugKtI.js";import"./_baseEach-BReJ2H88.js";import"./useInfiniteQuery-C5HUZHaI.js";import"./AclEditor-D8bZtbRY.js";import"./UserSearchBox-DCLQ4kXf.js";import"./useDebouncedEffect-BvtZHxiB.js";import"./UserBadge-Dg-mhIDf.js";import"./useUserBundle-Sq4CKI0B.js";import"./queryOptions-C9woPjwX.js";import"./SkeletonTable-ChIFdfhg.js";import"./MenuItem-2yGPkNWm.js";import"./Card-wFiE_sMv.js";import"./Chip-BvOGwdWK.js";import"./UserOrTeamBadge-DwA4RTdg.js";import"./TeamBadge-BNDWNsA5.js";import"./Autocomplete-oEmViLzX.js";import"./usePreviousProps-zdMDBRmY.js";import"./SkeletonButton--UCUv7uI.js";import"./SkeletonInlineBlock-RlErow6J.js";import"./SkeletonParagraph-QSdi-JVA.js";import"./IconSvgButton-Dti6Zdgr.js";import"./FormControlLabel-DawJBkuM.js";import"./Checkbox-LRYr4g4U.js";import"./SwitchBase-W3Oi4NaW.js";import"./useUpdateAcl-BR1V2lgw.js";const z={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const J=["MockDemoExistingAcl","MockDemoNoExistingAcl","DevDemo"];export{s as DevDemo,r as MockDemoExistingAcl,t as MockDemoNoExistingAcl,J as __namedExportsOrder,z as default};
