import{a1 as o,v as s,a2 as t}from"./iframe-DnxOmzjq.js";import{A as i}from"./AclEditor-YO9sVE1W.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-D1_xXPdQ.js";import"./useDebouncedEffect-CRvtYT14.js";import"./UserBadge-C7ZoT0us.js";import"./useUserBundle-ecNJunIY.js";import"./SkeletonTable-CwpgexC9.js";import"./MenuItem-CSaQiiYA.js";import"./Card-CWfitOUI.js";import"./Chip-IfgFn8uB.js";import"./UserOrTeamBadge-DGoyMStx.js";import"./TeamBadge-Dyvy-Kew.js";import"./Autocomplete-DapLW15v.js";import"./usePreviousProps-DDp_4LnU.js";import"./SkeletonButton-BsjS3fr7.js";import"./SkeletonInlineBlock-Df91B-1t.js";import"./SkeletonParagraph-gynKm0um.js";import"./IconSvgButton-C5Kl2jMg.js";import"./FormControlLabel-DRARADOY.js";import"./Checkbox-z9I2CIKw.js";import"./SwitchBase-D18-gFmO.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,y={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
