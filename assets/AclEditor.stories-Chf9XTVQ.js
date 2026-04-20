import{a1 as o,v as s,a2 as t}from"./iframe-DI_DW6I7.js";import{A as i}from"./AclEditor-DUJLbw6D.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-CMfr07Cz.js";import"./useDebouncedEffect-DBLZTGBm.js";import"./UserBadge-Dcp1qyfD.js";import"./useUserBundle-sgovs3e8.js";import"./queryOptions-C9woPjwX.js";import"./SkeletonTable-B1K8a5wm.js";import"./MenuItem-D7FiHfrS.js";import"./Card-DSTJfyTC.js";import"./Chip-BtT8gxc3.js";import"./UserOrTeamBadge-DgJ6dgGE.js";import"./TeamBadge-NcL1MgIe.js";import"./Autocomplete-wzFdhmOr.js";import"./usePreviousProps-CRw8wBaq.js";import"./SkeletonButton-VuyYmUxo.js";import"./SkeletonInlineBlock-2jyq21QW.js";import"./SkeletonParagraph-iVrUoPVl.js";import"./IconSvgButton-Bkp2y_Ny.js";import"./FormControlLabel-DJ3CxxVI.js";import"./Checkbox-CN4UXvGM.js";import"./SwitchBase-CgMZiCSG.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,D={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
