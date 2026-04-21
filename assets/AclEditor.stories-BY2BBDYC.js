import{a1 as o,v as s,a2 as t}from"./iframe-BfPCYB0E.js";import{A as i}from"./AclEditor-DhIfV_qP.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-CYSK9dCp.js";import"./useDebouncedEffect-CSWLI9x1.js";import"./UserBadge-BeeY2orO.js";import"./useUserBundle-CKxh-kvY.js";import"./queryOptions-C9woPjwX.js";import"./SkeletonTable-O-QCdGWt.js";import"./MenuItem-Clc-tiPV.js";import"./Card-BxqLwHVm.js";import"./Chip-CozfZRmm.js";import"./UserOrTeamBadge-Mi6P2iba.js";import"./TeamBadge-DW4bpwfm.js";import"./Autocomplete-D4zfTzAQ.js";import"./usePreviousProps-ClStBmCy.js";import"./SkeletonButton-Cp9NnTu7.js";import"./SkeletonInlineBlock-D4QJhjaO.js";import"./SkeletonParagraph-KYHFxt8I.js";import"./IconSvgButton-D1C856SD.js";import"./FormControlLabel-CGx1NWxI.js";import"./Checkbox-BMpqBgV6.js";import"./SwitchBase-VO4fuz7d.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,D={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
