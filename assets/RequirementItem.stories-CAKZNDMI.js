import{j as a}from"./jsx-runtime-B_2Gc3SG.js";import{m as P}from"./mockWiki-BApATWET.js";import{M as x}from"./MarkdownSynapse-vvLXB8xA.js";import{d as s}from"./ToastMessage-Cm4Iwz2s.js";import{R as n,a as t}from"./RequirementItem-CP8633qz.js";import{P as O}from"./Paper-BcXxrzhK.js";import"./index-BBU0z9G2.js";import"./iframe-DCUtDlCX.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CnMBfpEV.js";import"./VerificationSubmission-DeH3Sb8D.js";import"./useFiles-JXlVRPV9.js";import"./SynapseConstants-DX-WDDd9.js";import"./OrientationBanner-Dq1docnb.js";import"./index-BwisHB0G.js";import"./spreadSx-CwcO6WA9.js";import"./react-BhylcftK.js";import"./FullWidthAlert-CFzbZiUT.js";import"./Alert-CGNyaEdA.js";import"./createTheme-Bb-of80E.js";import"./resolveComponentProps-DCAiF6Pg.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CyoLs8EC.js";import"./createSvgIcon-CNsbaAaL.js";import"./DefaultPropsProvider-DY6zb-dH.js";import"./Close-B0UOP1QV.js";import"./IconButton-DNEKqMCi.js";import"./ButtonBase-C72q6tJT.js";import"./useTimeout-CAuc4a13.js";import"./TransitionGroupContext-BQut1n65.js";import"./useIsFocusVisible-DyEAvkJ4.js";import"./useEventCallback-BQjsW7DO.js";import"./Stack-qWau2zCa.js";import"./getThemeProps-6OAybboU.js";import"./useTheme-Dh1Papyn.js";import"./Box-D2RYsU2i.js";import"./AlertTitle-B4Mai8jL.js";import"./Typography-DPPBqnKa.js";import"./useTheme-B-6l9toe.js";import"./Grow-CJiXtLX9.js";import"./index-DFDg9nQ_.js";import"./index-Dt_7HUR0.js";import"./utils-DvLr3dDh.js";import"./ClickAwayListener-CK1-KmpA.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-nNNsqjbp.js";import"./index-DMnlBYgJ.js";import"./useControlled-B661O_AT.js";import"./useId-Bk9Oe8XM.js";import"./Popper-BWeeHEmm.js";import"./Button-C3J87jrs.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-DnD65nWI.js";import"./useQuery-BnMaqJyd.js";import"./utils-BWj42cP7.js";import"./Link-DOGBJLC7.js";import"./Collapse-D4s4BkvF.js";import"./isNil-DpeP_R9j.js";import"./_Uint8Array-BRfoxawQ.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DBBLIIk8.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-Db4d4u_t.js";import"./_getTag-9sNPBvjh.js";import"./tinycolor-Begke6kS.js";import"./Fade-DsP6RvZm.js";import"./Skeleton-B1rt5Ztc.js";import"./inputBaseClasses-CIhkIKVR.js";import"./calculateFriendlyFileSize-BQ3RZ0VU.js";import"./CheckCircleTwoTone-GV37EoOE.js";import"./InfoTwoTone-B7FqZEQJ.js";import"./useMutation-B6YewPuT.js";import"./isEqual-CQ7yWffo.js";import"./dayjs.min-Df7AXePR.js";import"./chunk-AYJ5UCUI-BRBikskr.js";import"./cloneDeep-jHGJI57J.js";import"./_initCloneObject-7i-0qHSD.js";import"./merge-oSJTsFDD.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-CbjOPWkX.js";import"./SkeletonInlineBlock-Bv33wMv5.js";import"./SkeletonTable-PfZqTU2_.js";import"./times-BazKlwWW.js";import"./toInteger-BR2XKgRq.js";import"./isSymbol-hcjVY0uj.js";import"./SkeletonParagraph-ttuMcraQ.js";import"./uniqueId-9jDyhjor.js";import"./toString-CBw_1iI8.js";import"./CSSTransition-Bt4OPlJt.js";import"./ConditionalWrapper-DA3GW15W.js";import"./LockTwoTone-Cb-LomGj.js";import"./Avatar-CWlmXXJk.js";const ur={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
