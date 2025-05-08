import{j as a}from"./jsx-runtime-tHJZYBcw.js";import{m as P}from"./mockWiki-B6wTqEDI.js";import{M as x}from"./MarkdownSynapse-CAMsGIQ_.js";import{d as s}from"./ToastMessage-4g651IXb.js";import{R as n,a as t}from"./RequirementItem-Dp0UnJyr.js";import{P as O}from"./Paper-DL6O15NN.js";import"./index-Df9ki4m7.js";import"./iframe-gu9nKSuU.js";import"./mock_user_profile-CijvmO8r.js";import"./mock_file_handle-3wYKbysY.js";import"./VerificationSubmission-dxY1kvC5.js";import"./useFiles-jPWlXuHc.js";import"./SynapseConstants-Ba1heHX4.js";import"./OrientationBanner-DmtTd2TQ.js";import"./index-DgcLTxff.js";import"./spreadSx-CwcO6WA9.js";import"./react-EBci5e-X.js";import"./FullWidthAlert-DPDY4mXa.js";import"./Alert-BCxFFk19.js";import"./createTheme-BINNrTrD.js";import"./resolveComponentProps-C_h7LpqL.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-By6tpA4H.js";import"./createSvgIcon-aeHwAv7r.js";import"./DefaultPropsProvider-BBINbyFF.js";import"./Close-Dg0Yyhdl.js";import"./IconButton-C4fHQ2mP.js";import"./ButtonBase-BJnbOYI0.js";import"./useTimeout-CkReBcKO.js";import"./TransitionGroupContext-Bx3VJPm0.js";import"./useIsFocusVisible-CFzyuqS3.js";import"./useEventCallback-FcdrOq4M.js";import"./Stack-BcSaEj59.js";import"./getThemeProps-_buxTbuI.js";import"./useTheme-CrZO8DL0.js";import"./Box-C3CCkmvB.js";import"./AlertTitle-BgljIgUy.js";import"./Typography-CPW1w4ki.js";import"./useTheme-D7aU4zJW.js";import"./Grow-Bw7JNtNh.js";import"./index-Bs9oirMy.js";import"./utils-FhFw91KO.js";import"./ClickAwayListener-CvMIu_kV.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip--cxr29Mn.js";import"./index-Cxy_adfL.js";import"./useControlled-D0Pe8713.js";import"./useId-BitcG2W_.js";import"./Popper-C7DDlbfw.js";import"./Button-otBf-fCg.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-lE31obNl.js";import"./useQuery-DQWZeiYF.js";import"./utils-8n4YkW-3.js";import"./Link-CaTJJdl0.js";import"./Collapse-Cv_pKtFc.js";import"./isNil-dfygdcyY.js";import"./_Uint8Array-BY3nRIcz.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CnZoMM3i.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-Bsx2OylX.js";import"./_getTag-DaN_q5c6.js";import"./tinycolor-Begke6kS.js";import"./Fade-CNMLBLPt.js";import"./Skeleton-CgkAeMKL.js";import"./inputBaseClasses-Czd2LOTF.js";import"./calculateFriendlyFileSize-DvGvzjK0.js";import"./CheckCircleTwoTone-gIIBURBC.js";import"./InfoTwoTone-D0xmy2qt.js";import"./mutation-BRa-ekOT.js";import"./dayjs.min-MYorRcO6.js";import"./chunk-AYJ5UCUI-hydSzuez.js";import"./cloneDeep-CeJYBU74.js";import"./_initCloneObject-BmsGmtIF.js";import"./isEqual-DW03Q8_-.js";import"./merge-Byo7_oei.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-BJ8gNvUN.js";import"./SkeletonInlineBlock-Ba8buGB9.js";import"./SkeletonTable-CBmaqvB9.js";import"./times-BoEMLL0K.js";import"./toInteger-DlOEUMT-.js";import"./isSymbol-Bi-T8Hl2.js";import"./SkeletonParagraph-DG99-NLx.js";import"./uniqueId-aXBBIKHb.js";import"./toString-4TSAtCHz.js";import"./CSSTransition-BuIomPHg.js";import"./ConditionalWrapper-XyV5spwv.js";import"./LockTwoTone-DTCD7Cv0.js";import"./Avatar-QWedYQTv.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
