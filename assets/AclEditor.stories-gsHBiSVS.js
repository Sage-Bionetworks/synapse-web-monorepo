import{a1 as o,v as s,a2 as t}from"./iframe-b13k1F7I.js";import{A as i}from"./AclEditor-Dj6WAM5D.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-CXUMS53t.js";import"./useDebouncedEffect-2rm6Hem2.js";import"./UserBadge-CsnCA53P.js";import"./useUserBundle-earXxlZb.js";import"./SkeletonTable-DL4vBEzw.js";import"./MenuItem-DH1v1_Sf.js";import"./Card-Ctn6KCGb.js";import"./Chip-DjWJ18GV.js";import"./UserOrTeamBadge-BccMONXY.js";import"./TeamBadge-BDdzFKaF.js";import"./Autocomplete-DG-a6nC4.js";import"./usePreviousProps-CbDsT3dl.js";import"./SkeletonButton-DVR5pv_e.js";import"./SkeletonInlineBlock-DRQHTWc8.js";import"./SkeletonParagraph-fVALJo5f.js";import"./IconSvgButton-Bzv7zpJG.js";import"./FormControlLabel-CCbquEuR.js";import"./Checkbox-QC8XFCZJ.js";import"./SwitchBase-C4-cm1yw.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,y={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
