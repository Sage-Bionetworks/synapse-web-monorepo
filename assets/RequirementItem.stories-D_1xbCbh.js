import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CPrB_Pak.js";import{M as x}from"./MarkdownSynapse-BwxCqU-5.js";import{d as s}from"./ToastMessage-Drl51COT.js";import{R as n,a as t}from"./RequirementItem-iPzDRDYT.js";import{P as O}from"./Paper-CIxRtZl4.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-ByLg6Hzw.js";import"./VerificationSubmission-NmfK1W18.js";import"./useFiles-BAiph8Ej.js";import"./SynapseConstants-CYj6kXbQ.js";import"./OrientationBanner-fbSmiwhA.js";import"./index-D0fIp_t6.js";import"./index-BlD88g6h.js";import"./iframe-Dw2kzFmB.js";import"./spreadSx-CwcO6WA9.js";import"./react-C3RSnw2z.js";import"./FullWidthAlert-BFCll_GI.js";import"./Alert-CLnis_wa.js";import"./createTheme-CH0S07Xl.js";import"./DefaultPropsProvider-CHwO8Irh.js";import"./useSlot-CyLwBbxN.js";import"./useForkRef-DLhOhr1j.js";import"./createSimplePaletteValueFilter-PozQUcR9.js";import"./createSvgIcon-BI80JrgA.js";import"./Close-CEirCeG1.js";import"./IconButton-CtEoJzuT.js";import"./useTimeout-CBvk5HB8.js";import"./ButtonBase-BbZdtk3k.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BzD6ZhYg.js";import"./Stack-CvINZxhI.js";import"./extendSxProp-B2u3Q9Pp.js";import"./getThemeProps-nOnHEFGz.js";import"./useTheme-COGVK8pJ.js";import"./Box-BGkXd8ho.js";import"./AlertTitle-Dnb-77sV.js";import"./Typography-e2IiOH4S.js";import"./index-DdoUcSEN.js";import"./useTheme-DYKHbQqC.js";import"./ClickAwayListener-Bmj-Z5W3.js";import"./getReactElementRef-DmWaJQ_1.js";import"./index-Ccc0V01c.js";import"./index-DZEeyIQH.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CY8LBbso.js";import"./Tooltip-BOQgbOBe.js";import"./index-D4uhv7w9.js";import"./useControlled-BNsMtrFO.js";import"./Popper-Bz3MVMCK.js";import"./Button-acN03ydj.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-CbujSmpl.js";import"./QueryClientProvider-BBCGFjVi.js";import"./Link-DXSEdgEI.js";import"./Collapse-Czjt1YE3.js";import"./_baseUniq-CBw35EsX.js";import"./_Uint8Array-D6j-lsbe.js";import"./isArray-wxYDmiSy.js";import"./_getTag-Ce3sAoVI.js";import"./isEqual-DaCmCZrZ.js";import"./merge-DC5vg56i.js";import"./_initCloneObject--NHd_UNu.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DMpsy5Bs.js";import"./inputBaseClasses-Dp8MT5pH.js";import"./calculateFriendlyFileSize-umI_uxNa.js";import"./CheckCircleTwoTone-CIsibCt1.js";import"./InfoTwoTone-DCKJ2vct.js";import"./useMutation-y0cbPqin.js";import"./dayjs.min-JYtXttkU.js";import"./chunk-AYJ5UCUI-C4czLWrh.js";import"./cloneDeep-nG13UmtC.js";import"./Skeleton-D8Egyo3_.js";import"./SkeletonButton-BUiK4Rni.js";import"./SkeletonInlineBlock-D8uGmju5.js";import"./SkeletonTable-BCWpRVTU.js";import"./times-Bjs-SHMI.js";import"./toInteger-Ci0DL3es.js";import"./toNumber-D4P_Po3r.js";import"./isSymbol-Bm-lmYSR.js";import"./SkeletonParagraph-BTfH28WQ.js";import"./uniqueId-BEvbR1HG.js";import"./toString-B7AWy0cM.js";import"./CSSTransition-TtpwmNS3.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-CsJYQgfn.js";import"./Avatar-Ddv7d1SL.js";const cr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
