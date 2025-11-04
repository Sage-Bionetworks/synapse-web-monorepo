import{a3 as o,w as p,a4 as a}from"./iframe-BDc0Xlhy.js";import{A as m}from"./AclEditor-BI1OcmRZ.js";import"./index-r8ZA1smB.js";import"./UserSearchBoxV2-B-GLFMI0.js";import"./useDebouncedEffect-CnkYQ3kG.js";import"./use-deep-compare-effect.esm-DHzSo00o.js";import"./uniq-B8EPpNaJ.js";import"./without-DKR0wDNr.js";import"./UserBadge-DJ1RxlFI.js";import"./SkeletonTable-DvNgt2M0.js";import"./MenuItem-CGmsTxjm.js";import"./Card-Cd1qTK2e.js";import"./Chip-BVXU1kgT.js";import"./Select-aab027f3.esm-LYXm8y3H.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-BqIWhxBx.js";import"./TeamBadge-BSGmQsKz.js";import"./SkeletonButton-DOlvDp9u.js";import"./SkeletonInlineBlock-BzdKRqEw.js";import"./SkeletonParagraph-BrPTge09.js";import"./IconSvgButton-CzDFgTfP.js";import"./FormControlLabel-B4mFleYZ.js";import"./Checkbox-CqOtMQXw.js";import"./SwitchBase-DmlvyMWs.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,k={title:"Synapse/ACL Editor",component:m,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:e(),updateResourceAccessItem:e(),removeResourceAccessItem:e(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},r={args:{resourceAccessList:[{principalId:p,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:a,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};var t,s,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    resourceAccessList: [{
      principalId: MOCK_USER_ID,
      accessType: [ACCESS_TYPE.REVIEW_SUBMISSIONS]
    }, {
      principalId: MOCK_TEAM_ID,
      accessType: [ACCESS_TYPE.EXEMPTION_ELIGIBLE]
    }]
  },
  parameters: {
    stack: 'mock'
  }
}`,...(i=(s=r.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const v=["Demo"];export{r as Demo,v as __namedExportsOrder,k as default};
