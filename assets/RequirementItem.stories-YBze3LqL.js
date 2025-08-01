import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-BESubHIQ.js";import{d as s}from"./ToastMessage-CJKINGmv.js";import{R as n,a as t}from"./RequirementItem-Belmq53c.js";import{P as O}from"./Paper-ChaWEqlg.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-CqmGsx9e.js";import"./SynapseConstants-CGuZkUES.js";import"./OrientationBanner-CnSRSzGI.js";import"./index-DdN6M7oU.js";import"./index-D3pHUmD6.js";import"./iframe-BpSRLMba.js";import"./spreadSx-CwcO6WA9.js";import"./react-BUCepjMZ.js";import"./FullWidthAlert-CZIscZLy.js";import"./Alert-AkkXbhSb.js";import"./createTheme-CBBRw45H.js";import"./DefaultPropsProvider-C2oHESUC.js";import"./useSlot-DTI4mSKk.js";import"./useForkRef-EEaY0xJF.js";import"./createSimplePaletteValueFilter-Bv3ERxxM.js";import"./createSvgIcon-DXCLit9r.js";import"./Close-Bdf7Qli9.js";import"./IconButton-CS-lRm_S.js";import"./useTimeout-BzIrd2dm.js";import"./ButtonBase-DQEerWyv.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Brn47whz.js";import"./Stack-VNT7LZdB.js";import"./extendSxProp-BfPTzD4A.js";import"./getThemeProps-DdnzTGNl.js";import"./useTheme-CfYlG3ge.js";import"./Box-CupcJaB7.js";import"./AlertTitle-OcVQIOHM.js";import"./Typography-BaIISwON.js";import"./index-LQ44ZR_d.js";import"./useTheme-B-qufAMP.js";import"./ClickAwayListener-CqnY7POu.js";import"./getReactElementRef-C5REN14H.js";import"./index-swe7WJVh.js";import"./index-CJxYXPto.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-D2Vq3YXn.js";import"./Tooltip-D_9QqXCy.js";import"./index-Cp1tdZxc.js";import"./useControlled-DsFar4lI.js";import"./Popper-XM_TxQH5.js";import"./Button-DFhgsAEV.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-CWVzDLQ7.js";import"./QueryClientProvider-IIYYUr9E.js";import"./Link-D30DhZYx.js";import"./Collapse-BjdLubi6.js";import"./_baseUniq-C2lnGCfY.js";import"./_Uint8Array-BLyIfwHx.js";import"./isArray-6JAmOhNR.js";import"./_getTag-DXXF4jl8.js";import"./isEqual-BzLJyYLm.js";import"./merge-DXiCbZrQ.js";import"./_initCloneObject-BkHnv0Lv.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DMA4TlHY.js";import"./inputBaseClasses-D4rBBtbv.js";import"./calculateFriendlyFileSize-BAvtWXML.js";import"./CheckCircleTwoTone-B78RO6Fq.js";import"./InfoTwoTone-ttP8RaV1.js";import"./useMutation-C9iErl7-.js";import"./dayjs.min-T-8gDYmI.js";import"./chunk-AYJ5UCUI-Bf-rUtCm.js";import"./cloneDeep-Dm5lhDgZ.js";import"./Skeleton-B6UnaRSd.js";import"./SkeletonButton-C7OW6Ive.js";import"./SkeletonInlineBlock-sDOL9mS3.js";import"./SkeletonTable-Cb3KCBOV.js";import"./times-BexuM795.js";import"./toInteger-CC9l2KOx.js";import"./toNumber-DC_0a5uP.js";import"./isSymbol-Ctr98lEh.js";import"./SkeletonParagraph-CAcWJL3C.js";import"./uniqueId-BR006pAe.js";import"./toString-DG5Mezrt.js";import"./CSSTransition-C76GLxES.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-CVfgQDhP.js";import"./Avatar-DtY_wp7e.js";const cr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(q=(I=m.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};const dr=["Complete","Pending","Loading","NoActions","Locked"];export{r as Complete,e as Loading,m as Locked,i as NoActions,o as Pending,dr as __namedExportsOrder,cr as default};
