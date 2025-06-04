import{j as a}from"./jsx-runtime-3OrYGa-A.js";import{m as P}from"./mockWiki-DiBhlaV-.js";import{M as x}from"./MarkdownSynapse-eq7DRkDm.js";import{d as s}from"./ToastMessage-Cdv1PdDW.js";import{R as n,a as t}from"./RequirementItem-sDhqHPTw.js";import{P as O}from"./Paper-Bzm_Nx-y.js";import"./index-E0Zgd8PJ.js";import"./iframe-DGKewhZ-.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-C2NjfX48.js";import"./VerificationSubmission-DHPhgAH7.js";import"./useFiles-DUA-Jj-0.js";import"./SynapseConstants-jSYxgpcu.js";import"./OrientationBanner-CccXL3x3.js";import"./index-DyAapOrS.js";import"./spreadSx-CwcO6WA9.js";import"./react-Bs2L_zF6.js";import"./FullWidthAlert-0pF52_M1.js";import"./Alert-DonyAFK0.js";import"./createTheme-BnTuIRv6.js";import"./resolveComponentProps-CSqydSMD.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-fbjtUiV8.js";import"./createSvgIcon-eKjsHGUK.js";import"./DefaultPropsProvider-B5yGAE64.js";import"./Close-CGILoACs.js";import"./IconButton-B9wVP-A1.js";import"./ButtonBase-BzsSFjIg.js";import"./useTimeout-b192V-41.js";import"./TransitionGroupContext-DyqmDSGM.js";import"./useIsFocusVisible-DHNMeGMf.js";import"./useEventCallback-ByjSGWYF.js";import"./Stack-C7Who12C.js";import"./getThemeProps-BeGrbUHB.js";import"./useTheme-CA91lOJv.js";import"./Box-347FjrZL.js";import"./AlertTitle-e1QbrWbH.js";import"./Typography-BqXAY_j_.js";import"./useTheme-YD2d8a2f.js";import"./Grow-BGnhXozI.js";import"./index-DK7lSTXT.js";import"./utils-D9FR9N58.js";import"./ClickAwayListener-vy6Nn4he.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DJrmkq86.js";import"./index-EEjFQgdf.js";import"./useControlled-DoAv-Xot.js";import"./useId-BmJ6jTVu.js";import"./Popper-OySlr5Dd.js";import"./Button-CIP1MA1L.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-Bj0SG9ce.js";import"./useQuery-BqSCqwMR.js";import"./utils-CYumXUBm.js";import"./Link-HA4mk3tW.js";import"./Collapse-D67OGycD.js";import"./isNil-BmumFaXA.js";import"./_Uint8Array-Bvb5BnvN.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DBRiHJjl.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-0jby8jfS.js";import"./_getTag-t_JCQRAi.js";import"./tinycolor-Begke6kS.js";import"./Fade-LqP4BbTu.js";import"./Skeleton-BCoikWZP.js";import"./inputBaseClasses-BSS9qqFG.js";import"./calculateFriendlyFileSize-5_UVqq-F.js";import"./CheckCircleTwoTone-G4C_D7UA.js";import"./InfoTwoTone-CaLHzJw9.js";import"./useMutation-BWqLpdaP.js";import"./isEqual-oelJpyyy.js";import"./dayjs.min-B6dWaLXc.js";import"./chunk-AYJ5UCUI-CBOKgxJt.js";import"./cloneDeep-Dr-I4MgV.js";import"./_initCloneObject-DR5O-GqP.js";import"./merge-3rJ4KN2X.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-B5tyk9KZ.js";import"./SkeletonInlineBlock-Cbewt1uc.js";import"./SkeletonTable-Ca19cf4g.js";import"./times-Do5Yo5av.js";import"./toInteger-B_5vdWpr.js";import"./isSymbol-BGDhtyVY.js";import"./SkeletonParagraph-Dcaau3Gk.js";import"./uniqueId-BFwgHMKM.js";import"./toString-Db4Tn8Kw.js";import"./CSSTransition-DbDRGyeb.js";import"./ConditionalWrapper-Cua106qD.js";import"./LockTwoTone-7Yd_grDw.js";import"./Avatar-Doir9YaP.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
