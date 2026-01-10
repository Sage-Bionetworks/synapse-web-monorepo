import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-BulltPlS.js";import{A as i}from"./AccessRequirementAclEditor-DZ-2_RNy.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CaLt4H2F.js";import"./index-cwz30I0r.js";import"./_baseOrderBy-BF5JbbBu.js";import"./_baseIteratee-ypnnxg3G.js";import"./_baseMap-D-3mppFr.js";import"./_baseEach-rWqQ2DGz.js";import"./useQueries-CWxE_GlV.js";import"./useInfiniteQuery-pUjrcR8S.js";import"./AclEditor-DXH_yT9Z.js";import"./UserSearchBoxV2-CS_BjkRI.js";import"./useDebouncedEffect-mNoEBO6R.js";import"./use-deep-compare-effect.esm-CRzzaWpz.js";import"./uniq-JbDHZws-.js";import"./without-BN0sdvCW.js";import"./UserBadge-D_SsYAs-.js";import"./useUserBundle-CcfPRMN_.js";import"./useSuspenseQuery-BZkq8k4a.js";import"./SkeletonTable-BgsdlaOw.js";import"./MenuItem-Bei-3O4r.js";import"./Card-D0SjsU8p.js";import"./Chip-CTw5NN0f.js";import"./Select-aab027f3.esm-pPDAZiRC.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-C9N5zDOT.js";import"./TeamBadge-D03ZMP3U.js";import"./SkeletonButton-DU72c3M6.js";import"./SkeletonInlineBlock-BXxRvNES.js";import"./SkeletonParagraph-DH5smUkj.js";import"./IconSvgButton-4-bIhNrS.js";import"./FormControlLabel-Bk9p_aTk.js";import"./Checkbox-BglXU7WT.js";import"./SwitchBase-h1Twos_B.js";import"./useUpdateAcl-l61JbbY4.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
