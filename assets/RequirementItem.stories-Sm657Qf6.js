import{j as a}from"./jsx-runtime-CFF0IO7V.js";import{m as P}from"./mockWiki-B6wTqEDI.js";import{M as x}from"./MarkdownSynapse-D1xjooFw.js";import{d as s}from"./ToastMessage-D7R_idXG.js";import{R as n,a as t}from"./RequirementItem-ByKiyBfq.js";import{P as O}from"./Paper-Cct9MIyy.js";import"./index-BJ7ALwL2.js";import"./iframe-CEp3iVjq.js";import"./mock_user_profile-CijvmO8r.js";import"./mock_file_handle-3wYKbysY.js";import"./VerificationSubmission-dxY1kvC5.js";import"./useFiles-DngzFh3e.js";import"./SynapseConstants-BdkZXYLP.js";import"./OrientationBanner-ew17TVg2.js";import"./index-DMrxKmOb.js";import"./spreadSx-CwcO6WA9.js";import"./react-BaKqR22l.js";import"./FullWidthAlert-BEiywVvi.js";import"./Alert-BlzsnL1m.js";import"./createTheme-CkS4QZvJ.js";import"./resolveComponentProps-zYoat5PD.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-I_DnR4si.js";import"./createSvgIcon-D5G5uwJ2.js";import"./DefaultPropsProvider-BOxd0Sbo.js";import"./Close-emeGZ8Oh.js";import"./IconButton-CwxeWoqe.js";import"./ButtonBase-CTg1nl5M.js";import"./useTimeout-Bk89QPaF.js";import"./TransitionGroupContext-CXLwUvot.js";import"./useIsFocusVisible-C8TPXvxP.js";import"./useEventCallback-DbmQPL7x.js";import"./Stack-DS40NBuF.js";import"./getThemeProps-57vBxk9k.js";import"./useTheme-DLOkYWdY.js";import"./Box-CcK0P2x-.js";import"./AlertTitle-Ch5AT8_u.js";import"./Typography-DGjlBq7i.js";import"./useTheme-GCly8xFo.js";import"./Grow-CJ587jf8.js";import"./index-BKgV-8-K.js";import"./utils-N-VcAcuA.js";import"./ClickAwayListener-DMb0I8qX.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-CuT-J_CD.js";import"./index-Cx7C3SmO.js";import"./useControlled-Bv_mN-Tz.js";import"./useId-GJMEvMLg.js";import"./Popper-CMhfExlC.js";import"./Button-ccYrDQpx.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-lE31obNl.js";import"./useQuery-C8kIrZqY.js";import"./utils-B07lb4xZ.js";import"./Link-C4VUduzM.js";import"./Collapse-D9ccO4UN.js";import"./isNil-Bhqo1LuL.js";import"./_Uint8Array-CwY4XA2G.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DeBm8QAe.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-CCkvd24j.js";import"./_getTag-O2YfvaR4.js";import"./tinycolor-Begke6kS.js";import"./Fade-BTPNk_kk.js";import"./Skeleton-BHIft4PN.js";import"./inputBaseClasses-LotBqPRG.js";import"./calculateFriendlyFileSize-N19TG0GH.js";import"./CheckCircleTwoTone-CKABL2ap.js";import"./InfoTwoTone-Dg1V0kNu.js";import"./mutation-QWAq6Bhb.js";import"./dayjs.min-pki8ZpMi.js";import"./chunk-AYJ5UCUI-Bf0CTJmh.js";import"./cloneDeep-Bs7Imfre.js";import"./_initCloneObject-DL14YJfm.js";import"./isEqual-B2v3mw20.js";import"./merge-BR1H3Nu7.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-CzjDsWD0.js";import"./SkeletonInlineBlock-Bx_4PQEz.js";import"./SkeletonTable-CquM1AQu.js";import"./times-Zrawxmz7.js";import"./toInteger-uTnNySid.js";import"./isSymbol-B6YS8LfR.js";import"./SkeletonParagraph-Bi8804pR.js";import"./uniqueId-mX5o-QpF.js";import"./toString-Cpz43v6z.js";import"./CSSTransition-6S8zmXRl.js";import"./ConditionalWrapper-DiA-rm50.js";import"./LockTwoTone-5XPYmQMw.js";import"./Avatar-BlB4mrb1.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
