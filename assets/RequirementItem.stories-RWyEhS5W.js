import{j as a}from"./jsx-runtime-BhYgtz2a.js";import{m as P}from"./mockWiki-B6wTqEDI.js";import{M as x}from"./MarkdownSynapse-45gJTMPQ.js";import{d as s}from"./ToastMessage-CULrdqRm.js";import{R as n,a as t}from"./RequirementItem-CMSFWgy4.js";import{P as O}from"./Paper-CYE3NXP2.js";import"./index-TnDTBzFf.js";import"./iframe-CuKEFSiv.js";import"./mock_user_profile-CijvmO8r.js";import"./mock_file_handle-3wYKbysY.js";import"./VerificationSubmission-dxY1kvC5.js";import"./useFiles-DYAnKXqx.js";import"./SynapseConstants-gkdcnAma.js";import"./OrientationBanner-Cxt7qCaJ.js";import"./index-CiypzW3i.js";import"./spreadSx-CwcO6WA9.js";import"./react-BPX5T-jr.js";import"./FullWidthAlert-DOInkpIF.js";import"./Alert-D33iOhM3.js";import"./createTheme-CiTCtaPq.js";import"./resolveComponentProps-CX2YNoCK.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-YmPuCFu8.js";import"./createSvgIcon-PYlHuLfO.js";import"./DefaultPropsProvider-Dj24Y2Xr.js";import"./Close-BTgdsF2d.js";import"./IconButton-Btlm9KUL.js";import"./ButtonBase-Ck0XLcvU.js";import"./useTimeout-Do5JDutj.js";import"./TransitionGroupContext-D1ipvWwM.js";import"./useIsFocusVisible-CZe6Gkhu.js";import"./useEventCallback-DApRzhme.js";import"./Stack-BZm-4vsJ.js";import"./getThemeProps-BNyY6QJd.js";import"./useTheme-K5JEE0Rs.js";import"./Box-CjckbGK_.js";import"./AlertTitle-0i1SwaRE.js";import"./Typography-BHacpJuX.js";import"./useTheme-DOFgFuwm.js";import"./Grow-CP00JTgt.js";import"./index-OQkrhSPO.js";import"./utils-DBPX0-1k.js";import"./ClickAwayListener-B7QLYZZn.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DRjJPI8u.js";import"./index-DRLnAiW7.js";import"./useControlled-C3ftmNlQ.js";import"./useId-CBzLqrSr.js";import"./Popper-BDQKAv4l.js";import"./Button-BfAXo1Lk.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-lE31obNl.js";import"./useQuery-BViQs6v7.js";import"./utils-BprPXMtG.js";import"./Link-C3TGAzuv.js";import"./Collapse-BQyvnYTI.js";import"./isNil-B6T7CFbI.js";import"./_Uint8Array-C6rSnNnZ.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-Cgap4Gvx.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-C_QgXv57.js";import"./_getTag-DjjFc0nJ.js";import"./tinycolor-Begke6kS.js";import"./Fade-BvJPDuul.js";import"./Skeleton-BGy2m945.js";import"./inputBaseClasses-MLdP7SJy.js";import"./calculateFriendlyFileSize-KWbP0lKx.js";import"./CheckCircleTwoTone-DCcgpwt_.js";import"./InfoTwoTone-Cj98hI2s.js";import"./mutation-CE1ugUAr.js";import"./dayjs.min-B38EMs9S.js";import"./chunk-AYJ5UCUI-DNdPl_oj.js";import"./cloneDeep-Gs3EDVNV.js";import"./_initCloneObject-Bo4fS92M.js";import"./isEqual-BBsO-C2U.js";import"./merge-Dj9R6MmV.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-DUGp1FfO.js";import"./SkeletonInlineBlock-CSUAkSmM.js";import"./SkeletonTable-CMgcD7Dg.js";import"./times-Cu64ZQfK.js";import"./toInteger-CvHZi1em.js";import"./isSymbol-SUyKWxT2.js";import"./SkeletonParagraph-DSaeA_Nm.js";import"./uniqueId-s-ZdSPNf.js";import"./toString-SlzxmsmN.js";import"./CSSTransition-DUGDPKcW.js";import"./ConditionalWrapper-BIeIXL2d.js";import"./LockTwoTone-DZT1N5o0.js";import"./Avatar-CnEkVo4c.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
