import{a1 as o,v as s,a2 as t}from"./iframe-xuGDYskk.js";import{A as i}from"./AclEditor-Bqe4UFmS.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-DIunYbET.js";import"./useDebouncedEffect-DnAR-4CK.js";import"./useUserGroupHeader-CzZ91UGJ.js";import"./UserOrTeamBadge-Bg36yccR.js";import"./TeamBadge-D8VFlvej.js";import"./UserBadge-BorFtQsG.js";import"./useUserBundle-DtSERE0H.js";import"./SkeletonTable-Bn51DOnQ.js";import"./MenuItem-D1rBKZNi.js";import"./Card-B4NJfnf-.js";import"./Chip-Ckkk-5JS.js";import"./Autocomplete-DuOgffOl.js";import"./usePreviousProps-CRWTbO4u.js";import"./SkeletonButton-Ba2syrHs.js";import"./SkeletonInlineBlock-CuJjaS51.js";import"./SkeletonParagraph-BP-szXpV.js";import"./IconSvgButton-DN76qpY2.js";import"./FormControlLabel-7w8AtTFx.js";import"./Checkbox-C5w0MlgT.js";import"./SwitchBase-BP58HNZ_.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,D={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
