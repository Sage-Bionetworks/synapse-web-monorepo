import{a1 as o,v as s,a2 as t}from"./iframe-BknA5AKQ.js";import{A as i}from"./AclEditor-DfLeyJ7g.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-Ci3hyZDL.js";import"./useDebouncedEffect-BSnJpFao.js";import"./UserBadge-CFsuA3am.js";import"./useUserBundle-CpQAXbXo.js";import"./SkeletonTable-DbyGjMNM.js";import"./MenuItem-BQAxjpVg.js";import"./Card-C9qx6pdO.js";import"./Chip-CVnCUFdM.js";import"./UserOrTeamBadge-DbuIpa7W.js";import"./TeamBadge-CQa2HjBv.js";import"./Autocomplete-C7TmKGrZ.js";import"./usePreviousProps-Bfj6pKxe.js";import"./SkeletonButton-DS3-vsq6.js";import"./SkeletonInlineBlock-CJPbZx5E.js";import"./SkeletonParagraph-COPAUoGX.js";import"./IconSvgButton-g3Mdd6hh.js";import"./FormControlLabel-D6qH4hbx.js";import"./Checkbox-X4PIicdY.js";import"./SwitchBase-BdMKy0_S.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,y={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
