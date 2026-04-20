import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-BuKUHwYF.js";import{A as i}from"./AccessRequirementAclEditor-CmV0J40F.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-TuE0mxTx.js";import"./index-BkSKqIFv.js";import"./_baseOrderBy-CDVPIvfu.js";import"./_baseIteratee-CXSP4y8a.js";import"./_baseMap-C0fo_1yR.js";import"./_baseEach-B9FQUCG9.js";import"./useInfiniteQuery-BrWu3fho.js";import"./AclEditor-Bv2RfxNX.js";import"./UserSearchBox-DsRonRWG.js";import"./useDebouncedEffect-BrSgUp4A.js";import"./UserBadge-DwsW3g_K.js";import"./useUserBundle-DkD9QSSJ.js";import"./queryOptions-C9woPjwX.js";import"./SkeletonTable-Ca_8DlU1.js";import"./MenuItem-DmEYYO79.js";import"./Card-B6TgluZN.js";import"./Chip-D3Gu_L5i.js";import"./UserOrTeamBadge-DrCP2AS5.js";import"./TeamBadge-CKTLM0zl.js";import"./Autocomplete-DlWKEogE.js";import"./usePreviousProps-DfueR3FT.js";import"./SkeletonButton-DoOKAwEq.js";import"./SkeletonInlineBlock-Cs7usZ_r.js";import"./SkeletonParagraph-CA2_vLea.js";import"./IconSvgButton-B2r195xv.js";import"./FormControlLabel-BQKBoEMA.js";import"./Checkbox-rNgXiDJm.js";import"./SwitchBase-Cq5wm8XC.js";import"./useUpdateAcl-C9NvszjT.js";const z={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
