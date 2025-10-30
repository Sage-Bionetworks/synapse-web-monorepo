import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-D4SmAEKI.js";import{d as s}from"./ToastMessage-FEVPbrCt.js";import{R as n,a as t}from"./RequirementItem-oXJxXOPj.js";import{P as O}from"./Paper-q9JuhaB3.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-DP5r_8h_.js";import"./SynapseConstants-B374GTlB.js";import"./OrientationBanner-BU-7X07a.js";import"./index-DOh4s_-E.js";import"./index-BtGDcTvp.js";import"./iframe-CBNphiDP.js";import"./spreadSx-CwcO6WA9.js";import"./react-Cn6UXufh.js";import"./FullWidthAlert-DNI0u40D.js";import"./Alert-C_0F6J7S.js";import"./createTheme-C4xHNGdh.js";import"./DefaultPropsProvider-BHwoOyH7.js";import"./useSlot-4Dt2bm7X.js";import"./useForkRef-BiijcE59.js";import"./createSimplePaletteValueFilter-C_Cdnk9R.js";import"./createSvgIcon-s4G4qou3.js";import"./Close-Cg5bmZHm.js";import"./IconButton-DwyAerDa.js";import"./useTimeout-Cmz87tz9.js";import"./ButtonBase-DBuVifEX.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BMJ4Jv0_.js";import"./Stack-DYtdGJnP.js";import"./useThemeProps-BpG_5eyZ.js";import"./getThemeProps-gvKTAKTt.js";import"./useTheme-DwROfidY.js";import"./extendSxProp-B_iH4oL0.js";import"./Box-DcHUT-iR.js";import"./AlertTitle-Cc_aOr1q.js";import"./Typography-C87QV3YC.js";import"./index-DValAcPx.js";import"./useTheme-Dx4TqPEY.js";import"./ClickAwayListener-C8du9OzG.js";import"./getReactElementRef-Bvp3nBcK.js";import"./index-umcRd70c.js";import"./index-ChFLTI6y.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-7xCOvQFP.js";import"./Tooltip-BVGISXDf.js";import"./index-VuQkd2dy.js";import"./useControlled-ChZzA-b3.js";import"./Popper-1yvfHCmZ.js";import"./Button-X-aMYJSh.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-DKU6Kxm0.js";import"./QueryClientProvider-Drv3DDYU.js";import"./Link-DNZklxO1.js";import"./Collapse-Bo6KiRDL.js";import"./_baseUniq-D9WPqwKE.js";import"./_Uint8Array-CtW1SfOY.js";import"./isArray-DJCEQSyb.js";import"./_getTag-C_b1pV5H.js";import"./isEqual-XYNdVziB.js";import"./noop-DX6rZLP_.js";import"./merge-BiadW8tB.js";import"./_initCloneObject-KGx9qkw7.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Bp6vP_zE.js";import"./inputBaseClasses-ESUxP_6L.js";import"./calculateFriendlyFileSize-BGNYAu__.js";import"./CheckCircleTwoTone-B_j1OfQE.js";import"./InfoTwoTone-Fe5W6L4i.js";import"./useMutation-CR2RaXsm.js";import"./dayjs.min-BFapz5wS.js";import"./chunk-AYJ5UCUI-C5f8fAX_.js";import"./cloneDeep-BD-s7-9R.js";import"./Skeleton-DdZWbvza.js";import"./SkeletonButton-DYtdjqSY.js";import"./SkeletonInlineBlock-CN0uCq7x.js";import"./SkeletonTable-CWS9ay58.js";import"./times-C6sZ1Dzv.js";import"./toInteger-Yff7iR8r.js";import"./isSymbol-jJgaIxLY.js";import"./SkeletonParagraph-DpLHM0PJ.js";import"./uniqueId-ejRe9Idn.js";import"./toString-zDFlmQqe.js";import"./CSSTransition-B15yyRxI.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-C8Qt_pNk.js";import"./Avatar-Drfit0Fr.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
