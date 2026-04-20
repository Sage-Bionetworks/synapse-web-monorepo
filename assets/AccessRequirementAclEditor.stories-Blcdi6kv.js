import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-BnuiMoX_.js";import{A as i}from"./AccessRequirementAclEditor-C_DBu4JS.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-mKJQ9X-A.js";import"./index-Jll9ObM-.js";import"./_baseOrderBy-DRT_m02G.js";import"./_baseIteratee-CAfW7TLG.js";import"./_baseMap-P5cfwgYq.js";import"./_baseEach-BqK8_kug.js";import"./useInfiniteQuery-BmLi_mNn.js";import"./AclEditor-BIvBRaAJ.js";import"./UserSearchBox-kyeiexqJ.js";import"./useDebouncedEffect-p58N9oTf.js";import"./UserBadge-C04__7Q8.js";import"./useUserBundle-MQOAsYfr.js";import"./queryOptions-C9woPjwX.js";import"./SkeletonTable-B_UPgtXl.js";import"./MenuItem-CJFsHkvO.js";import"./Card-C1dzVdqQ.js";import"./Chip-iaML2TUf.js";import"./UserOrTeamBadge-DeUK1hGM.js";import"./TeamBadge-U5E-aD0J.js";import"./Autocomplete-DDE1rP2z.js";import"./usePreviousProps-DWT1NPvn.js";import"./SkeletonButton-CgoQvaBi.js";import"./SkeletonInlineBlock-DxCr7zGd.js";import"./SkeletonParagraph-BQZp8fCk.js";import"./IconSvgButton-eEylnJlt.js";import"./FormControlLabel-DGDrtWSS.js";import"./Checkbox-DbZ9UnIo.js";import"./SwitchBase-FDevkp1d.js";import"./useUpdateAcl-B3fmFTTz.js";const z={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
