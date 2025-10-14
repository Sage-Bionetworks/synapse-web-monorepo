import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-DYzXP4SZ.js";import{d as s}from"./ToastMessage-BO0Met0n.js";import{R as n,a as t}from"./RequirementItem-C__qrTri.js";import{P as O}from"./Paper-Cra7tOWX.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-D3DLEnco.js";import"./SynapseConstants-CdVOt2dc.js";import"./OrientationBanner-DY4cNwXq.js";import"./index-xJTQyrwQ.js";import"./index-ijsm3mBy.js";import"./iframe-2dG-YY9-.js";import"./spreadSx-CwcO6WA9.js";import"./react-BpjFLlG7.js";import"./FullWidthAlert-B3BBpfmE.js";import"./Alert-CksGxhHq.js";import"./createTheme-BxansSaP.js";import"./DefaultPropsProvider-C0BG17d4.js";import"./useSlot-DwNJrAe8.js";import"./useForkRef-BUPBxQCC.js";import"./createSimplePaletteValueFilter-DF0-Q_sR.js";import"./createSvgIcon-Tjl1dYM0.js";import"./Close-BEpv9aVr.js";import"./IconButton-BSE-Wm4J.js";import"./useTimeout-BHJGkgoe.js";import"./ButtonBase-COXFE6tZ.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DuN8C9YO.js";import"./Stack-DkqLNuQk.js";import"./useThemeProps-Dfd8LZYq.js";import"./getThemeProps-D6jrdoYB.js";import"./useTheme-BguFC_Yf.js";import"./extendSxProp-D6bOc2yu.js";import"./Box-D11bBFwR.js";import"./AlertTitle-CUnCZtfx.js";import"./Typography-DKWA_FkP.js";import"./index-BYBjn3Mm.js";import"./useTheme-BlIhEXZO.js";import"./ClickAwayListener-CeIKyymb.js";import"./getReactElementRef-BqqLpY_U.js";import"./index-BwEXD9Sp.js";import"./index-CLoZ34tt.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Ddu7BFI0.js";import"./Tooltip-D4GNWK6u.js";import"./index-DD_DY1ge.js";import"./useControlled-fSPDUO3C.js";import"./Popper-CQCjOtHT.js";import"./Button-sd4ooRmS.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-DJmCx-dC.js";import"./QueryClientProvider-BMd9N-KC.js";import"./Link-DTbmoeb_.js";import"./Collapse-J-Fir_Qt.js";import"./_baseUniq-xOxQiqA9.js";import"./_Uint8Array-wJdmpIr7.js";import"./isArray-CTByjuZm.js";import"./_getTag-CccqWhF2.js";import"./isEqual-CL_VQgn2.js";import"./noop-DX6rZLP_.js";import"./merge-CJQkSP_u.js";import"./_initCloneObject-COJXPyDD.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DPwN_GcI.js";import"./inputBaseClasses-8L5uwA3P.js";import"./calculateFriendlyFileSize-D3lSxj6e.js";import"./CheckCircleTwoTone-DVKZgV-7.js";import"./InfoTwoTone-CAJyCA_f.js";import"./useMutation-BTNFEee6.js";import"./dayjs.min-BMe_1oX1.js";import"./chunk-AYJ5UCUI-BXNkd_hA.js";import"./cloneDeep-Cbc43DTf.js";import"./Skeleton-CxQUKy7B.js";import"./SkeletonButton-OG_8qymJ.js";import"./SkeletonInlineBlock-eCtKwkUk.js";import"./SkeletonTable-CidKEXe3.js";import"./times-DWVvU70H.js";import"./toInteger-8xUgGmXe.js";import"./isSymbol-Ce6KKZ8W.js";import"./SkeletonParagraph-Ciy1WJIp.js";import"./uniqueId-CtYkggLs.js";import"./toString-CcMvb1PY.js";import"./CSSTransition-D23XvnnK.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-lgCbX5pC.js";import"./Avatar-BPSZvlco.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
