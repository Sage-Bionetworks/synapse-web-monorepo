import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-BaD52Rjr.js";import{d as s}from"./ToastMessage--TnH3sXY.js";import{R as n,a as t}from"./RequirementItem-BpW6oKfi.js";import{P as O}from"./Paper-zc-lrNFo.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-BRC0e057.js";import"./SynapseConstants-CfvgkpB4.js";import"./OrientationBanner-BWVrubWR.js";import"./index-D_cRBOD6.js";import"./index-D48SXRoA.js";import"./iframe-CGMSSV3a.js";import"./spreadSx-CwcO6WA9.js";import"./react-D986rM5G.js";import"./FullWidthAlert-B5UKJIYG.js";import"./Alert-bz4bj5M3.js";import"./createTheme-CwyfHowY.js";import"./DefaultPropsProvider-DPRhv_AP.js";import"./useSlot-C8xh2t7a.js";import"./useForkRef-ISS65Dbm.js";import"./createSimplePaletteValueFilter-D-ylNyMT.js";import"./createSvgIcon-BdhbaoYx.js";import"./Close-BDxJ-CL7.js";import"./IconButton-CNghFUuS.js";import"./useTimeout-DCletuKH.js";import"./ButtonBase-BBTsQTx6.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CBtKmTpr.js";import"./Stack-BMkmBXpw.js";import"./extendSxProp-B8hz4pXV.js";import"./getThemeProps-DdHk9pvF.js";import"./useTheme-CYR3sgEx.js";import"./Box-BPM5q58Y.js";import"./AlertTitle-BCr-iYO8.js";import"./Typography-CWBVLAyW.js";import"./index-MSg-8E6y.js";import"./useTheme-BGjL3p3E.js";import"./ClickAwayListener-Bp9Ns1it.js";import"./getReactElementRef-WUekJjzf.js";import"./index-zG4oEPGU.js";import"./index-BJiYowkb.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Bt4rr9VO.js";import"./Tooltip-CFQP7Dzi.js";import"./index-DfdAMDFO.js";import"./useControlled-DWNCs13l.js";import"./Popper-Do8nfD9j.js";import"./Button-DixPWBu_.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-BFYapwyn.js";import"./QueryClientProvider-B024YWxc.js";import"./Link-DB1ue7Mo.js";import"./Collapse-DtLKmRWa.js";import"./_baseUniq-NLHVw4Us.js";import"./_Uint8Array-DKRij8Pm.js";import"./isArray-CQWoh040.js";import"./_getTag-B_fA-_8S.js";import"./isEqual-DYS1ityr.js";import"./merge-BAPM3reP.js";import"./_initCloneObject-DlkwyIPz.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DAchz5lR.js";import"./inputBaseClasses-De2T74iN.js";import"./calculateFriendlyFileSize-CZVs-iSb.js";import"./CheckCircleTwoTone-CmaQzaow.js";import"./InfoTwoTone-BJLTUP-0.js";import"./useMutation-B3cc0E9Q.js";import"./dayjs.min-DhyUtXUb.js";import"./chunk-AYJ5UCUI-B-7RGnHT.js";import"./cloneDeep-BixVh9mJ.js";import"./Skeleton-BgVXRcxp.js";import"./SkeletonButton-CB9lIvZ0.js";import"./SkeletonInlineBlock-C46L86dm.js";import"./SkeletonTable-CPL8E6uA.js";import"./times-TpSMvO50.js";import"./toInteger-CAEUe5q1.js";import"./isSymbol-DHrtueJL.js";import"./SkeletonParagraph-CMz_T7vJ.js";import"./uniqueId-6OFsmHMl.js";import"./toString-CyzfARIG.js";import"./CSSTransition-BAnX6ndO.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-KY3XZMHI.js";import"./Avatar-CT6XCVfy.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
