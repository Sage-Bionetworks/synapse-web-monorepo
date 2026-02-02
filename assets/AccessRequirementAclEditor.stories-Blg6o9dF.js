import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-B-rWBBOy.js";import{A as i}from"./AccessRequirementAclEditor-BEQoGVke.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-D18Zubv0.js";import"./index-BmrJEvkQ.js";import"./_baseOrderBy--eOiBI3k.js";import"./_baseIteratee-BVfqOHkP.js";import"./_baseMap-CcdUGJ7r.js";import"./_baseEach-BBdk3TAU.js";import"./useQueries-BF3c9QfY.js";import"./useInfiniteQuery-BF0L2vpl.js";import"./AclEditor-BSFpeuiD.js";import"./UserSearchBoxV2-Cc3BRhcX.js";import"./useDebouncedEffect-BbFN_ivc.js";import"./use-deep-compare-effect.esm-C9UyT4bf.js";import"./uniq-CJRdgA9T.js";import"./without-BMPBLrQH.js";import"./UserBadge-ChgBnm4h.js";import"./useUserBundle-rX-QoUXs.js";import"./useSuspenseQuery-BilXPZyB.js";import"./SkeletonTable-GTeIPnR6.js";import"./MenuItem-rdxON32h.js";import"./Card-D938tlRh.js";import"./Chip-WQPXL1Rn.js";import"./Select-aab027f3.esm-Bk3PKLAS.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-CthcWQEy.js";import"./TeamBadge-DgqaCsZR.js";import"./SkeletonButton-C55ygy2r.js";import"./SkeletonInlineBlock-Cpev2ljV.js";import"./SkeletonParagraph-IppQ387m.js";import"./IconSvgButton-Dk29ek5Z.js";import"./FormControlLabel-vJNidZPz.js";import"./Checkbox-C1HJ2Aam.js";import"./SwitchBase-DBQd13iY.js";import"./useUpdateAcl-XjsK0FmP.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
