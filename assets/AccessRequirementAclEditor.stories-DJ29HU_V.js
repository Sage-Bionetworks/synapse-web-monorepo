import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-B6BHQgsg.js";import{A as i}from"./AccessRequirementAclEditor-DeczQj6m.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DIJuqr1W.js";import"./index-BrxEKyeI.js";import"./_baseOrderBy-C8vVUUyh.js";import"./_baseIteratee-r37fl1Sw.js";import"./_baseMap-d8vVMiiI.js";import"./_baseEach-KeeyuKdO.js";import"./useInfiniteQuery-CyIpqaj4.js";import"./AclEditor-CODiAFbF.js";import"./UserSearchBoxV2-6uPoaiyW.js";import"./useDebouncedEffect-dJPxUaIE.js";import"./use-deep-compare-effect.esm-BbOZBEsl.js";import"./uniq-R2X1Zhhg.js";import"./without-CLLe732J.js";import"./UserBadge-CdHLyT5D.js";import"./useUserBundle-Bsv4QG78.js";import"./SkeletonTable-DrzWDZqG.js";import"./MenuItem-CURmej8f.js";import"./Card-BZp1HZl7.js";import"./Chip-DtPmiV3b.js";import"./Select-aab027f3.esm-CHb51e0y.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-YVa5GO4k.js";import"./TeamBadge-BRcc9v_0.js";import"./SkeletonButton-DHh5ZoUY.js";import"./SkeletonInlineBlock-C-VRD2YJ.js";import"./SkeletonParagraph-KorLLKG4.js";import"./IconSvgButton-DHqaddSE.js";import"./FormControlLabel-DXtGcBFr.js";import"./Checkbox-CJaBoFnV.js";import"./SwitchBase-BuMteYEy.js";import"./useUpdateAcl-Bg-tLX68.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
