import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-but96Lfh.js";import{A as i}from"./AccessRequirementAclEditor-B7Zov9fr.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BK3dspsn.js";import"./index-DM_ZQyY8.js";import"./_baseOrderBy-BZunSDna.js";import"./_baseIteratee-VsZNO4js.js";import"./_baseMap-DDkvOKK5.js";import"./_baseEach-BygoLUG-.js";import"./useQueries-AfBCkaaZ.js";import"./useInfiniteQuery-Dpy_V3ju.js";import"./AclEditor-D093cxCC.js";import"./useRealmPrincipals-aJ_zfM8u.js";import"./UserSearchBoxV2-DvrLHygv.js";import"./useDebouncedEffect-C-C6j2lD.js";import"./use-deep-compare-effect.esm-B7xZFsRA.js";import"./uniq-HKxiDTCm.js";import"./without-D_bR3dSf.js";import"./UserBadge-C7dtc7se.js";import"./useUserBundle-TiYb8Qhd.js";import"./useSuspenseQuery-HIpnOhi4.js";import"./SkeletonTable-CiaLgFbO.js";import"./MenuItem-BvQCkNiO.js";import"./Card-Dg122fQn.js";import"./Chip-DMb_4koX.js";import"./Select-aab027f3.esm-1eDOglUl.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-DHSO04e4.js";import"./TeamBadge-B17fGlRB.js";import"./SkeletonButton-XqPM6IMR.js";import"./SkeletonInlineBlock-CsI4ERDm.js";import"./SkeletonParagraph-k5_8qyuU.js";import"./IconSvgButton-79ZZHXiu.js";import"./FormControlLabel-DkicdPWo.js";import"./Checkbox-C-oCYhji.js";import"./SwitchBase-CkGWbtOJ.js";import"./useUpdateAcl-BQUB0v1C.js";const se={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: MOCK_MANAGED_ACCESS_REQUIREMENT_ACL.id
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), getAllAccessRequirementAclHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: String(MOCK_ACCESS_REQUIREMENT_WITHOUT_ACL_ID)
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), getAllAccessRequirementAclHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: '9602671'
  },
  parameters: {
    stack: 'development'
  }
}`,...t.parameters?.docs?.source}}};const te=["MockDemoExistingAcl","MockDemoNoExistingAcl","DevDemo"];export{t as DevDemo,r as MockDemoExistingAcl,s as MockDemoNoExistingAcl,te as __namedExportsOrder,se as default};
