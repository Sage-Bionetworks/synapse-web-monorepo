import{j as a}from"./jsx-runtime-TwxSPpge.js";import{m as P}from"./mockWiki-BApATWET.js";import{M as x}from"./MarkdownSynapse-B-ic0dSG.js";import{d as s}from"./ToastMessage-BeUbjsnJ.js";import{R as n,a as t}from"./RequirementItem-jadPTDSA.js";import{P as O}from"./Paper-CfudIHrR.js";import"./index-CP2ombwK.js";import"./iframe-DELcdr28.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CnMBfpEV.js";import"./VerificationSubmission-DeH3Sb8D.js";import"./useFiles-CjD41V1e.js";import"./SynapseConstants-qhCgmPo2.js";import"./OrientationBanner-PAkVLtDj.js";import"./index-DDTRWmF_.js";import"./spreadSx-CwcO6WA9.js";import"./react-BwCWi7yt.js";import"./FullWidthAlert-C02ikxsw.js";import"./Alert-DXgGMWRg.js";import"./createTheme--XeMpcIA.js";import"./resolveComponentProps-gSlQduCW.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-BTeFA_Hh.js";import"./createSvgIcon-CxsSGhzU.js";import"./DefaultPropsProvider-CFQoP9D3.js";import"./Close-CBYHhd3e.js";import"./IconButton-DbbMJHnd.js";import"./ButtonBase-Xvjt3VdP.js";import"./useTimeout-BvmDw31A.js";import"./TransitionGroupContext-BqEE9JDI.js";import"./useIsFocusVisible-BvGnrCgo.js";import"./useEventCallback-3xmF-Fyu.js";import"./Stack-GpaDpopE.js";import"./getThemeProps-CGck1bva.js";import"./useTheme-Byz5Ojax.js";import"./Box-DS3zPfAO.js";import"./AlertTitle-BHnzChDM.js";import"./Typography-DKoHBbqi.js";import"./useTheme-Dkz8W119.js";import"./Grow-CGp3UrJ6.js";import"./index-yCLJ8nr9.js";import"./index-H7gE-4SG.js";import"./utils-Dq3QiokW.js";import"./ClickAwayListener-DNJlLkB-.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-C2lPtfFI.js";import"./index-BlQzu9ng.js";import"./useControlled-DgiNbB_g.js";import"./useId-COlya_Y0.js";import"./Popper-Dsyid569.js";import"./Button-BFW2wg2m.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-DnD65nWI.js";import"./useQuery-C-XYJIex.js";import"./utils-C96tNR1M.js";import"./Link-BX2lIlPn.js";import"./Collapse-CWKH_sJZ.js";import"./isNil-fEUU7fIg.js";import"./_Uint8Array-sWy1T8xd.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CIsPGAoN.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-xi4DsmAB.js";import"./_getTag-DFaT4zHc.js";import"./tinycolor-Begke6kS.js";import"./Fade-C9PsbQ81.js";import"./Skeleton-OPnWbGkQ.js";import"./inputBaseClasses-D5Lb_ZTl.js";import"./calculateFriendlyFileSize-BV2jZfrl.js";import"./CheckCircleTwoTone-BnmX4Xsz.js";import"./InfoTwoTone-XdTRaOZd.js";import"./useMutation-CgEkPnYU.js";import"./isEqual-Dr-LLa-c.js";import"./dayjs.min-674unzfE.js";import"./chunk-AYJ5UCUI-DOC_4awE.js";import"./cloneDeep-APW-NT8P.js";import"./_initCloneObject-BkVuG82H.js";import"./merge-D-wdjlc3.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-CNfkawHs.js";import"./SkeletonInlineBlock-Ch_ZOool.js";import"./SkeletonTable-D2d__fkq.js";import"./times-dN1pB_Im.js";import"./toInteger-8GQG0eoC.js";import"./isSymbol-C7zmpetB.js";import"./SkeletonParagraph-Bh9TfDlC.js";import"./uniqueId-BStE4KXd.js";import"./toString-CBsAOpI5.js";import"./CSSTransition-fuNBSHqf.js";import"./ConditionalWrapper-DIRYzROr.js";import"./LockTwoTone-BhQMhscV.js";import"./Avatar-B5loOLfz.js";const ur={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
