import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-C7HGvOUl.js";import{A as c}from"./AccessRequirementAclEditor-CuF3YoG9.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-CW-MGXNh.js";import"./index-vj5KKvTf.js";import"./_baseOrderBy-Cv90IWNs.js";import"./_baseIteratee-ChsMTM5R.js";import"./_baseMap-DMelYvT1.js";import"./_baseEach-AOC5xPjZ.js";import"./useQueries-CvU6H9bk.js";import"./useInfiniteQuery-CgbthALg.js";import"./AclEditor-D71qCxGm.js";import"./UserSearchBoxV2-DoKqiuz-.js";import"./useDebouncedEffect-uJhF23_X.js";import"./use-deep-compare-effect.esm-gDonvwry.js";import"./uniq-CSsZv0Eo.js";import"./without-BB2cuDg0.js";import"./UserBadge-Bj0YRfAa.js";import"./SkeletonTable-COY9zVYr.js";import"./MenuItem-CIAKLYgH.js";import"./Card-C57WWo12.js";import"./Chip-DuMKcKGN.js";import"./Select-aab027f3.esm-CAVdbtFx.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-BdVhGHd0.js";import"./TeamBadge-DN5YD07B.js";import"./SkeletonButton-CkeZGoyu.js";import"./SkeletonInlineBlock-CsElFq45.js";import"./SkeletonParagraph-CttTbUME.js";import"./IconSvgButton-DUeTQ8ta.js";import"./FormControlLabel-DMzFAHMb.js";import"./Checkbox-bhYdc4KW.js";import"./SwitchBase-BdB58K7f.js";import"./useUpdateAcl-Bp8ndJst.js";const ie={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
