import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-BZ6Cksnd.js";import{A as i}from"./AccessRequirementAclEditor-BwSSy9vH.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-SqP5N62U.js";import"./index-DT9MyxYS.js";import"./_baseOrderBy-DL8E65ut.js";import"./_baseIteratee-MHolBcN4.js";import"./_baseMap-DChNRkmg.js";import"./_baseEach-Dx2X7r9r.js";import"./useQueries-Dko-e5-x.js";import"./useInfiniteQuery-Cab2Nvsr.js";import"./AclEditor-DiJdWlQ8.js";import"./UserSearchBoxV2-DeMrw6oa.js";import"./useDebouncedEffect-CkmvZJy4.js";import"./use-deep-compare-effect.esm-BqdL8QU0.js";import"./uniq-ChJWkOkZ.js";import"./without-Dp9wYgNS.js";import"./UserBadge-BSz9Rlfd.js";import"./useUserBundle-B39u_n1H.js";import"./useSuspenseQuery-BArtp2Wi.js";import"./SkeletonTable-BgNPNqlP.js";import"./MenuItem-BRVKaq9N.js";import"./Card-eBY9for1.js";import"./Chip-CRcycbBa.js";import"./Select-aab027f3.esm-BVJNXzBR.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-C1FTO_ks.js";import"./TeamBadge-CJm8Mqb6.js";import"./SkeletonButton-eBqXNQMI.js";import"./SkeletonInlineBlock-CaEvhC-d.js";import"./SkeletonParagraph-DuP-_ghR.js";import"./IconSvgButton-IyPA86_6.js";import"./FormControlLabel-BlbED8cv.js";import"./Checkbox-DacBKnfp.js";import"./SwitchBase-DuQ6Nlg7.js";import"./useUpdateAcl-NaMXXEgJ.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
