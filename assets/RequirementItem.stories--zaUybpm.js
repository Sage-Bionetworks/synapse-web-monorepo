import{j as a}from"./jsx-runtime-Dsxiie4O.js";import{m as P}from"./mockWiki-CfZ4orwO.js";import{M as x}from"./MarkdownSynapse-D9obVd6D.js";import{d as s}from"./ToastMessage-BHRp04gc.js";import{R as n,a as t}from"./RequirementItem-eEoy3N4y.js";import{P as O}from"./Paper-l-MCLhHw.js";import"./index-ozCXQmXK.js";import"./iframe-DBa0zw63.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-qAzg5fnb.js";import"./VerificationSubmission-DKyendrM.js";import"./useFiles-oSmayrgb.js";import"./SynapseConstants-CmDV7LJl.js";import"./OrientationBanner-CWhi3zg5.js";import"./index-BpXNIs1b.js";import"./spreadSx-CwcO6WA9.js";import"./react-PYrrZijh.js";import"./FullWidthAlert-Btm-U5IG.js";import"./Alert-DP1_O_Op.js";import"./createTheme-UtkSgkJ5.js";import"./DefaultPropsProvider-C6msV3y5.js";import"./useSlot-DyxcO-8h.js";import"./useForkRef-CM_8X8JG.js";import"./createSimplePaletteValueFilter-oVw5J_Tg.js";import"./createSvgIcon-iHhGnJmX.js";import"./Close-BgcWAJXU.js";import"./IconButton-CoOLAPia.js";import"./useTimeout-CSLyroTm.js";import"./ButtonBase-Bi7HMFSp.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DtpXaq6s.js";import"./Stack-676sv6cj.js";import"./extendSxProp-DGJ7aC89.js";import"./getThemeProps-C3MpcSFV.js";import"./useTheme-D-q36Oyl.js";import"./Box-Bd1fGSNz.js";import"./AlertTitle-D1nRI2mq.js";import"./Typography-DSBe8cx6.js";import"./index-CxoHuccO.js";import"./useTheme-DDadPh-C.js";import"./ClickAwayListener-B_vokaBZ.js";import"./getReactElementRef-OnZXrax0.js";import"./index-B_ofmTQg.js";import"./index-395S_cOO.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BdozJXIw.js";import"./Tooltip-C4-mgBsw.js";import"./index-Xy4tmEMf.js";import"./useControlled-C_aa8L--.js";import"./Popper-CbLcG8Xr.js";import"./Button-DVSuhCm2.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BcSmk1fX.js";import"./useQuery-BS7IYLBJ.js";import"./utils-CV6o2mhJ.js";import"./Link-Dx31m3OI.js";import"./Collapse-B1doriDK.js";import"./isNil-B5lyzHs4.js";import"./_Uint8Array-UOAAI0_f.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CoyN0E90.js";import"./isArray-Dxzbedgu.js";import"./isEqual-Bgi5hVtE.js";import"./_getTag-CqA7yl5M.js";import"./tinycolor-Begke6kS.js";import"./Fade-CtrqRvNM.js";import"./inputBaseClasses-ChXFSYt8.js";import"./calculateFriendlyFileSize-ue3PtNra.js";import"./CheckCircleTwoTone-Ch9oq8xX.js";import"./InfoTwoTone-BkALBS8a.js";import"./useMutation-yogh6qC8.js";import"./dayjs.min-DsaPcPSf.js";import"./chunk-AYJ5UCUI-GviuCA7M.js";import"./cloneDeep-C71O9hUJ.js";import"./_initCloneObject-CHLE_018.js";import"./Skeleton-BGL6qrPJ.js";import"./merge-BN2Rtmpw.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-xIZRiltY.js";import"./SkeletonInlineBlock-DDhncQ8i.js";import"./SkeletonTable-CsAp1lBM.js";import"./times-DQV6lj_w.js";import"./toInteger-geM4jax_.js";import"./isSymbol-CG_HonVu.js";import"./SkeletonParagraph-CXrUbMXj.js";import"./uniqueId-CNrv-xiJ.js";import"./toString-CU3zS0DJ.js";import"./CSSTransition-2uHk758b.js";import"./ConditionalWrapper-4Y3LCg_P.js";import"./LockTwoTone-DM12lBOr.js";import"./Avatar-aEAYohKA.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
