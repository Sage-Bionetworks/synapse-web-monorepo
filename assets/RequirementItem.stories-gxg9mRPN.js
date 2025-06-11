import{j as a}from"./jsx-runtime-D-SIz4dp.js";import{m as P}from"./mockWiki-BApATWET.js";import{M as x}from"./MarkdownSynapse-C-ocxpNm.js";import{d as s}from"./ToastMessage-C9ozZOLH.js";import{R as n,a as t}from"./RequirementItem-BPsbwMJ8.js";import{P as O}from"./Paper-CdNeJFNE.js";import"./index-BLuaxJdW.js";import"./iframe-CxrlH-UI.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CnMBfpEV.js";import"./VerificationSubmission-DeH3Sb8D.js";import"./useFiles-COZ3D8Pb.js";import"./SynapseConstants-D1CsS0Aw.js";import"./OrientationBanner-Bj2dzKdS.js";import"./index-CFpaM8Ff.js";import"./spreadSx-CwcO6WA9.js";import"./react-CHlwk2vY.js";import"./FullWidthAlert-Wy0jujek.js";import"./Alert-C4CDJvJg.js";import"./createTheme-S8Q4mGOR.js";import"./resolveComponentProps-C8zUe1-b.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-BZmE9xQ1.js";import"./createSvgIcon-DzOZPvez.js";import"./DefaultPropsProvider-BRIp68wO.js";import"./Close--r-tDnVu.js";import"./IconButton-Dnf2admd.js";import"./ButtonBase-Du0xZvK7.js";import"./useTimeout-BHizVNke.js";import"./TransitionGroupContext-CBfo3lPh.js";import"./useIsFocusVisible-C9iDuxMa.js";import"./useEventCallback-7PrR0BNk.js";import"./Stack-BASWcXp5.js";import"./getThemeProps-BTboRhU5.js";import"./useTheme-DlmvRUoH.js";import"./Box-BOLLHwzU.js";import"./AlertTitle-CFar63C5.js";import"./Typography-CXTgn5CW.js";import"./useTheme-bwhPJ5ej.js";import"./Grow-BdkgkUoo.js";import"./index-BIBC-Xvs.js";import"./index-O_gqoASv.js";import"./utils-DcthfRLI.js";import"./ClickAwayListener-olWHxvjF.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-CxJlSVKY.js";import"./index-B3MqhP5R.js";import"./useControlled-DnY_Lsz4.js";import"./useId-iggO9Yr1.js";import"./Popper-CNjlG3Og.js";import"./Button-BMCKPFxv.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-DnD65nWI.js";import"./useQuery-DfcEbLSx.js";import"./utils-C1AHUSnA.js";import"./Link-D2iDHteP.js";import"./Collapse-Ceenf30l.js";import"./isNil-CEqFAbnq.js";import"./_Uint8Array-BQwdA60x.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-BA_OKhSB.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-YfFDVDRM.js";import"./_getTag-WASBG7Tx.js";import"./tinycolor-Begke6kS.js";import"./Fade-DdptOtF4.js";import"./Skeleton-B63x20rp.js";import"./inputBaseClasses-Cx4EW-PM.js";import"./calculateFriendlyFileSize-C_g4Kf21.js";import"./CheckCircleTwoTone-B4BK1dw-.js";import"./InfoTwoTone-D4SXfyiz.js";import"./useMutation-DBzjiDwy.js";import"./isEqual-ChwobQoe.js";import"./dayjs.min-DXYVsqcY.js";import"./chunk-AYJ5UCUI-DVkLiOiO.js";import"./cloneDeep-D2vzQCip.js";import"./_initCloneObject-DHyYjQDp.js";import"./merge-s1MKyKKY.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-1DW6t088.js";import"./SkeletonInlineBlock-DXA4UXcO.js";import"./SkeletonTable-BDaPT2zk.js";import"./times-CXeMY7Sm.js";import"./toInteger-DLF-5FHA.js";import"./isSymbol-C4noEUGp.js";import"./SkeletonParagraph-Cvcp0SVT.js";import"./uniqueId-DD85uhuT.js";import"./toString-Cww0W2Pd.js";import"./CSSTransition-CYi4NlHK.js";import"./ConditionalWrapper-DmAok86v.js";import"./LockTwoTone-BhtVZuW8.js";import"./Avatar-DbO0Gz0u.js";const ur={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
