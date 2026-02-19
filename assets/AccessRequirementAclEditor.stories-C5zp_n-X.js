import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-C_dryyJN.js";import{A as i}from"./AccessRequirementAclEditor-CFBmDyzw.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-VK3UcgxM.js";import"./index-ClzeWg2J.js";import"./_baseOrderBy-DMrrzLD7.js";import"./_baseIteratee-BWtFRFDt.js";import"./_baseMap-BLNeiwE3.js";import"./_baseEach-DAcOskvX.js";import"./useQueries-CV3SItnz.js";import"./useInfiniteQuery-CNeRYV1j.js";import"./AclEditor-CviO2GbY.js";import"./UserSearchBoxV2-CYh84hpw.js";import"./useDebouncedEffect-BTqYOr7X.js";import"./use-deep-compare-effect.esm-OAQm12oT.js";import"./uniq-Bo6-IDOO.js";import"./without-CTyW5iZu.js";import"./UserBadge-DyxfWgNS.js";import"./useUserBundle-QtzgNDHJ.js";import"./useSuspenseQuery-DbrtCnso.js";import"./SkeletonTable-DtAMx_Lr.js";import"./MenuItem-DGJNpis4.js";import"./Card-CVLPxeE5.js";import"./Chip-0QWq_ruD.js";import"./Select-aab027f3.esm-B2RRpnPW.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-CCotwU-K.js";import"./TeamBadge-xEz4sH1j.js";import"./SkeletonButton-DhVxQIGw.js";import"./SkeletonInlineBlock-DprLb70P.js";import"./SkeletonParagraph-Me_ye6-N.js";import"./IconSvgButton-Dj7wfOyx.js";import"./FormControlLabel-COE-xUzF.js";import"./Checkbox-BbczdEJd.js";import"./SwitchBase-CP_0pcQR.js";import"./useUpdateAcl-CeQmCzCa.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const se=["MockDemoExistingAcl","MockDemoNoExistingAcl","DevDemo"];export{t as DevDemo,r as MockDemoExistingAcl,s as MockDemoNoExistingAcl,se as __namedExportsOrder,re as default};
