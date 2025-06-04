import{U as L}from"./UpsetPlot-DSlfzOmh.js";import{f as u}from"./index-yfmpm7TD.js";import"./jsx-runtime-CdKXYHq3.js";import"./index-pFihaiJB.js";import"./iframe-DGWk3dtm.js";import"./LargeButton-DQNsW_kW.js";import"./DefaultPropsProvider-B9KQWTTu.js";import"./createTheme-6OKFmZq8.js";import"./Button-B082zdSZ.js";import"./ButtonBase-CE1J5Bjq.js";import"./useTimeout-B3NVn0q2.js";import"./TransitionGroupContext-VJeEL-bF.js";import"./useForkRef-LxaFHDGW.js";import"./useIsFocusVisible-DtTWJUhG.js";import"./useEventCallback-Rz2loLNW.js";import"./useFiles-Dr7u_Bva.js";import"./VerificationSubmission-DHPhgAH7.js";import"./SynapseConstants-BanPYtN2.js";import"./OrientationBanner-DzTWIvmN.js";import"./index-vb57DutA.js";import"./spreadSx-CwcO6WA9.js";import"./react-WVV_Bngv.js";import"./FullWidthAlert-3Lw8ZGai.js";import"./Alert-DsIOtgCY.js";import"./resolveComponentProps-BuENAeaX.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-BkjJkEMb.js";import"./Close-BJDJEVVG.js";import"./IconButton-BM_7udd3.js";import"./Paper-BNcB9yJp.js";import"./Stack-DjjVVnDH.js";import"./getThemeProps-V7XIfBtU.js";import"./useTheme-TYTrCo8P.js";import"./Box-BksAr4qV.js";import"./AlertTitle-CrJmCFK9.js";import"./Typography-CYinS4Gd.js";import"./useTheme-BK0D5BzJ.js";import"./Grow-D8wu1iHX.js";import"./index-CX5jh9yq.js";import"./utils-8j5hwKUm.js";import"./ClickAwayListener-rrs22D9n.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DVMPSB7k.js";import"./index-rhqfbkIa.js";import"./useControlled-DH3KsJOY.js";import"./useId-CvtASGF1.js";import"./Popper-Dza_qJqA.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-Bj0SG9ce.js";import"./useQuery-BEghArMJ.js";import"./utils-BTDzrboP.js";import"./Link-BXQgRgUp.js";import"./Collapse-CJtVz9c-.js";import"./isNil-Br_fGC8c.js";import"./_Uint8Array-01EqBUPq.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-Blr26enQ.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-BYN_PiCw.js";import"./_getTag-C1uljw8-.js";import"./tinycolor-Begke6kS.js";import"./Fade-DJO1wvNj.js";import"./Skeleton-Dyn6VGG3.js";import"./inputBaseClasses-BWvchspz.js";import"./calculateFriendlyFileSize-DIAohWT-.js";import"./CheckCircleTwoTone-B9avxx8U.js";import"./InfoTwoTone-DM8MXETk.js";import"./useMutation-CLVgkmvQ.js";import"./isEqual-pwBT1dbs.js";import"./dayjs.min-mMu8AzRI.js";import"./chunk-AYJ5UCUI-CQIGzzgu.js";import"./cloneDeep-D86TpKYV.js";import"./_initCloneObject-VZ8j85Z0.js";import"./merge-CKYP9hiF.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-DhoAZ_qc.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-B6CwOdsG.js";import"./Backdrop-qRK3jJ2i.js";import"./LinearProgress-DjMGZCyM.js";import"./index-_wk4IWta.js";import"./index-DS5KnhiG.js";import"./const-Doag8klc.js";import"./index-B1dt6FHl.js";const jt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(e=t.parameters)==null?void 0:e.docs)==null?void 0:a.source}}};var s,n,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const Kt=["Demo","ElitePortalDemo","AMPALSPortalVariant"];export{r as AMPALSPortalVariant,t as Demo,o as ElitePortalDemo,Kt as __namedExportsOrder,jt as default};
