import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-D4RhuUSg.js";import{A as i}from"./AccessRequirementAclEditor-tv4f3Fc4.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-D4V-w5Tn.js";import"./index-CH5hbzgU.js";import"./_baseOrderBy-DCeUPTFI.js";import"./_baseIteratee-CZFIogkU.js";import"./_baseMap-bHNVqvDK.js";import"./_baseEach-B4Uvco6Q.js";import"./useInfiniteQuery-BV3yABot.js";import"./AclEditor-CT_i6X-M.js";import"./UserSearchBoxV2-JuzUGRMR.js";import"./useDebouncedEffect-Hu4iERg7.js";import"./use-deep-compare-effect.esm-BbEBvHC7.js";import"./uniq-BHVkRMjl.js";import"./without-DPxCsDGK.js";import"./UserBadge-eWfgoGeZ.js";import"./useUserBundle-CoadtSFD.js";import"./SkeletonTable-Caa1erkn.js";import"./MenuItem-DfQMZE47.js";import"./Card-FlQYIFIB.js";import"./Chip-BZ-RMLLV.js";import"./Select-aab027f3.esm-BAk4S-R5.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-DovUrx_g.js";import"./TeamBadge-DN_GQeXB.js";import"./SkeletonButton-Bvto0rCs.js";import"./SkeletonInlineBlock-BZISNmq5.js";import"./SkeletonParagraph-BcdCn_6W.js";import"./IconSvgButton-E4OHD3ky.js";import"./FormControlLabel-CEpo3VRI.js";import"./Checkbox-CMr4dX-a.js";import"./SwitchBase-D7jvOWBt.js";import"./useUpdateAcl-CvvWW1JB.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
