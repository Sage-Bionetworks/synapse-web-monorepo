import{j as a}from"./jsx-runtime-BZeBjSIS.js";import{m as P}from"./mockWiki-DiBhlaV-.js";import{M as x}from"./MarkdownSynapse-CvB7Heat.js";import{d as s}from"./ToastMessage-DEAa4r0P.js";import{R as n,a as t}from"./RequirementItem-Bi-DZp1-.js";import{P as O}from"./Paper-BYyNkBER.js";import"./index-CjoTohT0.js";import"./iframe-CvhAkLtT.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-C2NjfX48.js";import"./VerificationSubmission-DHPhgAH7.js";import"./useFiles-Dzh-xGba.js";import"./SynapseConstants-DV83Gi-b.js";import"./OrientationBanner-DELzGaI_.js";import"./index-CZ6nZZM5.js";import"./spreadSx-CwcO6WA9.js";import"./react-B_ep3ieK.js";import"./FullWidthAlert-BXqxc3wv.js";import"./Alert-7_PfCLqB.js";import"./createTheme-bwx9K6ts.js";import"./resolveComponentProps-a0-4iTOu.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-D4KURWw8.js";import"./createSvgIcon-DbCE1SVw.js";import"./DefaultPropsProvider-DUfDTxF6.js";import"./Close-CimlcXQB.js";import"./IconButton-C6l0SFmN.js";import"./ButtonBase-BbwScQV5.js";import"./useTimeout-CVOpskps.js";import"./TransitionGroupContext-UobnCySz.js";import"./useIsFocusVisible-BO1LLD9d.js";import"./useEventCallback-Cf7PpRR2.js";import"./Stack-B020NLmB.js";import"./getThemeProps-BKFu32XS.js";import"./useTheme-SJCcizRe.js";import"./Box-DHzWNABX.js";import"./AlertTitle-Dgp4KesF.js";import"./Typography-DUG2FEmz.js";import"./useTheme-uJlIsAiP.js";import"./Grow-x5lwJPlc.js";import"./index-DTVgpHag.js";import"./utils-CAcyHLoV.js";import"./ClickAwayListener-Dt9keXb4.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-CLFxhQMN.js";import"./index-BH5wt59E.js";import"./useControlled-Cbsj5wQj.js";import"./useId-ByMtCpEj.js";import"./Popper-DsfBWyJe.js";import"./Button-DMakyqZH.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-Bj0SG9ce.js";import"./useQuery-DnQsqcrx.js";import"./utils-DH5Oqlgj.js";import"./Link-Y75nS1QX.js";import"./Collapse-ffc1sN3U.js";import"./isNil-D3yHmM32.js";import"./_Uint8Array--_t6qXLg.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CrwNC6oF.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-DtJNdB66.js";import"./_getTag-CKpP1EoQ.js";import"./tinycolor-Begke6kS.js";import"./Fade-BuGhOS_y.js";import"./Skeleton-BcT1rE-U.js";import"./inputBaseClasses-DPMPLyNE.js";import"./calculateFriendlyFileSize-9wUeoNJq.js";import"./CheckCircleTwoTone-UctgIY4f.js";import"./InfoTwoTone-DIz8M3OP.js";import"./useMutation-C2yIdTsq.js";import"./isEqual-qdpfjJTj.js";import"./dayjs.min-D6B11bIY.js";import"./chunk-AYJ5UCUI-BI5gnHbm.js";import"./cloneDeep-DCOcf-ad.js";import"./_initCloneObject-Cq-aANJ9.js";import"./merge-D2stCHL9.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-BEnTmZDa.js";import"./SkeletonInlineBlock-eDPtkaaD.js";import"./SkeletonTable-C_uULwMl.js";import"./times-De0aD8Xw.js";import"./toInteger-D929D5Ls.js";import"./isSymbol-BRnPZc8c.js";import"./SkeletonParagraph-DkXoiRal.js";import"./uniqueId-CXvGH3bE.js";import"./toString-z4n4XpTO.js";import"./CSSTransition-DQTmhlEj.js";import"./ConditionalWrapper-MwVnk6k0.js";import"./LockTwoTone-Br7pcKqa.js";import"./Avatar-DJvjmjIa.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
