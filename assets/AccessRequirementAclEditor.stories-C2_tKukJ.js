import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-DOnL1WnT.js";import{A as c}from"./AccessRequirementAclEditor-QH-DAfQM.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-YOANGYfG.js";import"./index-BSAtyD83.js";import"./_baseOrderBy-CQqPJjUp.js";import"./_baseIteratee-BuXwAMpp.js";import"./_baseMap-D9xJeZVA.js";import"./_baseEach-DlkX0Ljy.js";import"./useQueries-Dpcoofnd.js";import"./useInfiniteQuery-DBtR-i50.js";import"./AclEditor-4gLZufQA.js";import"./UserSearchBoxV2-BUI5fTZK.js";import"./useDebouncedEffect-DjUV3p-h.js";import"./use-deep-compare-effect.esm-BKm0Hfaf.js";import"./uniq-f0PXychf.js";import"./without-DUsye9XC.js";import"./UserBadge-DQCtOu7Y.js";import"./SkeletonTable-PXKcpraC.js";import"./MenuItem-hhLXKwPr.js";import"./Card-DY48lF53.js";import"./Chip-C754RM17.js";import"./Select-aab027f3.esm-BP1TTTnK.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-BDO9lliy.js";import"./TeamBadge-xT3CAI_Q.js";import"./SkeletonButton-B9cG9K33.js";import"./SkeletonInlineBlock-BUPDznw3.js";import"./SkeletonParagraph-BmRLG4OY.js";import"./IconSvgButton-CCrhF1tK.js";import"./FormControlLabel-BONTN4Fq.js";import"./Checkbox-2y8gbEUD.js";import"./SwitchBase-BK6ATdaZ.js";import"./useUpdateAcl-Dyr_ezax.js";const ie={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
