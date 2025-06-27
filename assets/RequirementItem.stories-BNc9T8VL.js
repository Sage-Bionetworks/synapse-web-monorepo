import{j as a}from"./jsx-runtime-nSLCg5Ff.js";import{m as P}from"./mockWiki-CUQx1XWq.js";import{M as x}from"./MarkdownSynapse-Ds3hJMSa.js";import{d as s}from"./ToastMessage-CGNv4RSN.js";import{R as n,a as t}from"./RequirementItem-Cgdq0YtQ.js";import{P as O}from"./Paper-D1M0V8sZ.js";import"./index-BW_4_Xzt.js";import"./iframe-BbO8AEg3.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-3Ozoui7p.js";import"./VerificationSubmission-CMrrYimb.js";import"./useFiles-BLcjN_vE.js";import"./SynapseConstants-Dzr99xnJ.js";import"./OrientationBanner-C5SBjrEf.js";import"./index-DqNWLDHU.js";import"./spreadSx-CwcO6WA9.js";import"./react-Bn9XeOTM.js";import"./FullWidthAlert-CAvEoFVp.js";import"./Alert-D-FHTxWE.js";import"./createTheme-vWIlxZDX.js";import"./DefaultPropsProvider-C-nDaUyT.js";import"./useSlot-Cp46zHXT.js";import"./useForkRef-OHC-fPBp.js";import"./createSimplePaletteValueFilter-CIShsUkc.js";import"./createSvgIcon-Dgwa5ydj.js";import"./Close-BL7HgOv5.js";import"./IconButton-D-fwjRi5.js";import"./useTimeout-DT_CqPP6.js";import"./ButtonBase-zIZj5pIX.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-7jOzBolD.js";import"./Stack-BxuDWvu6.js";import"./extendSxProp-AvLc-Gna.js";import"./getThemeProps-CsD-j25b.js";import"./useTheme-DRbZ6Lwr.js";import"./Box-DIO_vLOn.js";import"./AlertTitle-BeAhdm4R.js";import"./Typography-S1uwKLwx.js";import"./index-GghUaGLv.js";import"./useTheme-Bh6OBAyW.js";import"./ClickAwayListener-Cs3HVAbr.js";import"./getReactElementRef-BCL413Bt.js";import"./index-KSoqftDU.js";import"./index-JrbwngIs.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-wlJUshl8.js";import"./Tooltip-wCFJUNlH.js";import"./index-OAMuKwzI.js";import"./useControlled-DQu4-N-P.js";import"./Popper-DwNrEIow.js";import"./Button-DjI-_s9b.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ZWLpjIdm.js";import"./useQuery-CRnHf3v3.js";import"./utils-Cko606K0.js";import"./Link-pPMpELn7.js";import"./Collapse-DaSDYcQM.js";import"./_baseUniq-DGSRVZOK.js";import"./_Uint8Array-Ba7rGLcu.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-16qo--Kn.js";import"./isArray-Dxzbedgu.js";import"./_getTag-B1d1cni4.js";import"./isEqual-C5z_UD0M.js";import"./merge-CsUFeV3q.js";import"./_initCloneObject-C2IiQrp-.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BvEbZxAO.js";import"./inputBaseClasses-BgpMFcFd.js";import"./calculateFriendlyFileSize-yxP6i7Lu.js";import"./CheckCircleTwoTone-DnLU6JyV.js";import"./InfoTwoTone-Tlli5nVp.js";import"./useMutation-BxpQOKgr.js";import"./dayjs.min-BchtRh_q.js";import"./chunk-AYJ5UCUI-QISceWWU.js";import"./cloneDeep-DIr9Kc2h.js";import"./Skeleton-B0eqaPDs.js";import"./SkeletonButton-DdnBCRWF.js";import"./SkeletonInlineBlock-DKBzeFIV.js";import"./SkeletonTable-Cgognj7w.js";import"./times-CYE0ANC1.js";import"./toInteger-BtQA2FBF.js";import"./isSymbol-Bjp-LuC1.js";import"./SkeletonParagraph-BbT8vSHw.js";import"./uniqueId-BHOwVusZ.js";import"./toString-BZ9wQ0kN.js";import"./CSSTransition-BA9LUb0J.js";import"./ConditionalWrapper-BFOQRUk3.js";import"./LockTwoTone-Dowqv8OM.js";import"./Avatar-B-YHkwHE.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
