import{U as L}from"./UpsetPlot-CU2S4XX4.js";import{f as u}from"./index-CV32nKAf.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-BhCixEno.js";import"./DefaultPropsProvider-DAPNjWet.js";import"./createTheme-Bzp3Oebg.js";import"./index-D0zaLgG5.js";import"./iframe-CHJdwkcb.js";import"./Button-DMXr5qNB.js";import"./createSimplePaletteValueFilter-B-MvoJXT.js";import"./useTimeout-t281HhHC.js";import"./ButtonBase-Bu9b7NmY.js";import"./useForkRef-CuivNDJr.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DlKJHBos.js";import"./useFiles-DrqNmeIy.js";import"./VerificationSubmission-NmfK1W18.js";import"./SynapseConstants-BI6YoEJw.js";import"./OrientationBanner-BeN_TaQn.js";import"./index-DaUI7t1z.js";import"./spreadSx-CwcO6WA9.js";import"./react-BdOzyPAN.js";import"./FullWidthAlert-C5gjpjZu.js";import"./Alert-jUqGn7Vb.js";import"./useSlot-DiSzdLod.js";import"./createSvgIcon-Dcr0Z45a.js";import"./Close-BYxRX3gz.js";import"./IconButton-BTLnF8u0.js";import"./Paper-Dqc9mm5b.js";import"./useTheme-B2DydEPb.js";import"./useTheme-BD4wcF5Z.js";import"./Stack-Bj7c06tH.js";import"./extendSxProp-Cxiymmpb.js";import"./getThemeProps-Cdu9ZaST.js";import"./Box-DacBFjar.js";import"./AlertTitle-FNfB4L0h.js";import"./Typography-BsIa8Xjl.js";import"./index-3FGJ995p.js";import"./ClickAwayListener-DHWTmW7v.js";import"./getReactElementRef-BGcNRWrD.js";import"./index-m9qOAL3y.js";import"./index-Ctm9k-z4.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BNEREbcK.js";import"./Tooltip-D-TdaS6z.js";import"./index-eP8nXqQs.js";import"./useControlled-D2QqBVbi.js";import"./Popper-DFDQqJ6U.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-3rFuJ5jS.js";import"./QueryClientProvider-DYNCjPRg.js";import"./Link-hmzR4kgp.js";import"./Collapse-Bw-ruChV.js";import"./_baseUniq-CDarwQKM.js";import"./_Uint8Array-CoUL8pcC.js";import"./isArray-KImGBjwy.js";import"./_getTag-BXma9e2y.js";import"./isEqual-CObDGRXD.js";import"./merge-iSY1Jn6x.js";import"./_initCloneObject-CPAze62e.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-C8gO3Fgx.js";import"./inputBaseClasses-CXdJhbJw.js";import"./calculateFriendlyFileSize-D7z6QM2I.js";import"./CheckCircleTwoTone-DXTQ2ujL.js";import"./InfoTwoTone-xM9ka6cp.js";import"./useMutation-DrAgjQcR.js";import"./dayjs.min-DuzY92yz.js";import"./chunk-AYJ5UCUI-BNB_QKCv.js";import"./cloneDeep-a9Xfq6Xq.js";import"./Skeleton-C-Tmbz9Z.js";import"./SqlFunctions-B-lgMRiM.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BHIG3qzF.js";import"./Backdrop-DYjduMMY.js";import"./LinearProgress-C60wbPp1.js";import"./index-BNsucKUg.js";import"./index-C6g_zV4_.js";import"./index-Crc2NdvZ.js";import"./const-BP60AzNb.js";import"./index-C22v50kx.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
