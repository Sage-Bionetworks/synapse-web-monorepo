import{a1 as o,v as s,a2 as t}from"./iframe-C5G3mSsR.js";import{A as i}from"./AclEditor-GqM-LJSd.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-CjGP-vtF.js";import"./useDebouncedEffect-CE8T3ull.js";import"./useUserGroupHeader-9PNLN8Yb.js";import"./UserOrTeamBadge-BLU7eoyA.js";import"./TeamBadge-DEXjEt4D.js";import"./UserBadge-CvgJynwa.js";import"./useUserBundle-b7Uv0-A-.js";import"./SkeletonTable-q_wTrDuF.js";import"./MenuItem-DBKy37Hp.js";import"./Card-cZbkiVcl.js";import"./Chip-j4Xp3f_v.js";import"./Autocomplete-BXFPR9ju.js";import"./usePreviousProps-CGWoFtrf.js";import"./SkeletonButton-_Eu_07NL.js";import"./SkeletonInlineBlock-BpaxCT_H.js";import"./SkeletonParagraph-B8DwnroK.js";import"./IconSvgButton-CEDpx3ef.js";import"./FormControlLabel-k-SWrQ8f.js";import"./Checkbox-CB1vuwHn.js";import"./SwitchBase-CO_2vZSB.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,D={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
