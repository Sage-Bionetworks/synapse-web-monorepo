import{a1 as o,v as s,a2 as t}from"./iframe-ebumedXL.js";import{A as i}from"./AclEditor-BUZCGa-M.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-Dv8ml4J-.js";import"./useDebouncedEffect-YWXeh-W5.js";import"./UserBadge-Cxc18L8a.js";import"./useUserBundle-ClJAa-1h.js";import"./queryOptions-C9woPjwX.js";import"./SkeletonTable-D1WsuyYZ.js";import"./MenuItem-DMONT234.js";import"./Card-TzJMzE0i.js";import"./Chip-DwqfSnWD.js";import"./UserOrTeamBadge-BcM60gWe.js";import"./TeamBadge-BHQ5XRWZ.js";import"./Autocomplete-CEr_Ge2j.js";import"./usePreviousProps-UzYqkF7W.js";import"./SkeletonButton-ClK4nZ4V.js";import"./SkeletonInlineBlock--tfqxNwn.js";import"./SkeletonParagraph-CjkSb5xZ.js";import"./IconSvgButton-DsafexN-.js";import"./FormControlLabel-EbJgvWzn.js";import"./Checkbox-CZffvlFh.js";import"./SwitchBase-hiOfS_D4.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,D={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
