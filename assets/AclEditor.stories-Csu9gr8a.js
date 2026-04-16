import{a1 as o,v as s,a2 as t}from"./iframe-CDo31VQT.js";import{A as i}from"./AclEditor-DPHJZm_R.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-DQVrJBwk.js";import"./useDebouncedEffect-pm5O216d.js";import"./useUserGroupHeader-Cf-nNW5u.js";import"./UserOrTeamBadge-BrTBi1bT.js";import"./TeamBadge-BKkuj7BD.js";import"./UserBadge-CglgAQ0Y.js";import"./useUserBundle-BO5FAfwo.js";import"./SkeletonTable-DUiAsn0J.js";import"./MenuItem-CM8kbxyL.js";import"./Card-BmXOSgoq.js";import"./Chip-B6hxaUER.js";import"./Autocomplete-TnARubMI.js";import"./usePreviousProps-CMRxk_ZT.js";import"./SkeletonButton-5CdV1WvK.js";import"./SkeletonInlineBlock-DWU8rLPE.js";import"./SkeletonParagraph-KDbQ1Dqi.js";import"./IconSvgButton-DISaJiDN.js";import"./FormControlLabel-D6JSzQu3.js";import"./Checkbox-BRd7sRay.js";import"./SwitchBase-UfViqCLi.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,D={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
