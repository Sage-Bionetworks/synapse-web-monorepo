import{a1 as o,v as s,a2 as t}from"./iframe-xQMv0B7c.js";import{A as i}from"./AclEditor-MDQfnN76.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-35hob7Gf.js";import"./useDebouncedEffect-BEyucQ_z.js";import"./UserBadge-Dy2rNvc3.js";import"./useUserBundle-CwvRZ8ZR.js";import"./SkeletonTable-C8xyrBR9.js";import"./MenuItem-CFXGxp9X.js";import"./Card-Djer30mf.js";import"./Chip-T-Cvxbkm.js";import"./UserOrTeamBadge-BDeoBNcA.js";import"./TeamBadge-D5j9eOzO.js";import"./Autocomplete-BIwzOm9_.js";import"./usePreviousProps-vfY-8rpx.js";import"./SkeletonButton-BO78PNXN.js";import"./SkeletonInlineBlock-DTwWIKu1.js";import"./SkeletonParagraph-B_dMNDrm.js";import"./IconSvgButton-D6D0KDkI.js";import"./FormControlLabel-GDbx5q6Y.js";import"./Checkbox-BTp39wUH.js";import"./SwitchBase-BC6L5hXz.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,y={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
