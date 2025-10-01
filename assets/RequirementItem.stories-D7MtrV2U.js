import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-6iO57Q-W.js";import{d as s}from"./ToastMessage-B8RjKaP2.js";import{R as n,a as t}from"./RequirementItem-F5mfmSq2.js";import{P as O}from"./Paper-bVT9BLiU.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-DBEctmab.js";import"./SynapseConstants-CbAC6j7A.js";import"./OrientationBanner-DpVC70dt.js";import"./index-Ct3r44PU.js";import"./index-BoC9mbPI.js";import"./iframe-D_Fqsfq4.js";import"./spreadSx-CwcO6WA9.js";import"./react-BH467_GQ.js";import"./FullWidthAlert-Bj9eHiJK.js";import"./Alert-Ds3NZtv3.js";import"./createTheme-DKmQ0T8u.js";import"./DefaultPropsProvider-DX1Tm6hX.js";import"./useSlot-DHgN7HRG.js";import"./useForkRef-DuJEVWZk.js";import"./createSimplePaletteValueFilter-C5zma5o1.js";import"./createSvgIcon-D0lTdNMg.js";import"./Close-C6pR0wvq.js";import"./IconButton-jj7u6pzf.js";import"./useTimeout-D2L2hKd5.js";import"./ButtonBase-CVi0DzxW.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CkE3_q69.js";import"./Stack-86eFiKCQ.js";import"./extendSxProp-CsGDdDwy.js";import"./getThemeProps-DawfSU79.js";import"./useTheme-BCF8IGAN.js";import"./Box-F0f29abT.js";import"./AlertTitle-CAoDvZac.js";import"./Typography-Ch2gxwNH.js";import"./index-BQwSpiiQ.js";import"./useTheme-DOeDq_FU.js";import"./ClickAwayListener-gJuMmyJa.js";import"./getReactElementRef-Bemv---L.js";import"./index-BNyjnn7z.js";import"./index-CIfKdjTQ.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DW5gViin.js";import"./Tooltip-B8qmX082.js";import"./index-LLHf2Rll.js";import"./useControlled-Fn_6fmgT.js";import"./Popper-D90A6WnX.js";import"./Button-Dvv07PAX.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-B9gAQeEx.js";import"./QueryClientProvider-D1-MD6zl.js";import"./Link-CeAlzF0F.js";import"./Collapse-BPGnxPXh.js";import"./_baseUniq-CoHdZ8H5.js";import"./_Uint8Array-I8Q0tngj.js";import"./isArray-DrXY-ag7.js";import"./_getTag-CnqFMyCR.js";import"./isEqual-OqqYJb0M.js";import"./merge-DV3Kq0zA.js";import"./_initCloneObject-CmSiAr5t.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DC6uyZ5B.js";import"./inputBaseClasses-CZ5eTaNL.js";import"./calculateFriendlyFileSize-C67i4Vi9.js";import"./CheckCircleTwoTone-DBrdLgIO.js";import"./InfoTwoTone-CsFI_uty.js";import"./useMutation-C76vb5A5.js";import"./dayjs.min-BAmezIeJ.js";import"./chunk-AYJ5UCUI-zMqkVHKR.js";import"./cloneDeep-DqSuasmx.js";import"./Skeleton-EPd-3t_-.js";import"./SkeletonButton-BUBbV4JZ.js";import"./SkeletonInlineBlock-CJp5nn7M.js";import"./SkeletonTable-CXldc8KD.js";import"./times-BaW9nck_.js";import"./toInteger-DFei6qGl.js";import"./isSymbol-DiwKEYKx.js";import"./SkeletonParagraph-DcTnO7rN.js";import"./uniqueId-3_UfNhdF.js";import"./toString-W3Ng2Dl1.js";import"./CSSTransition-BsVmqytb.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-BytElvXZ.js";import"./Avatar-DMq37U8N.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
