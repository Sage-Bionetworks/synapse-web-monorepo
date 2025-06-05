import{j as a}from"./jsx-runtime-waCBpRoR.js";import{m as P}from"./mockWiki-DiBhlaV-.js";import{M as x}from"./MarkdownSynapse-BSQKTB-z.js";import{d as s}from"./ToastMessage-DprVkCB-.js";import{R as n,a as t}from"./RequirementItem-BGEPMXIO.js";import{P as O}from"./Paper-CYKweuiV.js";import"./index-h_UnLfo6.js";import"./iframe-680MXZqt.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-C2NjfX48.js";import"./VerificationSubmission-DHPhgAH7.js";import"./useFiles-CljrymEZ.js";import"./SynapseConstants-Dph5rBQn.js";import"./OrientationBanner-CjgChWnG.js";import"./index-BMF_L9R3.js";import"./spreadSx-CwcO6WA9.js";import"./react-DU91D3nF.js";import"./FullWidthAlert-Cw5CPwRv.js";import"./Alert-B6mldulx.js";import"./createTheme-5D4Rqrxe.js";import"./resolveComponentProps-BKsis4FC.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-jxbZ-E30.js";import"./createSvgIcon-CIPClKme.js";import"./DefaultPropsProvider-DQ5Mk1U-.js";import"./Close-CKkBBbGC.js";import"./IconButton-DJmlOxBU.js";import"./ButtonBase-6YJIww5y.js";import"./useTimeout-J1ckvgE6.js";import"./TransitionGroupContext-De44v-j0.js";import"./useIsFocusVisible-B6_ekAN2.js";import"./useEventCallback-BKViiGwn.js";import"./Stack-Dn8ZLNgz.js";import"./getThemeProps-LgoUfpsB.js";import"./useTheme-DyhUS_Ki.js";import"./Box-CT_1nrVQ.js";import"./AlertTitle-Bcq6TdWa.js";import"./Typography-CZ9ALj71.js";import"./useTheme-ClgfWb4r.js";import"./Grow-5pvfAIWM.js";import"./index-B6LkEjhj.js";import"./utils-PWlZfzHj.js";import"./ClickAwayListener-CXap0MMj.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DDSuOHr6.js";import"./index-CJ_vAaO1.js";import"./useControlled-C_NVhIqR.js";import"./useId-C-rjosBi.js";import"./Popper-DCTk9ede.js";import"./Button-5JJ-GHl5.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-Bj0SG9ce.js";import"./useQuery-Dh1LhL3I.js";import"./utils-Y4zdJIeZ.js";import"./Link-BiQG15cz.js";import"./Collapse-D3hOgT8-.js";import"./isNil-fMBoSKa1.js";import"./_Uint8Array-Cpy_aadF.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-BOvvXJEh.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-XAMHD0zM.js";import"./_getTag-hz2soytL.js";import"./tinycolor-Begke6kS.js";import"./Fade-CCgcWxTC.js";import"./Skeleton-C0ymAZsd.js";import"./inputBaseClasses-DkacoV0o.js";import"./calculateFriendlyFileSize-eQ_8oMwZ.js";import"./CheckCircleTwoTone-DYQ4blk1.js";import"./InfoTwoTone-DuJaAHyI.js";import"./useMutation-BS5_YSRi.js";import"./isEqual-CHZ16x6I.js";import"./dayjs.min-DQJjIQJ-.js";import"./chunk-AYJ5UCUI-C9ZxOBGw.js";import"./cloneDeep-D36itDQt.js";import"./_initCloneObject-DmY_Sjqn.js";import"./merge-psQUmM5Q.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-FeirKhlZ.js";import"./SkeletonInlineBlock-DI4_IQHD.js";import"./SkeletonTable-Ba322s94.js";import"./times-pUo71Ydm.js";import"./toInteger-DvpKJ1NE.js";import"./isSymbol-DbZKyWlb.js";import"./SkeletonParagraph-5sb__CHL.js";import"./uniqueId-DbMziyOn.js";import"./toString-CGj-Smq8.js";import"./CSSTransition-CUfPS1y_.js";import"./ConditionalWrapper-Dx9qjnm_.js";import"./LockTwoTone-BawdoYs4.js";import"./Avatar-DGCYgPxp.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
