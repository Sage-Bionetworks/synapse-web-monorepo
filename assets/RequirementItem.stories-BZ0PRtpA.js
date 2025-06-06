import{j as a}from"./jsx-runtime-CZmUC0kc.js";import{m as P}from"./mockWiki-DiBhlaV-.js";import{M as x}from"./MarkdownSynapse-CFzu2KcT.js";import{d as s}from"./ToastMessage-CsnM0gEi.js";import{R as n,a as t}from"./RequirementItem-DQFZnbhl.js";import{P as O}from"./Paper-BWc9QIn7.js";import"./index-D48dKAGK.js";import"./iframe-DXxs8wzV.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-C2NjfX48.js";import"./VerificationSubmission-DHPhgAH7.js";import"./useFiles-QsHV2q1R.js";import"./SynapseConstants-BtQ24Nut.js";import"./OrientationBanner-Bqf4PnT9.js";import"./index-Bqph6avf.js";import"./spreadSx-CwcO6WA9.js";import"./react-DnH3PGz_.js";import"./FullWidthAlert-WrZ35eIA.js";import"./Alert-CrX7ZBHc.js";import"./createTheme-DdUHwKDu.js";import"./resolveComponentProps-DBk_bQ3w.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-B4VymO4y.js";import"./createSvgIcon-CGfU68f8.js";import"./DefaultPropsProvider-DnsYkYhu.js";import"./Close-B2Put2a1.js";import"./IconButton-MNk6eaK_.js";import"./ButtonBase-DijL8LGZ.js";import"./useTimeout-CfJSgBAN.js";import"./TransitionGroupContext-xk93-I-l.js";import"./useIsFocusVisible-pZRnHMmE.js";import"./useEventCallback-CfXeTH2v.js";import"./Stack-s10dd2v_.js";import"./getThemeProps-DpFYsVdH.js";import"./useTheme-Cdkd9-zl.js";import"./Box-EZ-Kz8mO.js";import"./AlertTitle-qABI-vcz.js";import"./Typography-CDDEj6bd.js";import"./useTheme-CDkkRwMy.js";import"./Grow-DPoxz4OE.js";import"./index-CTlj-uEa.js";import"./utils-BgEZDT5t.js";import"./ClickAwayListener-CyT30qp6.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-B0EkgW6k.js";import"./index-7Uf9BQgU.js";import"./useControlled-DZ97s39z.js";import"./useId-Buvf4Xiv.js";import"./Popper-DgH4d2MR.js";import"./Button-CYaahIbs.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-Bj0SG9ce.js";import"./useQuery-DWbROD4e.js";import"./utils-DnrSKvOR.js";import"./Link-Cbjql7oX.js";import"./Collapse-DQpZ3-gN.js";import"./isNil-BEj-5XkN.js";import"./_Uint8Array-K-J4cL1T.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DKyqGUYf.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-DH-XEyfw.js";import"./_getTag-CYk1drFw.js";import"./tinycolor-Begke6kS.js";import"./Fade-B1FcSJEt.js";import"./Skeleton-DJgc57tZ.js";import"./inputBaseClasses-DcQwlFr_.js";import"./calculateFriendlyFileSize-9m6yHg2A.js";import"./CheckCircleTwoTone-BY4FzlSL.js";import"./InfoTwoTone-DL9tebAy.js";import"./useMutation-hkATgPdp.js";import"./isEqual-b23C5zIw.js";import"./dayjs.min-DlNJuh2r.js";import"./chunk-AYJ5UCUI-S23a5Wq1.js";import"./cloneDeep-hNZImc-4.js";import"./_initCloneObject-02v0DsxF.js";import"./merge-Dd1BqavR.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-CMbg4Bdv.js";import"./SkeletonInlineBlock-BrxzpBUR.js";import"./SkeletonTable-BIbnUYiA.js";import"./times-DpG8gG-S.js";import"./toInteger-g29JVhcw.js";import"./isSymbol-Db5oJ-yg.js";import"./SkeletonParagraph-CYjIXPs8.js";import"./uniqueId-BNVOIyXj.js";import"./toString-BtL3po-k.js";import"./CSSTransition-Dac5NA2u.js";import"./ConditionalWrapper-C_UFfSYX.js";import"./LockTwoTone-BfPt2kGI.js";import"./Avatar-CKpRuxqj.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
