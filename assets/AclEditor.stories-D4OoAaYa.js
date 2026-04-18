import{a1 as o,v as s,a2 as t}from"./iframe-BFoBHJbY.js";import{A as i}from"./AclEditor-CqBwzCON.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-CNPKvi4x.js";import"./useDebouncedEffect-C1CNfVQY.js";import"./UserBadge-B3b4GgS8.js";import"./useUserBundle-DpjLlelW.js";import"./queryOptions-C9woPjwX.js";import"./SkeletonTable-DpdP1ZU-.js";import"./MenuItem-BjmuKOgF.js";import"./Card-CxnVE_mX.js";import"./Chip-nCILZLDf.js";import"./UserOrTeamBadge-Bttfq-If.js";import"./TeamBadge-D-kXmpwb.js";import"./Autocomplete-CijFYWna.js";import"./usePreviousProps-wXzT0qgu.js";import"./SkeletonButton-RWaImhZL.js";import"./SkeletonInlineBlock-BH9IFr_J.js";import"./SkeletonParagraph-CxOMNOR8.js";import"./IconSvgButton-fr7j-KYR.js";import"./FormControlLabel-D6wGKDYf.js";import"./Checkbox-DTqXBUmS.js";import"./SwitchBase-B0zHafXA.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,D={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
