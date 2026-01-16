import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-B-xyH02x.js";import{A as i}from"./AccessRequirementAclEditor-CV0ncif8.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-_j6x-JtH.js";import"./index-BJsp20bP.js";import"./_baseOrderBy-C0REZliL.js";import"./_baseIteratee-fpDZ_ZY4.js";import"./_baseMap-DjISqwK4.js";import"./_baseEach-CHfNr7If.js";import"./useQueries-D6R1GWKv.js";import"./useInfiniteQuery-Co2saULA.js";import"./AclEditor-BSnP_0j1.js";import"./UserSearchBoxV2-B1uxyYj8.js";import"./useDebouncedEffect-Dz4ygARW.js";import"./use-deep-compare-effect.esm-g-YILfzs.js";import"./uniq-BhePJzMA.js";import"./without-aeDYs7dM.js";import"./UserBadge-BdL4OP-p.js";import"./useUserBundle-C9QAiHQ4.js";import"./useSuspenseQuery-C7ZzErHF.js";import"./SkeletonTable-Bag6oVsL.js";import"./MenuItem-Dlz7KwY1.js";import"./Card-CTmYONpx.js";import"./Chip-CRxMN-mm.js";import"./Select-aab027f3.esm-Du6EeKVL.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-CAHxuPyN.js";import"./TeamBadge-Bw28BNYs.js";import"./SkeletonButton-DjfAVN5h.js";import"./SkeletonInlineBlock-C-y9BK0k.js";import"./SkeletonParagraph-DEhsnig5.js";import"./IconSvgButton-C8ulYUoS.js";import"./FormControlLabel-CbugnA7k.js";import"./Checkbox-BtMdyA1l.js";import"./SwitchBase-OXBlSqsv.js";import"./useUpdateAcl-BDmwVPXy.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
