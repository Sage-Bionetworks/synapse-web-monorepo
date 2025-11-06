import{a3 as o,w as p,a4 as a}from"./iframe-B9o6ulgU.js";import{A as m}from"./AclEditor-BXwNxhED.js";import"./index-r8ZA1smB.js";import"./UserSearchBoxV2-BcAuWO8J.js";import"./useDebouncedEffect-BSHuIR52.js";import"./use-deep-compare-effect.esm-Clbxr4tw.js";import"./uniq-yZI0ZKTx.js";import"./without-CjHbkjHI.js";import"./UserBadge-BRWqD6Ez.js";import"./SkeletonTable-CEQwMQho.js";import"./MenuItem-DlWBPIOu.js";import"./Card-CklRZ_sR.js";import"./Chip-BZa4nVPR.js";import"./Select-aab027f3.esm-BVB03L5T.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-DcssnfxC.js";import"./TeamBadge-B5Snpkj4.js";import"./SkeletonButton-BXySJEex.js";import"./SkeletonInlineBlock-BVBMyQK3.js";import"./SkeletonParagraph-BgTZ32N4.js";import"./IconSvgButton-CsuZqWPU.js";import"./FormControlLabel-CMl1Nsw_.js";import"./Checkbox-CrnRjipf.js";import"./SwitchBase-DnGYhQqV.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,k={title:"Synapse/ACL Editor",component:m,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:e(),updateResourceAccessItem:e(),removeResourceAccessItem:e(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},r={args:{resourceAccessList:[{principalId:p,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:a,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};var t,s,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
