import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CPrB_Pak.js";import{M as x}from"./MarkdownSynapse-vhDxbZOi.js";import{d as s}from"./ToastMessage-D7MPWIkM.js";import{R as n,a as t}from"./RequirementItem-QJ1Us-c4.js";import{P as O}from"./Paper-BG7l0_y8.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-ByLg6Hzw.js";import"./VerificationSubmission-NmfK1W18.js";import"./useFiles-Cicb2Fab.js";import"./SynapseConstants-CTkk0YcO.js";import"./OrientationBanner-BlUDpySg.js";import"./index-DQ--YI-K.js";import"./index-BGNdVh4R.js";import"./iframe-AE1mdQoy.js";import"./spreadSx-CwcO6WA9.js";import"./react-Cuejj4jT.js";import"./FullWidthAlert-Be2gwQj0.js";import"./Alert-CrqIY-wz.js";import"./createTheme-X1uAO7Ls.js";import"./DefaultPropsProvider-DeTWygJX.js";import"./useSlot-CPEJSkHd.js";import"./useForkRef-C2dIUn0r.js";import"./createSimplePaletteValueFilter-UFX2hhfO.js";import"./createSvgIcon-CvselUDy.js";import"./Close-C_qvVBoC.js";import"./IconButton-C680_5sO.js";import"./useTimeout-DgF5bVxv.js";import"./ButtonBase-CNobuHaW.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Dy4elvdO.js";import"./Stack-lzsMsHwx.js";import"./extendSxProp-DtVryybG.js";import"./getThemeProps-DdP4bzUV.js";import"./useTheme-DIi1T6MV.js";import"./Box-L0O0STFf.js";import"./AlertTitle-CfXld3PK.js";import"./Typography-D1X9pdoV.js";import"./index-C_i8MycT.js";import"./useTheme-Mm30pFmH.js";import"./ClickAwayListener-0YWAWQC6.js";import"./getReactElementRef-DtWA-gMz.js";import"./index-DsBOwLp_.js";import"./index-DxPajm_D.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BShcMnXs.js";import"./Tooltip-CZAWndgC.js";import"./index-CqiNrveo.js";import"./useControlled-DQbRxG7o.js";import"./Popper-Dq6SXrQt.js";import"./Button-B1gMTkV-.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-B_5XOlz9.js";import"./QueryClientProvider-Bh11H2Tx.js";import"./Link-YzWgcoa0.js";import"./Collapse-DXtiwbuY.js";import"./_baseUniq-d9dUqTFO.js";import"./_Uint8Array-BwRsIvdr.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-3QLBOayV.js";import"./isArray-Dxzbedgu.js";import"./_getTag-DrMv2q-5.js";import"./isEqual-MO8O5CIC.js";import"./merge-CPwsaWlS.js";import"./_initCloneObject-DRS-e6dQ.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BZMDodWD.js";import"./inputBaseClasses-DGNggaF4.js";import"./calculateFriendlyFileSize-CT4UXWlw.js";import"./CheckCircleTwoTone-BJFSGkoY.js";import"./InfoTwoTone-C-EnLn6a.js";import"./useMutation-DZs3LBGN.js";import"./dayjs.min-BRrhIEIv.js";import"./chunk-AYJ5UCUI-C8bXuSzp.js";import"./cloneDeep-C4z9jnuA.js";import"./Skeleton-xTAD3frA.js";import"./SkeletonButton-zORBVQ1i.js";import"./SkeletonInlineBlock-B7mw9Uqn.js";import"./SkeletonTable-HAPh83rX.js";import"./times-BIHCC09B.js";import"./toInteger-fZOSkfB7.js";import"./isSymbol-kN_Qz5I_.js";import"./SkeletonParagraph-Dh3cYP3_.js";import"./uniqueId-BOd87y1k.js";import"./toString-B1ziVYQD.js";import"./CSSTransition-ByEofWZF.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-tcWYAe45.js";import"./Avatar-CbcQEBAi.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
