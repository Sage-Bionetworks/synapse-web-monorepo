import{j as a}from"./jsx-runtime-tYB6KGdN.js";import{m as P}from"./mockWiki-CZdZHQnO.js";import{M as x}from"./MarkdownSynapse-Crt3bvwR.js";import{d as s}from"./ToastMessage-DE62ICiq.js";import{R as n,a as t}from"./RequirementItem-ufNNlVnL.js";import{P as O}from"./Paper-CUJNJhUR.js";import"./index-Bkzzsk0B.js";import"./iframe-PLARaQxx.js";import"./mock_user_profile-CijvmO8r.js";import"./mock_file_handle-Ct1MSfYs.js";import"./VerificationSubmission-B0kBNeMy.js";import"./useFiles-DvmSZ7jv.js";import"./SynapseConstants-C6W0HfbC.js";import"./OrientationBanner-DtbTbOX1.js";import"./index-CoNRd3XO.js";import"./spreadSx-CwcO6WA9.js";import"./react-C-ewhzLl.js";import"./FullWidthAlert-DhQrdjoW.js";import"./Alert-B1CSW1mB.js";import"./createTheme-ow6PpJ59.js";import"./resolveComponentProps-DtrKlPN5.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-9Xc3crMX.js";import"./createSvgIcon-BMm4XUen.js";import"./DefaultPropsProvider-keNhgGSS.js";import"./Close-C7oos599.js";import"./IconButton-NVoucUGK.js";import"./ButtonBase-DUe-2sLH.js";import"./useTimeout-D_xDPDG6.js";import"./TransitionGroupContext-BI5ozUmQ.js";import"./useIsFocusVisible-BmX07aem.js";import"./useEventCallback-n4BBqXCp.js";import"./Stack-yhBWrz08.js";import"./getThemeProps-DKG83qIe.js";import"./useTheme-BjnpOWHg.js";import"./Box-BxR0r0Bu.js";import"./AlertTitle-CVG6At3E.js";import"./Typography-BZGJY9FA.js";import"./useTheme-DhFu0EUb.js";import"./Grow-CKdiTWKJ.js";import"./index-s6VlmbGT.js";import"./utils-B54jEU3b.js";import"./ClickAwayListener-ComLkdB-.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-5RP58HIB.js";import"./index-C1cLcL-0.js";import"./useControlled-DJeY4ee5.js";import"./useId-b-gK5Z5A.js";import"./Popper-DiS3rm17.js";import"./Button-lu1VZGqc.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-CzgJJW-6.js";import"./useQuery-CdcWoVBs.js";import"./utils-Chx9P0H6.js";import"./Link-DqPKtuF6.js";import"./Collapse-BvuOKxET.js";import"./isNil-DJG7UM9y.js";import"./_Uint8Array-BtQ75CAl.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-BOpRD9h1.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-DVVLfzkX.js";import"./_getTag-9nw34TEi.js";import"./tinycolor-Begke6kS.js";import"./Fade-DXThxLhw.js";import"./Skeleton-DDpLtQDR.js";import"./inputBaseClasses-HcbgCmhJ.js";import"./calculateFriendlyFileSize-DM-ZgnS1.js";import"./CheckCircleTwoTone-BvcCTkha.js";import"./InfoTwoTone-XqK14u6n.js";import"./mutation-DSCbETsB.js";import"./dayjs.min-B8Vi_I8g.js";import"./chunk-AYJ5UCUI-D3hJj5mX.js";import"./cloneDeep-DTYlG1uc.js";import"./_initCloneObject-BIJYbTMn.js";import"./isEqual-Cw7YgxfX.js";import"./merge-BufaBT0Y.js";import"./identity-DKeuBCMA.js";import"./useMutation-BbbbQ8LY.js";import"./SkeletonButton-BsCpqfA-.js";import"./SkeletonInlineBlock-DpwxUn6v.js";import"./SkeletonTable-BggKxszJ.js";import"./times-BoBDNadF.js";import"./toInteger-BootuV1Z.js";import"./isSymbol-DEfeboWZ.js";import"./SkeletonParagraph-BnJYm6g2.js";import"./uniqueId-DPTTp-CC.js";import"./toString-BGYj9T_z.js";import"./CSSTransition-Bmpe0wpw.js";import"./ConditionalWrapper-Bc4q0B8W.js";import"./LockTwoTone-DJK98G6S.js";import"./Avatar-Dh7or4m4.js";const ur={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
