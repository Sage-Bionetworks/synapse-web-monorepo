import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-I4pwtJjs.js";import{d as s}from"./ToastMessage-D0bfbfMg.js";import{R as n,a as t}from"./RequirementItem-C6fAcLKb.js";import{P as O}from"./Paper-Cx_w1032.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-DaYozhj8.js";import"./SynapseConstants-CZPiPVFz.js";import"./OrientationBanner-B2DF_DFi.js";import"./index-B1UExM3p.js";import"./index-BULbjeCJ.js";import"./iframe-D8Kty_Cx.js";import"./spreadSx-CwcO6WA9.js";import"./react-D4pAv_N3.js";import"./FullWidthAlert-EAoJPxu-.js";import"./Alert-CClpx-g6.js";import"./createTheme-ev_cnLba.js";import"./DefaultPropsProvider-BYuvptnG.js";import"./useSlot-BwDIOyOX.js";import"./useForkRef-7bnDI6EI.js";import"./createSimplePaletteValueFilter-C5m0hHOH.js";import"./createSvgIcon-C0GalzBE.js";import"./Close-CYhpPBds.js";import"./IconButton-DMIkHh5_.js";import"./useTimeout-DWmVZNbT.js";import"./ButtonBase-CiAIFq4G.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BwBC6jxn.js";import"./Stack-BFFoH8un.js";import"./extendSxProp-Ce12OY0O.js";import"./getThemeProps-BORvnqwy.js";import"./useTheme-dcyxTKNU.js";import"./Box-DqnviQW6.js";import"./AlertTitle-geORYhAF.js";import"./Typography-DitlkZyP.js";import"./index-ClN6qXii.js";import"./useTheme-B5FTPKZL.js";import"./ClickAwayListener-BbaBQeHw.js";import"./getReactElementRef-D0uGMMsH.js";import"./index-fk2bcQrb.js";import"./index-Dct6V00c.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-D5RDzHRC.js";import"./Tooltip-BLYw3Ezs.js";import"./index-B4uz7QPW.js";import"./useControlled-ByKzLjYb.js";import"./Popper-1vHQSSRm.js";import"./Button-r_CHdG4P.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-Mk4mN9q8.js";import"./QueryClientProvider-C83H8mhw.js";import"./Link-DxLeV4Tk.js";import"./Collapse-Cd_tDlUa.js";import"./_baseUniq-DnPxHH0Q.js";import"./_Uint8Array-Cji-Snuo.js";import"./isArray-tOqOrFMs.js";import"./_getTag-C3CHM0S0.js";import"./isEqual-BQ3mKdqC.js";import"./merge-Dr5C9d-b.js";import"./_initCloneObject-CM0Vu1zc.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-7vaEf5cW.js";import"./inputBaseClasses-BsVVbgu8.js";import"./calculateFriendlyFileSize-aCuYBZYU.js";import"./CheckCircleTwoTone-CxOtohD-.js";import"./InfoTwoTone-CqaUMjXS.js";import"./useMutation-CZS0_A_1.js";import"./dayjs.min-CmsqEN2B.js";import"./chunk-AYJ5UCUI-BnMQ8BOG.js";import"./cloneDeep-oCmGEZxM.js";import"./Skeleton-jbL9UTdY.js";import"./SkeletonButton-DogY7bbu.js";import"./SkeletonInlineBlock-Bgp2oViA.js";import"./SkeletonTable-BHD6Ddwk.js";import"./times-DcD14I14.js";import"./toInteger-B1OGm4wT.js";import"./isSymbol-Cy-jvChq.js";import"./SkeletonParagraph-bNKAs0JR.js";import"./uniqueId-pXwkMJKM.js";import"./toString-C59pQWTJ.js";import"./CSSTransition-CgSQe5k1.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-gZlAzTlr.js";import"./Avatar-qg9wzVAV.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
