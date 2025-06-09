import{j as a}from"./jsx-runtime-BgCq8gwN.js";import{m as P}from"./mockWiki-DiBhlaV-.js";import{M as x}from"./MarkdownSynapse-BOx_HMyj.js";import{d as s}from"./ToastMessage-BNIKkCmH.js";import{R as n,a as t}from"./RequirementItem-DQ2zQgSd.js";import{P as O}from"./Paper-CRf9WCXu.js";import"./index-C_gnWP_t.js";import"./iframe-CbIreDb2.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-C2NjfX48.js";import"./VerificationSubmission-DHPhgAH7.js";import"./useFiles-DPLNIGPK.js";import"./SynapseConstants-DIGbeuIK.js";import"./OrientationBanner-CdVTuGgb.js";import"./index-DsPoo2Ro.js";import"./spreadSx-CwcO6WA9.js";import"./react-D4nFN3Ah.js";import"./FullWidthAlert-BWkqCL07.js";import"./Alert-zI21t_ct.js";import"./createTheme-OkraJ5eJ.js";import"./resolveComponentProps-CePEpoP1.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-dNLbFQVo.js";import"./createSvgIcon-BHiZORw5.js";import"./DefaultPropsProvider-BseDZ5eB.js";import"./Close-CDYC--wl.js";import"./IconButton-DAaKFUzV.js";import"./ButtonBase-IB6_m_jw.js";import"./useTimeout-Cye8bwlJ.js";import"./TransitionGroupContext-CS2phJ3S.js";import"./useIsFocusVisible-pfxCMmj4.js";import"./useEventCallback-Bck77aoL.js";import"./Stack-CtKa76FJ.js";import"./getThemeProps-CZUDRWGj.js";import"./useTheme-D5uDEtFj.js";import"./Box-SbfP01m2.js";import"./AlertTitle-YuhibS0Q.js";import"./Typography-ooch0MpL.js";import"./useTheme-BxZhO2mg.js";import"./Grow-BRU2ZIec.js";import"./index-BLcRfihU.js";import"./utils-BOrTgFDN.js";import"./ClickAwayListener-0jLBZ_NF.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-CnSmt6JP.js";import"./index-C8hSn997.js";import"./useControlled-B5xsJp7-.js";import"./useId-B3qv0Fqa.js";import"./Popper-BJu7XYtc.js";import"./Button-BoTYrHNG.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-Bj0SG9ce.js";import"./useQuery-D2x4aW1T.js";import"./utils-BhHY6IUZ.js";import"./Link-CUHo7LkR.js";import"./Collapse-CcAZYdGa.js";import"./isNil-KHj6LWxN.js";import"./_Uint8Array-BfzcZJqI.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-ArQpH04e.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-BsH3YbMu.js";import"./_getTag-RwKhRrOD.js";import"./tinycolor-Begke6kS.js";import"./Fade-DHaVGwVo.js";import"./Skeleton-aBWFkCqk.js";import"./inputBaseClasses-CUxDQaHH.js";import"./calculateFriendlyFileSize-D8IbqDIv.js";import"./CheckCircleTwoTone-WEcEfruf.js";import"./InfoTwoTone-CVKap42G.js";import"./useMutation-Bc_DK1q5.js";import"./isEqual-Cs40Ekkd.js";import"./dayjs.min-DrfyowjI.js";import"./chunk-AYJ5UCUI-CbqUZpCT.js";import"./cloneDeep-w86UdGPr.js";import"./_initCloneObject-C1jMuqUN.js";import"./merge-CGttcKyQ.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-ZBJNvmzv.js";import"./SkeletonInlineBlock-D8bpaet_.js";import"./SkeletonTable-BGizizmn.js";import"./times-CrsZLMtN.js";import"./toInteger-BZb7mfZx.js";import"./isSymbol-CxiAXWXi.js";import"./SkeletonParagraph-C12HqlQq.js";import"./uniqueId-DiyADoIH.js";import"./toString-Biz4hhkS.js";import"./CSSTransition-Ds1tDO7v.js";import"./ConditionalWrapper-BWR6f0yt.js";import"./LockTwoTone-DXqyrZEr.js";import"./Avatar-B93DFhpN.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
