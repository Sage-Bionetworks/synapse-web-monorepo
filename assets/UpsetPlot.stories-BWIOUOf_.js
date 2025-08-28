import{U as L}from"./UpsetPlot-D7uePP9p.js";import{f as u}from"./index-eLmcsuYY.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-CLisQa1y.js";import"./DefaultPropsProvider-CWCpxBxd.js";import"./createTheme-kzR4akzj.js";import"./index-BdZx4xpj.js";import"./iframe-zjLnwkzv.js";import"./Button-CQe7jZks.js";import"./createSimplePaletteValueFilter-CE58-ZFx.js";import"./useTimeout-Bm-Bpjmh.js";import"./ButtonBase-CxM_02eP.js";import"./useForkRef-Bgvg9tv8.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-P_cz5HVW.js";import"./useFiles-Bt_N3vpj.js";import"./VerificationSubmission-CDh9xETu.js";import"./SynapseConstants-BB8OzD3R.js";import"./OrientationBanner-BEO4rv1t.js";import"./index-asLC9ga4.js";import"./spreadSx-CwcO6WA9.js";import"./react-D1u-GmGm.js";import"./FullWidthAlert-BEXmar5a.js";import"./Alert-Bfqyji6Q.js";import"./useSlot-aP1uZ7qh.js";import"./createSvgIcon-BY1mZNtn.js";import"./Close-BUEMVr_E.js";import"./IconButton-CLIwP4E0.js";import"./Paper-BygyGcfV.js";import"./useTheme-BUnTaqXN.js";import"./useTheme-CyPid65-.js";import"./Stack-yaTiXx4Y.js";import"./extendSxProp-BsTrlUHe.js";import"./getThemeProps-CktB0LLD.js";import"./Box-wTUucE8E.js";import"./AlertTitle-qgTMfIkj.js";import"./Typography-DHkI5TaX.js";import"./index-DR51x3on.js";import"./ClickAwayListener-BtLb1QoZ.js";import"./getReactElementRef-DOmJtLhe.js";import"./index-CXRqLqob.js";import"./index-WTFPHBSS.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DbWp4vYu.js";import"./Tooltip-CA5EjILG.js";import"./index-DzfT4G98.js";import"./useControlled-BZF0ZbLF.js";import"./Popper-B9ZUwJHJ.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-CsrYFBZo.js";import"./useQuery-C18MkqUz.js";import"./QueryClientProvider-B3akeZRz.js";import"./Link-DM0HYHCv.js";import"./Collapse-leuZBKey.js";import"./_baseUniq-D51t2lVz.js";import"./_Uint8Array-Cs0wEeKK.js";import"./isArray-Da5kSjjI.js";import"./_getTag-C0DerptW.js";import"./isEqual-B5hfnNhw.js";import"./merge-D4hlKJHs.js";import"./_initCloneObject-BQvlM93A.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CNLiX1aT.js";import"./inputBaseClasses-BLqmrAZ9.js";import"./calculateFriendlyFileSize-DpwcpmGE.js";import"./CheckCircleTwoTone-6lBdI9xc.js";import"./InfoTwoTone-DjZOa90-.js";import"./useMutation-nz71tg0o.js";import"./dayjs.min-DcJlcSeq.js";import"./chunk-AYJ5UCUI-BAtatTO0.js";import"./cloneDeep-DDtjPt2-.js";import"./Skeleton-BInzLhzo.js";import"./SqlFunctions-B3tep9ZC.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BEvvpVlz.js";import"./Backdrop-Db67BML4.js";import"./LinearProgress-ClctfSU-.js";import"./index-Bz3brewi.js";import"./index-BePTZC_F.js";import"./index-Bh81azAc.js";import"./const-BP60AzNb.js";import"./index-BviM6Uzq.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const jt=["Demo","ElitePortalDemo","AMPALSPortalVariant"];export{r as AMPALSPortalVariant,t as Demo,o as ElitePortalDemo,jt as __namedExportsOrder,$t as default};
