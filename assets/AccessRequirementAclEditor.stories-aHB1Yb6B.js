import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-DIHutOM2.js";import{A as i}from"./AccessRequirementAclEditor-C6NbCMZA.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-B6M8ZlGq.js";import"./index-C9LEM1Gs.js";import"./_baseOrderBy-BzddQf8d.js";import"./_baseIteratee-D2BaxFYK.js";import"./_baseMap-BVRhLcGM.js";import"./_baseEach-USEntf0G.js";import"./useInfiniteQuery-DBeYwuV2.js";import"./AclEditor-BJ5b7q0S.js";import"./UserSearchBox-Cgcz8PGw.js";import"./useDebouncedEffect-Bbon0Pxy.js";import"./useUserGroupHeader-DQOVdta_.js";import"./UserOrTeamBadge-qoZZdjWZ.js";import"./TeamBadge-bGdyVfrX.js";import"./UserBadge-F-3JUNkT.js";import"./useUserBundle-C5_SG0-L.js";import"./SkeletonTable-C4N-t1H3.js";import"./MenuItem-DK0615By.js";import"./Card-BmTXRzNL.js";import"./Chip-BE1NWb4W.js";import"./Autocomplete-g8wVyTFT.js";import"./usePreviousProps-DeB1hVtp.js";import"./SkeletonButton-zFoMoYHg.js";import"./SkeletonInlineBlock-CxHTYkDw.js";import"./SkeletonParagraph-BIGOfadt.js";import"./IconSvgButton-4OxRyAMA.js";import"./FormControlLabel-D-4Nscdf.js";import"./Checkbox-BUXxhWF5.js";import"./SwitchBase-GpXGIWUe.js";import"./useUpdateAcl-T2gQ2Jbx.js";const z={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
