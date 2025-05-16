import{j as a}from"./jsx-runtime-N6ye8Cll.js";import{m as P}from"./mockWiki-B6wTqEDI.js";import{M as x}from"./MarkdownSynapse-BJAUhtaE.js";import{d as s}from"./ToastMessage-DdN-IUCN.js";import{R as n,a as t}from"./RequirementItem-Dad_7Iau.js";import{P as O}from"./Paper-13cV-0Of.js";import"./index-Lo42Gh79.js";import"./iframe-BeLSOqK0.js";import"./mock_user_profile-CijvmO8r.js";import"./mock_file_handle-3wYKbysY.js";import"./VerificationSubmission-dxY1kvC5.js";import"./useFiles-wPL3noqa.js";import"./SynapseConstants-DVzzGxGK.js";import"./OrientationBanner-D3UsPxXx.js";import"./index-Bf7y0XZD.js";import"./spreadSx-CwcO6WA9.js";import"./react-D7WMFHc_.js";import"./FullWidthAlert-pApCjOvL.js";import"./Alert-DnAYteIA.js";import"./createTheme-zUoByXU0.js";import"./resolveComponentProps-BJ8uhEQv.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-BG5ZtOCT.js";import"./createSvgIcon-B7Fm4obF.js";import"./DefaultPropsProvider-CNnQMBV4.js";import"./Close-DGWi-3t4.js";import"./IconButton-CPNT-u2D.js";import"./ButtonBase-lRXedyLt.js";import"./useTimeout-Fspxp6pC.js";import"./TransitionGroupContext-GoISSeOA.js";import"./useIsFocusVisible-DsSc-LK2.js";import"./useEventCallback-Co6pa197.js";import"./Stack-BeytxLtO.js";import"./getThemeProps-Bv2-5X3N.js";import"./useTheme-COBO9Fob.js";import"./Box-atqS-zJr.js";import"./AlertTitle-BbIYRcBk.js";import"./Typography-tG7EFsUv.js";import"./useTheme-CFiH-FLy.js";import"./Grow-C1bIe5cL.js";import"./index-cN61rZYG.js";import"./utils-DiIkWdd2.js";import"./ClickAwayListener-BuLQRAHV.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-lA2laYzz.js";import"./index-DYutZETn.js";import"./useControlled-DZUuzM-I.js";import"./useId-G0RrJkXu.js";import"./Popper-ouRmnn8F.js";import"./Button-Bdir9JO_.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-lE31obNl.js";import"./useQuery-D1RrcX2T.js";import"./utils-DSX88CCK.js";import"./Link-029SLwqk.js";import"./Collapse-thXyZuvh.js";import"./isNil-DAzj2u8t.js";import"./_Uint8Array-BrkH6h_h.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-Bl8WEi7v.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-DIkf-jLy.js";import"./_getTag-dgEDOUa8.js";import"./tinycolor-Begke6kS.js";import"./Fade-B4sfEdAe.js";import"./Skeleton-zk9T0ahk.js";import"./inputBaseClasses-BQUdFaBR.js";import"./calculateFriendlyFileSize-DJRIw0Wx.js";import"./CheckCircleTwoTone-Dm-a3uAR.js";import"./InfoTwoTone-P5w7WfcN.js";import"./mutation-DrD0YQPG.js";import"./dayjs.min-CvwiUaiC.js";import"./chunk-AYJ5UCUI-Dc_jcqd8.js";import"./cloneDeep-EMhmsPM9.js";import"./_initCloneObject-SveHNOq9.js";import"./isEqual-7SDsHlZH.js";import"./merge-DPBYIowj.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-BRl78l5U.js";import"./SkeletonInlineBlock-ixzYcb3a.js";import"./SkeletonTable-CyLitWLR.js";import"./times-CasrlZO6.js";import"./toInteger-Ds-kg_-y.js";import"./isSymbol-BgsEVFJf.js";import"./SkeletonParagraph-Bxb6rwDB.js";import"./uniqueId-CeoDGpp8.js";import"./toString-BVOVI4sj.js";import"./CSSTransition-_2_JAJnC.js";import"./ConditionalWrapper-ChZfDZx8.js";import"./LockTwoTone-BFAdUyhE.js";import"./Avatar-D5zkX0g5.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
