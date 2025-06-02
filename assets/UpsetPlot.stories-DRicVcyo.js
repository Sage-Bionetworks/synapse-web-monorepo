import{U as L}from"./UpsetPlot-KReIFO2N.js";import{f as u}from"./index-BvPIejaS.js";import"./jsx-runtime-DS5StVVG.js";import"./index-cX-36PVo.js";import"./iframe-9EJDT6Vt.js";import"./LargeButton-BlPo21_v.js";import"./DefaultPropsProvider-Dj-ET5XP.js";import"./createTheme-Bf7RaJZp.js";import"./Button-Cp5tKDML.js";import"./ButtonBase-De4KvzrO.js";import"./useTimeout-CtHEIWtS.js";import"./TransitionGroupContext-D0NEqPRG.js";import"./useForkRef-C8gc3lry.js";import"./useIsFocusVisible-8oN7zW9b.js";import"./useEventCallback-Bf6o-zFC.js";import"./useFiles-D2J0lDEf.js";import"./VerificationSubmission-BI5WaB2N.js";import"./SynapseConstants-CaV0FCaG.js";import"./OrientationBanner-LE5NNPEZ.js";import"./index-BJZZKCw6.js";import"./spreadSx-CwcO6WA9.js";import"./react-BsOov9i0.js";import"./FullWidthAlert-C4RioFof.js";import"./Alert-DxLNdAsW.js";import"./resolveComponentProps-BckopApa.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-C97cKv-E.js";import"./Close-ClleilIz.js";import"./IconButton-Dnrmx_JM.js";import"./Paper-BnU681ZV.js";import"./Stack-mOfhED7S.js";import"./getThemeProps-B2jfOwXN.js";import"./useTheme-BagD9k6_.js";import"./Box-CilYK6-7.js";import"./AlertTitle-BG01MePs.js";import"./Typography-5l8xUtlm.js";import"./useTheme-Byb0Hnvw.js";import"./Grow-2xpSizAP.js";import"./index-q3SnWJ3I.js";import"./utils-COVIZagF.js";import"./ClickAwayListener-C4HP-2Tv.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-ZIrjiZox.js";import"./index-JhzEDNxb.js";import"./useControlled-CeFwsNUA.js";import"./useId-2Kxm9uM_.js";import"./Popper-CfQZLj9d.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-DN6u4g4A.js";import"./useQuery-7tsM9kOw.js";import"./utils-DxymWvTy.js";import"./Link-CXcIbBMo.js";import"./Collapse-D2dc9D9e.js";import"./isNil-t2bB1iUd.js";import"./_Uint8Array-YYzzYD9-.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-D3taRsKZ.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-DcWszeYx.js";import"./_getTag-DbOHal0V.js";import"./tinycolor-Begke6kS.js";import"./Fade-CQyasUig.js";import"./Skeleton-B3HMeOtD.js";import"./inputBaseClasses-LXtxNwLa.js";import"./calculateFriendlyFileSize-C78IjuJR.js";import"./CheckCircleTwoTone-CqTc5vaA.js";import"./InfoTwoTone-DNtkufyt.js";import"./useMutation-DUd97SQY.js";import"./isEqual-Dt-4NKhD.js";import"./dayjs.min-CHLyGnUf.js";import"./chunk-AYJ5UCUI-Blpg1t-L.js";import"./cloneDeep-CZOyHOHD.js";import"./_initCloneObject-CiNG-Awp.js";import"./merge-klNNUCYg.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-DJ9aEy1v.js";import"./react-sizeme-DIycHXxv.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-C5Syw7gz.js";import"./Backdrop-DHgCipIj.js";import"./LinearProgress-BpjR-emh.js";const Yt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var e,i,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    sql: 'SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)',
    rgbIndex: 0,
    maxBarCount: 20,
    setName: 'Individuals (#) per Assay',
    combinationName: 'Individuals (#)',
    summaryLink: '#',
    summaryLinkText: 'Explore All Of Something',
    onClick: selection => {
      const sets = (selection as any).sets;
      const query: Query = {
        sql: 'select * from syn12345',
        // stub files sql
        selectedFacets: [{
          concreteType: 'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
          columnName: 'Assays',
          facetValues: [...sets.values()].map((v: any) => v.name) as string[]
        }]
      };
      const url = \`/Explore/Data%20by%20Files?QueryWrapper0=\${JSON.stringify(query)}\`;
      console.log(url);
    }
  }
}`,...(a=(i=t.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var s,n,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    sql: 'SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL',
    rgbIndex: 0,
    maxBarCount: 10,
    setName: 'Set size',
    combinationName: 'Intersection size',
    onClick: fn()
  }
}`,...(m=(n=o.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var p,l,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    sql: 'SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL',
    maxBarCount: 10,
    setName: 'Set size',
    combinationName: 'Intersection size',
    variant: 'ampals',
    onClick: fn()
  }
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const _t=["Demo","ElitePortalDemo","AMPALSPortalVariant"];export{r as AMPALSPortalVariant,t as Demo,o as ElitePortalDemo,_t as __namedExportsOrder,Yt as default};
