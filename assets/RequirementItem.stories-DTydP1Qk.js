import{j as a}from"./jsx-runtime-Bv99z4dA.js";import{m as P}from"./mockWiki-DiBhlaV-.js";import{M as x}from"./MarkdownSynapse-CwZv9bbD.js";import{d as s}from"./ToastMessage-DcXzsJyk.js";import{R as n,a as t}from"./RequirementItem-CxCKwLAy.js";import{P as O}from"./Paper-3DUu0WIH.js";import"./index-CF0uzcjZ.js";import"./iframe-BGHbsuBY.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-C2NjfX48.js";import"./VerificationSubmission-DHPhgAH7.js";import"./useFiles-DfbAmMh0.js";import"./SynapseConstants-BcNR6UVe.js";import"./OrientationBanner-Stv6OLE_.js";import"./index-BjW319T1.js";import"./spreadSx-CwcO6WA9.js";import"./react-C0_LrvjC.js";import"./FullWidthAlert-CTTU8S7m.js";import"./Alert-BxPsGBYe.js";import"./createTheme-Bw_q8xoX.js";import"./resolveComponentProps-CKpD1PaC.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CR5Lr8iG.js";import"./createSvgIcon-DYUB9sIM.js";import"./DefaultPropsProvider-Du8GyagO.js";import"./Close-Cn1wJK3o.js";import"./IconButton-ByhlliFY.js";import"./ButtonBase-D9Xa11JY.js";import"./useTimeout-D0voTyHk.js";import"./TransitionGroupContext-CcdTK9uz.js";import"./useIsFocusVisible-BREXiXd7.js";import"./useEventCallback-B52rbrpi.js";import"./Stack-DOpWO4At.js";import"./getThemeProps-B6Zyu7l2.js";import"./useTheme-DMGyK5v9.js";import"./Box-CBOI_66A.js";import"./AlertTitle-CUlu-O_E.js";import"./Typography-DzYp-gx0.js";import"./useTheme-B2hHvz9R.js";import"./Grow-DQ9AjbB6.js";import"./index-Tn3qadKg.js";import"./utils-BbVrO47L.js";import"./ClickAwayListener-CEWBU0B0.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-Dyps0rkr.js";import"./index-D80nYRsb.js";import"./useControlled-YvkHZGdj.js";import"./useId-CETeX-Gn.js";import"./Popper-BDcRHdTY.js";import"./Button-rQ4_7pWR.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-Bj0SG9ce.js";import"./useQuery-Brk-0fy0.js";import"./utils-fj-tQrRX.js";import"./Link-nOr9EzS9.js";import"./Collapse-CfSLrk2G.js";import"./isNil-BLECkZ0t.js";import"./_Uint8Array-C9b-PzRe.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-Eui5bRYR.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-D0dXxHzC.js";import"./_getTag-C45n9TB1.js";import"./tinycolor-Begke6kS.js";import"./Fade-DpYMkibC.js";import"./Skeleton-CSx2cjkl.js";import"./inputBaseClasses-BuIFm7nN.js";import"./calculateFriendlyFileSize-CttCZT0w.js";import"./CheckCircleTwoTone-CeSmIQGa.js";import"./InfoTwoTone-CgTBjUs_.js";import"./useMutation-BD58zpYn.js";import"./isEqual-JGHzCGNG.js";import"./dayjs.min-B6HdU3vP.js";import"./chunk-AYJ5UCUI-CzysO3QB.js";import"./cloneDeep-CxCk-B3s.js";import"./_initCloneObject-yXBc5QAf.js";import"./merge-BL56xzl6.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-9PT_1GBq.js";import"./SkeletonInlineBlock-BKKpD_Fh.js";import"./SkeletonTable-BnASqwCK.js";import"./times-BSt-OOmR.js";import"./toInteger-CrB09Qip.js";import"./isSymbol-BRqq2NTe.js";import"./SkeletonParagraph-DS1b0li8.js";import"./uniqueId-B_W1ZYYh.js";import"./toString-CY2V_kra.js";import"./CSSTransition-C0HH64BB.js";import"./ConditionalWrapper-B76Ymt3S.js";import"./LockTwoTone-DLYpwUhb.js";import"./Avatar-B9fc51oi.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
