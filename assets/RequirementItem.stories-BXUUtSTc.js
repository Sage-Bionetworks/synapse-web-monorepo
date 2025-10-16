import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-CHjjqyZA.js";import{d as s}from"./ToastMessage-D7DNdCG4.js";import{R as n,a as t}from"./RequirementItem-4Ol2Wv9-.js";import{P as O}from"./Paper-DdBQwrgv.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-D6LCpGCY.js";import"./SynapseConstants-CYqjdTgk.js";import"./OrientationBanner-C9Jr3Oy3.js";import"./index-BoYeThVs.js";import"./index-DiBgT_g4.js";import"./iframe-uFLftcIy.js";import"./spreadSx-CwcO6WA9.js";import"./react-BiKiA-Iy.js";import"./FullWidthAlert-gNyb5TrV.js";import"./Alert-DHjgiXNM.js";import"./createTheme-Barucc3o.js";import"./DefaultPropsProvider-5BuMuhNk.js";import"./useSlot-BnoEaNVP.js";import"./useForkRef-D3B4tP8D.js";import"./createSimplePaletteValueFilter-Dxo_mhWY.js";import"./createSvgIcon-DiCPcpir.js";import"./Close-0lTZq7IP.js";import"./IconButton-D3dEJ89e.js";import"./useTimeout-Cg8KvPgb.js";import"./ButtonBase-CtFWPYLG.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BbzGW1mt.js";import"./Stack-YRUIF5uW.js";import"./useThemeProps-D_Baxmlh.js";import"./getThemeProps-Di5KybE1.js";import"./useTheme-BxqvYw5-.js";import"./extendSxProp-B2jc7Sfx.js";import"./Box-B47wL6Kg.js";import"./AlertTitle-DfF1mpAn.js";import"./Typography-0IkQ6ATH.js";import"./index-B74TbmPh.js";import"./useTheme-Dk4dRd2j.js";import"./ClickAwayListener-luk8cFos.js";import"./getReactElementRef-DE7AlBDu.js";import"./index-BVru8Zw3.js";import"./index-CMfiAwEf.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-B7s8RAlS.js";import"./Tooltip-DMolmanq.js";import"./index-aEYNMko0.js";import"./useControlled-CqW2zA2Q.js";import"./Popper-JK9tjrQY.js";import"./Button-CmYxHs1i.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-Bc5xDMAa.js";import"./QueryClientProvider-D9x5ThDG.js";import"./Link-Cch9Vp4a.js";import"./Collapse-BjlYt1Tn.js";import"./_baseUniq-D003bh-f.js";import"./_Uint8Array-BhbFImZZ.js";import"./isArray-BITIQEug.js";import"./_getTag-bbVfyQ26.js";import"./isEqual-_y4wzV7I.js";import"./noop-DX6rZLP_.js";import"./merge--RN6qcSW.js";import"./_initCloneObject-CNpKwYnX.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CySYR3x4.js";import"./inputBaseClasses-DM-InByo.js";import"./calculateFriendlyFileSize-BRfNISFB.js";import"./CheckCircleTwoTone-Cijhq7EN.js";import"./InfoTwoTone-DQS0zO3D.js";import"./useMutation-CKcr9VY9.js";import"./dayjs.min-CgJX-n-a.js";import"./chunk-AYJ5UCUI-C-W-DLcN.js";import"./cloneDeep-DG3WHv99.js";import"./Skeleton-CN97u2Kc.js";import"./SkeletonButton-CXp9eL6q.js";import"./SkeletonInlineBlock-Icy7iBdW.js";import"./SkeletonTable-CB0JFsSD.js";import"./times-OZOL83Bg.js";import"./toInteger-B6IaJdT7.js";import"./isSymbol-ClGIrKZo.js";import"./SkeletonParagraph-C-QRIlLc.js";import"./uniqueId-DxIV86Cn.js";import"./toString-Dp0EFG1Y.js";import"./CSSTransition-BGBWLY0G.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-DewUXl8h.js";import"./Avatar-C8n1m2id.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
