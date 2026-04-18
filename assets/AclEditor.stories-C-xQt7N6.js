import{a1 as o,v as s,a2 as t}from"./iframe-BnslxpU_.js";import{A as i}from"./AclEditor-DTnsTsWi.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-CSH2Vyqw.js";import"./useDebouncedEffect-BhaQy9He.js";import"./UserBadge-BgBEo1dQ.js";import"./useUserBundle-C1FSIxUt.js";import"./queryOptions-C9woPjwX.js";import"./SkeletonTable-CoVehSLQ.js";import"./MenuItem-DtwhjM27.js";import"./Card-CRK3-fg-.js";import"./Chip-Bn_oC1Yj.js";import"./UserOrTeamBadge-COJBl0J0.js";import"./TeamBadge-DnTWR1P1.js";import"./Autocomplete-DnGR1Ih4.js";import"./usePreviousProps-DI4-AD8Z.js";import"./SkeletonButton-5fVnmkER.js";import"./SkeletonInlineBlock-DPXtIPY8.js";import"./SkeletonParagraph-B0oRHwOu.js";import"./IconSvgButton-gydFodVL.js";import"./FormControlLabel-DFnjR6do.js";import"./Checkbox-LdJOabl-.js";import"./SwitchBase-D8Y_Jyat.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,D={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
