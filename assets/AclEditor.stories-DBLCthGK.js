import{a1 as o,v as s,a2 as t}from"./iframe-AuqRm6Xj.js";import{A as i}from"./AclEditor-7o2tbFAu.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-DGIHJwIi.js";import"./useDebouncedEffect-Dl0caD6t.js";import"./UserBadge-94-bM4a7.js";import"./useUserBundle-B1FabnzQ.js";import"./SkeletonTable-C0VRg4xn.js";import"./MenuItem-e1skeM_z.js";import"./Card-D38Rt5-Y.js";import"./Chip-DC7pM5qx.js";import"./UserOrTeamBadge-Cdcrt_cw.js";import"./TeamBadge-OO8nhNc2.js";import"./Autocomplete-C2p2_ZC-.js";import"./usePreviousProps-CeiRwp8W.js";import"./SkeletonButton-De9SiVJE.js";import"./SkeletonInlineBlock-CL4j-wc-.js";import"./SkeletonParagraph-B6IfoMOd.js";import"./IconSvgButton-Cq6PtPVt.js";import"./FormControlLabel-hQp6mAf4.js";import"./Checkbox-MxfcR8V3.js";import"./SwitchBase-DkN8Vn3a.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,y={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
