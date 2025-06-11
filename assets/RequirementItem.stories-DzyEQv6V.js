import{j as a}from"./jsx-runtime-BGmYwjPw.js";import{m as P}from"./mockWiki-BApATWET.js";import{M as x}from"./MarkdownSynapse-2eKnc5fR.js";import{d as s}from"./ToastMessage-D6eJ9sm5.js";import{R as n,a as t}from"./RequirementItem-CGEnOJjb.js";import{P as O}from"./Paper-BpVklOsW.js";import"./index-D70Qzix6.js";import"./iframe-DCGyuO0M.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CnMBfpEV.js";import"./VerificationSubmission-DeH3Sb8D.js";import"./useFiles-BAdDWMwP.js";import"./SynapseConstants-DMItxiUw.js";import"./OrientationBanner-C2Rl8t55.js";import"./index-BeB6r0BQ.js";import"./spreadSx-CwcO6WA9.js";import"./react-Ckn5zcIR.js";import"./FullWidthAlert-BNfuXb54.js";import"./Alert-JRFPsNhb.js";import"./createTheme-DTUolO0P.js";import"./resolveComponentProps-B8bYubln.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-PnJMPW2z.js";import"./createSvgIcon-D5FygO3K.js";import"./DefaultPropsProvider-CHINDxai.js";import"./Close-DDg3mWRC.js";import"./IconButton-Ct_6672G.js";import"./ButtonBase-ChIHx4gv.js";import"./useTimeout-B3y1ya_9.js";import"./TransitionGroupContext-BS1EhBkF.js";import"./useIsFocusVisible-UcDA8XlT.js";import"./useEventCallback-CMR8BFHz.js";import"./Stack-CceUr8if.js";import"./getThemeProps-p9C_LR9K.js";import"./useTheme-B7WU9K6r.js";import"./Box-C2MzxFhK.js";import"./AlertTitle-CzBbxzgQ.js";import"./Typography-CsSvRUvL.js";import"./useTheme-CIwx_-T9.js";import"./Grow-BSX4EQAQ.js";import"./index-Bu7vuuk9.js";import"./index-D9rL04kk.js";import"./utils-iFrGAl4U.js";import"./ClickAwayListener-DK6tNhWK.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DOg4lbe7.js";import"./index-by4eOjYR.js";import"./useControlled-IkxPlRtZ.js";import"./useId-WNkH_viu.js";import"./Popper-DCJrpf0R.js";import"./Button-DG9uclF8.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-DnD65nWI.js";import"./useQuery-vQy2YZdM.js";import"./utils-DJIDGhA4.js";import"./Link-r-bBv3bP.js";import"./Collapse-CH_V_oIx.js";import"./isNil-DyjpXBCD.js";import"./_Uint8Array-VWPPbkz8.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-BKsyZwdL.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-DBcWrHFj.js";import"./_getTag-DJe0a-jp.js";import"./tinycolor-Begke6kS.js";import"./Fade-DtUM3drq.js";import"./Skeleton-D7lmToRS.js";import"./inputBaseClasses-CLcW9eOo.js";import"./calculateFriendlyFileSize-BTA8IzSb.js";import"./CheckCircleTwoTone-bVAQNLE5.js";import"./InfoTwoTone-DU8xWpIM.js";import"./useMutation-XvJSvDdS.js";import"./isEqual-DJSZp9ad.js";import"./dayjs.min-DpFc7CZO.js";import"./chunk-AYJ5UCUI-CeZ-Supy.js";import"./cloneDeep-DxxkzVfq.js";import"./_initCloneObject-Bubq1LVM.js";import"./merge-CmDk7BfC.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-BTkRqOFm.js";import"./SkeletonInlineBlock-B9A1THfA.js";import"./SkeletonTable-DgqalkOR.js";import"./times-BT7pqEQ0.js";import"./toInteger-DBT_-3AP.js";import"./isSymbol-BuMJ6HNl.js";import"./SkeletonParagraph-Dmyu4_kH.js";import"./uniqueId-Bqpm0H11.js";import"./toString-iytHzCgB.js";import"./CSSTransition-BOWXa32O.js";import"./ConditionalWrapper-D_p6S9mC.js";import"./LockTwoTone-C-rv_OPm.js";import"./Avatar-DKoRfx6K.js";const ur={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
