import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-DiPm50UB.js";import{A as i}from"./AccessRequirementAclEditor-BdkbNiGb.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CyQd-YXH.js";import"./index-B9ANVuh5.js";import"./_baseOrderBy-aM169nLh.js";import"./_baseIteratee-DWhIL05T.js";import"./_baseMap-xyu6HgKJ.js";import"./_baseEach-FF_VpvRu.js";import"./useInfiniteQuery-CatJNhxp.js";import"./AclEditor-CT_YuQ4W.js";import"./UserSearchBox-LsGLwxCO.js";import"./useDebouncedEffect-Duno4CzS.js";import"./useUserGroupHeader-HRrxzYDs.js";import"./UserOrTeamBadge-D0qHeicX.js";import"./TeamBadge-CrPr9jIZ.js";import"./UserBadge-BjVrhUSw.js";import"./useUserBundle-Xy4g38YR.js";import"./SkeletonTable-DrjQboaV.js";import"./MenuItem-V4SUklHJ.js";import"./Card-DJkxs2b6.js";import"./Chip-FHtW8UvL.js";import"./Autocomplete-Cwaz2roQ.js";import"./usePreviousProps-Ca8WKoot.js";import"./SkeletonButton-Bvb1MiX7.js";import"./SkeletonInlineBlock-LodHGZ4G.js";import"./SkeletonParagraph-CeZAzIZD.js";import"./IconSvgButton-BcaNoDpC.js";import"./FormControlLabel-DJXVjsUK.js";import"./Checkbox-BcJ_w-AA.js";import"./SwitchBase-CIORlFGi.js";import"./useUpdateAcl-B9FWT0_o.js";const z={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: MOCK_MANAGED_ACCESS_REQUIREMENT_ACL.id
  },
  parameters: {
    stack: 'mock'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: String(MOCK_ACCESS_REQUIREMENT_WITHOUT_ACL_ID)
  },
  parameters: {
    stack: 'mock'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: '9602671'
  },
  parameters: {
    stack: 'development'
  }
}`,...s.parameters?.docs?.source}}};const J=["MockDemoExistingAcl","MockDemoNoExistingAcl","DevDemo"];export{s as DevDemo,r as MockDemoExistingAcl,t as MockDemoNoExistingAcl,J as __namedExportsOrder,z as default};
