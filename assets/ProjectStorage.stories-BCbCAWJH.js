import{g as s}from"./entityHandlers-C_Fn0DsD.js";import{x as C,g as L,b9 as d,B as k,M as r}from"./useFiles-r0U6RSjO.js";import"./VerificationSubmission-dxY1kvC5.js";import"./StringUtils-lE31obNl.js";import{l as O}from"./index-DNq32Zb8.js";import{g as a}from"./userProfileHandlers-Dw8r_FDv.js";import{P as N}from"./ProjectDataAvailability-C5kLUEli.js";import"./index-BPx4BfsD.js";import"./mock_user_profile-CijvmO8r.js";import"./mockProject-DZVD_8bw.js";import"./mockTeam-w7-V6F7p.js";import"./SynapseConstants-Ddv_sASQ.js";import"./OrientationBanner-Csl-2pZk.js";import"./jsx-runtime-MbANjM5d.js";import"./index-Stft8yAF.js";import"./iframe-Eyx7BfFH.js";import"./index-D4uvL01q.js";import"./spreadSx-CwcO6WA9.js";import"./react-Ty8OjFhT.js";import"./FullWidthAlert-BXy9FGq7.js";import"./Alert-BEs0h04_.js";import"./createTheme-jQ9KZqcc.js";import"./resolveComponentProps-Uv4DXZPh.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CM-vHVZZ.js";import"./createSvgIcon-ahNp5mb4.js";import"./DefaultPropsProvider-FhwSztk3.js";import"./Close-DeUlv-hX.js";import"./IconButton-C3n9Amn2.js";import"./ButtonBase-CfpZjHJu.js";import"./useTimeout-DgOeYeoR.js";import"./TransitionGroupContext-Guw97GTb.js";import"./useIsFocusVisible-B-x5fER0.js";import"./useEventCallback-stF_Adn8.js";import"./Paper-ClGej5m7.js";import"./Stack-ZfUk0QTF.js";import"./getThemeProps-CwbHPl98.js";import"./useTheme-Cg8edm68.js";import"./Box-BazTlXiX.js";import"./AlertTitle-D4wSndy1.js";import"./Typography-Bp1kuzQ9.js";import"./useTheme-DxzWrAqM.js";import"./Grow-B6bNt6NJ.js";import"./index-BwLOZI6R.js";import"./utils-Q2rLk6hY.js";import"./ClickAwayListener-CzS2Hc3O.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-CGzCAXGw.js";import"./index-D7Er7lOD.js";import"./useControlled-Da1pt4FN.js";import"./useId-CTllctf1.js";import"./Popper-D24yfDla.js";import"./Button-QMhARrEB.js";import"./uniqueId-nutccZnb.js";import"./toString-xp1OkfS8.js";import"./isObjectLike-CGmwipMX.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-B43JR4dv.js";import"./times-DgQCrNkG.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-CAWntfGl.js";import"./mockTableEntity-BBJnCats.js";import"./mockFileEntityACLVariants-CHzlpU_t.js";import"./fakerUtils-CJYhnIlT.js";import"./mockFileEntity-CSK_3hqJ.js";import"./mock_file_handle-3wYKbysY.js";import"./mockEntity-IWjXAT1u.js";import"./mockSchema-DUDAiHiF.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-BLYr3XUa.js";import"./utils-BqgeSEgy.js";import"./Link-hNn2B0Ku.js";import"./Collapse-DchOfKL9.js";import"./isNil-cy96NJPL.js";import"./_Uint8Array-5zdnKaSc.js";import"./_baseIsEqual-C_N9kwgW.js";import"./_getTag-BOvE1drH.js";import"./tinycolor-Begke6kS.js";import"./Fade-DTssxnyf.js";import"./Skeleton-9Zi_XDpB.js";import"./inputBaseClasses-DZEjAUWo.js";import"./calculateFriendlyFileSize-_EOO9nxF.js";import"./CheckCircleTwoTone-WWJOEVUL.js";import"./InfoTwoTone-yt1o89I7.js";import"./mutation-oi93bAPr.js";import"./dayjs.min-3V6J6eqe.js";import"./chunk-AYJ5UCUI-DlvXe13e.js";import"./cloneDeep-UBC5IJiv.js";import"./_initCloneObject-CWmp2ROs.js";import"./isEqual-CpPaJiLx.js";import"./merge-D95p5VCO.js";import"./util-C-atTiiY.js";import"./HelpPopover-D_BoiCBj.js";import"./MarkdownPopover-D_6u08TK.js";import"./LightTooltip-DfG8f8ME.js";import"./MarkdownSynapse-Bgyei_f7.js";import"./SkeletonButton-D6c8ap4r.js";import"./SkeletonInlineBlock-fchMbG23.js";import"./SkeletonTable-N2IyK5Sa.js";import"./SkeletonParagraph-Dy-ZD-BK.js";import"./HelpOutlineTwoTone-tTnlS8FW.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],St={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
