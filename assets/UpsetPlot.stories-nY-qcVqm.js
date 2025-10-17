import{U as L}from"./UpsetPlot-FafLEVG4.js";import{f as u}from"./index-Dr3pzziN.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-DYgyJmIo.js";import"./DefaultPropsProvider-ChnhiV7X.js";import"./createTheme-CzqifIS2.js";import"./index-CgGWB-jV.js";import"./iframe-BUMkfsLU.js";import"./Button-DEyRWKz6.js";import"./createSimplePaletteValueFilter-DoKXWXAR.js";import"./useTimeout-BaoekB3P.js";import"./ButtonBase-CFAyCW0o.js";import"./useForkRef-Cg7exXTP.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DJKpL5dd.js";import"./useFiles-KjJsMF-p.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-DLx2cP4k.js";import"./OrientationBanner-Jb_O7Vhq.js";import"./index-Is5_m3kz.js";import"./spreadSx-CwcO6WA9.js";import"./react-N-ryfbTF.js";import"./FullWidthAlert-Cbe1wvZw.js";import"./Alert-CeHdnxTK.js";import"./useSlot-DJp30WUK.js";import"./createSvgIcon-CJyY65Ao.js";import"./Close-Ct4BeBDP.js";import"./IconButton-CiTuzBw7.js";import"./Paper-DDtB3wBD.js";import"./useTheme-7NPehFBl.js";import"./useTheme-BN-TwAsg.js";import"./Stack-DbagSvH3.js";import"./useThemeProps-C1npFjKE.js";import"./getThemeProps-DaX0KFEn.js";import"./extendSxProp-JVQTI-CD.js";import"./Box-BZ1lOftb.js";import"./AlertTitle-Cb7s4coE.js";import"./Typography-B9kkfmck.js";import"./index-q_vgnk4f.js";import"./ClickAwayListener-DRuGIOht.js";import"./getReactElementRef-CPho3O8d.js";import"./index-D2jwleMP.js";import"./index-BigBH4wQ.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BICR705K.js";import"./Tooltip-CuMkmQ11.js";import"./index-JClH4D6U.js";import"./useControlled-BvzDdtG-.js";import"./Popper-xa5ue3Yw.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-NiW2zyRg.js";import"./QueryClientProvider-DW-f02xS.js";import"./Link-oef7RIge.js";import"./Collapse-D0tlUayk.js";import"./_baseUniq-Dytxu0zx.js";import"./_Uint8Array-CN0Ng_Ch.js";import"./isArray-C9reyBA0.js";import"./_getTag-B2uaWzEd.js";import"./isEqual-C-hv45PE.js";import"./noop-DX6rZLP_.js";import"./merge-BNcXC3-S.js";import"./_initCloneObject-BEsO6nF6.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CslKpPQa.js";import"./inputBaseClasses-DC4K9515.js";import"./calculateFriendlyFileSize-Hzj1mxFN.js";import"./CheckCircleTwoTone-BhkaRfHQ.js";import"./InfoTwoTone-D3TwCEy5.js";import"./useMutation-CCNgT-2E.js";import"./dayjs.min-BQpchTlf.js";import"./chunk-AYJ5UCUI-D6YYAcr5.js";import"./cloneDeep-KI5YljVK.js";import"./Skeleton-HDLzVwIb.js";import"./SqlFunctions-B8wRZva4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-CcnCz9TH.js";import"./Backdrop-Cy3K9xed.js";import"./LinearProgress-BYLbbcDZ.js";import"./index-ZaV-CBy2.js";import"./index-B8ZWMq9d.js";import"./index-CYdrM7l-.js";import"./const-BP60AzNb.js";import"./index-A4gen9eb.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
