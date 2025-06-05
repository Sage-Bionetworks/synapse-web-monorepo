import{j as a}from"./jsx-runtime-DMre8F17.js";import{m as P}from"./mockWiki-DiBhlaV-.js";import{M as x}from"./MarkdownSynapse-BfODVAvp.js";import{d as s}from"./ToastMessage-CAIG0ozo.js";import{R as n,a as t}from"./RequirementItem-B_mP50B1.js";import{P as O}from"./Paper-2bbvmWyl.js";import"./index-BAuVHV2z.js";import"./iframe-OI0nEnmn.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-C2NjfX48.js";import"./VerificationSubmission-DHPhgAH7.js";import"./useFiles-CAS_QhlS.js";import"./SynapseConstants-oxozjXiE.js";import"./OrientationBanner-D5pw8BSu.js";import"./index-D6eIipcS.js";import"./spreadSx-CwcO6WA9.js";import"./react-B8rHlrBa.js";import"./FullWidthAlert-yVU6QIpW.js";import"./Alert-Bmvy0Okm.js";import"./createTheme-BB1S4NEt.js";import"./resolveComponentProps-DF96h0Eq.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-u21J4taN.js";import"./createSvgIcon-D0kdEjIj.js";import"./DefaultPropsProvider-Cq1pa9G2.js";import"./Close-CcZGAq3X.js";import"./IconButton-8W9a9RnF.js";import"./ButtonBase-BaQs7_Pa.js";import"./useTimeout-pAtqERQv.js";import"./TransitionGroupContext-BNPxgiLu.js";import"./useIsFocusVisible-DfUxaCJB.js";import"./useEventCallback-DAxHKips.js";import"./Stack-CTUsYAii.js";import"./getThemeProps-B1TL05kh.js";import"./useTheme-B1Sv5EJG.js";import"./Box-DIA65-hd.js";import"./AlertTitle-D9nMGlyg.js";import"./Typography-CTMq_pdk.js";import"./useTheme-B8P1yjh0.js";import"./Grow-CPqua1HP.js";import"./index-DSD_JLMH.js";import"./utils-DOe16nNH.js";import"./ClickAwayListener-1SXS2RHr.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DuZFgwly.js";import"./index-CR-BbFJG.js";import"./useControlled-BGfTKx8L.js";import"./useId-BaHTv3Ol.js";import"./Popper-BATOstVY.js";import"./Button-9_gAD86Z.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-Bj0SG9ce.js";import"./useQuery-B2-wbKIs.js";import"./utils-CILTy0he.js";import"./Link-C-2XG2Lr.js";import"./Collapse-DTOGVf0W.js";import"./isNil-BTdFIcRc.js";import"./_Uint8Array-d9oc9a-e.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DS50Q_-r.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-DAhZrM2m.js";import"./_getTag-TV9QcuB2.js";import"./tinycolor-Begke6kS.js";import"./Fade-1XXXk4ux.js";import"./Skeleton-DFEpqHx_.js";import"./inputBaseClasses-C7D8GWl7.js";import"./calculateFriendlyFileSize-Dz_VodOE.js";import"./CheckCircleTwoTone-D0Rd8YBH.js";import"./InfoTwoTone-D4EKW_HA.js";import"./useMutation-CENJvQo9.js";import"./isEqual-DpbblXQH.js";import"./dayjs.min-cdOwOoLt.js";import"./chunk-AYJ5UCUI-BkWiTWCP.js";import"./cloneDeep-nAHUzRQX.js";import"./_initCloneObject-BLowrZgy.js";import"./merge-Bij2bwXJ.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-cJmG53Bo.js";import"./SkeletonInlineBlock-CrkrprES.js";import"./SkeletonTable-B7DHBoY7.js";import"./times-C3mWkCiT.js";import"./toInteger-Bdwl_-HA.js";import"./isSymbol-DOjDjtCt.js";import"./SkeletonParagraph-BfSY4gRW.js";import"./uniqueId-C6G0gjvU.js";import"./toString-BZECR69S.js";import"./CSSTransition-BLr-tWYS.js";import"./ConditionalWrapper-DBZDKE2N.js";import"./LockTwoTone-CzEv5eBP.js";import"./Avatar-P_2I9hFh.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
