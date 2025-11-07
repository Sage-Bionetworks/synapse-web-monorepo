import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-B4CHAk6x.js";import{A as c}from"./AccessRequirementAclEditor-DV_DVOwB.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-FtOKRHB-.js";import"./index-E3ZsUzEa.js";import"./_baseOrderBy-Ca9vpDaV.js";import"./_baseIteratee-CzfSGJS0.js";import"./_baseMap-B7lnn0EX.js";import"./_baseEach-C3hsIjAp.js";import"./useQueries-hh02O7c_.js";import"./useInfiniteQuery-BfVD3mCM.js";import"./AclEditor-D6ZZpsu9.js";import"./UserSearchBoxV2-DB7zO4VS.js";import"./useDebouncedEffect-CQ-aWcs_.js";import"./use-deep-compare-effect.esm-w31lbSJq.js";import"./uniq-S-UeN2sg.js";import"./without-Ci_ne7SJ.js";import"./UserBadge-CxJlSlvP.js";import"./SkeletonTable-RSxhuQlc.js";import"./MenuItem-lGKzud5I.js";import"./Card-BXYY888f.js";import"./Chip-D5KlvdWr.js";import"./Select-aab027f3.esm-8Ibd2tbx.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-CtQnH6Sg.js";import"./TeamBadge-ErVLQhVn.js";import"./SkeletonButton-CPwz8mIe.js";import"./SkeletonInlineBlock-DNU7D5U5.js";import"./SkeletonParagraph-DDHYucUN.js";import"./IconSvgButton-C3arULkx.js";import"./FormControlLabel-C_h5UEBe.js";import"./Checkbox-BXOJwuDE.js";import"./SwitchBase-CjNNjlJn.js";import"./useUpdateAcl-CHM4fSDm.js";const ie={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
