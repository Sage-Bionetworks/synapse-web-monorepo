import{g as s}from"./entityHandlers-Dt9TvD1K.js";import{y as C,g as L,b8 as d,B as k,M as r}from"./useFiles-D-tEf01x.js";import"./VerificationSubmission-DHPhgAH7.js";import"./StringUtils-Bj0SG9ce.js";import{l as O}from"./index-DfcU1Z6Q.js";import{g as a}from"./userProfileHandlers-DYtgR6-u.js";import{P as N}from"./ProjectDataAvailability-BBmgpsrr.js";import"./index-BMSd9Jwx.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-Sf9IpXXS.js";import"./mockTeam-DCdj6i_V.js";import"./SynapseConstants-C_bGYTo-.js";import"./OrientationBanner-Zj6GYtpt.js";import"./jsx-runtime-C5NxHwQJ.js";import"./index-BUyK93rt.js";import"./iframe-DoZ_YKgg.js";import"./index-BVwZc75m.js";import"./spreadSx-CwcO6WA9.js";import"./react-CACuwhgC.js";import"./FullWidthAlert-BLDoSU5L.js";import"./Alert-5tSKDGIe.js";import"./createTheme-BstmEjP7.js";import"./resolveComponentProps-DH6tbKzS.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-Smo6uH9y.js";import"./createSvgIcon-D1O3_eeJ.js";import"./DefaultPropsProvider-hOkQc_mp.js";import"./Close-Dt1xiFQr.js";import"./IconButton-BqTcpupZ.js";import"./ButtonBase-DctD_-B6.js";import"./useTimeout-BNReSQPt.js";import"./TransitionGroupContext-7a61cq35.js";import"./useIsFocusVisible-Dstz45Fm.js";import"./useEventCallback-BLz-FZAQ.js";import"./Paper-EWl2C2Zt.js";import"./Stack-_cgazAZA.js";import"./getThemeProps-C7PoPghj.js";import"./useTheme-DK5UNgIg.js";import"./Box-C7L6jE12.js";import"./AlertTitle-CcHfDa-c.js";import"./Typography-DIK0enh5.js";import"./useTheme--0iZh6DT.js";import"./Grow-zr8OcKR_.js";import"./index-CC0zv1VF.js";import"./utils-Br22oxv3.js";import"./ClickAwayListener-D7jkdGQl.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-AnolE66l.js";import"./index-BqVfUhDp.js";import"./useControlled-D2kQt8S5.js";import"./useId-v1fSL2EP.js";import"./Popper-BDuOEhJZ.js";import"./Button-DTYZ_D3f.js";import"./uniqueId-C16617v_.js";import"./toString-CBq9Xfpt.js";import"./isObjectLike-DDkRrBm5.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-BuSMiGT1.js";import"./times-Ct11bBHV.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-fyBvN-v7.js";import"./mockTableEntity-CcsOS_xS.js";import"./mockFileEntityACLVariants-7tSt8jfg.js";import"./fakerUtils-umcWT4Kc.js";import"./mockFileEntity-BGqN4CI1.js";import"./mock_file_handle-C2NjfX48.js";import"./mockEntity-bISPvJ9h.js";import"./mockSchema-COBxdwiP.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-B6tctlGJ.js";import"./utils-7QzzGIiA.js";import"./Link-DXfrR-Pc.js";import"./Collapse-DPQM8v_6.js";import"./isNil-BApmFmY-.js";import"./_Uint8Array-wiAQVV7X.js";import"./_baseIsEqual-4d5Gfa3E.js";import"./_getTag-DLjbrX0g.js";import"./tinycolor-Begke6kS.js";import"./Fade-BqacDeSR.js";import"./Skeleton-Dw41BVrt.js";import"./inputBaseClasses-CKfM9y8S.js";import"./calculateFriendlyFileSize-CPwr_L4J.js";import"./CheckCircleTwoTone-B7PYorgw.js";import"./InfoTwoTone-CeEpykZw.js";import"./useMutation-BCa3Utcu.js";import"./isEqual-Wn9P4mtf.js";import"./dayjs.min-BLC6IB2g.js";import"./chunk-AYJ5UCUI-DNC6mvIs.js";import"./cloneDeep-Da0gCOXW.js";import"./_initCloneObject-DiKtCs9l.js";import"./merge-BLrCfc5g.js";import"./util-Ch8DlAra.js";import"./HelpPopover-CP2EiHnM.js";import"./MarkdownPopover-kOz3s_-E.js";import"./LightTooltip-jtqdxQLn.js";import"./MarkdownSynapse-DufiYEt9.js";import"./SkeletonButton-DHwyCCnM.js";import"./SkeletonInlineBlock-PxE0qGs3.js";import"./SkeletonTable-BOWzMBTc.js";import"./SkeletonParagraph-GJkHu-UZ.js";import"./HelpOutlineTwoTone-Ir9QTyWy.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],St={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
