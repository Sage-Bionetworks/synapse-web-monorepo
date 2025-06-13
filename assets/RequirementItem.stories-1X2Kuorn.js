import{j as a}from"./jsx-runtime-BiWA54l5.js";import{m as P}from"./mockWiki-CfZ4orwO.js";import{M as x}from"./MarkdownSynapse-Ckh6CIb7.js";import{d as s}from"./ToastMessage-B5kqCROX.js";import{R as n,a as t}from"./RequirementItem-DJrjFFNQ.js";import{P as O}from"./Paper-BdIQK_6J.js";import"./index-DhiVPEXr.js";import"./iframe-DdfsIYam.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-qAzg5fnb.js";import"./VerificationSubmission-DKyendrM.js";import"./useFiles-DFuiG744.js";import"./SynapseConstants-Bqeym1jK.js";import"./OrientationBanner-DtOwZzDw.js";import"./index-C12dOKGf.js";import"./spreadSx-CwcO6WA9.js";import"./react-DMypNxiR.js";import"./FullWidthAlert-zKKUZdhG.js";import"./Alert-XZzYdMFx.js";import"./createTheme-D7uPp7E_.js";import"./DefaultPropsProvider-BNGQCVUl.js";import"./useSlot-mlQ06HgV.js";import"./useForkRef-D6Ozyr_R.js";import"./createSimplePaletteValueFilter-37lQ19gZ.js";import"./createSvgIcon-BrbTVqGj.js";import"./Close-Ce0cvGVf.js";import"./IconButton-DiRXQYen.js";import"./useTimeout-DBCArjJg.js";import"./ButtonBase-BAw29sd5.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-X0wyc6kr.js";import"./Stack-DAwVky2z.js";import"./extendSxProp-BFwTiWAX.js";import"./getThemeProps-C20Tg9I8.js";import"./useTheme-ClwTON04.js";import"./Box-ChSwPMHV.js";import"./AlertTitle-BIF0pMej.js";import"./Typography-BQoiqdiw.js";import"./index-BP2NWRlB.js";import"./useTheme-Bgl42pYj.js";import"./ClickAwayListener-nsW1tqeE.js";import"./getReactElementRef-Cx7-4IP1.js";import"./index-3znFL5fM.js";import"./index-CbQDV7ub.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BA9w5EK3.js";import"./Tooltip-BQ2Zx4cU.js";import"./index-CnleELMM.js";import"./useControlled-DL7QACQp.js";import"./Popper-CzJrasAD.js";import"./Button-BX-85nHl.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BcSmk1fX.js";import"./useQuery-C8aUx7Vd.js";import"./utils-BlMtL_IL.js";import"./Link-DWAOj1dQ.js";import"./Collapse-Cj9251w7.js";import"./isNil-Bp9Gpt_s.js";import"./_Uint8Array-IiFQ2nXs.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-Sn8HKbSJ.js";import"./isArray-Dxzbedgu.js";import"./isEqual-CBR6zOeP.js";import"./_getTag-BJIbzf7A.js";import"./tinycolor-Begke6kS.js";import"./Fade-B_Kbt0VW.js";import"./inputBaseClasses-B5msBFiG.js";import"./calculateFriendlyFileSize-DFGrycOX.js";import"./CheckCircleTwoTone-C4eJ2xB1.js";import"./InfoTwoTone-D7rbUfcN.js";import"./useMutation-BAtKFIoo.js";import"./dayjs.min-iire0L97.js";import"./chunk-AYJ5UCUI-CHKzmd4h.js";import"./cloneDeep-CjyUMlLu.js";import"./_initCloneObject-B8SJcj1G.js";import"./Skeleton-wLFF7FAc.js";import"./merge-CMku2vk-.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-CjXI0jay.js";import"./SkeletonInlineBlock-C5eIWZNm.js";import"./SkeletonTable-BvFU6alJ.js";import"./times-OZxeV_Ik.js";import"./toInteger-D-fuiQdV.js";import"./isSymbol-CyFOxqz5.js";import"./SkeletonParagraph-B6grYnY3.js";import"./uniqueId-EusE9Z6n.js";import"./toString-DMks7KYB.js";import"./CSSTransition-vMy4XDO_.js";import"./ConditionalWrapper-Cem0Scz5.js";import"./LockTwoTone-ChHZn-fj.js";import"./Avatar-Dm3Ca-Tn.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
