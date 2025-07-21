import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CPrB_Pak.js";import{M as x}from"./MarkdownSynapse-4UYofuOS.js";import{d as s}from"./ToastMessage-DwEC4Aku.js";import{R as n,a as t}from"./RequirementItem-BOXjXMkH.js";import{P as O}from"./Paper-BrGOwJGK.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-ByLg6Hzw.js";import"./VerificationSubmission-NmfK1W18.js";import"./useFiles-D3UAGipA.js";import"./SynapseConstants-E103U1bW.js";import"./OrientationBanner-D3eSVmWN.js";import"./index-CfnuRBG1.js";import"./index-CHCQtvL6.js";import"./iframe-ZPpoLeey.js";import"./spreadSx-CwcO6WA9.js";import"./react-f9KYRIt5.js";import"./FullWidthAlert-CbxZG49d.js";import"./Alert-DegRDyyN.js";import"./createTheme-BFhnpMSS.js";import"./DefaultPropsProvider-BbdPqQAK.js";import"./useSlot-CuZE2NTH.js";import"./useForkRef-csIk32iV.js";import"./createSimplePaletteValueFilter-CjVdpQPV.js";import"./createSvgIcon-BZ_BUujo.js";import"./Close-BIdbZDc7.js";import"./IconButton-Daw0KZEB.js";import"./useTimeout-Cu2vCmSz.js";import"./ButtonBase-B8vo2K9-.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Bihi_tcT.js";import"./Stack-B7ZgJnX9.js";import"./extendSxProp-BrI7Ri1u.js";import"./getThemeProps-C1Ym3Nly.js";import"./useTheme-CD7CGQfw.js";import"./Box-15nTKuqV.js";import"./AlertTitle-eELc3dYp.js";import"./Typography-CuzFDH9B.js";import"./index-BNiw25kd.js";import"./useTheme-D6VPeybh.js";import"./ClickAwayListener-BAKBvik9.js";import"./getReactElementRef-BPiKtgLA.js";import"./index-B9D5oL8y.js";import"./index-C6wgRN_X.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DbCSPoHd.js";import"./Tooltip-CPI6Fpng.js";import"./index-CG7Pl6dA.js";import"./useControlled-RxNtz9_-.js";import"./Popper-jGylP4dS.js";import"./Button-BeG1LK6v.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-B1ePn8hK.js";import"./QueryClientProvider-BhG5JtiV.js";import"./Link-BFg9Y_1H.js";import"./Collapse-Bbq4RPGY.js";import"./_baseUniq-BJ6ERfwq.js";import"./_Uint8Array-DJsTOuqa.js";import"./isArray-Cw5-Yd5s.js";import"./_getTag-D2DjDLdh.js";import"./isEqual-BTkCORq3.js";import"./merge-BQaS75VP.js";import"./_initCloneObject-DaZFvmxr.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-eUIMTtqF.js";import"./inputBaseClasses-DPHY9qrw.js";import"./calculateFriendlyFileSize-Br4j9ddy.js";import"./CheckCircleTwoTone-03BUkFg_.js";import"./InfoTwoTone-BKkKN8uD.js";import"./useMutation-Bvt53Km9.js";import"./dayjs.min-CoO_HNBx.js";import"./chunk-AYJ5UCUI-COE2TzHN.js";import"./cloneDeep-D6f7fmf8.js";import"./Skeleton-DeTWEba3.js";import"./SkeletonButton-B0lut3Mh.js";import"./SkeletonInlineBlock-5TA0G2Cq.js";import"./SkeletonTable-CHmvJxQv.js";import"./times-E7jvNfnI.js";import"./toInteger-CrAbJuSd.js";import"./toNumber-BBcWnUAG.js";import"./isSymbol-CJmpaZbV.js";import"./SkeletonParagraph-Baa3_Kpg.js";import"./uniqueId-CLSVLnIm.js";import"./toString-DdOLlJgB.js";import"./CSSTransition-BgjomjYJ.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-tewrELF-.js";import"./Avatar-lILMYb8H.js";const cr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
