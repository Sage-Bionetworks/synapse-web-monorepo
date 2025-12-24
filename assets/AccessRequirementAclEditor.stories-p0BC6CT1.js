import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-Djv8MYNB.js";import{A as c}from"./AccessRequirementAclEditor-BgrUunLq.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-bXQ_1Iuc.js";import"./index-DkUUvlSe.js";import"./_baseOrderBy-CVzC67-B.js";import"./_baseIteratee-DzOJkO1l.js";import"./_baseMap-B3uOsC71.js";import"./_baseEach-liTqT7qy.js";import"./useQueries-iQS82f7J.js";import"./useInfiniteQuery-By8at75o.js";import"./AclEditor-osaWPGJi.js";import"./UserSearchBoxV2-D4hf_5Fo.js";import"./useDebouncedEffect-DmOjAIrg.js";import"./use-deep-compare-effect.esm-C91J9K-c.js";import"./uniq-Bdn3ztIc.js";import"./without-DrR_VujI.js";import"./UserBadge-BO7tdhe5.js";import"./useUserBundle-tM9bsliG.js";import"./useSuspenseQuery-Bke-3bkA.js";import"./SkeletonTable-5bHQrafN.js";import"./MenuItem-B1PtcVYM.js";import"./Card-_to_Ymcq.js";import"./Chip-BC_6TuQR.js";import"./Select-aab027f3.esm-Dnpe7q-T.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-DfEqzrbe.js";import"./TeamBadge-CRgAuvop.js";import"./SkeletonButton-D377GQsO.js";import"./SkeletonInlineBlock-Bo6_99BY.js";import"./SkeletonParagraph-CvIzEYe-.js";import"./IconSvgButton-BgGIY25i.js";import"./FormControlLabel-DQneX3qL.js";import"./Checkbox-JxEZSJ4e.js";import"./SwitchBase-slp36AZK.js";import"./useUpdateAcl-CI2138YZ.js";const pe={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
