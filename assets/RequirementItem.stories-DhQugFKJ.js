import{j as a}from"./jsx-runtime-B8p3sbYp.js";import{m as P}from"./mockWiki-DHj13qiO.js";import{M as x}from"./MarkdownSynapse-DFKnmtl_.js";import{d as s}from"./ToastMessage-DEsQbA_e.js";import{R as n,a as t}from"./RequirementItem-SAy3K9N2.js";import{P as O}from"./Paper-DCHmdWJj.js";import"./index-w9WeLW3c.js";import"./iframe-Asvj3i57.js";import"./mock_user_profile-CijvmO8r.js";import"./mock_file_handle-DS_yjaGE.js";import"./VerificationSubmission-DsgC4t7y.js";import"./useFiles-DesDA-4w.js";import"./SynapseConstants-CkNL9tfS.js";import"./OrientationBanner-T98nrl-y.js";import"./index-BsCR_eh5.js";import"./spreadSx-CwcO6WA9.js";import"./react-dUjTuPER.js";import"./FullWidthAlert-DJCHcIx-.js";import"./Alert-BjpfLK2B.js";import"./createTheme-DfE_l7fh.js";import"./resolveComponentProps-DK3a2xv6.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-BikEN9Oe.js";import"./createSvgIcon-CFiQ1ApI.js";import"./DefaultPropsProvider-B8LU8o9q.js";import"./Close-ChfM_AlY.js";import"./IconButton-DoJdjScg.js";import"./ButtonBase-BI1CiCIR.js";import"./useTimeout-DtkCtw32.js";import"./TransitionGroupContext-E5HcsAwp.js";import"./useIsFocusVisible-yzb205lP.js";import"./useEventCallback-H7A-SEZM.js";import"./Stack-CotbFTt2.js";import"./getThemeProps-BDyn-BEF.js";import"./useTheme-9PQSeyW-.js";import"./Box-CnxWcHOe.js";import"./AlertTitle-DitZ3tPO.js";import"./Typography-BvS3uuok.js";import"./useTheme-CQr96cnb.js";import"./Grow-s44nII5P.js";import"./index-DgLB2t6n.js";import"./utils-DNh8IEA0.js";import"./ClickAwayListener-D8lghhOx.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BnJQ2gnX.js";import"./index-GtvJuuzD.js";import"./useControlled-D1WSYfsz.js";import"./useId-BQ-eUGSB.js";import"./Popper-8eBb15T8.js";import"./Button-DlKIFd8I.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-tNCAfVhp.js";import"./useQuery-CgQSlLpx.js";import"./utils-DIJ1YRVE.js";import"./Link-OJK74gkl.js";import"./Collapse-DF4Jc8cn.js";import"./isNil-BXRYPzmI.js";import"./_Uint8Array-oLKfr7O_.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DimCDoBQ.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-BmBs-yHc.js";import"./_getTag-BjkIdouv.js";import"./tinycolor-Begke6kS.js";import"./Fade-flmyQvY4.js";import"./Skeleton-CkdkB3Ve.js";import"./inputBaseClasses-DQaoDeQ9.js";import"./calculateFriendlyFileSize-DpR2ltQV.js";import"./CheckCircleTwoTone-oHlSZvuV.js";import"./InfoTwoTone-fltNCXgD.js";import"./mutation-BE5QGJq0.js";import"./dayjs.min-C2QKGBMu.js";import"./chunk-AYJ5UCUI-pJeN8JWb.js";import"./cloneDeep-DLb1zHSL.js";import"./_initCloneObject-wFbTLhun.js";import"./isEqual-DvQ_cDaS.js";import"./merge-DRxhOKVw.js";import"./identity-DKeuBCMA.js";import"./useMutation-1QQPCB8E.js";import"./SkeletonButton-BC2YHFS7.js";import"./SkeletonInlineBlock-CkxRhav5.js";import"./SkeletonTable-DwklkASW.js";import"./times-6Wxkx8NU.js";import"./toInteger-COdfDz0w.js";import"./isSymbol-BquGUEY5.js";import"./SkeletonParagraph-Pt6HGN5V.js";import"./uniqueId-SeJWhHXZ.js";import"./toString-D7KqsNPL.js";import"./CSSTransition-CknOX9tw.js";import"./ConditionalWrapper-BU8SyVKf.js";import"./LockTwoTone-ntGhZi19.js";import"./Avatar-Bu0QKub0.js";const ur={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(q=(I=m.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};const lr=["Complete","Pending","Loading","NoActions","Locked"];export{r as Complete,e as Loading,m as Locked,i as NoActions,o as Pending,lr as __namedExportsOrder,ur as default};
