import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-EKNHdnCS.js";import{d as s}from"./ToastMessage-DS8RAb6V.js";import{R as n,a as t}from"./RequirementItem-Dhos8PfT.js";import{P as O}from"./Paper-C7lyUKCR.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-CeB0xe6L.js";import"./SynapseConstants-CEjEDq8u.js";import"./OrientationBanner-CGeLU5Gh.js";import"./index-nnySlh3_.js";import"./index-gzV-alW2.js";import"./iframe-CIVWQ33K.js";import"./spreadSx-CwcO6WA9.js";import"./react-Bm_BhgKX.js";import"./FullWidthAlert-XP7ocI2x.js";import"./Alert-C3HI3P9G.js";import"./createTheme-BA32YtVb.js";import"./DefaultPropsProvider-7LTu_nV0.js";import"./useSlot-Fmis5Wjd.js";import"./useForkRef-CiJASnht.js";import"./createSimplePaletteValueFilter-0d-v7Hop.js";import"./createSvgIcon-D1QNFdjc.js";import"./Close-62PudIRj.js";import"./IconButton-D8S1CJpy.js";import"./useTimeout-CxPr5NUX.js";import"./ButtonBase-BCM_qFb6.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-WbW725xQ.js";import"./Stack-C6tV91ai.js";import"./useThemeProps-BIHnaG_n.js";import"./getThemeProps-ChgRYrqu.js";import"./useTheme-Da2-NH-T.js";import"./extendSxProp-YxuWZy5-.js";import"./Box-BPtaDF2R.js";import"./AlertTitle-CpWyWMb4.js";import"./Typography-CZJl8X-1.js";import"./index-Du0AoN3s.js";import"./useTheme-BZAXixA8.js";import"./ClickAwayListener-CBaHIHRJ.js";import"./getReactElementRef-y_Sl7aoG.js";import"./index-C0-mTje_.js";import"./index-B91qemJH.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-D-7O8-XK.js";import"./Tooltip-zgLZWkWd.js";import"./index-B4U5oXLw.js";import"./useControlled-D-YZcAca.js";import"./Popper-KFskyvW_.js";import"./Button-qzsh14nT.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-RFtqpdqG.js";import"./QueryClientProvider-C8qXa91E.js";import"./Link-DogJ1V6b.js";import"./Collapse-CnT0kb48.js";import"./_baseUniq-DGNmZFTe.js";import"./_Uint8Array-DQwJx2XB.js";import"./isArray-DVD3pNqz.js";import"./_getTag-DdIxGYJG.js";import"./isEqual-BSGvFaHM.js";import"./noop-DX6rZLP_.js";import"./merge-CmCs04-I.js";import"./_initCloneObject-BHRy_7Wm.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DND1I4Lo.js";import"./inputBaseClasses-BLHktJev.js";import"./calculateFriendlyFileSize-zUPO000Z.js";import"./CheckCircleTwoTone-DCcbywJT.js";import"./InfoTwoTone-DV-D_RT7.js";import"./useMutation-BzDbphy2.js";import"./dayjs.min-LJjFF34K.js";import"./chunk-AYJ5UCUI-C5BA4_2k.js";import"./cloneDeep-DU8IJ5IE.js";import"./Skeleton-DVIPn0Lj.js";import"./SkeletonButton-BSUk_V27.js";import"./SkeletonInlineBlock-C8ZHcqgC.js";import"./SkeletonTable-gFeTiDeb.js";import"./times-BOYSUsxP.js";import"./toInteger-CWQgTT_t.js";import"./isSymbol-Bm-mgUZ-.js";import"./SkeletonParagraph-xTgE95OV.js";import"./uniqueId-BcgCMnS0.js";import"./toString-CYbhFFbq.js";import"./CSSTransition-DAGn-AdY.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-3LkSz7W2.js";import"./Avatar-QqJWOlVu.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
