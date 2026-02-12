import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-BYI6UvQX.js";import{A as i}from"./AccessRequirementAclEditor-CFFnxHyG.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BX7_OqtS.js";import"./index-CWsmnNqr.js";import"./_baseOrderBy-BgmnMWjZ.js";import"./_baseIteratee-pBFRPpfw.js";import"./_baseMap-DvfJE8ol.js";import"./_baseEach-ClZ52RoH.js";import"./useQueries-CWXoKjwZ.js";import"./useInfiniteQuery-BV081oyQ.js";import"./AclEditor-C7Ga7xFX.js";import"./UserSearchBoxV2-wYVOPsOh.js";import"./useDebouncedEffect-DHg96o3Z.js";import"./use-deep-compare-effect.esm-Da56MkFi.js";import"./uniq-DXRNdgIY.js";import"./without-0cEpkjKg.js";import"./UserBadge-C96yZvDg.js";import"./useUserBundle-Be9uEwgr.js";import"./useSuspenseQuery-CyhHWdVP.js";import"./SkeletonTable-D-cfGk8m.js";import"./MenuItem-x7kd2x5J.js";import"./Card-B1HzsQxk.js";import"./Chip-CzyNjUbD.js";import"./Select-aab027f3.esm-DrNh9WqI.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-L49Qd6kU.js";import"./TeamBadge-BROu8aQi.js";import"./SkeletonButton-moYwMGBJ.js";import"./SkeletonInlineBlock-CvF0ovYz.js";import"./SkeletonParagraph-BUXmdzG2.js";import"./IconSvgButton-Z9WuMKRe.js";import"./FormControlLabel-Cz68SJYk.js";import"./Checkbox-pSIFJ5K9.js";import"./SwitchBase-wy1xArrI.js";import"./useUpdateAcl---PEFisD.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
