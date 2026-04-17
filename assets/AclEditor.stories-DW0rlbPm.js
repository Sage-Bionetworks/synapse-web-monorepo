import{a1 as o,v as s,a2 as t}from"./iframe-DIHutOM2.js";import{A as i}from"./AclEditor-BJ5b7q0S.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-Cgcz8PGw.js";import"./useDebouncedEffect-Bbon0Pxy.js";import"./useUserGroupHeader-DQOVdta_.js";import"./UserOrTeamBadge-qoZZdjWZ.js";import"./TeamBadge-bGdyVfrX.js";import"./UserBadge-F-3JUNkT.js";import"./useUserBundle-C5_SG0-L.js";import"./SkeletonTable-C4N-t1H3.js";import"./MenuItem-DK0615By.js";import"./Card-BmTXRzNL.js";import"./Chip-BE1NWb4W.js";import"./Autocomplete-g8wVyTFT.js";import"./usePreviousProps-DeB1hVtp.js";import"./SkeletonButton-zFoMoYHg.js";import"./SkeletonInlineBlock-CxHTYkDw.js";import"./SkeletonParagraph-BIGOfadt.js";import"./IconSvgButton-4OxRyAMA.js";import"./FormControlLabel-D-4Nscdf.js";import"./Checkbox-BUXxhWF5.js";import"./SwitchBase-GpXGIWUe.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,D={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
