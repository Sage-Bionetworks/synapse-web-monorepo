import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-BjuWmOGi.js";import{A as c}from"./AccessRequirementAclEditor-MitxE_iD.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-B-sZn_wz.js";import"./index-DkRGUkVV.js";import"./_baseOrderBy-CgjyISJW.js";import"./_baseIteratee-BMPI0n1s.js";import"./_baseMap-0Bp-WUWh.js";import"./_baseEach-YBB0h5kf.js";import"./useQueries-C7jhvuGS.js";import"./useInfiniteQuery-C1IsBcDW.js";import"./AclEditor-Bj1wi7dH.js";import"./UserSearchBoxV2-E3EEBGsI.js";import"./useDebouncedEffect-DmU8aYLM.js";import"./use-deep-compare-effect.esm-CKvc0cS6.js";import"./uniq-CmRSxbmj.js";import"./without-B10tC6pS.js";import"./UserBadge-CUAwb9LE.js";import"./useUserBundle-B95nWVpb.js";import"./useSuspenseQuery-DmE9zOqq.js";import"./SkeletonTable-CigWUdbM.js";import"./MenuItem-D-8sEbrT.js";import"./Card-DL7hh3kA.js";import"./Chip-Ce4i36Hi.js";import"./Select-aab027f3.esm-0q2lS6KB.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-mZUanJpv.js";import"./TeamBadge-B3nrrbfj.js";import"./SkeletonButton-DB1uc2E1.js";import"./SkeletonInlineBlock-CVuN0wiI.js";import"./SkeletonParagraph-D6mW9cd8.js";import"./IconSvgButton-COfAcLHH.js";import"./FormControlLabel-Pg9rhhJW.js";import"./Checkbox-Ckhn1YcA.js";import"./SwitchBase-VeURP3dA.js";import"./useUpdateAcl-BOhB2f_t.js";const pe={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
