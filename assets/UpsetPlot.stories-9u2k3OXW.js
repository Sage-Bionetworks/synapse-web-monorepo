import{U as L}from"./UpsetPlot-CSCIWfzX.js";import{f as u}from"./index-BPC7N4dF.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-C8zfAWkU.js";import"./DefaultPropsProvider-61bxVHLz.js";import"./createTheme-C4gBf2a4.js";import"./index-Co6kSeZ4.js";import"./iframe-E9QC53ED.js";import"./Button-SCmwow4H.js";import"./createSimplePaletteValueFilter-Di6fTx_Y.js";import"./useTimeout-DdwtR0nj.js";import"./ButtonBase-BVgSALXL.js";import"./useForkRef-Ie0jToSw.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-st75d_5x.js";import"./useFiles-DKWrsfR3.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-C13SoDMh.js";import"./OrientationBanner-BLSW5725.js";import"./index-VRnyeoRr.js";import"./spreadSx-CwcO6WA9.js";import"./react-3zvAdkLg.js";import"./FullWidthAlert-BQQ4yDY3.js";import"./Alert-D9b2Jaou.js";import"./useSlot-DzkULoZG.js";import"./createSvgIcon-B2xCGPCA.js";import"./Close-Gmlsem60.js";import"./IconButton-CSbPtiTS.js";import"./Paper-Bk3UaSkA.js";import"./useTheme-BNzonNUR.js";import"./useTheme-g4P-trrK.js";import"./Stack-vQcGt2V6.js";import"./extendSxProp-DjvHTGIN.js";import"./getThemeProps-C4dGaN9v.js";import"./Box-DuaunoIg.js";import"./AlertTitle-BlQPnX9A.js";import"./Typography-D0Pox0eh.js";import"./index-BW1ZnCRi.js";import"./ClickAwayListener-Bs5Cn-b4.js";import"./getReactElementRef-CzBAlckD.js";import"./index-L4uyOg9X.js";import"./index-xRVqPkfL.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BlhGKlVk.js";import"./Tooltip-DDH1jL_v.js";import"./index-DZ-xbKd_.js";import"./useControlled-urFJ8eZT.js";import"./Popper-rS_tjiGt.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-C_nQkRPK.js";import"./QueryClientProvider-BeCxgO5m.js";import"./Link-h2BZotPB.js";import"./Collapse-Bak0_57i.js";import"./_baseUniq-C1-450lM.js";import"./_Uint8Array-DKto8TjN.js";import"./isArray-CzN_o68b.js";import"./_getTag-q5_1F86d.js";import"./isEqual-CiHPje5G.js";import"./merge-CYB3oyvs.js";import"./_initCloneObject-BkGoruF9.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DJkg1TX1.js";import"./inputBaseClasses-s48QUKJF.js";import"./calculateFriendlyFileSize-Bo9QkoJO.js";import"./CheckCircleTwoTone-BxTVhx7V.js";import"./InfoTwoTone-B62BC5hf.js";import"./useMutation-BFApg2RG.js";import"./dayjs.min-1FMm97F5.js";import"./chunk-AYJ5UCUI-dfXExToj.js";import"./cloneDeep-CU_BdLCR.js";import"./Skeleton-Bec8Blff.js";import"./SqlFunctions-C8HqQ3uk.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-C_DGJzbV.js";import"./Backdrop-By3hpE9M.js";import"./LinearProgress-DY2l2XWp.js";import"./index-BWAzGwOa.js";import"./index-CeLbvCQt.js";import"./index-COlNf708.js";import"./const-BP60AzNb.js";import"./index-Bs54RSNG.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
