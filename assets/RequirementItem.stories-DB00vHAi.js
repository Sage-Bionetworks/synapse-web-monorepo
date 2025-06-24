import{j as a}from"./jsx-runtime-TM5gBVMz.js";import{m as P}from"./mockWiki-CUQx1XWq.js";import{M as x}from"./MarkdownSynapse-DR3WtFnH.js";import{d as s}from"./ToastMessage-BI4DcQwq.js";import{R as n,a as t}from"./RequirementItem-svw2nwAd.js";import{P as O}from"./Paper-H-iBRfk0.js";import"./index-DcrLmmvh.js";import"./iframe-BfmWAJ1G.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-3Ozoui7p.js";import"./VerificationSubmission-CMrrYimb.js";import"./useFiles-Dx4nqkrZ.js";import"./SynapseConstants-Cy-pIAQY.js";import"./OrientationBanner-BxanlOCo.js";import"./index-DtkhSScd.js";import"./spreadSx-CwcO6WA9.js";import"./react-C80836hF.js";import"./FullWidthAlert-B6-1XxnC.js";import"./Alert-CBYuJjUz.js";import"./createTheme-BKvghQEf.js";import"./DefaultPropsProvider-BNasm-Ou.js";import"./useSlot-XdCIW-h3.js";import"./useForkRef-XqLeOv9F.js";import"./createSimplePaletteValueFilter-DHCUxeJ8.js";import"./createSvgIcon-BbcBufaS.js";import"./Close-D492_-ET.js";import"./IconButton-BEEZ6tpT.js";import"./useTimeout-BftIpzR-.js";import"./ButtonBase-Cl-S3PYL.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BsYeRfew.js";import"./Stack-Y-KdTpE4.js";import"./extendSxProp-oKPMvBLW.js";import"./getThemeProps-Cb8oY0Qe.js";import"./useTheme-BhuPaSeU.js";import"./Box-CMo5M51H.js";import"./AlertTitle-Bi606xzP.js";import"./Typography-CgSuXiyf.js";import"./index-CFEbK4PF.js";import"./useTheme-DtdHK4vR.js";import"./ClickAwayListener-dAZKGzwC.js";import"./getReactElementRef-Cyw8ECuQ.js";import"./index-CpnHSm9k.js";import"./index-BfBfPSox.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Hoso1Ov1.js";import"./Tooltip-DWnEW01p.js";import"./index-DyZIyS5M.js";import"./useControlled-Bw9-6emG.js";import"./Popper-DLhvBE31.js";import"./Button-CeywVuQa.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bdqa-HwM.js";import"./useQuery-DWcuFtFn.js";import"./utils-BSLg82VF.js";import"./Link-AwFPqLn3.js";import"./Collapse-D80fVN7l.js";import"./_baseUniq-DcrBDh3N.js";import"./_Uint8Array-B9oWbY4J.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CGp-n6LW.js";import"./isArray-Dxzbedgu.js";import"./_getTag-Bi02mvlw.js";import"./isEqual-D-64DOLy.js";import"./merge-BQVcazkY.js";import"./_initCloneObject-DLnryqg0.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CggMuk3s.js";import"./inputBaseClasses-Zx-pyOTC.js";import"./calculateFriendlyFileSize-DuuHQRMP.js";import"./CheckCircleTwoTone-C33LPoZ-.js";import"./InfoTwoTone-CaPa5gLu.js";import"./useMutation-Bn2cJuV2.js";import"./dayjs.min-BixASCcq.js";import"./chunk-AYJ5UCUI-CnETIcAk.js";import"./cloneDeep-ChkAVuXo.js";import"./Skeleton-DL-SXoBE.js";import"./SkeletonButton-CVHuE9IT.js";import"./SkeletonInlineBlock-Wl0JSFQH.js";import"./SkeletonTable-DlFxZ_Bs.js";import"./times-BTvcS8De.js";import"./toInteger-D5sFCYPs.js";import"./isSymbol-C9sjeU7C.js";import"./SkeletonParagraph-CvIwAAFS.js";import"./uniqueId-1SpVVIXP.js";import"./toString-VWbtfyZl.js";import"./CSSTransition-DfFuB6aH.js";import"./ConditionalWrapper-CbUqGGPO.js";import"./LockTwoTone-D8-d6Vcj.js";import"./Avatar-CLtD_kPc.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(q=(I=m.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};const ur=["Complete","Pending","Loading","NoActions","Locked"];export{r as Complete,e as Loading,m as Locked,i as NoActions,o as Pending,ur as __namedExportsOrder,dr as default};
