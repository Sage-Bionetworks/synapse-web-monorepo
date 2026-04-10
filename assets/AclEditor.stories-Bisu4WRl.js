import{a1 as o,v as s,a2 as t}from"./iframe-QSWh_nl6.js";import{A as i}from"./AclEditor-B4HXuAG7.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-DF1Xsyn1.js";import"./useDebouncedEffect-aeI6dmOh.js";import"./useUserGroupHeader-Bv8jkTw1.js";import"./UserOrTeamBadge-BDYwJpGM.js";import"./TeamBadge-UW9RvGOB.js";import"./UserBadge-B7mCgiDb.js";import"./useUserBundle-Dx6kjAkx.js";import"./SkeletonTable-D0oXxerW.js";import"./MenuItem-DfWOa7RV.js";import"./Card-Dsubg--P.js";import"./Chip-BVgBfsjl.js";import"./Autocomplete-DzJi86KT.js";import"./usePreviousProps-B1yfhd_h.js";import"./SkeletonButton-Ca6I-8rV.js";import"./SkeletonInlineBlock-rFa2WtsV.js";import"./SkeletonParagraph-C2ql9lI3.js";import"./IconSvgButton-BsfcZNmi.js";import"./FormControlLabel-C2B2UHHo.js";import"./Checkbox-CqoChSP_.js";import"./SwitchBase-o_ZrMHWt.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,D={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
