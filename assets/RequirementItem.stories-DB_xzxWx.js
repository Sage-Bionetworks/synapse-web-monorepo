import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CUU_PTHo.js";import{M as x}from"./MarkdownSynapse-BJXn8bWN.js";import{d as s}from"./ToastMessage-Bp4UvL21.js";import{R as n,a as t}from"./RequirementItem-lUejHEyH.js";import{P as O}from"./Paper-BGXgkOJn.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-Dl3vPZhE.js";import"./VerificationSubmission-CNoSrCdk.js";import"./useFiles-CwBFozNb.js";import"./SynapseConstants-H9QYZQx4.js";import"./OrientationBanner-CNeoJCz0.js";import"./index-DS8XOEZK.js";import"./index-ChY5Rm6r.js";import"./iframe-CqQBMbol.js";import"./spreadSx-CwcO6WA9.js";import"./react-DWoRMFdS.js";import"./FullWidthAlert-BORMZYsm.js";import"./Alert-Cb4ypvVc.js";import"./createTheme-yejIOOkb.js";import"./DefaultPropsProvider-CH4awBfy.js";import"./useSlot-CESV_KM2.js";import"./useForkRef-Bmi28WuE.js";import"./createSimplePaletteValueFilter-vjYDemZD.js";import"./createSvgIcon-BsG8pbCe.js";import"./Close-CYN-IZzU.js";import"./IconButton-BYEsdF7g.js";import"./useTimeout-B6D9Pure.js";import"./ButtonBase-OFJXx0k5.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DR9XS5It.js";import"./Stack-WojIaCdv.js";import"./extendSxProp-B7a0KEn2.js";import"./getThemeProps-OsG-0KZZ.js";import"./useTheme-BfPp1CkS.js";import"./Box-DnISmt3M.js";import"./AlertTitle-C3WBFCmK.js";import"./Typography-BRD-yvy7.js";import"./index-_5AG2bz6.js";import"./useTheme-DTyxxCa-.js";import"./ClickAwayListener-DFWrRdPK.js";import"./getReactElementRef-CPbW36NU.js";import"./index-BtYd2M4Q.js";import"./index-CTRw8MjU.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Brrrt1Cb.js";import"./Tooltip-DyXSSX-F.js";import"./index-C0Hx0yuJ.js";import"./useControlled-RMaq-pts.js";import"./Popper-Dj_XAtVq.js";import"./Button-CHpGI9QY.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BmiE0y30.js";import"./useQuery-qLmhWmxw.js";import"./QueryClientProvider-BvTCMYrF.js";import"./Link-DouBH94E.js";import"./Collapse-CS4SoJcv.js";import"./_baseUniq-BNiF46u2.js";import"./_Uint8Array-ZkOH5xaJ.js";import"./isArray-BatmeEgt.js";import"./_getTag-DL7PcpR3.js";import"./isEqual-BmZyvHNS.js";import"./merge-DrBJrbmn.js";import"./_initCloneObject-BXiQnqVl.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CaDQddmk.js";import"./inputBaseClasses-D442M768.js";import"./calculateFriendlyFileSize-198o5yg1.js";import"./CheckCircleTwoTone-BmTJI1it.js";import"./InfoTwoTone-DPmSL3RU.js";import"./useMutation-Bs_GnPAU.js";import"./dayjs.min-NAl5tlfA.js";import"./chunk-AYJ5UCUI-B1Fmi4bj.js";import"./cloneDeep-5C23vurL.js";import"./Skeleton-DsgEN2lO.js";import"./SkeletonButton-CIVdic4R.js";import"./SkeletonInlineBlock-WwVItYM2.js";import"./SkeletonTable-DSUve1AL.js";import"./times-DlX9HG50.js";import"./toInteger-BCSFDXqt.js";import"./isSymbol-CDSpVJXg.js";import"./SkeletonParagraph-Agn3W6LW.js";import"./uniqueId-Dh9-cnyV.js";import"./toString-HIaMEnNs.js";import"./CSSTransition-CEtB97c7.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-Btlco6wr.js";import"./Avatar-CeSfOjtF.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
