import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-DuUClhsc.js";import{A as c}from"./AccessRequirementAclEditor-wSVHuldL.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-CixKZePK.js";import"./index-DotbbxLs.js";import"./_baseOrderBy-D4lrjUmZ.js";import"./_baseIteratee-BmViwUWH.js";import"./_baseMap-kYERsGcq.js";import"./_baseEach-YhHACzfI.js";import"./useQueries-C-pf41ja.js";import"./useInfiniteQuery-DgaFpXmy.js";import"./AclEditor-DZd2ELze.js";import"./UserSearchBoxV2-SaDfO-yB.js";import"./useDebouncedEffect-DWmIlCL0.js";import"./use-deep-compare-effect.esm-BM8f3GDg.js";import"./uniq-B1GWRU5W.js";import"./without-OxYRp9qC.js";import"./UserBadge-baN644tt.js";import"./SkeletonTable-BqjyM-uC.js";import"./MenuItem-C7oiRjhq.js";import"./Card-Ddn9liVM.js";import"./Chip-Do2OA_d6.js";import"./Select-aab027f3.esm-Cqj54wzR.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-CUmuBjV7.js";import"./TeamBadge-L0_2BKY2.js";import"./SkeletonButton-BSbzluwJ.js";import"./SkeletonInlineBlock-CoFc0Z1u.js";import"./SkeletonParagraph-DI40A60T.js";import"./IconSvgButton-yAaGE_lu.js";import"./FormControlLabel-C7G2CdsS.js";import"./Checkbox-CZIACxG4.js";import"./SwitchBase-BOfXjZge.js";import"./useUpdateAcl-BWzuGeA4.js";const ie={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
