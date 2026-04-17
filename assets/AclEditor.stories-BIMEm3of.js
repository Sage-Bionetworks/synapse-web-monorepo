import{a1 as o,v as s,a2 as t}from"./iframe-C6yCTbiI.js";import{A as i}from"./AclEditor-DKbai53k.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-C6uo6-Wd.js";import"./useDebouncedEffect-8bCRJRcE.js";import"./useUserGroupHeader-5j2MpiwC.js";import"./UserOrTeamBadge-h5u6cOGp.js";import"./TeamBadge-DjzEAR1Q.js";import"./UserBadge-CJBcuBDD.js";import"./useUserBundle-BUCs7RFl.js";import"./SkeletonTable-BTe-OCwr.js";import"./MenuItem-CKNKfHkT.js";import"./Card-CwMidbhG.js";import"./Chip-DN5j6xVl.js";import"./Autocomplete-BsHfqsAU.js";import"./usePreviousProps-BlssNkvg.js";import"./SkeletonButton-BSw7ANLA.js";import"./SkeletonInlineBlock-kzXVwRpV.js";import"./SkeletonParagraph-CZqj6TP0.js";import"./IconSvgButton-CO_XdxA5.js";import"./FormControlLabel-blAWuUdq.js";import"./Checkbox-BvslvcYh.js";import"./SwitchBase-C0tFzd3x.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,D={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
