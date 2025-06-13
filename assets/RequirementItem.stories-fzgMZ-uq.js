import{j as a}from"./jsx-runtime-DjELr09S.js";import{m as P}from"./mockWiki-CfZ4orwO.js";import{M as x}from"./MarkdownSynapse-DdEoT2J3.js";import{d as s}from"./ToastMessage-DZT73Paq.js";import{R as n,a as t}from"./RequirementItem-kvCiLJp9.js";import{P as O}from"./Paper-YzbxsTTQ.js";import"./index-CRC0gUGT.js";import"./iframe-tJqn4f01.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-qAzg5fnb.js";import"./VerificationSubmission-DKyendrM.js";import"./useFiles-BW-owtxo.js";import"./SynapseConstants-DYVulwWj.js";import"./OrientationBanner-CkExct-K.js";import"./index-Cma5SVl3.js";import"./spreadSx-CwcO6WA9.js";import"./react-axdigFKh.js";import"./FullWidthAlert-DDbXXCv9.js";import"./Alert-CujLCNcc.js";import"./createTheme-DQgOOKGc.js";import"./DefaultPropsProvider-BD-C1P_v.js";import"./useSlot-BoDDrK5C.js";import"./useForkRef-CiEqLLys.js";import"./createSimplePaletteValueFilter-BGAHH8st.js";import"./createSvgIcon-ClTXAx25.js";import"./Close-v_Yqb0Ff.js";import"./IconButton-BMaEMUSh.js";import"./useTimeout-LJKXBrqp.js";import"./ButtonBase-BxvSQLqm.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-C-pin8Wm.js";import"./Stack-CkCmnvh9.js";import"./extendSxProp-BdaBbCaG.js";import"./getThemeProps-GT0SpVYm.js";import"./useTheme-C1X5k2vU.js";import"./Box-B8SxUwYv.js";import"./AlertTitle-CKDD2-B2.js";import"./Typography-CjUaZcjg.js";import"./index-FRkwLtZ5.js";import"./useTheme-5c2fjMQ9.js";import"./ClickAwayListener-BmI1rJ_C.js";import"./getReactElementRef-Bn8XLpha.js";import"./index-DwsODiYZ.js";import"./index-86h2p3s9.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CC-UToNg.js";import"./Tooltip-CA2ntON0.js";import"./index-0_SuK6xJ.js";import"./useControlled-CSFe08nh.js";import"./Popper-Dc8rhSID.js";import"./Button-94LdtlT8.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BcSmk1fX.js";import"./useQuery-DR-NIgIW.js";import"./utils-BHyCoYbL.js";import"./Link-BWzpb2I3.js";import"./Collapse-CeVTy5G8.js";import"./isNil-Dt1ur5ER.js";import"./_Uint8Array-DNmeFNwt.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DBdzEJhN.js";import"./isArray-Dxzbedgu.js";import"./isEqual-BDSMxr4M.js";import"./_getTag-Dbs1MR1b.js";import"./tinycolor-Begke6kS.js";import"./Fade-DnU0MG16.js";import"./inputBaseClasses-Cxqzqvgy.js";import"./calculateFriendlyFileSize-NoS0jg63.js";import"./CheckCircleTwoTone-BW8ZNfsM.js";import"./InfoTwoTone-2sQfC__e.js";import"./useMutation-BApUlXSa.js";import"./dayjs.min-Cwlc6FFu.js";import"./chunk-AYJ5UCUI-DrMux6IH.js";import"./cloneDeep-DS1BAkOs.js";import"./_initCloneObject-CMrr9E2i.js";import"./Skeleton-BjJ3iFNk.js";import"./merge-rOUTElX2.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-CbH0yTvc.js";import"./SkeletonInlineBlock-Ds1Ajzmd.js";import"./SkeletonTable-Dlh5NhkR.js";import"./times-CQ_I1tEa.js";import"./toInteger-DwjUknig.js";import"./isSymbol--8wkJcCN.js";import"./SkeletonParagraph-CHGOSHG2.js";import"./uniqueId-BZB8XjJw.js";import"./toString-DzleP1QC.js";import"./CSSTransition-nPJge1yx.js";import"./ConditionalWrapper-DcZBNtjQ.js";import"./LockTwoTone-Chgm9GEk.js";import"./Avatar-C3mlgQvY.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
