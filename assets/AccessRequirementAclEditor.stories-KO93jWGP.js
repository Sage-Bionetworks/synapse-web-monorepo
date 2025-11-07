import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-BdkWYmI6.js";import{A as c}from"./AccessRequirementAclEditor-CW0MrTXQ.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-CFFEoY2r.js";import"./index-Bp1wqoF0.js";import"./_baseOrderBy-BnLkH5nT.js";import"./_baseIteratee-ptUCm6t2.js";import"./_baseMap-BOTv4vr1.js";import"./_baseEach-CsBmLHQn.js";import"./useQueries-DeoRDPpB.js";import"./useInfiniteQuery-DuX9lKhO.js";import"./AclEditor-CvNAEXUt.js";import"./UserSearchBoxV2-DxFTM3J-.js";import"./useDebouncedEffect-jE7eDe3B.js";import"./use-deep-compare-effect.esm-CYFJiE3Q.js";import"./uniq-DIhhH-87.js";import"./without-Csmwb1vv.js";import"./UserBadge-D-KTw3YH.js";import"./SkeletonTable-BveBy0vn.js";import"./MenuItem-CP_h11Bc.js";import"./Card-CgIKbIE3.js";import"./Chip-4C804CUR.js";import"./Select-aab027f3.esm-CyGbFhuL.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-CNLk5cG4.js";import"./TeamBadge-BnE9f3G8.js";import"./SkeletonButton-DYpS-IT5.js";import"./SkeletonInlineBlock-B4ZEP19M.js";import"./SkeletonParagraph-CVsqmSli.js";import"./IconSvgButton-D5_YxFAK.js";import"./FormControlLabel-BPc4wiF1.js";import"./Checkbox-CH08XeSr.js";import"./SwitchBase-C3xkbGp3.js";import"./useUpdateAcl-Crr_KoxH.js";const ie={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
