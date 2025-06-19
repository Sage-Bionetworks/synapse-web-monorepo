import{j as a}from"./jsx-runtime-CxQJGWmB.js";import{m as P}from"./mockWiki-CUQx1XWq.js";import{M as x}from"./MarkdownSynapse-BqKR70sD.js";import{d as s}from"./ToastMessage-D6uIpWrw.js";import{R as n,a as t}from"./RequirementItem-OZx7IgGi.js";import{P as O}from"./Paper-vTxZNVZo.js";import"./index-bYuXtfvu.js";import"./iframe-BorzRatB.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-3Ozoui7p.js";import"./VerificationSubmission-CMrrYimb.js";import"./useFiles-BWzpbira.js";import"./SynapseConstants-D3gSaWkR.js";import"./OrientationBanner-B7lzUez5.js";import"./index-BEaZtgWO.js";import"./spreadSx-CwcO6WA9.js";import"./react-CeHOpBdi.js";import"./FullWidthAlert-DvY_ZKmv.js";import"./Alert-Bi1MPf5U.js";import"./createTheme-BhfFif7c.js";import"./DefaultPropsProvider-CR6JJVGo.js";import"./useSlot-DmrfrwWw.js";import"./useForkRef-Dz67y12k.js";import"./createSimplePaletteValueFilter-DvhmL7gt.js";import"./createSvgIcon-CGs2aUKk.js";import"./Close-DdKd6WtE.js";import"./IconButton-BO_Vyt7M.js";import"./useTimeout-CKXPEWw5.js";import"./ButtonBase-DncC0xkq.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BE3JMWLs.js";import"./Stack-DbdBQoMT.js";import"./extendSxProp-BaSZxf1G.js";import"./getThemeProps-BKg1XlR8.js";import"./useTheme-eWijQT4_.js";import"./Box-BRuH1Ora.js";import"./AlertTitle-wIkcLOLb.js";import"./Typography-Ci2kAYGi.js";import"./index-pdYlt5rv.js";import"./useTheme-CAoH1kQC.js";import"./ClickAwayListener-DXa8E7oh.js";import"./getReactElementRef-DLB-yWFi.js";import"./index-aySbfJ0W.js";import"./index-CLzFrY6n.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DXtNWBBe.js";import"./Tooltip-CIvfN4g7.js";import"./index-dEv_nVrL.js";import"./useControlled-4-utESF-.js";import"./Popper-C-FGpZWn.js";import"./Button-VWYMgatt.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bdqa-HwM.js";import"./useQuery-oCM2ScmL.js";import"./utils-DZeFJEEI.js";import"./Link-DQQymv2C.js";import"./Collapse-CG5TH7JR.js";import"./_baseUniq-DWXvxkjA.js";import"./_Uint8Array-D3y4G5m1.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike--mXepCRA.js";import"./isArray-Dxzbedgu.js";import"./_getTag-BZVYVZDa.js";import"./isEqual-hVZZo_Zh.js";import"./merge-CvokAV8g.js";import"./_initCloneObject-DB4cLElU.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-I42jnFEQ.js";import"./inputBaseClasses-OOFSrIFW.js";import"./calculateFriendlyFileSize-DlyyWhYD.js";import"./CheckCircleTwoTone-Bi8LtDNf.js";import"./InfoTwoTone-CyiHi3rF.js";import"./useMutation-0ePs12yi.js";import"./dayjs.min-B3WKbRA4.js";import"./chunk-AYJ5UCUI-CANmZQ7w.js";import"./cloneDeep-_uTojtj1.js";import"./Skeleton-uiHptTpV.js";import"./SkeletonButton-CZnmCDoX.js";import"./SkeletonInlineBlock-BY30SA7u.js";import"./SkeletonTable-CtcRTk_f.js";import"./times-C_szOA22.js";import"./toInteger-BVn_iR-8.js";import"./isSymbol-Bjl_AErD.js";import"./SkeletonParagraph-D3jxfgks.js";import"./uniqueId-CttED5k5.js";import"./toString-DNHJFbxw.js";import"./CSSTransition-DbjRlbhS.js";import"./ConditionalWrapper-BBIs4-nc.js";import"./LockTwoTone-CnF64fns.js";import"./Avatar-QIjN5KOI.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
