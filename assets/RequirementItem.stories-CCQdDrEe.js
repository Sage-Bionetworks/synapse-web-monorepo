import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-DUZJVcQU.js";import{d as s}from"./ToastMessage-BBulqoWG.js";import{R as n,a as t}from"./RequirementItem-D8j3iAOX.js";import{P as O}from"./Paper-COGDEYw8.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-t9v35U2i.js";import"./SynapseConstants-CcfR0DIk.js";import"./OrientationBanner-B-04YSMJ.js";import"./index-CtDKKa0U.js";import"./index-1HXtfYom.js";import"./iframe-BdjG-Zgk.js";import"./spreadSx-CwcO6WA9.js";import"./react-ClXGUsLa.js";import"./FullWidthAlert-KzKweQ9t.js";import"./Alert-bNm4mLGx.js";import"./createTheme-ciMni0qa.js";import"./DefaultPropsProvider-D_s83V3k.js";import"./useSlot-9UGUOyqF.js";import"./useForkRef-Cezz-HIx.js";import"./createSimplePaletteValueFilter-CkzcpCVo.js";import"./createSvgIcon-vewk6_f2.js";import"./Close-D7UnGgko.js";import"./IconButton-Ci7VaVnc.js";import"./useTimeout-BdQOCLhC.js";import"./ButtonBase-CF-pjlYU.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DB8doLIA.js";import"./Stack-Ax3sx8_g.js";import"./extendSxProp-DxZMoEIV.js";import"./getThemeProps--ESrKTIJ.js";import"./useTheme-MSQ1_xG-.js";import"./Box-De_GBZN2.js";import"./AlertTitle-CmYIGw7T.js";import"./Typography-Cng5kB_f.js";import"./index-DD_KlTMz.js";import"./useTheme-D4B7rRhu.js";import"./ClickAwayListener-BeRTEART.js";import"./getReactElementRef-IRVIlyva.js";import"./index-BgE1_T6z.js";import"./index-D7nbxaq_.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-C8SY8gNO.js";import"./Tooltip-OmIUu3rZ.js";import"./index-CLtaDG6d.js";import"./useControlled-CGaThIIN.js";import"./Popper-BuSknCam.js";import"./Button-DAEG6DBg.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-Bb_M0IAQ.js";import"./QueryClientProvider-i5wMljVB.js";import"./Link-D4lP-5yK.js";import"./Collapse-d51UqjZ9.js";import"./_baseUniq-CSvM0ryX.js";import"./_Uint8Array-D4UkXCM5.js";import"./isArray-CeK0UB0C.js";import"./_getTag-CbDSuN-L.js";import"./isEqual-46N-DEgD.js";import"./merge-Dc2gr-KW.js";import"./_initCloneObject-BIzIx0tv.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Bc_RiEkF.js";import"./inputBaseClasses-UPMTAR_W.js";import"./calculateFriendlyFileSize-Bvdvbu0N.js";import"./CheckCircleTwoTone-kRLCQGNt.js";import"./InfoTwoTone-Bs3-yMB0.js";import"./useMutation-DSULcukd.js";import"./dayjs.min-B7WoX0WU.js";import"./chunk-AYJ5UCUI-Cdcs88LW.js";import"./cloneDeep-BcxmJbMi.js";import"./Skeleton-DeRguUhs.js";import"./SkeletonButton-Dl6K5L0X.js";import"./SkeletonInlineBlock-y81hs7XG.js";import"./SkeletonTable-CxnFy7RP.js";import"./times-yXSO7mCc.js";import"./toInteger-CnZynjVs.js";import"./isSymbol-Cj-57wd3.js";import"./SkeletonParagraph-d6baLCQZ.js";import"./uniqueId-Cn3Q50Jo.js";import"./toString-CeoNhWM5.js";import"./CSSTransition-DUtg_rjX.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-52YJSrPj.js";import"./Avatar-BQ0x6vfG.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
