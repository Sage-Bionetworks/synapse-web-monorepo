import{j as a}from"./jsx-runtime-DfABaRRm.js";import{m as P}from"./mockWiki-DHj13qiO.js";import{M as x}from"./MarkdownSynapse-5mtGjM53.js";import{d as s}from"./ToastMessage-jt97Ts-x.js";import{R as n,a as t}from"./RequirementItem-BiwRSZmd.js";import{P as O}from"./Paper-LaDS8bEp.js";import"./index-DYlxwmQf.js";import"./iframe-N_SCbRud.js";import"./mock_user_profile-CijvmO8r.js";import"./mock_file_handle-DS_yjaGE.js";import"./VerificationSubmission-DsgC4t7y.js";import"./useFiles-B_YGx59Q.js";import"./SynapseConstants-CgNOmtbB.js";import"./OrientationBanner-tFttoDJP.js";import"./index-B6ZDsx2K.js";import"./spreadSx-CwcO6WA9.js";import"./react-fTEcXI9d.js";import"./FullWidthAlert-BkSSmOGu.js";import"./Alert-DZ4FxOIp.js";import"./createTheme-B7j6gmB9.js";import"./resolveComponentProps-Dk7HmJ2Q.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-pxSTpRRe.js";import"./createSvgIcon-C1r-9WuP.js";import"./DefaultPropsProvider-zBbok_Rg.js";import"./Close-DTAljvJz.js";import"./IconButton-CtrWpawg.js";import"./ButtonBase-BvEMQRg-.js";import"./useTimeout-DZ-OqC0g.js";import"./TransitionGroupContext-Dyr4l5YQ.js";import"./useIsFocusVisible-BStVjJ1N.js";import"./useEventCallback-Hfhvhsjq.js";import"./Stack-BuqrQrvy.js";import"./getThemeProps-qtNr_xPF.js";import"./useTheme-Dtm1qci2.js";import"./Box-BqS2LAmE.js";import"./AlertTitle-BWu0j2xR.js";import"./Typography-CeIa-fZn.js";import"./useTheme-Jk5FIvWn.js";import"./Grow-BehhM4N7.js";import"./index-CeyVdOhP.js";import"./utils-BKSSoB6B.js";import"./ClickAwayListener-B9uGoLeK.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DdV7RVVG.js";import"./index-Dj_6vp2Q.js";import"./useControlled-YFKV2F2n.js";import"./useId-ebMPsm6_.js";import"./Popper-Crl-0kzB.js";import"./Button-CYmbjpql.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-tNCAfVhp.js";import"./useQuery-RqcQXr6l.js";import"./utils-7vG6A43c.js";import"./Link-C4XBdo-g.js";import"./Collapse-hevKOALZ.js";import"./isNil-BgiRU2Us.js";import"./_Uint8Array-Capyws4v.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-IRS_VwDX.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-DxRvwVdk.js";import"./_getTag-DYVojOvt.js";import"./tinycolor-Begke6kS.js";import"./Fade-CCfhYHs2.js";import"./Skeleton-DeHRU0rh.js";import"./inputBaseClasses-DuedhsRY.js";import"./calculateFriendlyFileSize-Wtc8EXbC.js";import"./CheckCircleTwoTone-Bo9T9_TT.js";import"./InfoTwoTone-BEe_0-jU.js";import"./mutation-BY_OAeuj.js";import"./dayjs.min-Cm4ygt_D.js";import"./chunk-AYJ5UCUI-CmQNpgxF.js";import"./cloneDeep-IiHMspIc.js";import"./_initCloneObject-DuN2pDEt.js";import"./isEqual-D6ItS3N1.js";import"./merge-0Cc2NZpY.js";import"./identity-DKeuBCMA.js";import"./useMutation-QxWOl32L.js";import"./SkeletonButton-BEKl1r2o.js";import"./SkeletonInlineBlock-DrElrzsD.js";import"./SkeletonTable-BCs-xQQb.js";import"./times-Ceor9oVU.js";import"./toInteger-4FVoJAF9.js";import"./isSymbol-B0Bx6SJu.js";import"./SkeletonParagraph-CZKCQyEv.js";import"./uniqueId-BO_i-R7g.js";import"./toString-Bhze4qLh.js";import"./CSSTransition-CSEOwPKZ.js";import"./ConditionalWrapper-DiwyzPLJ.js";import"./LockTwoTone-Ci8sgrcf.js";import"./Avatar-Bd4JdRWL.js";const ur={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(q=(I=m.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};const lr=["Complete","Pending","Loading","NoActions","Locked"];export{r as Complete,e as Loading,m as Locked,i as NoActions,o as Pending,lr as __namedExportsOrder,ur as default};
