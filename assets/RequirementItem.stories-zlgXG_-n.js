import{j as a}from"./jsx-runtime-BhAJ9Y3L.js";import{m as P}from"./mockWiki-DiBhlaV-.js";import{M as x}from"./MarkdownSynapse-xuOC1rxB.js";import{d as s}from"./ToastMessage-BOBkZSXx.js";import{R as n,a as t}from"./RequirementItem-BJUSCoDD.js";import{P as O}from"./Paper-Dk5V-YxU.js";import"./index-DOU8PYus.js";import"./iframe-B6_QaExc.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-C2NjfX48.js";import"./VerificationSubmission-DHPhgAH7.js";import"./useFiles-BOR3GEax.js";import"./SynapseConstants-BnRMD3Ad.js";import"./OrientationBanner-B5TTXIo1.js";import"./index-BT3_9142.js";import"./spreadSx-CwcO6WA9.js";import"./react-Ce9ZDlA0.js";import"./FullWidthAlert-CBJigWFY.js";import"./Alert-D_KCgbxC.js";import"./createTheme-D3vVDGxc.js";import"./resolveComponentProps-Cjit2Pfx.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-B6dY2QVl.js";import"./createSvgIcon-JfH61MHK.js";import"./DefaultPropsProvider-DhGy6nlm.js";import"./Close-CbL4oY-7.js";import"./IconButton-NaOCI8Aw.js";import"./ButtonBase-D0SP54zG.js";import"./useTimeout-oLXMGs4M.js";import"./TransitionGroupContext-jyNSIYMl.js";import"./useIsFocusVisible-DXSm2biM.js";import"./useEventCallback-hd3UIFn8.js";import"./Stack-IAxykChz.js";import"./getThemeProps--AtUlah8.js";import"./useTheme-Da75Vo1i.js";import"./Box-CYTyMrXG.js";import"./AlertTitle-i5YQ8W7y.js";import"./Typography-Ct5R0hvY.js";import"./useTheme-ZaQ7CBOE.js";import"./Grow-BdWvYuX7.js";import"./index-DM9E6TvJ.js";import"./utils-iLK5s9y8.js";import"./ClickAwayListener-DqnJeGQQ.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DuAYmp6Z.js";import"./index-CFqG_Jpv.js";import"./useControlled-gMYeIHlS.js";import"./useId-CgSs2jjB.js";import"./Popper-BMfFCZeV.js";import"./Button-BoYMPhvT.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-Bj0SG9ce.js";import"./useQuery-DRIeZwaP.js";import"./utils-DXbw_cY9.js";import"./Link-C_cMubJU.js";import"./Collapse-CjFArZDB.js";import"./isNil-Ck-WrAnD.js";import"./_Uint8Array-DPQIIKW5.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-B80JG2sS.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-BJMDhiwP.js";import"./_getTag-29ZQCHUY.js";import"./tinycolor-Begke6kS.js";import"./Fade-BuJnQaLb.js";import"./Skeleton-DA4aoZ9E.js";import"./inputBaseClasses-Bn2kxj98.js";import"./calculateFriendlyFileSize-Bhr9QEPb.js";import"./CheckCircleTwoTone-Be32YNCB.js";import"./InfoTwoTone-ldp8P5kK.js";import"./useMutation-BvjgdMJk.js";import"./isEqual-BW52Ww6h.js";import"./dayjs.min-CyrBdQwZ.js";import"./chunk-AYJ5UCUI-CcAccbZB.js";import"./cloneDeep-wuRwbMo-.js";import"./_initCloneObject-DIw4QhPh.js";import"./merge-B-QEi8am.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-CwHbmIYM.js";import"./SkeletonInlineBlock-quN3Qk-S.js";import"./SkeletonTable-tqzVDH03.js";import"./times-DvX4Whvg.js";import"./toInteger-D0AG0Nxu.js";import"./isSymbol-DcRVdeYx.js";import"./SkeletonParagraph-Cg7SZrUs.js";import"./uniqueId-CD-QlU9Z.js";import"./toString-BupGuEnU.js";import"./CSSTransition-INyHWMmE.js";import"./ConditionalWrapper-mnJvQjcD.js";import"./LockTwoTone-CUYnDQjn.js";import"./Avatar-DMEckZOp.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
