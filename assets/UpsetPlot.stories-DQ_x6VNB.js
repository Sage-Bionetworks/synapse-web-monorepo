import{U as L}from"./UpsetPlot-B2LUsIiT.js";import{f as u}from"./index-Cf3Qfcqc.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-BtRS6-QZ.js";import"./DefaultPropsProvider-DT8CdkBr.js";import"./createTheme-D08z8tOW.js";import"./index-Conua9G2.js";import"./iframe-DINMmeF0.js";import"./Button-Bdba21BO.js";import"./createSimplePaletteValueFilter-DliqdM69.js";import"./useTimeout-yzxxGqTd.js";import"./ButtonBase-CI1QBf81.js";import"./useForkRef-BOOPc1N3.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BAB5lzGK.js";import"./useFiles-BUlyPuDq.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-BXxexPNB.js";import"./OrientationBanner-Dwbo18mI.js";import"./index-Cc4jlaqh.js";import"./spreadSx-CwcO6WA9.js";import"./react-CcAHcoXJ.js";import"./FullWidthAlert-BdeJokJU.js";import"./Alert-NYlgKHCU.js";import"./useSlot-DE448mYQ.js";import"./createSvgIcon-DsUJVPN3.js";import"./Close-C5Fd5xBA.js";import"./IconButton-CO_T40ac.js";import"./Paper-D8BNceYg.js";import"./useTheme-c4-KANp3.js";import"./useTheme-DWNjemT5.js";import"./Stack-B5tIAd5T.js";import"./extendSxProp-CQjXTKEM.js";import"./getThemeProps-Comk8tGO.js";import"./Box-21u2VOup.js";import"./AlertTitle-DdSQuuvw.js";import"./Typography-Dk4r4gKE.js";import"./index-BOQNH-ld.js";import"./ClickAwayListener-CAR9WkBC.js";import"./getReactElementRef-BYxl9ReH.js";import"./index-BeXPOtKG.js";import"./index-DEPw-8TP.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-rrQjLqz3.js";import"./Tooltip-Wnc6hSS_.js";import"./index-D6GytKF2.js";import"./useControlled-D6_D2B3V.js";import"./Popper-OG1QSaYS.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-BC3X2hnG.js";import"./QueryClientProvider-CAKhw4C9.js";import"./Link-BJBYKH9W.js";import"./Collapse-5L_tchsD.js";import"./_baseUniq-CQAbdrFR.js";import"./_Uint8Array-CCAngnKw.js";import"./isArray-BEZx63XQ.js";import"./_getTag-CPVtyb7j.js";import"./isEqual-OsnJ8CjH.js";import"./merge-C-LaIOn_.js";import"./_initCloneObject-BvlKiu5a.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DswKjK0I.js";import"./inputBaseClasses-tFw5dEmI.js";import"./calculateFriendlyFileSize-D45TlB4L.js";import"./CheckCircleTwoTone-iWPuj-gd.js";import"./InfoTwoTone-a6I8wWJp.js";import"./useMutation-OR9-iA6C.js";import"./dayjs.min-DqoIjlsg.js";import"./chunk-AYJ5UCUI-_J62a5MN.js";import"./cloneDeep-C040B9cs.js";import"./Skeleton-CvhPcUKQ.js";import"./SqlFunctions-B6aZ8mL4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DDChlD3T.js";import"./Backdrop-ChUZ3kaZ.js";import"./LinearProgress-DxaBAjzG.js";import"./index-2igkITvI.js";import"./index-Q5jfP6i5.js";import"./index-DTPHxAW7.js";import"./const-BP60AzNb.js";import"./index-CBfDY3Hu.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
