import{a1 as o,v as s,a2 as t}from"./iframe-DcOQ9qHF.js";import{A as i}from"./AclEditor-DRzWPGE4.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-DeTpTQ-7.js";import"./useDebouncedEffect-DWH0kvM8.js";import"./UserBadge-Ckbrjynj.js";import"./useUserBundle-DhVVN5hx.js";import"./SkeletonTable-DMmO1dBv.js";import"./MenuItem-BnSVsxfU.js";import"./Card-Ba2QyRDi.js";import"./Chip-CelqGmC0.js";import"./UserOrTeamBadge-SKKE-jjR.js";import"./TeamBadge-BmqGm9o-.js";import"./Autocomplete-DXi90Z3V.js";import"./usePreviousProps-BCJjj9Wa.js";import"./SkeletonButton-BlWvLvXj.js";import"./SkeletonInlineBlock-YBvARA_9.js";import"./SkeletonParagraph-agQpiA4S.js";import"./IconSvgButton-DiD0Chqx.js";import"./FormControlLabel-CEo4Kpwe.js";import"./Checkbox-D3mQlatZ.js";import"./SwitchBase-DOuuVSF8.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,y={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
