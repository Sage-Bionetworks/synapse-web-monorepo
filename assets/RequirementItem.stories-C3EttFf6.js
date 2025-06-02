import{j as a}from"./jsx-runtime-CXqxCHrr.js";import{m as P}from"./mockWiki-DiBhlaV-.js";import{M as x}from"./MarkdownSynapse-BbrCkaT4.js";import{d as s}from"./ToastMessage-CV9QWVfw.js";import{R as n,a as t}from"./RequirementItem-Bt4Lzxyn.js";import{P as O}from"./Paper-CiYpDnEl.js";import"./index-chvr4nzo.js";import"./iframe-mEF7r3QC.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-C2NjfX48.js";import"./VerificationSubmission-DHPhgAH7.js";import"./useFiles-zmIgDHgj.js";import"./SynapseConstants-B7Xg8pkB.js";import"./OrientationBanner-BM51AJT8.js";import"./index-Cvd5NvQW.js";import"./spreadSx-CwcO6WA9.js";import"./react-BD6rhIxb.js";import"./FullWidthAlert-6C2VnmRK.js";import"./Alert-9xz83nqa.js";import"./createTheme-BPHeU5pH.js";import"./resolveComponentProps-CbO5b_W8.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CaxDp9Tt.js";import"./createSvgIcon-Dtr3C6X8.js";import"./DefaultPropsProvider-CQhminKs.js";import"./Close-BIQ5NLvL.js";import"./IconButton-CnvaAokU.js";import"./ButtonBase-BLchPz6_.js";import"./useTimeout-BWWIDppC.js";import"./TransitionGroupContext-DyGj_AR7.js";import"./useIsFocusVisible-B8jESHd6.js";import"./useEventCallback-DLF8tsWn.js";import"./Stack-Cqm_sIC4.js";import"./getThemeProps-svO4y_8_.js";import"./useTheme-CxHbQHwg.js";import"./Box-DhrCRVep.js";import"./AlertTitle-BiQA2OHP.js";import"./Typography-TPoZq6Wq.js";import"./useTheme-BltnVY5I.js";import"./Grow-DruuI62p.js";import"./index-B5S9-Spv.js";import"./utils-B6LfoJiy.js";import"./ClickAwayListener-BLAWwxqk.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-3yxV1myM.js";import"./index-HXVr3Mau.js";import"./useControlled-WEflZAwQ.js";import"./useId-B8wqeFko.js";import"./Popper-B5wcKjOJ.js";import"./Button-BpvCZV0i.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-Bj0SG9ce.js";import"./useQuery-Dy_B_T4H.js";import"./utils-Dl0-3C1y.js";import"./Link-7m1R2YkZ.js";import"./Collapse-BEP1-Zw5.js";import"./isNil-DDPeQmp8.js";import"./_Uint8Array-z-B_nzR7.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-IzodiS5Q.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-dyv7qhgE.js";import"./_getTag-B5Qu8EDV.js";import"./tinycolor-Begke6kS.js";import"./Fade-sswq0Zcs.js";import"./Skeleton-BetMcy4d.js";import"./inputBaseClasses-B8luTHJ2.js";import"./calculateFriendlyFileSize-JSfKWotV.js";import"./CheckCircleTwoTone-kEK2dVkR.js";import"./InfoTwoTone-DHKS4jcI.js";import"./useMutation-VbtcAGxp.js";import"./isEqual-B86MZMBQ.js";import"./dayjs.min-BdvEa-tw.js";import"./chunk-AYJ5UCUI-BN6H7asg.js";import"./cloneDeep-BJ-BOCet.js";import"./_initCloneObject-CMW1C9rS.js";import"./merge-vKDFgieM.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-Cb2217s4.js";import"./SkeletonInlineBlock-B6IpNbJK.js";import"./SkeletonTable-BZB15oC3.js";import"./times-DWGtqSst.js";import"./toInteger-CYxypN5Y.js";import"./isSymbol-BORYxnqm.js";import"./SkeletonParagraph-aLo-jbSt.js";import"./uniqueId-VnPzv2Vz.js";import"./toString-y7XO4Sie.js";import"./CSSTransition-1GiflfXz.js";import"./ConditionalWrapper-CNzJZLgp.js";import"./LockTwoTone-BrLSIPbo.js";import"./Avatar-BEuXTdgC.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
