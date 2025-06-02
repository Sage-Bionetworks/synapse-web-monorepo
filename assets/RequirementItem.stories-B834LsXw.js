import{j as a}from"./jsx-runtime-ZqC83-wP.js";import{m as P}from"./mockWiki-CgjxDh2Q.js";import{M as x}from"./MarkdownSynapse-CxTMvGiC.js";import{d as s}from"./ToastMessage-CypKolgP.js";import{R as n,a as t}from"./RequirementItem-D-JmJfVO.js";import{P as O}from"./Paper-B36p1j3K.js";import"./index-D3UU9lQW.js";import"./iframe-itIUiwxo.js";import"./mock_user_profile-CijvmO8r.js";import"./mock_file_handle-CFTRkxcS.js";import"./VerificationSubmission-BI5WaB2N.js";import"./useFiles-DQNFO6M3.js";import"./SynapseConstants-CKvgSoDH.js";import"./OrientationBanner-B0OoLswb.js";import"./index-D11wmJq-.js";import"./spreadSx-CwcO6WA9.js";import"./react-O6I3oTFU.js";import"./FullWidthAlert-DAax8okC.js";import"./Alert-CU_Obpy3.js";import"./createTheme-C_IqejkE.js";import"./resolveComponentProps-Dmj9A9RV.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-hDXtKHAF.js";import"./createSvgIcon-DHcmv218.js";import"./DefaultPropsProvider-YK680Z1R.js";import"./Close-BJ4PCaUp.js";import"./IconButton-ChC2FTBM.js";import"./ButtonBase-75CAl-fr.js";import"./useTimeout-BV5S8NXn.js";import"./TransitionGroupContext-B6Qra7Rj.js";import"./useIsFocusVisible-DHBCoWw5.js";import"./useEventCallback-CA3yg066.js";import"./Stack-DlqPlAbi.js";import"./getThemeProps-wZq0Zah2.js";import"./useTheme-B_XHKhDB.js";import"./Box-CmLfYmAL.js";import"./AlertTitle-BLeEkfUJ.js";import"./Typography-DQbfKnED.js";import"./useTheme-DfwXarV_.js";import"./Grow-CryHvXlm.js";import"./index-C3D0ccmq.js";import"./utils-Bd-b7f2h.js";import"./ClickAwayListener-zCiIq-sA.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BPpCrc9w.js";import"./index-Ccj1bX3p.js";import"./useControlled-C9HNAFVZ.js";import"./useId-CG4UsncK.js";import"./Popper-C1SIfDvh.js";import"./Button-CMT8k8PB.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-DN6u4g4A.js";import"./useQuery-BqZh5555.js";import"./utils-DJNKw99O.js";import"./Link-DZafluH_.js";import"./Collapse-CyQNCh1z.js";import"./isNil-DGBBC_gM.js";import"./_Uint8Array-CyAVpPKh.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-m8g4xdIh.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-BPztA6qE.js";import"./_getTag-BQtK23u5.js";import"./tinycolor-Begke6kS.js";import"./Fade-CojYmX76.js";import"./Skeleton-DQuvMvZk.js";import"./inputBaseClasses-CShjFgOh.js";import"./calculateFriendlyFileSize-CQTrwrnu.js";import"./CheckCircleTwoTone-C8wF6a0h.js";import"./InfoTwoTone-BK1P1y4D.js";import"./useMutation-BrGCzCug.js";import"./isEqual-BPjkdIBC.js";import"./dayjs.min-DYPT4JpK.js";import"./chunk-AYJ5UCUI-BhbJP7T3.js";import"./cloneDeep-BUB8jjRG.js";import"./_initCloneObject-D6hrjEDP.js";import"./merge-BOQKqbFD.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-tDncVxcy.js";import"./SkeletonInlineBlock-DehefHav.js";import"./SkeletonTable-Dv7ttQzh.js";import"./times-CTOlteI3.js";import"./toInteger-DLNl_Use.js";import"./isSymbol-GDvudLqi.js";import"./SkeletonParagraph-CraFKDU0.js";import"./uniqueId-DWor3tOo.js";import"./toString-J2AGyw_t.js";import"./CSSTransition-DL1Hzflt.js";import"./ConditionalWrapper-DFAPskjH.js";import"./LockTwoTone-DYcDtW7j.js";import"./Avatar-D6W3Ed3s.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
