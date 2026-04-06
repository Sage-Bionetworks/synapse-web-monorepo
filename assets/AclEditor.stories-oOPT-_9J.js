import{a1 as o,v as s,a2 as t}from"./iframe-Dh1-Bj9i.js";import{A as i}from"./AclEditor-DshprRaE.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-XN_9fZn7.js";import"./useDebouncedEffect-DAVceLl-.js";import"./UserBadge-awlVBRBe.js";import"./useUserBundle-BOEHsSlJ.js";import"./SkeletonTable-nkHHAelC.js";import"./MenuItem-DcI11cWZ.js";import"./Card-C6ntjiwM.js";import"./Chip-D6-vR_S7.js";import"./UserOrTeamBadge-BVyaEq4-.js";import"./TeamBadge-B9E97fk-.js";import"./Autocomplete-DO5n1YAS.js";import"./usePreviousProps-jW-nUEeZ.js";import"./SkeletonButton-C-IErnIc.js";import"./SkeletonInlineBlock-D9o-fuxy.js";import"./SkeletonParagraph-Cbgp8OCT.js";import"./IconSvgButton-DvelCxeI.js";import"./FormControlLabel-CYMNTndx.js";import"./Checkbox-dmGiqlJj.js";import"./SwitchBase-C1MmJwCG.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,y={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
