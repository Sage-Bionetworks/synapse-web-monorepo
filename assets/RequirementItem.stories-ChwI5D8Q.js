import{j as a}from"./jsx-runtime-BShfRpSZ.js";import{m as P}from"./mockWiki-CgjxDh2Q.js";import{M as x}from"./MarkdownSynapse-Cgf5QBr8.js";import{d as s}from"./ToastMessage-BxN4hZtC.js";import{R as n,a as t}from"./RequirementItem-CJR22nNw.js";import{P as O}from"./Paper-Bm29IVK3.js";import"./index-BbtDhika.js";import"./iframe-CKrYTaKd.js";import"./mock_user_profile-CijvmO8r.js";import"./mock_file_handle-CFTRkxcS.js";import"./VerificationSubmission-BI5WaB2N.js";import"./useFiles-PZ8-Ka-K.js";import"./SynapseConstants-D-g__08a.js";import"./OrientationBanner-Cvk0vZwz.js";import"./index-N1kOmd9H.js";import"./spreadSx-CwcO6WA9.js";import"./react-HYFTtNt4.js";import"./FullWidthAlert-D-sxDN5-.js";import"./Alert-C2YXBWCZ.js";import"./createTheme-DKmxwRcy.js";import"./resolveComponentProps-BVwZEvDc.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-IOZ1OulF.js";import"./createSvgIcon-hcVlY0Ml.js";import"./DefaultPropsProvider-cSSWhC_N.js";import"./Close-DBkHOwqb.js";import"./IconButton-5km8qVSa.js";import"./ButtonBase-ClE2TfhF.js";import"./useTimeout-k-gMJ94D.js";import"./TransitionGroupContext-Cve-nvmp.js";import"./useIsFocusVisible-Dks7CKXr.js";import"./useEventCallback-jwq_ByoI.js";import"./Stack-COuT9-_l.js";import"./getThemeProps-DEq8Zk9I.js";import"./useTheme-DuVt1FxG.js";import"./Box-CWd-bsj8.js";import"./AlertTitle-D7VJteKH.js";import"./Typography-D596ILSX.js";import"./useTheme-BKtsw1fM.js";import"./Grow-DArXpOEh.js";import"./index-C2ZmoJQv.js";import"./utils-JiBfP0T-.js";import"./ClickAwayListener-DJDrwr3D.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BhjMsB6i.js";import"./index-CmWQNtGo.js";import"./useControlled-BNOR6_Pf.js";import"./useId-C10K-7yC.js";import"./Popper-BEhyKRxf.js";import"./Button-C3bos-pW.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-DN6u4g4A.js";import"./useQuery-BY-c2cTp.js";import"./utils-BIdFCP2Y.js";import"./Link-BR06mnNh.js";import"./Collapse-D4OMLybv.js";import"./isNil-9z8ZomJ0.js";import"./_Uint8Array-DIVOU-2-.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CHy9fFvj.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-ClNnW1Hu.js";import"./_getTag-l16BreDv.js";import"./tinycolor-Begke6kS.js";import"./Fade-RO7PwX5V.js";import"./Skeleton-CB5rBUhd.js";import"./inputBaseClasses-C06Dmsts.js";import"./calculateFriendlyFileSize-Hpnh_yqR.js";import"./CheckCircleTwoTone-ly2iPN9C.js";import"./InfoTwoTone-CEeh4CzQ.js";import"./mutation-Br5mjHBF.js";import"./dayjs.min-D0qkn3AN.js";import"./chunk-AYJ5UCUI-D7I6sN6G.js";import"./cloneDeep-DpCux0qf.js";import"./_initCloneObject-wn-R8NIZ.js";import"./isEqual-CVkRzbJy.js";import"./merge-BWGd7Swl.js";import"./identity-DKeuBCMA.js";import"./useMutation-D-CWI_i2.js";import"./SkeletonButton-DbqdKH1b.js";import"./SkeletonInlineBlock-BKSCAse0.js";import"./SkeletonTable-CY03LyzV.js";import"./times-BvOY06CC.js";import"./toInteger-DYzZKw_P.js";import"./isSymbol-CUREHNyO.js";import"./SkeletonParagraph-BG-y1rkA.js";import"./uniqueId-DbpN6IHj.js";import"./toString-YsSM19GU.js";import"./CSSTransition-HvPba3nD.js";import"./ConditionalWrapper-CZEjPKy6.js";import"./LockTwoTone-BybncQ6A.js";import"./Avatar-CyN7rV2l.js";const ur={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
