import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-aiCTTxzx.js";import{A as c}from"./AccessRequirementAclEditor-C3dldGRK.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-D31N4k6L.js";import"./index-Q4iuKSAo.js";import"./_baseOrderBy-BPPL0NSC.js";import"./_baseIteratee-ZTZzVXP5.js";import"./_baseMap-DJjH_LSa.js";import"./_baseEach-atuDNG5v.js";import"./useQueries-BVv0ZXiA.js";import"./useInfiniteQuery-Gkgwzaik.js";import"./AclEditor-BwB9WfZ1.js";import"./UserSearchBoxV2-CmGcsQng.js";import"./useDebouncedEffect-D6hLJnWy.js";import"./use-deep-compare-effect.esm-C0dmksk3.js";import"./uniq-C5q_3WvF.js";import"./without-DZ-h4ZXK.js";import"./UserBadge-1dDO35aJ.js";import"./SkeletonTable-C8arYsQV.js";import"./MenuItem-DS99slWK.js";import"./Card-CHv0SxIu.js";import"./Chip-RH7BrEwh.js";import"./Select-aab027f3.esm-BO61-o0h.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-D6NQID_n.js";import"./TeamBadge-DADF6ZHh.js";import"./SkeletonButton-95Mbk9h_.js";import"./SkeletonInlineBlock-D-HDpP9G.js";import"./SkeletonParagraph-JveYRW9s.js";import"./IconSvgButton-DBxk9UyI.js";import"./FormControlLabel-i7KA90RK.js";import"./Checkbox-tYC2r_Wk.js";import"./SwitchBase-C5vlrh6G.js";import"./useUpdateAcl-JnJflkRP.js";const ie={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
