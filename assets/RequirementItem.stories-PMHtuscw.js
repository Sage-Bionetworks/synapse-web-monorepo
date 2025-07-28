import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-pe8Y6fwO.js";import{d as s}from"./ToastMessage-B9aLoiGP.js";import{R as n,a as t}from"./RequirementItem-DdQOM2JU.js";import{P as O}from"./Paper-rrh4EhEU.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-Bv--fwl9.js";import"./SynapseConstants-DNVKW_0P.js";import"./OrientationBanner-D2acI3Y0.js";import"./index-Den6D1hk.js";import"./index-D2DVVrZC.js";import"./iframe-DEj1FbhD.js";import"./spreadSx-CwcO6WA9.js";import"./react-Br2nhtEr.js";import"./FullWidthAlert-DLvYc-mK.js";import"./Alert-C4xJaD5r.js";import"./createTheme-BrtesNaL.js";import"./DefaultPropsProvider-DGwxxiOV.js";import"./useSlot-CRgDYWsW.js";import"./useForkRef-DnXT39nc.js";import"./createSimplePaletteValueFilter-BzVPQ0Is.js";import"./createSvgIcon-9hLuZfsj.js";import"./Close-S8c1l9gS.js";import"./IconButton-BPWJJaNr.js";import"./useTimeout-B8omw9oy.js";import"./ButtonBase-qh3ge3Iz.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-C4Y_z_Lj.js";import"./Stack-DYSZnyeP.js";import"./extendSxProp-oFnhdn5m.js";import"./getThemeProps-DwMcYXae.js";import"./useTheme-CCwBo4L7.js";import"./Box-C2mf0bBj.js";import"./AlertTitle-BXcy4_le.js";import"./Typography-CA5VtOac.js";import"./index-oV3RSY5s.js";import"./useTheme-DQcaU_c0.js";import"./ClickAwayListener-ByPpYTg0.js";import"./getReactElementRef-CsMZkxrX.js";import"./index-BG1FSV2G.js";import"./index-BvuoCrXu.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-RewzRyPY.js";import"./Tooltip-BlvtctqX.js";import"./index-Cc771K3C.js";import"./useControlled-CEEWwcxf.js";import"./Popper-BBBa4RhT.js";import"./Button-B9JExKBE.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BYEtqtR3.js";import"./useQuery-Dd5Ly_-E.js";import"./QueryClientProvider-DZqp77rY.js";import"./Link-DJri5NVw.js";import"./Collapse-BGZ_EW0U.js";import"./_baseUniq-CsGa5lG1.js";import"./_Uint8Array-C1otOYDC.js";import"./isArray-C99RcUWQ.js";import"./_getTag-e_BxTD0p.js";import"./isEqual-BfYFzBkA.js";import"./merge-BF3GtWz9.js";import"./_initCloneObject-C4FgYO8g.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CLINBJ41.js";import"./inputBaseClasses-DUNxg_pL.js";import"./calculateFriendlyFileSize-Cq4ARSZt.js";import"./CheckCircleTwoTone-CSRW2OkR.js";import"./InfoTwoTone-CeCPPG8P.js";import"./useMutation-Nj2toVn8.js";import"./dayjs.min-BZCkXBA6.js";import"./chunk-AYJ5UCUI-DNYbjiDO.js";import"./cloneDeep-DeaEDQra.js";import"./Skeleton-C8CXK6y4.js";import"./SkeletonButton-CNU-5f41.js";import"./SkeletonInlineBlock-DlZ-0rIJ.js";import"./SkeletonTable-Bu_3zDHB.js";import"./times-oUhnFnFw.js";import"./toInteger-BbZ9Fl4r.js";import"./toNumber-Bd-vnCZz.js";import"./isSymbol-BKGB9dHo.js";import"./SkeletonParagraph-C81YtSZY.js";import"./uniqueId-Cvm21MA0.js";import"./toString-BSpmz7To.js";import"./CSSTransition-lC3CW7DC.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-DT4G2unT.js";import"./Avatar-CbW3N3xH.js";const cr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(q=(I=m.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};const dr=["Complete","Pending","Loading","NoActions","Locked"];export{r as Complete,e as Loading,m as Locked,i as NoActions,o as Pending,dr as __namedExportsOrder,cr as default};
