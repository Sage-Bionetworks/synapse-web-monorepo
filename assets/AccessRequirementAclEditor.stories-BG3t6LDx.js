import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-Ddo1nd2c.js";import{A as i}from"./AccessRequirementAclEditor-DfF5NS_-.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-89AzbV_J.js";import"./index-BY1pmXbi.js";import"./_baseOrderBy-BJUcHcg9.js";import"./_baseIteratee-BL_XVY7N.js";import"./_baseMap-ZZuoWbUp.js";import"./_baseEach-Deb1er3l.js";import"./useInfiniteQuery-DJwQPHS2.js";import"./AclEditor-B3i1o3YR.js";import"./UserSearchBox-C6bkTzGH.js";import"./useDebouncedEffect-Beio-S8K.js";import"./UserBadge-BZOEQyuT.js";import"./useUserBundle-CRr4o42O.js";import"./SkeletonTable-0-Nn1Nvg.js";import"./MenuItem-BaT97X1Q.js";import"./Card-DjIjXO0o.js";import"./Chip-Lk48EpR4.js";import"./UserOrTeamBadge-BABkP8Xd.js";import"./TeamBadge-QrVsDqd7.js";import"./Autocomplete-3ZOC5Hmp.js";import"./usePreviousProps-BnbbWDH5.js";import"./SkeletonButton-0wbjxtel.js";import"./SkeletonInlineBlock-CIgujLoL.js";import"./SkeletonParagraph-B50bUVUG.js";import"./IconSvgButton-HXU0k65y.js";import"./FormControlLabel-Y3B08TzJ.js";import"./Checkbox-DuiaAW4b.js";import"./SwitchBase-LT8Y2S2D.js";import"./useUpdateAcl-Cuvd01JB.js";const y={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const z=["MockDemoExistingAcl","MockDemoNoExistingAcl","DevDemo"];export{s as DevDemo,r as MockDemoExistingAcl,t as MockDemoNoExistingAcl,z as __namedExportsOrder,y as default};
