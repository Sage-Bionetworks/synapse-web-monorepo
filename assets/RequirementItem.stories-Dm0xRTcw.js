import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-CmuTndSI.js";import{d as s}from"./ToastMessage-Cw7Q9YFl.js";import{R as n,a as t}from"./RequirementItem-DsqxpMP8.js";import{P as O}from"./Paper-CH1kNGpI.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-DN5jeuBs.js";import"./SynapseConstants-Dk9mSEK3.js";import"./OrientationBanner-C5rRxLOd.js";import"./index-DJ2Mj2aK.js";import"./index-DGv34HBD.js";import"./iframe-DfhwYfkN.js";import"./spreadSx-CwcO6WA9.js";import"./react-Dqq1nFIk.js";import"./FullWidthAlert-7hlJBHTN.js";import"./Alert-DAG9Aucx.js";import"./createTheme-DGEGp_SD.js";import"./DefaultPropsProvider-DoDLwSqP.js";import"./useSlot-h-XFZ_xK.js";import"./useForkRef-DorXlh5L.js";import"./createSimplePaletteValueFilter-CEiraeEP.js";import"./createSvgIcon-BwKRHuRw.js";import"./Close-BoYD-Ye6.js";import"./IconButton-ByahMUeh.js";import"./useTimeout-D9n6b9ga.js";import"./ButtonBase-BwS93VGp.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CxFD3KzI.js";import"./Stack-Dr6m2zrE.js";import"./useThemeProps-ahUk6xR1.js";import"./getThemeProps-DeX8Xk5f.js";import"./useTheme-D6P-YjrR.js";import"./extendSxProp-CXOYizRA.js";import"./Box-6ErQd4eQ.js";import"./AlertTitle-C391Qgh2.js";import"./Typography-DFWCAegs.js";import"./index-D2dQp3lw.js";import"./useTheme-DBhTySsI.js";import"./ClickAwayListener-a0xZHR2I.js";import"./getReactElementRef-DFiSuhzk.js";import"./index-DDkg0FwF.js";import"./index-B11uVym8.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CyTlzzNv.js";import"./Tooltip-CuLP43i6.js";import"./index-BSM79-Da.js";import"./useControlled-DeakbIaX.js";import"./Popper-CuO8c7be.js";import"./Button-CxRuB6Io.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-B5XD2W2D.js";import"./QueryClientProvider-DgRSjt1E.js";import"./Link-aPqunS_C.js";import"./Collapse-DFPiA3AQ.js";import"./_baseUniq-fLehImUc.js";import"./_Uint8Array-BAfJSe8d.js";import"./isArray-RjWnP_xj.js";import"./_getTag-UgO0rBGX.js";import"./isEqual-DucS0a4x.js";import"./noop-DX6rZLP_.js";import"./merge-DNvf83vX.js";import"./_initCloneObject-g_hm0NT-.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DrTUWBA-.js";import"./inputBaseClasses-CHlIYh-9.js";import"./calculateFriendlyFileSize-FKoHcqwG.js";import"./CheckCircleTwoTone-B7GhCg84.js";import"./InfoTwoTone-DrINNaoG.js";import"./useMutation-C7G01Xnf.js";import"./dayjs.min-DwRsZaK6.js";import"./chunk-AYJ5UCUI-CVKajfNP.js";import"./cloneDeep-CV4bwBv0.js";import"./Skeleton-M7Xx-4bt.js";import"./SkeletonButton-BI5QuA9Z.js";import"./SkeletonInlineBlock-B0ifap68.js";import"./SkeletonTable-C4JZiTbv.js";import"./times-hHBCvPy2.js";import"./toInteger-BTHsAWLh.js";import"./isSymbol-DJa5TpaM.js";import"./SkeletonParagraph-DGZWIttL.js";import"./uniqueId-Cigrvl8-.js";import"./toString-W-CywYbt.js";import"./CSSTransition-CHmfOFrq.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-Bye7yySt.js";import"./Avatar-hQrTQi8-.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
