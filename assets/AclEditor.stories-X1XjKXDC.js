import{a1 as o,v as s,a2 as t}from"./iframe-BdS9-wdc.js";import{A as i}from"./AclEditor-BRUl89gI.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-DHR87Hop.js";import"./useDebouncedEffect-Dbqf_fkL.js";import"./useUserGroupHeader-DhQzbsNW.js";import"./UserOrTeamBadge-Bo7QMREQ.js";import"./TeamBadge-DyH0b7pK.js";import"./UserBadge-DiTjYkKT.js";import"./useUserBundle-CW56QhDS.js";import"./SkeletonTable-E-xscDs6.js";import"./MenuItem-BSB47y6Q.js";import"./Card-CQz4BqJK.js";import"./Chip-B8w46sev.js";import"./Autocomplete-jeJ3UT8Z.js";import"./usePreviousProps-CRbVQsCb.js";import"./SkeletonButton-BtChI9G1.js";import"./SkeletonInlineBlock-B1VKeUrN.js";import"./SkeletonParagraph-BQttfzOt.js";import"./IconSvgButton-DxsDU774.js";import"./FormControlLabel-Db0CgiSH.js";import"./Checkbox-1TaYBXaY.js";import"./SwitchBase-DOv3IdKL.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,D={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
