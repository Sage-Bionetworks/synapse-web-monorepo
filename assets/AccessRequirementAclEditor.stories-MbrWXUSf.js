import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-B9toAp7a.js";import{A as c}from"./AccessRequirementAclEditor-CHR7EbH0.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-BSwn4Ekv.js";import"./index-D8ZnctAR.js";import"./_baseOrderBy-C3i3TCPw.js";import"./_baseIteratee-BGiUzQ8d.js";import"./_baseMap-miNkUa17.js";import"./_baseEach-BzUqFgra.js";import"./useQueries-Yqgl-oYp.js";import"./useInfiniteQuery-DGLpPH-X.js";import"./AclEditor-BA4azR1H.js";import"./UserSearchBoxV2-tT9515MJ.js";import"./useDebouncedEffect-D59uftUv.js";import"./use-deep-compare-effect.esm-Cl2Ri4if.js";import"./uniq-fknARjdf.js";import"./without-CD6bULX3.js";import"./UserBadge-BoBObQpt.js";import"./SkeletonTable-Ci-z4Kjh.js";import"./MenuItem-BZ_VEH8F.js";import"./Card-HZPz8khv.js";import"./Chip-CudXwLxi.js";import"./Select-aab027f3.esm-C6BRDs7I.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-P6dVTK0u.js";import"./TeamBadge-u020cHRi.js";import"./SkeletonButton-D4dnbEqI.js";import"./SkeletonInlineBlock-DARsQc6u.js";import"./SkeletonParagraph-DDetyv-w.js";import"./IconSvgButton-WKnP5KDC.js";import"./FormControlLabel-g_NAfEdo.js";import"./Checkbox-C2_MHdw4.js";import"./SwitchBase-Bmf2bXZK.js";import"./useUpdateAcl-DThWxCv1.js";const ie={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
