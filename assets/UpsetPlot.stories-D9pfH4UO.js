import{U as L}from"./UpsetPlot-DNyUcLKP.js";import{f as u}from"./index-C8E8uW3i.js";import"./jsx-runtime-B_BASs2o.js";import"./index-DwZZLiLd.js";import"./iframe-Zkz26kob.js";import"./LargeButton-BEP2UcdP.js";import"./DefaultPropsProvider-DTt0l4rk.js";import"./createTheme-CyGr1kaY.js";import"./Button-7E9-g8VM.js";import"./createSimplePaletteValueFilter-CwcnoVpf.js";import"./useTimeout-gAYlsF9h.js";import"./ButtonBase-B4fAWw7x.js";import"./useForkRef-CmEb2Hjb.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DrTM6r8w.js";import"./useFiles-DKiwZnFy.js";import"./VerificationSubmission-DKyendrM.js";import"./SynapseConstants-Di2qHJ4V.js";import"./OrientationBanner-CrZbUJlx.js";import"./index-CtUJEc90.js";import"./spreadSx-CwcO6WA9.js";import"./react-Cl87gb8P.js";import"./FullWidthAlert-CBvSjRDH.js";import"./Alert-BR0FfL-7.js";import"./useSlot-CIMJh2x7.js";import"./createSvgIcon-oz7RTgz8.js";import"./Close-CkuqRxFY.js";import"./IconButton-ZxELSsuB.js";import"./Paper-B4UH_OKi.js";import"./useTheme-DyVMMMH4.js";import"./useTheme-XTxZFMsc.js";import"./Stack-C2ETm3ew.js";import"./extendSxProp-cYd3bjsj.js";import"./getThemeProps-DRCVkZxN.js";import"./Box-CTyNgpBu.js";import"./AlertTitle-1DlITsoz.js";import"./Typography-DxLTsn7U.js";import"./index-msKwl0RH.js";import"./ClickAwayListener-DeMMBI1U.js";import"./getReactElementRef-BgJZi7s_.js";import"./index-B5aouh9C.js";import"./index-C-naQSBy.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-whg3Wx9g.js";import"./Tooltip-B9gDCvk0.js";import"./index-BwAixF8z.js";import"./useControlled-CbdmQ0MQ.js";import"./Popper-Ddcr4dsU.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BcSmk1fX.js";import"./useQuery-CnZ9w03v.js";import"./utils-z9MgxIce.js";import"./Link-DGtC6YCJ.js";import"./Collapse-CDal-Uzp.js";import"./isNil-Brgex79b.js";import"./_Uint8Array-5R2Phy2D.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CWBmoQcX.js";import"./isArray-Dxzbedgu.js";import"./isEqual-DJzDoLjX.js";import"./_getTag-D6u2Q-tT.js";import"./tinycolor-Begke6kS.js";import"./Fade-DOQSzISd.js";import"./inputBaseClasses-Bzj-FifI.js";import"./calculateFriendlyFileSize-D9ScsfwE.js";import"./CheckCircleTwoTone-Tw6QUA9Q.js";import"./InfoTwoTone-DJ4aKC-h.js";import"./useMutation-kvK-hPqm.js";import"./dayjs.min-DMEtZJm2.js";import"./chunk-AYJ5UCUI-CYY7MATY.js";import"./cloneDeep-C-AeX0sj.js";import"./_initCloneObject-DnIwAtZU.js";import"./Skeleton-BZYpf_eO.js";import"./merge-K4R-57V-.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-D5GxPzI3.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-D-nT63Z9.js";import"./Backdrop-CBgG7KxG.js";import"./LinearProgress-D4oduCSm.js";import"./index-DnGbjSgA.js";import"./index-BHTGGxsf.js";import"./index-DCylU95q.js";import"./const-Doag8klc.js";import"./index-mJQR_Ex9.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
