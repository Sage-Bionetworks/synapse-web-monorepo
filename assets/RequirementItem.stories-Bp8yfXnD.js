import{j as a}from"./jsx-runtime-CbE1-_Hu.js";import{m as P}from"./mockWiki-5OtZEItt.js";import{M as x}from"./MarkdownSynapse-feYU6r02.js";import{d as s}from"./ToastMessage-b9u3wnYp.js";import{R as n,a as t}from"./RequirementItem-BZCYY7SY.js";import{P as O}from"./Paper-CqJ40SAY.js";import"./index-DRsegcgA.js";import"./iframe-DRSrCG1x.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-DwnN5i7-.js";import"./VerificationSubmission-BI5WaB2N.js";import"./useFiles-CAlHmr5T.js";import"./SynapseConstants-bJg229mq.js";import"./OrientationBanner-DGngaujv.js";import"./index-LifXYACQ.js";import"./spreadSx-CwcO6WA9.js";import"./react-DxM2qjbL.js";import"./FullWidthAlert-3uSpNraA.js";import"./Alert-Bw1ywpIE.js";import"./createTheme-C7_V6wpJ.js";import"./resolveComponentProps-BN9HfiQD.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-C78wZDeC.js";import"./createSvgIcon-18JsIaS-.js";import"./DefaultPropsProvider-C12ceKGQ.js";import"./Close-DOqyLWj4.js";import"./IconButton-sxPalBtr.js";import"./ButtonBase-CmnTtM5f.js";import"./useTimeout-DQT_LAZn.js";import"./TransitionGroupContext-OZASuHiR.js";import"./useIsFocusVisible-obP2HoUH.js";import"./useEventCallback-BvBBsNbH.js";import"./Stack-Dg2xMObN.js";import"./getThemeProps-BLKeHxpS.js";import"./useTheme-CQ-aVgZE.js";import"./Box-D2GFn1fE.js";import"./AlertTitle-BCwKsMwc.js";import"./Typography-lU14u2GV.js";import"./useTheme-CRuycb0z.js";import"./Grow-CPE-J13k.js";import"./index-CziNeJdu.js";import"./utils-cOnYn6rO.js";import"./ClickAwayListener-D_gLR8Uu.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-v1tj7X5H.js";import"./index-C7UNvflh.js";import"./useControlled-CujF-W-N.js";import"./useId-C6f6WTtB.js";import"./Popper-IFEDVLcM.js";import"./Button-BVRJ5q5Y.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-BXg3aRdm.js";import"./useQuery-szSrlcgI.js";import"./utils-CsQgGKbD.js";import"./Link-Cm7aV6n7.js";import"./Collapse-CPeMUQEz.js";import"./isNil-qGzJk0AT.js";import"./_Uint8Array-D2WfOTdE.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-Cqjtje0X.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-CV2sNz5h.js";import"./_getTag-C1ILiECS.js";import"./tinycolor-Begke6kS.js";import"./Fade-vW6FvaYU.js";import"./Skeleton-Dgpvxrx_.js";import"./inputBaseClasses-DIfFvLjN.js";import"./calculateFriendlyFileSize-D9Fs0pNs.js";import"./CheckCircleTwoTone-DGPS0HlM.js";import"./InfoTwoTone-DBfE9lFd.js";import"./useMutation-DBuu9s3L.js";import"./isEqual-DE_dUMMt.js";import"./dayjs.min-rU54EIQ-.js";import"./chunk-AYJ5UCUI-CRE7f-_Q.js";import"./cloneDeep-BgDpPnkU.js";import"./_initCloneObject-Dh3qvFnp.js";import"./merge-Bw0szGHI.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-DYVaAb0X.js";import"./SkeletonInlineBlock-CNo-zot-.js";import"./SkeletonTable-CX6FtGwf.js";import"./times-CvYdDYV5.js";import"./toInteger-huepMrbI.js";import"./isSymbol-C30cp9od.js";import"./SkeletonParagraph-CcLfVfMY.js";import"./uniqueId-CkX8RXYg.js";import"./toString-CmzALc6y.js";import"./CSSTransition-CMrkH7H3.js";import"./ConditionalWrapper-BO8DcoKv.js";import"./LockTwoTone-DxxgJZqv.js";import"./Avatar-BSRlJBds.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
