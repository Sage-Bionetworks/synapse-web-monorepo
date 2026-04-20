import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-Gl2uG7Gu.js";import{A as i}from"./AccessRequirementAclEditor-CToKEsFN.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CNvie9sI.js";import"./index-Dl1iid2-.js";import"./_baseOrderBy-CThs2gYZ.js";import"./_baseIteratee-BYtIyUzR.js";import"./_baseMap-QVGtldut.js";import"./_baseEach-DDXBWgx7.js";import"./useInfiniteQuery-B8esF6xB.js";import"./AclEditor-BNMLn0bl.js";import"./UserSearchBox-CSYniZ9Z.js";import"./useDebouncedEffect-XrdPg-37.js";import"./UserBadge-RCt5BhEq.js";import"./useUserBundle-BOqjtCMe.js";import"./queryOptions-C9woPjwX.js";import"./SkeletonTable-DN89Pk10.js";import"./MenuItem-DDtGYU59.js";import"./Card-W8tHan4r.js";import"./Chip-DiD-80ip.js";import"./UserOrTeamBadge-D6dgcxJ_.js";import"./TeamBadge-Dfi6JICp.js";import"./Autocomplete-D4-XVfDi.js";import"./usePreviousProps-Cy9XFhAc.js";import"./SkeletonButton-CAFmp0_I.js";import"./SkeletonInlineBlock-BdepDM7J.js";import"./SkeletonParagraph-Ck270a2X.js";import"./IconSvgButton-DAdZyyen.js";import"./FormControlLabel-BhQ-7Pqi.js";import"./Checkbox-CsdNX8eC.js";import"./SwitchBase-fjg8G-tJ.js";import"./useUpdateAcl-BOFzEOQ-.js";const z={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
