import{j as a}from"./jsx-runtime-CZ-P0Vjv.js";import{m as P}from"./mockWiki-CUQx1XWq.js";import{M as x}from"./MarkdownSynapse-Qsd3IkIH.js";import{d as s}from"./ToastMessage-BE1VPI_2.js";import{R as n,a as t}from"./RequirementItem-BtotFMjk.js";import{P as O}from"./Paper-BWbRaQ_u.js";import"./index-C4Fi1pAs.js";import"./iframe-Koc7BFGs.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-3Ozoui7p.js";import"./VerificationSubmission-CMrrYimb.js";import"./useFiles-vBmvy1ft.js";import"./SynapseConstants-dSGc59R9.js";import"./OrientationBanner-cB4es885.js";import"./index-Ckb68Z0P.js";import"./spreadSx-CwcO6WA9.js";import"./react-Dsci1Yfs.js";import"./FullWidthAlert-B28dz7bv.js";import"./Alert-DT0y7Huo.js";import"./createTheme-Pfm42aaM.js";import"./DefaultPropsProvider-OcgzDlh7.js";import"./useSlot-CpoW8DzU.js";import"./useForkRef-C-1ViZON.js";import"./createSimplePaletteValueFilter-DGPSZqjl.js";import"./createSvgIcon-DNx6f_Fe.js";import"./Close-BdQ8c5bL.js";import"./IconButton-DXhED_gi.js";import"./useTimeout-C9iOfSED.js";import"./ButtonBase-xVyG4oXo.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-pnY37-5c.js";import"./Stack-CyzEoByu.js";import"./extendSxProp-D9LHU2Zk.js";import"./getThemeProps-VTW_6ELV.js";import"./useTheme-n--CwuBn.js";import"./Box-n44yzzBn.js";import"./AlertTitle-aQu6mHLO.js";import"./Typography-DGvGyeZV.js";import"./index-DoTrjxQ-.js";import"./useTheme-Dz2vRP3-.js";import"./ClickAwayListener-BJe4E2J3.js";import"./getReactElementRef-CuHV4Mzs.js";import"./index-_lJiG1XM.js";import"./index-BdlcXU9Q.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Dgm9McM3.js";import"./Tooltip-BMVGmNhW.js";import"./index-CCKAUiEv.js";import"./useControlled-CCoPgmrJ.js";import"./Popper-pvLZE-n8.js";import"./Button-CDdf0vOZ.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bdqa-HwM.js";import"./useQuery-ijGxTtYu.js";import"./utils-C0Oop7FQ.js";import"./Link-B3vwTO54.js";import"./Collapse-B3Qrznse.js";import"./_baseUniq-CuOqpNrs.js";import"./_Uint8Array-BIpPbEf-.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-BC62RGFU.js";import"./isArray-Dxzbedgu.js";import"./_getTag-Bi5T7cOI.js";import"./isEqual-cSw6jV_8.js";import"./merge-CWKsu3Bx.js";import"./_initCloneObject-BOHxA6hK.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DCmrao4r.js";import"./inputBaseClasses-Rtxrzi46.js";import"./calculateFriendlyFileSize-CWxmrkXY.js";import"./CheckCircleTwoTone-Clqxfo1a.js";import"./InfoTwoTone-rEsoljy-.js";import"./useMutation-bKFnuzpB.js";import"./dayjs.min-CC1L6vxl.js";import"./chunk-AYJ5UCUI-ueBj9L5G.js";import"./cloneDeep-Bk1WlZC-.js";import"./Skeleton-DvLxauL3.js";import"./SkeletonButton-VkV9Aosk.js";import"./SkeletonInlineBlock-Caf4fUDa.js";import"./SkeletonTable-BttXTOdT.js";import"./times-hgeEduoY.js";import"./toInteger-BLIYsTXd.js";import"./isSymbol-VLvA0JPn.js";import"./SkeletonParagraph-CqrXmR_U.js";import"./uniqueId-D3hdr6sf.js";import"./toString-DzBHT5wX.js";import"./CSSTransition-CcUy1pdc.js";import"./ConditionalWrapper-BbDJS2mx.js";import"./LockTwoTone-66NOPh-E.js";import"./Avatar-njNBo-Bx.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
