import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-DmJPOOU_.js";import{A as i}from"./AccessRequirementAclEditor-IK_pa8Zu.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CMox_RrW.js";import"./index-BXFJdLDG.js";import"./_baseOrderBy-eGJUtKsY.js";import"./_baseIteratee-1Q2L5zu3.js";import"./_baseMap-BWARg_nl.js";import"./_baseEach-CAIliHKy.js";import"./useInfiniteQuery-BDaCbZ6f.js";import"./AclEditor-BBme4-Nc.js";import"./UserSearchBoxV2-CVb35cui.js";import"./useDebouncedEffect-BsroYQ0t.js";import"./use-deep-compare-effect.esm-Tvv8-TnI.js";import"./uniq-DPbT0Jrg.js";import"./without-BAz2mDyj.js";import"./UserBadge-BnbYUF_2.js";import"./useUserBundle-BrqV_bO4.js";import"./SkeletonTable-B15aTznV.js";import"./MenuItem-DeCPXHAD.js";import"./Card-DctfhZcj.js";import"./Chip-CM8JUIti.js";import"./Select-aab027f3.esm-DyPa_FNK.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-BH0pz7ML.js";import"./TeamBadge-4G3D7SA5.js";import"./SkeletonButton-Cd2blMTY.js";import"./SkeletonInlineBlock-rRVfoSJd.js";import"./SkeletonParagraph-B8-jdRST.js";import"./IconSvgButton-B0RbUSrl.js";import"./FormControlLabel-Drfk0QYR.js";import"./Checkbox-Dk6Grjtf.js";import"./SwitchBase-BGEA75yw.js";import"./useUpdateAcl-C9vcLqmH.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
