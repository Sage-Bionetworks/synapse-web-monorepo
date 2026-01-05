import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-DboE6cus.js";import{A as c}from"./AccessRequirementAclEditor-C2-pPD7y.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-B9l2Ke75.js";import"./index-BzXSeNW_.js";import"./_baseOrderBy-CJw4LElh.js";import"./_baseIteratee-DwrTBovl.js";import"./_baseMap-CxtrX0CY.js";import"./_baseEach-peTWZHvj.js";import"./useQueries-C-iJVLAg.js";import"./useInfiniteQuery-C-3LxYU-.js";import"./AclEditor-Cl6wk7-R.js";import"./UserSearchBoxV2-Cbzv7qMt.js";import"./useDebouncedEffect-ndw6MftY.js";import"./use-deep-compare-effect.esm-C-rD7OfE.js";import"./uniq-BMr5GqOn.js";import"./without-CdFsIkuH.js";import"./UserBadge-BlAZ_Wz3.js";import"./useUserBundle-CEShpWIh.js";import"./useSuspenseQuery-NbcqIP5u.js";import"./SkeletonTable-B7bdJ0qY.js";import"./MenuItem-BC-hmB5d.js";import"./Card-xik5UMs-.js";import"./Chip-D7TLsmcp.js";import"./Select-aab027f3.esm-gIDu9blh.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-2yvsZ6FT.js";import"./TeamBadge-CgdCGwb5.js";import"./SkeletonButton-D8m5msQb.js";import"./SkeletonInlineBlock-Dnql_wpL.js";import"./SkeletonParagraph-C746jxi4.js";import"./IconSvgButton-BmDPGfB7.js";import"./FormControlLabel-RkfWwutG.js";import"./Checkbox-zAn0p-gG.js";import"./SwitchBase-BQgRTlGW.js";import"./useUpdateAcl-2pNGt5Cz.js";const pe={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
