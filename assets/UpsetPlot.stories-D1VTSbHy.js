import{U as L}from"./UpsetPlot-DI63OWFr.js";import{f as u}from"./index-lr7b5tQ_.js";import"./jsx-runtime-DoIYlp4t.js";import"./index-5ZJiay6o.js";import"./iframe-BmcwO2xT.js";import"./LargeButton-Ccn4WWaQ.js";import"./DefaultPropsProvider-BgP0qvz8.js";import"./createTheme-CXO1wyJ6.js";import"./Button-ChCZSLiw.js";import"./createSimplePaletteValueFilter-D4brKiKL.js";import"./useTimeout-BNxjEIwz.js";import"./ButtonBase-C2aeqbdi.js";import"./useForkRef-BSB4mf0c.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-eGlGpmrE.js";import"./useFiles-BiGUzg85.js";import"./VerificationSubmission-CMrrYimb.js";import"./SynapseConstants-GcJ66i0j.js";import"./OrientationBanner-C_gdWdHP.js";import"./index-D1S4wqqZ.js";import"./spreadSx-CwcO6WA9.js";import"./react-Dy5TFi-q.js";import"./FullWidthAlert-C69oCfS3.js";import"./Alert-Cz4w4emC.js";import"./useSlot-CYzf2CuA.js";import"./createSvgIcon-COhFTVZi.js";import"./Close-D2blhgcs.js";import"./IconButton-yQUPXu6C.js";import"./Paper-CLBTn5la.js";import"./useTheme-CtoS3KXw.js";import"./useTheme-BmtGgQtt.js";import"./Stack-DL8_QrtB.js";import"./extendSxProp-Bfl0YsT4.js";import"./getThemeProps-DMdgX6iK.js";import"./Box-0X6gE4t-.js";import"./AlertTitle-BOQ8dzrs.js";import"./Typography-D2WYwEhq.js";import"./index-HdZcy2qb.js";import"./ClickAwayListener-B8ycSJtg.js";import"./getReactElementRef-B9932jZZ.js";import"./index-CLS4XggC.js";import"./index-DnRi3qUU.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-TTHiypPa.js";import"./Tooltip-Y03c-BoW.js";import"./index-DtZrX8e3.js";import"./useControlled-wIspjYb0.js";import"./Popper-CojmlFQ_.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ZWLpjIdm.js";import"./useQuery-DGMztI4V.js";import"./utils-lsybrYpL.js";import"./Link-DNDzrODj.js";import"./Collapse-BD-w2sGf.js";import"./_baseUniq-DuwVG0dc.js";import"./_Uint8Array-BDhJlGKs.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-BODuWH6h.js";import"./isArray-Dxzbedgu.js";import"./_getTag-CFz-K7gF.js";import"./isEqual-C5yqi_f3.js";import"./merge-DUvrkK_n.js";import"./_initCloneObject-DoBhujeN.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DqcY1-v6.js";import"./inputBaseClasses-ByAjYQsq.js";import"./calculateFriendlyFileSize-BYq68kjA.js";import"./CheckCircleTwoTone-PknmSCpl.js";import"./InfoTwoTone-BJsBUeqm.js";import"./useMutation-BUGvri69.js";import"./dayjs.min-LOE8mlRL.js";import"./chunk-AYJ5UCUI-CfjWEGD_.js";import"./cloneDeep-BEJtsdrq.js";import"./Skeleton-CiPtHFKq.js";import"./SqlFunctions-c3WXx9n7.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-2KUlEXR7.js";import"./Backdrop-eHK3mFgj.js";import"./LinearProgress-DWwhJtp0.js";import"./index-7rWeBaap.js";import"./index-BgkZniH_.js";import"./index-Bdchr_7b.js";import"./const-Doag8klc.js";import"./index-CodEOnIz.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
