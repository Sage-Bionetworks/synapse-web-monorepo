import{j as a}from"./jsx-runtime-7YCwI36c.js";import{m as P}from"./mockWiki-B6wTqEDI.js";import{M as x}from"./MarkdownSynapse-0AMtaR7N.js";import{d as s}from"./ToastMessage-lF-uOunD.js";import{R as n,a as t}from"./RequirementItem-5Hsm0y8d.js";import{P as O}from"./Paper-DxH-uwW9.js";import"./index-C9M_il_J.js";import"./iframe-M2uNqdbL.js";import"./mock_user_profile-CijvmO8r.js";import"./mock_file_handle-3wYKbysY.js";import"./VerificationSubmission-dxY1kvC5.js";import"./useFiles-B5k0fHaK.js";import"./SynapseConstants-BV0-4_QF.js";import"./OrientationBanner-DjGZBNPH.js";import"./index-DZTeTwJ3.js";import"./spreadSx-CwcO6WA9.js";import"./react-Cqi5Udnm.js";import"./FullWidthAlert-CPVIz4Wz.js";import"./Alert-DHZvlRwT.js";import"./createTheme-SdSk3wwD.js";import"./resolveComponentProps-C_boa-fy.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-_q_7mTIm.js";import"./createSvgIcon-BkJZknfb.js";import"./DefaultPropsProvider-CJvfCKAu.js";import"./Close-BiyTYcOV.js";import"./IconButton-PbRpfjbr.js";import"./ButtonBase-CtFMKvXy.js";import"./useTimeout-B8yFsaAv.js";import"./TransitionGroupContext-DOB4L6KT.js";import"./useIsFocusVisible-CqlXx1mp.js";import"./useEventCallback-C8kim-Rr.js";import"./Stack-d5e5w4Ye.js";import"./getThemeProps-DOjU9IFn.js";import"./useTheme-B-J_FYJg.js";import"./Box-CVywjUOl.js";import"./AlertTitle-qqPjl8D9.js";import"./Typography-tuEHvF3F.js";import"./useTheme-CL4VxzvZ.js";import"./Grow-CGZtvPFd.js";import"./index-BUMelamN.js";import"./utils-Ecsgz-ex.js";import"./ClickAwayListener-CulQoVsa.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-5lCyVYpl.js";import"./index-cAvLThiO.js";import"./useControlled-Dl6X9RP0.js";import"./useId-CnHJMbo3.js";import"./Popper-iF4jELXw.js";import"./Button-DAfmUnv3.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-Df7AZImX.js";import"./useQuery-Bw2Txi7_.js";import"./utils-DvoQ-FO4.js";import"./Link-YOi7hgdm.js";import"./Collapse-VY5dXbQp.js";import"./isNil-C1cHp62C.js";import"./_Uint8Array-CRKTzfcx.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-B9wu438U.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-BD0mzzJ-.js";import"./_getTag-DZdP02yz.js";import"./tinycolor-Begke6kS.js";import"./Fade-CWwsiTWC.js";import"./Skeleton-CLO42135.js";import"./inputBaseClasses-CDZZCPli.js";import"./calculateFriendlyFileSize-s4H5ytOs.js";import"./CheckCircleTwoTone-QFBnsBZD.js";import"./InfoTwoTone-COYXC-bl.js";import"./mutation-Dso9fTIz.js";import"./dayjs.min-CxuSaHVW.js";import"./chunk-AYJ5UCUI-CPoEp2kj.js";import"./cloneDeep-CD-IgKhG.js";import"./_initCloneObject-STI8wTbS.js";import"./isEqual-C0SwGJ7g.js";import"./merge-DAUGgmio.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-BeloOnh2.js";import"./SkeletonInlineBlock-CRLerYnI.js";import"./SkeletonTable-BfrBNQWe.js";import"./times-DmQE_leI.js";import"./toInteger-CxwQ7579.js";import"./isSymbol-DfKo8OMF.js";import"./SkeletonParagraph-CzsmpWQX.js";import"./uniqueId-Dvw_UZkQ.js";import"./toString-CgvljhA6.js";import"./CSSTransition-BgBiq1wL.js";import"./ConditionalWrapper-Gtljh7eP.js";import"./LockTwoTone-D6VKUj8g.js";import"./Avatar-LSrOfcFm.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
