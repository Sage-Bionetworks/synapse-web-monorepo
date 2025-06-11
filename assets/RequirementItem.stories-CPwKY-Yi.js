import{j as a}from"./jsx-runtime-DAaBWb6T.js";import{m as P}from"./mockWiki-BApATWET.js";import{M as x}from"./MarkdownSynapse-CbndSvSG.js";import{d as s}from"./ToastMessage-DSyp--fG.js";import{R as n,a as t}from"./RequirementItem-DJTWmqmQ.js";import{P as O}from"./Paper-C2wh6oGd.js";import"./index-Xf1O9ikp.js";import"./iframe-B_m65hDw.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CnMBfpEV.js";import"./VerificationSubmission-DeH3Sb8D.js";import"./useFiles-BKBPcS9M.js";import"./SynapseConstants-BXkC6V3M.js";import"./OrientationBanner-Bt5KXMld.js";import"./index-CieDzUgj.js";import"./spreadSx-CwcO6WA9.js";import"./react-DiYhiNSX.js";import"./FullWidthAlert-D9puXSMj.js";import"./Alert-CUF8LNAO.js";import"./createTheme-BPsmSStf.js";import"./resolveComponentProps-KJNM2QOM.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-WI0T7G2k.js";import"./createSvgIcon-DVx6_utu.js";import"./DefaultPropsProvider-DUU6Afn6.js";import"./Close-DxKhXCXb.js";import"./IconButton-B14I6JZ-.js";import"./ButtonBase-DbIQbHcr.js";import"./useTimeout-z16zSBtj.js";import"./TransitionGroupContext-BaEufJrg.js";import"./useIsFocusVisible-Dn-kQzBe.js";import"./useEventCallback-73R0Cdtm.js";import"./Stack-D6_yLpjr.js";import"./getThemeProps-By9ePiKq.js";import"./useTheme-Dep3Rwvi.js";import"./Box-DNeDBxyL.js";import"./AlertTitle-Dza9sH2Z.js";import"./Typography-BPIqdMo0.js";import"./useTheme-BhvIEHTS.js";import"./Grow-CgBPa8pa.js";import"./index-DuBLUsaX.js";import"./index-DwjutXdk.js";import"./utils-DliwND9M.js";import"./ClickAwayListener-MoU-q8dh.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-C5shgk-b.js";import"./index-DFaDYC1h.js";import"./useControlled-CupxzkdF.js";import"./useId-ByR0Yxjm.js";import"./Popper-BQ1y8daP.js";import"./Button-DHXbStV7.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-DnD65nWI.js";import"./useQuery-B5vmFQja.js";import"./utils-MZ8GUwUF.js";import"./Link-BDB2c8Gp.js";import"./Collapse-B3JvYKsm.js";import"./isNil-CR6lfaE1.js";import"./_Uint8Array-BOx5P9Xc.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-BiKz2sgZ.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-B_rVxBBn.js";import"./_getTag-QLWgiDxt.js";import"./tinycolor-Begke6kS.js";import"./Fade-Bfw_JdGm.js";import"./Skeleton-BeDwOILI.js";import"./inputBaseClasses-B5hzMWUB.js";import"./calculateFriendlyFileSize-B-7MNgb2.js";import"./CheckCircleTwoTone-BiiCvHDT.js";import"./InfoTwoTone-C5a1d32_.js";import"./useMutation-B3eiPWdA.js";import"./isEqual-Bl4BOS8c.js";import"./dayjs.min-B3_BjScJ.js";import"./chunk-AYJ5UCUI-DbD2EPuZ.js";import"./cloneDeep-HsP7Or5O.js";import"./_initCloneObject-T_9F4B_P.js";import"./merge-DiosaRoA.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-Bid81Kut.js";import"./SkeletonInlineBlock-L9Ix-OEp.js";import"./SkeletonTable-CcwS9YGK.js";import"./times-RAX8rljD.js";import"./toInteger-C65nZ_78.js";import"./isSymbol-CymDGICD.js";import"./SkeletonParagraph-CPKTXhNR.js";import"./uniqueId-DbjfqCsI.js";import"./toString-BItIQ-7f.js";import"./CSSTransition-ZMfeCLaM.js";import"./ConditionalWrapper-D5fqzrfV.js";import"./LockTwoTone-DTxKYfdR.js";import"./Avatar-B7OMZ-jf.js";const ur={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
