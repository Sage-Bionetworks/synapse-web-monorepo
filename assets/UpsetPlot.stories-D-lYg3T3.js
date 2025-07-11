import{U as L}from"./UpsetPlot-ClWJz-8b.js";import{f as u}from"./index-COu8JARW.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-VE2aFD2a.js";import"./DefaultPropsProvider-DV2k0EKp.js";import"./createTheme-CvmSuuTN.js";import"./index-DFgyNqO_.js";import"./iframe-BONHnHmX.js";import"./Button-BWqBW9qC.js";import"./createSimplePaletteValueFilter-BBua6APr.js";import"./useTimeout-uM0I4FHt.js";import"./ButtonBase-D1BWc8jn.js";import"./useForkRef-BwM2dkCX.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-jpdvXlMB.js";import"./useFiles-CvNgPb5D.js";import"./VerificationSubmission-NmfK1W18.js";import"./SynapseConstants-DfAkYHSx.js";import"./OrientationBanner-Kqq2yAK3.js";import"./index-fDndQCcb.js";import"./spreadSx-CwcO6WA9.js";import"./react-CETkiXl_.js";import"./FullWidthAlert-Bv9Y6CJh.js";import"./Alert-BfRhTEiC.js";import"./useSlot-Bz1lPbgH.js";import"./createSvgIcon-CTTmQEG6.js";import"./Close-CDFYNJn2.js";import"./IconButton-DMY6WtAo.js";import"./Paper-Dl4NcsZy.js";import"./useTheme-nOGRm3h9.js";import"./useTheme-CFl9zPOj.js";import"./Stack-8Gefz3Vx.js";import"./extendSxProp-OrWKMBCc.js";import"./getThemeProps-c6QJIRQ5.js";import"./Box-C57trPRa.js";import"./AlertTitle-bpsm5pdH.js";import"./Typography-CBiSjxZP.js";import"./index-B6lxu1Ug.js";import"./ClickAwayListener-DL9jmuNC.js";import"./getReactElementRef-BbilxyS1.js";import"./index-DTJcoq-b.js";import"./index-DIQf0lMW.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Cz7TIQwA.js";import"./Tooltip-DH1bm0aC.js";import"./index-DNhJT1xw.js";import"./useControlled-fDSPq9S-.js";import"./Popper-CF7HvnG1.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-BXrbdaCG.js";import"./QueryClientProvider-lP_DA3-U.js";import"./Link-DNdJsVbA.js";import"./Collapse-CZ-O6OTr.js";import"./_baseUniq-CsZ-FMDI.js";import"./_Uint8Array-DTR5gFx4.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CEFHIlgJ.js";import"./isArray-Dxzbedgu.js";import"./_getTag-BYmYX1Uu.js";import"./isEqual-Cappb9XP.js";import"./merge-C0TbiV95.js";import"./_initCloneObject-CZ01hRpU.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-TtUSla3U.js";import"./inputBaseClasses-lm6KIU9A.js";import"./calculateFriendlyFileSize-BxI9cL49.js";import"./CheckCircleTwoTone-CRhIUAFO.js";import"./InfoTwoTone-DLAb1_sk.js";import"./useMutation-C4Mu_GWO.js";import"./dayjs.min-CjxvSurQ.js";import"./chunk-AYJ5UCUI-CyebcBVS.js";import"./cloneDeep-DB2QEjaU.js";import"./Skeleton-Cz687Kkk.js";import"./SqlFunctions-CqOxgBqv.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-XcpGziqk.js";import"./Backdrop-kgLfglio.js";import"./LinearProgress-yFSVFEf1.js";import"./index-ACfWK2Qu.js";import"./index-u2NNXYs3.js";import"./index-DfVcZs1W.js";import"./const-BP60AzNb.js";import"./index-DbgQ1FZF.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
