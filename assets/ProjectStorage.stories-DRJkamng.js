import{g as s}from"./entityHandlers-B14rKxKw.js";import{y as C,g as L,b8 as d,B as k,M as r}from"./useFiles-DT6hcIL5.js";import"./VerificationSubmission-DHPhgAH7.js";import"./StringUtils-Bj0SG9ce.js";import{l as O}from"./index-BjUp8HPO.js";import{g as a}from"./userProfileHandlers-CLC0g9EV.js";import{P as N}from"./ProjectDataAvailability-Bvbfck3o.js";import"./index-CKMVAI2H.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-BHFG4giK.js";import"./mockTeam-C5REi7We.js";import"./SynapseConstants-Bn0ZfuPv.js";import"./OrientationBanner-Cej92lXT.js";import"./jsx-runtime-BRZS3XqV.js";import"./index-CocunraB.js";import"./iframe-DYt3ChXB.js";import"./index-BVWcfbtT.js";import"./spreadSx-CwcO6WA9.js";import"./react--z23vKgd.js";import"./FullWidthAlert-DenfhEqP.js";import"./Alert-BzQ3w-i2.js";import"./createTheme-CGRZ8lhJ.js";import"./resolveComponentProps-B7kow99E.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CwaqtBp7.js";import"./createSvgIcon-DrSrpjUE.js";import"./DefaultPropsProvider-DnSfdlzo.js";import"./Close-D48z0Brg.js";import"./IconButton-DnEI_ZVS.js";import"./ButtonBase-C8J7qx50.js";import"./useTimeout-DD2fy9Gt.js";import"./TransitionGroupContext-CzgTvDz_.js";import"./useIsFocusVisible-DrjNToTJ.js";import"./useEventCallback-V5MPUxUC.js";import"./Paper-B_miGDM5.js";import"./Stack-Cm7eDOYX.js";import"./getThemeProps-B5VTfPhr.js";import"./useTheme-Cmuf7htp.js";import"./Box-DAkKAoja.js";import"./AlertTitle-At8nRksm.js";import"./Typography-B5nvwako.js";import"./useTheme-BGfrpkOf.js";import"./Grow-DfpdITPV.js";import"./index-DEq8PKf6.js";import"./utils-CyklZQon.js";import"./ClickAwayListener-BNIu3AiL.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-Cd9QzmBG.js";import"./index-D0zZwq32.js";import"./useControlled-9lBX7zRL.js";import"./useId-DmpfYdh3.js";import"./Popper-DSp1FeIG.js";import"./Button-DawLv5b0.js";import"./uniqueId-D8dzI0-E.js";import"./toString-CzkbOv_6.js";import"./isObjectLike-Ch1jIX1x.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-BM3-ZUrL.js";import"./times-Ckf4vJoZ.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-CTBlp4Mg.js";import"./mockTableEntity-DOsgj7sm.js";import"./mockFileEntityACLVariants-CWbJpxmy.js";import"./fakerUtils-BeQ1zTY9.js";import"./mockFileEntity-DsmT5vDd.js";import"./mock_file_handle-C2NjfX48.js";import"./mockEntity-KwNaLpEQ.js";import"./mockSchema-CPPNKyOZ.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-_ws85yL5.js";import"./utils-Dz9cxE1U.js";import"./Link-CNEgPUo2.js";import"./Collapse-CZFNRH1o.js";import"./isNil-Cw5qWwbI.js";import"./_Uint8Array-BL-Me88q.js";import"./_baseIsEqual-XMcuzNdJ.js";import"./_getTag-GUncnsoi.js";import"./tinycolor-Begke6kS.js";import"./Fade-CoSzwWpP.js";import"./Skeleton-BUNW0s0t.js";import"./inputBaseClasses-DhLGEEvE.js";import"./calculateFriendlyFileSize-CDRjbozM.js";import"./CheckCircleTwoTone-DBPw0BfE.js";import"./InfoTwoTone-ciM6HWp8.js";import"./useMutation-meEtlnbI.js";import"./isEqual-e2b-ZfBh.js";import"./dayjs.min-BI6axHk4.js";import"./chunk-AYJ5UCUI-BzOTHJcD.js";import"./cloneDeep-G1XxhtGs.js";import"./_initCloneObject-DWORq14n.js";import"./merge-DhlXzTQF.js";import"./util-OzXSxVCB.js";import"./HelpPopover-Dk5naLw-.js";import"./MarkdownPopover-LpD-0DvZ.js";import"./LightTooltip-CB_tiKqc.js";import"./MarkdownSynapse-C2ytnp7r.js";import"./SkeletonButton-DjJHAWNS.js";import"./SkeletonInlineBlock-ChJK_2Be.js";import"./SkeletonTable-DsNtHb0H.js";import"./SkeletonParagraph-DFqX7BD3.js";import"./HelpOutlineTwoTone-CBfl5HEB.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],St={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    projectId: UNDER_LIMIT_PROJECT_ID,
    sx: {
      backgroundColor: '#375574'
    }
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getEntityHandlers(MOCK_REPO_ORIGIN), ...getProjectStorageHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...(_=(I=o.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var P,E,R;e.parameters={...e.parameters,docs:{...(P=e.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    projectId: OVER_LIMIT_PROJECT_ID,
    sx: {
      backgroundColor: '#375574'
    }
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getEntityHandlers(MOCK_REPO_ORIGIN), ...getProjectStorageHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...(R=(E=e.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var u,j,y;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    projectId: 'syn31415123'
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getEntityHandlers(MOCK_REPO_ORIGIN), ...getProjectStorageHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...(y=(j=i.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};const Lt=["ProjectDataUnderLimit","ProjectDataOverLimit","ProjectDataStorageNotSet"];export{e as ProjectDataOverLimit,i as ProjectDataStorageNotSet,o as ProjectDataUnderLimit,Lt as __namedExportsOrder,St as default};
