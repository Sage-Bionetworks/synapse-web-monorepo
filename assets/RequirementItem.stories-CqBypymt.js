import{j as a}from"./jsx-runtime-Du8NFWEI.js";import{m as P}from"./mockWiki-CBxunrpz.js";import{M as x}from"./MarkdownSynapse-2zvZ_CAh.js";import{d as s}from"./ToastMessage-CmCdGkWE.js";import{R as n,a as t}from"./RequirementItem-hz5WvQlf.js";import{P as O}from"./Paper-B6Fumrsg.js";import"./index-Dl6G-zuu.js";import"./mock_user_profile-CyZOyNQ0.js";import"./mock_file_handle-ByHYXYit.js";import"./VerificationSubmission-CX6Xq4We.js";import"./StringUtils-DrtZBNIY.js";import"./useFiles-D6Pybmbn.js";import"./SynapseConstants-Ch8mxy-k.js";import"./OrientationBanner-6c7QOLx_.js";import"./index-CZCSLsz_.js";import"./spreadSx-CwcO6WA9.js";import"./react-CbO-K0JG.js";import"./FullWidthAlert-CgFm9dfg.js";import"./Alert-BoiUXBFA.js";import"./createTheme-BoQYKx5k.js";import"./index-GEGPABih.js";import"./styled-BMGIoXl7.js";import"./mergeSlotProps-D_dLvIWz.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-BDoLG09A.js";import"./createSvgIcon-DrH8-ApS.js";import"./Close-N0BBw2gu.js";import"./IconButton-QXhlbi2Z.js";import"./ButtonBase-CTLL4EY5.js";import"./useTimeout-DgmtfV4_.js";import"./TransitionGroupContext-DetLSwnr.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./useIsFocusVisible-Bf3pHwKN.js";import"./Stack-BcBUfnl7.js";import"./Box-T6r2Z_yt.js";import"./AlertTitle-DrSQ0G21.js";import"./Typography-D3xYwoES.js";import"./useTheme-B4ZZkoF-.js";import"./Grow-BcJKh-mH.js";import"./index-BIzb42Jq.js";import"./utils-D16j0ClI.js";import"./ClickAwayListener-DMjw0JVT.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-CIKCv17A.js";import"./index-DRltcjjn.js";import"./Popper-YUaVwGty.js";import"./useControlled-1Y2rT-1r.js";import"./useId-BkqTTtmk.js";import"./Button-CgNBwHku.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-DFbKL1Tm.js";import"./utils-DPkdG3Lw.js";import"./Link-C37sfSRl.js";import"./Collapse-BRq1pUbz.js";import"./isNil-CXnMBT_8.js";import"./_Uint8Array-BO3mj8J_.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-Cu7zvyZq.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-DEUJ7S9e.js";import"./_getTag-DiBG4-8j.js";import"./tinycolor-Begke6kS.js";import"./InfoTwoTone-Cn0cOZ_j.js";import"./CheckCircleTwoTone-BxJ-qX7O.js";import"./calculateFriendlyFileSize-C4KOtplu.js";import"./Skeleton-DwKQ5_E5.js";import"./inputBaseClasses-B4urITub.js";import"./Fade-TcPvrVoT.js";import"./mutation-SJTTtyND.js";import"./dayjs.min-d18Up55D.js";import"./chunk-AYJ5UCUI-B-t-syYg.js";import"./cloneDeep-BRq0JbUP.js";import"./_initCloneObject-CAXIH7ge.js";import"./isEqual-X7sPOZRU.js";import"./merge-DlorMX21.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-BD-3AFCV.js";import"./SkeletonInlineBlock-Fq_ly8Br.js";import"./SkeletonTable-WeG9TOK2.js";import"./times-DTv3Uv5U.js";import"./toInteger-kto__FmK.js";import"./isSymbol-VqtJwUUo.js";import"./SkeletonParagraph-C2aM1X4t.js";import"./iframe-R2qbPSQk.js";import"../sb-preview/runtime.js";import"./CSSTransition-CRPvtSQ6.js";import"./uniqueId-CNPmaLAy.js";import"./toString-C-tSuG3i.js";import"./ConditionalWrapper-Be926PbJ.js";import"./Avatar-DwHGonv4.js";import"./LockTwoTone-DzALj2so.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
