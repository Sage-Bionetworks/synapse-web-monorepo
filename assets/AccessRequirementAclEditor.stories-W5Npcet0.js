import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-CsxBzgcc.js";import{A as i}from"./AccessRequirementAclEditor-Cmat14oy.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CRbu92xG.js";import"./index-CqdG97d5.js";import"./_baseOrderBy-BHVJ7-cG.js";import"./_baseIteratee-CocFix3A.js";import"./_baseMap-LcAFCb8i.js";import"./_baseEach-N09lyxf9.js";import"./useInfiniteQuery-DUTjfMBl.js";import"./AclEditor-NMzax6Uy.js";import"./UserSearchBox-w93_8vYa.js";import"./useDebouncedEffect-CdtGFfET.js";import"./UserBadge-CsG6C7yN.js";import"./useUserBundle-CnN0kkEH.js";import"./queryOptions-C9woPjwX.js";import"./SkeletonTable-DcTnDoDK.js";import"./MenuItem-tZmUaMPT.js";import"./Card-ah1wXFi5.js";import"./Chip-CAnuLq2P.js";import"./UserOrTeamBadge-1NEVN6wA.js";import"./TeamBadge-BoFjbyDD.js";import"./Autocomplete-BvVhFG-L.js";import"./usePreviousProps-CbBR4Eer.js";import"./SkeletonButton-C34BpE4a.js";import"./SkeletonInlineBlock-Wq3H9QMf.js";import"./SkeletonParagraph-aQXmvCYx.js";import"./IconSvgButton-D79oQJpP.js";import"./FormControlLabel-DZ7y0U6g.js";import"./Checkbox-DTYk3i6O.js";import"./SwitchBase-yO_lVJ_F.js";import"./useUpdateAcl-BV1Wy5y0.js";const z={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
