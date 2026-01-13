import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-DVNYwO2X.js";import{A as i}from"./AccessRequirementAclEditor-CkMzxSO7.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DWR2oOa2.js";import"./index-9hqwGMA7.js";import"./_baseOrderBy-CmoZ_S3f.js";import"./_baseIteratee-DppP0dwZ.js";import"./_baseMap-ksk5ZDPW.js";import"./_baseEach-Dp5MzYWx.js";import"./useQueries-BQ487jlg.js";import"./useInfiniteQuery-B9oS7yw5.js";import"./AclEditor-ksomRzze.js";import"./UserSearchBoxV2-D1kwjU32.js";import"./useDebouncedEffect-BL-oaFM1.js";import"./use-deep-compare-effect.esm-_A2F6RRf.js";import"./uniq-Ct69rUQw.js";import"./without-BVd9CiLi.js";import"./UserBadge-Q4jkqetP.js";import"./useUserBundle-DscWjVV3.js";import"./useSuspenseQuery-33kCA9BT.js";import"./SkeletonTable-BpqkbE8o.js";import"./MenuItem-Ci0bIVjj.js";import"./Card-C6iAvcUJ.js";import"./Chip-sOf8CffO.js";import"./Select-aab027f3.esm-CY4Tay_Z.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-qHIfMXaj.js";import"./TeamBadge-TABBYRNJ.js";import"./SkeletonButton-CiDtB3IB.js";import"./SkeletonInlineBlock-Bgae_khf.js";import"./SkeletonParagraph-Bq0xaWku.js";import"./IconSvgButton-CFnhOCVA.js";import"./FormControlLabel-2BD87kef.js";import"./Checkbox-DTSE5Rp3.js";import"./SwitchBase-CgidC8Mu.js";import"./useUpdateAcl-DFvDXhtA.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
