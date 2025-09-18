import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-qFXz9IPW.js";import{d as s}from"./ToastMessage-fbSPlc4R.js";import{R as n,a as t}from"./RequirementItem-DExQRCNm.js";import{P as O}from"./Paper-CWTb8To6.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-mTKuC2yr.js";import"./SynapseConstants-C6sTWsVv.js";import"./OrientationBanner-BYHu2Ktw.js";import"./index-BWLoVAyd.js";import"./index-CeDLyl9l.js";import"./iframe-BSZkMUXl.js";import"./spreadSx-CwcO6WA9.js";import"./react-BqDpjQ7r.js";import"./FullWidthAlert-DOe5UBN4.js";import"./Alert-CrJqm9aK.js";import"./createTheme-D5ho8bLN.js";import"./DefaultPropsProvider-9tco0o_j.js";import"./useSlot-DECbMb1e.js";import"./useForkRef-CyRsSJmZ.js";import"./createSimplePaletteValueFilter-C8A1b3wP.js";import"./createSvgIcon-DA82QREK.js";import"./Close-D60m63-8.js";import"./IconButton-Bq_AHk6p.js";import"./useTimeout-B7GR-Evu.js";import"./ButtonBase-C059MY5T.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-C-J2HwhF.js";import"./Stack-BRnrbFjh.js";import"./extendSxProp-DbbvJvSv.js";import"./getThemeProps-Cdr16aLU.js";import"./useTheme-TiDWFKS5.js";import"./Box-VTcCPpeM.js";import"./AlertTitle-CIx9ogsl.js";import"./Typography-CxzrTbGc.js";import"./index-CmTl4AKZ.js";import"./useTheme-BlbhpKS0.js";import"./ClickAwayListener-DaStbp1P.js";import"./getReactElementRef-BZmorcFu.js";import"./index-BDH-fVtR.js";import"./index-C4x1OYBd.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-pFpWI2g5.js";import"./Tooltip-RDwYirt5.js";import"./index-CdMMjrZE.js";import"./useControlled-OMQDlMeu.js";import"./Popper-CsrHmFop.js";import"./Button-mm7yYrVg.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-DvhLvv6Z.js";import"./QueryClientProvider-OOeHWQdN.js";import"./Link-BRbfQpGl.js";import"./Collapse-BBuA1S7b.js";import"./_baseUniq-CfQXy7y5.js";import"./_Uint8Array-BZa94JeL.js";import"./isArray-Bc1EE5Zd.js";import"./_getTag-DXOE1H10.js";import"./isEqual-Gu5h_3XJ.js";import"./merge-BraDPTtN.js";import"./_initCloneObject-C6fm1qu1.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DyqfKaPo.js";import"./inputBaseClasses-DRF5GQ6i.js";import"./calculateFriendlyFileSize-CZ7NYNbR.js";import"./CheckCircleTwoTone-DA2k4Zpo.js";import"./InfoTwoTone-DAjJJCar.js";import"./useMutation-DnMoiO85.js";import"./dayjs.min-DooOLoqQ.js";import"./chunk-AYJ5UCUI-CpC21ICV.js";import"./cloneDeep-DqrAPpyN.js";import"./Skeleton-CFce4gLg.js";import"./SkeletonButton-DSr-NEYn.js";import"./SkeletonInlineBlock-DK-aGnf-.js";import"./SkeletonTable-CQi5ZCrI.js";import"./times-B6QDxiS3.js";import"./toInteger-CzHUzRYK.js";import"./isSymbol-CmvVe0i_.js";import"./SkeletonParagraph-C_p6Jv4y.js";import"./uniqueId-BW-c01IJ.js";import"./toString-Beymlb6Y.js";import"./CSSTransition-B8A-PrMr.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-LvZLzluZ.js";import"./Avatar-D_zKesoS.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
