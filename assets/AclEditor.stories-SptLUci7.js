import{a1 as o,v as s,a2 as t}from"./iframe-KW3Ki4s5.js";import{A as i}from"./AclEditor-ChFuMCXP.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-ycH3wZtb.js";import"./useDebouncedEffect-DI29ADIv.js";import"./UserBadge-CKE8L02R.js";import"./useUserBundle-DcHRF-pN.js";import"./queryOptions-C9woPjwX.js";import"./SkeletonTable-DKXzhoLj.js";import"./MenuItem-Cxj9mVkl.js";import"./Card-BJGUbHlx.js";import"./Chip-M2qGtBYy.js";import"./UserOrTeamBadge-DaBJZHjy.js";import"./TeamBadge-3V3sElnX.js";import"./Autocomplete-BW2G6CrW.js";import"./usePreviousProps-pcPmgYqd.js";import"./SkeletonButton-Bn8xeqTi.js";import"./SkeletonInlineBlock-Cx7fF-gW.js";import"./SkeletonParagraph-iKwtI13n.js";import"./IconSvgButton-A4mh2NOT.js";import"./FormControlLabel-DD0DDA_y.js";import"./Checkbox-D-msWVBX.js";import"./SwitchBase-Bk1kmRTR.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,D={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const f=["Demo"];export{e as Demo,f as __namedExportsOrder,D as default};
