import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CUU_PTHo.js";import{M as x}from"./MarkdownSynapse-Bft9mpKx.js";import{d as s}from"./ToastMessage-Cr-qpdHd.js";import{R as n,a as t}from"./RequirementItem-D1ZLhvUT.js";import{P as O}from"./Paper-D5Ed-jwF.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-Dl3vPZhE.js";import"./VerificationSubmission-CNoSrCdk.js";import"./useFiles-CW6WwbiD.js";import"./SynapseConstants-BsoqDikB.js";import"./OrientationBanner-BN7DsriS.js";import"./index-C6143cPZ.js";import"./index-CeHTzJyp.js";import"./iframe-CRPpa2KP.js";import"./spreadSx-CwcO6WA9.js";import"./react-Hm267hUH.js";import"./FullWidthAlert-CeM3RPEo.js";import"./Alert-BH7e5q2h.js";import"./createTheme-D0jwdMH6.js";import"./DefaultPropsProvider-CNbyjzXA.js";import"./useSlot-Blh8swMU.js";import"./useForkRef-BHeMBZ9A.js";import"./createSimplePaletteValueFilter-BLZB6jXM.js";import"./createSvgIcon-DmkT2sbO.js";import"./Close-CqNAUic4.js";import"./IconButton-D1JdUJVf.js";import"./useTimeout-DuSUC5v5.js";import"./ButtonBase-CyFFJ92C.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-luIUEH-s.js";import"./Stack-DH_3e60E.js";import"./extendSxProp-ao-kpT-0.js";import"./getThemeProps-CmJ_wHji.js";import"./useTheme-DzRx46t8.js";import"./Box-_fu27yuW.js";import"./AlertTitle-Cyy-oy6Z.js";import"./Typography-EPPVSSRU.js";import"./index-DjGhb9rT.js";import"./useTheme-D54EzNLV.js";import"./ClickAwayListener-CpwBEN2t.js";import"./getReactElementRef-Qf8deF3R.js";import"./index--lJFKKqu.js";import"./index-_-J0f0OQ.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CnNkUdh0.js";import"./Tooltip-CWVch6yN.js";import"./index-NFQzg98e.js";import"./useControlled-Qn6GC-e_.js";import"./Popper-BpwnzHmp.js";import"./Button-VoQsandl.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-CwQ1lgbR.js";import"./useQuery-DF_TajiR.js";import"./QueryClientProvider-DysUnEIb.js";import"./Link-JFKDsYEI.js";import"./Collapse-CVpMFzBG.js";import"./_baseUniq-BLdjdo5_.js";import"./_Uint8Array-Dnll8ZdL.js";import"./isArray-Dy3KJCqk.js";import"./_getTag-DFGN5r_7.js";import"./isEqual-CBx4vvAz.js";import"./merge-BSWrWw_g.js";import"./_initCloneObject-BxCU3HsA.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-_onL1Bmv.js";import"./inputBaseClasses-_kG_KU0z.js";import"./calculateFriendlyFileSize-6alSNTxW.js";import"./CheckCircleTwoTone-CcyJnJAE.js";import"./InfoTwoTone-NfSk4DBl.js";import"./useMutation-9xt_MpMS.js";import"./dayjs.min-pPdGcl-0.js";import"./chunk-AYJ5UCUI-F0wUneiu.js";import"./cloneDeep-BrXhEFPe.js";import"./Skeleton-ChNcqWa3.js";import"./SkeletonButton-D1DJH1UQ.js";import"./SkeletonInlineBlock-MXTboN3G.js";import"./SkeletonTable-8wbQbecP.js";import"./times-s-DeH9BV.js";import"./toInteger-BsJh0IvQ.js";import"./isSymbol-OwFO4YC0.js";import"./SkeletonParagraph-DEGKQ-zu.js";import"./uniqueId-BmaZxpPt.js";import"./toString-C-i_ffcn.js";import"./CSSTransition-D7qhh7CG.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-CHtA1Xjk.js";import"./Avatar-xxEAkT7q.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
