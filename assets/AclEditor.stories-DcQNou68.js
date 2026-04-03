import{a1 as o,v as s,a2 as t}from"./iframe-BbbR7k03.js";import{A as i}from"./AclEditor-CT27dI3L.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-8VWE9mUZ.js";import"./useDebouncedEffect-DpR-P4I8.js";import"./UserBadge-DWO5wDPo.js";import"./useUserBundle-DbQDA0bX.js";import"./SkeletonTable-Dx60MFYV.js";import"./MenuItem-DDa15_zq.js";import"./Card-DrotIdtr.js";import"./Chip-Diq7UYnO.js";import"./UserOrTeamBadge-DzIisObA.js";import"./TeamBadge-1_wWVv75.js";import"./Autocomplete-BuSqBldn.js";import"./usePreviousProps-QHb4mi79.js";import"./SkeletonButton-DffrNQo6.js";import"./SkeletonInlineBlock-BbM-xsbl.js";import"./SkeletonParagraph-NMWzktwn.js";import"./IconSvgButton-BK7amixg.js";import"./FormControlLabel-UF_IHyRO.js";import"./Checkbox-UPXW_iIu.js";import"./SwitchBase-qa0TESIz.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,y={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
