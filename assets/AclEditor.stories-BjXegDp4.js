import{a1 as o,v as s,a2 as t}from"./iframe-BuKUHwYF.js";import{A as i}from"./AclEditor-Bv2RfxNX.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-DsRonRWG.js";import"./useDebouncedEffect-BrSgUp4A.js";import"./UserBadge-DwsW3g_K.js";import"./useUserBundle-DkD9QSSJ.js";import"./queryOptions-C9woPjwX.js";import"./SkeletonTable-Ca_8DlU1.js";import"./MenuItem-DmEYYO79.js";import"./Card-B6TgluZN.js";import"./Chip-D3Gu_L5i.js";import"./UserOrTeamBadge-DrCP2AS5.js";import"./TeamBadge-CKTLM0zl.js";import"./Autocomplete-DlWKEogE.js";import"./usePreviousProps-DfueR3FT.js";import"./SkeletonButton-DoOKAwEq.js";import"./SkeletonInlineBlock-Cs7usZ_r.js";import"./SkeletonParagraph-CA2_vLea.js";import"./IconSvgButton-B2r195xv.js";import"./FormControlLabel-BQKBoEMA.js";import"./Checkbox-rNgXiDJm.js";import"./SwitchBase-Cq5wm8XC.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,D={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
