import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-Bq2Ob2aK.js";import{A as i}from"./AccessRequirementAclEditor-BHWC478d.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-Cwq9BJw7.js";import"./index-BURFaEcg.js";import"./_baseOrderBy-DJEDLbih.js";import"./_baseIteratee-CN9fj1bw.js";import"./_baseMap-D4oR6jyW.js";import"./_baseEach-BB0shV65.js";import"./useInfiniteQuery-Ds4aQTI9.js";import"./AclEditor-BNzwcCEA.js";import"./UserSearchBox-DIGANnd0.js";import"./useDebouncedEffect-C8Aqitb2.js";import"./UserBadge-ByqebRvh.js";import"./useUserBundle-BEHCcl1q.js";import"./queryOptions-C9woPjwX.js";import"./SkeletonTable-BBXhhxxV.js";import"./MenuItem-QKEL9EzE.js";import"./Card-CpWT9_D-.js";import"./Chip-6y5YmXDt.js";import"./UserOrTeamBadge-B7wn485n.js";import"./TeamBadge-NocTKWyL.js";import"./Autocomplete-09y2S2VY.js";import"./usePreviousProps-DZM5n9-N.js";import"./SkeletonButton-BGK0wFQC.js";import"./SkeletonInlineBlock-CmYjNg7h.js";import"./SkeletonParagraph-LdyaQqI_.js";import"./IconSvgButton-7lv15S8S.js";import"./FormControlLabel-HJWDlDWs.js";import"./Checkbox-1GF_U2bt.js";import"./SwitchBase-C5-igteL.js";import"./useUpdateAcl-CIQxQyuv.js";const z={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
