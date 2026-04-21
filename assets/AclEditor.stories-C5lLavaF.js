import{a1 as o,v as s,a2 as t}from"./iframe-B_8Pbtyy.js";import{A as i}from"./AclEditor-BUgXD8hy.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-CVyzpmCf.js";import"./useDebouncedEffect-DWn1Wu-d.js";import"./UserBadge-C_HLmkM9.js";import"./useUserBundle-AYZLZe6H.js";import"./queryOptions-C9woPjwX.js";import"./SkeletonTable-DZYgPiW7.js";import"./MenuItem-B5j_dwt3.js";import"./Card-TCSc9gJb.js";import"./Chip-CrOe6yxn.js";import"./UserOrTeamBadge-ZWxcaZuh.js";import"./TeamBadge-nlQ59IUz.js";import"./Autocomplete-BwejXa9T.js";import"./usePreviousProps-Bh7W6lyD.js";import"./SkeletonButton-C2boYaKt.js";import"./SkeletonInlineBlock-ChbxFlxk.js";import"./SkeletonParagraph-CanILnI9.js";import"./IconSvgButton-Ba6ddEc-.js";import"./FormControlLabel-Dkt0Kpn_.js";import"./Checkbox-DCx96Ow5.js";import"./SwitchBase-CoXKjNiI.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,D={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
