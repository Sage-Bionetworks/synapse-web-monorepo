import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CPrB_Pak.js";import{M as x}from"./MarkdownSynapse-oah9iAR-.js";import{d as s}from"./ToastMessage-B5c3VOLr.js";import{R as n,a as t}from"./RequirementItem-B0-qt1Ej.js";import{P as O}from"./Paper-C5KijNv9.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-ByLg6Hzw.js";import"./VerificationSubmission-NmfK1W18.js";import"./useFiles-BvyRTXkx.js";import"./SynapseConstants-pVgLh2WD.js";import"./OrientationBanner-DqCjCNEW.js";import"./index-DlQmQoJz.js";import"./index-BYTlLpU9.js";import"./iframe-BKid-lRK.js";import"./spreadSx-CwcO6WA9.js";import"./react-DEUk6uJr.js";import"./FullWidthAlert-DLLPpbcN.js";import"./Alert-DN5hf0MM.js";import"./createTheme-C2WVS9AW.js";import"./DefaultPropsProvider-Dze3MY1J.js";import"./useSlot-DhXDWeRj.js";import"./useForkRef-I4T1u_0p.js";import"./createSimplePaletteValueFilter-BClAKmko.js";import"./createSvgIcon-BMvZ7oXn.js";import"./Close-B4WzIeG2.js";import"./IconButton-3lKaiqot.js";import"./useTimeout-5QYkjsCW.js";import"./ButtonBase-B3L_VbRY.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-C2on9yNq.js";import"./Stack-lGKypZky.js";import"./extendSxProp-hAnljuIT.js";import"./getThemeProps-CmsihZNb.js";import"./useTheme-BXs8ghRm.js";import"./Box-C4s19pAM.js";import"./AlertTitle-BBLd9HvD.js";import"./Typography-CNMx-WpY.js";import"./index-DNfsT4bF.js";import"./useTheme-B3ETyTW4.js";import"./ClickAwayListener-KNw01Chz.js";import"./getReactElementRef-DL4umzvE.js";import"./index-BAySunq4.js";import"./index-BHvWQWGH.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-S4wEu2q4.js";import"./Tooltip-BfCBVAo0.js";import"./index-r6UZXaqk.js";import"./useControlled-CVqp7PLm.js";import"./Popper-CcW7sw4B.js";import"./Button-ClULhOKL.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-xk0So2qB.js";import"./QueryClientProvider-BtqaYAAi.js";import"./Link-DpIdHsj4.js";import"./Collapse-CwN0BiGZ.js";import"./_baseUniq-BV2fBIfC.js";import"./_Uint8Array-xFXqFFYz.js";import"./isArray-Dim04xSh.js";import"./_getTag-DT5pSQEx.js";import"./isEqual-B3UZDxYF.js";import"./merge--HaAKor2.js";import"./_initCloneObject-BHhvY9wg.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DHTUk004.js";import"./inputBaseClasses-Bs_Q9F2g.js";import"./calculateFriendlyFileSize-DzlXv0C9.js";import"./CheckCircleTwoTone-Ifw1IDko.js";import"./InfoTwoTone-puvntKUh.js";import"./useMutation-7NzcGZE3.js";import"./dayjs.min-Bc1Mhefl.js";import"./chunk-AYJ5UCUI-CBzP6w0d.js";import"./cloneDeep-DD3Zj_Oy.js";import"./Skeleton-MT-LmfX5.js";import"./SkeletonButton-KKH-ooqO.js";import"./SkeletonInlineBlock-Bp865s3q.js";import"./SkeletonTable-B_h4_lio.js";import"./times-D5KSZdkQ.js";import"./toInteger-DQmoBqKV.js";import"./toNumber-CZfILk0R.js";import"./isSymbol-BgwjKJag.js";import"./SkeletonParagraph-C-Pi_R7X.js";import"./uniqueId-BHS08SxE.js";import"./toString-B4FXmXYv.js";import"./CSSTransition-CINbSxJB.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-DnQJNyZA.js";import"./Avatar-61aY8Zzh.js";const cr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
