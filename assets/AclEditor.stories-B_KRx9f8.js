import{a1 as o,v as s,a2 as t}from"./iframe-DjCs0N9T.js";import{A as i}from"./AclEditor-2qZFpWfc.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-DUBv2mqO.js";import"./useDebouncedEffect-COmGLK0u.js";import"./UserBadge-BDehV7Zq.js";import"./useUserBundle-Bj8x-K_h.js";import"./SkeletonTable-C6E9liFP.js";import"./MenuItem-DkdGwV6_.js";import"./Card-CYz3fxIC.js";import"./Chip-DtYkZqnx.js";import"./UserOrTeamBadge-WK5CmVHD.js";import"./TeamBadge-BxjCEMls.js";import"./Autocomplete-BWEgSIuX.js";import"./usePreviousProps-BWpwLj3U.js";import"./SkeletonButton-ra5Cjzqp.js";import"./SkeletonInlineBlock-BcoZAk2Q.js";import"./SkeletonParagraph-COuF-1cd.js";import"./IconSvgButton-BmN8kKr0.js";import"./FormControlLabel-DzJTgcEX.js";import"./Checkbox-s3F0M9zi.js";import"./SwitchBase-VN_kzZ6i.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,y={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
