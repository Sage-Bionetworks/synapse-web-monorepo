import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-BjsSPAW9.js";import{M as x}from"./MarkdownSynapse-D3u-QhZW.js";import{d as s}from"./ToastMessage-CfK7mEii.js";import{R as n,a as t}from"./RequirementItem-Vnbd6Dqq.js";import{P as O}from"./Paper-CxU6RlC_.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BgkszYEk.js";import"./VerificationSubmission-D0sL2gwz.js";import"./useFiles-B5LO1uxe.js";import"./SynapseConstants-Olv1Zxsm.js";import"./OrientationBanner-BXuTAg1A.js";import"./index-DIfqU3_E.js";import"./index-eFl-S8ON.js";import"./iframe-Bwktd0AN.js";import"./spreadSx-CwcO6WA9.js";import"./react-BAjnC65B.js";import"./FullWidthAlert-DJNHmQMq.js";import"./Alert-BDyGXl7E.js";import"./createTheme-CLYM1FUC.js";import"./DefaultPropsProvider-DA0U_kgt.js";import"./useSlot-DH6QMbEO.js";import"./useForkRef-jNhyWntA.js";import"./createSimplePaletteValueFilter-D1o4f4ux.js";import"./createSvgIcon-CnwVkhPD.js";import"./Close-DBIfCGXf.js";import"./IconButton-BfaoKVbM.js";import"./useTimeout-C_PuK_9Y.js";import"./ButtonBase-7gRlsKFg.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-W9eU435C.js";import"./Stack-CCfAF-IQ.js";import"./extendSxProp-_bdPkhlD.js";import"./getThemeProps-CFhiInyd.js";import"./useTheme-CJmN68Ix.js";import"./Box-DohQnecE.js";import"./AlertTitle-DHUMM-no.js";import"./Typography-CP_QeUGL.js";import"./index-8yy629tL.js";import"./useTheme-BFWFuju5.js";import"./ClickAwayListener-DVltpB5j.js";import"./getReactElementRef-DAdCLlMf.js";import"./index-DJsR3SOo.js";import"./index-DjGKRKV1.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BBlT1Etq.js";import"./Tooltip-ChkUZoxB.js";import"./index-CTdLJCZx.js";import"./useControlled-Bq2zjJFV.js";import"./Popper-BGtMDbHv.js";import"./Button-C4ZeJCRl.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bt2r5KGg.js";import"./useQuery-Dze-Gcid.js";import"./QueryClientProvider-JY8B-ej3.js";import"./Link-Da7z_I0z.js";import"./Collapse-BJSa4r00.js";import"./_baseUniq-CBn-njXz.js";import"./_Uint8Array-l2RPaGmH.js";import"./isArray-C5VllVpE.js";import"./_getTag-Do2m6-7_.js";import"./isEqual-bbIu23Cq.js";import"./merge-OOrelz3k.js";import"./_initCloneObject-kc9We_Be.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Dx5i-c0V.js";import"./inputBaseClasses-BTx6rMf0.js";import"./calculateFriendlyFileSize-Dq2slKjG.js";import"./CheckCircleTwoTone-C0G3ehLD.js";import"./InfoTwoTone-BfDmBmuP.js";import"./useMutation-D8DuA68J.js";import"./dayjs.min-DiFORWWY.js";import"./chunk-AYJ5UCUI-CuvoydLy.js";import"./cloneDeep-BJdQ3bik.js";import"./Skeleton-YXjxykSC.js";import"./SkeletonButton-DOu_-5Qd.js";import"./SkeletonInlineBlock-CPoFHrvU.js";import"./SkeletonTable-BfdZFVLE.js";import"./times-CgPLg9gi.js";import"./toInteger-DUbAFJhw.js";import"./isSymbol-JKNDZO16.js";import"./SkeletonParagraph-Bxft6q4T.js";import"./uniqueId-BGOLeDwJ.js";import"./toString-BXxYD4qa.js";import"./CSSTransition-CQrgY61f.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-CksZFTT6.js";import"./Avatar-WvUThqnw.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
