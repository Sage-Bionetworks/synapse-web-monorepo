import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-Ma7Oe5XE.js";import{M as x}from"./MarkdownSynapse-DAUv1k7U.js";import{d as s}from"./ToastMessage-Dh75HZo-.js";import{R as n,a as t}from"./RequirementItem-B7CLA1EK.js";import{P as O}from"./Paper-8UdBM9kL.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-t2fDWYxy.js";import"./VerificationSubmission-16RBrwfH.js";import"./useFiles-DfmUZ-4E.js";import"./SynapseConstants-DBjjddIw.js";import"./OrientationBanner-VFV71Tjc.js";import"./index-BHmtFBB_.js";import"./index-C9-TIdL_.js";import"./iframe-DeZrw8cL.js";import"./spreadSx-CwcO6WA9.js";import"./react-Ck9EPeEi.js";import"./FullWidthAlert-Bmh1NRie.js";import"./Alert-EAD1eTrF.js";import"./createTheme-CE6qXHe9.js";import"./DefaultPropsProvider-mrWzkTQJ.js";import"./useSlot-DtPBphoa.js";import"./useForkRef-Cx9b2vUF.js";import"./createSimplePaletteValueFilter-Cua6TkTN.js";import"./createSvgIcon-B8DyheYB.js";import"./Close-BrwXfVJ8.js";import"./IconButton-DNzR0rYH.js";import"./useTimeout-B4nm8K8G.js";import"./ButtonBase-CL_IFWn3.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DX21bKx9.js";import"./Stack-qqZTI9Mk.js";import"./extendSxProp-DYJ4qHcb.js";import"./getThemeProps-U5h5w87F.js";import"./useTheme-CcEl__P7.js";import"./Box-c1acJzBY.js";import"./AlertTitle-DrvONvNQ.js";import"./Typography-DFKsi_Yp.js";import"./index-DoRmc9IV.js";import"./useTheme-pTqndlnn.js";import"./ClickAwayListener-Csbn-psG.js";import"./getReactElementRef-CHn9vIIS.js";import"./index-BNzjogy-.js";import"./index-BlCl8FJn.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CKjqUnz6.js";import"./Tooltip-aIej-TC0.js";import"./index-C4bFR0fr.js";import"./useControlled-CJ0jTomz.js";import"./Popper-CgflTmuC.js";import"./Button-DnYIz2mR.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-B_EIkN_W.js";import"./useQuery-B0zK9_y9.js";import"./QueryClientProvider-CrJTSCTY.js";import"./Link-dppmAxhW.js";import"./Collapse-Cj6ee3Yt.js";import"./_baseUniq-Bwu5nO20.js";import"./_Uint8Array-DJNgTM6y.js";import"./isArray-P9V5rfrS.js";import"./_getTag-B_GSssIH.js";import"./isEqual-CyfHpJRg.js";import"./merge-D2V9CcG9.js";import"./_initCloneObject-BuBhIP8E.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-qoxQnxF9.js";import"./inputBaseClasses-ktaLCHeI.js";import"./calculateFriendlyFileSize-DsdtZKta.js";import"./CheckCircleTwoTone-DCRdFQaj.js";import"./InfoTwoTone-COSNQhZA.js";import"./useMutation-igh3-1pD.js";import"./dayjs.min-bQ2v5w_u.js";import"./chunk-AYJ5UCUI-CcGUCHcD.js";import"./cloneDeep-DlSGhKsq.js";import"./Skeleton-zcL_PViR.js";import"./SkeletonButton-CTL7IIUW.js";import"./SkeletonInlineBlock-Ee0kCjj4.js";import"./SkeletonTable-Dn_f8sfL.js";import"./times-C6ns9myY.js";import"./toInteger-PCs3xOoR.js";import"./isSymbol-mR1shqCu.js";import"./SkeletonParagraph-UUVWZKz3.js";import"./uniqueId-CDHhO_Pm.js";import"./toString-DUqJ2cqP.js";import"./CSSTransition-gl8tPzPr.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-dxDJmhZ8.js";import"./Avatar-tNAfsbBW.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
