import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-PKSisnYN.js";import{A as i}from"./AccessRequirementAclEditor-BloaPtjG.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-e8wgHzax.js";import"./index-CHPH14xa.js";import"./_baseOrderBy-DCBrsFDV.js";import"./_baseIteratee-BO3lWvKN.js";import"./_baseMap-B9PYQd7E.js";import"./_baseEach-AR43v03m.js";import"./useQueries-DE5yqSSH.js";import"./useInfiniteQuery-CbKeCSex.js";import"./AclEditor-C3PSFNna.js";import"./UserSearchBoxV2-BBJfEzOY.js";import"./useDebouncedEffect-DEsDI4AV.js";import"./use-deep-compare-effect.esm-DoeHRFzR.js";import"./uniq-ni3FY8rS.js";import"./without-FIKTc_AK.js";import"./UserBadge-B34w-3Og.js";import"./useUserBundle-C9JUfD1-.js";import"./useSuspenseQuery-CtKV56yt.js";import"./SkeletonTable-Dkrc7QOG.js";import"./MenuItem-DV5diNve.js";import"./Card-DCVbjVFH.js";import"./Chip-BQb8GEui.js";import"./Select-aab027f3.esm-DR7BfS7R.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-CRlBE6wI.js";import"./TeamBadge-DYOwrHpa.js";import"./SkeletonButton-BGdnvIuV.js";import"./SkeletonInlineBlock-CSwI3yx9.js";import"./SkeletonParagraph-C0R5SJWX.js";import"./IconSvgButton-CDDjgJ6p.js";import"./FormControlLabel-oz1IItSj.js";import"./Checkbox-Df__YbMF.js";import"./SwitchBase-hDycEQAb.js";import"./useUpdateAcl-BcceQKvp.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const se=["MockDemoExistingAcl","MockDemoNoExistingAcl","DevDemo"];export{t as DevDemo,r as MockDemoExistingAcl,s as MockDemoNoExistingAcl,se as __namedExportsOrder,re as default};
