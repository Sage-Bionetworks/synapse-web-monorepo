import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-B-6y4hGg.js";import{d as s}from"./ToastMessage-DiWXqVDc.js";import{R as n,a as t}from"./RequirementItem-B1v41shl.js";import{P as O}from"./Paper-BtspOLtq.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-BKB5xZDa.js";import"./SynapseConstants-Km9a4VVT.js";import"./OrientationBanner-tOI4QWTZ.js";import"./index-wZT_5GMZ.js";import"./index-RQ0VRfBe.js";import"./iframe-BSwI0BuQ.js";import"./spreadSx-CwcO6WA9.js";import"./react-Ds-lhlJ9.js";import"./FullWidthAlert-BZjYeA9K.js";import"./Alert-C6oiQz9e.js";import"./createTheme-B3a40uRt.js";import"./DefaultPropsProvider-Brvdw7MK.js";import"./useSlot-B-ceud5V.js";import"./useForkRef-iIcboBYr.js";import"./createSimplePaletteValueFilter-DOADF6SA.js";import"./createSvgIcon-C8DENwZc.js";import"./Close-CciatGX4.js";import"./IconButton-BOPXpIMm.js";import"./useTimeout-DdZabwmr.js";import"./ButtonBase-BswOUPWa.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-D7ys3hik.js";import"./Stack-BY-lMUSZ.js";import"./extendSxProp-DaREFPpk.js";import"./getThemeProps-DSldrJ4N.js";import"./useTheme-DOWP3Og2.js";import"./Box-Dbh1vRpk.js";import"./AlertTitle-B1i8KogI.js";import"./Typography-BHJkApfL.js";import"./index-CeTarxud.js";import"./useTheme-shV1vWHw.js";import"./ClickAwayListener-CA-mVuPg.js";import"./getReactElementRef-DScjaHqm.js";import"./index-ByRN_LZE.js";import"./index-KthTLK7W.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DApu84Af.js";import"./Tooltip-BkpuHW2s.js";import"./index-CtQ2an3R.js";import"./useControlled-DeJIqeNy.js";import"./Popper-DQ4U8fRj.js";import"./Button-DPlz7I9N.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-jjEIiNsZ.js";import"./QueryClientProvider-BOZbETI3.js";import"./Link-DmjQC7-j.js";import"./Collapse-CbAeCE0n.js";import"./_baseUniq-C2J42JgB.js";import"./_Uint8Array-DUEnRYfi.js";import"./isArray-TInT70Wl.js";import"./_getTag-zZpNkEfp.js";import"./isEqual--F9hXBUD.js";import"./merge-DzyF6tGw.js";import"./_initCloneObject-DmsaUw5q.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CG1rLM0A.js";import"./inputBaseClasses-BKC7y2R3.js";import"./calculateFriendlyFileSize-Cg9csoK1.js";import"./CheckCircleTwoTone-C4Hqs1v7.js";import"./InfoTwoTone-Bp7rSt0F.js";import"./useMutation-CaKYWgPl.js";import"./dayjs.min-CcFmKoce.js";import"./chunk-AYJ5UCUI-BIm36Kjl.js";import"./cloneDeep-DMWpOHbG.js";import"./Skeleton-yyex56ve.js";import"./SkeletonButton-DJxD3Rwm.js";import"./SkeletonInlineBlock-BS1oQF1e.js";import"./SkeletonTable-Dsvepo10.js";import"./times-Bs8jqiDV.js";import"./toInteger-CD8fkOot.js";import"./isSymbol-CsjI-kps.js";import"./SkeletonParagraph-BSDuWPFp.js";import"./uniqueId-MZulaooa.js";import"./toString-QbpaYQ0i.js";import"./CSSTransition-C0PJnQCU.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-RcXqoDfX.js";import"./Avatar-CP0Tmpag.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
