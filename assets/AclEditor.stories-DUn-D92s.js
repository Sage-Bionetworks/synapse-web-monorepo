import{a1 as o,v as s,a2 as t}from"./iframe-DiPm50UB.js";import{A as i}from"./AclEditor-CT_YuQ4W.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-LsGLwxCO.js";import"./useDebouncedEffect-Duno4CzS.js";import"./useUserGroupHeader-HRrxzYDs.js";import"./UserOrTeamBadge-D0qHeicX.js";import"./TeamBadge-CrPr9jIZ.js";import"./UserBadge-BjVrhUSw.js";import"./useUserBundle-Xy4g38YR.js";import"./SkeletonTable-DrjQboaV.js";import"./MenuItem-V4SUklHJ.js";import"./Card-DJkxs2b6.js";import"./Chip-FHtW8UvL.js";import"./Autocomplete-Cwaz2roQ.js";import"./usePreviousProps-Ca8WKoot.js";import"./SkeletonButton-Bvb1MiX7.js";import"./SkeletonInlineBlock-LodHGZ4G.js";import"./SkeletonParagraph-CeZAzIZD.js";import"./IconSvgButton-BcaNoDpC.js";import"./FormControlLabel-DJXVjsUK.js";import"./Checkbox-BcJ_w-AA.js";import"./SwitchBase-CIORlFGi.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,D={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
