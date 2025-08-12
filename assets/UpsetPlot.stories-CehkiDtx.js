import{U as L}from"./UpsetPlot-DuKqlF06.js";import{f as u}from"./index-CUC4NOvh.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-DlqUdNr8.js";import"./DefaultPropsProvider-DBzytOXy.js";import"./createTheme-Dn7uIOtN.js";import"./index-kfz2ZdB-.js";import"./iframe-S-VLdJeA.js";import"./Button-DRDa_84V.js";import"./createSimplePaletteValueFilter-Dz0wBtTa.js";import"./useTimeout-DWIQCcxM.js";import"./ButtonBase-B5ksOXiP.js";import"./useForkRef-DKQuVDpI.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-C5QfbvCa.js";import"./useFiles-Ckm6sNnc.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-DcSmyvTx.js";import"./OrientationBanner-C5rGFwZK.js";import"./index-aiBum8h8.js";import"./spreadSx-CwcO6WA9.js";import"./react--ASatkGJ.js";import"./FullWidthAlert-NU_s7J3j.js";import"./Alert-D-7LpQTg.js";import"./useSlot-CZqR668N.js";import"./createSvgIcon-Cad1TFr7.js";import"./Close-B0xVWneC.js";import"./IconButton-DpCqJSaO.js";import"./Paper-CwNdsz7S.js";import"./useTheme-BLq1sqBY.js";import"./useTheme-B1mLmG-C.js";import"./Stack-D9tmhJmC.js";import"./extendSxProp-YO1I1ALA.js";import"./getThemeProps-DkYfMlon.js";import"./Box-DI3EuLbF.js";import"./AlertTitle-CZW1Gbb2.js";import"./Typography-4j7jpxFq.js";import"./index-CEaHt5Lb.js";import"./ClickAwayListener-BM0nmyRh.js";import"./getReactElementRef-CBGuY3hl.js";import"./index-DupY7Nwi.js";import"./index-CQ-HXsIi.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-B162psUf.js";import"./Tooltip-nDeXFXq_.js";import"./index-DPt9EKPJ.js";import"./useControlled-RLynzQVM.js";import"./Popper-BNNuxoRs.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-G1j4ElAQ.js";import"./QueryClientProvider-BwQZVYI7.js";import"./Link-Cxhz8g-e.js";import"./Collapse--jh0di_0.js";import"./_baseUniq-DuGBs6Ey.js";import"./_Uint8Array-BK9HdWap.js";import"./isArray-C1U8f8cy.js";import"./_getTag-B2mdoK9R.js";import"./isEqual-F-Abf1XJ.js";import"./merge-C84YKXYk.js";import"./_initCloneObject-FVaMXRa6.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-gfnE55pz.js";import"./inputBaseClasses-CHKy8BeX.js";import"./calculateFriendlyFileSize-DPj0qpOI.js";import"./CheckCircleTwoTone-D-fO6mzc.js";import"./InfoTwoTone-F5_b2YUU.js";import"./useMutation-BJ7GlPUz.js";import"./dayjs.min-CeT-pF_j.js";import"./chunk-AYJ5UCUI-CENv81Bk.js";import"./cloneDeep-D0PQrEBb.js";import"./Skeleton-CLA7uXGO.js";import"./SqlFunctions-C8HqQ3uk.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-CeWvfPcT.js";import"./Backdrop-D8tLj9tE.js";import"./LinearProgress-S6RMuCmc.js";import"./index-CKkXdLSQ.js";import"./index-BF2e9u5N.js";import"./index-CV5McAjB.js";import"./const-BP60AzNb.js";import"./index-Dxv77a3a.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
