import{a1 as o,v as s,a2 as t}from"./iframe-BJt7q_JV.js";import{A as i}from"./AclEditor-B_EyOXOR.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-lFi7N7kn.js";import"./useDebouncedEffect-DljHfkX5.js";import"./useUserGroupHeader-D1CyPOkN.js";import"./UserOrTeamBadge-CLetIjKX.js";import"./TeamBadge-BJMPS39-.js";import"./UserBadge-Bct9zt1u.js";import"./useUserBundle-DxuM9JQF.js";import"./SkeletonTable-BoHNQ0XH.js";import"./MenuItem-DUuZTALA.js";import"./Card-C9SkN0MX.js";import"./Chip-D4cY5ocF.js";import"./Autocomplete-2yZW5YM0.js";import"./usePreviousProps-_k1Molu3.js";import"./SkeletonButton-CQzFd6lb.js";import"./SkeletonInlineBlock-DWTLId8s.js";import"./SkeletonParagraph-76490YmJ.js";import"./IconSvgButton-BwIatMVa.js";import"./FormControlLabel-BZzQmDal.js";import"./Checkbox-Beiu9b0t.js";import"./SwitchBase-B6wo5qcW.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,D={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
