import{j as a}from"./jsx-runtime-12fxGrjy.js";import{m as P}from"./mockWiki-CfZ4orwO.js";import{M as x}from"./MarkdownSynapse-IffknW2V.js";import{d as s}from"./ToastMessage-DfORqKHW.js";import{R as n,a as t}from"./RequirementItem-Cs6GWDmq.js";import{P as O}from"./Paper-Ci3Yueie.js";import"./index-eWb6yZq4.js";import"./iframe-DODfCr77.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-qAzg5fnb.js";import"./VerificationSubmission-DKyendrM.js";import"./useFiles-DzQRyXfk.js";import"./SynapseConstants-C01AROpC.js";import"./OrientationBanner-CswyJYID.js";import"./index-CMNPibww.js";import"./spreadSx-CwcO6WA9.js";import"./react-Bk-AWK8u.js";import"./FullWidthAlert-Blq3bBEi.js";import"./Alert-DWxtKETL.js";import"./createTheme-DRhRClLk.js";import"./DefaultPropsProvider-Ci8sbTV8.js";import"./useSlot-BOoc1-Wr.js";import"./useForkRef-B4NxTtZx.js";import"./createSimplePaletteValueFilter-CMraNz6N.js";import"./createSvgIcon-D4n9PHew.js";import"./Close-DkJIaBp5.js";import"./IconButton-CJduSAtX.js";import"./useTimeout-CUTjfTtv.js";import"./ButtonBase-CLm9sSu-.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CdPHbqUK.js";import"./Stack-BS_Kn9Ff.js";import"./extendSxProp-DI5yyw6H.js";import"./getThemeProps-SQagHrVW.js";import"./useTheme-z8lzzdCb.js";import"./Box-0inLKyKa.js";import"./AlertTitle-Ck-1gEhW.js";import"./Typography-CJHr4OCJ.js";import"./index-BwS5CNFE.js";import"./useTheme-Do_MDklG.js";import"./ClickAwayListener-DO69o72C.js";import"./getReactElementRef-DFFPg7hK.js";import"./index-CxQ-mLV2.js";import"./index-DlwQbzBX.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BKGYiqhi.js";import"./Tooltip-CxkZFGgd.js";import"./index-COCW-O7-.js";import"./useControlled-C7HItnBl.js";import"./Popper-CmdmamXe.js";import"./Button-CDoCRKn7.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BcSmk1fX.js";import"./useQuery-DrZ8vTnH.js";import"./utils-j4SBhjSC.js";import"./Link-DTOk0JUk.js";import"./Collapse-CErYxnBs.js";import"./isNil-DLNdS6CO.js";import"./_Uint8Array-MTHtMqKk.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DitNMTVV.js";import"./isArray-Dxzbedgu.js";import"./isEqual-bHqmOGPc.js";import"./_getTag-C-k0-mgg.js";import"./tinycolor-Begke6kS.js";import"./Fade-B3HIOSOQ.js";import"./inputBaseClasses-iQvrcFLc.js";import"./calculateFriendlyFileSize-DKkGrI5V.js";import"./CheckCircleTwoTone-CIQNt3ux.js";import"./InfoTwoTone-BKwLIjWH.js";import"./useMutation-BJDaPx8l.js";import"./dayjs.min-CmKjBYsK.js";import"./chunk-AYJ5UCUI-C563RCUQ.js";import"./cloneDeep-C54KQJJc.js";import"./_initCloneObject-C69klfYQ.js";import"./Skeleton-DP5N4NIj.js";import"./merge-C4MUQ4-m.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-DujPgvgy.js";import"./SkeletonInlineBlock-Crb27GDP.js";import"./SkeletonTable-D6QmIv_5.js";import"./times-GoUGRPna.js";import"./toInteger-DaMMoq_0.js";import"./isSymbol-B7kXK_Sf.js";import"./SkeletonParagraph-DtAzBucS.js";import"./uniqueId-qr-Ywx-H.js";import"./toString-DYVPJQOI.js";import"./CSSTransition-BVdiJtMj.js";import"./ConditionalWrapper-C88dLs_Z.js";import"./LockTwoTone-DKaphZuD.js";import"./Avatar-WhvIhjJL.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
