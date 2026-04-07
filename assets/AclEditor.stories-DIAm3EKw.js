import{a1 as o,v as s,a2 as t}from"./iframe-p1uXGzN2.js";import{A as i}from"./AclEditor-CylmefhY.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-CK4kOgWE.js";import"./useDebouncedEffect-Bc1BBC9L.js";import"./UserBadge-K3qD0Tmi.js";import"./useUserBundle-DMNSYcHB.js";import"./SkeletonTable-DxscU1yp.js";import"./MenuItem-CvsWYU-W.js";import"./Card-DhYE1SZe.js";import"./Chip-D-yl_WD6.js";import"./UserOrTeamBadge-CnBNkKAD.js";import"./TeamBadge-BOnbPe8U.js";import"./Autocomplete-DDVyrGPS.js";import"./usePreviousProps-DkgZ2N9x.js";import"./SkeletonButton-DFboq54i.js";import"./SkeletonInlineBlock-Bg4QuJBO.js";import"./SkeletonParagraph-D9GGG1Tt.js";import"./IconSvgButton-CEoGRdl6.js";import"./FormControlLabel-BR7dDpyV.js";import"./Checkbox-Dr9iAAR2.js";import"./SwitchBase-CaT_nPZV.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,y={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
