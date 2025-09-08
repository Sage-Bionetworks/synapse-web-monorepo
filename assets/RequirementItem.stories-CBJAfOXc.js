import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-BjsSPAW9.js";import{M as x}from"./MarkdownSynapse-C2tt-4rm.js";import{d as s}from"./ToastMessage-B2skvxE7.js";import{R as n,a as t}from"./RequirementItem-LvTBzA1e.js";import{P as O}from"./Paper-DZq6vmXR.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BgkszYEk.js";import"./VerificationSubmission-D0sL2gwz.js";import"./useFiles-DOT7Kf5e.js";import"./SynapseConstants-BFsckqND.js";import"./OrientationBanner-vm3Uug8o.js";import"./index-CBcMDjG5.js";import"./index-BvkzVhja.js";import"./iframe-D86gUYfY.js";import"./spreadSx-CwcO6WA9.js";import"./react-B7GgqiOd.js";import"./FullWidthAlert-DG03OKrG.js";import"./Alert-WcAu8OxA.js";import"./createTheme-BnKHTdnQ.js";import"./DefaultPropsProvider-CYw3Fks0.js";import"./useSlot-CpbBpyfC.js";import"./useForkRef-D6RYFZJE.js";import"./createSimplePaletteValueFilter-BID9b8gQ.js";import"./createSvgIcon-TqGA5GS4.js";import"./Close-CTF45zn1.js";import"./IconButton-xQjHQzJV.js";import"./useTimeout-BhJcJhho.js";import"./ButtonBase-C-uVUtTT.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-D9VUIaZV.js";import"./Stack-C-KnMMTe.js";import"./extendSxProp-PG9lN2V8.js";import"./getThemeProps-aAOWIBG1.js";import"./useTheme-DOHmBU_Q.js";import"./Box-Ch_qkwG8.js";import"./AlertTitle-Vpnt_q-u.js";import"./Typography-ClJ7qrfT.js";import"./index-BpWTALmT.js";import"./useTheme-CNZLKbAz.js";import"./ClickAwayListener-D2ZJQO-q.js";import"./getReactElementRef-CSwoQRSl.js";import"./index-D1ZhQdri.js";import"./index-nooAMcKr.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-1U6ARRbe.js";import"./Tooltip-DlgKzRYd.js";import"./index-Djkai_n6.js";import"./useControlled-BqXuHVop.js";import"./Popper-BOpwvkY8.js";import"./Button-CFj-G6sD.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bt2r5KGg.js";import"./useQuery-B5WZxfnm.js";import"./QueryClientProvider-Bw-sUfxd.js";import"./Link-BoxUl1rG.js";import"./Collapse-DgVb8QQQ.js";import"./_baseUniq-2UaCu3Jw.js";import"./_Uint8Array-6IB5bB9B.js";import"./isArray-BWfjxlvB.js";import"./_getTag-ZEhjLntR.js";import"./isEqual-h7ZjSABb.js";import"./merge-B5rBlFmL.js";import"./_initCloneObject-vgZXLCqG.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-D5Eu1XIh.js";import"./inputBaseClasses-DrFRH_VH.js";import"./calculateFriendlyFileSize-LIZWMyaA.js";import"./CheckCircleTwoTone-Dg7Y-mS9.js";import"./InfoTwoTone-CT5xw0TJ.js";import"./useMutation-BOFn0MGu.js";import"./dayjs.min-zWOubbPA.js";import"./chunk-AYJ5UCUI-nqgqpkF9.js";import"./cloneDeep-De6cZq_K.js";import"./Skeleton-Cz56GLNo.js";import"./SkeletonButton-D00laxeG.js";import"./SkeletonInlineBlock-DqlqFj-V.js";import"./SkeletonTable-DAsmIEfu.js";import"./times-B7h5UMHk.js";import"./toInteger-BBLrcvzZ.js";import"./isSymbol-CT6Sckui.js";import"./SkeletonParagraph-GP3Vn81h.js";import"./uniqueId-B3yeT0Cx.js";import"./toString-Drc6oQ77.js";import"./CSSTransition-Q1ftZVbf.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-0L_OFWMI.js";import"./Avatar-Cqp75TSm.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(q=(I=m.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};const cr=["Complete","Pending","Loading","NoActions","Locked"];export{r as Complete,e as Loading,m as Locked,i as NoActions,o as Pending,cr as __namedExportsOrder,pr as default};
