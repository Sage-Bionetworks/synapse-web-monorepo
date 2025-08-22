import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-D0EuzYGt.js";import{d as s}from"./ToastMessage-JJsm8rYJ.js";import{R as n,a as t}from"./RequirementItem-CdFg8qxW.js";import{P as O}from"./Paper-BqpXHp3z.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-BD5gAGkA.js";import"./SynapseConstants-Br9Lr6B3.js";import"./OrientationBanner-Dx79sAmr.js";import"./index-BuR_GS0x.js";import"./index-DsA_Gkw7.js";import"./iframe-Bm14Ewc9.js";import"./spreadSx-CwcO6WA9.js";import"./react-D0AA63Jx.js";import"./FullWidthAlert-L08Yz2at.js";import"./Alert-DkBWMoCb.js";import"./createTheme-DTWOUIpQ.js";import"./DefaultPropsProvider-rtv4Ib_v.js";import"./useSlot-DairkBZp.js";import"./useForkRef-BvsWNGhT.js";import"./createSimplePaletteValueFilter-CAKW4g11.js";import"./createSvgIcon-BIE3cFeT.js";import"./Close-CRR-qnuA.js";import"./IconButton-BzBtzoQL.js";import"./useTimeout-Dy4LeGqi.js";import"./ButtonBase-vDOhooW8.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DxG99U2p.js";import"./Stack-C3wcpX49.js";import"./extendSxProp-11qvfwdm.js";import"./getThemeProps-2bFUeBGt.js";import"./useTheme-DyXIICkH.js";import"./Box-CqqjGcx5.js";import"./AlertTitle-CeRki0AL.js";import"./Typography-Dr_xejBs.js";import"./index-BOti27Vs.js";import"./useTheme-mt5piGsG.js";import"./ClickAwayListener-BFql8qCB.js";import"./getReactElementRef-DE-vjwLI.js";import"./index-qUtY8olG.js";import"./index-BK4iOm4v.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-gGx4oN6B.js";import"./Tooltip-C62LOQJz.js";import"./index-DBjDSNQj.js";import"./useControlled-MJeu_B0C.js";import"./Popper-CfukKOsw.js";import"./Button-CltLQCSi.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-BDbQ7vG_.js";import"./QueryClientProvider-CdrFc_br.js";import"./Link-uqLRFcQX.js";import"./Collapse-Cw6gzR61.js";import"./_baseUniq-C5vFC5u9.js";import"./_Uint8Array-CUaZdRI9.js";import"./isArray-DS3OusoU.js";import"./_getTag-bzK9hrrH.js";import"./isEqual-Cd3CJJ7C.js";import"./merge-CB7oDTVf.js";import"./_initCloneObject-BWQkhfEi.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Bbtrxq6e.js";import"./inputBaseClasses-DiJIT7II.js";import"./calculateFriendlyFileSize-8_X2P_SF.js";import"./CheckCircleTwoTone-BDpXhMjJ.js";import"./InfoTwoTone-C_M6KuBa.js";import"./useMutation-CRnkUn9_.js";import"./dayjs.min-CSUSOviq.js";import"./chunk-AYJ5UCUI-BJYsWGWW.js";import"./cloneDeep-BwsUYtiQ.js";import"./Skeleton-tnAZhtYI.js";import"./SkeletonButton-BmY8kVlm.js";import"./SkeletonInlineBlock-Cf4DFtYk.js";import"./SkeletonTable-BUumEvDM.js";import"./times-QBu4Y7x7.js";import"./toInteger-BxrK23xL.js";import"./isSymbol-CaaKRcnP.js";import"./SkeletonParagraph-BXi2LHZs.js";import"./uniqueId-BnQ2DVyE.js";import"./toString-C2rKxeoW.js";import"./CSSTransition-CZBNTGEE.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-CRm8Dli1.js";import"./Avatar-CCvJKGKN.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
