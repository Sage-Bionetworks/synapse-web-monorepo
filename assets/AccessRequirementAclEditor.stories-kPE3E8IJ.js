import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-ebumedXL.js";import{A as i}from"./AccessRequirementAclEditor-DDS4BWiw.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-De2fY97W.js";import"./index-BXiypiiB.js";import"./_baseOrderBy-Du1uYSUs.js";import"./_baseIteratee-BZfyLuxI.js";import"./_baseMap-DuHHUBBV.js";import"./_baseEach-Bpi3XsvX.js";import"./useInfiniteQuery-DYtjmNBb.js";import"./AclEditor-BUZCGa-M.js";import"./UserSearchBox-Dv8ml4J-.js";import"./useDebouncedEffect-YWXeh-W5.js";import"./UserBadge-Cxc18L8a.js";import"./useUserBundle-ClJAa-1h.js";import"./queryOptions-C9woPjwX.js";import"./SkeletonTable-D1WsuyYZ.js";import"./MenuItem-DMONT234.js";import"./Card-TzJMzE0i.js";import"./Chip-DwqfSnWD.js";import"./UserOrTeamBadge-BcM60gWe.js";import"./TeamBadge-BHQ5XRWZ.js";import"./Autocomplete-CEr_Ge2j.js";import"./usePreviousProps-UzYqkF7W.js";import"./SkeletonButton-ClK4nZ4V.js";import"./SkeletonInlineBlock--tfqxNwn.js";import"./SkeletonParagraph-CjkSb5xZ.js";import"./IconSvgButton-DsafexN-.js";import"./FormControlLabel-EbJgvWzn.js";import"./Checkbox-CZffvlFh.js";import"./SwitchBase-hiOfS_D4.js";import"./useUpdateAcl-ClNYsGYS.js";const z={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
