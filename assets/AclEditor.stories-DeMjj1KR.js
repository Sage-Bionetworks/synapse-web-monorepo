import{a1 as o,v as s,a2 as t}from"./iframe-sZrYZ6Wp.js";import{A as i}from"./AclEditor-D8bZtbRY.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-DCLQ4kXf.js";import"./useDebouncedEffect-BvtZHxiB.js";import"./UserBadge-Dg-mhIDf.js";import"./useUserBundle-Sq4CKI0B.js";import"./queryOptions-C9woPjwX.js";import"./SkeletonTable-ChIFdfhg.js";import"./MenuItem-2yGPkNWm.js";import"./Card-wFiE_sMv.js";import"./Chip-BvOGwdWK.js";import"./UserOrTeamBadge-DwA4RTdg.js";import"./TeamBadge-BNDWNsA5.js";import"./Autocomplete-oEmViLzX.js";import"./usePreviousProps-zdMDBRmY.js";import"./SkeletonButton--UCUv7uI.js";import"./SkeletonInlineBlock-RlErow6J.js";import"./SkeletonParagraph-QSdi-JVA.js";import"./IconSvgButton-Dti6Zdgr.js";import"./FormControlLabel-DawJBkuM.js";import"./Checkbox-LRYr4g4U.js";import"./SwitchBase-W3Oi4NaW.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,D={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
