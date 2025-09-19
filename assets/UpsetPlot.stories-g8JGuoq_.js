import{U as L}from"./UpsetPlot-CJFxKN_A.js";import{f as u}from"./index-CY3QC6fR.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-BmMIILO0.js";import"./DefaultPropsProvider-CpQclCMM.js";import"./createTheme-Cfmpslfc.js";import"./index-BGpI4ylO.js";import"./iframe-Ddr3cYxD.js";import"./Button-BLxSkXO5.js";import"./createSimplePaletteValueFilter-DCuN9org.js";import"./useTimeout-BI73T8Sr.js";import"./ButtonBase-DZmSN1ru.js";import"./useForkRef-CNgEgA6-.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BaHbzjEU.js";import"./useFiles-DCByO87-.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-BMAUm8Mh.js";import"./OrientationBanner-BXT5kcDN.js";import"./index-DkgkjynE.js";import"./spreadSx-CwcO6WA9.js";import"./react-CSPHiA2s.js";import"./FullWidthAlert-C6vfUEXZ.js";import"./Alert-B_HF-aRK.js";import"./useSlot-BI50lNKR.js";import"./createSvgIcon-CPrM-54a.js";import"./Close-Bn8t9Ia6.js";import"./IconButton-B3zUX2nV.js";import"./Paper-BoW1ah1V.js";import"./useTheme-yHTffsOD.js";import"./useTheme-CAQCYY1k.js";import"./Stack-Jwztnp5F.js";import"./extendSxProp-DNeen8Fm.js";import"./getThemeProps-NK2C-o0r.js";import"./Box-BWGLMhAv.js";import"./AlertTitle-6WsPcZ1k.js";import"./Typography-Ce-gAV9s.js";import"./index-DmZzpHOF.js";import"./ClickAwayListener-BZC0T7Te.js";import"./getReactElementRef-BlXlUd-1.js";import"./index-DjO-WukJ.js";import"./index-DItYd_fI.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Bla6bBez.js";import"./Tooltip-D91tp4r9.js";import"./index-NoWNPlPw.js";import"./useControlled-BwO0sUuT.js";import"./Popper-BUj90CCi.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-4Ouewk96.js";import"./QueryClientProvider-BqXXMi1s.js";import"./Link-DROnStHn.js";import"./Collapse-DZEzd_3A.js";import"./_baseUniq-_37OgCWp.js";import"./_Uint8Array-Dr6FQkiD.js";import"./isArray-BX1r13Kz.js";import"./_getTag-D_zj2wG3.js";import"./isEqual-DC322x5j.js";import"./merge-BqF55WgL.js";import"./_initCloneObject-DOXCAfP2.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-B2tIRQk5.js";import"./inputBaseClasses-DchpwRjT.js";import"./calculateFriendlyFileSize-xNaGc40C.js";import"./CheckCircleTwoTone-Dx02CEuE.js";import"./InfoTwoTone-D5epEgOk.js";import"./useMutation-ElpfEnJt.js";import"./dayjs.min-CEA64Lyb.js";import"./chunk-AYJ5UCUI-CbtXcOGv.js";import"./cloneDeep-CHRFS3Ni.js";import"./Skeleton-ChdKJR_r.js";import"./SqlFunctions-B6aZ8mL4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-Cl9bc8Hz.js";import"./Backdrop-BTxd2gV_.js";import"./LinearProgress-DTDxaJrI.js";import"./index-Djs1_wNs.js";import"./index-Dg49vhR_.js";import"./index-DGTDZ5zx.js";import"./const-BP60AzNb.js";import"./index-dl0lI1Eq.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
