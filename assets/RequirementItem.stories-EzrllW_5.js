import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-Dx5uMMSh.js";import{d as s}from"./ToastMessage-CrFNx3l4.js";import{R as n,a as t}from"./RequirementItem-D_DNfWaD.js";import{P as O}from"./Paper-Cpv8FcM0.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-S2V5XiQ5.js";import"./SynapseConstants-v0apzKoO.js";import"./OrientationBanner-DFmDuf7j.js";import"./index-C7cfG45a.js";import"./index-sbO4x94I.js";import"./iframe-B7VjNHo_.js";import"./spreadSx-CwcO6WA9.js";import"./react-4SSRkyYe.js";import"./FullWidthAlert-CNH_Dqfb.js";import"./Alert-DZ8CbtWA.js";import"./createTheme-iVg2ALkG.js";import"./DefaultPropsProvider-CRtidxfI.js";import"./useSlot-C9f_lDyM.js";import"./useForkRef-CYTdLXIx.js";import"./createSimplePaletteValueFilter-C8f66SCi.js";import"./createSvgIcon-D3jU8-M9.js";import"./Close-B3lKWl3N.js";import"./IconButton-tGIn719_.js";import"./useTimeout-CGLlUFdL.js";import"./ButtonBase-COsjseQ1.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-D013myXI.js";import"./Stack-BEg7pLQM.js";import"./extendSxProp-DFEfVq7i.js";import"./getThemeProps-DM9gIAd0.js";import"./useTheme-CYmu3bRJ.js";import"./Box-DravUX6M.js";import"./AlertTitle-BQ770Cwf.js";import"./Typography-DRTW8NuR.js";import"./index-DZ4LX7su.js";import"./useTheme-DhBETySk.js";import"./ClickAwayListener-BSIiFOtQ.js";import"./getReactElementRef-BtsaYvD6.js";import"./index-DzYd1Bc_.js";import"./index-BKNU1Rjh.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-ChyhBvRk.js";import"./Tooltip-CJHx95Zp.js";import"./index-R2QlNZel.js";import"./useControlled-CfdyZ7Xn.js";import"./Popper-BuFN7FXQ.js";import"./Button-BK6paxd1.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-CBEaN3hw.js";import"./QueryClientProvider-CQeOfp_m.js";import"./Link-BJq7PyxB.js";import"./Collapse--UWddqzL.js";import"./_baseUniq-SRsv_8xH.js";import"./_Uint8Array-C4QD7eya.js";import"./isArray-BgCSpe1l.js";import"./_getTag-CFPOCuEk.js";import"./isEqual-C3QkQYs2.js";import"./merge-DYvHUG4s.js";import"./_initCloneObject-DwZJqav8.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-dEjfEC7w.js";import"./inputBaseClasses-Buwfxq9X.js";import"./calculateFriendlyFileSize-8dDJSstk.js";import"./CheckCircleTwoTone-3LbkrL10.js";import"./InfoTwoTone-BBLBptou.js";import"./useMutation-DxiTHEyI.js";import"./dayjs.min-d7VTqjeN.js";import"./chunk-AYJ5UCUI-D7s1T1vu.js";import"./cloneDeep-BOvso_ns.js";import"./Skeleton-lznIIFIC.js";import"./SkeletonButton-BfnxXOab.js";import"./SkeletonInlineBlock-Xy-wwnM5.js";import"./SkeletonTable-CRk7h5Zb.js";import"./times-DRBzd2y5.js";import"./toInteger-DhBeNU-T.js";import"./isSymbol-DsPf4Jsh.js";import"./SkeletonParagraph-D_p2L1Wx.js";import"./uniqueId-BYQQpX8l.js";import"./toString-BL0OxC_V.js";import"./CSSTransition-DW4i2oPj.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-D4AFWT6I.js";import"./Avatar-DfHRfO2D.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
