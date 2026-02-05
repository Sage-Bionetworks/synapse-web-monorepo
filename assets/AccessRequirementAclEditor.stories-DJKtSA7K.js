import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-Fj4lak5c.js";import{A as i}from"./AccessRequirementAclEditor-DUAAxPDg.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BK4E0lyi.js";import"./index-_4NbbnB5.js";import"./_baseOrderBy-CBnpW1-x.js";import"./_baseIteratee-CMx6DeJF.js";import"./_baseMap-BixPoDUC.js";import"./_baseEach-DNtmXHsZ.js";import"./useQueries-ootAa_T1.js";import"./useInfiniteQuery-CbadcZWG.js";import"./AclEditor-CeWBf8MX.js";import"./UserSearchBoxV2-CTlpMgLY.js";import"./useDebouncedEffect-gmRpLRy6.js";import"./use-deep-compare-effect.esm-Cxsm155F.js";import"./uniq-CTl5AwKM.js";import"./without-DSjlK3iQ.js";import"./UserBadge-D8gfab1c.js";import"./useUserBundle-DYUW7eSP.js";import"./useSuspenseQuery-DCz9tJ8h.js";import"./SkeletonTable-t4KSioMX.js";import"./MenuItem-B8CcEiWE.js";import"./Card-BAE-Z3hw.js";import"./Chip-CGB0K5Hb.js";import"./Select-aab027f3.esm-C45ZwGft.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-5n0LoUq7.js";import"./TeamBadge-Dl74_imx.js";import"./SkeletonButton-Caf_IZFe.js";import"./SkeletonInlineBlock-BlJ5s_Kh.js";import"./SkeletonParagraph-CrmOE7Us.js";import"./IconSvgButton-BvysSlm8.js";import"./FormControlLabel-B3G8i6At.js";import"./Checkbox-C1OqAc7h.js";import"./SwitchBase-oqrHKWjW.js";import"./useUpdateAcl-D0wtHQ52.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: MOCK_MANAGED_ACCESS_REQUIREMENT_ACL.id
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), getAllAccessRequirementAclHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: String(MOCK_ACCESS_REQUIREMENT_WITHOUT_ACL_ID)
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), getAllAccessRequirementAclHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: '9602671'
  },
  parameters: {
    stack: 'development'
  }
}`,...t.parameters?.docs?.source}}};const se=["MockDemoExistingAcl","MockDemoNoExistingAcl","DevDemo"];export{t as DevDemo,r as MockDemoExistingAcl,s as MockDemoNoExistingAcl,se as __namedExportsOrder,re as default};
