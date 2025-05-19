import{g as s}from"./entityHandlers-DDFkDNAn.js";import{x as C,g as L,b9 as d,B as k,M as r}from"./useFiles-CXziUBBk.js";import"./VerificationSubmission-dxY1kvC5.js";import"./StringUtils-Df7AZImX.js";import{l as O}from"./index-CaIe1M6P.js";import{g as a}from"./userProfileHandlers-CtqV805G.js";import{P as N}from"./ProjectDataAvailability-iPQx4VA2.js";import"./index-BqMayQuj.js";import"./mock_user_profile-CijvmO8r.js";import"./mockProject-BTBa1BAf.js";import"./mockTeam-DX_RatWU.js";import"./SynapseConstants-Cjwg7_uO.js";import"./OrientationBanner-DVC-9Eoc.js";import"./jsx-runtime-CUNTCE37.js";import"./index-iwduSq60.js";import"./iframe-C20v7OTK.js";import"./index-DrGL5Z6h.js";import"./spreadSx-CwcO6WA9.js";import"./react-BHuDLgyy.js";import"./FullWidthAlert-De1OStOb.js";import"./Alert-Dx1Z4kwv.js";import"./createTheme-cbFkRPvu.js";import"./resolveComponentProps-sWNv9AD3.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-B6qEDlfe.js";import"./createSvgIcon-DmVeL3l0.js";import"./DefaultPropsProvider-B-PYyZlm.js";import"./Close-BUEGeIV1.js";import"./IconButton-frjP_Efe.js";import"./ButtonBase-BrOL7gGJ.js";import"./useTimeout-C3h3mG7S.js";import"./TransitionGroupContext-o00riV6l.js";import"./useIsFocusVisible-u8aLHlah.js";import"./useEventCallback-CPv-PfNW.js";import"./Paper-C468jb6w.js";import"./Stack-hux_BLUA.js";import"./getThemeProps-PcWr3yTI.js";import"./useTheme-B9l0cioF.js";import"./Box-iBYOIJJh.js";import"./AlertTitle-BcDXofxw.js";import"./Typography-iNw74tXo.js";import"./useTheme-B9obp0jV.js";import"./Grow-Di3YNtHT.js";import"./index-08h1k3rT.js";import"./utils-l3nTcCRT.js";import"./ClickAwayListener-BwaqJqmk.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-CJIzasCr.js";import"./index-CO9B5BSx.js";import"./useControlled-BK1ZS50s.js";import"./useId-B_jteS8E.js";import"./Popper-CGefBYUp.js";import"./Button-Cew0p3xf.js";import"./uniqueId-Bs0Q2gT7.js";import"./toString-Dp4fmWBD.js";import"./isObjectLike-DT3TzfLw.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-Dh3PThA0.js";import"./times-5LA6YEbn.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-DaNlToTZ.js";import"./mockTableEntity-De7twmk7.js";import"./mockFileEntityACLVariants-DRKHx-yO.js";import"./fakerUtils-Bu4US9M6.js";import"./mockFileEntity-BpAoLfuX.js";import"./mock_file_handle-3wYKbysY.js";import"./mockEntity-B7YSsqe-.js";import"./mockSchema-CxyAU77a.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-CvCohokr.js";import"./utils-D2MpK3mA.js";import"./Link-DidmzCYQ.js";import"./Collapse-krv0lCh4.js";import"./isNil-G1VRTy0g.js";import"./_Uint8Array-D9ObtfO1.js";import"./_baseIsEqual-DnjdWqDr.js";import"./_getTag-C7xJJ-SW.js";import"./tinycolor-Begke6kS.js";import"./Fade-2dK6sQpn.js";import"./Skeleton-CSwpW9Og.js";import"./inputBaseClasses-lMdWkQYH.js";import"./calculateFriendlyFileSize-CLdbY7DA.js";import"./CheckCircleTwoTone-CeiR3Sbp.js";import"./InfoTwoTone-BhrV1Jbi.js";import"./mutation-BEG6eulq.js";import"./dayjs.min-C4wwLUbt.js";import"./chunk-AYJ5UCUI-brQ4jQk2.js";import"./cloneDeep-BgTSkX-U.js";import"./_initCloneObject-DG7zrIU5.js";import"./isEqual-BQr9gFrf.js";import"./merge-uXuCjRdd.js";import"./util-Bd48Oa8n.js";import"./HelpPopover-CN3KTn53.js";import"./MarkdownPopover-BHZJD3hB.js";import"./LightTooltip-BEPUEO8h.js";import"./MarkdownSynapse-Bf3Hfj-d.js";import"./SkeletonButton-BBdGtSp9.js";import"./SkeletonInlineBlock-DMhLGskz.js";import"./SkeletonTable-XVwOdhwB.js";import"./SkeletonParagraph-D4WYiEP8.js";import"./HelpOutlineTwoTone-D-F4sP7O.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],St={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
