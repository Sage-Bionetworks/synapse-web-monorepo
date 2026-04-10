import{a1 as o,v as s,a2 as t}from"./iframe-BCS2zFLE.js";import{A as i}from"./AclEditor-CVdQJkAW.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-CogtUD1-.js";import"./useDebouncedEffect-DRiczT2r.js";import"./useUserGroupHeader-rqOoqMM6.js";import"./UserOrTeamBadge-p1O2I4ES.js";import"./TeamBadge-00pFqE-a.js";import"./UserBadge-C35_-Ssp.js";import"./useUserBundle-CeR9IeV9.js";import"./SkeletonTable-D-hZBWBR.js";import"./MenuItem-p1NQf3Mg.js";import"./Card-DPmweuYt.js";import"./Chip-BWwS-E8w.js";import"./Autocomplete-CGtpzGiq.js";import"./usePreviousProps-Dzc1i5J4.js";import"./SkeletonButton-BlPG-SPD.js";import"./SkeletonInlineBlock-9a6I1Gvz.js";import"./SkeletonParagraph-Ch_An-pk.js";import"./IconSvgButton-DZj9rJTM.js";import"./FormControlLabel-CuWbK74X.js";import"./Checkbox-CRlsiFLX.js";import"./SwitchBase-BktFrpMy.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,D={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
