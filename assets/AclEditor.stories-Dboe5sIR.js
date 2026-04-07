import{a1 as o,v as s,a2 as t}from"./iframe-BqdsSWZd.js";import{A as i}from"./AclEditor-DfgIncBP.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-BgN-JR1h.js";import"./useDebouncedEffect-CLjkSd3w.js";import"./UserBadge-CBefG1yG.js";import"./useUserBundle-D7Oq3eOX.js";import"./SkeletonTable-BNCsFwsu.js";import"./MenuItem-BDOSlvEx.js";import"./Card-rcxhgfJE.js";import"./Chip-QNpY_KS_.js";import"./UserOrTeamBadge-DmHt8I9q.js";import"./TeamBadge-Cd3bGV8c.js";import"./Autocomplete-D2L8I004.js";import"./usePreviousProps-BGc4kDSn.js";import"./SkeletonButton-DQlCUFlj.js";import"./SkeletonInlineBlock-BTiJ2BO_.js";import"./SkeletonParagraph-CITKHxXA.js";import"./IconSvgButton-ADltHFQM.js";import"./FormControlLabel-0ry4_IyI.js";import"./Checkbox-ZoMln06J.js";import"./SwitchBase-D249JllU.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,y={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
