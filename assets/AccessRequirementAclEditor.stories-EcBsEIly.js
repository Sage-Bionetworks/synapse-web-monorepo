import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-0_E6QA5q.js";import{A as c}from"./AccessRequirementAclEditor-dyerEXIS.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-IU4gcQSi.js";import"./index-BqiUF3nO.js";import"./_baseOrderBy-gJ-cBijM.js";import"./_baseIteratee-yZQzlcky.js";import"./_baseMap-DU26S_52.js";import"./_baseEach-tGT8U_2K.js";import"./useQueries-NhDfFyQr.js";import"./useInfiniteQuery-CHkzf4rJ.js";import"./AclEditor-3CACB6Lm.js";import"./UserSearchBoxV2-CvkcmSIf.js";import"./useDebouncedEffect-Ao0Nja3b.js";import"./use-deep-compare-effect.esm-DEjD50c5.js";import"./uniq-BJz7K6kn.js";import"./without-CNgVXslo.js";import"./UserBadge-KfQC8GAX.js";import"./SkeletonTable-DeeOmUeM.js";import"./MenuItem-CAzHj_Ft.js";import"./Card-BUNvL0MS.js";import"./Chip-CGQIXmoB.js";import"./Select-aab027f3.esm-7hivo9pn.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-DMPpIigh.js";import"./TeamBadge-CD1foUec.js";import"./SkeletonButton-B7g5trXc.js";import"./SkeletonInlineBlock-C6wGBfZc.js";import"./SkeletonParagraph--7EvjUiD.js";import"./IconSvgButton-CA2C6z4f.js";import"./FormControlLabel-CaOULE1P.js";import"./Checkbox-CKD6Zm0i.js";import"./SwitchBase-D-sUOWXD.js";import"./useUpdateAcl-CzQOfL4H.js";const ie={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
