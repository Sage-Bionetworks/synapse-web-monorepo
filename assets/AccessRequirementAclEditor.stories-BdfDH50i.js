import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-DGqgB8og.js";import{A as c}from"./AccessRequirementAclEditor-Dh51Jr1o.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-456E7uRE.js";import"./index-CX9m2Res.js";import"./_baseOrderBy-Cbznb6y6.js";import"./_baseIteratee-DwFq8RQx.js";import"./_baseMap-CYaJztLS.js";import"./_baseEach-CnHvp2pQ.js";import"./useQueries-B2G60Uy5.js";import"./useInfiniteQuery-CvHOf2NU.js";import"./AclEditor-DbLiwsya.js";import"./UserSearchBoxV2-CNlLBw9i.js";import"./useDebouncedEffect-ChT8Sg8i.js";import"./use-deep-compare-effect.esm-nKvRvxU0.js";import"./uniq-CfNDoASc.js";import"./without-Dz2h17YF.js";import"./UserBadge-BsFNS6_M.js";import"./useUserBundle-DaZ17bF_.js";import"./useSuspenseQuery-DgAqulHC.js";import"./SkeletonTable-B050jOXg.js";import"./MenuItem-ClmHPDmJ.js";import"./Card-C9DQJ7Ku.js";import"./Chip-C9fzpOls.js";import"./Select-aab027f3.esm-DWLPbzR4.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-B7Gndvzh.js";import"./TeamBadge-rUQcXBov.js";import"./SkeletonButton-VHDypD6K.js";import"./SkeletonInlineBlock-CDJCDGy_.js";import"./SkeletonParagraph-_skZGHOU.js";import"./IconSvgButton-DvvUCScJ.js";import"./FormControlLabel-BPG4FuVu.js";import"./Checkbox-BtyRJrp1.js";import"./SwitchBase-Dc5MPTRj.js";import"./useUpdateAcl-Bc7d2ZzM.js";const pe={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
