import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-CChBjwIr.js";import{d as s}from"./ToastMessage-CHHGN7Il.js";import{R as n,a as t}from"./RequirementItem-Ya2DpE_Q.js";import{P as O}from"./Paper-DBVwlpo2.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-BZV17LRY.js";import"./SynapseConstants-VIskHFE7.js";import"./OrientationBanner-mYD1KLJ5.js";import"./index-C6oCx5Q4.js";import"./index-CREGy4JU.js";import"./iframe-DFtThXn_.js";import"./spreadSx-CwcO6WA9.js";import"./react-B2udbvLI.js";import"./FullWidthAlert-ZCTjro34.js";import"./Alert-AqaPj6PE.js";import"./createTheme-CE1nmSdD.js";import"./DefaultPropsProvider-BHzoV1Dn.js";import"./useSlot-DMKKbB6i.js";import"./useForkRef-CyS_o1Iz.js";import"./createSimplePaletteValueFilter-C9Flh5mR.js";import"./createSvgIcon-CkgBCV8y.js";import"./Close-DQp0oEqq.js";import"./IconButton-BUM-FX0_.js";import"./useTimeout-BE5W8YJ8.js";import"./ButtonBase-DaZ_7lRI.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DfEpdioV.js";import"./Stack-CPIUTT_1.js";import"./useThemeProps-zgF3fqlo.js";import"./getThemeProps-CRUQo9sp.js";import"./useTheme-JvF5LZla.js";import"./extendSxProp-BOce1nm_.js";import"./Box-DZiaVZnl.js";import"./AlertTitle-ChsCM4TP.js";import"./Typography-ANEGaihN.js";import"./index-B74xXF-A.js";import"./useTheme-CwYhMF_O.js";import"./ClickAwayListener-YW0z3svG.js";import"./getReactElementRef-DO_5aoCT.js";import"./index-DD8x44wX.js";import"./index-C1cgcAs1.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DpBJrWe9.js";import"./Tooltip-Dr1XL-Zz.js";import"./index-ClwLs2xL.js";import"./useControlled-D4h4kRjW.js";import"./Popper-C1co2brQ.js";import"./Button-Mc4n0qjd.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-DI2Ey6nc.js";import"./QueryClientProvider-BA1QpnVt.js";import"./Link-D3QslX_P.js";import"./Collapse-DD7JCiwU.js";import"./_baseUniq-7YcikviV.js";import"./_Uint8Array-B6jpFBB6.js";import"./isArray-CV7tcOmy.js";import"./_getTag-HkVF-QgG.js";import"./isEqual-KtQk5CnN.js";import"./noop-DX6rZLP_.js";import"./merge-PkoklwUB.js";import"./_initCloneObject-Bh5HWbpD.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CbrDphCM.js";import"./inputBaseClasses-BMTzFsPJ.js";import"./calculateFriendlyFileSize-B4sPoU2L.js";import"./CheckCircleTwoTone-Ty_us4is.js";import"./InfoTwoTone-rbOzY5QT.js";import"./useMutation-DaNzmEzQ.js";import"./dayjs.min-CbGnbLpw.js";import"./chunk-AYJ5UCUI-DCSckdQY.js";import"./cloneDeep-CvkUHlHg.js";import"./Skeleton-CvrJKXGx.js";import"./SkeletonButton-P6oJpSSt.js";import"./SkeletonInlineBlock-DftsGBov.js";import"./SkeletonTable-peC_qq9f.js";import"./times-Bv1KFJrp.js";import"./toInteger-BtKyyIvD.js";import"./isSymbol-BhCFEInU.js";import"./SkeletonParagraph-OPHV_-1G.js";import"./uniqueId-CPUPXJdX.js";import"./toString-BOGGYPmT.js";import"./CSSTransition-C0DCzfTp.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-BcJDc9K8.js";import"./Avatar-Cxn8aU6x.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
