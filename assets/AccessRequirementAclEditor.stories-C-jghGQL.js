import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-TELIK5St.js";import{A as i}from"./AccessRequirementAclEditor-BlgqDTpU.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DV-HAFjA.js";import"./index-DhCG1PUT.js";import"./_baseOrderBy-CMcDCKmR.js";import"./_baseIteratee-Bm_ygrTG.js";import"./_baseMap-BW9Pah7Q.js";import"./_baseEach-1R1uGBUK.js";import"./useInfiniteQuery-CsPobzOo.js";import"./AclEditor-DKbfpDko.js";import"./UserSearchBox-BVcKtRCE.js";import"./useDebouncedEffect-CPWZ7rlr.js";import"./useUserGroupHeader-1WZ7S21v.js";import"./UserOrTeamBadge-oG2mKjgS.js";import"./TeamBadge-DBsGqDpq.js";import"./UserBadge-BL2bxi6y.js";import"./useUserBundle-DCscJCIX.js";import"./SkeletonTable-BK56JWcz.js";import"./MenuItem-CZMXI3mZ.js";import"./Card-CdQC2hYH.js";import"./Chip-ChN1vAl3.js";import"./Autocomplete-DNrg8QTw.js";import"./usePreviousProps-Dq07bXWo.js";import"./SkeletonButton-Ch0HQYiA.js";import"./SkeletonInlineBlock-DmvsIilu.js";import"./SkeletonParagraph-CsdCh0c6.js";import"./IconSvgButton-Ca9gcONo.js";import"./FormControlLabel-DkZ0xtIe.js";import"./Checkbox-DmDIVSeI.js";import"./SwitchBase-C4A-3PON.js";import"./useUpdateAcl-CqjAtr0W.js";const z={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
