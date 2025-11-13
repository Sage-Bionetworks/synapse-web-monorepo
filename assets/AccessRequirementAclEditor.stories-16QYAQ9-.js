import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-CT7eET3u.js";import{A as c}from"./AccessRequirementAclEditor-C8-MW73F.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-Uep3J-L6.js";import"./index-CxiZHnbx.js";import"./_baseOrderBy-CH7fi9tw.js";import"./_baseIteratee-ffgb1Zes.js";import"./_baseMap-C0MUtlUP.js";import"./_baseEach-CcC5Gm9h.js";import"./useQueries-B6_rUTvG.js";import"./useInfiniteQuery-DEhw14be.js";import"./AclEditor-Bpq40EEk.js";import"./UserSearchBoxV2-3xJFBw9W.js";import"./useDebouncedEffect-B4cXpRE-.js";import"./use-deep-compare-effect.esm-aMG5GiA7.js";import"./uniq-CF5EZ_9u.js";import"./without-Da2Q3Kmq.js";import"./UserBadge-CJ5OnICi.js";import"./SkeletonTable-C5avUwyT.js";import"./MenuItem-BBM99tSl.js";import"./Card-C0dloBlr.js";import"./Chip-B95kICDp.js";import"./Select-aab027f3.esm-BT27ALUW.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-CU_kIytG.js";import"./TeamBadge-mogiMK_B.js";import"./SkeletonButton-6cvgvJnT.js";import"./SkeletonInlineBlock-C4Hah5J1.js";import"./SkeletonParagraph-CvhM2TYd.js";import"./IconSvgButton-DnOu5yfk.js";import"./FormControlLabel-DV4h3wNf.js";import"./Checkbox-DStSliuO.js";import"./SwitchBase-BJRjJiBa.js";import"./useUpdateAcl-AbjuczkE.js";const ie={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
