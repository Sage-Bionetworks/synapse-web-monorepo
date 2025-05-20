import{j as a}from"./jsx-runtime-BSDkjlWP.js";import{m as P}from"./mockWiki-B6wTqEDI.js";import{M as x}from"./MarkdownSynapse-CSD_n8au.js";import{d as s}from"./ToastMessage-BbjFwnBS.js";import{R as n,a as t}from"./RequirementItem-Bp_e3mjN.js";import{P as O}from"./Paper-BL99ePLy.js";import"./index-C5la8P61.js";import"./iframe-CpEO7aLV.js";import"./mock_user_profile-CijvmO8r.js";import"./mock_file_handle-3wYKbysY.js";import"./VerificationSubmission-dxY1kvC5.js";import"./useFiles-CZsA5Qbe.js";import"./SynapseConstants-vcY9rUFQ.js";import"./OrientationBanner-D5sJkCGc.js";import"./index-DPgOB9HS.js";import"./spreadSx-CwcO6WA9.js";import"./react-J0iAw686.js";import"./FullWidthAlert-B6cMQssk.js";import"./Alert-CNReWYbj.js";import"./createTheme-CcZqtVQC.js";import"./resolveComponentProps-WbVcNb2t.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-C-qyZ7hs.js";import"./createSvgIcon-BuoEkjeb.js";import"./DefaultPropsProvider-CCFrHV6G.js";import"./Close-Dmq5Q2BI.js";import"./IconButton-CeBEfxKg.js";import"./ButtonBase-Dj24P196.js";import"./useTimeout-MHdoqxi2.js";import"./TransitionGroupContext-D5hN35Nq.js";import"./useIsFocusVisible-Brkq1bEu.js";import"./useEventCallback-By8RRSD5.js";import"./Stack-BZKtOe4B.js";import"./getThemeProps-B-5KhnFs.js";import"./useTheme-DimN_8rV.js";import"./Box-CWVIrzZU.js";import"./AlertTitle-DTLuH1wp.js";import"./Typography-CSVNfWP2.js";import"./useTheme-CzNl4uro.js";import"./Grow-DYzRzPjY.js";import"./index-DFadZPdC.js";import"./utils-q2kOI160.js";import"./ClickAwayListener-Df_B1HkZ.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-Cc_s_Ea-.js";import"./index-CQTG83Ai.js";import"./useControlled-BL8CHqmI.js";import"./useId-CJHw81FJ.js";import"./Popper-Z-Tjlb1o.js";import"./Button-BQQptVZp.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-Df7AZImX.js";import"./useQuery-BLfnvJIe.js";import"./utils-Bl63LDw7.js";import"./Link-D383uXAh.js";import"./Collapse-DnVU92Yn.js";import"./isNil-BXln-Rw9.js";import"./_Uint8Array-E7WFpk-u.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-k4kl7PfQ.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-CPf1wA0P.js";import"./_getTag-D5ek6wSw.js";import"./tinycolor-Begke6kS.js";import"./Fade-VkwcT0iP.js";import"./Skeleton-BQySDk-s.js";import"./inputBaseClasses-BbfvtJGq.js";import"./calculateFriendlyFileSize-DpIr_Q57.js";import"./CheckCircleTwoTone-RvtZIOI1.js";import"./InfoTwoTone-DmSSeuxV.js";import"./mutation-BOccHYKf.js";import"./dayjs.min-D__DKXuu.js";import"./chunk-AYJ5UCUI-BR7iJ0im.js";import"./cloneDeep-jr1Kpy2S.js";import"./_initCloneObject-BFRTamF7.js";import"./isEqual-RCY8KJA0.js";import"./merge-kqURPiz6.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-KxtiKdna.js";import"./SkeletonInlineBlock-BNPmfQp_.js";import"./SkeletonTable-rx4VV35m.js";import"./times-D810fRPe.js";import"./toInteger-C9wYIDOk.js";import"./isSymbol-D-4sADwM.js";import"./SkeletonParagraph-C8aKAP0Y.js";import"./uniqueId-DF_XNRmE.js";import"./toString-DdeBW9bk.js";import"./CSSTransition-C8xKkBMo.js";import"./ConditionalWrapper-CtFpEFpw.js";import"./LockTwoTone-CRO24huD.js";import"./Avatar-0lj9u-wn.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
