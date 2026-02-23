import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-D6-EgIYn.js";import{A as i}from"./AccessRequirementAclEditor-DicEBl3o.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CDwXUrc8.js";import"./index-BAqH8QUV.js";import"./_baseOrderBy-kKcqyWpM.js";import"./_baseIteratee-DM4WPHJT.js";import"./_baseMap-DlGLzu_z.js";import"./_baseEach-DEorYF5u.js";import"./useQueries-Dp7eDvCj.js";import"./useInfiniteQuery-Bac3XvRa.js";import"./AclEditor-m75R77BD.js";import"./useRealmPrincipals-BYFcXE6T.js";import"./UserSearchBoxV2-CFe_tRJX.js";import"./useDebouncedEffect-B25vgBYV.js";import"./use-deep-compare-effect.esm-C9A8HvcU.js";import"./uniq-BP7VOetn.js";import"./without-D3Y5b0qW.js";import"./UserBadge-CjWzxbLB.js";import"./useUserBundle-CyWCEqcm.js";import"./useSuspenseQuery-CDWRAkW_.js";import"./SkeletonTable-Cw1xCxvL.js";import"./MenuItem-CdqoCxWB.js";import"./Card-dKshTQst.js";import"./Chip-C2QYErxj.js";import"./Select-aab027f3.esm-BcIyEF9O.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-D005yRYk.js";import"./TeamBadge-0XuX1o3A.js";import"./SkeletonButton-BgAZzTmz.js";import"./SkeletonInlineBlock-CkGbAtvq.js";import"./SkeletonParagraph-DzfgVu65.js";import"./IconSvgButton-t96Ji5HG.js";import"./FormControlLabel-I4j_CSGI.js";import"./Checkbox-Bv8D7Yjv.js";import"./SwitchBase-BDm3YM90.js";import"./useUpdateAcl-i5JnndnX.js";const se={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const te=["MockDemoExistingAcl","MockDemoNoExistingAcl","DevDemo"];export{t as DevDemo,r as MockDemoExistingAcl,s as MockDemoNoExistingAcl,te as __namedExportsOrder,se as default};
