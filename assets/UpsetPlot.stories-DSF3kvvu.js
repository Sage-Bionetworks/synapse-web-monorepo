import{U as L}from"./UpsetPlot-BFKqKjev.js";import{f as u}from"./index-xyRyIEQG.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-DSMd12uy.js";import"./DefaultPropsProvider-BKZXJlgr.js";import"./createTheme-CKTnRhf8.js";import"./index-roJ4vK9f.js";import"./iframe-usNaZGIV.js";import"./Button-Cm0_9C_z.js";import"./createSimplePaletteValueFilter-Cs5GTHcK.js";import"./useTimeout-DCTApi_k.js";import"./ButtonBase-BFz5Sg4Z.js";import"./useForkRef-CVKF0tln.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Bp0mZZnQ.js";import"./useFiles-dN7ewnVn.js";import"./VerificationSubmission-CMrrYimb.js";import"./SynapseConstants-B1D5mik2.js";import"./OrientationBanner-C8pDYmHe.js";import"./index-yKIbSChy.js";import"./spreadSx-CwcO6WA9.js";import"./react-DZJk2r9-.js";import"./FullWidthAlert-Bzhn1pnU.js";import"./Alert-WRFaCAhz.js";import"./useSlot-DHnKQh3_.js";import"./createSvgIcon-ES-cxXT2.js";import"./Close-BzNvQxyl.js";import"./IconButton-CfK7Mq_z.js";import"./Paper-N2-Rl_Ug.js";import"./useTheme-z78Ru-D7.js";import"./useTheme-CfHcAony.js";import"./Stack-BokSKM_R.js";import"./extendSxProp-Cq9B16Aj.js";import"./getThemeProps-Cnl-jNMX.js";import"./Box-BQqeNhLw.js";import"./AlertTitle-BRAVhBTZ.js";import"./Typography-DiV-TSAW.js";import"./index-BL8eoJay.js";import"./ClickAwayListener-FeBMXEHd.js";import"./getReactElementRef-SxH9WasF.js";import"./index-C8GKbJq-.js";import"./index-NGl8JrjW.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-1_GvRgnD.js";import"./Tooltip-DxTN-iVj.js";import"./index-CCsjNeDE.js";import"./useControlled-Dj4md4a0.js";import"./Popper-trMMFIZR.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ZWLpjIdm.js";import"./useQuery-B7ZDNP2g.js";import"./QueryClientProvider-CUfHPdrT.js";import"./Link-ClZEc3EU.js";import"./Collapse-DyljlfQj.js";import"./_baseUniq-C7ZN6g3_.js";import"./_Uint8Array-BLVPHFVS.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-BifwuPRO.js";import"./isArray-Dxzbedgu.js";import"./_getTag-B-JVePcs.js";import"./isEqual-DWUflldK.js";import"./merge-DEBG73W6.js";import"./_initCloneObject-DMVGGUOr.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DbbtWcKt.js";import"./inputBaseClasses-rbsktaTm.js";import"./calculateFriendlyFileSize-C1VoIjSe.js";import"./CheckCircleTwoTone-CTTxY2FK.js";import"./InfoTwoTone-C-O9jrS3.js";import"./useMutation-D4EbnEX4.js";import"./dayjs.min-BgcTbgT5.js";import"./chunk-AYJ5UCUI-BpnLogmo.js";import"./cloneDeep-IitvVbLB.js";import"./Skeleton-FzfqYDZ_.js";import"./SqlFunctions-c3WXx9n7.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BTwgcWqw.js";import"./Backdrop-DE7STfW5.js";import"./LinearProgress-QciN1btf.js";import"./index-_h1dge8I.js";import"./index-BNv4mq76.js";import"./index-B33efbgx.js";import"./const-BP60AzNb.js";import"./index-CStNOB7n.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
