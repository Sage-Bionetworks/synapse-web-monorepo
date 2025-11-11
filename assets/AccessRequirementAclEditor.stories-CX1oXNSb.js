import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-Dc6hcGlJ.js";import{A as c}from"./AccessRequirementAclEditor-7xVTu70a.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-2G0nuv52.js";import"./index-jKqhNBOG.js";import"./_baseOrderBy-B3rxzeQp.js";import"./_baseIteratee-Dcg-twG3.js";import"./_baseMap-By4jZFbc.js";import"./_baseEach-BNXLUMD5.js";import"./useQueries-PilZ9A-3.js";import"./useInfiniteQuery-IUWpIdre.js";import"./AclEditor-Dr6-5lXx.js";import"./UserSearchBoxV2-Du9brpZJ.js";import"./useDebouncedEffect-Dcl0CwkH.js";import"./use-deep-compare-effect.esm-DAxrCKuX.js";import"./uniq-CmgWG2RM.js";import"./without-Csfr21Xn.js";import"./UserBadge-H-ZUUhh9.js";import"./SkeletonTable-C5xUm_Zr.js";import"./MenuItem-CX3e5zAM.js";import"./Card-XI7C-k8U.js";import"./Chip-DqtQxgW8.js";import"./Select-aab027f3.esm-CzWM7AzP.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-DJhSh2pf.js";import"./TeamBadge-CRyOzZ5j.js";import"./SkeletonButton-BXWOXl9N.js";import"./SkeletonInlineBlock-CGB-MCvO.js";import"./SkeletonParagraph-BA9ytrTV.js";import"./IconSvgButton-B8KxlzYb.js";import"./FormControlLabel-Bn_oKwrc.js";import"./Checkbox-B_hMZXjl.js";import"./SwitchBase-BDfbjiC7.js";import"./useUpdateAcl-Csf_vVpK.js";const ie={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
