import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-_B7zxlyi.js";import{d as s}from"./ToastMessage-BR0UBPgB.js";import{R as n,a as t}from"./RequirementItem-CmBHqYJZ.js";import{P as O}from"./Paper-CgmbLxaC.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-C5IkgHKR.js";import"./SynapseConstants-BZ1xM3T_.js";import"./OrientationBanner-CaftPmJ0.js";import"./index-Dc7oXtx5.js";import"./index-BvwUSpoE.js";import"./iframe-CSh-yyb9.js";import"./spreadSx-CwcO6WA9.js";import"./react-CnOFtkUB.js";import"./FullWidthAlert-rH7PBXfB.js";import"./Alert-BNsJ0XmI.js";import"./createTheme-CLEJyU4o.js";import"./DefaultPropsProvider-CQ9vr5Fg.js";import"./useSlot-CPjqoygj.js";import"./useForkRef-C4hZLQ5F.js";import"./createSimplePaletteValueFilter-BgsLGErn.js";import"./createSvgIcon-cTCJaS7a.js";import"./Close-B26ASiW2.js";import"./IconButton-C1az1_o5.js";import"./useTimeout-D2Typ0WN.js";import"./ButtonBase-CAx0EV6B.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-13Ka8rlw.js";import"./Stack-x99x_t8V.js";import"./useThemeProps-DJ1xyvk8.js";import"./getThemeProps-HpT_6znR.js";import"./useTheme-z89Ynh4-.js";import"./extendSxProp-BJJBLbQS.js";import"./Box-Dehh3oxZ.js";import"./AlertTitle-IP3qXvli.js";import"./Typography-BE4rHoNc.js";import"./index-IXTkT_FC.js";import"./useTheme-DPLPxQnc.js";import"./ClickAwayListener-H_84-Aw-.js";import"./getReactElementRef-F8_OyX7G.js";import"./index-DMH_OaqC.js";import"./index-Cd_E_qr9.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-D4OCuCHp.js";import"./Tooltip-DyZrSW_o.js";import"./index-B01-020F.js";import"./useControlled-BgGRQ0g4.js";import"./Popper-BVenD2n_.js";import"./Button-BPLc_V13.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-CLTeTbBo.js";import"./QueryClientProvider--YwERgDS.js";import"./Link-DlDLrxWt.js";import"./Collapse-CD-W84BO.js";import"./_baseUniq-DbXnkPVl.js";import"./_Uint8Array-CADqMcwt.js";import"./isArray-D8ZdJY-6.js";import"./_getTag-CirUuiqi.js";import"./isEqual-DlYHZiLm.js";import"./noop-DX6rZLP_.js";import"./merge-D-Dam4qi.js";import"./_initCloneObject-CJz6qKry.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Cw-PXPOF.js";import"./inputBaseClasses-DPwHkifs.js";import"./calculateFriendlyFileSize-BfZPBZKW.js";import"./CheckCircleTwoTone-C44u5emq.js";import"./InfoTwoTone-mT_LStKZ.js";import"./useMutation-BQl0KsC5.js";import"./dayjs.min-DxypZ_oT.js";import"./chunk-AYJ5UCUI-3iV-Oige.js";import"./cloneDeep-GqePjE_a.js";import"./Skeleton-CKT5zskH.js";import"./SkeletonButton-D5PtZFHX.js";import"./SkeletonInlineBlock-DqJUOdnP.js";import"./SkeletonTable-Bq5Dz7Xr.js";import"./times-ITYPdN0b.js";import"./toInteger-BAtd_Kq7.js";import"./isSymbol-KbPNZ9sy.js";import"./SkeletonParagraph-Bou7kSp7.js";import"./uniqueId-D3m-L9WO.js";import"./toString-BwgvZH57.js";import"./CSSTransition-D1f8pH2G.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-KYyzgmh5.js";import"./Avatar-CdDakrfF.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
