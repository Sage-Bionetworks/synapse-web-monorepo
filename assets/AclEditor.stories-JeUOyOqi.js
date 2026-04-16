import{a1 as o,v as s,a2 as t}from"./iframe-TELIK5St.js";import{A as i}from"./AclEditor-DKbfpDko.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-BVcKtRCE.js";import"./useDebouncedEffect-CPWZ7rlr.js";import"./useUserGroupHeader-1WZ7S21v.js";import"./UserOrTeamBadge-oG2mKjgS.js";import"./TeamBadge-DBsGqDpq.js";import"./UserBadge-BL2bxi6y.js";import"./useUserBundle-DCscJCIX.js";import"./SkeletonTable-BK56JWcz.js";import"./MenuItem-CZMXI3mZ.js";import"./Card-CdQC2hYH.js";import"./Chip-ChN1vAl3.js";import"./Autocomplete-DNrg8QTw.js";import"./usePreviousProps-Dq07bXWo.js";import"./SkeletonButton-Ch0HQYiA.js";import"./SkeletonInlineBlock-DmvsIilu.js";import"./SkeletonParagraph-CsdCh0c6.js";import"./IconSvgButton-Ca9gcONo.js";import"./FormControlLabel-DkZ0xtIe.js";import"./Checkbox-DmDIVSeI.js";import"./SwitchBase-C4A-3PON.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,D={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
