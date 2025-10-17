import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-B-ppL6oM.js";import{d as s}from"./ToastMessage-a5OpprO1.js";import{R as n,a as t}from"./RequirementItem-CXSIr2nn.js";import{P as O}from"./Paper-DDtB3wBD.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-KjJsMF-p.js";import"./SynapseConstants-DLx2cP4k.js";import"./OrientationBanner-Jb_O7Vhq.js";import"./index-Is5_m3kz.js";import"./index-CgGWB-jV.js";import"./iframe-BUMkfsLU.js";import"./spreadSx-CwcO6WA9.js";import"./react-N-ryfbTF.js";import"./FullWidthAlert-Cbe1wvZw.js";import"./Alert-CeHdnxTK.js";import"./createTheme-CzqifIS2.js";import"./DefaultPropsProvider-ChnhiV7X.js";import"./useSlot-DJp30WUK.js";import"./useForkRef-Cg7exXTP.js";import"./createSimplePaletteValueFilter-DoKXWXAR.js";import"./createSvgIcon-CJyY65Ao.js";import"./Close-Ct4BeBDP.js";import"./IconButton-CiTuzBw7.js";import"./useTimeout-BaoekB3P.js";import"./ButtonBase-CFAyCW0o.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DJKpL5dd.js";import"./Stack-DbagSvH3.js";import"./useThemeProps-C1npFjKE.js";import"./getThemeProps-DaX0KFEn.js";import"./useTheme-BN-TwAsg.js";import"./extendSxProp-JVQTI-CD.js";import"./Box-BZ1lOftb.js";import"./AlertTitle-Cb7s4coE.js";import"./Typography-B9kkfmck.js";import"./index-q_vgnk4f.js";import"./useTheme-7NPehFBl.js";import"./ClickAwayListener-DRuGIOht.js";import"./getReactElementRef-CPho3O8d.js";import"./index-D2jwleMP.js";import"./index-BigBH4wQ.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BICR705K.js";import"./Tooltip-CuMkmQ11.js";import"./index-JClH4D6U.js";import"./useControlled-BvzDdtG-.js";import"./Popper-xa5ue3Yw.js";import"./Button-DEyRWKz6.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-NiW2zyRg.js";import"./QueryClientProvider-DW-f02xS.js";import"./Link-oef7RIge.js";import"./Collapse-D0tlUayk.js";import"./_baseUniq-Dytxu0zx.js";import"./_Uint8Array-CN0Ng_Ch.js";import"./isArray-C9reyBA0.js";import"./_getTag-B2uaWzEd.js";import"./isEqual-C-hv45PE.js";import"./noop-DX6rZLP_.js";import"./merge-BNcXC3-S.js";import"./_initCloneObject-BEsO6nF6.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CslKpPQa.js";import"./inputBaseClasses-DC4K9515.js";import"./calculateFriendlyFileSize-Hzj1mxFN.js";import"./CheckCircleTwoTone-BhkaRfHQ.js";import"./InfoTwoTone-D3TwCEy5.js";import"./useMutation-CCNgT-2E.js";import"./dayjs.min-BQpchTlf.js";import"./chunk-AYJ5UCUI-D6YYAcr5.js";import"./cloneDeep-KI5YljVK.js";import"./Skeleton-HDLzVwIb.js";import"./SkeletonButton-DXoTvKx8.js";import"./SkeletonInlineBlock-DTj_dYaw.js";import"./SkeletonTable-DqoNgDeh.js";import"./times-CxvG_X9r.js";import"./toInteger-B15ZtKM0.js";import"./isSymbol-DnFPJaTK.js";import"./SkeletonParagraph-CasqnWrn.js";import"./uniqueId-BWhkK37b.js";import"./toString-CQg49ten.js";import"./CSSTransition-Br4l1NX8.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-DMomm-z5.js";import"./Avatar-CjFlnT9c.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
