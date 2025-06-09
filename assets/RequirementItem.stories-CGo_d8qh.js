import{j as a}from"./jsx-runtime-CnC__bFg.js";import{m as P}from"./mockWiki-DiBhlaV-.js";import{M as x}from"./MarkdownSynapse-BAznWAlp.js";import{d as s}from"./ToastMessage-DIjxh__d.js";import{R as n,a as t}from"./RequirementItem-B9kdeNQ5.js";import{P as O}from"./Paper-CZ6IEQ09.js";import"./index-BsJQi6Dk.js";import"./iframe-CLOMuBS1.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-C2NjfX48.js";import"./VerificationSubmission-DHPhgAH7.js";import"./useFiles-D6D6aavL.js";import"./SynapseConstants-CIJTL8Hh.js";import"./OrientationBanner-CiRzQfQO.js";import"./index-IjppgAFK.js";import"./spreadSx-CwcO6WA9.js";import"./react-Wpnlki_N.js";import"./FullWidthAlert-BgsUTCUD.js";import"./Alert-lc64fEld.js";import"./createTheme-DVbiGJ67.js";import"./resolveComponentProps-Bv7pQW1z.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-BJRw6fTR.js";import"./createSvgIcon-DTKv9Rlb.js";import"./DefaultPropsProvider-yqsgBtMO.js";import"./Close-DCccWvSR.js";import"./IconButton-qFeqvS30.js";import"./ButtonBase-DlZPLEXy.js";import"./useTimeout-BtTY_1Hi.js";import"./TransitionGroupContext-yGFzkBTt.js";import"./useIsFocusVisible-D3oCvNA0.js";import"./useEventCallback-Bh5fpomL.js";import"./Stack-DW2g_KTM.js";import"./getThemeProps-CQ-evv0A.js";import"./useTheme-SwEfz4tC.js";import"./Box-Jd0TGo98.js";import"./AlertTitle-DXQWSGGX.js";import"./Typography-BcmFSKlE.js";import"./useTheme-D0sMZgaF.js";import"./Grow-BADnlCPX.js";import"./index-CL9pY3NP.js";import"./utils-5GDObXQ_.js";import"./ClickAwayListener-Cd-S1Q1u.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DaXBtCB8.js";import"./index-cvImvpDl.js";import"./useControlled-CCxoHuWH.js";import"./useId-CFCmZZFw.js";import"./Popper-CD-JqEPm.js";import"./Button-CKoHvT6d.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-Bj0SG9ce.js";import"./useQuery-CF-CfnG8.js";import"./utils-Bq0_XUyv.js";import"./Link-_TBTXcDx.js";import"./Collapse-B7cdoG5y.js";import"./isNil-CTodBd8q.js";import"./_Uint8Array-BSaYQZWv.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DmdZbYeo.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-CsLca8bb.js";import"./_getTag-m1EiPaOw.js";import"./tinycolor-Begke6kS.js";import"./Fade-DcXqhDgy.js";import"./Skeleton-BNofG0Ec.js";import"./inputBaseClasses-CFue45jM.js";import"./calculateFriendlyFileSize-Bt8qXmv0.js";import"./CheckCircleTwoTone-jeuH2qq1.js";import"./InfoTwoTone-CeQqu_rR.js";import"./useMutation-3NTG8Lcv.js";import"./isEqual-C1O3GEEt.js";import"./dayjs.min-CnuSBCzJ.js";import"./chunk-AYJ5UCUI-pNtXMNcj.js";import"./cloneDeep-C2q4fZxO.js";import"./_initCloneObject-Csqg8Vlr.js";import"./merge-LpyMrc_U.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-C-eCYWGB.js";import"./SkeletonInlineBlock-08qroX_M.js";import"./SkeletonTable-DOJaXP3-.js";import"./times-a9NTxe3E.js";import"./toInteger-Bdm7bKOc.js";import"./isSymbol-BlFNIlma.js";import"./SkeletonParagraph-Dv9lb0yO.js";import"./uniqueId-BFvx1CNb.js";import"./toString-DFORIYL8.js";import"./CSSTransition-CWlmotGT.js";import"./ConditionalWrapper-DOYugMhs.js";import"./LockTwoTone-CUeNCDGi.js";import"./Avatar-C2vg5f_L.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
