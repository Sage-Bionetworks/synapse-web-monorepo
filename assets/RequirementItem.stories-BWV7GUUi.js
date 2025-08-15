import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-DQf0B1nY.js";import{d as s}from"./ToastMessage-BGgcb9pE.js";import{R as n,a as t}from"./RequirementItem-DwPu2Uud.js";import{P as O}from"./Paper-DbuMeV7N.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-BEpxB6wu.js";import"./SynapseConstants-BZvqbuoI.js";import"./OrientationBanner-B37kz2yW.js";import"./index-BH0fVqdH.js";import"./index-BrHPMy4K.js";import"./iframe-qrHI0h7x.js";import"./spreadSx-CwcO6WA9.js";import"./react-C72zAT-6.js";import"./FullWidthAlert-BE613Qbw.js";import"./Alert-1njaMFSc.js";import"./createTheme-BimHb0uq.js";import"./DefaultPropsProvider-B4sMSs5c.js";import"./useSlot-DQts-esW.js";import"./useForkRef-DPev0BVR.js";import"./createSimplePaletteValueFilter-DtA1pzc_.js";import"./createSvgIcon-DuozVLQO.js";import"./Close-CWGJC7jb.js";import"./IconButton-U1OcyH7k.js";import"./useTimeout-DvUZi0R7.js";import"./ButtonBase-DbOfy-z6.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-qScjADK-.js";import"./Stack-Cdib1l_P.js";import"./extendSxProp-Dxh_u9LX.js";import"./getThemeProps-Cshv05Q5.js";import"./useTheme-C7_v5rs1.js";import"./Box--Gvn6t5i.js";import"./AlertTitle-CNf8Z2JO.js";import"./Typography-C4cWgMpl.js";import"./index-3sAcmN1l.js";import"./useTheme-BxS3S2OH.js";import"./ClickAwayListener-WtnAjSsu.js";import"./getReactElementRef-CpNJ5z4l.js";import"./index-Cy7CbgXS.js";import"./index-Ckhh3aWL.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Bz3F_Qo2.js";import"./Tooltip-Dpzta8iD.js";import"./index-CUEjAwPx.js";import"./useControlled-CPhxYaZP.js";import"./Popper-D002JOTh.js";import"./Button-hgfOZiyo.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-BP6M6Cd4.js";import"./QueryClientProvider-D06onMpx.js";import"./Link-CvxDprLk.js";import"./Collapse-Cj8gEvHg.js";import"./_baseUniq-BWVA3qID.js";import"./_Uint8Array-C3Qj-RGn.js";import"./isArray-DaAhqe6C.js";import"./_getTag-C9KNG0BL.js";import"./isEqual-f_9b43M7.js";import"./merge-CA9OcUH8.js";import"./_initCloneObject-BBLX1zeK.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DuX_F-VJ.js";import"./inputBaseClasses-CsFwKpFX.js";import"./calculateFriendlyFileSize-SOAJozYQ.js";import"./CheckCircleTwoTone-BqOhFIZl.js";import"./InfoTwoTone-ClrjaOuk.js";import"./useMutation-BSC2zSvv.js";import"./dayjs.min-_IVa7_Ho.js";import"./chunk-AYJ5UCUI-Z0yw1ngK.js";import"./cloneDeep-B4VfFNAV.js";import"./Skeleton-C1ctsk_q.js";import"./SkeletonButton-5mlu670C.js";import"./SkeletonInlineBlock-CGSOvsBE.js";import"./SkeletonTable-6DwFqjCh.js";import"./times-nok5uhzl.js";import"./toInteger-ySA-7yhI.js";import"./isSymbol-jpif6TI-.js";import"./SkeletonParagraph-Cgena1Fv.js";import"./uniqueId-DSp0b1Po.js";import"./toString-DamLtCrb.js";import"./CSSTransition-Dxmxozpj.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-BdDtFq55.js";import"./Avatar-CmOZ3I_L.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
