import{j as a}from"./jsx-runtime-DqkftVdl.js";import{m as P}from"./mockWiki-DiBhlaV-.js";import{M as x}from"./MarkdownSynapse-Cs6g-S9w.js";import{d as s}from"./ToastMessage-iT0Z2ca7.js";import{R as n,a as t}from"./RequirementItem-BtNvv2Mx.js";import{P as O}from"./Paper-CB6CO99j.js";import"./index-DePaHtiF.js";import"./iframe-BROhmg6M.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-C2NjfX48.js";import"./VerificationSubmission-DHPhgAH7.js";import"./useFiles-00zV7j3M.js";import"./SynapseConstants-DXxtZCNr.js";import"./OrientationBanner-CW_OwSoZ.js";import"./index-s5f8zLZY.js";import"./spreadSx-CwcO6WA9.js";import"./react-ao0sqeqP.js";import"./FullWidthAlert-BxE7qCkE.js";import"./Alert-q_ZdLQQt.js";import"./createTheme-5Fe3luW2.js";import"./resolveComponentProps-B_dOnkEG.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-DxGWz-nP.js";import"./createSvgIcon-BC6UvAwx.js";import"./DefaultPropsProvider-DjeLsGG1.js";import"./Close-ChuplZX6.js";import"./IconButton-BcbjXjc9.js";import"./ButtonBase-Do0JJz1c.js";import"./useTimeout-D5dvr_Gi.js";import"./TransitionGroupContext-DQEZvtFj.js";import"./useIsFocusVisible-DI2M56aP.js";import"./useEventCallback-BZ6D7d5A.js";import"./Stack-HiEVvsaJ.js";import"./getThemeProps-f2sadzhq.js";import"./useTheme-U-7hfo9l.js";import"./Box-D9NrrPyX.js";import"./AlertTitle-ChAbcANF.js";import"./Typography-OD-ts1pz.js";import"./useTheme-CTLaU0Ir.js";import"./Grow-BU8iQ-gL.js";import"./index-CBZYBfor.js";import"./utils-CJvWoSDr.js";import"./ClickAwayListener-CUMsr3-e.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-CuUlmnbr.js";import"./index-DXHrkCm3.js";import"./useControlled-BOD8q2oj.js";import"./useId-wERg8hog.js";import"./Popper-Cuj0UtxU.js";import"./Button-CvbUAx7X.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-Bj0SG9ce.js";import"./useQuery-Cm5Odpzo.js";import"./utils-BjkGJnUz.js";import"./Link-EHhEhz1_.js";import"./Collapse-B-I-lrDJ.js";import"./isNil-Dezvb9P5.js";import"./_Uint8Array-D-I36iIO.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-BZYvinLn.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-ByXVEM-G.js";import"./_getTag-BTItrKZg.js";import"./tinycolor-Begke6kS.js";import"./Fade-f--pyCs_.js";import"./Skeleton-B9nMYFge.js";import"./inputBaseClasses-CpJ0CZmE.js";import"./calculateFriendlyFileSize-BkKsHBWw.js";import"./CheckCircleTwoTone-_t8YNrIT.js";import"./InfoTwoTone-CcQ4P4q-.js";import"./useMutation-Du37KsLM.js";import"./isEqual-DMzBEPBa.js";import"./dayjs.min-DwUMv8zl.js";import"./chunk-AYJ5UCUI-CnSKK497.js";import"./cloneDeep-Be3a7qNY.js";import"./_initCloneObject-BDPs-veD.js";import"./merge-CMvw9-qj.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-DYAGo3CI.js";import"./SkeletonInlineBlock-DrYX2Sn3.js";import"./SkeletonTable-DhrJmZ8y.js";import"./times-0aa5VcsZ.js";import"./toInteger-DnVIvjjA.js";import"./isSymbol-BnK3Mv-h.js";import"./SkeletonParagraph-By1usgnb.js";import"./uniqueId-BG8ok7WD.js";import"./toString-BRV68jLP.js";import"./CSSTransition-CRCki49x.js";import"./ConditionalWrapper-BSdtDRQc.js";import"./LockTwoTone-DE3i2etE.js";import"./Avatar-Cr75sHBo.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
