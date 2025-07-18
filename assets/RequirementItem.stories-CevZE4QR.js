import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CPrB_Pak.js";import{M as x}from"./MarkdownSynapse-eCzikSp7.js";import{d as s}from"./ToastMessage-B_ovXRxy.js";import{R as n,a as t}from"./RequirementItem-meAcs78g.js";import{P as O}from"./Paper-D8av1KMq.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-ByLg6Hzw.js";import"./VerificationSubmission-NmfK1W18.js";import"./useFiles-BXDA8pCU.js";import"./SynapseConstants-CekQ24bQ.js";import"./OrientationBanner-BxafAep9.js";import"./index-BWuK4b6E.js";import"./index-CENHngd5.js";import"./iframe-CQ-iLZT-.js";import"./spreadSx-CwcO6WA9.js";import"./react-C5sH5faB.js";import"./FullWidthAlert-AMR1_f-Y.js";import"./Alert-Dekg-2E1.js";import"./createTheme-DrOEP9hS.js";import"./DefaultPropsProvider-BzJ4o39w.js";import"./useSlot-DOzPDQ0Z.js";import"./useForkRef-D__m6DS7.js";import"./createSimplePaletteValueFilter-BpYg4GiX.js";import"./createSvgIcon-BVgW14Kx.js";import"./Close-DEdMEwnu.js";import"./IconButton-Rn05qvbt.js";import"./useTimeout-D-48mP1E.js";import"./ButtonBase-DBzMib1i.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-7MIiMb8U.js";import"./Stack-DkMuG6xc.js";import"./extendSxProp-C_Q4zTeR.js";import"./getThemeProps-NTodJa7o.js";import"./useTheme-_HHHuAwt.js";import"./Box-D4TN2X2Z.js";import"./AlertTitle-CjEexHZx.js";import"./Typography-bZpb3nqN.js";import"./index-Dcfas792.js";import"./useTheme-DysUc_O5.js";import"./ClickAwayListener-D2kObEGQ.js";import"./getReactElementRef-DutHMVVv.js";import"./index-jjydEFl4.js";import"./index-Cin9pIEG.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-B2c4qDhJ.js";import"./Tooltip-C8kUydBW.js";import"./index-B5OcUORg.js";import"./useControlled-DOxUNr9b.js";import"./Popper-BI98bRzf.js";import"./Button-CnpDLg-d.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-R_INQPkn.js";import"./QueryClientProvider-8oJQ5WUD.js";import"./Link-CqoPerv2.js";import"./Collapse-BsfZtnGd.js";import"./_baseUniq-CKx7TvAI.js";import"./_Uint8Array-BvApqEED.js";import"./isArray-5O24cWbQ.js";import"./_getTag-04Tx6XyJ.js";import"./isEqual-DHO7BfdL.js";import"./merge-l8zgsR91.js";import"./_initCloneObject-DS2MpqhL.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CV4sTlsk.js";import"./inputBaseClasses-CKxlzvLI.js";import"./calculateFriendlyFileSize-C4ejO9Q0.js";import"./CheckCircleTwoTone-Dlr4tfxg.js";import"./InfoTwoTone-DcWSSdOM.js";import"./useMutation-uydFSsFv.js";import"./dayjs.min-DxeorMzz.js";import"./chunk-AYJ5UCUI-sI5wy6uE.js";import"./cloneDeep-BGVNLRDO.js";import"./Skeleton-NfSi4jVM.js";import"./SkeletonButton-uW7bV0Le.js";import"./SkeletonInlineBlock-CrAcdNxr.js";import"./SkeletonTable-B-EtGn6I.js";import"./times-ClLw5qAN.js";import"./toInteger-DFFoNQ2i.js";import"./toNumber-DpHYFNhM.js";import"./isSymbol-BWUi-yc6.js";import"./SkeletonParagraph-BNkkxwts.js";import"./uniqueId-C1x0vPJ7.js";import"./toString-DXFD_Za5.js";import"./CSSTransition-2eXcZ8yr.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-DJI7ajoU.js";import"./Avatar-CSjJKUr0.js";const cr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(q=(I=m.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};const dr=["Complete","Pending","Loading","NoActions","Locked"];export{r as Complete,e as Loading,m as Locked,i as NoActions,o as Pending,dr as __namedExportsOrder,cr as default};
