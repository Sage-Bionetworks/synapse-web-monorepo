import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-BOp5xHgQ.js";import{A as i}from"./AccessRequirementAclEditor-24mK5BIl.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-RlIIcYhO.js";import"./index-C0aVICkT.js";import"./_baseOrderBy-DY7PJ9oP.js";import"./_baseIteratee-1e4QYe1a.js";import"./_baseMap-DqggDP61.js";import"./_baseEach-CWoDBsEd.js";import"./useQueries-B9sDnyGk.js";import"./useInfiniteQuery-eidVdOLk.js";import"./AclEditor-BnOlrKUb.js";import"./useRealmPrincipals-C0g41KMM.js";import"./UserSearchBoxV2-simt4ncS.js";import"./useDebouncedEffect-C724r-8N.js";import"./use-deep-compare-effect.esm-ClAg0lVH.js";import"./uniq-KEHuC6nU.js";import"./without-DIQSxXog.js";import"./UserBadge-Bgli4UFZ.js";import"./useUserBundle-CLk1gimz.js";import"./useSuspenseQuery-BChhK6t7.js";import"./SkeletonTable-DueDues1.js";import"./MenuItem-BeX68FFD.js";import"./Card-d8z28fLd.js";import"./Chip-QOkeOJ9H.js";import"./Select-aab027f3.esm-QPM0uF2N.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-c2dDG07K.js";import"./TeamBadge-DoH7Nx9c.js";import"./SkeletonButton-DNYlKQbh.js";import"./SkeletonInlineBlock-BjcHkhbP.js";import"./SkeletonParagraph-Dpr2MQLi.js";import"./IconSvgButton-HWB7bVgS.js";import"./FormControlLabel-CZQJQgPa.js";import"./Checkbox-B7QnzdP8.js";import"./SwitchBase-CxS3jqOK.js";import"./useUpdateAcl-CR0p7shv.js";const se={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
