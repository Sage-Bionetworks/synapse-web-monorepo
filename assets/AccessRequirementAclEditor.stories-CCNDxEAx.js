import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-C_QQiyp-.js";import{A as c}from"./AccessRequirementAclEditor-dyQXd2y2.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-B-bjUeHp.js";import"./index-vrcVr6xS.js";import"./_baseOrderBy-BaLIx0cu.js";import"./_baseIteratee-BG9mxM4I.js";import"./_baseMap-QVjVnVNG.js";import"./_baseEach-D_3l14Br.js";import"./useQueries-DoPjc6Lo.js";import"./useInfiniteQuery-CpxJuNol.js";import"./AclEditor-B1RAZfka.js";import"./UserSearchBoxV2-DAd0wnDG.js";import"./useDebouncedEffect-BG74UqlW.js";import"./use-deep-compare-effect.esm-jYk1534Z.js";import"./uniq-SnY45GYK.js";import"./without-BKuRpC8_.js";import"./UserBadge-DhOnwL5s.js";import"./SkeletonTable-BMz6cgMa.js";import"./MenuItem-BHFoVdQr.js";import"./Card-CmczJqmp.js";import"./Chip-B0GoZMHJ.js";import"./Select-aab027f3.esm-Cwgdc-Fa.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-DYa8p5E3.js";import"./TeamBadge-ClLLGwMF.js";import"./SkeletonButton-DVayUHLb.js";import"./SkeletonInlineBlock-CYb2G1Vd.js";import"./SkeletonParagraph-BKhiP51Z.js";import"./IconSvgButton-8Pky8-bM.js";import"./FormControlLabel-V09hgZrI.js";import"./Checkbox-DR4r2869.js";import"./SwitchBase-CIU1OHyQ.js";import"./useUpdateAcl-BPHML42z.js";const ie={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
