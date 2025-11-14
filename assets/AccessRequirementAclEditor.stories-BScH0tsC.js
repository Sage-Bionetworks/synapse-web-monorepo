import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-CQAvee5F.js";import{A as c}from"./AccessRequirementAclEditor-DhxzAAJx.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-BkhEm2x9.js";import"./index-Cqst0OBx.js";import"./_baseOrderBy-YSR7nDHP.js";import"./_baseIteratee-Cl9aDW9N.js";import"./_baseMap-C8e87bzq.js";import"./_baseEach-Bhh-05-4.js";import"./useQueries-DVF01cqS.js";import"./useInfiniteQuery-Dh-acjx4.js";import"./AclEditor-iMU7V6kH.js";import"./UserSearchBoxV2-DDso0pcZ.js";import"./useDebouncedEffect-CJcFQkuy.js";import"./use-deep-compare-effect.esm-DC102v78.js";import"./uniq-D0pi3ffb.js";import"./without-BcXQhdk6.js";import"./UserBadge-ChS5ZWfy.js";import"./SkeletonTable-n8bsuBVZ.js";import"./MenuItem-CHCA8JKh.js";import"./Card-DLy0NJ-o.js";import"./Chip-yjRG6i6C.js";import"./Select-aab027f3.esm-DwycKIAM.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-BGqT0PHu.js";import"./TeamBadge-BC0DBUSc.js";import"./SkeletonButton-BbTQsPlY.js";import"./SkeletonInlineBlock-QfDnwJMw.js";import"./SkeletonParagraph-BHKzvjmx.js";import"./IconSvgButton-CruNpS3T.js";import"./FormControlLabel-CfYT5tSK.js";import"./Checkbox-B9l7tm8b.js";import"./SwitchBase-4nAtzau0.js";import"./useUpdateAcl-B9YtsXCN.js";const ie={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
