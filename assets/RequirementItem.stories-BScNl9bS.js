import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-D-tOs994.js";import{M as x}from"./MarkdownSynapse-DQEmBEcr.js";import{d as s}from"./ToastMessage-CfNOXtMl.js";import{R as n,a as t}from"./RequirementItem-B54eVInu.js";import{P as O}from"./Paper-CI2WrX6i.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BIJh-7D7.js";import"./VerificationSubmission-DHtRxRPZ.js";import"./useFiles-DfV3g7j3.js";import"./SynapseConstants-BeeeLEMb.js";import"./OrientationBanner-Do4jzaCq.js";import"./index-BFZGQ6OZ.js";import"./index-B6sCHtko.js";import"./iframe-Dyc1tvxa.js";import"./spreadSx-CwcO6WA9.js";import"./react-D7gwMTFz.js";import"./FullWidthAlert-Bewi29vo.js";import"./Alert-Cz1bM932.js";import"./createTheme-BWzdH0Tw.js";import"./DefaultPropsProvider-CCvcxJNd.js";import"./useSlot-Db71F0Ap.js";import"./useForkRef-DUqjROYa.js";import"./createSimplePaletteValueFilter-CMkrO5Gi.js";import"./createSvgIcon-C--GKjVa.js";import"./Close-oTdZr2QN.js";import"./IconButton-TfKmbk1q.js";import"./useTimeout-DUwBfTM5.js";import"./ButtonBase-CUnnAwa6.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CT39lesf.js";import"./Stack-CYHPltJP.js";import"./extendSxProp-D8MMv9HH.js";import"./getThemeProps-cCUYVmNA.js";import"./useTheme-DrGalr3E.js";import"./Box-B4DT_63e.js";import"./AlertTitle-C0GFUGtD.js";import"./Typography-CjHB-jF7.js";import"./index-COs8OngO.js";import"./useTheme-C3WRzWQr.js";import"./ClickAwayListener-9Td87dKe.js";import"./getReactElementRef-6O_b0WmK.js";import"./index-5LQf57Zc.js";import"./index-f60bxPXB.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DCOXsKMM.js";import"./Tooltip-CgudnGYK.js";import"./index-Bedvx39d.js";import"./useControlled-CkNRWmXj.js";import"./Popper-Cv8b6PxU.js";import"./Button-8h_8cD3R.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-DP1EOPFU.js";import"./useQuery-CO7ddoea.js";import"./QueryClientProvider-Bsm8Viqu.js";import"./Link-BqVElqqF.js";import"./Collapse-CpLblW_e.js";import"./_baseUniq-9gO7m8Ct.js";import"./_Uint8Array-CuRypYcz.js";import"./isArray-NVQNoNUM.js";import"./_getTag-BL5NJBfU.js";import"./isEqual-BogDr9UX.js";import"./merge-BOVQlJlI.js";import"./_initCloneObject-BD93w92L.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DGN7jsVH.js";import"./inputBaseClasses-LiHImfCr.js";import"./calculateFriendlyFileSize-EeAcNQrV.js";import"./CheckCircleTwoTone-B107xYF1.js";import"./InfoTwoTone-D2pybSip.js";import"./useMutation-DJj0HLy6.js";import"./dayjs.min-DDBsyKwq.js";import"./chunk-AYJ5UCUI-0eZLL8Z-.js";import"./cloneDeep-DopPwT4s.js";import"./Skeleton-Cifl5Ozt.js";import"./SkeletonButton-Hv7eHZtl.js";import"./SkeletonInlineBlock-Bb5_zCTg.js";import"./SkeletonTable-Dgt4HG_b.js";import"./times-DaOGDYas.js";import"./toInteger-17ZRF0UA.js";import"./isSymbol-BsM13KWl.js";import"./SkeletonParagraph-dwV57w-B.js";import"./uniqueId-BEcpnsI3.js";import"./toString-BsB0_4zq.js";import"./CSSTransition-ttl2O7Ed.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-Dc_5dyG5.js";import"./Avatar-CIM81wkb.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
