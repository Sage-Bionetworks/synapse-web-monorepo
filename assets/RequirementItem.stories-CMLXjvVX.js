import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CPrB_Pak.js";import{M as x}from"./MarkdownSynapse-CZSBME0J.js";import{d as s}from"./ToastMessage-5H4S3wCw.js";import{R as n,a as t}from"./RequirementItem-CPrwnZ1r.js";import{P as O}from"./Paper-CFzpqlYG.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-ByLg6Hzw.js";import"./VerificationSubmission-NmfK1W18.js";import"./useFiles-BGrxL2iU.js";import"./SynapseConstants-BntnvZH2.js";import"./OrientationBanner-HRNQ16-S.js";import"./index-CD6LRfjk.js";import"./index-DEIgO5g0.js";import"./iframe-DRO4Mibm.js";import"./spreadSx-CwcO6WA9.js";import"./react-Cie7PCkE.js";import"./FullWidthAlert-MSTP7abe.js";import"./Alert-7UwccEQI.js";import"./createTheme-BSolit1L.js";import"./DefaultPropsProvider-BRK8Gpgv.js";import"./useSlot-BCsmIOuw.js";import"./useForkRef-ML_8ULgM.js";import"./createSimplePaletteValueFilter-DiaghoeG.js";import"./createSvgIcon-BUqZN3uJ.js";import"./Close-Bgy01rC6.js";import"./IconButton-B-jAlb2d.js";import"./useTimeout-C3fnIm3j.js";import"./ButtonBase-BTOrtbxv.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-B03UST9X.js";import"./Stack-CMvDN6wI.js";import"./extendSxProp-Bfe98iSr.js";import"./getThemeProps-c3yHcgjd.js";import"./useTheme-BMOOn5Gt.js";import"./Box-CZNSunrR.js";import"./AlertTitle-CH1jH-vY.js";import"./Typography-BABWS0JL.js";import"./index-CS8B7mXd.js";import"./useTheme-DBeyBhi1.js";import"./ClickAwayListener-CFizcL6r.js";import"./getReactElementRef-CvSzv7Ek.js";import"./index-C_zxhu3D.js";import"./index-CYW7llYR.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BvvUKrEE.js";import"./Tooltip-Beoc5yzh.js";import"./index-BlPrlTn7.js";import"./useControlled-CG5f7BHT.js";import"./Popper-fz5TkfFk.js";import"./Button-DJE7iHzr.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-BfPnFRzo.js";import"./QueryClientProvider-DjP109WM.js";import"./Link-C4G_EJya.js";import"./Collapse-rZubCBR0.js";import"./_baseUniq-CrHYoj_7.js";import"./_Uint8Array-CiGkbB2-.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-D2gDBPDN.js";import"./isArray-Dxzbedgu.js";import"./_getTag-BTjUuWeO.js";import"./isEqual-B7Qx9sLZ.js";import"./merge-BD0x1C3U.js";import"./_initCloneObject-aSybOn34.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DaYnAlan.js";import"./inputBaseClasses-YDjGCLQC.js";import"./calculateFriendlyFileSize-Djp4AHR3.js";import"./CheckCircleTwoTone-DR2KICn0.js";import"./InfoTwoTone-B2oXj03G.js";import"./useMutation-BewQEQgZ.js";import"./dayjs.min-BimRwZVh.js";import"./chunk-AYJ5UCUI-DLRn4oZF.js";import"./cloneDeep-BlyOP8Q9.js";import"./Skeleton-C9NGKUUZ.js";import"./SkeletonButton-NaXlSnKH.js";import"./SkeletonInlineBlock-CsinoLJ1.js";import"./SkeletonTable-Di3kpbKk.js";import"./times-CEC8rrtc.js";import"./toInteger-BPD5p4Ww.js";import"./isSymbol-Bz_5vL9r.js";import"./SkeletonParagraph-E_KagVNj.js";import"./uniqueId-Ih7nXYLc.js";import"./toString-DS4g5aOa.js";import"./CSSTransition-BdjyMo97.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-CUt_hlfw.js";import"./Avatar-rgnWz4bk.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
