import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-Dmk4Ckus.js";import{d as s}from"./ToastMessage-B5kf2pcc.js";import{R as n,a as t}from"./RequirementItem-Dds_qGws.js";import{P as O}from"./Paper-nmCYqCUg.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-DoM6saS5.js";import"./SynapseConstants-fjcaPar4.js";import"./OrientationBanner-DXHS9Ok7.js";import"./index-Cc1jVt2S.js";import"./index-C0wX4_D5.js";import"./iframe-Dg1OjomY.js";import"./spreadSx-CwcO6WA9.js";import"./react-DljyRFug.js";import"./FullWidthAlert-12ZGik4M.js";import"./Alert-SAf-HTP7.js";import"./createTheme-XmTP9ztr.js";import"./DefaultPropsProvider-C8agOKNV.js";import"./useSlot-CMw1Guot.js";import"./useForkRef-DHDj_EBp.js";import"./createSimplePaletteValueFilter-CMeensCQ.js";import"./createSvgIcon-C1R5uYZR.js";import"./Close-DlaaWvLY.js";import"./IconButton-DNzDJyyG.js";import"./useTimeout-VgJ8KSEC.js";import"./ButtonBase-BZaAYyhz.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-izn7xOSO.js";import"./Stack-DUv6l47M.js";import"./useThemeProps-B1LQGkAl.js";import"./getThemeProps-kFzncbx6.js";import"./useTheme-Ct2y6sLT.js";import"./extendSxProp-B4wy7T2i.js";import"./Box-BD_ma7_J.js";import"./AlertTitle-COng_SQR.js";import"./Typography-z9eLrlT0.js";import"./index-BCjqeLgG.js";import"./useTheme-xbf2ZGeF.js";import"./ClickAwayListener-Csamat5p.js";import"./getReactElementRef-DKvxwlSs.js";import"./index-BrkuAfGd.js";import"./index-Bhfa3jqe.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BY41iU1Z.js";import"./Tooltip-C6Zypvy1.js";import"./index-B2R4X1D8.js";import"./useControlled-DeciPQCg.js";import"./Popper-BbH1NV83.js";import"./Button-DYN6lvaS.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-kiquRXJF.js";import"./QueryClientProvider-DDbKIYHh.js";import"./Link-C-HxI53b.js";import"./Collapse-B2sQsY1M.js";import"./_baseUniq-LxXjfER7.js";import"./_Uint8Array-BgOJGnAV.js";import"./isArray-kTGNcp_W.js";import"./_getTag-D8v9FRbF.js";import"./isEqual-B2qkdwNi.js";import"./noop-DX6rZLP_.js";import"./merge-CowR9ykA.js";import"./_initCloneObject-DMyAcL1x.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Be6GbFNo.js";import"./inputBaseClasses-BFpUsf8s.js";import"./calculateFriendlyFileSize-hiMIYe5W.js";import"./CheckCircleTwoTone-CCgVT7vA.js";import"./InfoTwoTone-Cz_RDhGO.js";import"./useMutation-CdgWCH4U.js";import"./dayjs.min-D8ND5VJ0.js";import"./chunk-AYJ5UCUI-DxxQLvEU.js";import"./cloneDeep-B1SVQaTP.js";import"./Skeleton-BUe1EjHW.js";import"./SkeletonButton-DlnglF6i.js";import"./SkeletonInlineBlock-5CAqqmxD.js";import"./SkeletonTable-welLau-Y.js";import"./times-BvGMvnLM.js";import"./toInteger-D8nVZSHb.js";import"./isSymbol-C4Dq_EPu.js";import"./SkeletonParagraph-C7V-74O4.js";import"./uniqueId-I7cM3fLo.js";import"./toString-DMDXMjr2.js";import"./CSSTransition-C-gdL7_a.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-Cf6M6zK0.js";import"./Avatar-aQfmv_Qp.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
