import{a1 as o,v as s,a2 as t}from"./iframe-DvDRa5Q6.js";import{A as i}from"./AclEditor-DB_oo1kI.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-Dt5Xw7MC.js";import"./useDebouncedEffect-BtDyulUe.js";import"./useUserGroupHeader-Di1qf-9O.js";import"./UserOrTeamBadge-DvGSFVbO.js";import"./TeamBadge-CvVZSTwn.js";import"./UserBadge-DSzzvC5n.js";import"./useUserBundle-BPf8B545.js";import"./SkeletonTable-BUXMgZAX.js";import"./MenuItem-CBuG7QWi.js";import"./Card-C4dlgrEE.js";import"./Chip-dgVEWiiO.js";import"./Autocomplete-Duafx-n8.js";import"./usePreviousProps-2pyxAmjn.js";import"./SkeletonButton-DldMG8YD.js";import"./SkeletonInlineBlock-CqjLFWuf.js";import"./SkeletonParagraph-DNQOFkBl.js";import"./IconSvgButton-BlaOFog2.js";import"./FormControlLabel-CKHXVKum.js";import"./Checkbox-Cn1-qDlO.js";import"./SwitchBase-CRLg36Mp.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,D={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
