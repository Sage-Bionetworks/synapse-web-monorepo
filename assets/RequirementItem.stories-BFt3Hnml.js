import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-CNkPN_bc.js";import{d as s}from"./ToastMessage-CecKdAme.js";import{R as n,a as t}from"./RequirementItem-CyFFz42C.js";import{P as O}from"./Paper-ByAOIlTc.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-Beh68O0r.js";import"./SynapseConstants-D0NSmgCZ.js";import"./OrientationBanner-BZ8oNh3t.js";import"./index-BBkAb27i.js";import"./index-DqVY_MdG.js";import"./iframe-B5rs55Pd.js";import"./spreadSx-CwcO6WA9.js";import"./react-Cy3MuSEQ.js";import"./FullWidthAlert-BtCkhzZ3.js";import"./Alert-BKYnRrQJ.js";import"./createTheme-CCW9jeh0.js";import"./DefaultPropsProvider---V3OlnO.js";import"./useSlot-HxkH3zom.js";import"./useForkRef-BjME3TBq.js";import"./createSimplePaletteValueFilter-DMImf7ZH.js";import"./createSvgIcon-excwm1Bq.js";import"./Close-L3mo_2vy.js";import"./IconButton-D6h92Nv_.js";import"./useTimeout-Cn7Uzbmj.js";import"./ButtonBase-uwFg90Zi.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-_VcLKcI3.js";import"./Stack-Dz_8zDqt.js";import"./extendSxProp-eoSEBB6W.js";import"./getThemeProps-BvRhKV-H.js";import"./useTheme-CAAyb6Hf.js";import"./Box-O9YaUbMX.js";import"./AlertTitle-D8M-AeO7.js";import"./Typography-CmzLS_3x.js";import"./index-Cm_4ILsu.js";import"./useTheme-BQ11NupA.js";import"./ClickAwayListener-D_fSXknu.js";import"./getReactElementRef-BHEdfli1.js";import"./index-wGYHSRzj.js";import"./index-CZaeG_Zw.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-amcfaYIw.js";import"./Tooltip-BfyIksiy.js";import"./index-EjTZ2IHQ.js";import"./useControlled-CCY7r0wx.js";import"./Popper-YRgzSLhl.js";import"./Button-Dq-oY-14.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-u57ZdOBo.js";import"./QueryClientProvider-D1Z109eC.js";import"./Link-CZH2FWuL.js";import"./Collapse-CTNMUOeL.js";import"./_baseUniq-5JOGYzKc.js";import"./_Uint8Array-DVWjLwzM.js";import"./isArray-BtIqvJez.js";import"./_getTag-NbEUeoAA.js";import"./isEqual-DD744pPA.js";import"./merge-B8auVx-M.js";import"./_initCloneObject-BBfrylM9.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DJjZuyOW.js";import"./inputBaseClasses-C-wk8k42.js";import"./calculateFriendlyFileSize-DOc3ApXu.js";import"./CheckCircleTwoTone-BjPNSBnS.js";import"./InfoTwoTone-C06WRRzI.js";import"./useMutation-DdOlkJWg.js";import"./dayjs.min-CVRkaDCo.js";import"./chunk-AYJ5UCUI-CXz_weJf.js";import"./cloneDeep-cgBlVPgb.js";import"./Skeleton-CFdSDccd.js";import"./SkeletonButton-DQe85F23.js";import"./SkeletonInlineBlock-DJspSBMv.js";import"./SkeletonTable-BPVbgSvO.js";import"./times-DbYfL1oY.js";import"./toInteger-cjaqhma4.js";import"./isSymbol-BXNXa0aU.js";import"./SkeletonParagraph-B0GBzdM9.js";import"./uniqueId-CQ_AaOgz.js";import"./toString-Ct2O2woV.js";import"./CSSTransition-C8L1yl0v.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-_ugWQl1L.js";import"./Avatar-T9o2kn5O.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(q=(I=m.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};const cr=["Complete","Pending","Loading","NoActions","Locked"];export{r as Complete,e as Loading,m as Locked,i as NoActions,o as Pending,cr as __namedExportsOrder,pr as default};
