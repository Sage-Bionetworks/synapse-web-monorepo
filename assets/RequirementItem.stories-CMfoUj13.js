import{j as a}from"./jsx-runtime-BKf5RQqp.js";import{m as P}from"./mockWiki-B6wTqEDI.js";import{M as x}from"./MarkdownSynapse-DuJwHiEQ.js";import{d as s}from"./ToastMessage-D_3GKw-3.js";import{R as n,a as t}from"./RequirementItem-Q0EvE0zP.js";import{P as O}from"./Paper-DiRfE40y.js";import"./index-B9M1VMdY.js";import"./iframe-DrxrBbCN.js";import"./mock_user_profile-CijvmO8r.js";import"./mock_file_handle-3wYKbysY.js";import"./VerificationSubmission-dxY1kvC5.js";import"./useFiles-S3rZyFqo.js";import"./SynapseConstants-DOl4aYU7.js";import"./OrientationBanner-Cgb7NpTp.js";import"./index-CvaCOTZN.js";import"./spreadSx-CwcO6WA9.js";import"./react-DH013oxs.js";import"./FullWidthAlert-Dd_na1Es.js";import"./Alert-Cgxhkh7G.js";import"./createTheme-DvTVIqjb.js";import"./resolveComponentProps-DPQntKSC.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-DIg_dHQL.js";import"./createSvgIcon-hbT_i5o6.js";import"./DefaultPropsProvider-n162cE-R.js";import"./Close-BfHkgXih.js";import"./IconButton-CUjwcRMT.js";import"./ButtonBase-CBwCYDGT.js";import"./useTimeout-zL07Ezm-.js";import"./TransitionGroupContext-DyKzf55a.js";import"./useIsFocusVisible-CRgE5DAe.js";import"./useEventCallback-Ct97vZo3.js";import"./Stack-D2Q57en8.js";import"./getThemeProps-CnIOYt9Y.js";import"./useTheme-Bekjdflv.js";import"./Box-D7zKVt5d.js";import"./AlertTitle-1sffTsZH.js";import"./Typography-DzBHpQw1.js";import"./useTheme-CEZhMqZD.js";import"./Grow-BaIE4F4U.js";import"./index-5WQ-QQb9.js";import"./utils-Bc1CwYEB.js";import"./ClickAwayListener-CxOU0Mam.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BEF1_Vht.js";import"./index-P0g_OErs.js";import"./useControlled-Cy6R5uHn.js";import"./useId-DqRnOE6C.js";import"./Popper-BbC7HGmV.js";import"./Button-Cb0Y6AbC.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-lE31obNl.js";import"./useQuery-Cxycb3jH.js";import"./utils-DtsR_yTk.js";import"./Link-Cu43YTgh.js";import"./Collapse-DVsMgavj.js";import"./isNil-ByvPwQOL.js";import"./_Uint8Array-C3OS79Gb.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-loWZaajr.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-gfmG73DD.js";import"./_getTag-Bc2H9Xcc.js";import"./tinycolor-Begke6kS.js";import"./Fade-BJV6ivWB.js";import"./Skeleton-DpQMO-g4.js";import"./inputBaseClasses-D3AwDbQD.js";import"./calculateFriendlyFileSize-C7irlqqb.js";import"./CheckCircleTwoTone-BX_oHHcp.js";import"./InfoTwoTone-DlYvTuQN.js";import"./mutation-CTQh6bQy.js";import"./dayjs.min-CodsgMmV.js";import"./chunk-AYJ5UCUI-BC-6-RBu.js";import"./cloneDeep-DLtL0oYk.js";import"./_initCloneObject-BGcQbDnl.js";import"./isEqual-p7X2E0s9.js";import"./merge-BNCYZUK1.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-Skkackae.js";import"./SkeletonInlineBlock-CqG192xZ.js";import"./SkeletonTable-C7kWa3wE.js";import"./times-Bc8Rg50M.js";import"./toInteger-jwb4_ePs.js";import"./isSymbol-C3DlElTY.js";import"./SkeletonParagraph-NmU2KbK8.js";import"./uniqueId-Di_31gHS.js";import"./toString-DzAm8fGd.js";import"./CSSTransition-DlSVkERf.js";import"./ConditionalWrapper-rPp6z28Z.js";import"./LockTwoTone-WBLA2q8S.js";import"./Avatar-Dv6EQyjE.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
