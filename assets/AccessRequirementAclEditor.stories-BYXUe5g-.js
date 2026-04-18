import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-BFoBHJbY.js";import{A as i}from"./AccessRequirementAclEditor-DmxznO3b.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BtRiHSUy.js";import"./index-CIW1_OvL.js";import"./_baseOrderBy-r5YVf0a0.js";import"./_baseIteratee-B7mx-Nnp.js";import"./_baseMap-BdAxBLP1.js";import"./_baseEach-Ct7kGFnH.js";import"./useInfiniteQuery-COrQrVed.js";import"./AclEditor-CqBwzCON.js";import"./UserSearchBox-CNPKvi4x.js";import"./useDebouncedEffect-C1CNfVQY.js";import"./UserBadge-B3b4GgS8.js";import"./useUserBundle-DpjLlelW.js";import"./queryOptions-C9woPjwX.js";import"./SkeletonTable-DpdP1ZU-.js";import"./MenuItem-BjmuKOgF.js";import"./Card-CxnVE_mX.js";import"./Chip-nCILZLDf.js";import"./UserOrTeamBadge-Bttfq-If.js";import"./TeamBadge-D-kXmpwb.js";import"./Autocomplete-CijFYWna.js";import"./usePreviousProps-wXzT0qgu.js";import"./SkeletonButton-RWaImhZL.js";import"./SkeletonInlineBlock-BH9IFr_J.js";import"./SkeletonParagraph-CxOMNOR8.js";import"./IconSvgButton-fr7j-KYR.js";import"./FormControlLabel-D6wGKDYf.js";import"./Checkbox-DTqXBUmS.js";import"./SwitchBase-B0zHafXA.js";import"./useUpdateAcl-DKWii10-.js";const z={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
