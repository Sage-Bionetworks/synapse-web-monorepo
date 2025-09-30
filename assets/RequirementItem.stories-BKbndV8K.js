import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-PMFIzsVk.js";import{d as s}from"./ToastMessage-Dk3j3n_C.js";import{R as n,a as t}from"./RequirementItem-DF7SLjhR.js";import{P as O}from"./Paper-uMerSr0J.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-DgHx6Fcc.js";import"./SynapseConstants-DGyiOG2g.js";import"./OrientationBanner-Dg3sFsFB.js";import"./index-BFkvzL3d.js";import"./index-BdUAYS9h.js";import"./iframe-CpJoLHmY.js";import"./spreadSx-CwcO6WA9.js";import"./react-D1smhX9V.js";import"./FullWidthAlert-NrRGzUzR.js";import"./Alert-BZkkNxmN.js";import"./createTheme-CyTLEU3i.js";import"./DefaultPropsProvider-CrrxgVPq.js";import"./useSlot-BFkGEdWp.js";import"./useForkRef-BYJIK3bI.js";import"./createSimplePaletteValueFilter-C6dToHOG.js";import"./createSvgIcon-CQtqRFBT.js";import"./Close-BveyDO89.js";import"./IconButton-CV35gqz1.js";import"./useTimeout-Cde0jI0k.js";import"./ButtonBase-DQ_Dc5W1.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-PI0728JC.js";import"./Stack-zXk8gjNn.js";import"./extendSxProp-CPzueTmv.js";import"./getThemeProps-DtfOwbG6.js";import"./useTheme-ClrSPtrJ.js";import"./Box-Dyy71dSi.js";import"./AlertTitle-C2NB19_E.js";import"./Typography-DtWAgXAy.js";import"./index-CqQRnKb9.js";import"./useTheme-IErwV-Ug.js";import"./ClickAwayListener-l3nc9S5t.js";import"./getReactElementRef-DLKh61Wu.js";import"./index-C6AkVaeY.js";import"./index-DPcBfgK1.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CuumPSVk.js";import"./Tooltip-BRwDLAyh.js";import"./index-CWp-JoAj.js";import"./useControlled-oba0F23J.js";import"./Popper-B4kjXWcz.js";import"./Button-DC_qvPIS.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-8wNQI5yr.js";import"./QueryClientProvider-COZl3LvE.js";import"./Link-HYpi97nk.js";import"./Collapse-CHQWLyDp.js";import"./_baseUniq-CFJWH6fy.js";import"./_Uint8Array-DKtfINLr.js";import"./isArray-DbAuuatd.js";import"./_getTag-D3pOfrS4.js";import"./isEqual-Bob0DS1n.js";import"./merge-Xtgp757m.js";import"./_initCloneObject-D_ChcyVf.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BbISf70S.js";import"./inputBaseClasses-D_EUhFSv.js";import"./calculateFriendlyFileSize-DN2lkErt.js";import"./CheckCircleTwoTone-CZFnuvZG.js";import"./InfoTwoTone-A_M6B1fv.js";import"./useMutation-eF8r02NM.js";import"./dayjs.min-CdID1Wrq.js";import"./chunk-AYJ5UCUI-D8grMOqq.js";import"./cloneDeep-C6yg3ATo.js";import"./Skeleton-CVb7LHcV.js";import"./SkeletonButton-DrC6zcAp.js";import"./SkeletonInlineBlock-ghUbppzv.js";import"./SkeletonTable-CycJSkzc.js";import"./times-uLWaNwR8.js";import"./toInteger-2aQRskTw.js";import"./isSymbol-BlJuLY72.js";import"./SkeletonParagraph-DgxOEBAl.js";import"./uniqueId-De3n_EJw.js";import"./toString-DnWpOsn1.js";import"./CSSTransition-aArQgrFd.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-CAfam5sf.js";import"./Avatar-BpEsoSZQ.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
