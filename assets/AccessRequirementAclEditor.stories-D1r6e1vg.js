import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-90f2SQV6.js";import{A as i}from"./AccessRequirementAclEditor-BqldHnCK.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-C8DG-3mq.js";import"./index-DBtU2uN0.js";import"./_baseOrderBy-B_kTw8AV.js";import"./_baseIteratee-DS7Uv7Qg.js";import"./_baseMap-BCtJ1V6g.js";import"./_baseEach-iJRgvUTF.js";import"./useInfiniteQuery-B6I0bq03.js";import"./AclEditor-B_oYw0lK.js";import"./UserSearchBox-CKMIGSI-.js";import"./useDebouncedEffect-CFr_xHr7.js";import"./useUserGroupHeader-3u-W-R_V.js";import"./UserOrTeamBadge-C-e6rx3D.js";import"./TeamBadge-DvAvwUrn.js";import"./UserBadge-BhjoWwGQ.js";import"./useUserBundle-C1tRTjHW.js";import"./SkeletonTable-CUhBOjKD.js";import"./MenuItem-BuPaY9i0.js";import"./Card-BjkUBjOd.js";import"./Chip-DkWyanB2.js";import"./Autocomplete-D1cVZgEB.js";import"./usePreviousProps-BMS-JDpN.js";import"./SkeletonButton-DayzDEfl.js";import"./SkeletonInlineBlock-5v-gOL2x.js";import"./SkeletonParagraph-Bta19Z9s.js";import"./IconSvgButton-C60PG_rF.js";import"./FormControlLabel-DglLXMgl.js";import"./Checkbox-CF10eWfP.js";import"./SwitchBase-BM0I7EUL.js";import"./useUpdateAcl-DrbtmbrD.js";const z={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
