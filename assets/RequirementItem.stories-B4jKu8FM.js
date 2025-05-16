import{j as a}from"./jsx-runtime-CgBRLEa-.js";import{m as P}from"./mockWiki-B6wTqEDI.js";import{M as x}from"./MarkdownSynapse-QW4yDwzM.js";import{d as s}from"./ToastMessage-BmJyx7-S.js";import{R as n,a as t}from"./RequirementItem-CfT_NUS5.js";import{P as O}from"./Paper-C1f04ktM.js";import"./index-Cm3VAqvi.js";import"./iframe-D-z5eryP.js";import"./mock_user_profile-CijvmO8r.js";import"./mock_file_handle-3wYKbysY.js";import"./VerificationSubmission-dxY1kvC5.js";import"./useFiles-Bj1qDzht.js";import"./SynapseConstants-C4_BSfJX.js";import"./OrientationBanner-BfQKEM6f.js";import"./index-CQbK4M81.js";import"./spreadSx-CwcO6WA9.js";import"./react-BszH1LB1.js";import"./FullWidthAlert-DhrO65_m.js";import"./Alert-4kvTLzfn.js";import"./createTheme-D3A4yulZ.js";import"./resolveComponentProps-BYCi2bu3.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-JdeycaeZ.js";import"./createSvgIcon-kNdxJAy9.js";import"./DefaultPropsProvider-CoJm6rCv.js";import"./Close-agg9DekZ.js";import"./IconButton-eVrh23VG.js";import"./ButtonBase-C0HDqlf7.js";import"./useTimeout-CtGwrGZE.js";import"./TransitionGroupContext-B4SgA8fZ.js";import"./useIsFocusVisible-CdG0Xk-w.js";import"./useEventCallback-D4tUhhl4.js";import"./Stack-BC_fHXlJ.js";import"./getThemeProps-BIMvOQzE.js";import"./useTheme-B4dGVzj9.js";import"./Box-wR1-okkc.js";import"./AlertTitle-CiwBKXMY.js";import"./Typography-ByTWsZ15.js";import"./useTheme-BI2S4QNb.js";import"./Grow-RHuPc6fz.js";import"./index-DW4Ai1wC.js";import"./utils-D287OKWf.js";import"./ClickAwayListener-Bk44fSg7.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BerKoCs9.js";import"./index-6MOF0f3P.js";import"./useControlled-BPLd89bY.js";import"./useId-BzDDLVft.js";import"./Popper-DpEkWGMI.js";import"./Button-LaCGCM-J.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-lE31obNl.js";import"./useQuery-jCh7k4c8.js";import"./utils-C1QIpVL-.js";import"./Link-BcIkkE9V.js";import"./Collapse-DpmNiXw9.js";import"./isNil-Ant6sUSY.js";import"./_Uint8Array-Bx9A3vk2.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-C5sgg6cm.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-BpqpksID.js";import"./_getTag-CItFztzL.js";import"./tinycolor-Begke6kS.js";import"./Fade-DgzFB8i7.js";import"./Skeleton-Ccnh0KXd.js";import"./inputBaseClasses-BegAz63u.js";import"./calculateFriendlyFileSize-BXtfvFHv.js";import"./CheckCircleTwoTone-DgUHfpw1.js";import"./InfoTwoTone-BpDpNORF.js";import"./mutation-Ds3RVbc1.js";import"./dayjs.min-BcfQFtj1.js";import"./chunk-AYJ5UCUI-DyvibXab.js";import"./cloneDeep-4cLsR06D.js";import"./_initCloneObject-DPNyC6eJ.js";import"./isEqual-CjzFxgA_.js";import"./merge-BmbNGbHm.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-ClLhiNKW.js";import"./SkeletonInlineBlock-CcnGrXa9.js";import"./SkeletonTable-ChhpYf35.js";import"./times-YvWrZUsp.js";import"./toInteger-BsWus-vZ.js";import"./isSymbol-DNGSiwFZ.js";import"./SkeletonParagraph-CdjKSc_q.js";import"./uniqueId-Cd-JRmz4.js";import"./toString-BXBassw-.js";import"./CSSTransition-BXsdyzEa.js";import"./ConditionalWrapper-CY9SEvZI.js";import"./LockTwoTone-QCAhALkD.js";import"./Avatar-CuZ8cWJL.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
