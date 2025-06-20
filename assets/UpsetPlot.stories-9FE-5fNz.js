import{U as L}from"./UpsetPlot-Do1DzrBS.js";import{f as u}from"./index-DRMTTS_d.js";import"./jsx-runtime-CEiya-qk.js";import"./index-BSp_ZQzn.js";import"./iframe-D2P6Hz8u.js";import"./LargeButton-8j9PP1b4.js";import"./DefaultPropsProvider-mowMNPVN.js";import"./createTheme-BIYFvq8g.js";import"./Button-DW8uwKcd.js";import"./createSimplePaletteValueFilter-Cum4RQAQ.js";import"./useTimeout-DQj90VCm.js";import"./ButtonBase-DzCtctvR.js";import"./useForkRef-DpmcJsqc.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CN-NraCE.js";import"./useFiles-DsXNnbuB.js";import"./VerificationSubmission-CMrrYimb.js";import"./SynapseConstants-B0LjNAFO.js";import"./OrientationBanner-p1YWnoy_.js";import"./index-DDIc1CHd.js";import"./spreadSx-CwcO6WA9.js";import"./react-B_KpKvb2.js";import"./FullWidthAlert-APJZjszM.js";import"./Alert-VbEHGyJ9.js";import"./useSlot-Bi5uK-Bp.js";import"./createSvgIcon-BEhJlt2H.js";import"./Close-CgXCugLz.js";import"./IconButton-D8jW5NGW.js";import"./Paper-IJ_WKSZl.js";import"./useTheme-DEW0hui-.js";import"./useTheme-CUpSamw8.js";import"./Stack-BVGEmsZM.js";import"./extendSxProp--VZNpAZm.js";import"./getThemeProps-Bo5zZXDb.js";import"./Box-CeBO_yiS.js";import"./AlertTitle-BtZzDwm8.js";import"./Typography-DrbAIehx.js";import"./index-BZI38DsI.js";import"./ClickAwayListener-V2WTDJSg.js";import"./getReactElementRef-DObOhTgY.js";import"./index-Bmc5tHOG.js";import"./index-B8_ioYD3.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Cu2yfkpY.js";import"./Tooltip-BPHaPNfS.js";import"./index-CwubJZ7e.js";import"./useControlled-DYG3vje6.js";import"./Popper-BTFfeZDZ.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bdqa-HwM.js";import"./useQuery-BaQ4tC5y.js";import"./utils-NAV_hApq.js";import"./Link-ClzLR6kU.js";import"./Collapse-CHZvkNcr.js";import"./_baseUniq-CH5B1OKL.js";import"./_Uint8Array-DDv7F2aI.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-BerGYOoN.js";import"./isArray-Dxzbedgu.js";import"./_getTag-CruQv3Dp.js";import"./isEqual-ChKGANOO.js";import"./merge-B2Kk0ye1.js";import"./_initCloneObject-CzYcNzPS.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BLEwZ0yn.js";import"./inputBaseClasses-BPzUyhmM.js";import"./calculateFriendlyFileSize-D4N7TZwp.js";import"./CheckCircleTwoTone-Dl8Hb3jc.js";import"./InfoTwoTone-D7pUqeUD.js";import"./useMutation-De7K5N57.js";import"./dayjs.min-PNfTLX3I.js";import"./chunk-AYJ5UCUI-DfFmK8x9.js";import"./cloneDeep-DhitCHjc.js";import"./Skeleton-Ds7O-lEt.js";import"./SqlFunctions-DPgti-mT.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-B33XRrT5.js";import"./Backdrop-Cu2JnjAd.js";import"./LinearProgress-Dh94t7XZ.js";import"./index-UXr4ZTrF.js";import"./index-Nol10aPv.js";import"./index-BTmJ9Uh1.js";import"./const-Doag8klc.js";import"./index-0It2F79L.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const Xt=["Demo","ElitePortalDemo","AMPALSPortalVariant"];export{r as AMPALSPortalVariant,t as Demo,o as ElitePortalDemo,Xt as __namedExportsOrder,Kt as default};
