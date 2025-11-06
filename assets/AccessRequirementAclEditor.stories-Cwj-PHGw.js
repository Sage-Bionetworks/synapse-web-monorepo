import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-ynK1h1ZQ.js";import{A as c}from"./AccessRequirementAclEditor-DI1ryDuD.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-C4PpsW1H.js";import"./index-B5clCFJM.js";import"./_baseOrderBy-C-pKnPpp.js";import"./_baseIteratee-f8KlzNwu.js";import"./_baseMap-D8G-5nF0.js";import"./_baseEach-BZDElJQx.js";import"./useQueries-DoP51xjB.js";import"./useInfiniteQuery-C_WgtIFm.js";import"./AclEditor-C5Ksx42D.js";import"./UserSearchBoxV2-W8ljJJsJ.js";import"./useDebouncedEffect-BJDhFDWg.js";import"./use-deep-compare-effect.esm-D95pMM68.js";import"./uniq-BBr-0w4l.js";import"./without-CH2SkLb2.js";import"./UserBadge-Czj3y833.js";import"./SkeletonTable-CyuXTNTX.js";import"./MenuItem-AKaHxYJT.js";import"./Card-BdM9B7UJ.js";import"./Chip-9C2a3vCF.js";import"./Select-aab027f3.esm-DBG4C-QL.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-BCM0bza-.js";import"./TeamBadge-Bfx59cif.js";import"./SkeletonButton-Bwr03Ql7.js";import"./SkeletonInlineBlock-C3nmwKQa.js";import"./SkeletonParagraph-DikrQ7Cm.js";import"./IconSvgButton-CUy9kivG.js";import"./FormControlLabel-NofvAP8Q.js";import"./Checkbox-CGzkhN5U.js";import"./SwitchBase-DQA_xSey.js";import"./useUpdateAcl-DrTyCsJB.js";const ie={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
