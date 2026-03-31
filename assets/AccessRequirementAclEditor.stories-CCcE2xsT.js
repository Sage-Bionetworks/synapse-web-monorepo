import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-Cr4rsgj7.js";import{A as i}from"./AccessRequirementAclEditor-BR4Sb_76.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BGgjFa_W.js";import"./index-MNSnOiaj.js";import"./_baseOrderBy-BW78dBFQ.js";import"./_baseIteratee-Dve3eWDj.js";import"./_baseMap-DKB-r9b8.js";import"./_baseEach-CDRD4QoG.js";import"./useInfiniteQuery-B_Omzybh.js";import"./AclEditor-DuTDnfSk.js";import"./UserSearchBoxV2-Bpqkx5NX.js";import"./useDebouncedEffect-0pFZfXf8.js";import"./use-deep-compare-effect.esm-BYNnqYvv.js";import"./uniq-CQTanI-X.js";import"./without-BiUzHpja.js";import"./UserBadge-DqLO5d9Y.js";import"./useUserBundle-DQ1m5zbR.js";import"./SkeletonTable-wr8tjygS.js";import"./MenuItem-Ct9EBmwz.js";import"./Card-9HzHl1Tz.js";import"./Chip-DjKXoZBc.js";import"./Select-aab027f3.esm-CUIJHzZR.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge--RkABSyb.js";import"./TeamBadge-B7ohMNpE.js";import"./SkeletonButton-C33Abn2f.js";import"./SkeletonInlineBlock-w--GqSHA.js";import"./SkeletonParagraph-DJhgoEyf.js";import"./IconSvgButton-C1H4aeMd.js";import"./FormControlLabel-B7TVOkEX.js";import"./Checkbox-c-nz78k5.js";import"./SwitchBase-Cc_wLOhS.js";import"./useUpdateAcl-BQwr4iOl.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
