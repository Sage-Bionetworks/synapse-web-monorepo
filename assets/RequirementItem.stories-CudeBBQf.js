import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-CwxIkFCl.js";import{d as s}from"./ToastMessage-gBUCU2C8.js";import{R as n,a as t}from"./RequirementItem-B6kB8rW_.js";import{P as O}from"./Paper-CIe6YCK_.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-DM8ODnE1.js";import"./SynapseConstants-BhK8041S.js";import"./OrientationBanner-CZLIqqQW.js";import"./index-CXGD1nhD.js";import"./index-BloLEAy1.js";import"./iframe-CKfgUuPM.js";import"./spreadSx-CwcO6WA9.js";import"./react-BruRYVnC.js";import"./FullWidthAlert-PH21VpMl.js";import"./Alert-CVuydjvy.js";import"./createTheme-CZav1_Gb.js";import"./DefaultPropsProvider-Cc2WXfIy.js";import"./useSlot-7ZCLd36S.js";import"./useForkRef-Cb6JBq-d.js";import"./createSimplePaletteValueFilter-eby9pYbG.js";import"./createSvgIcon-pEoAHn1W.js";import"./Close-vzj9hjx-.js";import"./IconButton-DcP9VhRe.js";import"./useTimeout-sp5LbUOC.js";import"./ButtonBase-i9yFzP5m.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BDbmFF2h.js";import"./Stack-S_1S8qQR.js";import"./extendSxProp-C1UJW0LD.js";import"./getThemeProps-y8DddFS4.js";import"./useTheme-sze_bRIR.js";import"./Box-B2NAFohM.js";import"./AlertTitle-J1r0sIO1.js";import"./Typography-DAbfgqiK.js";import"./index-BU6WjtVn.js";import"./useTheme-BB7mkDQM.js";import"./ClickAwayListener-xpLIiVXr.js";import"./getReactElementRef-91ouRfnc.js";import"./index-CVk8f9Z0.js";import"./index-KlmJpNBV.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Btkl0dwb.js";import"./Tooltip-LLJF2Sui.js";import"./index-CaphlovL.js";import"./useControlled-eGHYQS1z.js";import"./Popper-CCeV26oI.js";import"./Button-CMHi5O9T.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-A2nSLqYV.js";import"./QueryClientProvider-B-jv1tS7.js";import"./Link-t6I2sdQ7.js";import"./Collapse-DN8doD0U.js";import"./_baseUniq-BVIKsDod.js";import"./_Uint8Array-DaYXT6X2.js";import"./isArray-C0axBQbV.js";import"./_getTag-BL3im_fO.js";import"./isEqual-BS3sRW2T.js";import"./merge-B5cZnhNH.js";import"./_initCloneObject-IUGla6cP.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BOoRDzga.js";import"./inputBaseClasses-XK2vZhF1.js";import"./calculateFriendlyFileSize-Cm0JtIBR.js";import"./CheckCircleTwoTone-DrxZDCjx.js";import"./InfoTwoTone-DirFePmA.js";import"./useMutation-imcDv-vJ.js";import"./dayjs.min-BQ6mRLia.js";import"./chunk-AYJ5UCUI-CjQA8okQ.js";import"./cloneDeep-CaO4d-Vx.js";import"./Skeleton-DJX65kDG.js";import"./SkeletonButton-C4L_FMdR.js";import"./SkeletonInlineBlock-D2w-ccA5.js";import"./SkeletonTable-DPKa3L2H.js";import"./times-DokJBrpe.js";import"./toInteger-OQRcS22X.js";import"./isSymbol-CLxX1gXb.js";import"./SkeletonParagraph-YYuPxs89.js";import"./uniqueId-fLo1fJUi.js";import"./toString-DVQmHkRT.js";import"./CSSTransition-DkPV5JJg.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-BrEAc0bp.js";import"./Avatar-BmcexXXT.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
