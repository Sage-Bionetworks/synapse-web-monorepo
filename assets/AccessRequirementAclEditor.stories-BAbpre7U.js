import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-APvH4-EU.js";import{A as i}from"./AccessRequirementAclEditor-CY9OPF1Y.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-VgzOe8R1.js";import"./index-D47LyWhc.js";import"./_baseOrderBy-DjelCSDF.js";import"./_baseIteratee-BL2YfOvy.js";import"./_baseMap-CzrgHchl.js";import"./_baseEach-CY-VY-KP.js";import"./useQueries-oePch1EY.js";import"./useInfiniteQuery-D6M6aPtH.js";import"./AclEditor-YytfgJCA.js";import"./UserSearchBoxV2-DrZLvlqx.js";import"./useDebouncedEffect-DUN74djT.js";import"./use-deep-compare-effect.esm-BJrFYGUS.js";import"./uniq-BDoUxZmE.js";import"./without-CYwawT9W.js";import"./UserBadge-Crk5iR3C.js";import"./useUserBundle-DqlMHXaF.js";import"./useSuspenseQuery-BkKvG_I6.js";import"./SkeletonTable-DlsS5ryj.js";import"./MenuItem-C4atoZrr.js";import"./Card-Dl8RF_hG.js";import"./Chip-CQxp7Hzb.js";import"./Select-aab027f3.esm-B7pgFLrK.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-QDli3JAL.js";import"./TeamBadge-CUQetA2b.js";import"./SkeletonButton-DQaucWcO.js";import"./SkeletonInlineBlock-REk_WUt3.js";import"./SkeletonParagraph-Oi6HEV15.js";import"./IconSvgButton-C_42WHcx.js";import"./FormControlLabel-CkPBDtXz.js";import"./Checkbox-D2r4P1W3.js";import"./SwitchBase-D78Lly7L.js";import"./useUpdateAcl-DBN-DPmD.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
