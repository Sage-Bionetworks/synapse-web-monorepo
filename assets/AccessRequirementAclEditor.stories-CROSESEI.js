import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-BnETViYe.js";import{A as c}from"./AccessRequirementAclEditor-Cxu7wYyk.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-Iv4cG14S.js";import"./index-DAJANqDt.js";import"./_baseOrderBy-B6I-T1FN.js";import"./_baseIteratee-ClPPPdqy.js";import"./_baseMap-BS8DVFvS.js";import"./_baseEach-UM9MKom9.js";import"./useQueries-CZq_142Z.js";import"./useInfiniteQuery-C73-i-7k.js";import"./AclEditor-vxzmQB_Q.js";import"./UserSearchBoxV2-B6sV4-za.js";import"./useDebouncedEffect-BF_6BQA9.js";import"./use-deep-compare-effect.esm-3-Rq1_uz.js";import"./uniq-I3Z8EEDb.js";import"./without-CEcrTaBy.js";import"./UserBadge-65z_ELHv.js";import"./SkeletonTable-C-IptaAB.js";import"./MenuItem-BuXD1mJM.js";import"./Card-DOF_qhrk.js";import"./Chip-7gWmkBqZ.js";import"./Select-aab027f3.esm-Dt5juruo.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-CdkNGGhP.js";import"./TeamBadge-Dr9P9eWS.js";import"./SkeletonButton-DC6QAxqn.js";import"./SkeletonInlineBlock-CvdUTVnt.js";import"./SkeletonParagraph-Cc0HWYg7.js";import"./IconSvgButton-xAfqYUit.js";import"./FormControlLabel-DQI_vNgk.js";import"./Checkbox-CGsodViY.js";import"./SwitchBase-B4WwzahN.js";import"./useUpdateAcl-B439_4lh.js";const ie={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
