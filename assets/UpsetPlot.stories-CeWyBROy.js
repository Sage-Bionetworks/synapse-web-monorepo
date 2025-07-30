import{U as L}from"./UpsetPlot-Co9B1GmI.js";import{f as u}from"./index-CFBA8Kjp.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-B3zIZNV1.js";import"./DefaultPropsProvider-Cpn2jCy0.js";import"./createTheme-BIoZiSJF.js";import"./index-DgaCf7Kz.js";import"./iframe-B1CNHrWE.js";import"./Button-BW8GRwAx.js";import"./createSimplePaletteValueFilter-hBRB8UPE.js";import"./useTimeout-Cc9RCyEJ.js";import"./ButtonBase-LKp-H-Rx.js";import"./useForkRef-1fgEFBgR.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Bkq51cd7.js";import"./useFiles-BKiZGHsB.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-hncumMYe.js";import"./OrientationBanner-BdfkjDii.js";import"./index-DR0Vn37Y.js";import"./spreadSx-CwcO6WA9.js";import"./react-DqgvTDss.js";import"./FullWidthAlert-Cvt8XxfM.js";import"./Alert-C_f5FC7V.js";import"./useSlot-Dy_r826j.js";import"./createSvgIcon-DVOgd3qF.js";import"./Close-DOV8wEbL.js";import"./IconButton-v1J1wQJp.js";import"./Paper-DgCuzQY7.js";import"./useTheme-CYPUqhXU.js";import"./useTheme-BEQFPRS7.js";import"./Stack-CWFEgpO9.js";import"./extendSxProp-C908ClJ5.js";import"./getThemeProps-BuTfeov7.js";import"./Box-Bi2d1Mae.js";import"./AlertTitle-HdlLyYGk.js";import"./Typography-VYH7Cv1h.js";import"./index-0bNTE8cr.js";import"./ClickAwayListener-KhVrE1U0.js";import"./getReactElementRef-BRntU3LT.js";import"./index-Ba10pb3e.js";import"./index-Bb424CdL.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BkJWwYGk.js";import"./Tooltip-DsrESnup.js";import"./index-iXl4ujZe.js";import"./useControlled-bBCZXbID.js";import"./Popper-CCWzRaqT.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-BVu5VKZr.js";import"./QueryClientProvider-BFTr2_QR.js";import"./Link-CrKQi2Jv.js";import"./Collapse-Df8_z2WK.js";import"./_baseUniq-CAmuLWKY.js";import"./_Uint8Array-CuNQ3Fit.js";import"./isArray-BpFyLbwO.js";import"./_getTag-BK9Z1jQS.js";import"./isEqual-BKkzowDt.js";import"./merge-KTtcIXdU.js";import"./_initCloneObject-CUVT1ALz.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BuQWl4aG.js";import"./inputBaseClasses-CEusdrPr.js";import"./calculateFriendlyFileSize-zFBVC2De.js";import"./CheckCircleTwoTone-BWsVejfq.js";import"./InfoTwoTone-DzKvWQ4a.js";import"./useMutation-TGL0rs6W.js";import"./dayjs.min-BoEbmQNB.js";import"./chunk-AYJ5UCUI-9qlfKxLQ.js";import"./cloneDeep-DnRuPh51.js";import"./Skeleton-DL99pBr1.js";import"./SqlFunctions-C8HqQ3uk.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-CoFIJ-hy.js";import"./Backdrop-DAmdlzCm.js";import"./LinearProgress-BMOGgxpc.js";import"./index-Bo39nxT3.js";import"./index-BrrIVFAd.js";import"./index-B8RNuYfE.js";import"./const-BP60AzNb.js";import"./index-DyxfzD9K.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
