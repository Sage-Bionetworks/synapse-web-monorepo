import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-BjsSPAW9.js";import{M as x}from"./MarkdownSynapse-BBczN6Rl.js";import{d as s}from"./ToastMessage-CzaMqZgl.js";import{R as n,a as t}from"./RequirementItem-BNq49eDS.js";import{P as O}from"./Paper-DEWk3Iwm.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BgkszYEk.js";import"./VerificationSubmission-D0sL2gwz.js";import"./useFiles-CNFcQdml.js";import"./SynapseConstants-DBNLKtRP.js";import"./OrientationBanner-B8aBrx6p.js";import"./index-C9togNJv.js";import"./index-BHJCzbh3.js";import"./iframe-dITNj0Hx.js";import"./spreadSx-CwcO6WA9.js";import"./react-DEWDKV7G.js";import"./FullWidthAlert-BeHQTUMX.js";import"./Alert-CgIRN3k3.js";import"./createTheme-CKqkwa7d.js";import"./DefaultPropsProvider-D5YzZChL.js";import"./useSlot-BGMO4Ps_.js";import"./useForkRef-Cl9Rp-dg.js";import"./createSimplePaletteValueFilter-D8THahFF.js";import"./createSvgIcon-hw5sef7_.js";import"./Close-Ca1w9KAM.js";import"./IconButton-D6fg4-JH.js";import"./useTimeout-D8YjTpcK.js";import"./ButtonBase-B4TRRvGR.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-2gMhwz2x.js";import"./Stack-BrOi9MTv.js";import"./extendSxProp-DJfIiLD8.js";import"./getThemeProps-Ca39sDWE.js";import"./useTheme-C7jBfA_o.js";import"./Box-CoN9Xcom.js";import"./AlertTitle-IM4UpBhk.js";import"./Typography-CWkdFRvd.js";import"./index-DN5FxpE6.js";import"./useTheme-DOVonx1n.js";import"./ClickAwayListener-CHohliHo.js";import"./getReactElementRef-VVl8u3pk.js";import"./index-Ctb1fTIi.js";import"./index-C4JV96Bq.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-B7LlwP-G.js";import"./Tooltip-EB8Acvns.js";import"./index-DoXq1h2I.js";import"./useControlled-D1PVFx-p.js";import"./Popper-CU6WRkQu.js";import"./Button-A4JrCwSW.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bt2r5KGg.js";import"./useQuery-DlKbqV7m.js";import"./QueryClientProvider-BL9YT6Vs.js";import"./Link-Cao8rbg2.js";import"./Collapse-CsAoI-BE.js";import"./_baseUniq-C5SXyLOe.js";import"./_Uint8Array-C5QuASXD.js";import"./isArray-Dhffyn_X.js";import"./_getTag-a5To3XUS.js";import"./isEqual-G3jbN0hm.js";import"./merge-C9xt5aZs.js";import"./_initCloneObject-Cz0cTzpK.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-crWMwZ_Y.js";import"./inputBaseClasses-CJ7Qu9r4.js";import"./calculateFriendlyFileSize-BzH9ntlH.js";import"./CheckCircleTwoTone-Brx8IfwO.js";import"./InfoTwoTone-CQSVX7va.js";import"./useMutation-CaTGYQiO.js";import"./dayjs.min-Bjd3NTcv.js";import"./chunk-AYJ5UCUI-DoqxXuGW.js";import"./cloneDeep-CoKPu_b1.js";import"./Skeleton-DQoBJCRz.js";import"./SkeletonButton-BIeq27We.js";import"./SkeletonInlineBlock-rp-qcFU6.js";import"./SkeletonTable-CGYjuAVG.js";import"./times-DBpvTzmB.js";import"./toInteger-DI2xZEx7.js";import"./isSymbol-GpfXkDnX.js";import"./SkeletonParagraph-CZaUYsDH.js";import"./uniqueId-Bm9fC-2t.js";import"./toString-D1VyyLj_.js";import"./CSSTransition-DHsrS079.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-CaIjXjsU.js";import"./Avatar-6nPXc6hN.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
