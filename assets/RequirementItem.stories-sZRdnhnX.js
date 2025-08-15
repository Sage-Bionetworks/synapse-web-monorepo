import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-DJEOnPTw.js";import{d as s}from"./ToastMessage-wZ9moQ2M.js";import{R as n,a as t}from"./RequirementItem-DCKBLrc3.js";import{P as O}from"./Paper-DFU7rbcO.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-KMy9YqPL.js";import"./SynapseConstants-BgYtpW4k.js";import"./OrientationBanner-7upF-hoQ.js";import"./index-TbvRGm8v.js";import"./index-BhoLOz1H.js";import"./iframe-B-L9UC8S.js";import"./spreadSx-CwcO6WA9.js";import"./react-Bign9K4W.js";import"./FullWidthAlert-Djn7ZtR5.js";import"./Alert-nw7YVywL.js";import"./createTheme-uSqP-y16.js";import"./DefaultPropsProvider-JciSacAe.js";import"./useSlot-CxrlCIUv.js";import"./useForkRef-DYuMtypn.js";import"./createSimplePaletteValueFilter-DK6_d1Ss.js";import"./createSvgIcon-COdRNMCK.js";import"./Close-DIM5GSvr.js";import"./IconButton-B1rYF2mA.js";import"./useTimeout-C-8UHDQb.js";import"./ButtonBase-DQo73RHU.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CY6nvIDK.js";import"./Stack-DxavnVeo.js";import"./extendSxProp-Bky6oZpU.js";import"./getThemeProps-1OZ0r_fo.js";import"./useTheme-IOcY49Vw.js";import"./Box-YHUhwqyo.js";import"./AlertTitle-Bu5lgKMW.js";import"./Typography-DtJqdX6z.js";import"./index-0WGr6q2T.js";import"./useTheme-Dzar86kc.js";import"./ClickAwayListener-CxHe6jg0.js";import"./getReactElementRef-Bwg-tl0o.js";import"./index-DkDu69A9.js";import"./index-D7gNMrVA.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BHUIcvLI.js";import"./Tooltip-BCfoCJ3N.js";import"./index-O2jcSvk0.js";import"./useControlled-DAZ0ami4.js";import"./Popper-DFM4tJbE.js";import"./Button-CS10Dyhh.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-asVn40sM.js";import"./QueryClientProvider-BKyAf0tB.js";import"./Link-CW9915Wz.js";import"./Collapse-CAJ9rrC3.js";import"./_baseUniq-CWmT4RJi.js";import"./_Uint8Array-CtkICx9Q.js";import"./isArray-DuW2GSwC.js";import"./_getTag-CAf2_jcI.js";import"./isEqual-C6FBY3EC.js";import"./merge-BxJp-ABZ.js";import"./_initCloneObject-ChSHVE82.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-VmFZ3hHI.js";import"./inputBaseClasses-C3GEILXL.js";import"./calculateFriendlyFileSize-DIzU-93O.js";import"./CheckCircleTwoTone-BYuWZBzO.js";import"./InfoTwoTone-DEsyfpaf.js";import"./useMutation-SVgm8zyG.js";import"./dayjs.min-hV4VZGRn.js";import"./chunk-AYJ5UCUI-CMn21yAC.js";import"./cloneDeep-DjK-kExa.js";import"./Skeleton-DPHcOcIo.js";import"./SkeletonButton-ChAXZehX.js";import"./SkeletonInlineBlock-BLwAhWS1.js";import"./SkeletonTable-z_8UDWH0.js";import"./times-2zdpWNkZ.js";import"./toInteger-CaIb17-K.js";import"./isSymbol-BHVEBhal.js";import"./SkeletonParagraph-f8YmYHFh.js";import"./uniqueId-kfWY_Cel.js";import"./toString-G0TIe1g2.js";import"./CSSTransition-C4V-cm3E.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-Dc6RDG7r.js";import"./Avatar-Bhx28IkX.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
