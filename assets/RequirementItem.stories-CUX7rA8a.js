import{j as a}from"./jsx-runtime-t7nzLwR6.js";import{m as P}from"./mockWiki-BApATWET.js";import{M as x}from"./MarkdownSynapse-B8SUrDdx.js";import{d as s}from"./ToastMessage-CLrnDUIq.js";import{R as n,a as t}from"./RequirementItem-DjbCw1TB.js";import{P as O}from"./Paper-D7sTNj9_.js";import"./index-cFSMVzyl.js";import"./iframe-DKD27Aac.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CnMBfpEV.js";import"./VerificationSubmission-DeH3Sb8D.js";import"./useFiles-Chac2RhS.js";import"./SynapseConstants-CaV0aczn.js";import"./OrientationBanner-CifHGxH6.js";import"./index-CJHekc_g.js";import"./spreadSx-CwcO6WA9.js";import"./react-OHL4fBky.js";import"./FullWidthAlert-sMrqvYnE.js";import"./Alert-D6XYsjCG.js";import"./createTheme-BR5rdewz.js";import"./resolveComponentProps-CYx1wNx9.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-BNzkLrh_.js";import"./createSvgIcon-CopB8Zvr.js";import"./DefaultPropsProvider-BUqR-A8n.js";import"./Close-Dzp-VmMJ.js";import"./IconButton-BnC2txGx.js";import"./ButtonBase-DAHKIKHs.js";import"./useTimeout-Bc3Gkepm.js";import"./TransitionGroupContext-CKv4C-Ss.js";import"./useIsFocusVisible-D0xbJsl_.js";import"./useEventCallback-C85vUDBQ.js";import"./Stack-q5ZhcqOi.js";import"./getThemeProps-DVXcGSou.js";import"./useTheme-CFHXXkX7.js";import"./Box-DotcFFrl.js";import"./AlertTitle-KdJRXupe.js";import"./Typography-BCNKC2CY.js";import"./useTheme-BxJ7UB_H.js";import"./Grow-C-JXdThM.js";import"./index-CijgDh8G.js";import"./index-Cm204n_1.js";import"./utils-DPdtmkgT.js";import"./ClickAwayListener-ClTYn5DI.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DEo0wzG2.js";import"./index-BMYz7LsA.js";import"./useControlled-Bndl0fHX.js";import"./useId-C8qhAs8K.js";import"./Popper-Bo9vPwbV.js";import"./Button-cG6J_qke.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-DnD65nWI.js";import"./useQuery-BexgRkXn.js";import"./utils-blHiKMBb.js";import"./Link-C0DicHDj.js";import"./Collapse-CnIdpWtH.js";import"./isNil-DXPfN7iZ.js";import"./_Uint8Array-BwS4hwgo.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CIljAEIO.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-BCshueuy.js";import"./_getTag-BsOLditL.js";import"./tinycolor-Begke6kS.js";import"./Fade-Cq1nCkoD.js";import"./Skeleton-DwACn00x.js";import"./inputBaseClasses-CNGHxOqR.js";import"./calculateFriendlyFileSize-CKIdmAEX.js";import"./CheckCircleTwoTone-D87QIBtx.js";import"./InfoTwoTone-Bqi97e1S.js";import"./useMutation-DSaHpUt5.js";import"./isEqual-Bw_JKzqf.js";import"./dayjs.min-DIt2UEU-.js";import"./chunk-AYJ5UCUI-DQUP4H-R.js";import"./cloneDeep-BnG_5coh.js";import"./_initCloneObject-CUf0bY0V.js";import"./merge-D2TlrVsP.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-C5yPZiIL.js";import"./SkeletonInlineBlock-CMDYk5x7.js";import"./SkeletonTable-DqGi1C9W.js";import"./times-BYBE5rRo.js";import"./toInteger-CXNa6dSp.js";import"./isSymbol-TdfIdWkk.js";import"./SkeletonParagraph-DYgXPDqz.js";import"./uniqueId-DWUtQVVC.js";import"./toString-Jav208Xy.js";import"./CSSTransition-DgMHXr72.js";import"./ConditionalWrapper-DV0pgLdG.js";import"./LockTwoTone-M1LpCdrg.js";import"./Avatar-DFon6CNs.js";const ur={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
