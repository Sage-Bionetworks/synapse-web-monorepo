import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-LsoizFHH.js";import{d as s}from"./ToastMessage-V4KANH19.js";import{R as n,a as t}from"./RequirementItem-D0U7NVx-.js";import{P as O}from"./Paper-fh_aPiaL.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-LRfWBx7T.js";import"./SynapseConstants-ChWUMcnS.js";import"./OrientationBanner-s6eTZzEt.js";import"./index-BYyc2JrK.js";import"./index-BlLk-Cpc.js";import"./iframe-DJCqPViV.js";import"./spreadSx-CwcO6WA9.js";import"./react-D5cejL4U.js";import"./FullWidthAlert-D4jTY0fX.js";import"./Alert-B7NYi1K_.js";import"./createTheme-BoMy76Wd.js";import"./DefaultPropsProvider-DvBkxC4C.js";import"./useSlot-CpdUPpqd.js";import"./useForkRef-CGY_Jpnx.js";import"./createSimplePaletteValueFilter-rT-XZ6YK.js";import"./createSvgIcon-C2KnO3b1.js";import"./Close-BVMYX_2b.js";import"./IconButton-C7cq6q9W.js";import"./useTimeout-C_n07iHc.js";import"./ButtonBase-BNSbuHrY.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CYiXRZxW.js";import"./Stack-U_7UVz7x.js";import"./extendSxProp-CBVJ6YUV.js";import"./getThemeProps-MT1NWnOz.js";import"./useTheme-D2m2JSWe.js";import"./Box-DQcvacV7.js";import"./AlertTitle-Dl16SzKZ.js";import"./Typography-BbClb5JZ.js";import"./index-Dl9oXoY9.js";import"./useTheme-DDFbBi03.js";import"./ClickAwayListener-BgS_jDtg.js";import"./getReactElementRef-WVFk0XF3.js";import"./index-cmVBkNr4.js";import"./index-C-9IeJIn.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-tZoeOsj2.js";import"./Tooltip-Dl_Yp1xA.js";import"./index-BCiEuy_k.js";import"./useControlled-ByhA5hml.js";import"./Popper-BZ3v4Tpm.js";import"./Button-CUHfRZHg.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-CxpB_4ZD.js";import"./QueryClientProvider-BUsydTN1.js";import"./Link-BgcZchnZ.js";import"./Collapse-BxntDTnK.js";import"./_baseUniq-DMKGI_1z.js";import"./_Uint8Array-_eNHEINi.js";import"./isArray-7RDBt840.js";import"./_getTag-DFujFdhf.js";import"./isEqual-DoNViL0q.js";import"./merge-DnwzsJk3.js";import"./_initCloneObject-BEyCVTwE.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CD2qHBnv.js";import"./inputBaseClasses-DEpJxZAI.js";import"./calculateFriendlyFileSize-BID7fkoL.js";import"./CheckCircleTwoTone-DcxIrYc5.js";import"./InfoTwoTone-B4Gj6T04.js";import"./useMutation-CZJJ3y2Z.js";import"./dayjs.min-CGHnQ1ES.js";import"./chunk-AYJ5UCUI-18XW2Mua.js";import"./cloneDeep-D14gkEBB.js";import"./Skeleton-DTvEDHoY.js";import"./SkeletonButton-BVS9c4Ql.js";import"./SkeletonInlineBlock-rgq47Wzo.js";import"./SkeletonTable-BwLeTFNN.js";import"./times-BxG8IAIc.js";import"./toInteger-BwymIA8y.js";import"./isSymbol-DO1i8DpO.js";import"./SkeletonParagraph-EtAQuzh0.js";import"./uniqueId-Cpiue_S-.js";import"./toString-O92Pob2x.js";import"./CSSTransition-DcRMlK8w.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-Cowr79gX.js";import"./Avatar-Bp9PXnmE.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
