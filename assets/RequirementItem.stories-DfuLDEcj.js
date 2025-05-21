import{j as a}from"./jsx-runtime-B8F9yCu2.js";import{m as P}from"./mockWiki-CZdZHQnO.js";import{M as x}from"./MarkdownSynapse-Bvp5Yn_3.js";import{d as s}from"./ToastMessage-a_kyr2h9.js";import{R as n,a as t}from"./RequirementItem-DwjSbon9.js";import{P as O}from"./Paper-DolJMAHJ.js";import"./index-DQ1pwsUN.js";import"./iframe-Ber0uhpE.js";import"./mock_user_profile-CijvmO8r.js";import"./mock_file_handle-Ct1MSfYs.js";import"./VerificationSubmission-B0kBNeMy.js";import"./useFiles-DUNIhSV7.js";import"./SynapseConstants-DQ1zBBb6.js";import"./OrientationBanner-Bji4jA3k.js";import"./index-D-sqPWvT.js";import"./spreadSx-CwcO6WA9.js";import"./react-DbIxCYhJ.js";import"./FullWidthAlert-BrTMKYXm.js";import"./Alert-PZkf-jPQ.js";import"./createTheme-CvWzDpdo.js";import"./resolveComponentProps-XsoZTRWC.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-BaidT4sD.js";import"./createSvgIcon-DXdrzfQq.js";import"./DefaultPropsProvider-DTNalRio.js";import"./Close-CKQJvfvd.js";import"./IconButton-jrtzc4fH.js";import"./ButtonBase-BQJxoogz.js";import"./useTimeout-LLr9iMPv.js";import"./TransitionGroupContext-BrtiFLkN.js";import"./useIsFocusVisible-kYimsF7D.js";import"./useEventCallback-cNUA3zHB.js";import"./Stack-DNk4NVtx.js";import"./getThemeProps-Bmb8xS95.js";import"./useTheme-DC6cp_DY.js";import"./Box-CHcO_qIh.js";import"./AlertTitle-BZV0Rp7k.js";import"./Typography-Cr5v_ihi.js";import"./useTheme-BMkoP2Dd.js";import"./Grow-DIdr3kKL.js";import"./index-CzXE8kXs.js";import"./utils-crfQibeg.js";import"./ClickAwayListener-BdTMHeZW.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-CRXO9dAn.js";import"./index-Cj0i8O2P.js";import"./useControlled-CuR_U5EM.js";import"./useId-DXwVjo-q.js";import"./Popper-8HZykaUC.js";import"./Button-CYW7tum7.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-CzgJJW-6.js";import"./useQuery-v9fHbYhn.js";import"./utils-C14kvl81.js";import"./Link-D--XjCYV.js";import"./Collapse-BFO6utOk.js";import"./isNil-DuX8kKMU.js";import"./_Uint8Array-trlUSQMK.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-6xxBu9nc.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-Bq4Nylta.js";import"./_getTag-0tTDydmm.js";import"./tinycolor-Begke6kS.js";import"./Fade-CBo9pmeT.js";import"./Skeleton-BodMJu2e.js";import"./inputBaseClasses-HXrsNBjw.js";import"./calculateFriendlyFileSize-gcXWr6JQ.js";import"./CheckCircleTwoTone-D3yXCAfy.js";import"./InfoTwoTone-GaZs2gOk.js";import"./mutation-Dxj-2szy.js";import"./dayjs.min-CtWKk_St.js";import"./chunk-AYJ5UCUI-CtF4x_xB.js";import"./cloneDeep-ZEcnoJdE.js";import"./_initCloneObject-DmeBfQFl.js";import"./isEqual-CmS8f6Z7.js";import"./merge-R-dqjrns.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-DtA7ta7U.js";import"./SkeletonInlineBlock-BmxTw9Xy.js";import"./SkeletonTable-DQK8oMZu.js";import"./times-DwUpU9ZF.js";import"./toInteger-1bRyGB6Y.js";import"./isSymbol-B19r0Yln.js";import"./SkeletonParagraph-YpL83hB1.js";import"./uniqueId-BKWm8MfJ.js";import"./toString-Cv3UMp2j.js";import"./CSSTransition-DjptgD7s.js";import"./ConditionalWrapper-D9EHZjXB.js";import"./LockTwoTone-DxeVYgVq.js";import"./Avatar-DiaESteo.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
