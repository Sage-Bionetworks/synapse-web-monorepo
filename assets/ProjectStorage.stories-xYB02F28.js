import{g as s}from"./entityHandlers-Djezb2P4.js";import{x as C,g as L,b9 as d,B as k,M as r}from"./useFiles-CbMpvGhW.js";import"./VerificationSubmission-dxY1kvC5.js";import"./StringUtils-Df7AZImX.js";import{l as O}from"./index-C6DPBJMm.js";import{g as a}from"./userProfileHandlers-C-vQ_7sH.js";import{P as N}from"./ProjectDataAvailability-C8BRe_9y.js";import"./index-Dro2OcRH.js";import"./mock_user_profile-CijvmO8r.js";import"./mockProject-CZLEXUlF.js";import"./mockTeam-kRFo7KR3.js";import"./SynapseConstants-C-MequxA.js";import"./OrientationBanner-BCOcpvAV.js";import"./jsx-runtime-BPwvgLas.js";import"./index-CBDLWlOB.js";import"./iframe-BOhnkrTR.js";import"./index-AJ8qoPp1.js";import"./spreadSx-CwcO6WA9.js";import"./react-iQ_QJFeH.js";import"./FullWidthAlert-C4NXiFAr.js";import"./Alert-xrq_SMEg.js";import"./createTheme-CqhKahyM.js";import"./resolveComponentProps-CbacDgM7.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CYG44Oi1.js";import"./createSvgIcon-CngalfwQ.js";import"./DefaultPropsProvider-CK3fJzAT.js";import"./Close-DIxv3BmU.js";import"./IconButton-D355AQnf.js";import"./ButtonBase-DkvFo0rp.js";import"./useTimeout-D29s38n5.js";import"./TransitionGroupContext-vIwZ2ZdW.js";import"./useIsFocusVisible-CRwyDx7g.js";import"./useEventCallback-BEeQPLsK.js";import"./Paper-keIiwirC.js";import"./Stack-BgNqp8gK.js";import"./getThemeProps-BbDbNfTq.js";import"./useTheme-CHrnUnqX.js";import"./Box-DZ1qA8WV.js";import"./AlertTitle-CEogbmjt.js";import"./Typography-CEe9erp9.js";import"./useTheme-P165y_LK.js";import"./Grow-CJVUX4yR.js";import"./index-BwhZA35d.js";import"./utils-BPpJDtRg.js";import"./ClickAwayListener-P6OmxxdK.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-_plCLI4q.js";import"./index-B9wPZdQL.js";import"./useControlled-BK1AIYs5.js";import"./useId-CLSRERuv.js";import"./Popper-BvhU2AWB.js";import"./Button-Cn6JHKgz.js";import"./uniqueId-BPJn473d.js";import"./toString-B6Yu26DP.js";import"./isObjectLike-qFFT-3MK.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-BwXYObLQ.js";import"./times-CJqkd24n.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-DmMobODX.js";import"./mockTableEntity-ClrE1mKV.js";import"./mockFileEntityACLVariants-Be7Cg6pf.js";import"./fakerUtils-Bipy4cdT.js";import"./mockFileEntity-BfDVYvSm.js";import"./mock_file_handle-3wYKbysY.js";import"./mockEntity-BAmn3goQ.js";import"./mockSchema-CxAUxMjn.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-DZi11ge7.js";import"./utils-BqDa975t.js";import"./Link-Ccuxh7N2.js";import"./Collapse-xlH7IseN.js";import"./isNil-Bv7-3_hG.js";import"./_Uint8Array-BDCBH0-0.js";import"./_baseIsEqual-D3_Tdhx8.js";import"./_getTag-KyP6iQiD.js";import"./tinycolor-Begke6kS.js";import"./Fade-CY98KLjb.js";import"./Skeleton-iR_TlL_5.js";import"./inputBaseClasses-DlYO5ZlR.js";import"./calculateFriendlyFileSize-Chfxh2O6.js";import"./CheckCircleTwoTone-Bw2Wk5oI.js";import"./InfoTwoTone-Afibcha7.js";import"./mutation-BBLhG9HE.js";import"./dayjs.min-DYOI9g68.js";import"./chunk-AYJ5UCUI-D4D6uZ8Q.js";import"./cloneDeep-BLP2jVxP.js";import"./_initCloneObject-eaMKh-yS.js";import"./isEqual-BvUIKxyq.js";import"./merge-BbxdCm3T.js";import"./util-CiZGs5gx.js";import"./HelpPopover-CNYffTRv.js";import"./MarkdownPopover-Cizeoctj.js";import"./LightTooltip-CoggAz3C.js";import"./MarkdownSynapse-MHLPs3tU.js";import"./SkeletonButton-CfDxG5C1.js";import"./SkeletonInlineBlock-_DewcDuh.js";import"./SkeletonTable-CCbMvuDe.js";import"./SkeletonParagraph-BjwZeaHW.js";import"./HelpOutlineTwoTone-63OLYDHD.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],St={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
