import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-Di6zZNtx.js";import{d as s}from"./ToastMessage-BM9KlZpO.js";import{R as n,a as t}from"./RequirementItem-Bv1bvFbq.js";import{P as O}from"./Paper-CYyby8z3.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-DSPyswUJ.js";import"./SynapseConstants-DUNFlq0e.js";import"./OrientationBanner-BouT6_-v.js";import"./index-ovDtYbUI.js";import"./index-DqCNeVui.js";import"./iframe-DLJ04gD7.js";import"./spreadSx-CwcO6WA9.js";import"./react-DBCxFg72.js";import"./FullWidthAlert-D4uvuPk0.js";import"./Alert-CyNwItA7.js";import"./createTheme-XQ1XG1uT.js";import"./DefaultPropsProvider-B_iKn7F1.js";import"./useSlot-G1t5X145.js";import"./useForkRef-Wbx4V2YI.js";import"./createSimplePaletteValueFilter-0xywFCdl.js";import"./createSvgIcon-AhXV-Lxi.js";import"./Close-M_K7APZJ.js";import"./IconButton-CNFKcrJM.js";import"./useTimeout-Ci1YOS2N.js";import"./ButtonBase-CnbaYMND.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Bc47s1w8.js";import"./Stack-D9rYCQQF.js";import"./useThemeProps-Uu3RamaM.js";import"./getThemeProps-BLiK3YSp.js";import"./useTheme-CktZyT1n.js";import"./extendSxProp-DQG93Und.js";import"./Box-nPc4YptG.js";import"./AlertTitle-o2mAfrn3.js";import"./Typography-D-0ZBQX2.js";import"./index-Dn5oTu5D.js";import"./useTheme-DbAeu6yd.js";import"./ClickAwayListener-vSy9CTVX.js";import"./getReactElementRef-Dojj8YKz.js";import"./index-lhBCL31b.js";import"./index-CQk5-tNr.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BbYs77F_.js";import"./Tooltip-C4CjRY6Y.js";import"./index-B0wLNRQ3.js";import"./useControlled-BbEwI8f2.js";import"./Popper-BTa4sm66.js";import"./Button-BKKfuiiA.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-Dz2CGP3m.js";import"./QueryClientProvider-C0WiXwv4.js";import"./Link-CH4iZoNX.js";import"./Collapse-BH6wb8pT.js";import"./_baseUniq-CqT83kDA.js";import"./_Uint8Array-BN5v77BQ.js";import"./isArray-cRRhqXew.js";import"./_getTag-wQVUyFtv.js";import"./isEqual-dM2_k6w0.js";import"./noop-DX6rZLP_.js";import"./merge-BzIMSKk1.js";import"./_initCloneObject-mADqvNT2.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BEi6VzVG.js";import"./inputBaseClasses-BfMVnRnK.js";import"./calculateFriendlyFileSize-BUdwJH4A.js";import"./CheckCircleTwoTone-B6jn311F.js";import"./InfoTwoTone-Cwq51stI.js";import"./useMutation-DslBe_ZR.js";import"./dayjs.min-CITIma5U.js";import"./chunk-AYJ5UCUI-DxDCzQTA.js";import"./cloneDeep-BGk3XvFY.js";import"./Skeleton-0b9O17k9.js";import"./SkeletonButton-Cuy_5w7R.js";import"./SkeletonInlineBlock-4BOVwqlp.js";import"./SkeletonTable-DmQ9ZUF3.js";import"./times-C3wDPJ1v.js";import"./toInteger-ChHHjLU6.js";import"./isSymbol-jHnzF1wO.js";import"./SkeletonParagraph-BL0oCV-s.js";import"./uniqueId-DR4IDOJJ.js";import"./toString-0dMECawv.js";import"./CSSTransition-DABAdBGO.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-DdyHYUcG.js";import"./Avatar-Bk_ql5Nq.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
