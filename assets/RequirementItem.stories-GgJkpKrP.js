import{j as a}from"./jsx-runtime-DHIV3NgZ.js";import{m as P}from"./mockWiki-CgjxDh2Q.js";import{M as x}from"./MarkdownSynapse-CZ3bFOmU.js";import{d as s}from"./ToastMessage-vCM58AN2.js";import{R as n,a as t}from"./RequirementItem-DeXh5YtD.js";import{P as O}from"./Paper-Bc8Qqi_T.js";import"./index-CiYMHn1W.js";import"./iframe-9bS_PLuc.js";import"./mock_user_profile-CijvmO8r.js";import"./mock_file_handle-CFTRkxcS.js";import"./VerificationSubmission-BI5WaB2N.js";import"./useFiles-DjXRh0_n.js";import"./SynapseConstants-fQvBwSlx.js";import"./OrientationBanner-BhufqD1t.js";import"./index-D-zz3DaY.js";import"./spreadSx-CwcO6WA9.js";import"./react-B3nk1sNR.js";import"./FullWidthAlert-C8QiR1e2.js";import"./Alert-LB2clXnU.js";import"./createTheme-Dr-FRt9h.js";import"./resolveComponentProps-Sf251QpC.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-C9IHRvmt.js";import"./createSvgIcon-BBEbPora.js";import"./DefaultPropsProvider-BAMSfddg.js";import"./Close-ByobNJAN.js";import"./IconButton-D-tqR65J.js";import"./ButtonBase-C-DypvYL.js";import"./useTimeout-BiQhycxo.js";import"./TransitionGroupContext-BBtvCtfD.js";import"./useIsFocusVisible-mZKnxQyk.js";import"./useEventCallback-JqRP_TZc.js";import"./Stack-DXiFrEmq.js";import"./getThemeProps-DLQUokRi.js";import"./useTheme-DcLbTF_6.js";import"./Box-BW1oPic-.js";import"./AlertTitle-qhIofB3L.js";import"./Typography-DmEMLsP4.js";import"./useTheme-nIT41qkF.js";import"./Grow-BC_xmw6o.js";import"./index-4OiUqoTL.js";import"./utils-GYwY21oY.js";import"./ClickAwayListener-B8xxEDtm.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-JzxXX3xe.js";import"./index-BFdM0H06.js";import"./useControlled-0q5EUitM.js";import"./useId-Bv47RgPy.js";import"./Popper-BqTYAN2h.js";import"./Button-Ca1xluWo.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-DN6u4g4A.js";import"./useQuery-CtFs5y4P.js";import"./utils-2YUT114m.js";import"./Link-CCpec3ar.js";import"./Collapse-Bya5aszg.js";import"./isNil-CQPdfDEX.js";import"./_Uint8Array-CtrrdRS6.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-vEelmOLE.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-KSbFY_iK.js";import"./_getTag-CGOAJCRD.js";import"./tinycolor-Begke6kS.js";import"./Fade-CJ8x8QLn.js";import"./Skeleton-sF-UrVUs.js";import"./inputBaseClasses-DdQjr_My.js";import"./calculateFriendlyFileSize-M5bk7f-W.js";import"./CheckCircleTwoTone-8R91UKy5.js";import"./InfoTwoTone-BvOnGl6w.js";import"./mutation-D54CMcpZ.js";import"./dayjs.min-C1-dRU45.js";import"./chunk-AYJ5UCUI-B7vmRBcT.js";import"./cloneDeep-jYEjTLhY.js";import"./_initCloneObject-BF1nDgPw.js";import"./isEqual-CQGRlhBE.js";import"./merge-CVJPWvx4.js";import"./identity-DKeuBCMA.js";import"./useMutation-BiU6JSNc.js";import"./SkeletonButton-BytHrszf.js";import"./SkeletonInlineBlock-DSwJ4nyw.js";import"./SkeletonTable-BnhxsxXu.js";import"./times-rmMWXUrn.js";import"./toInteger-BJwvUQ2x.js";import"./isSymbol-C4jnPpKO.js";import"./SkeletonParagraph-D0HInUtA.js";import"./uniqueId-C6WYovwQ.js";import"./toString-z0lluA1u.js";import"./CSSTransition-C5RGj1Hk.js";import"./ConditionalWrapper-kXdOL8Jk.js";import"./LockTwoTone-DfCKAWTu.js";import"./Avatar-DntD0PW1.js";const ur={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
