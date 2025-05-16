import{j as a}from"./jsx-runtime-Aq5fbqHl.js";import{m as P}from"./mockWiki-B6wTqEDI.js";import{M as x}from"./MarkdownSynapse-CYo-0ZOf.js";import{d as s}from"./ToastMessage-PyOIY1Sr.js";import{R as n,a as t}from"./RequirementItem-Dp-QdPVO.js";import{P as O}from"./Paper-DK1SI2Ul.js";import"./index-JgWvyRd0.js";import"./iframe-CGz9Tkep.js";import"./mock_user_profile-CijvmO8r.js";import"./mock_file_handle-3wYKbysY.js";import"./VerificationSubmission-dxY1kvC5.js";import"./useFiles-DB5RUn42.js";import"./SynapseConstants-CfJFMU44.js";import"./OrientationBanner-BxqvkYhO.js";import"./index-DbjpxmLy.js";import"./spreadSx-CwcO6WA9.js";import"./react-DTfpc0Nm.js";import"./FullWidthAlert-pE7OHiYt.js";import"./Alert-DxvcGxLm.js";import"./createTheme-CabrvzGG.js";import"./resolveComponentProps-CbN17S1S.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CH1o28Sn.js";import"./createSvgIcon-D5iVBR5M.js";import"./DefaultPropsProvider-rm74DNR0.js";import"./Close-CtA38glB.js";import"./IconButton-DJ7CnQcI.js";import"./ButtonBase-DuHovILV.js";import"./useTimeout-CLPgbyPk.js";import"./TransitionGroupContext-Dv9DyMfN.js";import"./useIsFocusVisible-BGnBciWP.js";import"./useEventCallback-BAJp23lY.js";import"./Stack-BfP3PSXZ.js";import"./getThemeProps-CiYEGSc1.js";import"./useTheme-C4qyPjnK.js";import"./Box-B2ycGbQs.js";import"./AlertTitle-CLAc8_kb.js";import"./Typography-C_Rd-vc3.js";import"./useTheme-CWq0CMFs.js";import"./Grow-96cTP3k-.js";import"./index-BAYNcIPW.js";import"./utils-BpsVJ7_L.js";import"./ClickAwayListener-CpgqDlAE.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DV1lHLML.js";import"./index-BXuttiqi.js";import"./useControlled-DKF3jkF4.js";import"./useId-te-eXufQ.js";import"./Popper-BpxIK3o5.js";import"./Button-Cj3fw4dL.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-lE31obNl.js";import"./useQuery-CWCK9oHA.js";import"./utils-BTjLWw9V.js";import"./Link-B-GSk5ZJ.js";import"./Collapse-DRZCXyGt.js";import"./isNil-YEBrO959.js";import"./_Uint8Array-DsX8C4yt.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DOsXpd_Z.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-B73VkKNe.js";import"./_getTag-DqJt2ioY.js";import"./tinycolor-Begke6kS.js";import"./Fade-D7vpEMyo.js";import"./Skeleton-sPP7_TZq.js";import"./inputBaseClasses-BAfHv4Bb.js";import"./calculateFriendlyFileSize-Vzb5BBgT.js";import"./CheckCircleTwoTone-DH4fkY38.js";import"./InfoTwoTone-BCIxruOU.js";import"./mutation-B9vk3ZUd.js";import"./dayjs.min-DMTb_QEv.js";import"./chunk-AYJ5UCUI-D9dVPbwt.js";import"./cloneDeep-D4yJ6Uqf.js";import"./_initCloneObject-CBlxkXZJ.js";import"./isEqual-Dlw3pN9M.js";import"./merge-CtnYmU5N.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-Bv3PLMpo.js";import"./SkeletonInlineBlock-C2D2gUdf.js";import"./SkeletonTable-uiFn16a6.js";import"./times-YBF_Fis8.js";import"./toInteger-BCMs930d.js";import"./isSymbol-Ek_DRy9H.js";import"./SkeletonParagraph-C21fkqN2.js";import"./uniqueId-C3LnxDfg.js";import"./toString-C5rFS-5w.js";import"./CSSTransition-kXtmvsL4.js";import"./ConditionalWrapper-B4oDsBaC.js";import"./LockTwoTone-0hXiqFvD.js";import"./Avatar-VKQ7IUGy.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
