import{a1 as o,v as s,a2 as t}from"./iframe-CkF2RhKN.js";import{A as i}from"./AclEditor-DiL7aXBJ.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-Bo06dWcK.js";import"./useDebouncedEffect-BbJaYsWC.js";import"./UserBadge-Yb-L8AxF.js";import"./useUserBundle-DQZHVi7_.js";import"./SkeletonTable-_Ae5KVb-.js";import"./MenuItem-Bn_zQ0BD.js";import"./Card-BR9tyc2m.js";import"./Chip-BzTGJFEB.js";import"./UserOrTeamBadge-Captg1T4.js";import"./TeamBadge-CP0KEZeR.js";import"./Autocomplete-BYnMiYQ2.js";import"./usePreviousProps-DoqDJIYb.js";import"./SkeletonButton-szKajW48.js";import"./SkeletonInlineBlock-BHo_rHpz.js";import"./SkeletonParagraph-D5pjFcDJ.js";import"./IconSvgButton-CuJMpUCK.js";import"./FormControlLabel-CvAqaT5C.js";import"./Checkbox-BYhyDoP4.js";import"./SwitchBase-Cfp9yLa-.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,y={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
