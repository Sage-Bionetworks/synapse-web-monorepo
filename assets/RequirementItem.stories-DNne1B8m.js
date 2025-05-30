import{j as a}from"./jsx-runtime-Bz85XGaa.js";import{m as P}from"./mockWiki-CgjxDh2Q.js";import{M as x}from"./MarkdownSynapse-Cl36scvg.js";import{d as s}from"./ToastMessage-D9eONVy-.js";import{R as n,a as t}from"./RequirementItem-B4qtkYLE.js";import{P as O}from"./Paper-ClD_GGAy.js";import"./index-BVV_9QeJ.js";import"./iframe-BDVC29SQ.js";import"./mock_user_profile-CijvmO8r.js";import"./mock_file_handle-CFTRkxcS.js";import"./VerificationSubmission-BI5WaB2N.js";import"./useFiles-ytsAIoDW.js";import"./SynapseConstants-p8jYVOEo.js";import"./OrientationBanner-BRf2AysZ.js";import"./index-Bw2EO2AE.js";import"./spreadSx-CwcO6WA9.js";import"./react-2XGxyWwi.js";import"./FullWidthAlert-UUgrqYvS.js";import"./Alert-DrO5kr0y.js";import"./createTheme-DtOhOvpP.js";import"./resolveComponentProps-CoZ49OvA.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-DA5a99gH.js";import"./createSvgIcon-_A5ycCXI.js";import"./DefaultPropsProvider-CCX4Uzgz.js";import"./Close-Bx0nXc68.js";import"./IconButton-zwyTJ7c3.js";import"./ButtonBase-DPyplpjy.js";import"./useTimeout-ufiQ3DfI.js";import"./TransitionGroupContext-xDeP4cu6.js";import"./useIsFocusVisible-BJFAdkmc.js";import"./useEventCallback-DXpDzqzG.js";import"./Stack-CYlmPWRV.js";import"./getThemeProps-DLBQ4YtD.js";import"./useTheme-8dQg3nEl.js";import"./Box-CeB-moYn.js";import"./AlertTitle-CgFT2f_w.js";import"./Typography-Bx51Sgda.js";import"./useTheme-r0RJ9GrL.js";import"./Grow-D4qHwQig.js";import"./index-D5bn-Jqh.js";import"./utils-DJ4l4jbW.js";import"./ClickAwayListener-O89kXouk.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-B1gm0b5o.js";import"./index-BcBgZbxD.js";import"./useControlled-CrvnJ5-v.js";import"./useId-udz03xSJ.js";import"./Popper-DWX0dxaL.js";import"./Button-DW5LN-qF.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-DN6u4g4A.js";import"./useQuery-wJKiWrQl.js";import"./utils-D3qV5qLe.js";import"./Link-BBtfC7zm.js";import"./Collapse-CU4oUoZ1.js";import"./isNil-BSjmuNaz.js";import"./_Uint8Array-BadtYtfl.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CQFXE7dF.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-D9I-2NFJ.js";import"./_getTag-Cn9y3BG0.js";import"./tinycolor-Begke6kS.js";import"./Fade-DsXpCnut.js";import"./Skeleton-p_YUG_xc.js";import"./inputBaseClasses-DWE6vfig.js";import"./calculateFriendlyFileSize-B_AmRV2M.js";import"./CheckCircleTwoTone-GIsapumQ.js";import"./InfoTwoTone-Eafa2etc.js";import"./mutation--dTc--pt.js";import"./dayjs.min-BBy7-jh7.js";import"./chunk-AYJ5UCUI-CEWJUJfg.js";import"./cloneDeep-DSj2Q_zQ.js";import"./_initCloneObject-BAJkGHCF.js";import"./isEqual-CYbZ3Lcd.js";import"./merge-FXhtNPRC.js";import"./identity-DKeuBCMA.js";import"./useMutation-m9y16WMY.js";import"./SkeletonButton-CjAWzv9h.js";import"./SkeletonInlineBlock-MutladEt.js";import"./SkeletonTable-BFuBy7Id.js";import"./times-C1ARjJ5C.js";import"./toInteger-DcuHz-1m.js";import"./isSymbol-QqeCS-r5.js";import"./SkeletonParagraph-CkkS4Cf8.js";import"./uniqueId-wjrkvc2O.js";import"./toString-Cfm0dfLv.js";import"./CSSTransition-MKSwRdTg.js";import"./ConditionalWrapper-Fb9zBN3v.js";import"./LockTwoTone-CvVUpe4o.js";import"./Avatar-CMgFSa-d.js";const ur={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
