import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-Bv3225dD.js";import{A as c}from"./AccessRequirementAclEditor-DSqphyDs.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-DzaPaYvw.js";import"./index-CZarqvXf.js";import"./_baseOrderBy-DUT4Jzfx.js";import"./_baseIteratee-BbIJeIRd.js";import"./_baseMap-huRy0dl9.js";import"./_baseEach-BMhe4q5x.js";import"./useQueries-B6UcJV_V.js";import"./useInfiniteQuery-DqOQ-5wt.js";import"./AclEditor-DIkoXeI6.js";import"./UserSearchBoxV2-dsjChIfY.js";import"./useDebouncedEffect-C7MZzIZp.js";import"./use-deep-compare-effect.esm-CIvVRqff.js";import"./uniq-C3G06xsZ.js";import"./without-BMm6qfGU.js";import"./UserBadge-CRNgYN9O.js";import"./useUserBundle-BHT0iKXO.js";import"./useSuspenseQuery-CdjgNkyv.js";import"./SkeletonTable-DN4iiShU.js";import"./MenuItem-BwJ2Gdnn.js";import"./Card-o608J91t.js";import"./Chip-B2GRsUoa.js";import"./Select-aab027f3.esm-DVi4OcJS.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-Bd_k_c4n.js";import"./TeamBadge-CS7ktAZ2.js";import"./SkeletonButton-DJp9easj.js";import"./SkeletonInlineBlock-Bq5p5oKd.js";import"./SkeletonParagraph-CLTPxESa.js";import"./IconSvgButton-DXdWwvGF.js";import"./FormControlLabel-CwYdHBQ1.js";import"./Checkbox-C8aMdRVE.js";import"./SwitchBase-BxXcDErD.js";import"./useUpdateAcl-BEzst-4I.js";const pe={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
