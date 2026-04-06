import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-DEq4Fwc_.js";import{A as i}from"./AccessRequirementAclEditor-DHWq7djW.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-C4yV_srx.js";import"./index-f3FEnX0R.js";import"./_baseOrderBy-CuMO6fDB.js";import"./_baseIteratee-DiRcqJ-V.js";import"./_baseMap-D3t1dmer.js";import"./_baseEach-DduMpDYT.js";import"./useInfiniteQuery-BoS_wNWd.js";import"./AclEditor-C4kkW92T.js";import"./UserSearchBox-Duj3mjAc.js";import"./useDebouncedEffect-CjcHpG6N.js";import"./UserBadge-CQKGOV2g.js";import"./useUserBundle-DhUzGqE3.js";import"./SkeletonTable-CssHy_cG.js";import"./MenuItem-Q5cSc0me.js";import"./Card-Bft1ilTS.js";import"./Chip-CsLFe4y4.js";import"./UserOrTeamBadge-BZeoORq6.js";import"./TeamBadge-CSeFW5CF.js";import"./Autocomplete-BDzyqPVK.js";import"./usePreviousProps-D-IBZJIf.js";import"./SkeletonButton-Cgw-w1QX.js";import"./SkeletonInlineBlock-Ct1mjrTN.js";import"./SkeletonParagraph-C2zzRv3g.js";import"./IconSvgButton-DC3pxScj.js";import"./FormControlLabel-DQYCrA3y.js";import"./Checkbox-CIkhFSee.js";import"./SwitchBase-BWvcTXOM.js";import"./useUpdateAcl-P4WntDMv.js";const y={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
