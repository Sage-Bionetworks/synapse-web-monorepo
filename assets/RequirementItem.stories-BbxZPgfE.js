import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-JFYiILkj.js";import{d as s}from"./ToastMessage-D31aSShP.js";import{R as n,a as t}from"./RequirementItem-BbMjloT_.js";import{P as O}from"./Paper-lAHe8OpX.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-DqOED7Vm.js";import"./SynapseConstants-BthOpQLB.js";import"./OrientationBanner-xWDnb_8x.js";import"./index-CiGjdKGK.js";import"./index-0FUO4iVK.js";import"./iframe-DM38aeMQ.js";import"./spreadSx-CwcO6WA9.js";import"./react-C2d4DyXu.js";import"./FullWidthAlert-Cx03XuvY.js";import"./Alert-udWcAUQY.js";import"./createTheme-BHAg5tEe.js";import"./DefaultPropsProvider-DR7_-YAs.js";import"./useSlot-DZfTNSFS.js";import"./useForkRef-DxePPmVc.js";import"./createSimplePaletteValueFilter-DERnL5M9.js";import"./createSvgIcon-CfvJ11Oa.js";import"./Close-Cg62tY8L.js";import"./IconButton-_bwpt4ca.js";import"./useTimeout-ByWjq-eU.js";import"./ButtonBase-CcjRDjmt.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-ByfLseIu.js";import"./Stack-CsZGKSJy.js";import"./extendSxProp-DoeCfCx7.js";import"./getThemeProps-CmMpLADq.js";import"./useTheme-Bnf3h8G0.js";import"./Box-DPFXD5kJ.js";import"./AlertTitle-BBIZ10VR.js";import"./Typography-B8zdMFE9.js";import"./index-Ozhlb9U6.js";import"./useTheme-NzQR0i01.js";import"./ClickAwayListener-BXtl8q7p.js";import"./getReactElementRef-DH0foITJ.js";import"./index-qN2NPw-a.js";import"./index-CGaPGV5L.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CYZ1JjRs.js";import"./Tooltip-CJb_CvWe.js";import"./index-BNBf6lAj.js";import"./useControlled-B6dAQYhR.js";import"./Popper-DOrV1LRN.js";import"./Button-DwRl1m3f.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-DEzStqmt.js";import"./QueryClientProvider-BV8zLBvL.js";import"./Link-NI2pPKYc.js";import"./Collapse-BbakI7R6.js";import"./_baseUniq-CwnmLVm2.js";import"./_Uint8Array-DEUqcpre.js";import"./isArray-DV5BwaHp.js";import"./_getTag-BlOI61fG.js";import"./isEqual-CoMwnfdJ.js";import"./merge-_TaKl8B5.js";import"./_initCloneObject-C2F5HBS3.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-C9uEJt8L.js";import"./inputBaseClasses-B4Lv6z-u.js";import"./calculateFriendlyFileSize-t9JGByLX.js";import"./CheckCircleTwoTone-DD06cB11.js";import"./InfoTwoTone-Dew1zR_M.js";import"./useMutation-B_FbfBom.js";import"./dayjs.min-REswNT-I.js";import"./chunk-AYJ5UCUI-QqhSiyQh.js";import"./cloneDeep-Ba2vXAv3.js";import"./Skeleton-D1xnNsuB.js";import"./SkeletonButton-DhWzkjOA.js";import"./SkeletonInlineBlock-0nc8C8w4.js";import"./SkeletonTable-CYoBgceZ.js";import"./times-B9fnaU8O.js";import"./toInteger-BvPielbY.js";import"./isSymbol-Ct9O8yqX.js";import"./SkeletonParagraph-BQ-FZqNR.js";import"./uniqueId-DEpDD581.js";import"./toString-DlFGItZY.js";import"./CSSTransition-oy00Tw2x.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-z8alUgk-.js";import"./Avatar-B6ONr2Ig.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
