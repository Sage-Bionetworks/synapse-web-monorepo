import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DsgP0sd9.js";import{M as x}from"./MarkdownSynapse-Df30U1Hn.js";import{d as s}from"./ToastMessage-BV3snPHA.js";import{R as n,a as t}from"./RequirementItem-Bt29b8dA.js";import{P as O}from"./Paper-cGemMgWu.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-CfZD9Mvn.js";import"./VerificationSubmission-CTjJb3hu.js";import"./useFiles-Bdk-rDlY.js";import"./SynapseConstants-CPxMpVHW.js";import"./OrientationBanner-C06D94Hm.js";import"./index-B3ZoRi4-.js";import"./index-BFe7OOCO.js";import"./iframe-Bha8qMdA.js";import"./spreadSx-CwcO6WA9.js";import"./react-D4DcjIMi.js";import"./FullWidthAlert-DrhjjluB.js";import"./Alert-CS4qrGXV.js";import"./createTheme-r53sen1H.js";import"./DefaultPropsProvider-DhKH4jS5.js";import"./useSlot-BjGwbouw.js";import"./useForkRef-C3S72d_h.js";import"./createSimplePaletteValueFilter-BKD40Yni.js";import"./createSvgIcon-BlYLmz2K.js";import"./Close-BIGKj7ED.js";import"./IconButton-RLYr2FEe.js";import"./useTimeout-BjZ1pB1q.js";import"./ButtonBase-BTDiO5jL.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-tBTi4oIf.js";import"./Stack-CZIpFnrG.js";import"./extendSxProp-BYVH58vt.js";import"./getThemeProps-ugVUIFn4.js";import"./useTheme-BVgbn6l0.js";import"./Box-CteZFSuz.js";import"./AlertTitle-tYv3ugNo.js";import"./Typography-BvT1XRjO.js";import"./index-DYSwa5Xm.js";import"./useTheme-dw00mKTl.js";import"./ClickAwayListener-DFw4-2za.js";import"./getReactElementRef-CrfOFAx4.js";import"./index-Bl_SermX.js";import"./index-CR-e9Su5.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DuTgCd74.js";import"./Tooltip-Dx6Egvgv.js";import"./index-CMkzAbFp.js";import"./useControlled-D0iW-7vO.js";import"./Popper-BO3NETWT.js";import"./Button-C0QtNNNQ.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-B8-nnzJN.js";import"./useQuery-CHHYNMj4.js";import"./QueryClientProvider-DRK6s_Dv.js";import"./Link-DY_VTRxM.js";import"./Collapse-DKZz63NR.js";import"./_baseUniq-DXFjNF0a.js";import"./_Uint8Array-BmRAF-l6.js";import"./isArray-Bq1Bv-Mm.js";import"./_getTag-Dw30EhU3.js";import"./isEqual-BRRciehP.js";import"./merge-c-k0AbhX.js";import"./_initCloneObject-NVlBGhuH.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Xf5NEG7w.js";import"./inputBaseClasses-BxOJtLF2.js";import"./calculateFriendlyFileSize-DI3CDhm2.js";import"./CheckCircleTwoTone-CZ1rOWLg.js";import"./InfoTwoTone-DAGfyDTy.js";import"./useMutation-Bbj9coTz.js";import"./dayjs.min-I_SVux8b.js";import"./chunk-AYJ5UCUI-D1KYLbuL.js";import"./cloneDeep-CBO0jsPD.js";import"./Skeleton-E--vr7y2.js";import"./SkeletonButton-cMRNZ__f.js";import"./SkeletonInlineBlock-CJG5hxVo.js";import"./SkeletonTable-vky-mQpv.js";import"./times-CFf8C9TJ.js";import"./toInteger-Ddxgkesh.js";import"./isSymbol-DgpUL_L6.js";import"./SkeletonParagraph-CpGGXxR9.js";import"./uniqueId-D4-l-flb.js";import"./toString--A387rSg.js";import"./CSSTransition-DL5bu29-.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-BuhO1pcZ.js";import"./Avatar-B81EobdY.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
