import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-BaLjRbxV.js";import{A as c}from"./AccessRequirementAclEditor-h0QeX1fI.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-CiBPUAL1.js";import"./index-Bf6lqsG1.js";import"./_baseOrderBy-CI36gZIY.js";import"./_baseIteratee-DSMfcoPD.js";import"./_baseMap-D8bdCiPL.js";import"./_baseEach-BPR38kYI.js";import"./useQueries-BG08BzmQ.js";import"./useInfiniteQuery-BKbW_T3d.js";import"./AclEditor-V1c-vnbI.js";import"./UserSearchBoxV2-CBRXAn5I.js";import"./useDebouncedEffect-CzeqrTza.js";import"./use-deep-compare-effect.esm-B-oB1mUD.js";import"./uniq-Cjs6CA2m.js";import"./without-BGeO4KNe.js";import"./UserBadge-CkEzG92Y.js";import"./SkeletonTable-DRhIcjmz.js";import"./MenuItem-CmlP5UgZ.js";import"./Card-BCoCTWa3.js";import"./Chip-BNDtClPI.js";import"./Select-aab027f3.esm-HGcDTeOM.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-DmtpDTA8.js";import"./TeamBadge-Fonkoz20.js";import"./SkeletonButton-BCO3ltYO.js";import"./SkeletonInlineBlock-DlbO9j3B.js";import"./SkeletonParagraph-2OOcKN6S.js";import"./IconSvgButton-DjYd1kAw.js";import"./FormControlLabel-BeQpfg_x.js";import"./Checkbox-CmQZLcxz.js";import"./SwitchBase-CB7olyeo.js";import"./useUpdateAcl-CeXxI6yY.js";const ie={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    accessRequirementId: MOCK_MANAGED_ACCESS_REQUIREMENT_ACL.id
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), getAllAccessRequirementAclHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var E,R,u;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    accessRequirementId: String(MOCK_ACCESS_REQUIREMENT_WITHOUT_ACL_ID)
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), getAllAccessRequirementAclHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...(u=(R=s.parameters)==null?void 0:R.docs)==null?void 0:u.source}}};var A,_,g;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    accessRequirementId: '9602671'
  },
  parameters: {
    stack: 'development'
  }
}`,...(g=(_=t.parameters)==null?void 0:_.docs)==null?void 0:g.source}}};const ce=["MockDemoExistingAcl","MockDemoNoExistingAcl","DevDemo"];export{t as DevDemo,r as MockDemoExistingAcl,s as MockDemoNoExistingAcl,ce as __namedExportsOrder,ie as default};
