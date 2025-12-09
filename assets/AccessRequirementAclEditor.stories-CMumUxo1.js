import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-BUOdsTSh.js";import{A as c}from"./AccessRequirementAclEditor-CkBwBt8-.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-B80D173R.js";import"./index-Dy3y5VXk.js";import"./_baseOrderBy-BrYmiZ1z.js";import"./_baseIteratee-ikfqENkb.js";import"./_baseMap-Ct-pV0We.js";import"./_baseEach-kMjIUVBO.js";import"./useQueries-Cj0FJGxA.js";import"./useInfiniteQuery-BQSNFCnR.js";import"./AclEditor-GgxwiRmO.js";import"./UserSearchBoxV2-CViGDhLZ.js";import"./useDebouncedEffect-IO6y0XyR.js";import"./use-deep-compare-effect.esm-CX0zEpmN.js";import"./uniq-BuRCLPCx.js";import"./without-POmdnga1.js";import"./UserBadge-DehLGxLX.js";import"./useUserBundle-CTHXD_uI.js";import"./useSuspenseQuery-BjDE67iy.js";import"./SkeletonTable-CSizy4er.js";import"./MenuItem-8DBEXON1.js";import"./Card-CuzZsAO2.js";import"./Chip-D1GuGoQD.js";import"./Select-aab027f3.esm-B9jF230q.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-MX1_uXne.js";import"./TeamBadge-DsCiCBsT.js";import"./SkeletonButton-ByACKKgg.js";import"./SkeletonInlineBlock-BZZZqUCg.js";import"./SkeletonParagraph-DiZBwklZ.js";import"./IconSvgButton-81_2mVOd.js";import"./FormControlLabel-CpRmCTlY.js";import"./Checkbox--dbCoq3l.js";import"./SwitchBase-B4zG1gGP.js";import"./useUpdateAcl-Brqit2ZO.js";const pe={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
