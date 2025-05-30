import{j as a}from"./jsx-runtime-CTFcVP1P.js";import{m as P}from"./mockWiki-CgjxDh2Q.js";import{M as x}from"./MarkdownSynapse-B6cs1pqe.js";import{d as s}from"./ToastMessage-BMxsCkLy.js";import{R as n,a as t}from"./RequirementItem-CFuEcjq0.js";import{P as O}from"./Paper-DvU1IbZk.js";import"./index-DUHgmkzF.js";import"./iframe-D88NDgS-.js";import"./mock_user_profile-CijvmO8r.js";import"./mock_file_handle-CFTRkxcS.js";import"./VerificationSubmission-BI5WaB2N.js";import"./useFiles-qUB1aosH.js";import"./SynapseConstants-0_JCnPTx.js";import"./OrientationBanner-AqWNQ2cQ.js";import"./index-BTiUUTPa.js";import"./spreadSx-CwcO6WA9.js";import"./react-TPPcq5Zx.js";import"./FullWidthAlert-CJMDbx2q.js";import"./Alert-CrkNhfWZ.js";import"./createTheme-Bdh3JIYj.js";import"./resolveComponentProps-o_QiupMa.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-DMC24a-E.js";import"./createSvgIcon-Dus-DnDq.js";import"./DefaultPropsProvider-idcb1ntx.js";import"./Close-DWmoeP58.js";import"./IconButton-CTUXzWkr.js";import"./ButtonBase-BNY22oX6.js";import"./useTimeout-B69MFxFS.js";import"./TransitionGroupContext-DHifbCKs.js";import"./useIsFocusVisible-DucQbIj6.js";import"./useEventCallback--EQ_6um4.js";import"./Stack-B6me4bCA.js";import"./getThemeProps-mddUnrqc.js";import"./useTheme-BhAWdgJj.js";import"./Box-DNw-4nBu.js";import"./AlertTitle-h8DRy4XN.js";import"./Typography-Q68JxFqv.js";import"./useTheme-DHihFqnY.js";import"./Grow-BhT6xGE8.js";import"./index-iHxUZM4O.js";import"./utils-BzYwzlkb.js";import"./ClickAwayListener-CwluvrFu.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-mDgrFK3A.js";import"./index-BOXVFOUz.js";import"./useControlled-B9n_Eohm.js";import"./useId-BMOO1Dfn.js";import"./Popper-CldeZf4a.js";import"./Button-CGHrnfkZ.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-DN6u4g4A.js";import"./useQuery-cylXlfny.js";import"./utils-q5k7caco.js";import"./Link-BDWzO4Vf.js";import"./Collapse-DeDDevjs.js";import"./isNil-BhKOR87a.js";import"./_Uint8Array--rSyjlV8.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DqkFcfeQ.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-D916oHJq.js";import"./_getTag-BQeWtWW7.js";import"./tinycolor-Begke6kS.js";import"./Fade-CptzKgX_.js";import"./Skeleton-WYPrVBD7.js";import"./inputBaseClasses-DiG8IQq1.js";import"./calculateFriendlyFileSize-C7gYpacp.js";import"./CheckCircleTwoTone-D_2jRsql.js";import"./InfoTwoTone-C0zLsr-G.js";import"./mutation-DRMJLiUA.js";import"./dayjs.min-BHrDvJsX.js";import"./chunk-AYJ5UCUI-BWP3PEQF.js";import"./cloneDeep-Bydrfo_1.js";import"./_initCloneObject-B0ccDjP9.js";import"./isEqual-B8v4tGSU.js";import"./merge-BRZVeKvn.js";import"./identity-DKeuBCMA.js";import"./useMutation-CZ3xWt1S.js";import"./SkeletonButton-BFtrwqG4.js";import"./SkeletonInlineBlock-Ci22Kb7G.js";import"./SkeletonTable-C5ymghLm.js";import"./times-Ysd5qLFi.js";import"./toInteger-gp162DtB.js";import"./isSymbol-CP_pROhj.js";import"./SkeletonParagraph-BPhpQzZy.js";import"./uniqueId-DVB0i654.js";import"./toString-GPGkMqLS.js";import"./CSSTransition-CytZ0hxF.js";import"./ConditionalWrapper-DUYspTiz.js";import"./LockTwoTone-hB1mmv0W.js";import"./Avatar-C-5QX_WB.js";const ur={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
