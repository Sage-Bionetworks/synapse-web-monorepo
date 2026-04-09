import{a1 as o,v as s,a2 as t}from"./iframe-CtlQt718.js";import{A as i}from"./AclEditor-D9tcWqgZ.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-DjaMua0n.js";import"./useDebouncedEffect-C2ajLuGx.js";import"./useUserGroupHeader-WUxLdYmZ.js";import"./UserOrTeamBadge-D2JHJ8rD.js";import"./TeamBadge-9WR-V1XA.js";import"./UserBadge-ymB3hH6I.js";import"./useUserBundle-DrrIAhkW.js";import"./SkeletonTable-DCMQwvPd.js";import"./MenuItem-C_5zSBh4.js";import"./Card-DRwr6nyE.js";import"./Chip-DpB8aqC-.js";import"./Autocomplete-Cv4xJ-eN.js";import"./usePreviousProps-Bsuk01gy.js";import"./SkeletonButton-i4oTWqaB.js";import"./SkeletonInlineBlock-BaHv_pCV.js";import"./SkeletonParagraph-CUgZcOgo.js";import"./IconSvgButton-P7qpEK4m.js";import"./FormControlLabel-TNPBDvq0.js";import"./Checkbox-BdJ4Kw1X.js";import"./SwitchBase-5wWbJqUY.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,D={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
