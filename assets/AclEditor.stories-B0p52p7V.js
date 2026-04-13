import{a1 as o,v as s,a2 as t}from"./iframe-CbfOQY0w.js";import{A as i}from"./AclEditor-RzgYGKzN.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-DIhvnESP.js";import"./useDebouncedEffect-BNCd82Cz.js";import"./useUserGroupHeader-CuG0-k8L.js";import"./UserOrTeamBadge-Buq1lQsw.js";import"./TeamBadge-DxgMFROE.js";import"./UserBadge-w-7xW1gI.js";import"./useUserBundle-CVhFQva8.js";import"./SkeletonTable-CE4I0355.js";import"./MenuItem-DYj3mh1g.js";import"./Card-_ZXijILc.js";import"./Chip-CeFdaJc8.js";import"./Autocomplete-CpnoKtna.js";import"./usePreviousProps-DKlj7xCm.js";import"./SkeletonButton-DqLe50tO.js";import"./SkeletonInlineBlock-be42gePS.js";import"./SkeletonParagraph-CCe-_wHo.js";import"./IconSvgButton-BfSVpvsG.js";import"./FormControlLabel-DIqi8v8L.js";import"./Checkbox-DBu6z0UA.js";import"./SwitchBase-Bx_c6nyi.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,D={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
