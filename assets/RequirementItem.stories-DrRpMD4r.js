import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-Dzi0Q_bJ.js";import{d as s}from"./ToastMessage-Bx18S_Ek.js";import{R as n,a as t}from"./RequirementItem-DfM_WCE7.js";import{P as O}from"./Paper-BN7kDLUZ.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-dWGrqz_D.js";import"./SynapseConstants-CTIB33D3.js";import"./OrientationBanner-CQFR5l9R.js";import"./index-BMgqcLmn.js";import"./index-DWtRjqxE.js";import"./iframe-dC7zyD38.js";import"./spreadSx-CwcO6WA9.js";import"./react-DSUFze6-.js";import"./FullWidthAlert-mM8bmdFl.js";import"./Alert-CO4LRSIc.js";import"./createTheme-B8tVnoKa.js";import"./DefaultPropsProvider-BOBWKWsP.js";import"./useSlot-Bbu2_Uh5.js";import"./useForkRef-BsHVNaER.js";import"./createSimplePaletteValueFilter-CI1PPbZz.js";import"./createSvgIcon-BgawE0cA.js";import"./Close-ZUvqdUvf.js";import"./IconButton-BYWzvY5r.js";import"./useTimeout-C10Fy58h.js";import"./ButtonBase-eKGtCu5K.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Bepf3adF.js";import"./Stack-B_1G5Dgc.js";import"./extendSxProp-B1uoARpz.js";import"./getThemeProps-DtfQR3gl.js";import"./useTheme-44ZyrYIV.js";import"./Box-CJwkuUVc.js";import"./AlertTitle-Dny0ic5F.js";import"./Typography-8YdQWFwx.js";import"./index-6HQiBBz4.js";import"./useTheme-Bqfldhhz.js";import"./ClickAwayListener-cCk8f9_L.js";import"./getReactElementRef-DFZw1bWU.js";import"./index-DWZIDMAz.js";import"./index-DHmZPXnJ.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-egikrnTN.js";import"./Tooltip-ChGVg_eO.js";import"./index-Bh9Mm5w5.js";import"./useControlled-jIUY62E0.js";import"./Popper-8zb1kIwC.js";import"./Button-BsTgAid7.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-BJdHVLrD.js";import"./QueryClientProvider-CUCt5UMY.js";import"./Link-9MVZDgxR.js";import"./Collapse-DcRUmTWs.js";import"./_baseUniq-DexRrmkQ.js";import"./_Uint8Array-CgwNuqWK.js";import"./isArray-Dvp0SrYH.js";import"./_getTag-yEmMQGSX.js";import"./isEqual-BrJ8BCp_.js";import"./merge-BVgGw762.js";import"./_initCloneObject-BO9WrdaY.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-6tQ1BYQE.js";import"./inputBaseClasses-BBU_2lni.js";import"./calculateFriendlyFileSize-BqN9629y.js";import"./CheckCircleTwoTone-puf-7GIZ.js";import"./InfoTwoTone-Cw0LVZ8W.js";import"./useMutation-BRVUSdsV.js";import"./dayjs.min-P2dLUj27.js";import"./chunk-AYJ5UCUI-DaTh8-5G.js";import"./cloneDeep-C2Thqa1j.js";import"./Skeleton-DbEDjigm.js";import"./SkeletonButton-DEMLMPcl.js";import"./SkeletonInlineBlock-Dx_yKudb.js";import"./SkeletonTable-D-HjqQXv.js";import"./times-DB0yTzi6.js";import"./toInteger-BH2RyoWC.js";import"./isSymbol-BcjZZVhs.js";import"./SkeletonParagraph-CI8MkDyS.js";import"./uniqueId-BleNd0Z5.js";import"./toString-D4usIpsO.js";import"./CSSTransition-zXIUekJU.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-BGkTVWbt.js";import"./Avatar-Cq-26z88.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
