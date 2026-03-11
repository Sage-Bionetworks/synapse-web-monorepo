import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-BFOdDDU9.js";import{A as i}from"./AccessRequirementAclEditor-CNTptb0V.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CP42ArKm.js";import"./index-DDJJe_s9.js";import"./_baseOrderBy-DB_MZpkC.js";import"./_baseIteratee-BJyYAHwo.js";import"./_baseMap-D7kDkJWv.js";import"./_baseEach-C50d_HcC.js";import"./useInfiniteQuery-Dy46-GOZ.js";import"./AclEditor-B7bHAcUa.js";import"./UserSearchBoxV2-D6O3wM47.js";import"./useDebouncedEffect-DcT7lLhv.js";import"./use-deep-compare-effect.esm-Dix54tvZ.js";import"./uniq-DOCtMVWj.js";import"./without-DgaWB8hV.js";import"./UserBadge-D59lDHcb.js";import"./useUserBundle-DCqqdgaq.js";import"./SkeletonTable-YSrwQoxW.js";import"./MenuItem-PnDY4AEM.js";import"./Card-O6nQpaBG.js";import"./Chip-D2x9BPaK.js";import"./Select-aab027f3.esm-CdOh-8hV.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-DLnp9v-B.js";import"./TeamBadge-4rfQ6Ry9.js";import"./SkeletonButton-DqU7tug-.js";import"./SkeletonInlineBlock-DA2_ugLR.js";import"./SkeletonParagraph-tO6IeoMO.js";import"./IconSvgButton-CfWFi9CX.js";import"./FormControlLabel-C2HtIWRI.js";import"./Checkbox-BMEnJ1KU.js";import"./SwitchBase-BWakJaHi.js";import"./useUpdateAcl-CmygFGW1.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
