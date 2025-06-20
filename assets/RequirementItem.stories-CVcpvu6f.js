import{j as a}from"./jsx-runtime-DUbQcIgO.js";import{m as P}from"./mockWiki-CUQx1XWq.js";import{M as x}from"./MarkdownSynapse-raWRpsux.js";import{d as s}from"./ToastMessage-Dy2j07Q4.js";import{R as n,a as t}from"./RequirementItem-CV9BxTii.js";import{P as O}from"./Paper-BJEASiZs.js";import"./index-B1sUgM2J.js";import"./iframe-dGFA8UIy.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-3Ozoui7p.js";import"./VerificationSubmission-CMrrYimb.js";import"./useFiles-xiUh4o3E.js";import"./SynapseConstants-zKEftURI.js";import"./OrientationBanner-7TN_R8dT.js";import"./index-PftVGDny.js";import"./spreadSx-CwcO6WA9.js";import"./react-KSrgTsq2.js";import"./FullWidthAlert-DiZQ4jCk.js";import"./Alert-EcA43haq.js";import"./createTheme-CbdxX3QN.js";import"./DefaultPropsProvider-BrAb0sW2.js";import"./useSlot-Dv0O6bnn.js";import"./useForkRef-CnLDrOyk.js";import"./createSimplePaletteValueFilter-8fXUNCBa.js";import"./createSvgIcon-Qj3ohLcW.js";import"./Close-BpwDqNlL.js";import"./IconButton-831dzvVo.js";import"./useTimeout-D1uU2Bb0.js";import"./ButtonBase-BKIhN0Vh.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-JrvCA3jz.js";import"./Stack-ClyyUoGo.js";import"./extendSxProp-BkqfAiBc.js";import"./getThemeProps-DbHHmb1Z.js";import"./useTheme-CYmQzm27.js";import"./Box-BNlGut7z.js";import"./AlertTitle-B-GX0pjb.js";import"./Typography-B87fyUCj.js";import"./index-Beh3Q5fM.js";import"./useTheme-D4vJ6lFU.js";import"./ClickAwayListener-CGuHEFs2.js";import"./getReactElementRef-DP2o8Wpm.js";import"./index-DwIqEwoa.js";import"./index-y7JM538r.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-C678UZKi.js";import"./Tooltip-BIsLwZxW.js";import"./index-C0EE35bT.js";import"./useControlled-DHjsMso_.js";import"./Popper-yUKCVzzk.js";import"./Button-DioZ-o3T.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bdqa-HwM.js";import"./useQuery-yyyaqI58.js";import"./utils-CJWO1gyf.js";import"./Link-yD6_0rZx.js";import"./Collapse-CUGmH55i.js";import"./_baseUniq-DkWECIsI.js";import"./_Uint8Array-BJmeHegI.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-C3Psf34C.js";import"./isArray-Dxzbedgu.js";import"./_getTag-Bs4mI711.js";import"./isEqual-D2CUmD58.js";import"./merge-BbKV8VaS.js";import"./_initCloneObject-B5vP6wGH.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CoH4fGzH.js";import"./inputBaseClasses-DEZCj5F2.js";import"./calculateFriendlyFileSize-NGJJU6sW.js";import"./CheckCircleTwoTone-fiSB1R-m.js";import"./InfoTwoTone-DXuW0Jea.js";import"./useMutation-CRNj1Qza.js";import"./dayjs.min-Cy_ds5x9.js";import"./chunk-AYJ5UCUI-CuAphczh.js";import"./cloneDeep-CC5vE4bk.js";import"./Skeleton-DGlErbKj.js";import"./SkeletonButton-DRtUUeQJ.js";import"./SkeletonInlineBlock-CW5KrUo5.js";import"./SkeletonTable-D_sdaJoV.js";import"./times-BV_zL6Ug.js";import"./toInteger-DlFVnXu7.js";import"./isSymbol-DcSsdXXT.js";import"./SkeletonParagraph-CLylCYuw.js";import"./uniqueId-Hy6WatG9.js";import"./toString-D0-toD8X.js";import"./CSSTransition-CtEgjJLP.js";import"./ConditionalWrapper-BWsQs9eo.js";import"./LockTwoTone-DhAwUN2t.js";import"./Avatar-D7p29ad0.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
