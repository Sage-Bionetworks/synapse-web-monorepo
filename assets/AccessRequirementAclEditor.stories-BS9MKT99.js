import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-T7oLJ25f.js";import{A as i}from"./AccessRequirementAclEditor-CMT0FCs0.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-G8_a63Qz.js";import"./index-BdhaPNFV.js";import"./_baseOrderBy-CM7pO5MO.js";import"./_baseIteratee-Dy1SfAsC.js";import"./_baseMap-Da-WRcVt.js";import"./_baseEach-CLkct6tL.js";import"./useQueries-CYX4p4ut.js";import"./useInfiniteQuery-D-UxbEMz.js";import"./AclEditor-xAn3nDNK.js";import"./UserSearchBoxV2-BZp5tPQx.js";import"./useDebouncedEffect-xn6PZLNB.js";import"./use-deep-compare-effect.esm-DWCQDhwA.js";import"./uniq-B94JdzcS.js";import"./without-9smdan5p.js";import"./UserBadge-BGdm1g_K.js";import"./useUserBundle-DLS_5O5Y.js";import"./useSuspenseQuery-0xwwePGu.js";import"./SkeletonTable-Iucvd8oY.js";import"./MenuItem-CcVKVUSq.js";import"./Card-DUua1aJ8.js";import"./Chip-CoqraAOn.js";import"./Select-aab027f3.esm-PM9xqT5k.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-VRE706p6.js";import"./TeamBadge-D4MSEdBF.js";import"./SkeletonButton-BbQ1D2mw.js";import"./SkeletonInlineBlock-DDBz5ks6.js";import"./SkeletonParagraph-O68Vr_JV.js";import"./IconSvgButton-D2jC6kkz.js";import"./FormControlLabel-FS1tnZLz.js";import"./Checkbox-R1y8ieM8.js";import"./SwitchBase-DDKFHFxJ.js";import"./useUpdateAcl-B1xrLNw3.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
