import{a3 as o,w as p,a4 as a}from"./iframe-AZFkaj29.js";import{A as m}from"./AclEditor-2VtyrmCv.js";import"./index-r8ZA1smB.js";import"./UserSearchBoxV2-CVAWZDGn.js";import"./useDebouncedEffect-Crl2Qy_8.js";import"./use-deep-compare-effect.esm-CkjIpb9c.js";import"./uniq-DPD25Rk_.js";import"./without-BTlwPQAz.js";import"./UserBadge-BvUmBnhC.js";import"./SkeletonTable-DQttbHFf.js";import"./MenuItem-BsTRry6Y.js";import"./Card-MFQbB8v8.js";import"./Chip-TJPVsrF2.js";import"./Select-aab027f3.esm-CZs-_fOu.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-CHOIc17M.js";import"./TeamBadge-RzlSEqwX.js";import"./SkeletonButton-oQJZ7ToR.js";import"./SkeletonInlineBlock-DtSMBTT9.js";import"./SkeletonParagraph-Bf05FZ4M.js";import"./IconSvgButton-BOwMYS3b.js";import"./FormControlLabel-jUWSiJCh.js";import"./Checkbox-B90CJICb.js";import"./SwitchBase-BUhbphe5.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,k={title:"Synapse/ACL Editor",component:m,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:e(),updateResourceAccessItem:e(),removeResourceAccessItem:e(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},r={args:{resourceAccessList:[{principalId:p,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:a,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};var t,s,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
