import{a1 as o,v as s,a2 as t}from"./iframe-Bg-s9pTZ.js";import{A as i}from"./AclEditor-NzGViR7G.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-C5zjrBDD.js";import"./useDebouncedEffect-tpD84LoS.js";import"./UserBadge-D2x7qBuJ.js";import"./useUserBundle-Dt_B1mhI.js";import"./SkeletonTable-Bbn4NeNZ.js";import"./MenuItem-D2-zdb04.js";import"./Card-B9WiC7Qz.js";import"./Chip-DPIa4PAj.js";import"./UserOrTeamBadge-Y69jUfgD.js";import"./TeamBadge-C67jnyCQ.js";import"./Autocomplete-DItW-jcs.js";import"./usePreviousProps-CqDukbv0.js";import"./SkeletonButton-Dp_QSsYr.js";import"./SkeletonInlineBlock-BF2HGXEd.js";import"./SkeletonParagraph-B9vNapgZ.js";import"./IconSvgButton-D29WzwUQ.js";import"./FormControlLabel-HKnEx2oy.js";import"./Checkbox-D-ymD47b.js";import"./SwitchBase-CW3A8DBo.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,y={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
