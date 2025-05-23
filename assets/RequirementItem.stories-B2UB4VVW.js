import{j as a}from"./jsx-runtime-Cpzuo2ay.js";import{m as P}from"./mockWiki-DHj13qiO.js";import{M as x}from"./MarkdownSynapse-Bi9a_AZc.js";import{d as s}from"./ToastMessage-C-y1ivkC.js";import{R as n,a as t}from"./RequirementItem-CSVZ_gyj.js";import{P as O}from"./Paper-C_MNeKnS.js";import"./index-qzbKbFlq.js";import"./iframe-B7UWlENb.js";import"./mock_user_profile-CijvmO8r.js";import"./mock_file_handle-DS_yjaGE.js";import"./VerificationSubmission-DsgC4t7y.js";import"./useFiles-BHzIddvO.js";import"./SynapseConstants-DQnuBn7R.js";import"./OrientationBanner-Di6wDKmu.js";import"./index-D_POy7Ue.js";import"./spreadSx-CwcO6WA9.js";import"./react-DhQQnVH8.js";import"./FullWidthAlert-CYLONltS.js";import"./Alert-BoJtOfcQ.js";import"./createTheme-BSeZw0jO.js";import"./resolveComponentProps-CxH78Z7f.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-Dl0HqeWq.js";import"./createSvgIcon-ClunDJ6D.js";import"./DefaultPropsProvider-Bptl8wGp.js";import"./Close-C7ppEedf.js";import"./IconButton-DdxKVWSD.js";import"./ButtonBase-Cd6E67ue.js";import"./useTimeout-QDIkgYlw.js";import"./TransitionGroupContext-C6XQh8Dh.js";import"./useIsFocusVisible-yY6MxYkr.js";import"./useEventCallback-DFF1Wb54.js";import"./Stack-NeCVAsSl.js";import"./getThemeProps-v3E6r25K.js";import"./useTheme-CanYvo4O.js";import"./Box-DWG1pAIJ.js";import"./AlertTitle-CXuF7YB4.js";import"./Typography-UpxeVSC9.js";import"./useTheme-BXUKSYiP.js";import"./Grow---qI4Xyl.js";import"./index-V6m7UmXo.js";import"./utils-UQqgZKk5.js";import"./ClickAwayListener-BsZYeWwC.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-x8bHq8cu.js";import"./index-DhW7zJ1I.js";import"./useControlled-0Y9QxmiD.js";import"./useId-BZdi58KL.js";import"./Popper-DJNlKWGH.js";import"./Button-CJoc-lWM.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-tNCAfVhp.js";import"./useQuery-B_mXUuWt.js";import"./utils-BsHt5Ez6.js";import"./Link-bG66493O.js";import"./Collapse-JpDvYyye.js";import"./isNil-BFbe1Fm3.js";import"./_Uint8Array-BeS2nPDv.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-sZnKwddx.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-i7PtvCG3.js";import"./_getTag-BvHcUwIL.js";import"./tinycolor-Begke6kS.js";import"./Fade-BXyi4DiG.js";import"./Skeleton-Lg9a-sk4.js";import"./inputBaseClasses-BcoPWVf4.js";import"./calculateFriendlyFileSize-LFzydKri.js";import"./CheckCircleTwoTone-JlmlKZJ4.js";import"./InfoTwoTone-CWclAxfb.js";import"./mutation-Hk4gcjTH.js";import"./dayjs.min-C7AzIqXS.js";import"./chunk-AYJ5UCUI-C6fnNANP.js";import"./cloneDeep-Bk965Mg-.js";import"./_initCloneObject-o-TgjwA3.js";import"./isEqual-DJSPEdYQ.js";import"./merge-DYg2YPZj.js";import"./identity-DKeuBCMA.js";import"./useMutation-DIiovDAa.js";import"./SkeletonButton-C5_lomWq.js";import"./SkeletonInlineBlock-yqDUUNs0.js";import"./SkeletonTable-5zaLHpm6.js";import"./times-D-Y5GPLw.js";import"./toInteger-DPyE9_s_.js";import"./isSymbol-BjZPbA0U.js";import"./SkeletonParagraph-BspSCshB.js";import"./uniqueId-DVEz_6te.js";import"./toString-Bk6nik-V.js";import"./CSSTransition-h6gAf5qD.js";import"./ConditionalWrapper-DO4dJJ_9.js";import"./LockTwoTone-DWE7vx7c.js";import"./Avatar-C4MxL89U.js";const ur={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
