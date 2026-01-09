import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-CJCPT_yY.js";import{A as c}from"./AccessRequirementAclEditor-dTnZToWJ.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-BB1jEIAf.js";import"./index-8HwUI_iG.js";import"./_baseOrderBy-C-V2pvg8.js";import"./_baseIteratee-BnCE0C_W.js";import"./_baseMap-CSY_I1bl.js";import"./_baseEach-B08SIf5n.js";import"./useQueries-DH-E2OAK.js";import"./useInfiniteQuery-Cpo1uBE7.js";import"./AclEditor-BQUGr9Qo.js";import"./UserSearchBoxV2-C1gAbNl7.js";import"./useDebouncedEffect-BV0l7ju6.js";import"./use-deep-compare-effect.esm-D7KdGUWw.js";import"./uniq-Dpbrz5UI.js";import"./without-85dK_tqQ.js";import"./UserBadge-CPPowmDC.js";import"./useUserBundle-DV8uACsM.js";import"./useSuspenseQuery-CA-nz-xS.js";import"./SkeletonTable-DEcRya5M.js";import"./MenuItem-FQcUK81X.js";import"./Card-CC0cQVjk.js";import"./Chip-BjrahEkE.js";import"./Select-aab027f3.esm-CqWGu6Ao.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-CqbjpjNp.js";import"./TeamBadge-E5anLuYV.js";import"./SkeletonButton-B0ZXgmWW.js";import"./SkeletonInlineBlock-DKm9jtot.js";import"./SkeletonParagraph-CRVUa_L6.js";import"./IconSvgButton-BMrU_2Cm.js";import"./FormControlLabel-BNnxMy1P.js";import"./Checkbox-FrSnOx71.js";import"./SwitchBase-Di4Jykwp.js";import"./useUpdateAcl-BOSQ_sZ4.js";const le={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),m=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var n;a(!0),(n=m.current)==null||n.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(g=(_=t.parameters)==null?void 0:_.docs)==null?void 0:g.source}}};const de=["MockDemoExistingAcl","MockDemoNoExistingAcl","DevDemo"];export{t as DevDemo,r as MockDemoExistingAcl,s as MockDemoNoExistingAcl,de as __namedExportsOrder,le as default};
