import{g as i}from"./entityHandlers-DforDs8o.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-DSPyswUJ.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-C95LMFI-.js";import{h as d,H as l}from"./index-B0qEENE5.js";import{g as m}from"./userProfileHandlers-3rJSomjr.js";import{P as L}from"./ProjectDataAvailability-Dws11Vic.js";import"./index-CgUZPYeG.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-BZ04F97H.js";import"./mockTeam-BdH2zf9U.js";import"./SynapseConstants-DUNFlq0e.js";import"./OrientationBanner-BouT6_-v.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-ovDtYbUI.js";import"./index-DqCNeVui.js";import"./iframe-DLJ04gD7.js";import"./spreadSx-CwcO6WA9.js";import"./react-DBCxFg72.js";import"./FullWidthAlert-D4uvuPk0.js";import"./Alert-CyNwItA7.js";import"./createTheme-XQ1XG1uT.js";import"./DefaultPropsProvider-B_iKn7F1.js";import"./useSlot-G1t5X145.js";import"./useForkRef-Wbx4V2YI.js";import"./createSimplePaletteValueFilter-0xywFCdl.js";import"./createSvgIcon-AhXV-Lxi.js";import"./Close-M_K7APZJ.js";import"./IconButton-CNFKcrJM.js";import"./useTimeout-Ci1YOS2N.js";import"./ButtonBase-CnbaYMND.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Bc47s1w8.js";import"./Paper-CYyby8z3.js";import"./useTheme-DbAeu6yd.js";import"./useTheme-CktZyT1n.js";import"./Stack-D9rYCQQF.js";import"./useThemeProps-Uu3RamaM.js";import"./getThemeProps-BLiK3YSp.js";import"./extendSxProp-DQG93Und.js";import"./Box-nPc4YptG.js";import"./AlertTitle-o2mAfrn3.js";import"./Typography-D-0ZBQX2.js";import"./index-Dn5oTu5D.js";import"./ClickAwayListener-vSy9CTVX.js";import"./getReactElementRef-Dojj8YKz.js";import"./index-lhBCL31b.js";import"./index-CQk5-tNr.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BbYs77F_.js";import"./Tooltip-C4CjRY6Y.js";import"./index-B0wLNRQ3.js";import"./useControlled-BbEwI8f2.js";import"./Popper-BTa4sm66.js";import"./Button-BKKfuiiA.js";import"./uniqueId-DR4IDOJJ.js";import"./toString-0dMECawv.js";import"./isArray-cRRhqXew.js";import"./isSymbol-jHnzF1wO.js";import"./times-C3wDPJ1v.js";import"./_Uint8Array-BN5v77BQ.js";import"./identity-DKeuBCMA.js";import"./toInteger-ChHHjLU6.js";import"./mockTableEntity-BSxCVRf9.js";import"./mockFileEntityACLVariants-DVXKKgHY.js";import"./fakerUtils-DmDd9yBs.js";import"./mockFileEntity-X3IF7wiA.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-ChzMyMqk.js";import"./mockSchema-B-AGU8pW.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-Dz2CGP3m.js";import"./QueryClientProvider-C0WiXwv4.js";import"./Link-CH4iZoNX.js";import"./Collapse-BH6wb8pT.js";import"./_baseUniq-CqT83kDA.js";import"./_getTag-wQVUyFtv.js";import"./isEqual-dM2_k6w0.js";import"./noop-DX6rZLP_.js";import"./merge-BzIMSKk1.js";import"./_initCloneObject-mADqvNT2.js";import"./tinycolor-Begke6kS.js";import"./Fade-BEi6VzVG.js";import"./inputBaseClasses-BfMVnRnK.js";import"./calculateFriendlyFileSize-BUdwJH4A.js";import"./CheckCircleTwoTone-B6jn311F.js";import"./InfoTwoTone-Cwq51stI.js";import"./useMutation-DslBe_ZR.js";import"./dayjs.min-CITIma5U.js";import"./chunk-AYJ5UCUI-DxDCzQTA.js";import"./cloneDeep-BGk3XvFY.js";import"./Skeleton-0b9O17k9.js";import"./HelpPopover-_hNx9bUL.js";import"./MarkdownPopover-DMSSx9V8.js";import"./LightTooltip-DjSF4yPY.js";import"./MarkdownSynapse-Di6zZNtx.js";import"./SkeletonButton-Cuy_5w7R.js";import"./SkeletonInlineBlock-4BOVwqlp.js";import"./SkeletonTable-DmQ9ZUF3.js";import"./SkeletonParagraph-BL0oCV-s.js";import"./HelpOutlineTwoTone-BaOIeFMC.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],jr={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(I=(g=r.parameters)==null?void 0:g.docs)==null?void 0:I.source}}};var _,P,R;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(R=(P=o.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var E,u,j;e.parameters={...e.parameters,docs:{...(E=e.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    projectId: 'syn31415123'
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getEntityHandlers(MOCK_REPO_ORIGIN), ...getProjectStorageHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...(j=(u=e.parameters)==null?void 0:u.docs)==null?void 0:j.source}}};const yr=["ProjectDataUnderLimit","ProjectDataOverLimit","ProjectDataStorageNotSet"];export{o as ProjectDataOverLimit,e as ProjectDataStorageNotSet,r as ProjectDataUnderLimit,yr as __namedExportsOrder,jr as default};
