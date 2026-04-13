import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-BFtw_QUH.js";import{A as i}from"./AccessRequirementAclEditor-aCD5THbh.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BTsdKkft.js";import"./index-CFaVGWZ0.js";import"./_baseOrderBy-DcKYylt1.js";import"./_baseIteratee-CJVbWW0K.js";import"./_baseMap-BFNisPHr.js";import"./_baseEach-B9RBeIUP.js";import"./useInfiniteQuery-D-5eLx7Z.js";import"./AclEditor-B-TpytUi.js";import"./UserSearchBox-Cfjsj9wJ.js";import"./useDebouncedEffect-B7g7aQPp.js";import"./useUserGroupHeader-BQ7DrkF-.js";import"./UserOrTeamBadge-DhMwyPLc.js";import"./TeamBadge-B7N-YTMh.js";import"./UserBadge-Bh5lHfno.js";import"./useUserBundle-CUqXhyvg.js";import"./SkeletonTable-CwH7xhuw.js";import"./MenuItem-BSH3FhSr.js";import"./Card-CxpAtWPZ.js";import"./Chip-CtpBh3N1.js";import"./Autocomplete-DkUQEECU.js";import"./usePreviousProps-DmrmMyQ5.js";import"./SkeletonButton-CsTw-ZPX.js";import"./SkeletonInlineBlock-BmmJQ24u.js";import"./SkeletonParagraph-DsZs81_F.js";import"./IconSvgButton-BQU2FrnX.js";import"./FormControlLabel-DZ2iiYCt.js";import"./Checkbox-BC1SCJw9.js";import"./SwitchBase-C1pJsVMO.js";import"./useUpdateAcl-B9CTnv2T.js";const z={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
