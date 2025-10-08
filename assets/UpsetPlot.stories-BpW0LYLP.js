import{U as L}from"./UpsetPlot-BCqaA2q5.js";import{f as u}from"./index-B1WigURf.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-BOZZ-Udd.js";import"./DefaultPropsProvider-CBD8PJSe.js";import"./createTheme-TOjNz6fB.js";import"./index-B1uhWlq_.js";import"./iframe-VtWkBZYO.js";import"./Button-br2rykF0.js";import"./createSimplePaletteValueFilter-DH3QwEOz.js";import"./useTimeout-Cq7I2zGO.js";import"./ButtonBase-DiuPscxo.js";import"./useForkRef-CTUlL3cJ.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-J852iPP_.js";import"./useFiles-DdzLlC9U.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-DQ1ikS1O.js";import"./OrientationBanner-BN07fH5k.js";import"./index-IZ5_zrdr.js";import"./spreadSx-CwcO6WA9.js";import"./react-CbQ15yAK.js";import"./FullWidthAlert-5zc-3E-b.js";import"./Alert-BEvdQcEL.js";import"./useSlot-DTgu3gQR.js";import"./createSvgIcon--x6u5jRF.js";import"./Close-QsKxVASE.js";import"./IconButton-iBwdBh2s.js";import"./Paper-B_nq9U7K.js";import"./useTheme-CC-fCbti.js";import"./useTheme-DBSqUBnf.js";import"./Stack-RIyXZZPo.js";import"./useThemeProps-Bltw_p2W.js";import"./getThemeProps-Doj4gqGt.js";import"./extendSxProp-CX7cLBRq.js";import"./Box-BOKOlDky.js";import"./AlertTitle-Bm305o05.js";import"./Typography-DG3oGzan.js";import"./index-CAtNbYm6.js";import"./ClickAwayListener-DQtezAF7.js";import"./getReactElementRef-BqKh0nRS.js";import"./index-CGCoPhrt.js";import"./index-BJGbXTcu.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-fV3jiCXF.js";import"./Tooltip-Dd4SE6TD.js";import"./index-DW0mVMzq.js";import"./useControlled-Nrfb0-dw.js";import"./Popper-D_KZqDAp.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-BIw3Jdz_.js";import"./QueryClientProvider-BVns6KNT.js";import"./Link-CDPFvNbB.js";import"./Collapse-Dvs5y-JN.js";import"./_baseUniq-G4kodMhE.js";import"./_Uint8Array-Bbw8m_zR.js";import"./isArray-z0RNZAmn.js";import"./_getTag-zEg92QQd.js";import"./isEqual-Dx5MNSQ5.js";import"./noop-DX6rZLP_.js";import"./merge-DsuvQUlG.js";import"./_initCloneObject-DgFdk6lj.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-D5eJ5m-a.js";import"./inputBaseClasses-CgsGgCf9.js";import"./calculateFriendlyFileSize-Dnl93bHk.js";import"./CheckCircleTwoTone-Y1ulybgg.js";import"./InfoTwoTone-D9uaXFDU.js";import"./useMutation-BXPzwztc.js";import"./dayjs.min-BZOatc1q.js";import"./chunk-AYJ5UCUI-CPmmeiVV.js";import"./cloneDeep-DaBFDYMX.js";import"./Skeleton-CMYh7EwU.js";import"./SqlFunctions-B8wRZva4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-Dq7uUGlq.js";import"./Backdrop-BXjX2kBx.js";import"./LinearProgress-CiAEGYZU.js";import"./index-Did61gV9.js";import"./index-C1lZcum-.js";import"./index-wlyAdb9_.js";import"./const-BP60AzNb.js";import"./index-CJJ7jral.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
