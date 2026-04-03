import{a1 as o,v as s,a2 as t}from"./iframe-BwdMKcfW.js";import{A as i}from"./AclEditor-BxoxxpkV.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-WoOcNYMS.js";import"./useDebouncedEffect-Cb_h3h8D.js";import"./UserBadge-CA7iopPx.js";import"./useUserBundle-BXxupc5B.js";import"./SkeletonTable-O-mI3Ojq.js";import"./MenuItem-DnEBuXas.js";import"./Card-Bl3eAq5k.js";import"./Chip-CdEMn9W3.js";import"./UserOrTeamBadge-DRaw0ZTS.js";import"./TeamBadge-BqHxeZf0.js";import"./Autocomplete-Cj8_Qp3g.js";import"./usePreviousProps-Bo7rFF-f.js";import"./SkeletonButton-DUX7R0sB.js";import"./SkeletonInlineBlock-CGQ5Gfg-.js";import"./SkeletonParagraph-CepsPnNp.js";import"./IconSvgButton-m9BOWpvh.js";import"./FormControlLabel-BnBiSy9D.js";import"./Checkbox-CzvQeSJ4.js";import"./SwitchBase-B1boux3R.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,y={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
