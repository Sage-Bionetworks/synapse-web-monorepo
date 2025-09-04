import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-BjsSPAW9.js";import{M as x}from"./MarkdownSynapse-C6bdbFe8.js";import{d as s}from"./ToastMessage-D82Tjfjg.js";import{R as n,a as t}from"./RequirementItem-DOfRDt1E.js";import{P as O}from"./Paper-BVxUU9_K.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BgkszYEk.js";import"./VerificationSubmission-D0sL2gwz.js";import"./useFiles-KQZnDEqY.js";import"./SynapseConstants-E9b7EaUq.js";import"./OrientationBanner-CmbPS0a4.js";import"./index-RZq23un7.js";import"./index-CzGzXEn8.js";import"./iframe-uFVp_yWY.js";import"./spreadSx-CwcO6WA9.js";import"./react-CbvsEyPG.js";import"./FullWidthAlert-D1yw4iHk.js";import"./Alert-CNLtvy8P.js";import"./createTheme-k23OqXGa.js";import"./DefaultPropsProvider-DIhp9cRI.js";import"./useSlot-C-gtFsMB.js";import"./useForkRef-BSQlPluY.js";import"./createSimplePaletteValueFilter-ByhsrVNu.js";import"./createSvgIcon-BMaNoRgk.js";import"./Close-D_tYQfNe.js";import"./IconButton-C9kv8evX.js";import"./useTimeout-Bco06NxJ.js";import"./ButtonBase--LE7YHRM.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-C1rPjsSq.js";import"./Stack-BdenFWgB.js";import"./extendSxProp-BQjDsJY_.js";import"./getThemeProps-BlF0lh8z.js";import"./useTheme-BdRzPGfO.js";import"./Box-B-VzN5Jx.js";import"./AlertTitle-B9QtK9uS.js";import"./Typography-C2XHzVQE.js";import"./index-CAod7njC.js";import"./useTheme-m-jJYqTk.js";import"./ClickAwayListener-Du3ELzpP.js";import"./getReactElementRef-Dgr12Jgk.js";import"./index-B21--ivY.js";import"./index-D6SZASGo.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-gVpppe5W.js";import"./Tooltip-BQoBuipX.js";import"./index-sNVsSmo5.js";import"./useControlled-3AOcwQZd.js";import"./Popper-DFhQZQac.js";import"./Button-Bzn_cVpu.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bt2r5KGg.js";import"./useQuery-DF84rRyD.js";import"./QueryClientProvider-csjxr0Oq.js";import"./Link-VKSHRpIP.js";import"./Collapse-B3cTWS02.js";import"./_baseUniq-Fd2G2IPR.js";import"./_Uint8Array-LlKGp4K5.js";import"./isArray-ChG02qwo.js";import"./_getTag-cnLzI9NN.js";import"./isEqual-yp226Bbx.js";import"./merge-Y_2GYteb.js";import"./_initCloneObject-BpCV3dag.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DaG8l8BS.js";import"./inputBaseClasses-DKgm0JXr.js";import"./calculateFriendlyFileSize-HPCnRThz.js";import"./CheckCircleTwoTone-RDTFbucz.js";import"./InfoTwoTone-BPpuRQC9.js";import"./useMutation-BXU6_2Hh.js";import"./dayjs.min-Cml6m9_C.js";import"./chunk-AYJ5UCUI-CA4qBvwQ.js";import"./cloneDeep-mhbB0HAm.js";import"./Skeleton-CJd0uABn.js";import"./SkeletonButton-YTPN-fbM.js";import"./SkeletonInlineBlock-CCDx8nPO.js";import"./SkeletonTable-BjLnI14k.js";import"./times-LZPTVfy5.js";import"./toInteger-BiVtqSir.js";import"./isSymbol-nj6BaCVk.js";import"./SkeletonParagraph-D-KYwRg8.js";import"./uniqueId-WBWHFwi-.js";import"./toString-eb50UqWN.js";import"./CSSTransition--gu3_FGo.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-BvmOwyPe.js";import"./Avatar-RAOpvT51.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
