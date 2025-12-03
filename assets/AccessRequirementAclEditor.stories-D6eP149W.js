import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-BPjtn3Py.js";import{A as c}from"./AccessRequirementAclEditor-cSpgBFm1.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-BcvsiSa4.js";import"./index-MU1GfQRJ.js";import"./_baseOrderBy-CdXv1--t.js";import"./_baseIteratee-BO1Lzx2o.js";import"./_baseMap-jzXUhPol.js";import"./_baseEach-RhlMNDap.js";import"./useQueries-D_0vtMqr.js";import"./useInfiniteQuery-Bh3zdLrB.js";import"./AclEditor-594ACNKi.js";import"./UserSearchBoxV2-C6-eAcJ-.js";import"./useDebouncedEffect-BxWATv1s.js";import"./use-deep-compare-effect.esm-D8lyhZzE.js";import"./uniq-MZuYRl1i.js";import"./without-BVn3ALXy.js";import"./UserBadge-_zSHqQoY.js";import"./useUserBundle-w7U_abFB.js";import"./useSuspenseQuery-CJees8i4.js";import"./SkeletonTable-Dybo1wxv.js";import"./MenuItem-BbZL7_By.js";import"./Card-D9_DNnXX.js";import"./Chip-B9tVR_eV.js";import"./Select-aab027f3.esm-diu2ihAm.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-CvQQyNTE.js";import"./TeamBadge-C5SnUHZ3.js";import"./SkeletonButton-D4b9c6Gf.js";import"./SkeletonInlineBlock-DU00_odl.js";import"./SkeletonParagraph-D1AtTIOG.js";import"./IconSvgButton-Z89IZcpc.js";import"./FormControlLabel-B9Z-sxvt.js";import"./Checkbox-D0c25wmp.js";import"./SwitchBase-CecYQ9Z7.js";import"./useUpdateAcl-D5VseEtr.js";const pe={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
