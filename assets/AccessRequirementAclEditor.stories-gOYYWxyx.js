import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-BywOI08r.js";import{A as c}from"./AccessRequirementAclEditor-DS7k8b4t.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-zyMXiiRq.js";import"./index-QM9LZyQP.js";import"./_baseOrderBy-CaAXL3_5.js";import"./_baseIteratee-CG7m2_nN.js";import"./_baseMap-B6BQt2tR.js";import"./_baseEach-DCgtmAmK.js";import"./useQueries-BxDWj3rf.js";import"./useInfiniteQuery-Dss3vF7E.js";import"./AclEditor-DArllcGr.js";import"./UserSearchBoxV2-pzNiuZXT.js";import"./useDebouncedEffect-DQbCNaKy.js";import"./use-deep-compare-effect.esm-DK5vUDP0.js";import"./uniq-s8JIJxjh.js";import"./without-Cj_Q8CQk.js";import"./UserBadge-jcIe0Qnh.js";import"./SkeletonTable-BGMevUuy.js";import"./MenuItem-CEHSf-MP.js";import"./Card-Bmrw94GQ.js";import"./Chip-COCF_Cxb.js";import"./Select-aab027f3.esm-Csyqi_PL.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-Bro5Fk2u.js";import"./TeamBadge-D2Yal8eO.js";import"./SkeletonButton-DzQUVwf8.js";import"./SkeletonInlineBlock-rzWwNvZc.js";import"./SkeletonParagraph-CUhIHN6z.js";import"./IconSvgButton-DsEeAU6o.js";import"./FormControlLabel-Dk794jSl.js";import"./Checkbox-C1Xiwym6.js";import"./SwitchBase-Cso67LU1.js";import"./useUpdateAcl-C8NU_j-W.js";const ie={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
