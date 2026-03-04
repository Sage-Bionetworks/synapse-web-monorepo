import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-DFPaMFUW.js";import{A as i}from"./AccessRequirementAclEditor-C8Us5CjC.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CiX_hKPJ.js";import"./index-C4bY0XrL.js";import"./_baseOrderBy-BWUrDSHp.js";import"./_baseIteratee-KXbrUvbm.js";import"./_baseMap-CV69pYre.js";import"./_baseEach-BoHV8FR1.js";import"./useInfiniteQuery-BfpnCJzv.js";import"./AclEditor-1893SzFd.js";import"./UserSearchBoxV2-BS0rS2B9.js";import"./useDebouncedEffect-DRAX2gqn.js";import"./use-deep-compare-effect.esm-CMyFFIrt.js";import"./uniq-fS6aPJ4H.js";import"./without-C0Un_Jkp.js";import"./UserBadge-DRf1oHGg.js";import"./useUserBundle-DG8h57yP.js";import"./SkeletonTable-CGGRLKpb.js";import"./MenuItem-DDtYElML.js";import"./Card-D3R-pr0W.js";import"./Chip-DzCjxfH4.js";import"./Select-aab027f3.esm-BMAwcPIO.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-9Hoo1fmy.js";import"./TeamBadge-CGFmF20_.js";import"./SkeletonButton-DH_a4yMQ.js";import"./SkeletonInlineBlock-9K5K-2fN.js";import"./SkeletonParagraph-D2lfRP01.js";import"./IconSvgButton-BdvGvV5s.js";import"./FormControlLabel-DlHl0rSS.js";import"./Checkbox-B2Yckgpo.js";import"./SwitchBase-DsDqfj4L.js";import"./useUpdateAcl-BbLhRbAY.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
