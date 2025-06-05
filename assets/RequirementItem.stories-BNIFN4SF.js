import{j as a}from"./jsx-runtime-BRZS3XqV.js";import{m as P}from"./mockWiki-DiBhlaV-.js";import{M as x}from"./MarkdownSynapse-C2ytnp7r.js";import{d as s}from"./ToastMessage-BrVaoBGR.js";import{R as n,a as t}from"./RequirementItem--cQlTfMr.js";import{P as O}from"./Paper-B_miGDM5.js";import"./index-CocunraB.js";import"./iframe-DYt3ChXB.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-C2NjfX48.js";import"./VerificationSubmission-DHPhgAH7.js";import"./useFiles-DT6hcIL5.js";import"./SynapseConstants-Bn0ZfuPv.js";import"./OrientationBanner-Cej92lXT.js";import"./index-BVWcfbtT.js";import"./spreadSx-CwcO6WA9.js";import"./react--z23vKgd.js";import"./FullWidthAlert-DenfhEqP.js";import"./Alert-BzQ3w-i2.js";import"./createTheme-CGRZ8lhJ.js";import"./resolveComponentProps-B7kow99E.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CwaqtBp7.js";import"./createSvgIcon-DrSrpjUE.js";import"./DefaultPropsProvider-DnSfdlzo.js";import"./Close-D48z0Brg.js";import"./IconButton-DnEI_ZVS.js";import"./ButtonBase-C8J7qx50.js";import"./useTimeout-DD2fy9Gt.js";import"./TransitionGroupContext-CzgTvDz_.js";import"./useIsFocusVisible-DrjNToTJ.js";import"./useEventCallback-V5MPUxUC.js";import"./Stack-Cm7eDOYX.js";import"./getThemeProps-B5VTfPhr.js";import"./useTheme-Cmuf7htp.js";import"./Box-DAkKAoja.js";import"./AlertTitle-At8nRksm.js";import"./Typography-B5nvwako.js";import"./useTheme-BGfrpkOf.js";import"./Grow-DfpdITPV.js";import"./index-DEq8PKf6.js";import"./utils-CyklZQon.js";import"./ClickAwayListener-BNIu3AiL.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-Cd9QzmBG.js";import"./index-D0zZwq32.js";import"./useControlled-9lBX7zRL.js";import"./useId-DmpfYdh3.js";import"./Popper-DSp1FeIG.js";import"./Button-DawLv5b0.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-Bj0SG9ce.js";import"./useQuery-_ws85yL5.js";import"./utils-Dz9cxE1U.js";import"./Link-CNEgPUo2.js";import"./Collapse-CZFNRH1o.js";import"./isNil-Cw5qWwbI.js";import"./_Uint8Array-BL-Me88q.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-Ch1jIX1x.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-XMcuzNdJ.js";import"./_getTag-GUncnsoi.js";import"./tinycolor-Begke6kS.js";import"./Fade-CoSzwWpP.js";import"./Skeleton-BUNW0s0t.js";import"./inputBaseClasses-DhLGEEvE.js";import"./calculateFriendlyFileSize-CDRjbozM.js";import"./CheckCircleTwoTone-DBPw0BfE.js";import"./InfoTwoTone-ciM6HWp8.js";import"./useMutation-meEtlnbI.js";import"./isEqual-e2b-ZfBh.js";import"./dayjs.min-BI6axHk4.js";import"./chunk-AYJ5UCUI-BzOTHJcD.js";import"./cloneDeep-G1XxhtGs.js";import"./_initCloneObject-DWORq14n.js";import"./merge-DhlXzTQF.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-DjJHAWNS.js";import"./SkeletonInlineBlock-ChJK_2Be.js";import"./SkeletonTable-DsNtHb0H.js";import"./times-Ckf4vJoZ.js";import"./toInteger-CTBlp4Mg.js";import"./isSymbol-BM3-ZUrL.js";import"./SkeletonParagraph-DFqX7BD3.js";import"./uniqueId-D8dzI0-E.js";import"./toString-CzkbOv_6.js";import"./CSSTransition-CcYXdFCE.js";import"./ConditionalWrapper-CNYieCm1.js";import"./LockTwoTone-CZShOKyv.js";import"./Avatar-zFp1LK0L.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
