import{j as a}from"./jsx-runtime-DkbpurNs.js";import{m as P}from"./mockWiki-CgjxDh2Q.js";import{M as x}from"./MarkdownSynapse-Cors3dqY.js";import{d as s}from"./ToastMessage-46fYpgTP.js";import{R as n,a as t}from"./RequirementItem-Aab7sU2R.js";import{P as O}from"./Paper-C9rqLEV4.js";import"./index-BWTz5das.js";import"./iframe-CIwcPPSS.js";import"./mock_user_profile-CijvmO8r.js";import"./mock_file_handle-CFTRkxcS.js";import"./VerificationSubmission-BI5WaB2N.js";import"./useFiles-DsFYUvgk.js";import"./SynapseConstants-WdyYb7Om.js";import"./OrientationBanner-Db5b4wt6.js";import"./index-WdIyC9zy.js";import"./spreadSx-CwcO6WA9.js";import"./react-B92lp8oH.js";import"./FullWidthAlert-CV5VqY0G.js";import"./Alert-oO57gt13.js";import"./createTheme-A3wdy6CE.js";import"./resolveComponentProps-D-CanUzl.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-D76_CRuH.js";import"./createSvgIcon-D1wrlE5j.js";import"./DefaultPropsProvider-ByOVQs-n.js";import"./Close-B0Wd8leo.js";import"./IconButton-4eAf36A2.js";import"./ButtonBase-BhLDaX_S.js";import"./useTimeout-vSjzk-Un.js";import"./TransitionGroupContext-C__s9c2O.js";import"./useIsFocusVisible-FsgV9KWa.js";import"./useEventCallback-Bwqph7YH.js";import"./Stack-bl7kY2rD.js";import"./getThemeProps-DZ0VtK3w.js";import"./useTheme--XQLJcej.js";import"./Box-oS9X8DmL.js";import"./AlertTitle-DXMw9tkm.js";import"./Typography-C9RmHiWH.js";import"./useTheme-BWFniEYL.js";import"./Grow-CF1islW1.js";import"./index-CWlTKyso.js";import"./utils-CnscWP4i.js";import"./ClickAwayListener-KlaQc122.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-AOG27yeN.js";import"./index-BF7XAVzO.js";import"./useControlled-BZcNW5Fh.js";import"./useId-CWMqiBBO.js";import"./Popper-mjGHPHZJ.js";import"./Button-iLozBQyn.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-DN6u4g4A.js";import"./useQuery-DcrUW3Ia.js";import"./utils-D0Sn12cL.js";import"./Link-DpF5ZODC.js";import"./Collapse-C3IE9BnM.js";import"./isNil-SLuPmgyU.js";import"./_Uint8Array-dFMtMdky.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-BtYs4CQI.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-CSEyos6D.js";import"./_getTag-9L9wrwHR.js";import"./tinycolor-Begke6kS.js";import"./Fade-Cf5YgOGZ.js";import"./Skeleton-CjiSKKcr.js";import"./inputBaseClasses-B_tp1BOw.js";import"./calculateFriendlyFileSize-DFfVqf0N.js";import"./CheckCircleTwoTone-CXzQKqsF.js";import"./InfoTwoTone-B5Z1IoZb.js";import"./mutation-DVozW0ZS.js";import"./dayjs.min-BwO3N9YX.js";import"./chunk-AYJ5UCUI-Dw2DX1gQ.js";import"./cloneDeep-Bc5O_UuE.js";import"./_initCloneObject-B99hApBY.js";import"./isEqual-BTEFoVlQ.js";import"./merge-BKuaLmoA.js";import"./identity-DKeuBCMA.js";import"./useMutation-C6BvrXXS.js";import"./SkeletonButton-DIk8ysAH.js";import"./SkeletonInlineBlock-D41IW_XW.js";import"./SkeletonTable-BO641YUo.js";import"./times-D-oxzHKh.js";import"./toInteger-B5iDNIpg.js";import"./isSymbol-z04EB1x3.js";import"./SkeletonParagraph-uvExlbzX.js";import"./uniqueId-B5ecwVFo.js";import"./toString-2F-XAeAH.js";import"./CSSTransition-B-GL-USm.js";import"./ConditionalWrapper-Cgta4xok.js";import"./LockTwoTone-Cf0XPAUQ.js";import"./Avatar-D3IZPso_.js";const ur={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
