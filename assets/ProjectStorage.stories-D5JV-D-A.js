import{g as s}from"./entityHandlers-DAIhqmdr.js";import{x as C,g as L,b5 as d,B as k,M as r}from"./useFiles-PZ8-Ka-K.js";import"./VerificationSubmission-BI5WaB2N.js";import"./StringUtils-DN6u4g4A.js";import{l as O}from"./index-CeOvG48o.js";import{g as a}from"./userProfileHandlers-UJpaZWwM.js";import{P as N}from"./ProjectDataAvailability-DlXvitW9.js";import"./index-XreUjsnZ.js";import"./mock_user_profile-CijvmO8r.js";import"./mockProject-BD1H_GVq.js";import"./mockTeam-CXAkQPXT.js";import"./SynapseConstants-D-g__08a.js";import"./OrientationBanner-Cvk0vZwz.js";import"./jsx-runtime-BShfRpSZ.js";import"./index-BbtDhika.js";import"./iframe-CKrYTaKd.js";import"./index-N1kOmd9H.js";import"./spreadSx-CwcO6WA9.js";import"./react-HYFTtNt4.js";import"./FullWidthAlert-D-sxDN5-.js";import"./Alert-C2YXBWCZ.js";import"./createTheme-DKmxwRcy.js";import"./resolveComponentProps-BVwZEvDc.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-IOZ1OulF.js";import"./createSvgIcon-hcVlY0Ml.js";import"./DefaultPropsProvider-cSSWhC_N.js";import"./Close-DBkHOwqb.js";import"./IconButton-5km8qVSa.js";import"./ButtonBase-ClE2TfhF.js";import"./useTimeout-k-gMJ94D.js";import"./TransitionGroupContext-Cve-nvmp.js";import"./useIsFocusVisible-Dks7CKXr.js";import"./useEventCallback-jwq_ByoI.js";import"./Paper-Bm29IVK3.js";import"./Stack-COuT9-_l.js";import"./getThemeProps-DEq8Zk9I.js";import"./useTheme-DuVt1FxG.js";import"./Box-CWd-bsj8.js";import"./AlertTitle-D7VJteKH.js";import"./Typography-D596ILSX.js";import"./useTheme-BKtsw1fM.js";import"./Grow-DArXpOEh.js";import"./index-C2ZmoJQv.js";import"./utils-JiBfP0T-.js";import"./ClickAwayListener-DJDrwr3D.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BhjMsB6i.js";import"./index-CmWQNtGo.js";import"./useControlled-BNOR6_Pf.js";import"./useId-C10K-7yC.js";import"./Popper-BEhyKRxf.js";import"./Button-C3bos-pW.js";import"./uniqueId-DbpN6IHj.js";import"./toString-YsSM19GU.js";import"./isObjectLike-CHy9fFvj.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-CUREHNyO.js";import"./times-BvOY06CC.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-DYzZKw_P.js";import"./mockTableEntity-B_IPyaum.js";import"./mockFileEntityACLVariants-sUsUBRQO.js";import"./fakerUtils-G5vTZeXB.js";import"./mockFileEntity-D82DpNaa.js";import"./mock_file_handle-CFTRkxcS.js";import"./mockEntity-CpFd3h3M.js";import"./mockSchema-zRckJnXf.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-BY-c2cTp.js";import"./utils-BIdFCP2Y.js";import"./Link-BR06mnNh.js";import"./Collapse-D4OMLybv.js";import"./isNil-9z8ZomJ0.js";import"./_Uint8Array-DIVOU-2-.js";import"./_baseIsEqual-ClNnW1Hu.js";import"./_getTag-l16BreDv.js";import"./tinycolor-Begke6kS.js";import"./Fade-RO7PwX5V.js";import"./Skeleton-CB5rBUhd.js";import"./inputBaseClasses-C06Dmsts.js";import"./calculateFriendlyFileSize-Hpnh_yqR.js";import"./CheckCircleTwoTone-ly2iPN9C.js";import"./InfoTwoTone-CEeh4CzQ.js";import"./mutation-Br5mjHBF.js";import"./dayjs.min-D0qkn3AN.js";import"./chunk-AYJ5UCUI-D7I6sN6G.js";import"./cloneDeep-DpCux0qf.js";import"./_initCloneObject-wn-R8NIZ.js";import"./isEqual-CVkRzbJy.js";import"./merge-BWGd7Swl.js";import"./util-DttNETco.js";import"./HelpPopover-QDy0Qm2S.js";import"./MarkdownPopover-DcDL1KNm.js";import"./LightTooltip-CEbYY1ie.js";import"./MarkdownSynapse-Cgf5QBr8.js";import"./useMutation-D-CWI_i2.js";import"./SkeletonButton-DbqdKH1b.js";import"./SkeletonInlineBlock-BKSCAse0.js";import"./SkeletonTable-CY03LyzV.js";import"./SkeletonParagraph-BG-y1rkA.js";import"./HelpOutlineTwoTone-BIPZOyzw.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],Lt={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(y=(j=i.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};const kt=["ProjectDataUnderLimit","ProjectDataOverLimit","ProjectDataStorageNotSet"];export{e as ProjectDataOverLimit,i as ProjectDataStorageNotSet,o as ProjectDataUnderLimit,kt as __namedExportsOrder,Lt as default};
