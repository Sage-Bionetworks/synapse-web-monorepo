import{a1 as o,v as s,a2 as t}from"./iframe-CFYObmv2.js";import{A as i}from"./AclEditor-DFf2Hm5j.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-CI2NvH21.js";import"./useDebouncedEffect-DfSpjuz8.js";import"./UserBadge-CqWrPdDF.js";import"./useUserBundle-CFoU7ptg.js";import"./queryOptions-C9woPjwX.js";import"./SkeletonTable-D1Oc41tF.js";import"./MenuItem-1x19aVl7.js";import"./Card-CVTuX8UO.js";import"./Chip-DVyYNIMf.js";import"./UserOrTeamBadge-B7vwJt4S.js";import"./TeamBadge-BZRH4Ikn.js";import"./Autocomplete-B0dqw6JS.js";import"./usePreviousProps-BAn1aaJG.js";import"./SkeletonButton-BAoT4yfs.js";import"./SkeletonInlineBlock-B8gtORn3.js";import"./SkeletonParagraph-2BG-wyQ2.js";import"./IconSvgButton-DzAAZ4RK.js";import"./FormControlLabel-X6sNt4uF.js";import"./Checkbox-DqoMzdfH.js";import"./SwitchBase-CeR8qk8o.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,D={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
