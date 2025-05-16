import{j as a}from"./jsx-runtime-3KUIpe_B.js";import{m as P}from"./mockWiki-B6wTqEDI.js";import{M as x}from"./MarkdownSynapse-KTkAyBLZ.js";import{d as s}from"./ToastMessage-o4BjJycQ.js";import{R as n,a as t}from"./RequirementItem-DeYJUnM4.js";import{P as O}from"./Paper-CpI3p7vt.js";import"./index-DKQmXyTg.js";import"./iframe-yVMHiQlN.js";import"./mock_user_profile-CijvmO8r.js";import"./mock_file_handle-3wYKbysY.js";import"./VerificationSubmission-dxY1kvC5.js";import"./useFiles-BUTSDjpp.js";import"./SynapseConstants-BKYSFUA4.js";import"./OrientationBanner-hPZ43e6I.js";import"./index-C-TJzvvw.js";import"./spreadSx-CwcO6WA9.js";import"./react-Dtsa6pJa.js";import"./FullWidthAlert-C4lmFUoi.js";import"./Alert-Aziq9jrC.js";import"./createTheme-D71xLB5y.js";import"./resolveComponentProps-BGzDORmu.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-WbU4IK3w.js";import"./createSvgIcon-50Cdg5i5.js";import"./DefaultPropsProvider-BLKPmz24.js";import"./Close-CSP2Jd51.js";import"./IconButton-pbjeZzOL.js";import"./ButtonBase-CkYDoZ72.js";import"./useTimeout-D1oI4iH6.js";import"./TransitionGroupContext-B_1k5y15.js";import"./useIsFocusVisible-YFynukRh.js";import"./useEventCallback-DPuUUDpa.js";import"./Stack-CpeVWMZC.js";import"./getThemeProps-CQbQMCh0.js";import"./useTheme-BdTZ9glP.js";import"./Box-DHQrsK7r.js";import"./AlertTitle-BpB3V9XK.js";import"./Typography-SSCOYWVs.js";import"./useTheme-HpprIIPg.js";import"./Grow-DBVaKRUq.js";import"./index--OvIPCqu.js";import"./utils-DJQOJB4m.js";import"./ClickAwayListener-Dt1qC4MI.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BBYtGIG7.js";import"./index-Cle-c0aH.js";import"./useControlled-CtW-cS0b.js";import"./useId-CF9Yu02v.js";import"./Popper-CGUN53ew.js";import"./Button-fGoJWvNB.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-lE31obNl.js";import"./useQuery-B7kP4S9m.js";import"./utils-D5WnLCld.js";import"./Link-Bpjhw2CS.js";import"./Collapse-DgDuu3nh.js";import"./isNil-BwVJPUb-.js";import"./_Uint8Array-Hpg7Ovco.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CpRgRSSG.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-Be5X7RjA.js";import"./_getTag-gn94A73Q.js";import"./tinycolor-Begke6kS.js";import"./Fade-CMDFt0Nj.js";import"./Skeleton-C670lw8b.js";import"./inputBaseClasses-DaTlLvG_.js";import"./calculateFriendlyFileSize-Dn_xi8Ur.js";import"./CheckCircleTwoTone-BsG1c10B.js";import"./InfoTwoTone-Brz641sQ.js";import"./mutation-CJXf9Cy9.js";import"./dayjs.min-D019G3yF.js";import"./chunk-AYJ5UCUI-DkAV2hPV.js";import"./cloneDeep-rpODRfQ8.js";import"./_initCloneObject-BIxNbgCW.js";import"./isEqual-CblXoSZj.js";import"./merge-CfMdqnSR.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-B2sMgepy.js";import"./SkeletonInlineBlock-BZh5d28p.js";import"./SkeletonTable-Bebb2aGz.js";import"./times-DW3mmMLQ.js";import"./toInteger-DodBKe_l.js";import"./isSymbol-DtDHKaGD.js";import"./SkeletonParagraph-B3rjYtee.js";import"./uniqueId-U7_dp_es.js";import"./toString-CTt2u-FA.js";import"./CSSTransition-CeykjNOb.js";import"./ConditionalWrapper-BAH51SoB.js";import"./LockTwoTone-BHlw58Br.js";import"./Avatar-eZxrb6oG.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
