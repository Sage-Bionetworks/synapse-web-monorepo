import{j as a}from"./jsx-runtime-BPwvgLas.js";import{m as P}from"./mockWiki-B6wTqEDI.js";import{M as x}from"./MarkdownSynapse-MHLPs3tU.js";import{d as s}from"./ToastMessage-Dt1DJatT.js";import{R as n,a as t}from"./RequirementItem-CIVP5hDW.js";import{P as O}from"./Paper-keIiwirC.js";import"./index-CBDLWlOB.js";import"./iframe-BOhnkrTR.js";import"./mock_user_profile-CijvmO8r.js";import"./mock_file_handle-3wYKbysY.js";import"./VerificationSubmission-dxY1kvC5.js";import"./useFiles-CbMpvGhW.js";import"./SynapseConstants-C-MequxA.js";import"./OrientationBanner-BCOcpvAV.js";import"./index-AJ8qoPp1.js";import"./spreadSx-CwcO6WA9.js";import"./react-iQ_QJFeH.js";import"./FullWidthAlert-C4NXiFAr.js";import"./Alert-xrq_SMEg.js";import"./createTheme-CqhKahyM.js";import"./resolveComponentProps-CbacDgM7.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CYG44Oi1.js";import"./createSvgIcon-CngalfwQ.js";import"./DefaultPropsProvider-CK3fJzAT.js";import"./Close-DIxv3BmU.js";import"./IconButton-D355AQnf.js";import"./ButtonBase-DkvFo0rp.js";import"./useTimeout-D29s38n5.js";import"./TransitionGroupContext-vIwZ2ZdW.js";import"./useIsFocusVisible-CRwyDx7g.js";import"./useEventCallback-BEeQPLsK.js";import"./Stack-BgNqp8gK.js";import"./getThemeProps-BbDbNfTq.js";import"./useTheme-CHrnUnqX.js";import"./Box-DZ1qA8WV.js";import"./AlertTitle-CEogbmjt.js";import"./Typography-CEe9erp9.js";import"./useTheme-P165y_LK.js";import"./Grow-CJVUX4yR.js";import"./index-BwhZA35d.js";import"./utils-BPpJDtRg.js";import"./ClickAwayListener-P6OmxxdK.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-_plCLI4q.js";import"./index-B9wPZdQL.js";import"./useControlled-BK1AIYs5.js";import"./useId-CLSRERuv.js";import"./Popper-BvhU2AWB.js";import"./Button-Cn6JHKgz.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-Df7AZImX.js";import"./useQuery-DZi11ge7.js";import"./utils-BqDa975t.js";import"./Link-Ccuxh7N2.js";import"./Collapse-xlH7IseN.js";import"./isNil-Bv7-3_hG.js";import"./_Uint8Array-BDCBH0-0.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-qFFT-3MK.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-D3_Tdhx8.js";import"./_getTag-KyP6iQiD.js";import"./tinycolor-Begke6kS.js";import"./Fade-CY98KLjb.js";import"./Skeleton-iR_TlL_5.js";import"./inputBaseClasses-DlYO5ZlR.js";import"./calculateFriendlyFileSize-Chfxh2O6.js";import"./CheckCircleTwoTone-Bw2Wk5oI.js";import"./InfoTwoTone-Afibcha7.js";import"./mutation-BBLhG9HE.js";import"./dayjs.min-DYOI9g68.js";import"./chunk-AYJ5UCUI-D4D6uZ8Q.js";import"./cloneDeep-BLP2jVxP.js";import"./_initCloneObject-eaMKh-yS.js";import"./isEqual-BvUIKxyq.js";import"./merge-BbxdCm3T.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-CfDxG5C1.js";import"./SkeletonInlineBlock-_DewcDuh.js";import"./SkeletonTable-CCbMvuDe.js";import"./times-CJqkd24n.js";import"./toInteger-DmMobODX.js";import"./isSymbol-BwXYObLQ.js";import"./SkeletonParagraph-BjwZeaHW.js";import"./uniqueId-BPJn473d.js";import"./toString-B6Yu26DP.js";import"./CSSTransition-DK6MKwuj.js";import"./ConditionalWrapper-CGtpqFuS.js";import"./LockTwoTone-BJ83ng35.js";import"./Avatar-BuSUrhU1.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
