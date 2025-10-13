import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-BXS9wRRN.js";import{d as s}from"./ToastMessage-W-Pdwq34.js";import{R as n,a as t}from"./RequirementItem-Cgposnda.js";import{P as O}from"./Paper-Cf1kvPYs.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-BM92AjlG.js";import"./SynapseConstants-CSQZ8LdY.js";import"./OrientationBanner-B9vK_fOZ.js";import"./index-D-UvISqL.js";import"./index-Df_FdJl-.js";import"./iframe-DsTvFT6Q.js";import"./spreadSx-CwcO6WA9.js";import"./react-C6TP9ok4.js";import"./FullWidthAlert-Bu31KEHU.js";import"./Alert-BfEFHSpf.js";import"./createTheme-B4cUhGob.js";import"./DefaultPropsProvider-9yDVx9dT.js";import"./useSlot-DHoMpVG_.js";import"./useForkRef-C37ywrok.js";import"./createSimplePaletteValueFilter-CmcCRKj9.js";import"./createSvgIcon-Bx2dCIbF.js";import"./Close-DNuwum3q.js";import"./IconButton-BXTZx6ON.js";import"./useTimeout-B-uQAk7X.js";import"./ButtonBase-COtAfe0-.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-D859Rgox.js";import"./Stack-BnE5AZPR.js";import"./useThemeProps-Di9ozye9.js";import"./getThemeProps-DDS8aWDb.js";import"./useTheme-BNWJT91L.js";import"./extendSxProp-DGFMAjvY.js";import"./Box-CWKxjGZN.js";import"./AlertTitle-BrquGJFX.js";import"./Typography-DzNtFqki.js";import"./index-DvmyVfCT.js";import"./useTheme-BCgVrM8U.js";import"./ClickAwayListener-CFjnMEqm.js";import"./getReactElementRef-q6KXtwDj.js";import"./index-LtSKZm9d.js";import"./index-Bj500_V6.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CSPbf5zw.js";import"./Tooltip-CIfcREkL.js";import"./index-Bc5ECFUa.js";import"./useControlled-47FWtaLW.js";import"./Popper-DFTLUIEO.js";import"./Button-UK5ni8CN.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-BWAW2VGJ.js";import"./QueryClientProvider-OtgzlTZ3.js";import"./Link-DFZaBwQ-.js";import"./Collapse-BS71YIGZ.js";import"./_baseUniq-CmLy7hQ9.js";import"./_Uint8Array-Tgc0IKEL.js";import"./isArray-CCt3-GU-.js";import"./_getTag-DDx0ez5Y.js";import"./isEqual-BrMooGWr.js";import"./noop-DX6rZLP_.js";import"./merge-DiyJyzhC.js";import"./_initCloneObject-CwDTQz61.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BnQ6e4Q4.js";import"./inputBaseClasses-C0c-AyIl.js";import"./calculateFriendlyFileSize-CvjtSy_b.js";import"./CheckCircleTwoTone-gDseQqaM.js";import"./InfoTwoTone-DfKGI0-a.js";import"./useMutation-Busowt2v.js";import"./dayjs.min-DK0WmqxW.js";import"./chunk-AYJ5UCUI-CSRoxWwe.js";import"./cloneDeep-CNI9lROB.js";import"./Skeleton-Da4ynUFT.js";import"./SkeletonButton-B6SlV21H.js";import"./SkeletonInlineBlock-CIzVl0ZL.js";import"./SkeletonTable-B3Zj-4ZO.js";import"./times-AS42JGk1.js";import"./toInteger-TYVSzmyI.js";import"./isSymbol-BaBXEl4F.js";import"./SkeletonParagraph-CM-XT7Cq.js";import"./uniqueId-B-X-Pcad.js";import"./toString-C5D_JqWD.js";import"./CSSTransition-Bkd7AFZl.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-BP-VX-kA.js";import"./Avatar-CtbtfLHe.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
