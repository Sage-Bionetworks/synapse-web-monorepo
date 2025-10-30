import{U as L}from"./UpsetPlot-C5F7IG7W.js";import{f as u}from"./index-DcvPPEnh.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-CpSPTbaY.js";import"./DefaultPropsProvider-C8agOKNV.js";import"./createTheme-XmTP9ztr.js";import"./index-C0wX4_D5.js";import"./iframe-Dg1OjomY.js";import"./Button-DYN6lvaS.js";import"./createSimplePaletteValueFilter-CMeensCQ.js";import"./useTimeout-VgJ8KSEC.js";import"./ButtonBase-BZaAYyhz.js";import"./useForkRef-DHDj_EBp.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-izn7xOSO.js";import"./useFiles-DoM6saS5.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-fjcaPar4.js";import"./OrientationBanner-DXHS9Ok7.js";import"./index-Cc1jVt2S.js";import"./spreadSx-CwcO6WA9.js";import"./react-DljyRFug.js";import"./FullWidthAlert-12ZGik4M.js";import"./Alert-SAf-HTP7.js";import"./useSlot-CMw1Guot.js";import"./createSvgIcon-C1R5uYZR.js";import"./Close-DlaaWvLY.js";import"./IconButton-DNzDJyyG.js";import"./Paper-nmCYqCUg.js";import"./useTheme-xbf2ZGeF.js";import"./useTheme-Ct2y6sLT.js";import"./Stack-DUv6l47M.js";import"./useThemeProps-B1LQGkAl.js";import"./getThemeProps-kFzncbx6.js";import"./extendSxProp-B4wy7T2i.js";import"./Box-BD_ma7_J.js";import"./AlertTitle-COng_SQR.js";import"./Typography-z9eLrlT0.js";import"./index-BCjqeLgG.js";import"./ClickAwayListener-Csamat5p.js";import"./getReactElementRef-DKvxwlSs.js";import"./index-BrkuAfGd.js";import"./index-Bhfa3jqe.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BY41iU1Z.js";import"./Tooltip-C6Zypvy1.js";import"./index-B2R4X1D8.js";import"./useControlled-DeciPQCg.js";import"./Popper-BbH1NV83.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-kiquRXJF.js";import"./QueryClientProvider-DDbKIYHh.js";import"./Link-C-HxI53b.js";import"./Collapse-B2sQsY1M.js";import"./_baseUniq-LxXjfER7.js";import"./_Uint8Array-BgOJGnAV.js";import"./isArray-kTGNcp_W.js";import"./_getTag-D8v9FRbF.js";import"./isEqual-B2qkdwNi.js";import"./noop-DX6rZLP_.js";import"./merge-CowR9ykA.js";import"./_initCloneObject-DMyAcL1x.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Be6GbFNo.js";import"./inputBaseClasses-BFpUsf8s.js";import"./calculateFriendlyFileSize-hiMIYe5W.js";import"./CheckCircleTwoTone-CCgVT7vA.js";import"./InfoTwoTone-Cz_RDhGO.js";import"./useMutation-CdgWCH4U.js";import"./dayjs.min-D8ND5VJ0.js";import"./chunk-AYJ5UCUI-DxxQLvEU.js";import"./cloneDeep-B1SVQaTP.js";import"./Skeleton-BUe1EjHW.js";import"./SqlFunctions-B8wRZva4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-CeYUsrXv.js";import"./Backdrop-DydIXsPp.js";import"./LinearProgress-CbAYb2iw.js";import"./index-Bky-l6sl.js";import"./index-DDyE99ZM.js";import"./index-DyyjYbNC.js";import"./const-BP60AzNb.js";import"./index-CaylIKGf.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
