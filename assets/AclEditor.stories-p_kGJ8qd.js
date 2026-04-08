import{a1 as o,v as s,a2 as t}from"./iframe-D7cxPiDf.js";import{A as i}from"./AclEditor-CX_DdK4R.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-DLYhe0E8.js";import"./useDebouncedEffect-7E0-czL9.js";import"./UserBadge-fquBPCcK.js";import"./useUserBundle-BfK4pX7T.js";import"./SkeletonTable-CXYD3wmd.js";import"./MenuItem-D-DyuXNw.js";import"./Card-w3ZTOvJG.js";import"./Chip-DysZYHv9.js";import"./UserOrTeamBadge-fPQHcD3V.js";import"./TeamBadge-DS3X4FjG.js";import"./Autocomplete-qIDixVzh.js";import"./usePreviousProps-4c5lPU7n.js";import"./SkeletonButton-C1ogbO9H.js";import"./SkeletonInlineBlock-CPizO8Fa.js";import"./SkeletonParagraph-BqM2-1Ca.js";import"./IconSvgButton-BYdqSBrD.js";import"./FormControlLabel-C2lYTuKb.js";import"./Checkbox-D7IQ0D5W.js";import"./SwitchBase-YNIgnTmA.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,y={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
