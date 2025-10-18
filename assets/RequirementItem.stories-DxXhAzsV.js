import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-CawGuG-E.js";import{d as s}from"./ToastMessage-CRMoAyiT.js";import{R as n,a as t}from"./RequirementItem-Pd7WZpfh.js";import{P as O}from"./Paper-BtMJMCrb.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-Doa42xrB.js";import"./SynapseConstants-BFOqWDQA.js";import"./OrientationBanner-TCfC_H3L.js";import"./index-BVee_ffb.js";import"./index-BbU4aETC.js";import"./iframe-BX7CAi87.js";import"./spreadSx-CwcO6WA9.js";import"./react-QiGgL7yD.js";import"./FullWidthAlert-u71Fe4AT.js";import"./Alert-CWDPuPjT.js";import"./createTheme-BZKeiz7F.js";import"./DefaultPropsProvider-DPTWajoX.js";import"./useSlot-Coso6cuj.js";import"./useForkRef-DR_w4f00.js";import"./createSimplePaletteValueFilter-CIoWQpVR.js";import"./createSvgIcon-DOjZs8H3.js";import"./Close-DfaBktiu.js";import"./IconButton-2ClfUHAI.js";import"./useTimeout-BQmg3tV4.js";import"./ButtonBase-oFCZPY0b.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-mTIStDYE.js";import"./Stack-Dkk8Xa7g.js";import"./useThemeProps-D9O9WAY6.js";import"./getThemeProps-CHgFTbzR.js";import"./useTheme-CcXBUw_1.js";import"./extendSxProp-DTdvSIHJ.js";import"./Box-Bycse9BW.js";import"./AlertTitle-uJCriyqk.js";import"./Typography-Ck3rri_r.js";import"./index-DIpubuKK.js";import"./useTheme-Cey4q2bx.js";import"./ClickAwayListener-DJnMgcYy.js";import"./getReactElementRef-r96q0QeR.js";import"./index-P5ijQna_.js";import"./index-A1z-KzpE.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BVNeYH1n.js";import"./Tooltip-i3RfmkJe.js";import"./index-CFklzSJo.js";import"./useControlled-BeW8yXpV.js";import"./Popper-WEnZTTxD.js";import"./Button-BQsAdChS.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-C3jQoxqK.js";import"./QueryClientProvider-Bx1UJlnP.js";import"./Link-CnaFqnEf.js";import"./Collapse-39g-gMCj.js";import"./_baseUniq-CZ8adtBQ.js";import"./_Uint8Array-CEg26PaB.js";import"./isArray-D3G7sFso.js";import"./_getTag-DwYiCtlW.js";import"./isEqual-DJ5furX1.js";import"./noop-DX6rZLP_.js";import"./merge-DEChS73I.js";import"./_initCloneObject-DYz2LT-o.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-SGKJTB9b.js";import"./inputBaseClasses-Df0a-hTu.js";import"./calculateFriendlyFileSize-2wXvVYCR.js";import"./CheckCircleTwoTone-DtjYqZqD.js";import"./InfoTwoTone-jdxUB-jN.js";import"./useMutation-RDVDSqRG.js";import"./dayjs.min-BJ7tfLc7.js";import"./chunk-AYJ5UCUI-DyVUVBHY.js";import"./cloneDeep-HprkIbek.js";import"./Skeleton-DfMrunuk.js";import"./SkeletonButton-DavH1BHy.js";import"./SkeletonInlineBlock-CfLhQAN5.js";import"./SkeletonTable-DMkQYsl-.js";import"./times-CzCyu-RU.js";import"./toInteger-CboIHU7e.js";import"./isSymbol-Du-9wEEV.js";import"./SkeletonParagraph-B9RzV3Fm.js";import"./uniqueId-CE1wYfGn.js";import"./toString-BwmnW4nE.js";import"./CSSTransition-sHxLVx0-.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-CweqxP97.js";import"./Avatar-B0F7ztkQ.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
