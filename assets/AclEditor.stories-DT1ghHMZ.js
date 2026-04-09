import{a1 as o,v as s,a2 as t}from"./iframe-I9EoyWQf.js";import{A as i}from"./AclEditor-cKidHLcT.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-BgYDlc1N.js";import"./useDebouncedEffect-DRUnOLf-.js";import"./useUserGroupHeader-2ZjU8d_Z.js";import"./UserOrTeamBadge-B970kYrj.js";import"./TeamBadge-C2CWKcU_.js";import"./UserBadge-DfnAepuT.js";import"./useUserBundle-B0BzK8VS.js";import"./SkeletonTable-Daoy3Wk1.js";import"./MenuItem-DLjd3Exv.js";import"./Card-xjD4swog.js";import"./Chip-qFrw06qV.js";import"./Autocomplete-DjJ8XXAP.js";import"./usePreviousProps-D8JQgpCi.js";import"./SkeletonButton-BZ4IW0NV.js";import"./SkeletonInlineBlock-CnFxuHgE.js";import"./SkeletonParagraph-C2Jym8Lt.js";import"./IconSvgButton-DpR3Ifw5.js";import"./FormControlLabel-C49ko43X.js";import"./Checkbox-BsQp1kE6.js";import"./SwitchBase-BW1Maf3V.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,D={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
