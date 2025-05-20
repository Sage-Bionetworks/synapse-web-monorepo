import{j as a}from"./jsx-runtime-DNP5ZHPF.js";import{m as P}from"./mockWiki-CZdZHQnO.js";import{M as x}from"./MarkdownSynapse-BeO0RyoA.js";import{d as s}from"./ToastMessage-C3sj4-_Q.js";import{R as n,a as t}from"./RequirementItem-016-fk3c.js";import{P as O}from"./Paper-BZJIjrog.js";import"./index-C9LqO53Z.js";import"./iframe-DzZkUbt0.js";import"./mock_user_profile-CijvmO8r.js";import"./mock_file_handle-Ct1MSfYs.js";import"./VerificationSubmission-B0kBNeMy.js";import"./useFiles-DxEFRl-N.js";import"./SynapseConstants-x7wBmLwm.js";import"./OrientationBanner-lGnlzz1n.js";import"./index-DNCRZXKi.js";import"./spreadSx-CwcO6WA9.js";import"./react-LeG2f8XJ.js";import"./FullWidthAlert-XMCCRjsq.js";import"./Alert-DBftbUxX.js";import"./createTheme-BG9REND8.js";import"./resolveComponentProps-DJsKa-oF.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-D7H_VIUT.js";import"./createSvgIcon-BtT08fNl.js";import"./DefaultPropsProvider-CBoC3p-_.js";import"./Close-BrzxmRIz.js";import"./IconButton-HsPug_ob.js";import"./ButtonBase-C0iYjrZq.js";import"./useTimeout-9s3akjMN.js";import"./TransitionGroupContext-CdwE7o-d.js";import"./useIsFocusVisible-C4iYqwwm.js";import"./useEventCallback-CFsLaU7U.js";import"./Stack-C3Yli3Do.js";import"./getThemeProps-CmxBhP06.js";import"./useTheme-Dqg7276U.js";import"./Box-DhP9mjg7.js";import"./AlertTitle-CFko3bX9.js";import"./Typography-BdVBJyiw.js";import"./useTheme-DaIKVKIj.js";import"./Grow-BEsXXeLg.js";import"./index-B7SGfn2n.js";import"./utils-Bn3sr0WI.js";import"./ClickAwayListener-CiZf8GXf.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip--gcNUJrW.js";import"./index-DfJVQJTe.js";import"./useControlled-C6FPOIeJ.js";import"./useId-Bp9otoFB.js";import"./Popper-wFK3a8ms.js";import"./Button-C1D6jijN.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-CzgJJW-6.js";import"./useQuery-Drm9MnN6.js";import"./utils-Dge9E0v5.js";import"./Link-BP8bljuP.js";import"./Collapse-DAEF_CSM.js";import"./isNil-C_6EL5i8.js";import"./_Uint8Array-CYf3IgYh.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-BAT6WrGj.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-DUOouxQQ.js";import"./_getTag-DKMcyan0.js";import"./tinycolor-Begke6kS.js";import"./Fade-BS8huG_s.js";import"./Skeleton-X6vAixA1.js";import"./inputBaseClasses-Cvq7yWxw.js";import"./calculateFriendlyFileSize-FpJgzzI_.js";import"./CheckCircleTwoTone-DooSA5RY.js";import"./InfoTwoTone-BUvN6rod.js";import"./mutation-DZbFfGts.js";import"./dayjs.min-DYHBVdyC.js";import"./chunk-AYJ5UCUI-BAVTTsGw.js";import"./cloneDeep-DGtsa-PL.js";import"./_initCloneObject-BZtj6YT_.js";import"./isEqual-CyOrkakg.js";import"./merge-CAVgou7m.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-BK7YgQCa.js";import"./SkeletonInlineBlock-D4jApRcZ.js";import"./SkeletonTable-Bik19zmH.js";import"./times-ChNYGLHd.js";import"./toInteger-NHA3mITb.js";import"./isSymbol-CR6CJbsv.js";import"./SkeletonParagraph-DK8LxRG0.js";import"./uniqueId-CTU4ZW8o.js";import"./toString-Drlpq-aN.js";import"./CSSTransition-3Ix0o81q.js";import"./ConditionalWrapper-CdyME2LR.js";import"./LockTwoTone-DFaz6q8w.js";import"./Avatar-g_KuDRey.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
