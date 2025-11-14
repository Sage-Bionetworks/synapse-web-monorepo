import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-BbBIbNbJ.js";import{A as c}from"./AccessRequirementAclEditor-CJHqr6kY.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-CBGLv5ao.js";import"./index-UMjXJfzL.js";import"./_baseOrderBy-DvNlOUFW.js";import"./_baseIteratee-4zm-yijX.js";import"./_baseMap-D-a7amfv.js";import"./_baseEach-KEo3Uqcu.js";import"./useQueries-BL7xbtea.js";import"./useInfiniteQuery-Dq3AohCE.js";import"./AclEditor-1Lcld-8j.js";import"./UserSearchBoxV2-TygQWuxq.js";import"./useDebouncedEffect-DCfbw7rb.js";import"./use-deep-compare-effect.esm-DK8jsI9o.js";import"./uniq-Ncn24Eei.js";import"./without-BHRnFZwV.js";import"./UserBadge-h7JHA6Ak.js";import"./SkeletonTable-DeosQDQ2.js";import"./MenuItem-C_GiViVf.js";import"./Card-BSNHgx80.js";import"./Chip-BGbET8g7.js";import"./Select-aab027f3.esm-baO3FIkz.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-DLRC_B-r.js";import"./TeamBadge-CMR_5LRt.js";import"./SkeletonButton-C0rZfSx5.js";import"./SkeletonInlineBlock-DVbB2SaF.js";import"./SkeletonParagraph-Cre22j3C.js";import"./IconSvgButton-DiGFfIUN.js";import"./FormControlLabel-xeZuQ2kI.js";import"./Checkbox-ChI1OoXu.js";import"./SwitchBase-Oj29ESmW.js";import"./useUpdateAcl-CTJoSMKJ.js";const ie={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
