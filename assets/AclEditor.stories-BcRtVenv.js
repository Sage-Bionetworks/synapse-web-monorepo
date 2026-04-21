import{a1 as o,v as s,a2 as t}from"./iframe-BDH9K3aQ.js";import{A as i}from"./AclEditor-CAh3J0eO.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-CJ-fBakk.js";import"./useDebouncedEffect-B44LhlfG.js";import"./UserBadge-B2zVNa36.js";import"./useUserBundle-BHTJB607.js";import"./queryOptions-C9woPjwX.js";import"./SkeletonTable-DpnDnZ6A.js";import"./MenuItem-x7e5wLEf.js";import"./Card-BL3I6Ntg.js";import"./Chip-DozeHiZL.js";import"./UserOrTeamBadge-BtOsH5S_.js";import"./TeamBadge-DAPD5zpQ.js";import"./Autocomplete-CwnIKOhs.js";import"./usePreviousProps-DxAgpis0.js";import"./SkeletonButton-8Qglx0Lx.js";import"./SkeletonInlineBlock-C7j3Fduy.js";import"./SkeletonParagraph-4XI-GQEQ.js";import"./IconSvgButton-Bz39mJqZ.js";import"./FormControlLabel-hO8hM_0u.js";import"./Checkbox-Bh-etNab.js";import"./SwitchBase-DtmVnPYE.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,D={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
