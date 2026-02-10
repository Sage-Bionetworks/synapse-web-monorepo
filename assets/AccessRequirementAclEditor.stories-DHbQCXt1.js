import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-C80DNIXY.js";import{A as i}from"./AccessRequirementAclEditor-CFgWtYbI.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-Bjdl36fC.js";import"./index-Bee01HS_.js";import"./_baseOrderBy-DqQOHAJE.js";import"./_baseIteratee-CmYeUqfJ.js";import"./_baseMap-eSh9iFHA.js";import"./_baseEach-DUUo9Nf8.js";import"./useQueries-BaRURQgG.js";import"./useInfiniteQuery-4baG4-hB.js";import"./AclEditor-CjAkv8Ak.js";import"./UserSearchBoxV2-spPxYNEM.js";import"./useDebouncedEffect-D1xvaNwI.js";import"./use-deep-compare-effect.esm-CoyZ24TJ.js";import"./uniq-CP9CCD-y.js";import"./without-BTq4Rjy7.js";import"./UserBadge-B9rGk1Ik.js";import"./useUserBundle-Ck2w6lrW.js";import"./useSuspenseQuery-CqybcQ2J.js";import"./SkeletonTable-WwsVDHsD.js";import"./MenuItem-DX3jCWRl.js";import"./Card-CmWYd_mM.js";import"./Chip-BVUqKial.js";import"./Select-aab027f3.esm-BeiepPeR.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-C70J9loF.js";import"./TeamBadge-AVJEQmDD.js";import"./SkeletonButton-uDijPjPz.js";import"./SkeletonInlineBlock-DqQYipf9.js";import"./SkeletonParagraph-nOvV6g22.js";import"./IconSvgButton-rz1U-YtT.js";import"./FormControlLabel-BStBW8z5.js";import"./Checkbox-AtJt6d_0.js";import"./SwitchBase-CINz3Fhr.js";import"./useUpdateAcl-D3HKG_fA.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
