import{j as a}from"./jsx-runtime-CeNNE178.js";import{m as P}from"./mockWiki-DiBhlaV-.js";import{M as x}from"./MarkdownSynapse-CioQYKdy.js";import{d as s}from"./ToastMessage-DMeh0TBt.js";import{R as n,a as t}from"./RequirementItem-rOC_P3yP.js";import{P as O}from"./Paper-DPHdlQ6w.js";import"./index-Bt2HldYQ.js";import"./iframe-BLXaVYvq.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-C2NjfX48.js";import"./VerificationSubmission-DHPhgAH7.js";import"./useFiles-CYCG5By9.js";import"./SynapseConstants-CmfpXss_.js";import"./OrientationBanner--O3J5zHJ.js";import"./index-CfmE6CoI.js";import"./spreadSx-CwcO6WA9.js";import"./react-BMavKsjq.js";import"./FullWidthAlert-DyeuC1vJ.js";import"./Alert-B7nkz1ia.js";import"./createTheme-CKb99kjG.js";import"./resolveComponentProps-CMIWR73s.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-uSm8hWtq.js";import"./createSvgIcon-DLoGZJ7f.js";import"./DefaultPropsProvider-CZ1ixMCP.js";import"./Close-BJ7cjjFc.js";import"./IconButton-Bk_PmWuO.js";import"./ButtonBase-DGK36sqj.js";import"./useTimeout-CmIrVyao.js";import"./TransitionGroupContext-Da8-nKIU.js";import"./useIsFocusVisible-C5zF6H-R.js";import"./useEventCallback-CS_P56Cl.js";import"./Stack-B2UZSqeE.js";import"./getThemeProps-MWZ41NY4.js";import"./useTheme-D2L9K1WU.js";import"./Box-Bhf9Kz_5.js";import"./AlertTitle-CMAceEnv.js";import"./Typography-CFXxu8IN.js";import"./useTheme-Dl4JanPa.js";import"./Grow-C5U1AU2n.js";import"./index-BHhAFVUK.js";import"./utils-DshReT03.js";import"./ClickAwayListener-CA8RUKC1.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BmtwnYm2.js";import"./index-DNfyRJhZ.js";import"./useControlled-C5JTjFUD.js";import"./useId-QtHUq3oX.js";import"./Popper-BoV6apG6.js";import"./Button-WgFG7Kv7.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-Bj0SG9ce.js";import"./useQuery-ozFMDHTC.js";import"./utils-C7h47-8F.js";import"./Link-wPFjZble.js";import"./Collapse-BG7m57yp.js";import"./isNil-BnN6qy0c.js";import"./_Uint8Array-BlRziyVS.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DvBEekQS.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-DUAR2DVI.js";import"./_getTag-BStwP3vH.js";import"./tinycolor-Begke6kS.js";import"./Fade-TT1SN1XX.js";import"./Skeleton-1xe7MdCp.js";import"./inputBaseClasses-Kd2PBwef.js";import"./calculateFriendlyFileSize-Dy-aVZfM.js";import"./CheckCircleTwoTone-DIkLEp5G.js";import"./InfoTwoTone-xvjf5lJX.js";import"./useMutation-Cr2LGzTW.js";import"./isEqual-BjlCgmbf.js";import"./dayjs.min-CUcU5xVS.js";import"./chunk-AYJ5UCUI-0PQAposk.js";import"./cloneDeep-xAnl9iNy.js";import"./_initCloneObject-B-889FSA.js";import"./merge-BnQpxRnb.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-0L9NaRI_.js";import"./SkeletonInlineBlock-DzYfnxTK.js";import"./SkeletonTable-BiktFgWe.js";import"./times-CvknjA7f.js";import"./toInteger-Yo1R2fxd.js";import"./isSymbol-DIHlfHOR.js";import"./SkeletonParagraph-cjwMM4Yj.js";import"./uniqueId-B7qRQUTU.js";import"./toString-C1edKCyB.js";import"./CSSTransition-T50P8S6X.js";import"./ConditionalWrapper-YBKFCOfI.js";import"./LockTwoTone-8qYtdc3l.js";import"./Avatar-DuUyzNSv.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
