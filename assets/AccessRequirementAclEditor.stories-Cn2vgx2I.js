import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-_xC4R-9l.js";import{A as i}from"./AccessRequirementAclEditor-DqdQTmZw.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements--8vwZ0GX.js";import"./index-CUKFaSIZ.js";import"./_baseOrderBy-DlaZ_3zZ.js";import"./_baseIteratee-qDJ48MbJ.js";import"./_baseMap-BwHlx4Pm.js";import"./_baseEach-BQPGiiEy.js";import"./useQueries-1X25ETRf.js";import"./useInfiniteQuery-_AZmyoIA.js";import"./AclEditor-BelL-EAQ.js";import"./UserSearchBoxV2-DlKv38uV.js";import"./useDebouncedEffect-CqFDVG9-.js";import"./use-deep-compare-effect.esm-DFXjhKOc.js";import"./uniq-CkffBx9u.js";import"./without-CElzWP5e.js";import"./UserBadge-D50lroBs.js";import"./useUserBundle-rH4zVLMU.js";import"./useSuspenseQuery-BY1RfPC9.js";import"./SkeletonTable-8K81cLuT.js";import"./MenuItem-DRoOm8dg.js";import"./Card-Dc_-EwgO.js";import"./Chip-m593CfK4.js";import"./Select-aab027f3.esm-BZ8jb27s.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-BlH4nkjS.js";import"./TeamBadge-CUaQHUss.js";import"./SkeletonButton-DYUdhb7U.js";import"./SkeletonInlineBlock-BJckmeYC.js";import"./SkeletonParagraph-BJTsWPfq.js";import"./IconSvgButton-BmoQnaZi.js";import"./FormControlLabel-p0SPpstb.js";import"./Checkbox-CVG3iDMB.js";import"./SwitchBase-CbqU8wJI.js";import"./useUpdateAcl-7oPVnQ0Z.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
