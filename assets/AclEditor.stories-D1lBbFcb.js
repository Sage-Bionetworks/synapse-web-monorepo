import{a1 as o,v as s,a2 as t}from"./iframe-tHCTQw-h.js";import{A as i}from"./AclEditor-B7Ndz-PD.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-ByfTn2K1.js";import"./useDebouncedEffect-D48MhQNv.js";import"./useUserGroupHeader-DDShxnvZ.js";import"./UserOrTeamBadge-BMQ8Y3hH.js";import"./TeamBadge-CeLHtqZZ.js";import"./UserBadge-Bmg1fZEL.js";import"./useUserBundle-CFNqkFnY.js";import"./SkeletonTable-DF9YBfOn.js";import"./MenuItem-EF7hTZ7c.js";import"./Card-DmjFo3eO.js";import"./Chip-BPZys9eM.js";import"./Autocomplete-CvYO56jl.js";import"./usePreviousProps-DdRbQRXC.js";import"./SkeletonButton-COGIamRT.js";import"./SkeletonInlineBlock-BcgTDPGl.js";import"./SkeletonParagraph-ltGtfGmy.js";import"./IconSvgButton-gR0SBfhX.js";import"./FormControlLabel-CsLV9TPO.js";import"./Checkbox-DrqmkyJE.js";import"./SwitchBase-D0KX-hor.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,D={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
