import{a1 as o,v as s,a2 as t}from"./iframe-D6P0nkNQ.js";import{A as i}from"./AclEditor-BnAipeGL.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-Bo-K_kMI.js";import"./useDebouncedEffect-Bs2LG_Ac.js";import"./UserBadge-BfOkKJj6.js";import"./useUserBundle-Da75ZNju.js";import"./queryOptions-C9woPjwX.js";import"./SkeletonTable-B5s8sRSp.js";import"./MenuItem-BFhkC2rz.js";import"./Card-Km0k0NLl.js";import"./Chip-BsvDvlw9.js";import"./UserOrTeamBadge-4CHYFhob.js";import"./TeamBadge-Cz55Lg_4.js";import"./Autocomplete-DqltHcl4.js";import"./usePreviousProps-Duwj02pS.js";import"./SkeletonButton-CpvcVcC6.js";import"./SkeletonInlineBlock-cwgAS3YS.js";import"./SkeletonParagraph-Dny_21Xp.js";import"./IconSvgButton-DKgqluZ_.js";import"./FormControlLabel-C3dQ3TAO.js";import"./Checkbox-BbO_eIS6.js";import"./SwitchBase-Cxiym2LW.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,D={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
