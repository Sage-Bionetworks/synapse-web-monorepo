import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-CGmVaDjG.js";import{A as c}from"./AccessRequirementAclEditor-DDHoRE4B.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-C0SSXLcr.js";import"./index-Bg4ai4NK.js";import"./_baseOrderBy-Be7RxQsn.js";import"./_baseIteratee-BT9JeoLs.js";import"./_baseMap-CrED9mcW.js";import"./_baseEach--X6tDxan.js";import"./useQueries-CFH4mD9S.js";import"./useInfiniteQuery-BOwZO-RU.js";import"./AclEditor-COfWx90U.js";import"./UserSearchBoxV2-DcEPiNLx.js";import"./useDebouncedEffect-BZA07H5D.js";import"./use-deep-compare-effect.esm-Bn3xhF-Y.js";import"./uniq-Dn33WZe4.js";import"./without-qPi_5CI2.js";import"./UserBadge-CNPQXBDq.js";import"./SkeletonTable-DNeEDdIn.js";import"./MenuItem-UENhvr4V.js";import"./Card-C00TRiyT.js";import"./Chip-DOrw28hN.js";import"./Select-aab027f3.esm-DPLoXPSl.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-CKyTzICL.js";import"./TeamBadge-Dwsl-e-x.js";import"./SkeletonButton-B4_njZrh.js";import"./SkeletonInlineBlock-DlR8y1uS.js";import"./SkeletonParagraph-Dm_x6xws.js";import"./IconSvgButton-Dv6ah7Id.js";import"./FormControlLabel-BNCF-8vF.js";import"./Checkbox-BhWQu0Q_.js";import"./SwitchBase-D6wTm3P4.js";import"./useUpdateAcl-BXX6-jqa.js";const ie={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
