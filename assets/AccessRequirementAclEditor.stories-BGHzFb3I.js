import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-C6DVh3a8.js";import{A as c}from"./AccessRequirementAclEditor-BUQQOein.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-DhC-BgPU.js";import"./index-CWyeuUHI.js";import"./_baseOrderBy-BPJHiFB9.js";import"./_baseIteratee-CWWhk6NN.js";import"./_baseMap-DhNHWzMR.js";import"./_baseEach-LxprNQX-.js";import"./useQueries-B0aVwD29.js";import"./useInfiniteQuery-ClFk1pW2.js";import"./AclEditor-D_09umw1.js";import"./UserSearchBoxV2-BFaOo3Fw.js";import"./useDebouncedEffect-5Q2GMnjF.js";import"./use-deep-compare-effect.esm-SwhE2hrk.js";import"./uniq-D-JYaA-4.js";import"./without-BVYiPBRH.js";import"./UserBadge-CxhgYPLm.js";import"./useUserBundle-GB9vlSqF.js";import"./useSuspenseQuery-Chz7E6o7.js";import"./SkeletonTable-BaZC2los.js";import"./MenuItem-BQStYWQ5.js";import"./Card-BPBXAoVw.js";import"./Chip-DnxNYuul.js";import"./Select-aab027f3.esm-Bc_KSYKr.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-Qwm5AgjU.js";import"./TeamBadge-ZKhMo1dI.js";import"./SkeletonButton-DJ25ODSP.js";import"./SkeletonInlineBlock-DaN9DO1b.js";import"./SkeletonParagraph-BiRrs5sP.js";import"./IconSvgButton-DZzZgwXC.js";import"./FormControlLabel-CiJk5KuY.js";import"./Checkbox-DJfaxyg9.js";import"./SwitchBase-CuaC-at1.js";import"./useUpdateAcl-WoyCCfgJ.js";const pe={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
