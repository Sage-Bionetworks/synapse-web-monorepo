import{a1 as o,v as s,a2 as t}from"./iframe-C4gfjmJw.js";import{A as i}from"./AclEditor-FpFUAbGE.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-DvUPfe4s.js";import"./useDebouncedEffect-BNGAUXV0.js";import"./useUserGroupHeader-CjLGfw2Z.js";import"./UserOrTeamBadge-CIStvqoI.js";import"./TeamBadge-CYUxDLZ8.js";import"./UserBadge-dOsih4M-.js";import"./useUserBundle-DCmht4A_.js";import"./SkeletonTable-BpAtksSS.js";import"./MenuItem-cS-lgy5x.js";import"./Card-E7BKmfZX.js";import"./Chip-DjisOeCN.js";import"./Autocomplete-Bm2VOkjp.js";import"./usePreviousProps-DMi3XmsN.js";import"./SkeletonButton-BIeEptZL.js";import"./SkeletonInlineBlock-BRt0lIXt.js";import"./SkeletonParagraph-C0oOWbiy.js";import"./IconSvgButton-B_O52337.js";import"./FormControlLabel-xBN1RuLV.js";import"./Checkbox-Bg5y91Je.js";import"./SwitchBase-BsLUiaA3.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,D={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
