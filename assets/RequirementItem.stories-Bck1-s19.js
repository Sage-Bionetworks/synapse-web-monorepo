import{j as a}from"./jsx-runtime-DyzG1hwI.js";import{m as P}from"./mockWiki-CgjxDh2Q.js";import{M as x}from"./MarkdownSynapse-uan3urzu.js";import{d as s}from"./ToastMessage-CgOfFZrc.js";import{R as n,a as t}from"./RequirementItem-CwIUBkpV.js";import{P as O}from"./Paper-BwPqQmBI.js";import"./index-CrSrYSTF.js";import"./iframe-CMGcwyU8.js";import"./mock_user_profile-CijvmO8r.js";import"./mock_file_handle-CFTRkxcS.js";import"./VerificationSubmission-BI5WaB2N.js";import"./useFiles-Bka2L5ox.js";import"./SynapseConstants-Bwu0qB46.js";import"./OrientationBanner-DXkttNGr.js";import"./index-qI3IIQ-p.js";import"./spreadSx-CwcO6WA9.js";import"./react-O48Z7vaA.js";import"./FullWidthAlert-rjMyFGK6.js";import"./Alert-Cm8kQflu.js";import"./createTheme-Is747m2y.js";import"./resolveComponentProps-DyjLIVKx.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-C8M4wLUf.js";import"./createSvgIcon-CUNVkehu.js";import"./DefaultPropsProvider-DWF5CBcq.js";import"./Close-B9m6eLPP.js";import"./IconButton-DHpv-rlf.js";import"./ButtonBase-Btia2eQe.js";import"./useTimeout-CaiJjEK4.js";import"./TransitionGroupContext-DxZXjnHx.js";import"./useIsFocusVisible-BTCzTTr7.js";import"./useEventCallback-DHPME8kn.js";import"./Stack-DknzwWm6.js";import"./getThemeProps-B56GMEUH.js";import"./useTheme-C0i1PFNN.js";import"./Box-1gY1bGlg.js";import"./AlertTitle-1VF7a4z7.js";import"./Typography-DzUle5GT.js";import"./useTheme-DhD4Q8NU.js";import"./Grow-BUmN-gNH.js";import"./index-CAg7QE2R.js";import"./utils-D7M9m_8l.js";import"./ClickAwayListener-DxQfJRP3.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BwMDWNOg.js";import"./index-HDNDhk7k.js";import"./useControlled-DgCtf78D.js";import"./useId-DuezacBB.js";import"./Popper-BnveApbh.js";import"./Button-DtaNQqCu.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-DN6u4g4A.js";import"./useQuery-DJ0M6IWq.js";import"./utils-BPMC0IQI.js";import"./Link-B-mm3T7u.js";import"./Collapse-BFoXWlCs.js";import"./isNil-BrU7Yzj-.js";import"./_Uint8Array-CdKCkqyI.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-iezpm4wN.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-fkYr_Tyw.js";import"./_getTag-2sIXRL8V.js";import"./tinycolor-Begke6kS.js";import"./Fade-DRISSy7_.js";import"./Skeleton-BhyIo3kT.js";import"./inputBaseClasses-DGjAuvih.js";import"./calculateFriendlyFileSize-yzj5Sy8t.js";import"./CheckCircleTwoTone-DJHnZOGu.js";import"./InfoTwoTone-BB__BbP8.js";import"./mutation-BUMzrZ3W.js";import"./dayjs.min-BrH-GAW7.js";import"./chunk-AYJ5UCUI-CjNLu336.js";import"./cloneDeep-Bp1YEk0j.js";import"./_initCloneObject-CzqCuNIq.js";import"./isEqual-B8DTjVuz.js";import"./merge-C1qPWmGd.js";import"./identity-DKeuBCMA.js";import"./useMutation-9Vn__7fC.js";import"./SkeletonButton-BFJRsTcI.js";import"./SkeletonInlineBlock-BmYtQ43f.js";import"./SkeletonTable-DpNGjRYw.js";import"./times-QSmVszMZ.js";import"./toInteger-c-0CKB6e.js";import"./isSymbol-BPQrIT02.js";import"./SkeletonParagraph-CAK_YI3L.js";import"./uniqueId-BGbHZD-g.js";import"./toString-BvSjqnIG.js";import"./CSSTransition-KGtQUU3Y.js";import"./ConditionalWrapper-DPMlX5-u.js";import"./LockTwoTone-Ct8dJxgS.js";import"./Avatar-CcfG6c2E.js";const ur={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
