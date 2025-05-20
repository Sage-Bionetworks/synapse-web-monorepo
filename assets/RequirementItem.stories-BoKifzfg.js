import{j as a}from"./jsx-runtime-DzZnOzqg.js";import{m as P}from"./mockWiki-B6wTqEDI.js";import{M as x}from"./MarkdownSynapse-XJ9iU0cq.js";import{d as s}from"./ToastMessage-laJym5aQ.js";import{R as n,a as t}from"./RequirementItem-RuwJXY0r.js";import{P as O}from"./Paper-CA8X2nmN.js";import"./index-C60fwWGm.js";import"./iframe-BCxQYagR.js";import"./mock_user_profile-CijvmO8r.js";import"./mock_file_handle-3wYKbysY.js";import"./VerificationSubmission-dxY1kvC5.js";import"./useFiles-D8uG9HU0.js";import"./SynapseConstants-B1FWRhdk.js";import"./OrientationBanner-w1VcnD_5.js";import"./index-BCKAJkgQ.js";import"./spreadSx-CwcO6WA9.js";import"./react-BhSIdDPr.js";import"./FullWidthAlert-cAgO7bVX.js";import"./Alert-CbCSI8ns.js";import"./createTheme-CYWnjTil.js";import"./resolveComponentProps-B2e4_KER.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-C3QGtmSj.js";import"./createSvgIcon-m9fHyGyS.js";import"./DefaultPropsProvider-BuN52GuK.js";import"./Close-CzUlLz04.js";import"./IconButton-BNmjBrUK.js";import"./ButtonBase-CdwHWq9j.js";import"./useTimeout-BPh3bJVB.js";import"./TransitionGroupContext-B9UPuYLo.js";import"./useIsFocusVisible-Bukda0BQ.js";import"./useEventCallback-BHMz769w.js";import"./Stack-BisZ62cv.js";import"./getThemeProps-BYxHHPXx.js";import"./useTheme-D6IuG_uC.js";import"./Box-FDIqTSOb.js";import"./AlertTitle-B4fbjN8A.js";import"./Typography-BmZ7G-Jn.js";import"./useTheme-CypcUUjZ.js";import"./Grow-DhFF0lAh.js";import"./index-CSh4ftr3.js";import"./utils-CRAVGkRr.js";import"./ClickAwayListener-BAN580I8.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-xln8x51v.js";import"./index-Cz5g-qWT.js";import"./useControlled-BMCukgAB.js";import"./useId-DjK6D95n.js";import"./Popper-DTiq_qV1.js";import"./Button-DpKUeDej.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-Df7AZImX.js";import"./useQuery-DlRymLBd.js";import"./utils-C1A9897Y.js";import"./Link-Cbuy5Khz.js";import"./Collapse-sufiHMck.js";import"./isNil-5_7q3K66.js";import"./_Uint8Array-BVEqVThY.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-Dxq-98_C.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-BlXHlzVN.js";import"./_getTag-BiZXTrrh.js";import"./tinycolor-Begke6kS.js";import"./Fade-CqoyTvjP.js";import"./Skeleton-FYvl9i-x.js";import"./inputBaseClasses-Qjg2uSnc.js";import"./calculateFriendlyFileSize-CpEXOQcO.js";import"./CheckCircleTwoTone-Bmp6VC1Z.js";import"./InfoTwoTone-DsLs3GaH.js";import"./mutation-DUOv2tBk.js";import"./dayjs.min-CA1ARrMC.js";import"./chunk-AYJ5UCUI-CCXOOs5x.js";import"./cloneDeep-CbpOHm8w.js";import"./_initCloneObject-C8Pds_s0.js";import"./isEqual-SADtRp1R.js";import"./merge-QkVvsKfT.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-BoQHW4ur.js";import"./SkeletonInlineBlock-ifZrLBwB.js";import"./SkeletonTable-Cjt6cUEE.js";import"./times-DpsyR5Du.js";import"./toInteger-mOPhbX-G.js";import"./isSymbol-BQx_Ubgc.js";import"./SkeletonParagraph-9petVL4x.js";import"./uniqueId-ZztKZTyN.js";import"./toString-CXtXUg6z.js";import"./CSSTransition-D9fUQIwb.js";import"./ConditionalWrapper-mmJPWa-X.js";import"./LockTwoTone-BdbKaM5m.js";import"./Avatar-CCTAPyOl.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(q=(I=m.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};const ur=["Complete","Pending","Loading","NoActions","Locked"];export{r as Complete,e as Loading,m as Locked,i as NoActions,o as Pending,ur as __namedExportsOrder,dr as default};
