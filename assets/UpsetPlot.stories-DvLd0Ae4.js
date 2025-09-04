import{U as L}from"./UpsetPlot-D1XAoPbd.js";import{f as u}from"./index-lHUZ1aVS.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-QUQYjru_.js";import"./DefaultPropsProvider-C4ttJDz_.js";import"./createTheme-QTfNIHND.js";import"./index-jbxe4qnf.js";import"./iframe-Csk0P4iV.js";import"./Button-BoXndE0m.js";import"./createSimplePaletteValueFilter-CFdyQ8cQ.js";import"./useTimeout-hWOZoqao.js";import"./ButtonBase-iBx1-ak6.js";import"./useForkRef-wDv3ts2U.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-D4qUYTVZ.js";import"./useFiles-DLIOTyrS.js";import"./VerificationSubmission-D0sL2gwz.js";import"./SynapseConstants-BkOa3sXi.js";import"./OrientationBanner-BVDH2MzU.js";import"./index-BXOdbnPZ.js";import"./spreadSx-CwcO6WA9.js";import"./react-Cup9Wpmf.js";import"./FullWidthAlert-XjP6IbA0.js";import"./Alert-CSaRUXVh.js";import"./useSlot-CSa8e3oq.js";import"./createSvgIcon-lCvAzxxC.js";import"./Close-aJAmR6rq.js";import"./IconButton-DBbxkGzb.js";import"./Paper-BEpt9DOD.js";import"./useTheme-CIoHEpFD.js";import"./useTheme-rEQ5k3ZP.js";import"./Stack-CH6zs4CJ.js";import"./extendSxProp-CmGMGW33.js";import"./getThemeProps-mTF8rg2g.js";import"./Box-NmarTIzp.js";import"./AlertTitle-vvBOfH00.js";import"./Typography-B2nrfcQB.js";import"./index-DeDVaIci.js";import"./ClickAwayListener-CpmfBYEj.js";import"./getReactElementRef-DVxXf28N.js";import"./index--FkLQ4Xz.js";import"./index-lKZlVmyo.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DiQPLxxn.js";import"./Tooltip-qF9vFCxj.js";import"./index-Bgii8hnK.js";import"./useControlled-BKjVu3OC.js";import"./Popper-DxO4RVb4.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bt2r5KGg.js";import"./useQuery-BH1fdT2O.js";import"./QueryClientProvider-BlzrW-Yp.js";import"./Link-DoaJtmS-.js";import"./Collapse-BCXifEe6.js";import"./_baseUniq-BPTUWCw_.js";import"./_Uint8Array-BPaHv55i.js";import"./isArray-BK6K0JW6.js";import"./_getTag-Cqra_tga.js";import"./isEqual-B6B5D0Bt.js";import"./merge-BdRt6DVn.js";import"./_initCloneObject-et7WGEHT.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CJ4j-VUz.js";import"./inputBaseClasses-B7PHTgh5.js";import"./calculateFriendlyFileSize-B9lMuR0e.js";import"./CheckCircleTwoTone-B47WEstA.js";import"./InfoTwoTone-TFHJlf05.js";import"./useMutation-BFWcW8eU.js";import"./dayjs.min-C4WBa-1y.js";import"./chunk-AYJ5UCUI-CSrZGdWP.js";import"./cloneDeep-Dc2FF7e1.js";import"./Skeleton-9lEgPNC3.js";import"./SqlFunctions-D9jcfCB0.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-CTIo7rVO.js";import"./Backdrop-BbkRe_yL.js";import"./LinearProgress-DP3HBLvu.js";import"./index-BkX2SUO1.js";import"./index-CAFlvdi0.js";import"./index-yG6VjZW7.js";import"./const-BP60AzNb.js";import"./index-Dc_5xB5f.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
