import{j as a}from"./jsx-runtime-C5NxHwQJ.js";import{m as P}from"./mockWiki-DiBhlaV-.js";import{M as x}from"./MarkdownSynapse-DufiYEt9.js";import{d as s}from"./ToastMessage-CVxbgTkL.js";import{R as n,a as t}from"./RequirementItem-BNzn-Unc.js";import{P as O}from"./Paper-EWl2C2Zt.js";import"./index-BUyK93rt.js";import"./iframe-DoZ_YKgg.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-C2NjfX48.js";import"./VerificationSubmission-DHPhgAH7.js";import"./useFiles-D-tEf01x.js";import"./SynapseConstants-C_bGYTo-.js";import"./OrientationBanner-Zj6GYtpt.js";import"./index-BVwZc75m.js";import"./spreadSx-CwcO6WA9.js";import"./react-CACuwhgC.js";import"./FullWidthAlert-BLDoSU5L.js";import"./Alert-5tSKDGIe.js";import"./createTheme-BstmEjP7.js";import"./resolveComponentProps-DH6tbKzS.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-Smo6uH9y.js";import"./createSvgIcon-D1O3_eeJ.js";import"./DefaultPropsProvider-hOkQc_mp.js";import"./Close-Dt1xiFQr.js";import"./IconButton-BqTcpupZ.js";import"./ButtonBase-DctD_-B6.js";import"./useTimeout-BNReSQPt.js";import"./TransitionGroupContext-7a61cq35.js";import"./useIsFocusVisible-Dstz45Fm.js";import"./useEventCallback-BLz-FZAQ.js";import"./Stack-_cgazAZA.js";import"./getThemeProps-C7PoPghj.js";import"./useTheme-DK5UNgIg.js";import"./Box-C7L6jE12.js";import"./AlertTitle-CcHfDa-c.js";import"./Typography-DIK0enh5.js";import"./useTheme--0iZh6DT.js";import"./Grow-zr8OcKR_.js";import"./index-CC0zv1VF.js";import"./utils-Br22oxv3.js";import"./ClickAwayListener-D7jkdGQl.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-AnolE66l.js";import"./index-BqVfUhDp.js";import"./useControlled-D2kQt8S5.js";import"./useId-v1fSL2EP.js";import"./Popper-BDuOEhJZ.js";import"./Button-DTYZ_D3f.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-Bj0SG9ce.js";import"./useQuery-B6tctlGJ.js";import"./utils-7QzzGIiA.js";import"./Link-DXfrR-Pc.js";import"./Collapse-DPQM8v_6.js";import"./isNil-BApmFmY-.js";import"./_Uint8Array-wiAQVV7X.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DDkRrBm5.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-4d5Gfa3E.js";import"./_getTag-DLjbrX0g.js";import"./tinycolor-Begke6kS.js";import"./Fade-BqacDeSR.js";import"./Skeleton-Dw41BVrt.js";import"./inputBaseClasses-CKfM9y8S.js";import"./calculateFriendlyFileSize-CPwr_L4J.js";import"./CheckCircleTwoTone-B7PYorgw.js";import"./InfoTwoTone-CeEpykZw.js";import"./useMutation-BCa3Utcu.js";import"./isEqual-Wn9P4mtf.js";import"./dayjs.min-BLC6IB2g.js";import"./chunk-AYJ5UCUI-DNC6mvIs.js";import"./cloneDeep-Da0gCOXW.js";import"./_initCloneObject-DiKtCs9l.js";import"./merge-BLrCfc5g.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-DHwyCCnM.js";import"./SkeletonInlineBlock-PxE0qGs3.js";import"./SkeletonTable-BOWzMBTc.js";import"./times-Ct11bBHV.js";import"./toInteger-fyBvN-v7.js";import"./isSymbol-BuSMiGT1.js";import"./SkeletonParagraph-GJkHu-UZ.js";import"./uniqueId-C16617v_.js";import"./toString-CBq9Xfpt.js";import"./CSSTransition--EvnF1HZ.js";import"./ConditionalWrapper-7B-AP-F6.js";import"./LockTwoTone-Bgv3OKtG.js";import"./Avatar-CRzzEgME.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
