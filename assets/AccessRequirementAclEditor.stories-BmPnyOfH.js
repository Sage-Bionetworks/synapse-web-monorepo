import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-la5pZNJP.js";import{A as i}from"./AccessRequirementAclEditor-BMRJQ06q.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-Dw9nmZtr.js";import"./index-nbMMV5sL.js";import"./_baseOrderBy-OwT6rmZK.js";import"./_baseIteratee-loK_i9sZ.js";import"./_baseMap-BQN9YKHj.js";import"./_baseEach-BRlYnKbM.js";import"./useInfiniteQuery-Dw0hPYtP.js";import"./AclEditor-CeQXGUVp.js";import"./UserSearchBoxV2-DLmZxJ2-.js";import"./useDebouncedEffect-DXHNj3Tb.js";import"./use-deep-compare-effect.esm-BeXf3d15.js";import"./uniq-QS0U86Je.js";import"./without-DZ-NbIqM.js";import"./UserBadge-rJYMep-q.js";import"./useUserBundle-DcSi2JrE.js";import"./SkeletonTable-jKVXe2RG.js";import"./MenuItem-fdQnDEWw.js";import"./Card-Bzw4JsT_.js";import"./Chip-og5LeUeY.js";import"./Select-aab027f3.esm-CephwMKX.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-0Wt0TG7I.js";import"./TeamBadge-BVkLjUbN.js";import"./SkeletonButton-Cnars53-.js";import"./SkeletonInlineBlock-IWHLRfGq.js";import"./SkeletonParagraph-D00HqPxF.js";import"./IconSvgButton-B6GRZWHe.js";import"./FormControlLabel-CVRDyRA_.js";import"./Checkbox-DN48LJpB.js";import"./SwitchBase-DY2uxlHH.js";import"./useUpdateAcl-CmVARxxd.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
