import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-DTBqAeUj.js";import{d as s}from"./ToastMessage-br6Bgelz.js";import{R as n,a as t}from"./RequirementItem-6P_600Zs.js";import{P as O}from"./Paper-4NPAipfw.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-CwVXbZ4Q.js";import"./SynapseConstants-B8yZduIw.js";import"./OrientationBanner-C481yTHm.js";import"./index-CIzR3_nv.js";import"./index-CjvYtqpU.js";import"./iframe-CmNuBUtR.js";import"./spreadSx-CwcO6WA9.js";import"./react-wu8OeX_M.js";import"./FullWidthAlert-B_e91uE3.js";import"./Alert-DiF7BjqH.js";import"./createTheme-BM4VXEF7.js";import"./DefaultPropsProvider-BDtHF6Wn.js";import"./useSlot-0xjR5-eu.js";import"./useForkRef-D4tbPone.js";import"./createSimplePaletteValueFilter-DDSH0Dac.js";import"./createSvgIcon-CXDifqDc.js";import"./Close-DsTJrrze.js";import"./IconButton-xVMoyj-U.js";import"./useTimeout-4mSsQgfw.js";import"./ButtonBase-CjRtnrZ-.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-uqgitlHM.js";import"./Stack-CqxARfsH.js";import"./extendSxProp-BjTGpY0p.js";import"./getThemeProps-D2GKi1qB.js";import"./useTheme-DdsShxW3.js";import"./Box-Comp2lGu.js";import"./AlertTitle-B62ZZQBM.js";import"./Typography-DXVyKKZC.js";import"./index-DozLoM4X.js";import"./useTheme-wwyqa66a.js";import"./ClickAwayListener-DEZREAEY.js";import"./getReactElementRef-BgUGMaJC.js";import"./index-BvtI68fQ.js";import"./index-C5zCDDJj.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-B7vOKqny.js";import"./Tooltip-CE3Twi72.js";import"./index-B4pO1bVN.js";import"./useControlled-DWL3i0vL.js";import"./Popper-BZbuaw7Z.js";import"./Button-CpGbp6fi.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BYEtqtR3.js";import"./useQuery-B73aGslE.js";import"./QueryClientProvider-BEav2MG4.js";import"./Link-Czy36zDt.js";import"./Collapse-Cv9Th3Bg.js";import"./_baseUniq-BWxWngIF.js";import"./_Uint8Array-tj6b5Sej.js";import"./isArray-C2HehnyO.js";import"./_getTag-Cp7QeK2Q.js";import"./isEqual-BLo86LRt.js";import"./merge-WwGDVXfv.js";import"./_initCloneObject-LyroLBM8.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-ChvB7WU8.js";import"./inputBaseClasses-Bi3VPfdW.js";import"./calculateFriendlyFileSize-BSQ-A4fb.js";import"./CheckCircleTwoTone-1_pXCpeZ.js";import"./InfoTwoTone-Dmc4vDk0.js";import"./useMutation-DwUCRkQ5.js";import"./dayjs.min--_9ECAgO.js";import"./chunk-AYJ5UCUI-BPGJkqcl.js";import"./cloneDeep-CZqY96B_.js";import"./Skeleton-tTQ1Ps97.js";import"./SkeletonButton-DgqFd5m4.js";import"./SkeletonInlineBlock-DNfKUPUo.js";import"./SkeletonTable-BhG9mue_.js";import"./times-Kl9y7nkh.js";import"./toInteger-DskAfdBs.js";import"./toNumber-b-aTrSSG.js";import"./isSymbol-DOzWRPRy.js";import"./SkeletonParagraph-BLBhPEiT.js";import"./uniqueId-WKyr0zQl.js";import"./toString-C-EQ5EJ0.js";import"./CSSTransition-4ZN7DgRG.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-DiQdpFmO.js";import"./Avatar-ibSYPRcp.js";const cr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
