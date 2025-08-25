import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CUU_PTHo.js";import{M as x}from"./MarkdownSynapse-DpgB2C32.js";import{d as s}from"./ToastMessage-BkhnxubM.js";import{R as n,a as t}from"./RequirementItem-BZ7LtdtV.js";import{P as O}from"./Paper-CrOcAKNw.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-Dl3vPZhE.js";import"./VerificationSubmission-CNoSrCdk.js";import"./useFiles-D_gVWFHx.js";import"./SynapseConstants-MtbKIoc0.js";import"./OrientationBanner-TuzAQv9d.js";import"./index-Bgb0qH91.js";import"./index-B25hjvII.js";import"./iframe-CanEKFkf.js";import"./spreadSx-CwcO6WA9.js";import"./react-gdPSVHxq.js";import"./FullWidthAlert-CsnT3S0Z.js";import"./Alert-CMUYxoU4.js";import"./createTheme-CeLgvmU3.js";import"./DefaultPropsProvider-BT4R1ruD.js";import"./useSlot-FmPpnltM.js";import"./useForkRef-C_zmFNEw.js";import"./createSimplePaletteValueFilter-Dmw5w500.js";import"./createSvgIcon-B3urn6DB.js";import"./Close-BFk95YTC.js";import"./IconButton-Bo1_iaRr.js";import"./useTimeout-CT9u6xIp.js";import"./ButtonBase-DVVpaHYC.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-a2Aa-IB0.js";import"./Stack-CX78Gz_0.js";import"./extendSxProp-MkfofRzG.js";import"./getThemeProps-BIWXTvD7.js";import"./useTheme-S_q5Ryto.js";import"./Box-DvcAnSFU.js";import"./AlertTitle-JLHtZuQn.js";import"./Typography-C1n2Gc-4.js";import"./index-CNqkfiqy.js";import"./useTheme-W4kAWd5b.js";import"./ClickAwayListener-Bjyhl2ez.js";import"./getReactElementRef-B5zyHyCE.js";import"./index-DN2r2ujZ.js";import"./index-h-VymCwS.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-ymICMWfx.js";import"./Tooltip-BuHnAymE.js";import"./index-DQDbwlvs.js";import"./useControlled-D0puIBKv.js";import"./Popper-CUKMxY22.js";import"./Button-DtzkNhDQ.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-CwQ1lgbR.js";import"./useQuery-Bfg-ZGUc.js";import"./QueryClientProvider-Bp731WZp.js";import"./Link-DZC6UXn4.js";import"./Collapse-CZ2ygZqM.js";import"./_baseUniq-DS_qtplq.js";import"./_Uint8Array-CWekYRsx.js";import"./isArray-BQjuIHDh.js";import"./_getTag-DA_-6Xr_.js";import"./isEqual-CBHP1RPv.js";import"./merge-BDNvaxBl.js";import"./_initCloneObject-DZRG-IW9.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-zN12Tza6.js";import"./inputBaseClasses-Dqo0IIFM.js";import"./calculateFriendlyFileSize-RGx1gGOH.js";import"./CheckCircleTwoTone-DcmFcPP3.js";import"./InfoTwoTone-DR6uvdma.js";import"./useMutation-BaIPXJDt.js";import"./dayjs.min-DonIRj0C.js";import"./chunk-AYJ5UCUI-CY7fVuNR.js";import"./cloneDeep-BzZKBefz.js";import"./Skeleton-CnthbRVq.js";import"./SkeletonButton-Bo0Ej_pf.js";import"./SkeletonInlineBlock-D__YF-Sv.js";import"./SkeletonTable-CoUb_3o4.js";import"./times-B-7UfHs6.js";import"./toInteger-DERtW0xG.js";import"./isSymbol-FGFUqC0g.js";import"./SkeletonParagraph-DKEZf3Po.js";import"./uniqueId-DvKAozCC.js";import"./toString-Dgqo6DKH.js";import"./CSSTransition-CqPvNRDs.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-BpY72dqj.js";import"./Avatar-BehcAOTt.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
