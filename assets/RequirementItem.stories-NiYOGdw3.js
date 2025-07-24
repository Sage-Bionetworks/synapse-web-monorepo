import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-D-gKd3j_.js";import{d as s}from"./ToastMessage-BmPvUN1c.js";import{R as n,a as t}from"./RequirementItem-Dggwo7Ez.js";import{P as O}from"./Paper-CazC8z3H.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-BPLeY_T0.js";import"./SynapseConstants-BDTIQPW-.js";import"./OrientationBanner-D6TfClQZ.js";import"./index-CFBRiZ1w.js";import"./index-D74nAv4K.js";import"./iframe-Ccor4afl.js";import"./spreadSx-CwcO6WA9.js";import"./react-D-QmtcUJ.js";import"./FullWidthAlert-D1IF5V4Z.js";import"./Alert-Cp1wuOAE.js";import"./createTheme-DgzdyVUD.js";import"./DefaultPropsProvider-BaSYOPs_.js";import"./useSlot-DG2qCDn3.js";import"./useForkRef-BMxq_MIC.js";import"./createSimplePaletteValueFilter-BtXRE-wI.js";import"./createSvgIcon-Ksakvuew.js";import"./Close-qu3HWGgD.js";import"./IconButton-IqySOcq2.js";import"./useTimeout--jiegund.js";import"./ButtonBase-DzpekvZp.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Bp9rJEqc.js";import"./Stack-nACsOQMl.js";import"./extendSxProp-BzmqKLI1.js";import"./getThemeProps-DZdSY8L1.js";import"./useTheme-Ca_XsRek.js";import"./Box-lXBqa0w4.js";import"./AlertTitle-VLBSHrk2.js";import"./Typography-4g68DreH.js";import"./index-svIImqrz.js";import"./useTheme-B2s4EB7u.js";import"./ClickAwayListener-Bz-ReVU0.js";import"./getReactElementRef-Box9zENy.js";import"./index-Cg-NYdTp.js";import"./index-B23RCk9E.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CjNaCVG-.js";import"./Tooltip-C8ZStvVN.js";import"./index-Ct9Rf63b.js";import"./useControlled-D3eLpMPG.js";import"./Popper-DdPF3MkX.js";import"./Button-Ci0K1sFb.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BYEtqtR3.js";import"./useQuery-aHTHwXyx.js";import"./QueryClientProvider-BRldLZ-m.js";import"./Link-BnLqsAr0.js";import"./Collapse-CYQyUAKl.js";import"./_baseUniq-BI6FpUhd.js";import"./_Uint8Array-CgpluCFv.js";import"./isArray-DcG_fQmu.js";import"./_getTag-Y03KTm9l.js";import"./isEqual-B4Y5Mthl.js";import"./merge-DTTjlo60.js";import"./_initCloneObject-BkHORoGk.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-8AEzUVpA.js";import"./inputBaseClasses-_-Z8ymSP.js";import"./calculateFriendlyFileSize-DVdgBpm5.js";import"./CheckCircleTwoTone-DNy4X0lL.js";import"./InfoTwoTone-DljfHxNq.js";import"./useMutation-Cb2l52Mt.js";import"./dayjs.min-CkZTX9Mn.js";import"./chunk-AYJ5UCUI-Bm-JoqAt.js";import"./cloneDeep-DhV9vMAr.js";import"./Skeleton-DyqvYy1n.js";import"./SkeletonButton-Cjt-pZzu.js";import"./SkeletonInlineBlock-pMrfnLnx.js";import"./SkeletonTable-CGgLWgMt.js";import"./times-cnpCfQ0i.js";import"./toInteger-BsZXZ6Ek.js";import"./toNumber-DVGko9ii.js";import"./isSymbol-Dd_nArVn.js";import"./SkeletonParagraph-BZU5eOqr.js";import"./uniqueId-hvzK_sq2.js";import"./toString-BUfGd_wO.js";import"./CSSTransition-Cpxi9ggp.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-CaUnv1__.js";import"./Avatar-gMvumbCR.js";const cr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
