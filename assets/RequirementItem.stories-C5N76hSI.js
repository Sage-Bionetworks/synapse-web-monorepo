import{j as a}from"./jsx-runtime-Ba9fMlvA.js";import{m as P}from"./mockWiki-DHj13qiO.js";import{M as x}from"./MarkdownSynapse-Dx3KK2L6.js";import{d as s}from"./ToastMessage-CfoJf0WU.js";import{R as n,a as t}from"./RequirementItem-DPQi3ww0.js";import{P as O}from"./Paper-C8bYjZ05.js";import"./index-Dt8RCK4S.js";import"./iframe-JOL0DIag.js";import"./mock_user_profile-CijvmO8r.js";import"./mock_file_handle-DS_yjaGE.js";import"./VerificationSubmission-DsgC4t7y.js";import"./useFiles-Ct8yHZV5.js";import"./SynapseConstants-udfJhW5T.js";import"./OrientationBanner-DJri4Kzp.js";import"./index-BEgggBqy.js";import"./spreadSx-CwcO6WA9.js";import"./react-D_Md03mS.js";import"./FullWidthAlert-Db4YYATT.js";import"./Alert-C19m3Cgy.js";import"./createTheme-DJv4KxAa.js";import"./resolveComponentProps-BzkYWVeC.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-DpIKFJcv.js";import"./createSvgIcon-BXRachk3.js";import"./DefaultPropsProvider-CC3RmJFF.js";import"./Close-DK3CWPJx.js";import"./IconButton-QPgr3jad.js";import"./ButtonBase-BzBJSv7k.js";import"./useTimeout-Cb7XUfzj.js";import"./TransitionGroupContext-DCPGH_5I.js";import"./useIsFocusVisible-DJ0VMGRG.js";import"./useEventCallback-nA6SeeXV.js";import"./Stack-DYgZuVBh.js";import"./getThemeProps-FNrSmzJU.js";import"./useTheme-RaTCH1LG.js";import"./Box-C2U2Cla2.js";import"./AlertTitle-DnEBj5ck.js";import"./Typography-DW07qzJw.js";import"./useTheme-Dx1-xZeI.js";import"./Grow-BjBn3HwU.js";import"./index-zJECZUC7.js";import"./utils-DOUzCTI2.js";import"./ClickAwayListener-C_4AhYce.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-D90On-M6.js";import"./index-BAcXyNSJ.js";import"./useControlled-ZTZ0Etwt.js";import"./useId-D7asr5CX.js";import"./Popper-Dig447md.js";import"./Button-DQx1S7a-.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-tNCAfVhp.js";import"./useQuery-CwaWMnsJ.js";import"./utils-DM63yWLX.js";import"./Link-uk-18KNT.js";import"./Collapse-jddULD66.js";import"./isNil-DfPOP6hp.js";import"./_Uint8Array-BkBwBmmf.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DNalVVPe.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-D7Le_Dhe.js";import"./_getTag-Dz-F_7de.js";import"./tinycolor-Begke6kS.js";import"./Fade-CILW4bK-.js";import"./Skeleton-DT9L0_5S.js";import"./inputBaseClasses-DtdDEN5W.js";import"./calculateFriendlyFileSize-DkjKyaJA.js";import"./CheckCircleTwoTone-C5t_bAXs.js";import"./InfoTwoTone-B0Nnp4Au.js";import"./mutation-CUQob5G8.js";import"./dayjs.min-tmZNEDTt.js";import"./chunk-AYJ5UCUI-D-lxXuxw.js";import"./cloneDeep-CKKH_joM.js";import"./_initCloneObject-B09Yb8G1.js";import"./isEqual-BRN3P_WC.js";import"./merge-CO9M1S60.js";import"./identity-DKeuBCMA.js";import"./useMutation-C_Cy9bj7.js";import"./SkeletonButton-C9j-UIVc.js";import"./SkeletonInlineBlock-BCH-gab1.js";import"./SkeletonTable-ucykrqSH.js";import"./times-CKMRw9f7.js";import"./toInteger--fdXjpa-.js";import"./isSymbol-D-tqd1gC.js";import"./SkeletonParagraph-B4TCPpu7.js";import"./uniqueId-Dh8Eo-F7.js";import"./toString-nwJ1m07f.js";import"./CSSTransition-DvXmE7MO.js";import"./ConditionalWrapper-Bq8wPq8z.js";import"./LockTwoTone-DCwC1irY.js";import"./Avatar-PySKyG65.js";const ur={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
