import{a1 as o,v as s,a2 as t}from"./iframe-FEhVLLlO.js";import{A as i}from"./AclEditor-B7eni7zI.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-BNRLD114.js";import"./useDebouncedEffect-LNF6l_XO.js";import"./useUserGroupHeader-CFFdJM92.js";import"./UserOrTeamBadge-C6sHGAPI.js";import"./TeamBadge-C8u27I6r.js";import"./UserBadge-MRmSzjU6.js";import"./useUserBundle-pC4-2Gey.js";import"./SkeletonTable-B83fe7X5.js";import"./MenuItem-CP-QVevM.js";import"./Card-BONVzKOo.js";import"./Chip-CX6tLmAn.js";import"./Autocomplete-BXXvM_Tf.js";import"./usePreviousProps-CfQV1P60.js";import"./SkeletonButton-Co5le0HJ.js";import"./SkeletonInlineBlock-DfOva5mF.js";import"./SkeletonParagraph-u_Ry22JM.js";import"./IconSvgButton-BULkJR2Q.js";import"./FormControlLabel-C3drqlKP.js";import"./Checkbox-BfiTC_Z_.js";import"./SwitchBase-DxajR-py.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,D={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
