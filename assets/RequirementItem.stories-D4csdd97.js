import{j as a}from"./jsx-runtime-CRy6x3sP.js";import{m as P}from"./mockWiki-DiBhlaV-.js";import{M as x}from"./MarkdownSynapse-BLXi6IUg.js";import{d as s}from"./ToastMessage-D9WGNpua.js";import{R as n,a as t}from"./RequirementItem-DRu6x-Vx.js";import{P as O}from"./Paper-BO3sHqW8.js";import"./index-CE2Ac4IV.js";import"./iframe-BdAv9r7b.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-C2NjfX48.js";import"./VerificationSubmission-DHPhgAH7.js";import"./useFiles-Cxf8eV4n.js";import"./SynapseConstants-Dr3_l-La.js";import"./OrientationBanner-CJcNE3jz.js";import"./index-33x153AN.js";import"./spreadSx-CwcO6WA9.js";import"./react-BGcvK65e.js";import"./FullWidthAlert-DcvBOpAA.js";import"./Alert-B2s1bC-M.js";import"./createTheme-Chr0Mdmk.js";import"./resolveComponentProps-CP6vIIt2.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-C6Z4Jw8F.js";import"./createSvgIcon-CiHFREdi.js";import"./DefaultPropsProvider-_g6l0FJe.js";import"./Close-BIDKcCyq.js";import"./IconButton-Df9li5yN.js";import"./ButtonBase-D1lRUUMa.js";import"./useTimeout-CBH_whYp.js";import"./TransitionGroupContext-CxN-DzGm.js";import"./useIsFocusVisible-dvxC9prE.js";import"./useEventCallback-B2yVaD7P.js";import"./Stack-N50kn1Mv.js";import"./getThemeProps-BS_qL9ir.js";import"./useTheme-XiVtr3LS.js";import"./Box-etwwWi4O.js";import"./AlertTitle-DpdAxaYw.js";import"./Typography-cABtXJa_.js";import"./useTheme-DiZnRNE7.js";import"./Grow-DjIVuFVR.js";import"./index-e1WoLxJ7.js";import"./utils-BbQ6ehAh.js";import"./ClickAwayListener-Cku9OPRg.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-CSpbyYgv.js";import"./index-D1UKly7L.js";import"./useControlled-DkdtTMBP.js";import"./useId-BRVnYYpi.js";import"./Popper-BLUMdNSt.js";import"./Button-DG4g__Z5.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-Bj0SG9ce.js";import"./useQuery-CHFprEsD.js";import"./utils-DzX4tJbb.js";import"./Link-CbuyVXAA.js";import"./Collapse-DQAQjUwZ.js";import"./isNil-shTrIGGc.js";import"./_Uint8Array-B9mZlz1W.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-BPkWATOE.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-CRCrmKl4.js";import"./_getTag-DPXvVhQY.js";import"./tinycolor-Begke6kS.js";import"./Fade-BePaFpCm.js";import"./Skeleton-D2sKrEc4.js";import"./inputBaseClasses-CzYtpewL.js";import"./calculateFriendlyFileSize-6zAl83cW.js";import"./CheckCircleTwoTone-t841N9sD.js";import"./InfoTwoTone-ClHbIujv.js";import"./useMutation-Cdlk9RaF.js";import"./isEqual-_ddOeoH0.js";import"./dayjs.min-KU4kcmn5.js";import"./chunk-AYJ5UCUI-Bsd4FnUA.js";import"./cloneDeep-C8UhJl5n.js";import"./_initCloneObject-BYZKyK7O.js";import"./merge-Be5BfqC_.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-2nxgRoEB.js";import"./SkeletonInlineBlock-CVbi4qCR.js";import"./SkeletonTable-BFVKwZ3B.js";import"./times-DT3UiAAp.js";import"./toInteger-DMbp0I6o.js";import"./isSymbol-ByhCwmes.js";import"./SkeletonParagraph-DfuEJlc5.js";import"./uniqueId-CIVu4QNe.js";import"./toString-D9TzDClD.js";import"./CSSTransition-DYcQkYOh.js";import"./ConditionalWrapper-d6wmF7ki.js";import"./LockTwoTone-DIsffHFZ.js";import"./Avatar-CBx5QlPx.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
