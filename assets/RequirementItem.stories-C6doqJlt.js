import{j as a}from"./jsx-runtime-A9W2czdM.js";import{m as P}from"./mockWiki-BApATWET.js";import{M as x}from"./MarkdownSynapse-CLsKtfPd.js";import{d as s}from"./ToastMessage-BMq4mXEo.js";import{R as n,a as t}from"./RequirementItem-CJAwcG4T.js";import{P as O}from"./Paper-D7I7kF_c.js";import"./index-BFZKnfET.js";import"./iframe-mi3m-uSs.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CnMBfpEV.js";import"./VerificationSubmission-DeH3Sb8D.js";import"./useFiles-B4zpNhuf.js";import"./SynapseConstants-C_MmGiSB.js";import"./OrientationBanner-BSYXm2L9.js";import"./index-B7uZzOz7.js";import"./spreadSx-CwcO6WA9.js";import"./react-C8YIxmMt.js";import"./FullWidthAlert-ChuwXj02.js";import"./Alert-BAIQM6YU.js";import"./createTheme-BdDtZy0O.js";import"./resolveComponentProps-0AXW_HwS.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-DM_Gr1hR.js";import"./createSvgIcon-JBE6eGbI.js";import"./DefaultPropsProvider-B7TQo-eI.js";import"./Close-GTentS_0.js";import"./IconButton-DHV-qBSs.js";import"./ButtonBase-oOx9FjhK.js";import"./useTimeout-DsjFGen0.js";import"./TransitionGroupContext-Dj8Cy1m_.js";import"./useIsFocusVisible-DFTbXIJK.js";import"./useEventCallback-DIA2UmT1.js";import"./Stack-DOrCsrsi.js";import"./getThemeProps-CQ7oTslf.js";import"./useTheme-CQj2XPRO.js";import"./Box-Ba7vUtzE.js";import"./AlertTitle-3huF3rgS.js";import"./Typography-DcjY5Ket.js";import"./useTheme-DBpP0q2e.js";import"./Grow-BPEDSxJK.js";import"./index-lRliZ52m.js";import"./index-C-qha7Of.js";import"./utils-BXeje1kT.js";import"./ClickAwayListener-CtowH6UG.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-Bb5nGE0s.js";import"./index-v2Ki_WPX.js";import"./useControlled-DCLpsVH6.js";import"./useId-Bw3oMwc-.js";import"./Popper-B3-fPGvr.js";import"./Button-CiKevTS7.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-DnD65nWI.js";import"./useQuery-CEzc6Ncz.js";import"./utils-DsCUD75n.js";import"./Link-Cdbh9Yjo.js";import"./Collapse-BjWxAvoi.js";import"./isNil-CoC0wotL.js";import"./_Uint8Array-CUcL-wbP.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CM8O5eHy.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-Bv2-mzDy.js";import"./_getTag-NplZNcJR.js";import"./tinycolor-Begke6kS.js";import"./Fade-dSAzNaxC.js";import"./Skeleton-BWrh50zo.js";import"./inputBaseClasses-BIVu0zbG.js";import"./calculateFriendlyFileSize-CX1Oq2nB.js";import"./CheckCircleTwoTone-t0U7XX7o.js";import"./InfoTwoTone-BbMWH-DU.js";import"./useMutation-CBMAkF_e.js";import"./isEqual-1-gtA63Q.js";import"./dayjs.min-B6vZI5WY.js";import"./chunk-AYJ5UCUI-gWuEHVDL.js";import"./cloneDeep-D04fZAJ3.js";import"./_initCloneObject-DoS7JtrC.js";import"./merge-BDPYq1PB.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-YR7fCVms.js";import"./SkeletonInlineBlock-C90HOqli.js";import"./SkeletonTable-R3ufzFlA.js";import"./times-OidEHqFb.js";import"./toInteger-b7lQU9ts.js";import"./isSymbol-DUIto4ZZ.js";import"./SkeletonParagraph-Ch-o2dD8.js";import"./uniqueId-Cp-t5y6_.js";import"./toString-DUkHXSzG.js";import"./CSSTransition-DqdQRllA.js";import"./ConditionalWrapper-BV2aHneb.js";import"./LockTwoTone-AD9CwN7D.js";import"./Avatar-BUwrK9_4.js";const ur={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
