import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-DfUFcqb7.js";import{d as s}from"./ToastMessage-CQTmbO1I.js";import{R as n,a as t}from"./RequirementItem-DcqE8raT.js";import{P as O}from"./Paper-CnCPZiGK.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-K8DYYfbL.js";import"./SynapseConstants-BNqJ1dmQ.js";import"./OrientationBanner-DO3atoak.js";import"./index-DMGiq-oD.js";import"./index-BWypuEAC.js";import"./iframe-DLoU1ahu.js";import"./spreadSx-CwcO6WA9.js";import"./react-DjBUmadF.js";import"./FullWidthAlert-CRt1fznC.js";import"./Alert-BV3pGEf4.js";import"./createTheme-CTYanVb6.js";import"./DefaultPropsProvider-BDt2e6U1.js";import"./useSlot-Bjs5jEzg.js";import"./useForkRef-BYimg5tu.js";import"./createSimplePaletteValueFilter-DyxFD1HT.js";import"./createSvgIcon-BtjRo1s8.js";import"./Close-TuaEvS9Q.js";import"./IconButton-CG40tOLN.js";import"./useTimeout-CV-UDPnG.js";import"./ButtonBase-B1Aawh7J.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Cv2RV5mv.js";import"./Stack-B3sHXsJB.js";import"./extendSxProp-An3U-zM_.js";import"./getThemeProps-Ds-P6itY.js";import"./useTheme-vH2-3CZY.js";import"./Box-BNUP0C4N.js";import"./AlertTitle-Co0RehR7.js";import"./Typography-BuQPwiWH.js";import"./index-B_N18MqX.js";import"./useTheme-C5bnTO0C.js";import"./ClickAwayListener-DXEacgiq.js";import"./getReactElementRef-C59rUygw.js";import"./index-Dsh6_7g_.js";import"./index-OIClFg-6.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow--ZE6kIjo.js";import"./Tooltip-LGtZ2wNx.js";import"./index-BTTxMwcY.js";import"./useControlled-zZFQr41i.js";import"./Popper-CqfbaZIs.js";import"./Button-Dcf2Uy6O.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-DE-P6w3m.js";import"./QueryClientProvider-C0WTo0Yv.js";import"./Link-CTVAbhge.js";import"./Collapse-Csaq8Kqm.js";import"./_baseUniq-Di1qZggb.js";import"./_Uint8Array-BMT3sbmx.js";import"./isArray-OPNH0lK8.js";import"./_getTag-DHdisHvI.js";import"./isEqual-UFGSw-KB.js";import"./merge-CwLris3H.js";import"./_initCloneObject-lij9pG62.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-D4hRl5lB.js";import"./inputBaseClasses-6-j6zI35.js";import"./calculateFriendlyFileSize-Z2sNf6lN.js";import"./CheckCircleTwoTone-BGkZTGGE.js";import"./InfoTwoTone-DB8Ypec5.js";import"./useMutation-7J5H8WCt.js";import"./dayjs.min-CjfNKo90.js";import"./chunk-AYJ5UCUI-BocGNCD5.js";import"./cloneDeep-BDdpJTPu.js";import"./Skeleton-ZFgYUmdS.js";import"./SkeletonButton-BeNv1vHX.js";import"./SkeletonInlineBlock-BSqi2LGR.js";import"./SkeletonTable-2ZnI4IEP.js";import"./times-IMrrZIta.js";import"./toInteger-4L7jdfco.js";import"./isSymbol-DlvAnO-7.js";import"./SkeletonParagraph-CAoWenhb.js";import"./uniqueId-DalZAxOt.js";import"./toString-sXWj2bS0.js";import"./CSSTransition-BmNKFesH.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-DYPHmCIt.js";import"./Avatar-DNOd-m5z.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
