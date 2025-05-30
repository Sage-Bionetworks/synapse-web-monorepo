import{j as a}from"./jsx-runtime-DlVfSSgi.js";import{m as P}from"./mockWiki-CgjxDh2Q.js";import{M as x}from"./MarkdownSynapse-CwJ90fah.js";import{d as s}from"./ToastMessage-HOv9BIeS.js";import{R as n,a as t}from"./RequirementItem-BKrAuVrp.js";import{P as O}from"./Paper-BbPwTjsC.js";import"./index-DPE8LggK.js";import"./iframe-Jjs3PvF2.js";import"./mock_user_profile-CijvmO8r.js";import"./mock_file_handle-CFTRkxcS.js";import"./VerificationSubmission-BI5WaB2N.js";import"./useFiles-BvVEvkzV.js";import"./SynapseConstants-wqvrHPlZ.js";import"./OrientationBanner-DmzYZlcd.js";import"./index-CxxiR4Y6.js";import"./spreadSx-CwcO6WA9.js";import"./react-CeGRGS1C.js";import"./FullWidthAlert-ick5Fkqc.js";import"./Alert-Cfop5H0X.js";import"./createTheme-wIq6nkHq.js";import"./resolveComponentProps-DfBwVYrR.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CL1DfuC5.js";import"./createSvgIcon-Dd24k-E7.js";import"./DefaultPropsProvider-CUAfvKu9.js";import"./Close-C4EX66tx.js";import"./IconButton-B8SjGcLt.js";import"./ButtonBase-BYiG-NiS.js";import"./useTimeout-CELy5fSc.js";import"./TransitionGroupContext-BKX3xK3G.js";import"./useIsFocusVisible-CZhSNZhW.js";import"./useEventCallback-qRG00JS0.js";import"./Stack-HJIz7Hbf.js";import"./getThemeProps-BZgCW1lw.js";import"./useTheme-ji22fOw_.js";import"./Box-KwwXXMF7.js";import"./AlertTitle-DOccvRxz.js";import"./Typography--GpIRUDE.js";import"./useTheme-CwZpFb2K.js";import"./Grow-C2jy2TXc.js";import"./index-CtZ76oBs.js";import"./utils-CT4h-b37.js";import"./ClickAwayListener-CLPL0qy8.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-bzEc3Szz.js";import"./index-DQZASTmO.js";import"./useControlled-D55v4Buj.js";import"./useId-Brt77SST.js";import"./Popper-BQa6JT3M.js";import"./Button-P2Zyoj0L.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-DN6u4g4A.js";import"./useQuery-B_NCuM87.js";import"./utils-CFiJ55YR.js";import"./Link-EwXe_hHa.js";import"./Collapse-CtmwXz7e.js";import"./isNil-CgvgzyZy.js";import"./_Uint8Array-BcqxRYau.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-BBK9B_em.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-471Ecflj.js";import"./_getTag-C7oE45wN.js";import"./tinycolor-Begke6kS.js";import"./Fade-DCVnogLJ.js";import"./Skeleton-pRm6tosD.js";import"./inputBaseClasses-FBOigNcs.js";import"./calculateFriendlyFileSize-TGjloNDJ.js";import"./CheckCircleTwoTone-CBhEJAKe.js";import"./InfoTwoTone-CtFVuxDs.js";import"./mutation-DyOiQnhd.js";import"./dayjs.min-CduCMC2B.js";import"./chunk-AYJ5UCUI-DbU7SMux.js";import"./cloneDeep-BkhdAupP.js";import"./_initCloneObject-C2815fMz.js";import"./isEqual-DVG7vGtv.js";import"./merge-BsKyAI14.js";import"./identity-DKeuBCMA.js";import"./useMutation-BV1qse47.js";import"./SkeletonButton-BUN54erb.js";import"./SkeletonInlineBlock-BA4K4QpT.js";import"./SkeletonTable-CQElZNRO.js";import"./times-B_1nsUoq.js";import"./toInteger-DeeBnvuL.js";import"./isSymbol-Drw9LxVq.js";import"./SkeletonParagraph-DVgPQx75.js";import"./uniqueId-RWPbo41m.js";import"./toString-DYDbwbUo.js";import"./CSSTransition-aGd0ez1s.js";import"./ConditionalWrapper-CSZyiuVp.js";import"./LockTwoTone-S4i8rThM.js";import"./Avatar-CpJqaGIU.js";const ur={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
