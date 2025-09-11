import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-Ma7Oe5XE.js";import{M as x}from"./MarkdownSynapse-BRCbGM2j.js";import{d as s}from"./ToastMessage-BLL_E1Bg.js";import{R as n,a as t}from"./RequirementItem-C6MyXnNe.js";import{P as O}from"./Paper-CbcZq6PP.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-t2fDWYxy.js";import"./VerificationSubmission-16RBrwfH.js";import"./useFiles-WZRtSsNc.js";import"./SynapseConstants-BLM21pa-.js";import"./OrientationBanner-ElxnVDle.js";import"./index-7bLOgSTC.js";import"./index-9TTcYVc_.js";import"./iframe-Czx5Dmi0.js";import"./spreadSx-CwcO6WA9.js";import"./react-DlmncmcU.js";import"./FullWidthAlert-CsPgeHuk.js";import"./Alert-mrkBi6in.js";import"./createTheme-DetxTjb2.js";import"./DefaultPropsProvider-CtKJNfPj.js";import"./useSlot-Tf7QcJnO.js";import"./useForkRef-C7pV92fh.js";import"./createSimplePaletteValueFilter-CXnjF6Zs.js";import"./createSvgIcon-C0ZSoRRV.js";import"./Close-NwpORwlT.js";import"./IconButton-BZkY5H-N.js";import"./useTimeout-DYRa_dr8.js";import"./ButtonBase-BWgIRray.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DIiahqiB.js";import"./Stack-2ox-Ad0l.js";import"./extendSxProp-Dj0Tb7v9.js";import"./getThemeProps-CdZnDORy.js";import"./useTheme-DM1dQSDI.js";import"./Box-Dy5ekAQq.js";import"./AlertTitle-B5c08fVM.js";import"./Typography-C1hk1xps.js";import"./index-BMbKnGiz.js";import"./useTheme-DZOGkB3v.js";import"./ClickAwayListener-Cmw51NWg.js";import"./getReactElementRef-BVzUeeGA.js";import"./index-Bn2Fmzct.js";import"./index-ZL7ET78i.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-seWSR3vl.js";import"./Tooltip-5yyA0MtP.js";import"./index-DmTgUWkb.js";import"./useControlled-B5jxCiTd.js";import"./Popper-OxILuenQ.js";import"./Button-DkW-IEcU.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-B_EIkN_W.js";import"./useQuery-GFI84f-6.js";import"./QueryClientProvider-CybjnCa8.js";import"./Link-5MArhe6M.js";import"./Collapse-_N5J_E3C.js";import"./_baseUniq-CzQc4vO5.js";import"./_Uint8Array-CZXWf0wa.js";import"./isArray-wv-qry3w.js";import"./_getTag-B1_q1IMX.js";import"./isEqual-BeKpR506.js";import"./merge-BkX_m9ug.js";import"./_initCloneObject-BZbm0-zy.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DV6rNrzp.js";import"./inputBaseClasses-D2LWFDZ3.js";import"./calculateFriendlyFileSize-CA8SV0xk.js";import"./CheckCircleTwoTone-B4xc24bl.js";import"./InfoTwoTone-D7N4NCht.js";import"./useMutation-CtBwPbJh.js";import"./dayjs.min-D2apGn21.js";import"./chunk-AYJ5UCUI-CYDaopvs.js";import"./cloneDeep-CgZcCEDV.js";import"./Skeleton-KYXzY8Ax.js";import"./SkeletonButton-CAJdjKiY.js";import"./SkeletonInlineBlock-DgBJezEl.js";import"./SkeletonTable-CWvlKbeN.js";import"./times-TiP4IDIO.js";import"./toInteger-sDJQXy2h.js";import"./isSymbol-Bpxm0Ru6.js";import"./SkeletonParagraph-HWnNDh4k.js";import"./uniqueId-B4JR_DQ8.js";import"./toString-Cddfhdkd.js";import"./CSSTransition-Bm5lgvH2.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-BV1tgj7T.js";import"./Avatar-0n34-EU6.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
