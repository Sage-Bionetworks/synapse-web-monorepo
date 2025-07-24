import{U as L}from"./UpsetPlot-Cqbau1Qx.js";import{f as u}from"./index-DOsXKXoH.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-BY7mizzm.js";import"./DefaultPropsProvider-BWpyEzwg.js";import"./createTheme-OYzYH9uz.js";import"./index-Be3OKIZF.js";import"./iframe-XiUBpGKM.js";import"./Button-uUObj31d.js";import"./createSimplePaletteValueFilter-B8St1HV2.js";import"./useTimeout-fFdGDEiL.js";import"./ButtonBase-DxRcrFnX.js";import"./useForkRef-CFVv9kWM.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-COCJCpif.js";import"./useFiles-DLDZCp3_.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-0pPTJy_l.js";import"./OrientationBanner-DrB1cKgY.js";import"./index-CdG-H1GA.js";import"./spreadSx-CwcO6WA9.js";import"./react-DVFpEhSV.js";import"./FullWidthAlert-Dh1ba1yf.js";import"./Alert-BOau1aY7.js";import"./useSlot-a-aE1Pdq.js";import"./createSvgIcon-CNyb9gIQ.js";import"./Close-C8SYJp32.js";import"./IconButton-BnsJG5aV.js";import"./Paper-C4a3OuyP.js";import"./useTheme-ByI89sY-.js";import"./useTheme-CbVokkp1.js";import"./Stack--2S6T-M_.js";import"./extendSxProp-ODv7UY98.js";import"./getThemeProps-Av4aVS9Y.js";import"./Box-rJEB27nI.js";import"./AlertTitle-B6Z6XNzA.js";import"./Typography-D2rs1qMZ.js";import"./index-DFUoKfrI.js";import"./ClickAwayListener-BhudWclL.js";import"./getReactElementRef-DH1X4EPt.js";import"./index-D9nKWh6T.js";import"./index-CT3k1YyO.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Ca5Xjkdj.js";import"./Tooltip-BMTh3XTZ.js";import"./index-BgngdRnL.js";import"./useControlled-RTrp8xk7.js";import"./Popper-DvJtvlzG.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BYEtqtR3.js";import"./useQuery-CclqZfdw.js";import"./QueryClientProvider-DOZZWjMO.js";import"./Link-CVqsb7w3.js";import"./Collapse-964ezGRB.js";import"./_baseUniq-Bp8a-hEG.js";import"./_Uint8Array-CTD4g-UO.js";import"./isArray-BaUR4PKY.js";import"./_getTag-D_rvvH3J.js";import"./isEqual-B3Ph6nsS.js";import"./merge-CUwoUklL.js";import"./_initCloneObject-CP-LQp12.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CvNPyTjG.js";import"./inputBaseClasses-CxFgARnO.js";import"./calculateFriendlyFileSize-CSqZS-o-.js";import"./CheckCircleTwoTone-CLYwlntD.js";import"./InfoTwoTone-D34yF3Np.js";import"./useMutation-C3y2_jlG.js";import"./dayjs.min-DR8gAueo.js";import"./chunk-AYJ5UCUI-Bzu-EXpx.js";import"./cloneDeep-XGQX0ICN.js";import"./Skeleton-CoTfaTC1.js";import"./SqlFunctions-Dcy2rA-G.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-CM6QUXb7.js";import"./Backdrop-v3Mp5V8N.js";import"./LinearProgress-CjDqdqQ5.js";import"./index-Dxp2jP3o.js";import"./index-CjKofA1Y.js";import"./index-DWfn1Qi0.js";import"./const-BP60AzNb.js";import"./index-fNw0mqdS.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
