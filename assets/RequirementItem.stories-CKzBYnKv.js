import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-Bib6IXmg.js";import{d as s}from"./ToastMessage-Bn46SLsJ.js";import{R as n,a as t}from"./RequirementItem-CHaT_tvG.js";import{P as O}from"./Paper-DmK_ReCG.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-C1SZYsHJ.js";import"./SynapseConstants-DOcxbSXv.js";import"./OrientationBanner-0l92o_hq.js";import"./index-8eP7pCJv.js";import"./index-C5ISxCze.js";import"./iframe-CJXX_HEp.js";import"./spreadSx-CwcO6WA9.js";import"./react-n319Pynr.js";import"./FullWidthAlert-BXosfpkO.js";import"./Alert-y_xDb_9T.js";import"./createTheme-DnXMRcPS.js";import"./DefaultPropsProvider-DJHi1R08.js";import"./useSlot-CBkWMAH8.js";import"./useForkRef-D85PsNQK.js";import"./createSimplePaletteValueFilter-Cq1nldBu.js";import"./createSvgIcon-J6P9XFai.js";import"./Close-CNO_2RgE.js";import"./IconButton-kB0cRMKx.js";import"./useTimeout-BGwHbdIe.js";import"./ButtonBase-Bzdpe_ef.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-sTdI8cEw.js";import"./Stack-BYEEnAvb.js";import"./extendSxProp-D949apCT.js";import"./getThemeProps-Dc2St_bQ.js";import"./useTheme-CyqjyiOc.js";import"./Box-8PZ_haH7.js";import"./AlertTitle-uWLQX9Lu.js";import"./Typography-CFGar2kE.js";import"./index-5S5GhFFj.js";import"./useTheme-BFSnT1oV.js";import"./ClickAwayListener-BCNxBpX7.js";import"./getReactElementRef-DJWfZNic.js";import"./index-C6vkH45X.js";import"./index-1VbLkhR3.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BLYI2CiH.js";import"./Tooltip-bMDGEQYu.js";import"./index-D_dMnI5A.js";import"./useControlled-D1RUa1Rp.js";import"./Popper-781Z81b1.js";import"./Button-DoHmcmtx.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-DlZe90UE.js";import"./QueryClientProvider-CjOas7HF.js";import"./Link-Dr6FC8Lc.js";import"./Collapse-Duiz4XTK.js";import"./_baseUniq-Ctwgay9y.js";import"./_Uint8Array-CdQldqai.js";import"./isArray-BXJYUcpZ.js";import"./_getTag-CK2vplJH.js";import"./isEqual-6ETdbas7.js";import"./merge-Dyqx4TiO.js";import"./_initCloneObject-BO7pqg35.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BgHOn6RZ.js";import"./inputBaseClasses-DvXW_vKY.js";import"./calculateFriendlyFileSize-CspbCWFd.js";import"./CheckCircleTwoTone-Dp6-ZoT0.js";import"./InfoTwoTone-C6cakw3O.js";import"./useMutation-CCxl44YJ.js";import"./dayjs.min-BoYnap0S.js";import"./chunk-AYJ5UCUI-Ds2vnOw0.js";import"./cloneDeep-DP6v8uS5.js";import"./Skeleton-eWeIv0U1.js";import"./SkeletonButton-fCcS0MhS.js";import"./SkeletonInlineBlock-DBlayJP2.js";import"./SkeletonTable-vNoKyTlx.js";import"./times-CLnv0wkJ.js";import"./toInteger-CGR8IcKS.js";import"./isSymbol-YSh6fsmQ.js";import"./SkeletonParagraph-BQIl6WJD.js";import"./uniqueId-BvO1NYuN.js";import"./toString-Ne-D-JJ1.js";import"./CSSTransition-C9I0vPSk.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-b0Mob0Kx.js";import"./Avatar-Cxrp61pC.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
