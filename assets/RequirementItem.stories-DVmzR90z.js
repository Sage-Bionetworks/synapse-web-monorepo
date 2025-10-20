import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-Di_SjFv0.js";import{d as s}from"./ToastMessage-DJiTHqjA.js";import{R as n,a as t}from"./RequirementItem-DtHM4IUl.js";import{P as O}from"./Paper-irBPXwWY.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-DaAs4C7F.js";import"./SynapseConstants-Z3CRsZYt.js";import"./OrientationBanner-CC_XtpV_.js";import"./index-Ff6_4CvW.js";import"./index-dl3BENNE.js";import"./iframe-YzSniT58.js";import"./spreadSx-CwcO6WA9.js";import"./react-rlO6wCGu.js";import"./FullWidthAlert-CecE_a1y.js";import"./Alert-DgISjGix.js";import"./createTheme-BgxtNNjv.js";import"./DefaultPropsProvider-BY_0FA5C.js";import"./useSlot-CHgzIXs0.js";import"./useForkRef-B_TXRjop.js";import"./createSimplePaletteValueFilter-DEkc7xSs.js";import"./createSvgIcon-6arnPa6T.js";import"./Close-B2mQaGHe.js";import"./IconButton-e0_pjJVh.js";import"./useTimeout-DEPt3vzo.js";import"./ButtonBase-Ch46_Px2.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CFPitjFl.js";import"./Stack-CzsLlE0q.js";import"./useThemeProps-DY0zHm8Z.js";import"./getThemeProps-DFkkYRku.js";import"./useTheme-9zFXKC6n.js";import"./extendSxProp-BdGy26Iu.js";import"./Box-CinyAz2a.js";import"./AlertTitle-DIoVMWOY.js";import"./Typography-7Hx3-lad.js";import"./index-DrWYxZ6u.js";import"./useTheme-gfAm54P6.js";import"./ClickAwayListener-BXFkIWGN.js";import"./getReactElementRef-OY13IImd.js";import"./index-2OM9t87W.js";import"./index-m5koAVBQ.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BetBJGpU.js";import"./Tooltip-CVuQHWBZ.js";import"./index-C8O0EzsL.js";import"./useControlled-CILy8dEh.js";import"./Popper-Bf2T5vzu.js";import"./Button-CaS34oa5.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-CB35_T_J.js";import"./QueryClientProvider-kY5BcVat.js";import"./Link-X6fiBXQM.js";import"./Collapse-3grCuIF0.js";import"./_baseUniq-XoRpnQmG.js";import"./_Uint8Array-Bp2iOdm1.js";import"./isArray-CnbFH_tG.js";import"./_getTag-CXHbED9t.js";import"./isEqual-D0qOQWhk.js";import"./noop-DX6rZLP_.js";import"./merge-NKPcWwcN.js";import"./_initCloneObject-CmAZK0SY.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DasqS6yT.js";import"./inputBaseClasses-tyR2w6fO.js";import"./calculateFriendlyFileSize-DLwkHUF4.js";import"./CheckCircleTwoTone-B3hZpcoo.js";import"./InfoTwoTone-C0-NVkTV.js";import"./useMutation-C3rNwsvu.js";import"./dayjs.min-Bf5GrB6_.js";import"./chunk-AYJ5UCUI-DrWBj7YT.js";import"./cloneDeep-CMYyigHX.js";import"./Skeleton-CNwnEJ1Y.js";import"./SkeletonButton-B-iHCEmp.js";import"./SkeletonInlineBlock-Cc3of4cA.js";import"./SkeletonTable-DDzbpDFR.js";import"./times-B_VVKwyp.js";import"./toInteger-B9w54glN.js";import"./isSymbol-DMzg5LrJ.js";import"./SkeletonParagraph-l_CdCVgh.js";import"./uniqueId-3nNiaUVm.js";import"./toString-DpPFZSug.js";import"./CSSTransition-j42vbj7z.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-_xdRqCA9.js";import"./Avatar-Ca6boSQi.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
