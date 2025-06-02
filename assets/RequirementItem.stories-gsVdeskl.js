import{j as a}from"./jsx-runtime-CJcMkd2a.js";import{m as P}from"./mockWiki-CgjxDh2Q.js";import{M as x}from"./MarkdownSynapse-Eyi6NUs5.js";import{d as s}from"./ToastMessage-Bf6OgIjc.js";import{R as n,a as t}from"./RequirementItem-DKLwUenv.js";import{P as O}from"./Paper-CFO5aWKw.js";import"./index-D8IQqatP.js";import"./iframe-B3klFfb3.js";import"./mock_user_profile-CijvmO8r.js";import"./mock_file_handle-CFTRkxcS.js";import"./VerificationSubmission-BI5WaB2N.js";import"./useFiles-EY5yUS1a.js";import"./SynapseConstants-C9G9oc3F.js";import"./OrientationBanner-D5pstQt3.js";import"./index-BlfPjPPL.js";import"./spreadSx-CwcO6WA9.js";import"./react--3FdDKFe.js";import"./FullWidthAlert-D4yctO1D.js";import"./Alert-HwfZasOY.js";import"./createTheme-BgkRoyWx.js";import"./resolveComponentProps-sTax8ldv.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-BtMPwt5U.js";import"./createSvgIcon-itcnBQV6.js";import"./DefaultPropsProvider-BdAH66gj.js";import"./Close-DHWtdwuS.js";import"./IconButton-DgeU6NWZ.js";import"./ButtonBase-BMm9ZI01.js";import"./useTimeout-CGDmoPwO.js";import"./TransitionGroupContext-BuH8XwDI.js";import"./useIsFocusVisible-CEgQdcXj.js";import"./useEventCallback-CeSGo_7v.js";import"./Stack-CAfo5E6f.js";import"./getThemeProps-_ttmqSlx.js";import"./useTheme-SfVjWsDY.js";import"./Box-DHTTRiCn.js";import"./AlertTitle-D4AVQS7x.js";import"./Typography-B8--A30q.js";import"./useTheme-Bub1kAfA.js";import"./Grow-wiKAnCjf.js";import"./index-zd_GrE0U.js";import"./utils-iLe1jc-J.js";import"./ClickAwayListener-DkoVjmkZ.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BA0zzAb6.js";import"./index-CrmRNCUB.js";import"./useControlled-BWj-QM7C.js";import"./useId-BxUPaSO-.js";import"./Popper-TpTiHex5.js";import"./Button-DPUTJjYo.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-DN6u4g4A.js";import"./useQuery-nEN4f5Ah.js";import"./utils-hetqLS4L.js";import"./Link-D3E1V0rp.js";import"./Collapse-B8HvoXuG.js";import"./isNil-BbTWaJUC.js";import"./_Uint8Array-G2XBJ7Fr.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CeKfXdYG.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-Dkugu-u4.js";import"./_getTag-C38afX1X.js";import"./tinycolor-Begke6kS.js";import"./Fade-B8FJIUU6.js";import"./Skeleton-DMCJU624.js";import"./inputBaseClasses-CYv3VH4x.js";import"./calculateFriendlyFileSize-DwzdMftx.js";import"./CheckCircleTwoTone-D2i9AJR2.js";import"./InfoTwoTone-Cpiy0ZTW.js";import"./useMutation-D7CwHq8T.js";import"./isEqual-BaplPoEC.js";import"./dayjs.min-DuG5OfHn.js";import"./chunk-AYJ5UCUI-D343kYd5.js";import"./cloneDeep-CZ2oFFmE.js";import"./_initCloneObject-Dgntrhkh.js";import"./merge-D1YZpMkh.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-Byf0sJyH.js";import"./SkeletonInlineBlock-ClDau2mo.js";import"./SkeletonTable-DGdP_zVW.js";import"./times-D9cDbckz.js";import"./toInteger-CcmwZD6r.js";import"./isSymbol-DGkBwnAD.js";import"./SkeletonParagraph-CCXrrD9o.js";import"./uniqueId-B775uaMO.js";import"./toString-ldV5xIUu.js";import"./CSSTransition-FIixSl_T.js";import"./ConditionalWrapper-qiCJhBnG.js";import"./LockTwoTone-VXYi6CaP.js";import"./Avatar-BdkAKi1u.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
