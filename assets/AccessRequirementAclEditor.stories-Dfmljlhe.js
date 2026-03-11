import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-osdcj8gT.js";import{A as i}from"./AccessRequirementAclEditor-Dqs0Xogz.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-By8ZR-4J.js";import"./index-D_1mjmCL.js";import"./_baseOrderBy-A39yyPqs.js";import"./_baseIteratee-B5HvQivk.js";import"./_baseMap-I-hgX6EY.js";import"./_baseEach-DnD5uJJS.js";import"./useInfiniteQuery-DDd67-Kv.js";import"./AclEditor-CR4RsP0P.js";import"./UserSearchBoxV2-CpHNcknV.js";import"./useDebouncedEffect-C64-OqTz.js";import"./use-deep-compare-effect.esm-BhHazn6g.js";import"./uniq-WMrsDV3H.js";import"./without--wtbCOJB.js";import"./UserBadge-0tdCENRL.js";import"./useUserBundle-BBw-Xd7Y.js";import"./SkeletonTable-EGvSypPy.js";import"./MenuItem-DiVh5dQ0.js";import"./Card-DetatTvP.js";import"./Chip-B7nPIvxj.js";import"./Select-aab027f3.esm-LpKro3UP.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-CEIHRdPK.js";import"./TeamBadge-D5euMTqM.js";import"./SkeletonButton-EtCgm8ml.js";import"./SkeletonInlineBlock-FlaxgqQX.js";import"./SkeletonParagraph-DQAjuogP.js";import"./IconSvgButton-Cr3Hwmz9.js";import"./FormControlLabel-Cd2OUa17.js";import"./Checkbox-mFQANwtw.js";import"./SwitchBase-BiHoovb6.js";import"./useUpdateAcl-viRw9Oes.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const ee=["MockDemoExistingAcl","MockDemoNoExistingAcl","DevDemo"];export{t as DevDemo,r as MockDemoExistingAcl,s as MockDemoNoExistingAcl,ee as __namedExportsOrder,$ as default};
