import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-DruhsIYl.js";import{d as s}from"./ToastMessage-CSzX80cc.js";import{R as n,a as t}from"./RequirementItem-uI8_uu0W.js";import{P as O}from"./Paper-CRP6Ta3q.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-B8lGVSZx.js";import"./SynapseConstants-BV_vjEV4.js";import"./OrientationBanner-C78UQJCr.js";import"./index-BMDI4sDj.js";import"./index-C8AgDejC.js";import"./iframe-BpbBGkgc.js";import"./spreadSx-CwcO6WA9.js";import"./react-B80l2OrH.js";import"./FullWidthAlert-1tHM104s.js";import"./Alert-fdSUVrh5.js";import"./createTheme-dGGVbsHM.js";import"./DefaultPropsProvider-CEqRozh0.js";import"./useSlot-Csx6ihJx.js";import"./useForkRef-QK4cJop7.js";import"./createSimplePaletteValueFilter-DQe7d5Qb.js";import"./createSvgIcon-CchSg1Gx.js";import"./Close-CxVV_b-1.js";import"./IconButton-muudUxJv.js";import"./useTimeout-BkEmZ-C2.js";import"./ButtonBase-cVvht4wM.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CgsLq8_L.js";import"./Stack-CdExR9_o.js";import"./extendSxProp-D0VtO7mi.js";import"./getThemeProps-DYqoV81W.js";import"./useTheme-CfmQtQKd.js";import"./Box-_-I0XUqB.js";import"./AlertTitle-_N-Juk4h.js";import"./Typography-YA-Nis2y.js";import"./index-B_eatk0d.js";import"./useTheme-BVkYgVpj.js";import"./ClickAwayListener-Cus--QEu.js";import"./getReactElementRef-BiSbqrbX.js";import"./index-Ckm25AxB.js";import"./index-BbU_ZiS0.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow--3DiAtyk.js";import"./Tooltip-BgTWlnJ0.js";import"./index-Bs_yQwLJ.js";import"./useControlled-CY9xyabe.js";import"./Popper-Bd_A_V6g.js";import"./Button-8Hf9dmO4.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-BrTWN470.js";import"./QueryClientProvider-Bgnvz8QP.js";import"./Link-BE6I7YcM.js";import"./Collapse-nm8xx53n.js";import"./_baseUniq-hk5S7B08.js";import"./_Uint8Array-BXZJkGT_.js";import"./isArray-_KeI5LAQ.js";import"./_getTag-Cp8N0B3j.js";import"./isEqual-lgf4hh2o.js";import"./merge-iiJlJXc8.js";import"./_initCloneObject-CwKxztrP.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-eufq9lg7.js";import"./inputBaseClasses-CqPu9QD6.js";import"./calculateFriendlyFileSize-mq7SKF2J.js";import"./CheckCircleTwoTone-B2In--cY.js";import"./InfoTwoTone-c1x43jMK.js";import"./useMutation-m6_xjbin.js";import"./dayjs.min-BZRgxVGz.js";import"./chunk-AYJ5UCUI-fXw5Uk8X.js";import"./cloneDeep-BV8D8Wbh.js";import"./Skeleton-kBOXpjk-.js";import"./SkeletonButton-D3-iUFh-.js";import"./SkeletonInlineBlock-S45RsyEw.js";import"./SkeletonTable-IuoxRDP2.js";import"./times-DsmPGJra.js";import"./toInteger--9yohRtZ.js";import"./isSymbol-BWqlk5jE.js";import"./SkeletonParagraph-wfMWbqKd.js";import"./uniqueId-iNddweYG.js";import"./toString-cvWyzTAD.js";import"./CSSTransition-vYS9mpfm.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-CdATxwlS.js";import"./Avatar-BGKOdkZk.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
