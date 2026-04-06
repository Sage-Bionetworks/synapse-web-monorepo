import{a1 as o,v as s,a2 as t}from"./iframe-BPNyJNxm.js";import{A as i}from"./AclEditor-DXIti7td.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-B0co5a5L.js";import"./useDebouncedEffect-CpYTiak8.js";import"./UserBadge-BPa7l308.js";import"./useUserBundle-D2j_CZi9.js";import"./SkeletonTable-DBeYWS70.js";import"./MenuItem-CEXBRyzq.js";import"./Card-B4zIQ-hG.js";import"./Chip-Hk6f0McD.js";import"./UserOrTeamBadge-37LRL7Gh.js";import"./TeamBadge-DEYlikwi.js";import"./Autocomplete-BP7i1wvE.js";import"./usePreviousProps--x0xYk9p.js";import"./SkeletonButton-DKmXtnFb.js";import"./SkeletonInlineBlock-YVxGd7KG.js";import"./SkeletonParagraph-BxBZJF2o.js";import"./IconSvgButton-BHDlEBD2.js";import"./FormControlLabel-DMh_lHXX.js";import"./Checkbox-G1oNYZiA.js";import"./SwitchBase-BHyxwE7g.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,y={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
