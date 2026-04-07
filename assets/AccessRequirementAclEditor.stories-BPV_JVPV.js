import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-CA42Mn9q.js";import{A as i}from"./AccessRequirementAclEditor-CDd9NMN1.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-gnBjqTyt.js";import"./index-D60w0tLm.js";import"./_baseOrderBy-d4nLeMvZ.js";import"./_baseIteratee-Bs1FcXpk.js";import"./_baseMap-2hGsRQwM.js";import"./_baseEach-C5i0FLu_.js";import"./useInfiniteQuery-uipgRME6.js";import"./AclEditor-pUIDyQ_5.js";import"./UserSearchBox-Cfies7rm.js";import"./useDebouncedEffect-DYtqXnBy.js";import"./UserBadge-BKVFzTvo.js";import"./useUserBundle-BhbwoHT_.js";import"./SkeletonTable--UszwM1d.js";import"./MenuItem-BtHpeBI3.js";import"./Card-CaU8zpDF.js";import"./Chip-CtbWqGj5.js";import"./UserOrTeamBadge-BKHSk8CN.js";import"./TeamBadge-BoejoXMi.js";import"./Autocomplete-CgHWwNDH.js";import"./usePreviousProps-B1BOdqtH.js";import"./SkeletonButton-BBbLk1YB.js";import"./SkeletonInlineBlock-COfhdDsT.js";import"./SkeletonParagraph-CDHIPMz9.js";import"./IconSvgButton-D4r_VC0z.js";import"./FormControlLabel-DyBRYtGv.js";import"./Checkbox-DGCzgHVy.js";import"./SwitchBase-COFpZMHN.js";import"./useUpdateAcl-C20MHdUx.js";const y={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
