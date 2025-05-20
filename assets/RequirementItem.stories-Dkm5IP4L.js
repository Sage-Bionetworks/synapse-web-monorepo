import{j as a}from"./jsx-runtime-BruYoQko.js";import{m as P}from"./mockWiki-B6wTqEDI.js";import{M as x}from"./MarkdownSynapse-DvuTd3Rp.js";import{d as s}from"./ToastMessage-BQMglNkt.js";import{R as n,a as t}from"./RequirementItem-Dk7jrqjR.js";import{P as O}from"./Paper-D4Tga6OS.js";import"./index-B-uy-sdx.js";import"./iframe-EbtsSfNi.js";import"./mock_user_profile-CijvmO8r.js";import"./mock_file_handle-3wYKbysY.js";import"./VerificationSubmission-dxY1kvC5.js";import"./useFiles-Y12FH1bv.js";import"./SynapseConstants-B3NxpShm.js";import"./OrientationBanner-BZu9QjtH.js";import"./index-DomK8mv2.js";import"./spreadSx-CwcO6WA9.js";import"./react-DQ_ckMew.js";import"./FullWidthAlert-Bj0hNDHq.js";import"./Alert-DBLm8Pok.js";import"./createTheme-srFiYvEO.js";import"./resolveComponentProps-B82OG9Zp.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-ChVQG-lw.js";import"./createSvgIcon-2G3uB26y.js";import"./DefaultPropsProvider-DFjoNSbJ.js";import"./Close-Dy69P2Lg.js";import"./IconButton-Dwzx9qi2.js";import"./ButtonBase-DG0zMMeh.js";import"./useTimeout-Cv-QQYzw.js";import"./TransitionGroupContext-n7ftLhnx.js";import"./useIsFocusVisible-DiXQCVbx.js";import"./useEventCallback-C16K_eB4.js";import"./Stack-CZCOHPbK.js";import"./getThemeProps-DeCu2QiA.js";import"./useTheme-Cbn8UOjv.js";import"./Box-Cqz8jNcW.js";import"./AlertTitle-Dludu-yD.js";import"./Typography-oxIQOfGg.js";import"./useTheme-DHXa63_v.js";import"./Grow-CRBk-oNE.js";import"./index-DpIgPCaI.js";import"./utils-BP1xdL2F.js";import"./ClickAwayListener-5g4aG161.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DDQG6vte.js";import"./index-3w0ggcn7.js";import"./useControlled-Baesg9Fm.js";import"./useId-C6yrAKwc.js";import"./Popper-BVfSTFT0.js";import"./Button-BnBdmOxs.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-Df7AZImX.js";import"./useQuery-CZIsftBW.js";import"./utils-D7XdtvjZ.js";import"./Link-CSVa4weM.js";import"./Collapse-BLl7ItWH.js";import"./isNil-1RPAbAz-.js";import"./_Uint8Array-CnGxCulp.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CB51Nx8C.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-CDbb4T68.js";import"./_getTag-CxzBhuc_.js";import"./tinycolor-Begke6kS.js";import"./Fade-D4jjhn0e.js";import"./Skeleton-5aKuyqmQ.js";import"./inputBaseClasses-DSstwJAW.js";import"./calculateFriendlyFileSize-Bglr51Pk.js";import"./CheckCircleTwoTone-BXw1IUwh.js";import"./InfoTwoTone-CjzZE5sW.js";import"./mutation-Cl20WE66.js";import"./dayjs.min-Djvj_XYE.js";import"./chunk-AYJ5UCUI-1wUcRWZS.js";import"./cloneDeep-BWJvylmg.js";import"./_initCloneObject-CmQS0zFf.js";import"./isEqual-BQl57RAj.js";import"./merge-BPZ2_WTR.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-Dw6WOzZd.js";import"./SkeletonInlineBlock-D6EloWLS.js";import"./SkeletonTable-BnBijUlJ.js";import"./times-ClaKe9pp.js";import"./toInteger-BDEI1AM-.js";import"./isSymbol-HDLLyEDe.js";import"./SkeletonParagraph-kYwbggkc.js";import"./uniqueId-BbAHD0e5.js";import"./toString-CBUiyRuQ.js";import"./CSSTransition-D837oJ2c.js";import"./ConditionalWrapper-DTeWeGyq.js";import"./LockTwoTone-D_jziUXH.js";import"./Avatar-kOcUK1ZS.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
