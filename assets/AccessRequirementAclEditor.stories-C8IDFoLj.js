import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-B_8Pbtyy.js";import{A as i}from"./AccessRequirementAclEditor-D53b6PuQ.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BEEQuE0q.js";import"./index-C8E9GuLP.js";import"./_baseOrderBy-Bv67Ui5n.js";import"./_baseIteratee-DMyCki3z.js";import"./_baseMap-CVbt9Ewa.js";import"./_baseEach-23nGJqXf.js";import"./useInfiniteQuery-EmhrFgDQ.js";import"./AclEditor-BUgXD8hy.js";import"./UserSearchBox-CVyzpmCf.js";import"./useDebouncedEffect-DWn1Wu-d.js";import"./UserBadge-C_HLmkM9.js";import"./useUserBundle-AYZLZe6H.js";import"./queryOptions-C9woPjwX.js";import"./SkeletonTable-DZYgPiW7.js";import"./MenuItem-B5j_dwt3.js";import"./Card-TCSc9gJb.js";import"./Chip-CrOe6yxn.js";import"./UserOrTeamBadge-ZWxcaZuh.js";import"./TeamBadge-nlQ59IUz.js";import"./Autocomplete-BwejXa9T.js";import"./usePreviousProps-Bh7W6lyD.js";import"./SkeletonButton-C2boYaKt.js";import"./SkeletonInlineBlock-ChbxFlxk.js";import"./SkeletonParagraph-CanILnI9.js";import"./IconSvgButton-Ba6ddEc-.js";import"./FormControlLabel-Dkt0Kpn_.js";import"./Checkbox-DCx96Ow5.js";import"./SwitchBase-CoXKjNiI.js";import"./useUpdateAcl-iU3yD4mo.js";const z={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
