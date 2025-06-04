import{g as s}from"./entityHandlers-BW2FVpvH.js";import{y as C,g as L,b8 as d,B as k,M as r}from"./useFiles-CYCG5By9.js";import"./VerificationSubmission-DHPhgAH7.js";import"./StringUtils-Bj0SG9ce.js";import{l as O}from"./index-GCnGed6d.js";import{g as a}from"./userProfileHandlers-BZa-2SpW.js";import{P as N}from"./ProjectDataAvailability-Cy1vm9jT.js";import"./index-Dm2X2R0s.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-aDZbUhUR.js";import"./mockTeam-BCP9sAWv.js";import"./SynapseConstants-CmfpXss_.js";import"./OrientationBanner--O3J5zHJ.js";import"./jsx-runtime-CeNNE178.js";import"./index-Bt2HldYQ.js";import"./iframe-BLXaVYvq.js";import"./index-CfmE6CoI.js";import"./spreadSx-CwcO6WA9.js";import"./react-BMavKsjq.js";import"./FullWidthAlert-DyeuC1vJ.js";import"./Alert-B7nkz1ia.js";import"./createTheme-CKb99kjG.js";import"./resolveComponentProps-CMIWR73s.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-uSm8hWtq.js";import"./createSvgIcon-DLoGZJ7f.js";import"./DefaultPropsProvider-CZ1ixMCP.js";import"./Close-BJ7cjjFc.js";import"./IconButton-Bk_PmWuO.js";import"./ButtonBase-DGK36sqj.js";import"./useTimeout-CmIrVyao.js";import"./TransitionGroupContext-Da8-nKIU.js";import"./useIsFocusVisible-C5zF6H-R.js";import"./useEventCallback-CS_P56Cl.js";import"./Paper-DPHdlQ6w.js";import"./Stack-B2UZSqeE.js";import"./getThemeProps-MWZ41NY4.js";import"./useTheme-D2L9K1WU.js";import"./Box-Bhf9Kz_5.js";import"./AlertTitle-CMAceEnv.js";import"./Typography-CFXxu8IN.js";import"./useTheme-Dl4JanPa.js";import"./Grow-C5U1AU2n.js";import"./index-BHhAFVUK.js";import"./utils-DshReT03.js";import"./ClickAwayListener-CA8RUKC1.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BmtwnYm2.js";import"./index-DNfyRJhZ.js";import"./useControlled-C5JTjFUD.js";import"./useId-QtHUq3oX.js";import"./Popper-BoV6apG6.js";import"./Button-WgFG7Kv7.js";import"./uniqueId-B7qRQUTU.js";import"./toString-C1edKCyB.js";import"./isObjectLike-DvBEekQS.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-DIHlfHOR.js";import"./times-CvknjA7f.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-Yo1R2fxd.js";import"./mockTableEntity-BiSKj2-Z.js";import"./mockFileEntityACLVariants-Nuuqec8I.js";import"./fakerUtils-BgocmWeB.js";import"./mockFileEntity-BI9T87OA.js";import"./mock_file_handle-C2NjfX48.js";import"./mockEntity-B2MI7rXX.js";import"./mockSchema-BqBs5_cw.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-ozFMDHTC.js";import"./utils-C7h47-8F.js";import"./Link-wPFjZble.js";import"./Collapse-BG7m57yp.js";import"./isNil-BnN6qy0c.js";import"./_Uint8Array-BlRziyVS.js";import"./_baseIsEqual-DUAR2DVI.js";import"./_getTag-BStwP3vH.js";import"./tinycolor-Begke6kS.js";import"./Fade-TT1SN1XX.js";import"./Skeleton-1xe7MdCp.js";import"./inputBaseClasses-Kd2PBwef.js";import"./calculateFriendlyFileSize-Dy-aVZfM.js";import"./CheckCircleTwoTone-DIkLEp5G.js";import"./InfoTwoTone-xvjf5lJX.js";import"./useMutation-Cr2LGzTW.js";import"./isEqual-BjlCgmbf.js";import"./dayjs.min-CUcU5xVS.js";import"./chunk-AYJ5UCUI-0PQAposk.js";import"./cloneDeep-xAnl9iNy.js";import"./_initCloneObject-B-889FSA.js";import"./merge-BnQpxRnb.js";import"./util-ChdntyMD.js";import"./HelpPopover-yOvDZn8G.js";import"./MarkdownPopover-4xfjz9Kb.js";import"./LightTooltip-D9yS0lLZ.js";import"./MarkdownSynapse-CioQYKdy.js";import"./SkeletonButton-0L9NaRI_.js";import"./SkeletonInlineBlock-DzYfnxTK.js";import"./SkeletonTable-BiktFgWe.js";import"./SkeletonParagraph-cjwMM4Yj.js";import"./HelpOutlineTwoTone-1n3bxGSM.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],St={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
