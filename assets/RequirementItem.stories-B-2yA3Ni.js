import{j as a}from"./jsx-runtime-vh0p6n0c.js";import{m as P}from"./mockWiki-CZdZHQnO.js";import{M as x}from"./MarkdownSynapse-BadScrZ2.js";import{d as s}from"./ToastMessage-CLb_Z42s.js";import{R as n,a as t}from"./RequirementItem-B5sKp7LS.js";import{P as O}from"./Paper-CrvSRQHk.js";import"./index-DeX7QLnK.js";import"./iframe-Dz9QNSIS.js";import"./mock_user_profile-CijvmO8r.js";import"./mock_file_handle-Ct1MSfYs.js";import"./VerificationSubmission-B0kBNeMy.js";import"./useFiles-DQomEVun.js";import"./SynapseConstants-CXcV-nUb.js";import"./OrientationBanner-C_iS06Ns.js";import"./index-B5Paye-i.js";import"./spreadSx-CwcO6WA9.js";import"./react-zapmL7RU.js";import"./FullWidthAlert-BGfrn--X.js";import"./Alert-hlGtq58G.js";import"./createTheme-D_Nq0pYz.js";import"./resolveComponentProps-C3DQMbGC.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-D_vAhRI1.js";import"./createSvgIcon-BLNG6c_9.js";import"./DefaultPropsProvider-tfjonuSR.js";import"./Close-2nHrK--Y.js";import"./IconButton-BE7RjaP6.js";import"./ButtonBase-C0uTtWXh.js";import"./useTimeout-CnvRux1B.js";import"./TransitionGroupContext-Bk5PxsO_.js";import"./useIsFocusVisible-D78Je22A.js";import"./useEventCallback-BvK-inDl.js";import"./Stack-BXqHkzqU.js";import"./getThemeProps-CmqkWx3T.js";import"./useTheme-CU31NEYo.js";import"./Box-FOgVp8fD.js";import"./AlertTitle-Cto3bigq.js";import"./Typography-DnatgZXD.js";import"./useTheme-Bt3ZmCgz.js";import"./Grow-YfXnsoA7.js";import"./index-CoE_GtHh.js";import"./utils-B9T-diIo.js";import"./ClickAwayListener-CqBPamoh.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-B6hgiwNh.js";import"./index-C-slG4EV.js";import"./useControlled-DXoD7LBp.js";import"./useId-VNLmTyT9.js";import"./Popper-DxQPaj6k.js";import"./Button-CgAeDyY5.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-CzgJJW-6.js";import"./useQuery-C6R-wX43.js";import"./utils-E3uMvwn6.js";import"./Link-CxU-Z6uq.js";import"./Collapse-DVKT910h.js";import"./isNil-DRpjLwQd.js";import"./_Uint8Array-DO9JwxIS.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DkxRSzUr.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-BocUTVTM.js";import"./_getTag-Ctolf7Nh.js";import"./tinycolor-Begke6kS.js";import"./Fade-DrP2MKDE.js";import"./Skeleton-BUTy_UuT.js";import"./inputBaseClasses-DiqPll0m.js";import"./calculateFriendlyFileSize-8ac87dam.js";import"./CheckCircleTwoTone-uvYbkrv9.js";import"./InfoTwoTone-BUHLQ4H9.js";import"./mutation-BlIrrZqO.js";import"./dayjs.min-3iMEg4-E.js";import"./chunk-AYJ5UCUI-B8oIr-Ax.js";import"./cloneDeep-BN-Uvubu.js";import"./_initCloneObject-bSDXZj5t.js";import"./isEqual-DX-ARlL8.js";import"./merge-lJvdJtPI.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-QodrV1k1.js";import"./SkeletonInlineBlock-BzoqpDRQ.js";import"./SkeletonTable-DzWxUjn_.js";import"./times-CXVCkMin.js";import"./toInteger-C0wH07DI.js";import"./isSymbol-DiSEgX0Q.js";import"./SkeletonParagraph-OP5oZFIh.js";import"./uniqueId-aH3pAQSh.js";import"./toString-CW6JUJh5.js";import"./CSSTransition-BY2UJcTH.js";import"./ConditionalWrapper-Mx9AlWhg.js";import"./LockTwoTone-zkoAnKIm.js";import"./Avatar-B9lqYdDa.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
