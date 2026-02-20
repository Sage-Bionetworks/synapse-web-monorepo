import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-4beS0gqZ.js";import{A as i}from"./AccessRequirementAclEditor-BZj9tiTw.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-B4xxCjmH.js";import"./index-CK_NCQ6g.js";import"./_baseOrderBy-DxFK1bnT.js";import"./_baseIteratee-BmxS9WAT.js";import"./_baseMap-9rlWQfeU.js";import"./_baseEach-C7tOoOBF.js";import"./useQueries-D3UXgcMQ.js";import"./useInfiniteQuery-BMIQmsjh.js";import"./AclEditor-B8Uty7Ka.js";import"./useRealmPrincipals-Puj-fJkx.js";import"./UserSearchBoxV2-BltxMziL.js";import"./useDebouncedEffect-DIYYeeoE.js";import"./use-deep-compare-effect.esm-DZQaImun.js";import"./uniq-B7kIYLGP.js";import"./without-D5RWHKCY.js";import"./UserBadge-Owmt2iN0.js";import"./useUserBundle-CsgmO8pI.js";import"./useSuspenseQuery-DcbESSKQ.js";import"./SkeletonTable-BUzuull8.js";import"./MenuItem-rOQE2nSk.js";import"./Card-CE7IB0pi.js";import"./Chip-DN1AmnB5.js";import"./Select-aab027f3.esm-eQNPYluh.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-CIB3EXOC.js";import"./TeamBadge-CA_aUlYw.js";import"./SkeletonButton-C4MVharh.js";import"./SkeletonInlineBlock-DJy2BwKW.js";import"./SkeletonParagraph-D8WDF9hI.js";import"./IconSvgButton-IBL6F4FB.js";import"./FormControlLabel-Chk4z1Xm.js";import"./Checkbox-32zvS2Va.js";import"./SwitchBase-Dp3MNZXr.js";import"./useUpdateAcl-Ctwpn9iU.js";const se={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
