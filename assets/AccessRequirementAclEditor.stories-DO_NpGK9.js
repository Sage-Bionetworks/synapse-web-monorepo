import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-C0jSrR5c.js";import{A as i}from"./AccessRequirementAclEditor-7X0FnrBo.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-Bd_mtqDV.js";import"./index-BLHQs1Hh.js";import"./_baseOrderBy-Bupo46Rb.js";import"./_baseIteratee-v5Xqf9Y2.js";import"./_baseMap-9KwVBg8u.js";import"./_baseEach-C3bTbgFj.js";import"./useQueries-BEt-pfoU.js";import"./useInfiniteQuery-Dm7YsOQW.js";import"./AclEditor-CKTCn2fg.js";import"./useRealmPrincipals-DCjA1VK_.js";import"./UserSearchBoxV2-DrC_mHnc.js";import"./useDebouncedEffect-DF1lZil-.js";import"./use-deep-compare-effect.esm-DLipLYZw.js";import"./uniq-DihkiDja.js";import"./without-Dj1Xsuug.js";import"./UserBadge-BYdkkxA3.js";import"./useUserBundle-OwQNCmCR.js";import"./useSuspenseQuery-CHrCTvKw.js";import"./SkeletonTable-83ELoSn8.js";import"./MenuItem-f2MANGxO.js";import"./Card-DEA7Lujf.js";import"./Chip-DsSr72e_.js";import"./Select-aab027f3.esm-BmguvSFZ.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-et93hRQS.js";import"./TeamBadge-KKAfvp8_.js";import"./SkeletonButton-Da-HHa43.js";import"./SkeletonInlineBlock-kvwMQbuJ.js";import"./SkeletonParagraph-C_qcfR_9.js";import"./IconSvgButton-BLJ1om7m.js";import"./FormControlLabel-CSkgcZCy.js";import"./Checkbox-CJXQl7g0.js";import"./SwitchBase-Bbxsa0TU.js";import"./useUpdateAcl-CzaoozMW.js";const se={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
