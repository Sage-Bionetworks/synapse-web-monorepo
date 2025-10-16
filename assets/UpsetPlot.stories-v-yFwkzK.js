import{U as L}from"./UpsetPlot-Bsm3h6En.js";import{f as u}from"./index-CdgVwZea.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-CCyEhpeu.js";import"./DefaultPropsProvider-BHzoV1Dn.js";import"./createTheme-CE1nmSdD.js";import"./index-CREGy4JU.js";import"./iframe-DFtThXn_.js";import"./Button-Mc4n0qjd.js";import"./createSimplePaletteValueFilter-C9Flh5mR.js";import"./useTimeout-BE5W8YJ8.js";import"./ButtonBase-DaZ_7lRI.js";import"./useForkRef-CyS_o1Iz.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DfEpdioV.js";import"./useFiles-BZV17LRY.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-VIskHFE7.js";import"./OrientationBanner-mYD1KLJ5.js";import"./index-C6oCx5Q4.js";import"./spreadSx-CwcO6WA9.js";import"./react-B2udbvLI.js";import"./FullWidthAlert-ZCTjro34.js";import"./Alert-AqaPj6PE.js";import"./useSlot-DMKKbB6i.js";import"./createSvgIcon-CkgBCV8y.js";import"./Close-DQp0oEqq.js";import"./IconButton-BUM-FX0_.js";import"./Paper-DBVwlpo2.js";import"./useTheme-CwYhMF_O.js";import"./useTheme-JvF5LZla.js";import"./Stack-CPIUTT_1.js";import"./useThemeProps-zgF3fqlo.js";import"./getThemeProps-CRUQo9sp.js";import"./extendSxProp-BOce1nm_.js";import"./Box-DZiaVZnl.js";import"./AlertTitle-ChsCM4TP.js";import"./Typography-ANEGaihN.js";import"./index-B74xXF-A.js";import"./ClickAwayListener-YW0z3svG.js";import"./getReactElementRef-DO_5aoCT.js";import"./index-DD8x44wX.js";import"./index-C1cgcAs1.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DpBJrWe9.js";import"./Tooltip-Dr1XL-Zz.js";import"./index-ClwLs2xL.js";import"./useControlled-D4h4kRjW.js";import"./Popper-C1co2brQ.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-DI2Ey6nc.js";import"./QueryClientProvider-BA1QpnVt.js";import"./Link-D3QslX_P.js";import"./Collapse-DD7JCiwU.js";import"./_baseUniq-7YcikviV.js";import"./_Uint8Array-B6jpFBB6.js";import"./isArray-CV7tcOmy.js";import"./_getTag-HkVF-QgG.js";import"./isEqual-KtQk5CnN.js";import"./noop-DX6rZLP_.js";import"./merge-PkoklwUB.js";import"./_initCloneObject-Bh5HWbpD.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CbrDphCM.js";import"./inputBaseClasses-BMTzFsPJ.js";import"./calculateFriendlyFileSize-B4sPoU2L.js";import"./CheckCircleTwoTone-Ty_us4is.js";import"./InfoTwoTone-rbOzY5QT.js";import"./useMutation-DaNzmEzQ.js";import"./dayjs.min-CbGnbLpw.js";import"./chunk-AYJ5UCUI-DCSckdQY.js";import"./cloneDeep-CvkUHlHg.js";import"./Skeleton-CvrJKXGx.js";import"./SqlFunctions-B8wRZva4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-Cfh1ISk5.js";import"./Backdrop-ny4D8UkP.js";import"./LinearProgress-CgGXrEBr.js";import"./index-DgF5iVhG.js";import"./index-BOluUT3w.js";import"./index-z8xhp4EN.js";import"./const-BP60AzNb.js";import"./index-BSxjXguo.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
