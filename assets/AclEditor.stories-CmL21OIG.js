import{a1 as o,v as s,a2 as t}from"./iframe-DUQkn8iF.js";import{A as i}from"./AclEditor-C4_zMuBk.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-CNBvSKhj.js";import"./useDebouncedEffect-B4Mi4eVy.js";import"./useUserGroupHeader-DjnwW-1A.js";import"./UserOrTeamBadge-Dufn934O.js";import"./TeamBadge-CEv_m0Gc.js";import"./UserBadge-BLdSt8lg.js";import"./useUserBundle-2e6WFDdI.js";import"./SkeletonTable-Dx_jF5OF.js";import"./MenuItem-BPgUr9lg.js";import"./Card-CxsQey3A.js";import"./Chip-DTXJglpB.js";import"./Autocomplete-DLb05X2b.js";import"./usePreviousProps-Dv-jr2T7.js";import"./SkeletonButton-COaCvHBG.js";import"./SkeletonInlineBlock-S0DMpc3c.js";import"./SkeletonParagraph-BzReNLH2.js";import"./IconSvgButton-CUdqbKIp.js";import"./FormControlLabel-ULAaK-Wz.js";import"./Checkbox-C83dxoX4.js";import"./SwitchBase-DmNt2wvQ.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,D={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
