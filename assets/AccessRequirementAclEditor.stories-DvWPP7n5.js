import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-D5_h0PF9.js";import{A as i}from"./AccessRequirementAclEditor-CpuLU1tn.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DaJirk2U.js";import"./index-DihqrFgA.js";import"./_baseOrderBy-uRU5TLQw.js";import"./_baseIteratee-B05hfmCH.js";import"./_baseMap-BWK9b449.js";import"./_baseEach-BCgxkOtg.js";import"./useQueries-C4PyX30W.js";import"./useInfiniteQuery-BmUArCE3.js";import"./AclEditor-B3rLtxEp.js";import"./UserSearchBoxV2-DRbJNTln.js";import"./useDebouncedEffect-B5TiOKSm.js";import"./use-deep-compare-effect.esm-Dj37jx1J.js";import"./uniq-CTAZwoHC.js";import"./without-DxLZpda3.js";import"./UserBadge-yiMBLQpE.js";import"./useUserBundle-29JhTBEU.js";import"./useSuspenseQuery-BZOc09Ao.js";import"./SkeletonTable-C0hupK0t.js";import"./MenuItem-CyRowmJi.js";import"./Card-LsjfYv2Y.js";import"./Chip-CBZ7YR6P.js";import"./Select-aab027f3.esm-WxpNwhrS.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-Bjt6Iu6F.js";import"./TeamBadge-DuR7sYdc.js";import"./SkeletonButton-CnXRIIps.js";import"./SkeletonInlineBlock-DCpTDBDa.js";import"./SkeletonParagraph-C3Ev59KW.js";import"./IconSvgButton-CQW5OwRu.js";import"./FormControlLabel-Bjfctvt0.js";import"./Checkbox-BycybiCS.js";import"./SwitchBase-CdSXRcwt.js";import"./useUpdateAcl-ydEMsV9a.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
