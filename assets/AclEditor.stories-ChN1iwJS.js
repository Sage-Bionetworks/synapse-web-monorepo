import{a1 as o,v as s,a2 as t}from"./iframe-90f2SQV6.js";import{A as i}from"./AclEditor-B_oYw0lK.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-CKMIGSI-.js";import"./useDebouncedEffect-CFr_xHr7.js";import"./useUserGroupHeader-3u-W-R_V.js";import"./UserOrTeamBadge-C-e6rx3D.js";import"./TeamBadge-DvAvwUrn.js";import"./UserBadge-BhjoWwGQ.js";import"./useUserBundle-C1tRTjHW.js";import"./SkeletonTable-CUhBOjKD.js";import"./MenuItem-BuPaY9i0.js";import"./Card-BjkUBjOd.js";import"./Chip-DkWyanB2.js";import"./Autocomplete-D1cVZgEB.js";import"./usePreviousProps-BMS-JDpN.js";import"./SkeletonButton-DayzDEfl.js";import"./SkeletonInlineBlock-5v-gOL2x.js";import"./SkeletonParagraph-Bta19Z9s.js";import"./IconSvgButton-C60PG_rF.js";import"./FormControlLabel-DglLXMgl.js";import"./Checkbox-CF10eWfP.js";import"./SwitchBase-BM0I7EUL.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,D={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
