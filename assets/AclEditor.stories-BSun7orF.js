import{a1 as o,v as s,a2 as t}from"./iframe-zB-jZjF1.js";import{A as i}from"./AclEditor-Bt4dcm-4.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-CvWkNX_h.js";import"./useDebouncedEffect-BgMfo1QX.js";import"./useUserGroupHeader-aV7k__0H.js";import"./UserOrTeamBadge-BiOTE_VT.js";import"./TeamBadge-Dey48b7e.js";import"./UserBadge-t9MoYrmb.js";import"./useUserBundle-DmoRhqzX.js";import"./SkeletonTable-Xio-92ZC.js";import"./MenuItem-BWX0VE3I.js";import"./Card-Den_1IvA.js";import"./Chip-C8ZEijAb.js";import"./Autocomplete-DdeAb70f.js";import"./usePreviousProps-Bo09v6Gt.js";import"./SkeletonButton-DitOEAxO.js";import"./SkeletonInlineBlock-CeW9qPuC.js";import"./SkeletonParagraph-D0noDT_a.js";import"./IconSvgButton-jh-HHXNb.js";import"./FormControlLabel-XYuCSYJu.js";import"./Checkbox-Du6iielx.js";import"./SwitchBase-BJlTVCbW.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,D={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
