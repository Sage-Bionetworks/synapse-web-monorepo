import{a1 as o,v as s,a2 as t}from"./iframe-CZUUdnAP.js";import{A as i}from"./AclEditor-3IWsVhZQ.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-CusV3gI5.js";import"./useDebouncedEffect-DAbATWp6.js";import"./UserBadge-CgUWMwJt.js";import"./useUserBundle-CqpwNloT.js";import"./queryOptions-C9woPjwX.js";import"./SkeletonTable-B92SNSTz.js";import"./MenuItem-BQBfTSFf.js";import"./Card-BktRylCw.js";import"./Chip-vSFEg4gP.js";import"./UserOrTeamBadge-4SSEN_r1.js";import"./TeamBadge-BGxFrnkp.js";import"./Autocomplete-Dpt9MbEp.js";import"./usePreviousProps-BYJ5T-gX.js";import"./SkeletonButton-u1mXBMmd.js";import"./SkeletonInlineBlock-Dwwns8en.js";import"./SkeletonParagraph-Dccn5vm_.js";import"./IconSvgButton-B_NxUklC.js";import"./FormControlLabel-Cv5LGeMa.js";import"./Checkbox-DsRD5Alo.js";import"./SwitchBase-B1xcpsp0.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,D={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
