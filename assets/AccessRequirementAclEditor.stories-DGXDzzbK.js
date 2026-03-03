import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-BPIYH1oT.js";import{A as i}from"./AccessRequirementAclEditor-iVI2jcOO.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BtM5n_Nn.js";import"./index-CSa6jvLb.js";import"./_baseOrderBy-D0f27N3W.js";import"./_baseIteratee-Bb0kra6V.js";import"./_baseMap-Bus0-AtT.js";import"./_baseEach-H9iq9W3A.js";import"./useInfiniteQuery-DoSJlmbq.js";import"./AclEditor-a-PmpiQC.js";import"./UserSearchBoxV2-D9ejOXon.js";import"./useDebouncedEffect-CvKPrdPa.js";import"./use-deep-compare-effect.esm-_H7Xcj2b.js";import"./uniq-DSqAZGaz.js";import"./without-B1yiPYIb.js";import"./UserBadge-BgwBE5L1.js";import"./useUserBundle-D1sKaGLt.js";import"./SkeletonTable-DGggFpSD.js";import"./MenuItem-B9zWTbwn.js";import"./Card-BMJjxRbj.js";import"./Chip-DDX768Id.js";import"./Select-aab027f3.esm-BOKWmLgl.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-BmhKKfsN.js";import"./TeamBadge-CbUzvPLn.js";import"./SkeletonButton-BzOCV9D1.js";import"./SkeletonInlineBlock-BqdJTX4s.js";import"./SkeletonParagraph-CVXQh454.js";import"./IconSvgButton-DmzOBXAg.js";import"./FormControlLabel-DUzfwAdY.js";import"./Checkbox-CdTW5ve-.js";import"./SwitchBase-DK0vqQ_k.js";import"./useUpdateAcl-oaBX__Ms.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const ee=["MockDemoExistingAcl","MockDemoNoExistingAcl","DevDemo"];export{t as DevDemo,r as MockDemoExistingAcl,s as MockDemoNoExistingAcl,ee as __namedExportsOrder,$ as default};
