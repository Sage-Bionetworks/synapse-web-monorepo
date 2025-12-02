import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-TYPaZ6LN.js";import{A as c}from"./AccessRequirementAclEditor-Dxi3fEmy.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-D7tv4NHL.js";import"./index-C_dXWgcu.js";import"./_baseOrderBy-D844RP_3.js";import"./_baseIteratee-BPacOvsO.js";import"./_baseMap-DhxkwXW9.js";import"./_baseEach-WuiEJq7T.js";import"./useQueries-DChvZEmX.js";import"./useInfiniteQuery-DGBLsrXS.js";import"./AclEditor-CuKGDAWa.js";import"./UserSearchBoxV2-BE73OkBn.js";import"./useDebouncedEffect-BiUjU_HC.js";import"./use-deep-compare-effect.esm-CZAnXGsk.js";import"./uniq-CrS56XKU.js";import"./without-6D7HEseO.js";import"./UserBadge-AucszkFw.js";import"./SkeletonTable-CKGrlPmE.js";import"./MenuItem--XzA7FJc.js";import"./Card-CPwsCsQR.js";import"./Chip-CqTIrq2s.js";import"./Select-aab027f3.esm-BSYaODl1.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-nX_mdz3g.js";import"./TeamBadge-IJZhooCY.js";import"./SkeletonButton-BeXgw9Nt.js";import"./SkeletonInlineBlock-BBtOGIqx.js";import"./SkeletonParagraph-CEVUjrsB.js";import"./IconSvgButton-CZ6KKFpg.js";import"./FormControlLabel-CFIZDz1l.js";import"./Checkbox-DwR_QE3H.js";import"./SwitchBase-Cm31-ZuN.js";import"./useUpdateAcl-_4t0kqTD.js";const ie={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
