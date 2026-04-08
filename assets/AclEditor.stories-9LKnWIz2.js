import{a1 as o,v as s,a2 as t}from"./iframe-D5wXuBlT.js";import{A as i}from"./AclEditor-BKmZIzYu.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-D7pwxDyQ.js";import"./useDebouncedEffect-CClt-H-N.js";import"./useUserGroupHeader-YQoyU-aV.js";import"./UserOrTeamBadge-CrDlepT6.js";import"./TeamBadge-DSUeGj_J.js";import"./UserBadge-DCI1SK4W.js";import"./useUserBundle-DXvZDWUx.js";import"./SkeletonTable-DQgfKfH3.js";import"./MenuItem-Cg9aYM9o.js";import"./Card-Ds8mqMQ7.js";import"./Chip-CY4F66V8.js";import"./Autocomplete-DyJ_IcZa.js";import"./usePreviousProps-BROXTcjk.js";import"./SkeletonButton-1p1-0lGV.js";import"./SkeletonInlineBlock-Djh2iYmW.js";import"./SkeletonParagraph-CICWHgmn.js";import"./IconSvgButton-DovBfP2k.js";import"./FormControlLabel-DdIGgxtb.js";import"./Checkbox-etgoUHJj.js";import"./SwitchBase-CF4iIkRZ.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,D={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
