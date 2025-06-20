import{j as a}from"./jsx-runtime-CEiya-qk.js";import{m as P}from"./mockWiki-CUQx1XWq.js";import{M as x}from"./MarkdownSynapse-BdWsl7fy.js";import{d as s}from"./ToastMessage-BGYuyRIr.js";import{R as n,a as t}from"./RequirementItem-ChLtwTjx.js";import{P as O}from"./Paper-IJ_WKSZl.js";import"./index-BSp_ZQzn.js";import"./iframe-D2P6Hz8u.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-3Ozoui7p.js";import"./VerificationSubmission-CMrrYimb.js";import"./useFiles-DsXNnbuB.js";import"./SynapseConstants-B0LjNAFO.js";import"./OrientationBanner-p1YWnoy_.js";import"./index-DDIc1CHd.js";import"./spreadSx-CwcO6WA9.js";import"./react-B_KpKvb2.js";import"./FullWidthAlert-APJZjszM.js";import"./Alert-VbEHGyJ9.js";import"./createTheme-BIYFvq8g.js";import"./DefaultPropsProvider-mowMNPVN.js";import"./useSlot-Bi5uK-Bp.js";import"./useForkRef-DpmcJsqc.js";import"./createSimplePaletteValueFilter-Cum4RQAQ.js";import"./createSvgIcon-BEhJlt2H.js";import"./Close-CgXCugLz.js";import"./IconButton-D8jW5NGW.js";import"./useTimeout-DQj90VCm.js";import"./ButtonBase-DzCtctvR.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CN-NraCE.js";import"./Stack-BVGEmsZM.js";import"./extendSxProp--VZNpAZm.js";import"./getThemeProps-Bo5zZXDb.js";import"./useTheme-CUpSamw8.js";import"./Box-CeBO_yiS.js";import"./AlertTitle-BtZzDwm8.js";import"./Typography-DrbAIehx.js";import"./index-BZI38DsI.js";import"./useTheme-DEW0hui-.js";import"./ClickAwayListener-V2WTDJSg.js";import"./getReactElementRef-DObOhTgY.js";import"./index-Bmc5tHOG.js";import"./index-B8_ioYD3.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Cu2yfkpY.js";import"./Tooltip-BPHaPNfS.js";import"./index-CwubJZ7e.js";import"./useControlled-DYG3vje6.js";import"./Popper-BTFfeZDZ.js";import"./Button-DW8uwKcd.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bdqa-HwM.js";import"./useQuery-BaQ4tC5y.js";import"./utils-NAV_hApq.js";import"./Link-ClzLR6kU.js";import"./Collapse-CHZvkNcr.js";import"./_baseUniq-CH5B1OKL.js";import"./_Uint8Array-DDv7F2aI.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-BerGYOoN.js";import"./isArray-Dxzbedgu.js";import"./_getTag-CruQv3Dp.js";import"./isEqual-ChKGANOO.js";import"./merge-B2Kk0ye1.js";import"./_initCloneObject-CzYcNzPS.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BLEwZ0yn.js";import"./inputBaseClasses-BPzUyhmM.js";import"./calculateFriendlyFileSize-D4N7TZwp.js";import"./CheckCircleTwoTone-Dl8Hb3jc.js";import"./InfoTwoTone-D7pUqeUD.js";import"./useMutation-De7K5N57.js";import"./dayjs.min-PNfTLX3I.js";import"./chunk-AYJ5UCUI-DfFmK8x9.js";import"./cloneDeep-DhitCHjc.js";import"./Skeleton-Ds7O-lEt.js";import"./SkeletonButton-Bev5VKG6.js";import"./SkeletonInlineBlock-B332kbDn.js";import"./SkeletonTable-Cj9S_rmm.js";import"./times-CDFXnYby.js";import"./toInteger-BmLuhZ-4.js";import"./isSymbol-DxPGBnDj.js";import"./SkeletonParagraph-BedX1Y7S.js";import"./uniqueId-Dl7NiFJr.js";import"./toString-D5-98mOr.js";import"./CSSTransition-brKxhpNQ.js";import"./ConditionalWrapper-CKXtI10A.js";import"./LockTwoTone-C9EZpTFK.js";import"./Avatar--SiFyk7F.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
