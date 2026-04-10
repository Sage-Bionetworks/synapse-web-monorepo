import{a1 as o,v as s,a2 as t}from"./iframe-FsOg9uwU.js";import{A as i}from"./AclEditor-GZjYqlfw.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-PBqxDBJQ.js";import"./useDebouncedEffect-BzQrwVMU.js";import"./useUserGroupHeader-CLfJ9kmo.js";import"./UserOrTeamBadge-D0NT5qeZ.js";import"./TeamBadge-CFTbV6P9.js";import"./UserBadge-BgWUpTwS.js";import"./useUserBundle-DlEfeCz8.js";import"./SkeletonTable-D70G5IuO.js";import"./MenuItem-Cj71RViP.js";import"./Card-Bl03myfA.js";import"./Chip-CwjHvWgT.js";import"./Autocomplete-BJva2ObM.js";import"./usePreviousProps-ryOaqf0v.js";import"./SkeletonButton-o5wIbKa8.js";import"./SkeletonInlineBlock-C-VJXZCx.js";import"./SkeletonParagraph-CbUekLjy.js";import"./IconSvgButton-Bb9yFuEF.js";import"./FormControlLabel-CVGFhKb1.js";import"./Checkbox-oTkKgI0N.js";import"./SwitchBase-B6R5JrIN.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,D={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
