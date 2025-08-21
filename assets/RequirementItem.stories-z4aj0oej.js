import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-CBW1tLi0.js";import{d as s}from"./ToastMessage-DRuJKn2H.js";import{R as n,a as t}from"./RequirementItem-Dqy9hgnP.js";import{P as O}from"./Paper-CmTDa9ue.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-ChepUPeC.js";import"./SynapseConstants-uuZQ07ZG.js";import"./OrientationBanner-BMTtxCRZ.js";import"./index-DZwoqB70.js";import"./index-DlbKFsS_.js";import"./iframe-0wVslN7b.js";import"./spreadSx-CwcO6WA9.js";import"./react-_2U-C0GU.js";import"./FullWidthAlert-DM2vrgRA.js";import"./Alert-ByvuzRIz.js";import"./createTheme-DbTVx9wk.js";import"./DefaultPropsProvider-DkB9qiCW.js";import"./useSlot-D2G1tdG6.js";import"./useForkRef-dmtj3swN.js";import"./createSimplePaletteValueFilter-B2_2URZH.js";import"./createSvgIcon-D3A_t-T8.js";import"./Close-C835DunE.js";import"./IconButton-CdNa3UAM.js";import"./useTimeout-DZY_Ldn6.js";import"./ButtonBase-BSSfV59K.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DwsvCZV6.js";import"./Stack-CICCoKMV.js";import"./extendSxProp-CkTWBxQk.js";import"./getThemeProps-CDavjzIJ.js";import"./useTheme-BkeJ3rG0.js";import"./Box-C41TTZyw.js";import"./AlertTitle-CpyBs_uL.js";import"./Typography-QhlHI-oV.js";import"./index-Dg0Jby1P.js";import"./useTheme-CmWvFfrN.js";import"./ClickAwayListener-M7aD0F4C.js";import"./getReactElementRef-C_kE-ach.js";import"./index-j7g_Ug4x.js";import"./index-DZsggVEU.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BWTyqGfK.js";import"./Tooltip-C-YsDLR5.js";import"./index-B_X4U_Mc.js";import"./useControlled-fzollbDs.js";import"./Popper-jZJ7QXLK.js";import"./Button-Cw1keIu4.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-DYS1_2Hc.js";import"./QueryClientProvider-BI7jbFXj.js";import"./Link-CxT6ZAtC.js";import"./Collapse-DBT4GF4U.js";import"./_baseUniq-DbxKqsNd.js";import"./_Uint8Array-CnaUAbwU.js";import"./isArray-B4fJuMgT.js";import"./_getTag-Bdvo1j8R.js";import"./isEqual-C0jfZ1nU.js";import"./merge-DTEhEQRY.js";import"./_initCloneObject-BHwFfX6u.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-T_moeo9f.js";import"./inputBaseClasses-BD6lXioz.js";import"./calculateFriendlyFileSize-eluljBmG.js";import"./CheckCircleTwoTone-BIDizvcR.js";import"./InfoTwoTone-BUbbgrPF.js";import"./useMutation-BU-UzXwG.js";import"./dayjs.min-twCecxUk.js";import"./chunk-AYJ5UCUI-BjaXvkqd.js";import"./cloneDeep-Cj0ZoDZo.js";import"./Skeleton-CZTbWp2s.js";import"./SkeletonButton-C1kBXEd8.js";import"./SkeletonInlineBlock-6cQ_LBSP.js";import"./SkeletonTable-BIYOYjjl.js";import"./times-aVsXrtI-.js";import"./toInteger-DV-Al5QH.js";import"./isSymbol-DJTNGuaN.js";import"./SkeletonParagraph-BjEjvexw.js";import"./uniqueId-CUiDtqDy.js";import"./toString-Dm7eRKqV.js";import"./CSSTransition-Bw7XljPW.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-CJhOBVDi.js";import"./Avatar-DhW-Ut9b.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    status: RequirementItemStatus.COMPLETE,
    actions: [{
      variant: 'outlined',
      children: 'Learn More',
      onClick: () => {
        displayToast('Learn More clicked');
      }
    }]
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    status: RequirementItemStatus.PENDING,
    actions: [{
      variant: 'outlined',
      children: 'Learn More',
      onClick: () => {
        displayToast('Learn More clicked');
      }
    }]
  }
}`,...(g=(l=o.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var L,k,C;e.parameters={...e.parameters,docs:{...(L=e.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    status: RequirementItemStatus.LOADING,
    actions: []
  }
}`,...(C=(k=e.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var M,E,R;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    status: RequirementItemStatus.COMPLETE,
    actions: []
  }
}`,...(R=(E=i.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var S,I,q;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    status: RequirementItemStatus.LOCKED,
    actions: [{
      variant: 'outlined',
      children: 'Accept terms',
      onClick: () => {
        displayToast('Accept terms clicked');
      }
    }]
  }
}`,...(q=(I=m.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};const cr=["Complete","Pending","Loading","NoActions","Locked"];export{r as Complete,e as Loading,m as Locked,i as NoActions,o as Pending,cr as __namedExportsOrder,pr as default};
