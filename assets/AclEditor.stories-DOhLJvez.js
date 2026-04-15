import{a1 as o,v as s,a2 as t}from"./iframe-CkqKht9A.js";import{A as i}from"./AclEditor-KJGHxR0b.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-BVT0I0uL.js";import"./useDebouncedEffect-DUj_Oz7P.js";import"./useUserGroupHeader-C0iuMqVQ.js";import"./UserOrTeamBadge--_OWpZFM.js";import"./TeamBadge-DM5rax7j.js";import"./UserBadge-BSfWwbq9.js";import"./useUserBundle-BsneMIeI.js";import"./SkeletonTable-CWHVzuOA.js";import"./MenuItem-Dmh5bflc.js";import"./Card-Z3IbB4xH.js";import"./Chip-BmVL4eVd.js";import"./Autocomplete-CVxL4Aj8.js";import"./usePreviousProps-Dg3neEkv.js";import"./SkeletonButton-Di865Zvp.js";import"./SkeletonInlineBlock-Du1ZrXhF.js";import"./SkeletonParagraph-BjhKqE1J.js";import"./IconSvgButton-CKMVqSyJ.js";import"./FormControlLabel-SU0MesBd.js";import"./Checkbox-D91AhJdm.js";import"./SwitchBase-DXM-qXId.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,D={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
