import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-DvDPVyr3.js";import{A as i}from"./AccessRequirementAclEditor-C7Q8z5OA.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DtrRejXJ.js";import"./index-Cd-T-abm.js";import"./_baseOrderBy-BfEs3q_n.js";import"./_baseIteratee-DZhuazRW.js";import"./_baseMap-DyGl9fGh.js";import"./_baseEach-DlWazupd.js";import"./useInfiniteQuery-DWj8q4Ou.js";import"./AclEditor-D-NAr0VP.js";import"./UserSearchBox-BwdbHC8B.js";import"./useDebouncedEffect-JywINAjS.js";import"./UserBadge-BlKDuGTK.js";import"./useUserBundle--EY3PjCb.js";import"./SkeletonTable-0fE1v7Jp.js";import"./MenuItem-Dbhxy3EU.js";import"./Card-B9Wv_sea.js";import"./Chip-YSiJYC5a.js";import"./UserOrTeamBadge-BCBJ34Cp.js";import"./TeamBadge-Dc875krb.js";import"./Autocomplete-pax_CLk5.js";import"./usePreviousProps-BDKffoJB.js";import"./SkeletonButton-ChNWGaeP.js";import"./SkeletonInlineBlock-DTOZhiyP.js";import"./SkeletonParagraph-C4mex8S5.js";import"./IconSvgButton-B4JbGuRu.js";import"./FormControlLabel-D9Jvuq4Y.js";import"./Checkbox-F9Ku5hpR.js";import"./SwitchBase-DnKqddam.js";import"./useUpdateAcl-BQigBL7b.js";const y={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
