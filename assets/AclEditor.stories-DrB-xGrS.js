import{a1 as o,v as s,a2 as t}from"./iframe-BfB6FrYj.js";import{A as i}from"./AclEditor-0JGJ6mg_.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-Cdgoz0VP.js";import"./useDebouncedEffect-Cfo8SjOi.js";import"./UserBadge-Db9DswDw.js";import"./useUserBundle-3O_Oxfpc.js";import"./SkeletonTable-KlaWzsOV.js";import"./MenuItem-CG4XGW7R.js";import"./Card-CnH2dOyE.js";import"./Chip-H1nC51OX.js";import"./UserOrTeamBadge-BTEDKi44.js";import"./TeamBadge-CJtT7GTs.js";import"./Autocomplete-Debb-qQe.js";import"./usePreviousProps-Dh5fkFTb.js";import"./SkeletonButton-CyKkbiIk.js";import"./SkeletonInlineBlock-CtmRc0d4.js";import"./SkeletonParagraph-CD0x-Nfw.js";import"./IconSvgButton-Cy_5KqDf.js";import"./FormControlLabel-jJq3AgOA.js";import"./Checkbox-CZIHvRti.js";import"./SwitchBase-CpXG8q-V.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,y={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
