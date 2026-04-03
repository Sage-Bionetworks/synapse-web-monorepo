import{a1 as o,v as s,a2 as t}from"./iframe-DYswlUGP.js";import{A as i}from"./AclEditor-BBhKJf4G.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-CXXWYlxV.js";import"./useDebouncedEffect-C1sHbCvU.js";import"./UserBadge-DUmGtykH.js";import"./useUserBundle-DOc2ZPa9.js";import"./SkeletonTable-D2i5wmbG.js";import"./MenuItem-_kEtlbZc.js";import"./Card-CwPDBa8H.js";import"./Chip-DAxgxn8_.js";import"./UserOrTeamBadge-B9AR19GT.js";import"./TeamBadge-DU43LRAC.js";import"./Autocomplete-CAKxcECi.js";import"./usePreviousProps-8XNsrnMc.js";import"./SkeletonButton-DEMQuh9j.js";import"./SkeletonInlineBlock-CUdvST4e.js";import"./SkeletonParagraph-DYuPzAGZ.js";import"./IconSvgButton-BdBTGzef.js";import"./FormControlLabel-D5Zyhonu.js";import"./Checkbox-BJOMAjKn.js";import"./SwitchBase-Dw5npIqo.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,y={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const D=["Demo"];export{e as Demo,D as __namedExportsOrder,y as default};
