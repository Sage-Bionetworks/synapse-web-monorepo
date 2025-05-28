import{j as a}from"./jsx-runtime-Zazi817E.js";import{m as P}from"./mockWiki-CgjxDh2Q.js";import{M as x}from"./MarkdownSynapse-Bnfmdi6a.js";import{d as s}from"./ToastMessage-CSdWz7LA.js";import{R as n,a as t}from"./RequirementItem-BFjSmya7.js";import{P as O}from"./Paper-DH45r-wy.js";import"./index-D-a7w8th.js";import"./iframe-DqOO6GmJ.js";import"./mock_user_profile-CijvmO8r.js";import"./mock_file_handle-CFTRkxcS.js";import"./VerificationSubmission-BI5WaB2N.js";import"./useFiles-D6-60VlG.js";import"./SynapseConstants-D8_u4KCY.js";import"./OrientationBanner-Brj_6R5O.js";import"./index-B9uCcEa8.js";import"./spreadSx-CwcO6WA9.js";import"./react-Drm6sDLN.js";import"./FullWidthAlert-DKf9_wpb.js";import"./Alert-CMSBW_9_.js";import"./createTheme-BKO-I-SA.js";import"./resolveComponentProps-BCYM0ghF.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-BoKjB57t.js";import"./createSvgIcon-5Cw73NIJ.js";import"./DefaultPropsProvider-CMeWClB2.js";import"./Close-CKICGMRN.js";import"./IconButton-D7fD1kT1.js";import"./ButtonBase-BlnkqX4m.js";import"./useTimeout-NcCkJi-r.js";import"./TransitionGroupContext-KaYi-H8Q.js";import"./useIsFocusVisible-BEvJgvyZ.js";import"./useEventCallback-CL3MT4n3.js";import"./Stack-C28MH_Nj.js";import"./getThemeProps-RwE7Dgdk.js";import"./useTheme-BhctGpst.js";import"./Box-erjX2_Pn.js";import"./AlertTitle-DbbLAA4Q.js";import"./Typography-0amIDJ13.js";import"./useTheme-BRe1u070.js";import"./Grow-Cu1K5fdd.js";import"./index-D8Tj0NKP.js";import"./utils-CmeGA0Mj.js";import"./ClickAwayListener-susZPs9A.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BJj93p-l.js";import"./index-D-NA5Lgs.js";import"./useControlled-Cz3AFNPb.js";import"./useId-_0THTgRa.js";import"./Popper-Dwod_RPU.js";import"./Button-CxroDze3.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-DN6u4g4A.js";import"./useQuery-B5EBPYQk.js";import"./utils-pBpmfRy2.js";import"./Link-C8A1juNu.js";import"./Collapse-B2ReICNn.js";import"./isNil-DNbb0ZTY.js";import"./_Uint8Array-CDIqxLcW.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-tE4xW328.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-BwEpiinV.js";import"./_getTag-BVzBaU_M.js";import"./tinycolor-Begke6kS.js";import"./Fade-Do1oESZB.js";import"./Skeleton-QtVV7vBl.js";import"./inputBaseClasses-DvVPbDNa.js";import"./calculateFriendlyFileSize-DFT7G6pD.js";import"./CheckCircleTwoTone-CqmyG6lC.js";import"./InfoTwoTone-B-oZrgFl.js";import"./mutation-COF64AgK.js";import"./dayjs.min-DoL1Vt0J.js";import"./chunk-AYJ5UCUI-DFKlZx2o.js";import"./cloneDeep-BMoExRqW.js";import"./_initCloneObject-DXlJBdkp.js";import"./isEqual-B5SJeZHH.js";import"./merge-CAy_Mw7I.js";import"./identity-DKeuBCMA.js";import"./useMutation-DpxPDMS3.js";import"./SkeletonButton-jIdDjQ_c.js";import"./SkeletonInlineBlock-D-TogWgu.js";import"./SkeletonTable-CLuQFGKy.js";import"./times-CFGa3Lj9.js";import"./toInteger-FLMpp8CB.js";import"./isSymbol-Am7Ne-JG.js";import"./SkeletonParagraph-Y3NkBtnG.js";import"./uniqueId-DC0bf74h.js";import"./toString-M4CFdBjl.js";import"./CSSTransition-DHPCLfgK.js";import"./ConditionalWrapper-6syvcH22.js";import"./LockTwoTone-BTL06E5U.js";import"./Avatar-sOAN0__1.js";const ur={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(q=(I=m.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};const lr=["Complete","Pending","Loading","NoActions","Locked"];export{r as Complete,e as Loading,m as Locked,i as NoActions,o as Pending,lr as __namedExportsOrder,ur as default};
