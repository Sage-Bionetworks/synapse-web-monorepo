import{a1 as o,v as s,a2 as t}from"./iframe-BFtw_QUH.js";import{A as i}from"./AclEditor-B-TpytUi.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-Cfjsj9wJ.js";import"./useDebouncedEffect-B7g7aQPp.js";import"./useUserGroupHeader-BQ7DrkF-.js";import"./UserOrTeamBadge-DhMwyPLc.js";import"./TeamBadge-B7N-YTMh.js";import"./UserBadge-Bh5lHfno.js";import"./useUserBundle-CUqXhyvg.js";import"./SkeletonTable-CwH7xhuw.js";import"./MenuItem-BSH3FhSr.js";import"./Card-CxpAtWPZ.js";import"./Chip-CtpBh3N1.js";import"./Autocomplete-DkUQEECU.js";import"./usePreviousProps-DmrmMyQ5.js";import"./SkeletonButton-CsTw-ZPX.js";import"./SkeletonInlineBlock-BmmJQ24u.js";import"./SkeletonParagraph-DsZs81_F.js";import"./IconSvgButton-BQU2FrnX.js";import"./FormControlLabel-DZ2iiYCt.js";import"./Checkbox-BC1SCJw9.js";import"./SwitchBase-C1pJsVMO.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,D={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
