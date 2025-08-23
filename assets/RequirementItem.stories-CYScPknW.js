import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-cQOfbftA.js";import{d as s}from"./ToastMessage-ByIFtkyc.js";import{R as n,a as t}from"./RequirementItem-BliC_zdc.js";import{P as O}from"./Paper-CRPbRcXd.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-Dgs3uMNM.js";import"./SynapseConstants-wJcRwust.js";import"./OrientationBanner-CHIYKSEx.js";import"./index-mio91fxR.js";import"./index-BW17KZKz.js";import"./iframe-AlUFIbQA.js";import"./spreadSx-CwcO6WA9.js";import"./react-Cpw0QdjG.js";import"./FullWidthAlert-Cbox3Wt6.js";import"./Alert-D14P_WXX.js";import"./createTheme-CJaSHM8i.js";import"./DefaultPropsProvider-GvbBlk1O.js";import"./useSlot-CIodoxpa.js";import"./useForkRef-BbR4VQwJ.js";import"./createSimplePaletteValueFilter-DJdOpCq8.js";import"./createSvgIcon-C4Pt1he2.js";import"./Close-B0lT3RNc.js";import"./IconButton-CDzmaI7z.js";import"./useTimeout-C-2tZBQJ.js";import"./ButtonBase-cLl0L_-X.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-XIYmj3c5.js";import"./Stack-GwaC4Ni9.js";import"./extendSxProp-DR6Eobbt.js";import"./getThemeProps-jCeH95Yf.js";import"./useTheme-BT7Iu2cS.js";import"./Box-BTXbyZ2n.js";import"./AlertTitle-B6_xGnBg.js";import"./Typography-D1F-iNAZ.js";import"./index-C4Yh2wPI.js";import"./useTheme-DGgtVRkC.js";import"./ClickAwayListener-DDE9KQe2.js";import"./getReactElementRef-jlFeFyay.js";import"./index-CinYwbgZ.js";import"./index-XSW94zJ8.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DCWexVAj.js";import"./Tooltip-DITPsrzh.js";import"./index-CeSOllUY.js";import"./useControlled-CLD-pQrt.js";import"./Popper-Be4VvP_C.js";import"./Button-CvHXhaAM.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-BRKwIggm.js";import"./QueryClientProvider-CfU8EORi.js";import"./Link-DJd8FYSi.js";import"./Collapse-D1glpoFn.js";import"./_baseUniq-DZkpOZuT.js";import"./_Uint8Array-CabcxReM.js";import"./isArray-Hdn9cI6Y.js";import"./_getTag-CVjReAgr.js";import"./isEqual-BSL4CLyC.js";import"./merge-9eTURKQA.js";import"./_initCloneObject-BV3thbhv.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CHNlJFXp.js";import"./inputBaseClasses-oDpC98vD.js";import"./calculateFriendlyFileSize-BbKg9Xga.js";import"./CheckCircleTwoTone-D_EH_ocU.js";import"./InfoTwoTone-B1r95wou.js";import"./useMutation-CbrFQrRG.js";import"./dayjs.min-BtGMXT4Y.js";import"./chunk-AYJ5UCUI-FooUYMmZ.js";import"./cloneDeep-Djr6Dklt.js";import"./Skeleton-n40_vaA5.js";import"./SkeletonButton-CQOtAjaJ.js";import"./SkeletonInlineBlock-IgrC-mCS.js";import"./SkeletonTable-D5Ia-O1L.js";import"./times-D8t6rW9z.js";import"./toInteger-BDayn89P.js";import"./isSymbol-CF1Y2Ha4.js";import"./SkeletonParagraph-_gJJd9VZ.js";import"./uniqueId-3Nd8uI87.js";import"./toString-XQVfVuLL.js";import"./CSSTransition-DHokZ1yt.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-D-s2CK_l.js";import"./Avatar-4NR7h-KB.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
