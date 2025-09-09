import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-Ma7Oe5XE.js";import{M as x}from"./MarkdownSynapse-Bwt4uhRc.js";import{d as s}from"./ToastMessage-BL2WN_TC.js";import{R as n,a as t}from"./RequirementItem-BivJnp59.js";import{P as O}from"./Paper-COBJrFNP.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-t2fDWYxy.js";import"./VerificationSubmission-16RBrwfH.js";import"./useFiles-iVsE9X0U.js";import"./SynapseConstants-BAmU4k0g.js";import"./OrientationBanner-B6xN5fSu.js";import"./index-B5Mtlgxp.js";import"./index-CLCXOIcb.js";import"./iframe-t2wJdwGi.js";import"./spreadSx-CwcO6WA9.js";import"./react-BjskdS-M.js";import"./FullWidthAlert-Dp0jOaAM.js";import"./Alert-CozJnD--.js";import"./createTheme-DWyGdLde.js";import"./DefaultPropsProvider-BVUiVDJJ.js";import"./useSlot-8Tg8yxZz.js";import"./useForkRef-C5Kxhg9M.js";import"./createSimplePaletteValueFilter-Bu6Rmtji.js";import"./createSvgIcon-BCKLSsq2.js";import"./Close-LtSBt6wu.js";import"./IconButton-BfYR4OmI.js";import"./useTimeout-HoSzxHZJ.js";import"./ButtonBase-DRt0AA36.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-fNOaoY57.js";import"./Stack-dOR7TZbk.js";import"./extendSxProp-uQt30Vh3.js";import"./getThemeProps-CevicY1j.js";import"./useTheme-KE0mEYul.js";import"./Box-B5UNecaX.js";import"./AlertTitle-C1Vcfseh.js";import"./Typography-Blc4WWJ7.js";import"./index-SzTH32SF.js";import"./useTheme-gTAEZSvX.js";import"./ClickAwayListener-0MTpQFe5.js";import"./getReactElementRef-DkYC1Yp6.js";import"./index-CMtfxCZX.js";import"./index-BEXi3mBJ.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-4kvSm4pD.js";import"./Tooltip-Byzt_xyJ.js";import"./index-CGXlNM3G.js";import"./useControlled-IASeHKHZ.js";import"./Popper-B3d9BW8L.js";import"./Button-wLcILYxh.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-B_EIkN_W.js";import"./useQuery-CM4VhkzW.js";import"./QueryClientProvider-B-3FWRUH.js";import"./Link-D_PJAlIU.js";import"./Collapse-3PYCLEiX.js";import"./_baseUniq-CZpoU5rd.js";import"./_Uint8Array-ChkAt42x.js";import"./isArray-DwZDKjpx.js";import"./_getTag-BPYr6ToM.js";import"./isEqual-CBEqrATC.js";import"./merge-D_lQC9Yt.js";import"./_initCloneObject-Cm5ry7Op.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CtBIba13.js";import"./inputBaseClasses-jpAddTzP.js";import"./calculateFriendlyFileSize-Ca97T7pk.js";import"./CheckCircleTwoTone-C7LPXUoS.js";import"./InfoTwoTone-CRl0Z4Gv.js";import"./useMutation-C3utT0DK.js";import"./dayjs.min-C_DSNH2k.js";import"./chunk-AYJ5UCUI-CZZfxgfF.js";import"./cloneDeep-KwGSFuPV.js";import"./Skeleton-CN3n86wp.js";import"./SkeletonButton-D8bUmaQm.js";import"./SkeletonInlineBlock-CtPRolRR.js";import"./SkeletonTable-BvxJFe4A.js";import"./times-DsswOknr.js";import"./toInteger-Y38Eiyfl.js";import"./isSymbol-D1Bo8OiP.js";import"./SkeletonParagraph-DhyOZp5y.js";import"./uniqueId-C3BccmJG.js";import"./toString-oLRccSQr.js";import"./CSSTransition-UMdUorsW.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-CD7B_SdN.js";import"./Avatar-DMVO2Kxj.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
