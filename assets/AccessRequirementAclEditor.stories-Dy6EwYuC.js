import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-BNuX63Gg.js";import{A as i}from"./AccessRequirementAclEditor-CgSW9YQf.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-_0RQX0yI.js";import"./index-CsZzG_M-.js";import"./_baseOrderBy-IYGbYqmr.js";import"./_baseIteratee-BV0dwrmo.js";import"./_baseMap-8byQYP5F.js";import"./_baseEach-CkrVvfzN.js";import"./useQueries-92nI7yPX.js";import"./useInfiniteQuery-ETBFsHKX.js";import"./AclEditor-U0teg1o8.js";import"./UserSearchBoxV2-C0q7COL3.js";import"./useDebouncedEffect-BLdJbogE.js";import"./use-deep-compare-effect.esm-DawoZLOl.js";import"./uniq-yHAgUkeJ.js";import"./without-EiPJ8F95.js";import"./UserBadge-DiHQ1_7F.js";import"./useUserBundle-BeMY8viL.js";import"./useSuspenseQuery-5mc94Bck.js";import"./SkeletonTable-B24h57Dq.js";import"./MenuItem-QgPCDudv.js";import"./Card-o20fYyBP.js";import"./Chip-Dbkz0kTt.js";import"./Select-aab027f3.esm-CDKLzpoI.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-C3ixqtAK.js";import"./TeamBadge-bUN2zYg9.js";import"./SkeletonButton-Q_wdDaMT.js";import"./SkeletonInlineBlock-BaXmg-Ho.js";import"./SkeletonParagraph-Bh-mJsSp.js";import"./IconSvgButton-CAO9cpU2.js";import"./FormControlLabel-CzBjWoYC.js";import"./Checkbox-CM0Tixh-.js";import"./SwitchBase-DQ3y_lJs.js";import"./useUpdateAcl-JHO1VpfY.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
