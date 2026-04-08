import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-CtEx53-_.js";import{A as i}from"./AccessRequirementAclEditor-C6FWQz6W.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements--6VqrKGB.js";import"./index-rzZ2fsR5.js";import"./_baseOrderBy-BWOk7gZa.js";import"./_baseIteratee-DFplgjax.js";import"./_baseMap-CjZW9z3J.js";import"./_baseEach-HWQ9n9Hl.js";import"./useInfiniteQuery-Btk7RS4S.js";import"./AclEditor-BI37VRty.js";import"./UserSearchBox-CCxUf5Ve.js";import"./useDebouncedEffect-B_oSl5Sa.js";import"./UserBadge-DEyjEyEt.js";import"./useUserBundle-CU45jpjR.js";import"./SkeletonTable-DXr3KoSK.js";import"./MenuItem-FhFL09-C.js";import"./Card-CEnckPzK.js";import"./Chip-DZZXMgyG.js";import"./UserOrTeamBadge-2XRFTVu7.js";import"./TeamBadge-0I4uK5gl.js";import"./Autocomplete-CgP-x_Uf.js";import"./usePreviousProps-BB8cbwq6.js";import"./SkeletonButton-BxJCEkFM.js";import"./SkeletonInlineBlock-CUTClj5h.js";import"./SkeletonParagraph-B7Iue5Hi.js";import"./IconSvgButton-tr_hs-mZ.js";import"./FormControlLabel-CkOhorz7.js";import"./Checkbox-OtBfanQo.js";import"./SwitchBase-BK1TFQJS.js";import"./useUpdateAcl-Cq0wh9NF.js";const y={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
