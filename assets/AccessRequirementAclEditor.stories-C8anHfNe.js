import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-BE9PbKHz.js";import{A as i}from"./AccessRequirementAclEditor-B2_iY_cS.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CDjCRRV0.js";import"./index-Y-POCSpx.js";import"./_baseOrderBy-KBQpSRRG.js";import"./_baseIteratee-BDrJ2YLg.js";import"./_baseMap-Bl0VqtCc.js";import"./_baseEach-BRNZQGBt.js";import"./useQueries-DxKdEVnO.js";import"./useInfiniteQuery-DENunen_.js";import"./AclEditor-CnQh46sn.js";import"./UserSearchBoxV2-DbYp4qQr.js";import"./useDebouncedEffect-m0trbjn7.js";import"./use-deep-compare-effect.esm-DVgw6rTb.js";import"./uniq-aLN-a8gH.js";import"./without-BoELuCtv.js";import"./UserBadge-C6jEbLoI.js";import"./useUserBundle-CnmcW3Hx.js";import"./useSuspenseQuery-CEXBd55g.js";import"./SkeletonTable-BL3DzlJY.js";import"./MenuItem-CzNz3VcW.js";import"./Card-Z11x_8d2.js";import"./Chip-TAfdcvOh.js";import"./Select-aab027f3.esm-DkoFzdrr.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-DwrTfPaa.js";import"./TeamBadge-BPBLBwfu.js";import"./SkeletonButton-DJTXNqO5.js";import"./SkeletonInlineBlock-CIXdsi0t.js";import"./SkeletonParagraph-Sl7bNyS_.js";import"./IconSvgButton-BzgUaNjS.js";import"./FormControlLabel-BWKwjAXp.js";import"./Checkbox-BCZSGj6B.js";import"./SwitchBase-Dr1KbuyN.js";import"./useUpdateAcl-CncdFfRJ.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
