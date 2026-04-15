import{a1 as o,v as s,a2 as t}from"./iframe-C9UTN7n5.js";import{A as i}from"./AclEditor-D6jUyN4n.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-sm9LaiV-.js";import"./useDebouncedEffect-y-WAkDO4.js";import"./useUserGroupHeader-DBo-Weqm.js";import"./UserOrTeamBadge-BGrwALGA.js";import"./TeamBadge-BP__OOdm.js";import"./UserBadge-CKhduYdW.js";import"./useUserBundle-B2NBOQIN.js";import"./SkeletonTable-BS4xHemf.js";import"./MenuItem-CX39S6wD.js";import"./Card-l1x67oDf.js";import"./Chip-kWAD_96F.js";import"./Autocomplete-qFUnN2Zt.js";import"./usePreviousProps-CdqKSC2f.js";import"./SkeletonButton-DrgaJ-bm.js";import"./SkeletonInlineBlock-D-Jy1SSP.js";import"./SkeletonParagraph-C7pb8176.js";import"./IconSvgButton-DjcQMxn1.js";import"./FormControlLabel-DVTQJ-pq.js";import"./Checkbox-EGzeyNI9.js";import"./SwitchBase-CC_UmhM1.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,D={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
