import{a3 as o,w as t,a4 as s}from"./iframe-CmoSAPSB.js";import{A as i}from"./AclEditor-CpNA2ds9.js";import"./index-Chi_LkuB.js";import"./UserSearchBoxV2-PBclEo5v.js";import"./useDebouncedEffect-D5cIdkw7.js";import"./use-deep-compare-effect.esm-DN6zG_QJ.js";import"./uniq-CmBLLPZA.js";import"./without-Bamt9vgf.js";import"./UserBadge-zo9ivwKg.js";import"./useUserBundle-CwnnfMaT.js";import"./useSuspenseQuery-BKY6Qa88.js";import"./SkeletonTable-BfBRnH8d.js";import"./MenuItem-Dt0yDuqb.js";import"./Card-KnQ9tlyZ.js";import"./Chip-B9lbWoVh.js";import"./Select-aab027f3.esm-CJ6noaGq.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-Bm0VfmUj.js";import"./TeamBadge-CVCPAnxp.js";import"./SkeletonButton-BiCcSD_e.js";import"./SkeletonInlineBlock-Cx8PzyyP.js";import"./SkeletonParagraph-JgANzJ5n.js";import"./IconSvgButton-DAzxvgNN.js";import"./FormControlLabel-DiAADwWJ.js";import"./Checkbox-CDdvC1LR.js";import"./SwitchBase-DXooODN3.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,k={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:e(),updateResourceAccessItem:e(),removeResourceAccessItem:e(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},r={args:{resourceAccessList:[{principalId:t,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:s,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const v=["Demo"];export{r as Demo,v as __namedExportsOrder,k as default};
