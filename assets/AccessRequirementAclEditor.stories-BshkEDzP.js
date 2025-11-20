import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-zheGqhAq.js";import{A as c}from"./AccessRequirementAclEditor-C6nM973D.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-BXmZzqot.js";import"./index-Cdw1MH5n.js";import"./_baseOrderBy-BofzHugO.js";import"./_baseIteratee-DDo8Ap5B.js";import"./_baseMap-BkkmexWo.js";import"./_baseEach-CwsVC8cC.js";import"./useQueries-DXsUmBVl.js";import"./useInfiniteQuery-CG0Fso0D.js";import"./AclEditor-Bc8lt_3s.js";import"./UserSearchBoxV2-CPMHnLX3.js";import"./useDebouncedEffect-CdMJhMdn.js";import"./use-deep-compare-effect.esm-zOhH6fqI.js";import"./uniq-CXMQvc5D.js";import"./without-CtsLl_vk.js";import"./UserBadge-Bt736bOg.js";import"./SkeletonTable-B_5GfUT7.js";import"./MenuItem-Bwm8UOUj.js";import"./Card-EONa1C96.js";import"./Chip-BBw1-U_9.js";import"./Select-aab027f3.esm-D4uKsygW.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-BRrWp7AN.js";import"./TeamBadge-DMvgQY78.js";import"./SkeletonButton-DnBFAAqj.js";import"./SkeletonInlineBlock-DQ4vmVkM.js";import"./SkeletonParagraph-0XdWF-57.js";import"./IconSvgButton-BmpP9F6T.js";import"./FormControlLabel-BJvY_HPF.js";import"./Checkbox-mXxzWTsk.js";import"./SwitchBase-BkAcyxYn.js";import"./useUpdateAcl-gOV5_L_y.js";const ie={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
