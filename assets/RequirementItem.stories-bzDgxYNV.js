import{j as a}from"./jsx-runtime-DQEYdBb3.js";import{m as P}from"./mockWiki-CfZ4orwO.js";import{M as x}from"./MarkdownSynapse-edcoxhm1.js";import{d as s}from"./ToastMessage-DLSqc08D.js";import{R as n,a as t}from"./RequirementItem-B-omVQLx.js";import{P as O}from"./Paper-BTr-CyUQ.js";import"./index-DWZM0_w3.js";import"./iframe-Gx0jSAw5.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-qAzg5fnb.js";import"./VerificationSubmission-DKyendrM.js";import"./useFiles-BWpRkhnZ.js";import"./SynapseConstants-COcOAKQY.js";import"./OrientationBanner-B3ywq8lb.js";import"./index-BlM2rqmt.js";import"./spreadSx-CwcO6WA9.js";import"./react-CarGcQz_.js";import"./FullWidthAlert-Ct3PcMEr.js";import"./Alert-BIPgr0if.js";import"./createTheme-DtOSi2tZ.js";import"./DefaultPropsProvider-CF060mLI.js";import"./useSlot-CVbeuDxa.js";import"./useForkRef-3ym5lFLv.js";import"./createSimplePaletteValueFilter-BuHQ5R2p.js";import"./createSvgIcon-UR96_bXv.js";import"./Close-D_H3PDWe.js";import"./IconButton-QfBz_EiL.js";import"./useTimeout-BiY6JhS_.js";import"./ButtonBase-BzsNmAHZ.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DrsH4xiw.js";import"./Stack-BWStZG0K.js";import"./extendSxProp-csQIeBdp.js";import"./getThemeProps-we43ckN-.js";import"./useTheme-ChZrpKzo.js";import"./Box-_1PWeWAi.js";import"./AlertTitle-t6WMskQA.js";import"./Typography-DtNs9amV.js";import"./index-DlqKWLRY.js";import"./useTheme-BeKQBGRR.js";import"./ClickAwayListener-FSg82355.js";import"./getReactElementRef-Dtg5gyOd.js";import"./index-CtA8BiWO.js";import"./index-DP8ZPViD.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DzCNl_3W.js";import"./Tooltip-CsHsQ8O5.js";import"./index-BEbGkY8S.js";import"./useControlled-DSIjpQ6d.js";import"./Popper-CGurLlDU.js";import"./Button-Bklupcvm.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BcSmk1fX.js";import"./useQuery-CyqHYKuc.js";import"./utils-CRaMwBIr.js";import"./Link-B1WGxhTG.js";import"./Collapse-Bj4R418S.js";import"./isNil-BrInCnCi.js";import"./_Uint8Array-CU-q7TZ2.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-D_CIa4ZZ.js";import"./isArray-Dxzbedgu.js";import"./isEqual-DLukTG_g.js";import"./_getTag-BetraSlE.js";import"./tinycolor-Begke6kS.js";import"./Fade-CxCnD1rR.js";import"./inputBaseClasses-BRbfrEAv.js";import"./calculateFriendlyFileSize-CAbNmrzH.js";import"./CheckCircleTwoTone-CjFpiqDG.js";import"./InfoTwoTone-C2NuPfqD.js";import"./useMutation-s1IWLVz3.js";import"./dayjs.min-Hf7Y_s8_.js";import"./chunk-AYJ5UCUI-DUhxUc2H.js";import"./cloneDeep-Bn-9DqjF.js";import"./_initCloneObject-p9hszxaJ.js";import"./Skeleton-DcWkbupA.js";import"./merge-3eSuGG9N.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-C5kAGR6L.js";import"./SkeletonInlineBlock-fNQ1guyz.js";import"./SkeletonTable-DBW0EWOk.js";import"./times-BRbNeYMq.js";import"./toInteger-Cy8mgycv.js";import"./isSymbol-CPSwtRTv.js";import"./SkeletonParagraph-u26btDez.js";import"./uniqueId-U6r1h4y8.js";import"./toString-H90gCciY.js";import"./CSSTransition-DuUnhxAU.js";import"./ConditionalWrapper-25Pd6Ekx.js";import"./LockTwoTone-B_9GI6BS.js";import"./Avatar-ybUCxLVT.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
