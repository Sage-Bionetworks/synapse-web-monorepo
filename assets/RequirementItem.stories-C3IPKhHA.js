import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-BjsSPAW9.js";import{M as x}from"./MarkdownSynapse-BdOWqOtn.js";import{d as s}from"./ToastMessage-BEo85oeb.js";import{R as n,a as t}from"./RequirementItem-Cp40au50.js";import{P as O}from"./Paper-U0cK4HBP.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BgkszYEk.js";import"./VerificationSubmission-D0sL2gwz.js";import"./useFiles-B1qLIkzS.js";import"./SynapseConstants-BY0D-OP_.js";import"./OrientationBanner-Cng4AXI7.js";import"./index-C-tNTDG3.js";import"./index-DqdBbDO8.js";import"./iframe-Bscbx4yJ.js";import"./spreadSx-CwcO6WA9.js";import"./react-CurQ8RHm.js";import"./FullWidthAlert-CO4KYYf2.js";import"./Alert-BHPQbSFU.js";import"./createTheme-B_Ol_SGM.js";import"./DefaultPropsProvider-NLw5xhj0.js";import"./useSlot-BXDp-GLk.js";import"./useForkRef-DOKoFcdj.js";import"./createSimplePaletteValueFilter-IPuPUECy.js";import"./createSvgIcon-DDgh6Xid.js";import"./Close-CZRhNBSW.js";import"./IconButton-CUYRsHcj.js";import"./useTimeout-d-KGj_IM.js";import"./ButtonBase-DOP0xNZr.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-ueQLis1i.js";import"./Stack-kCm0vDNS.js";import"./extendSxProp-BKGAgVYg.js";import"./getThemeProps-DV1Unc6F.js";import"./useTheme-C7guiOJZ.js";import"./Box-BM9usSYA.js";import"./AlertTitle-DnXLKxO4.js";import"./Typography-BCZ0WOI8.js";import"./index-OhczQznD.js";import"./useTheme-CYJMJKLP.js";import"./ClickAwayListener-DmRnLi5_.js";import"./getReactElementRef-BxWWKsOF.js";import"./index-i7tYzgne.js";import"./index-CQyiV8a0.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CM_jMmlK.js";import"./Tooltip-BJ3NsGkm.js";import"./index-B8FA-M0N.js";import"./useControlled-BhMBs8Uu.js";import"./Popper-GFYTG-1I.js";import"./Button-eHv0vqs7.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bt2r5KGg.js";import"./useQuery-QtQ0oXLq.js";import"./QueryClientProvider-Dh2enzOq.js";import"./Link-DOHlnlBk.js";import"./Collapse-BHNRRWil.js";import"./_baseUniq-BIbvDF98.js";import"./_Uint8Array-BH4_uO8n.js";import"./isArray-CsrBVXxZ.js";import"./_getTag-zxu8Qdc7.js";import"./isEqual-FLq9Pc_X.js";import"./merge-Dwa05pYk.js";import"./_initCloneObject-ntAgbFOg.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-D-6_yJFg.js";import"./inputBaseClasses-DDS4gDmL.js";import"./calculateFriendlyFileSize-IUUKm2Ca.js";import"./CheckCircleTwoTone-BXAr9Xv6.js";import"./InfoTwoTone-Cj21ugug.js";import"./useMutation-5Y6tQ73r.js";import"./dayjs.min-Mo35SBAh.js";import"./chunk-AYJ5UCUI-CYhRgAbg.js";import"./cloneDeep-BpXQur1c.js";import"./Skeleton-DBOrl0In.js";import"./SkeletonButton-BDpRc2jn.js";import"./SkeletonInlineBlock-BD8MFII2.js";import"./SkeletonTable-MEylhMBG.js";import"./times-CtaqNhXn.js";import"./toInteger-B-PDAa_Z.js";import"./isSymbol-Dd0ybAOG.js";import"./SkeletonParagraph-Pt0mRQ28.js";import"./uniqueId-D-QSU24K.js";import"./toString-4oBISV9q.js";import"./CSSTransition-C0RVYwYv.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-BuvTvRa3.js";import"./Avatar-Cij9KiNp.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
