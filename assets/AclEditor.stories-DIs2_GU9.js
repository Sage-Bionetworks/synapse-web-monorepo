import{a4 as o,w as t,a5 as s}from"./iframe-Cb9YNozx.js";import{A as i}from"./AclEditor-DI4ECwuP.js";import"./index-Chi_LkuB.js";import"./useRealmPrincipals-BOYcyrLO.js";import"./UserSearchBoxV2-B2E5TQjc.js";import"./useDebouncedEffect-C_9kQbIo.js";import"./use-deep-compare-effect.esm-DRlUfThG.js";import"./uniq-B_kjh9wh.js";import"./without-Dc8QFibI.js";import"./UserBadge-Bh4Ksb1L.js";import"./useUserBundle--HGZeLM6.js";import"./useSuspenseQuery-DijQnciR.js";import"./SkeletonTable-D9G853Nf.js";import"./MenuItem-WtaSofOf.js";import"./Card-CUlSPQ6A.js";import"./Chip-DkiZ-DGD.js";import"./Select-aab027f3.esm-CJ_oX53i.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-GKGn8VBX.js";import"./TeamBadge-BDVNxB1t.js";import"./SkeletonButton-n18AgO8O.js";import"./SkeletonInlineBlock-Cy31Etok.js";import"./SkeletonParagraph-C98TKSTr.js";import"./IconSvgButton-HUPmXAAG.js";import"./FormControlLabel-DLrXg_In.js";import"./Checkbox-nIJeGWWn.js";import"./SwitchBase-Dg-qdkEc.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,v={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:e(),updateResourceAccessItem:e(),removeResourceAccessItem:e(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},r={args:{resourceAccessList:[{principalId:t,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:s,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const K=["Demo"];export{r as Demo,K as __namedExportsOrder,v as default};
