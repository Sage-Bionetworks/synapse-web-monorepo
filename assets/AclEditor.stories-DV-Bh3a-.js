import{a1 as o,v as s,a2 as t}from"./iframe-ClOjSJTq.js";import{A as i}from"./AclEditor-CHUhaHbx.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-TiAKfxMp.js";import"./useDebouncedEffect-BKM7Wg5j.js";import"./UserBadge-BJCbmXWW.js";import"./useUserBundle-F9LYJoss.js";import"./SkeletonTable-j4z7TzDn.js";import"./MenuItem-DYvQjb0q.js";import"./Card-ChQtRhb_.js";import"./Chip-CnxOiplN.js";import"./UserOrTeamBadge-C23S8KZO.js";import"./TeamBadge-Ce6zs6pC.js";import"./Autocomplete-SfvGNW1s.js";import"./usePreviousProps-D9lcDy2V.js";import"./SkeletonButton-_jksuL_Y.js";import"./SkeletonInlineBlock-BlfzAWSG.js";import"./SkeletonParagraph-C8wM_A5n.js";import"./IconSvgButton-vblARVlo.js";import"./FormControlLabel-CFZjeheO.js";import"./Checkbox-CeKJbUBf.js";import"./SwitchBase-CdsD8oG7.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,y={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
