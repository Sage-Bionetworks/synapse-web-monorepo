import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-C9UTN7n5.js";import{A as i}from"./AccessRequirementAclEditor-e-vip7FL.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-3GKgLa2M.js";import"./index-C0fxb07w.js";import"./_baseOrderBy-wpc6i2AL.js";import"./_baseIteratee-C6RusqKP.js";import"./_baseMap-CwOwxQ_D.js";import"./_baseEach-CdgYGI7S.js";import"./useInfiniteQuery-DWfE7Y6F.js";import"./AclEditor-D6jUyN4n.js";import"./UserSearchBox-sm9LaiV-.js";import"./useDebouncedEffect-y-WAkDO4.js";import"./useUserGroupHeader-DBo-Weqm.js";import"./UserOrTeamBadge-BGrwALGA.js";import"./TeamBadge-BP__OOdm.js";import"./UserBadge-CKhduYdW.js";import"./useUserBundle-B2NBOQIN.js";import"./SkeletonTable-BS4xHemf.js";import"./MenuItem-CX39S6wD.js";import"./Card-l1x67oDf.js";import"./Chip-kWAD_96F.js";import"./Autocomplete-qFUnN2Zt.js";import"./usePreviousProps-CdqKSC2f.js";import"./SkeletonButton-DrgaJ-bm.js";import"./SkeletonInlineBlock-D-Jy1SSP.js";import"./SkeletonParagraph-C7pb8176.js";import"./IconSvgButton-DjcQMxn1.js";import"./FormControlLabel-DVTQJ-pq.js";import"./Checkbox-EGzeyNI9.js";import"./SwitchBase-CC_UmhM1.js";import"./useUpdateAcl-CHCvkfC3.js";const z={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
