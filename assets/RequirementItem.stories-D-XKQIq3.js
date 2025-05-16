import{j as a}from"./jsx-runtime-CqspjScI.js";import{m as P}from"./mockWiki-B6wTqEDI.js";import{M as x}from"./MarkdownSynapse-DJasPMEC.js";import{d as s}from"./ToastMessage-C55y7uYL.js";import{R as n,a as t}from"./RequirementItem-fbNw-9pP.js";import{P as O}from"./Paper-BYnSKEKu.js";import"./index-DwELiOEm.js";import"./iframe-CKpkvSud.js";import"./mock_user_profile-CijvmO8r.js";import"./mock_file_handle-3wYKbysY.js";import"./VerificationSubmission-dxY1kvC5.js";import"./useFiles-DzrQRRrm.js";import"./SynapseConstants-DDq6k8Bk.js";import"./OrientationBanner-2eG-FyEA.js";import"./index-Ca1CNIs_.js";import"./spreadSx-CwcO6WA9.js";import"./react-D1sJcC6U.js";import"./FullWidthAlert-BAOByKqU.js";import"./Alert-C8X3IXXe.js";import"./createTheme-C2yLSCAv.js";import"./resolveComponentProps-Bsjh6FAz.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-6nS14oXc.js";import"./createSvgIcon-Dw7Y1Pmy.js";import"./DefaultPropsProvider-BIi4x-Qk.js";import"./Close-_v6Lyygk.js";import"./IconButton-YhUBk163.js";import"./ButtonBase-DEUBlcAw.js";import"./useTimeout-uQTgiUpa.js";import"./TransitionGroupContext-_kMZOmjP.js";import"./useIsFocusVisible-DwoqQW0f.js";import"./useEventCallback-oeZLWsf5.js";import"./Stack-D-PASjtE.js";import"./getThemeProps-Bq6i_dzk.js";import"./useTheme-CLgGp1-V.js";import"./Box-DT2Sh8Hk.js";import"./AlertTitle-BNslf1IY.js";import"./Typography-c8mIpSFm.js";import"./useTheme-CDQpdfq0.js";import"./Grow-B9oahLxp.js";import"./index-QL2Y3aCJ.js";import"./utils-4etkwNtb.js";import"./ClickAwayListener-CigyFLxQ.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BHqwo6lq.js";import"./index-Cb4vUnA6.js";import"./useControlled-CLVGBDQk.js";import"./useId-OZGz37hj.js";import"./Popper-N_aUFGyv.js";import"./Button-DQWEjOY_.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-lE31obNl.js";import"./useQuery-DzQ5xZKl.js";import"./utils-Lg92kfS4.js";import"./Link-4I5wKCkj.js";import"./Collapse-CWZgeIDo.js";import"./isNil-Yh1UL_xP.js";import"./_Uint8Array-AY3rwX4N.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DwKTkmxs.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-blO9GVwM.js";import"./_getTag-C6cJi8CE.js";import"./tinycolor-Begke6kS.js";import"./Fade-D5KpZEr-.js";import"./Skeleton-B4iZ4BQm.js";import"./inputBaseClasses-DGI8OHrn.js";import"./calculateFriendlyFileSize-Ddpg9m3m.js";import"./CheckCircleTwoTone-B8wv6GAX.js";import"./InfoTwoTone-DpwJN-va.js";import"./mutation-UeCho2I4.js";import"./dayjs.min-CrNzlzo_.js";import"./chunk-AYJ5UCUI-fioPvBwi.js";import"./cloneDeep-ti_eOLLH.js";import"./_initCloneObject-CTeuSNQJ.js";import"./isEqual-bSNg52dZ.js";import"./merge-BByWj7sc.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-omDz6R2S.js";import"./SkeletonInlineBlock-Cggj5LnG.js";import"./SkeletonTable-D2Vi96eB.js";import"./times-CTk1mNYV.js";import"./toInteger-Bil1tW-c.js";import"./isSymbol-Cv-P4Rs9.js";import"./SkeletonParagraph-CCzFx5ql.js";import"./uniqueId-Ciufq9ZU.js";import"./toString-D_WczTLv.js";import"./CSSTransition-BpGuUK3s.js";import"./ConditionalWrapper-C7beLIJb.js";import"./LockTwoTone-cHSen5So.js";import"./Avatar-BPI5wtHS.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
