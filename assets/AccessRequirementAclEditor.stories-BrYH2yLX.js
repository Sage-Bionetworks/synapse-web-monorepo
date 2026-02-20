import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-CKbLOTsP.js";import{A as i}from"./AccessRequirementAclEditor-OqLJJDfb.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-D9J1E6HT.js";import"./index-Dm4n4t0Y.js";import"./_baseOrderBy-ha6mZJd5.js";import"./_baseIteratee-DG3kTKCt.js";import"./_baseMap-BlvC3fFz.js";import"./_baseEach-BW2NyVLM.js";import"./useQueries-Crmwrrll.js";import"./useInfiniteQuery-3dT2qg-d.js";import"./AclEditor-Ca9PXxLI.js";import"./useRealmPrincipals-Dinn5eL5.js";import"./UserSearchBoxV2-Cgh3B0TX.js";import"./useDebouncedEffect-CPNU1Huu.js";import"./use-deep-compare-effect.esm-SK-d_1QT.js";import"./uniq--fJ4fBkP.js";import"./without-Bjp07HWP.js";import"./UserBadge-BUkR_2ZS.js";import"./useUserBundle-iM-7ZdVq.js";import"./useSuspenseQuery-uKlZGoJr.js";import"./SkeletonTable-DmfimDzq.js";import"./MenuItem-BEEnz0ed.js";import"./Card-DPRsPfvm.js";import"./Chip-CxgxE7T3.js";import"./Select-aab027f3.esm-ClEaP-mv.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-BpnM_yJD.js";import"./TeamBadge-Cjd-4bK2.js";import"./SkeletonButton-8Vj3L_5j.js";import"./SkeletonInlineBlock-D5PXFjGc.js";import"./SkeletonParagraph-Kah2Bnvf.js";import"./IconSvgButton--EIoEIJ_.js";import"./FormControlLabel-CcttKXCu.js";import"./Checkbox-7g56acu5.js";import"./SwitchBase-XdBe4z01.js";import"./useUpdateAcl-DRdN3rkg.js";const se={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
