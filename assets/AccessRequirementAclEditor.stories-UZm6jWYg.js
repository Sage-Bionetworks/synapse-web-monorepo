import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-CrIG5yS4.js";import{A as c}from"./AccessRequirementAclEditor-DCCpmwKS.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-DNIKTqab.js";import"./index-CkF7h5xt.js";import"./_baseOrderBy-DvHCJEb1.js";import"./_baseIteratee-DOoR1yLg.js";import"./_baseMap-BR9_rnnd.js";import"./_baseEach-Bk7xNbyo.js";import"./useQueries-P_upU759.js";import"./useInfiniteQuery-C039Rys8.js";import"./AclEditor-CzU0s34V.js";import"./UserSearchBoxV2-C3L_ugnV.js";import"./useDebouncedEffect-f-l14_cw.js";import"./use-deep-compare-effect.esm-C8hIuBLn.js";import"./uniq-Bx-nHlpT.js";import"./without-DPEgN0zp.js";import"./UserBadge-BoI25jFW.js";import"./useUserBundle-WiP6qAW2.js";import"./useSuspenseQuery-BDF5CGHD.js";import"./SkeletonTable-CZxqZr7Y.js";import"./MenuItem-DGqfgEGw.js";import"./Card-B7wB9TR3.js";import"./Chip-Cq9C0rq5.js";import"./Select-aab027f3.esm-u03cN62F.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-Bf2EkKM2.js";import"./TeamBadge-CfeETvxl.js";import"./SkeletonButton-C2iZcuLE.js";import"./SkeletonInlineBlock-DCJOzeCR.js";import"./SkeletonParagraph-BI2gfc3a.js";import"./IconSvgButton-C_2Kxyq7.js";import"./FormControlLabel-BsHUDHzb.js";import"./Checkbox-BbzG_W6j.js";import"./SwitchBase-B6cqD099.js";import"./useUpdateAcl-B00Z_UGK.js";const pe={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(g=(_=t.parameters)==null?void 0:_.docs)==null?void 0:g.source}}};const le=["MockDemoExistingAcl","MockDemoNoExistingAcl","DevDemo"];export{t as DevDemo,r as MockDemoExistingAcl,s as MockDemoNoExistingAcl,le as __namedExportsOrder,pe as default};
