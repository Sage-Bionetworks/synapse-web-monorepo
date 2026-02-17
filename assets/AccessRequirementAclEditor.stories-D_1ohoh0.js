import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-QjK0KVVQ.js";import{A as i}from"./AccessRequirementAclEditor-CLSRZlUJ.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CEk_RmUW.js";import"./index-YuzRGUHA.js";import"./_baseOrderBy-D464MD8-.js";import"./_baseIteratee-D0wMyYDQ.js";import"./_baseMap-CH_vJgWe.js";import"./_baseEach-Nu6NXdmH.js";import"./useQueries-Jnd7wWig.js";import"./useInfiniteQuery-DM0-hvaX.js";import"./AclEditor-Bsls5YZN.js";import"./UserSearchBoxV2-BvsOF-Ky.js";import"./useDebouncedEffect-BHN5P3sB.js";import"./use-deep-compare-effect.esm-B7o8tjki.js";import"./uniq-CriVK3AI.js";import"./without-IXpUgQeC.js";import"./UserBadge-DiIJq8ah.js";import"./useUserBundle-Dn3kF_9B.js";import"./useSuspenseQuery--yWao2XD.js";import"./SkeletonTable-tKivh0dA.js";import"./MenuItem-Bngl7c_k.js";import"./Card-DR2DyePr.js";import"./Chip-Czdb_SG1.js";import"./Select-aab027f3.esm-BrhslB6K.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-D7Gu30-Q.js";import"./TeamBadge-vbOT9LFM.js";import"./SkeletonButton-Cyy2rcJm.js";import"./SkeletonInlineBlock-B3R_0ID9.js";import"./SkeletonParagraph-Ca34h4bh.js";import"./IconSvgButton-TAfnJGM9.js";import"./FormControlLabel-BODitdlq.js";import"./Checkbox-DzXO1Mmf.js";import"./SwitchBase-CzWT740k.js";import"./useUpdateAcl-C5Imt9Z5.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
