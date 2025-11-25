import{a3 as o,w as p,a4 as a}from"./iframe-TYPaZ6LN.js";import{A as m}from"./AclEditor-CuKGDAWa.js";import"./index-r8ZA1smB.js";import"./UserSearchBoxV2-BE73OkBn.js";import"./useDebouncedEffect-BiUjU_HC.js";import"./use-deep-compare-effect.esm-CZAnXGsk.js";import"./uniq-CrS56XKU.js";import"./without-6D7HEseO.js";import"./UserBadge-AucszkFw.js";import"./SkeletonTable-CKGrlPmE.js";import"./MenuItem--XzA7FJc.js";import"./Card-CPwsCsQR.js";import"./Chip-CqTIrq2s.js";import"./Select-aab027f3.esm-BSYaODl1.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-nX_mdz3g.js";import"./TeamBadge-IJZhooCY.js";import"./SkeletonButton-BeXgw9Nt.js";import"./SkeletonInlineBlock-BBtOGIqx.js";import"./SkeletonParagraph-CEVUjrsB.js";import"./IconSvgButton-CZ6KKFpg.js";import"./FormControlLabel-CFIZDz1l.js";import"./Checkbox-DwR_QE3H.js";import"./SwitchBase-Cm31-ZuN.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,k={title:"Synapse/ACL Editor",component:m,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:e(),updateResourceAccessItem:e(),removeResourceAccessItem:e(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},r={args:{resourceAccessList:[{principalId:p,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:a,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};var t,s,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(i=(s=r.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const v=["Demo"];export{r as Demo,v as __namedExportsOrder,k as default};
