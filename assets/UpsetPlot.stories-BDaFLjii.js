import{U as L}from"./UpsetPlot-Dh4vTazi.js";import{f as u}from"./index-COhnFRAa.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-D6XBFXAc.js";import"./DefaultPropsProvider-Dze3MY1J.js";import"./createTheme-C2WVS9AW.js";import"./index-BYTlLpU9.js";import"./iframe-BKid-lRK.js";import"./Button-ClULhOKL.js";import"./createSimplePaletteValueFilter-BClAKmko.js";import"./useTimeout-5QYkjsCW.js";import"./ButtonBase-B3L_VbRY.js";import"./useForkRef-I4T1u_0p.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-C2on9yNq.js";import"./useFiles-BvyRTXkx.js";import"./VerificationSubmission-NmfK1W18.js";import"./SynapseConstants-pVgLh2WD.js";import"./OrientationBanner-DqCjCNEW.js";import"./index-DlQmQoJz.js";import"./spreadSx-CwcO6WA9.js";import"./react-DEUk6uJr.js";import"./FullWidthAlert-DLLPpbcN.js";import"./Alert-DN5hf0MM.js";import"./useSlot-DhXDWeRj.js";import"./createSvgIcon-BMvZ7oXn.js";import"./Close-B4WzIeG2.js";import"./IconButton-3lKaiqot.js";import"./Paper-C5KijNv9.js";import"./useTheme-B3ETyTW4.js";import"./useTheme-BXs8ghRm.js";import"./Stack-lGKypZky.js";import"./extendSxProp-hAnljuIT.js";import"./getThemeProps-CmsihZNb.js";import"./Box-C4s19pAM.js";import"./AlertTitle-BBLd9HvD.js";import"./Typography-CNMx-WpY.js";import"./index-DNfsT4bF.js";import"./ClickAwayListener-KNw01Chz.js";import"./getReactElementRef-DL4umzvE.js";import"./index-BAySunq4.js";import"./index-BHvWQWGH.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-S4wEu2q4.js";import"./Tooltip-BfCBVAo0.js";import"./index-r6UZXaqk.js";import"./useControlled-CVqp7PLm.js";import"./Popper-CcW7sw4B.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-xk0So2qB.js";import"./QueryClientProvider-BtqaYAAi.js";import"./Link-DpIdHsj4.js";import"./Collapse-CwN0BiGZ.js";import"./_baseUniq-BV2fBIfC.js";import"./_Uint8Array-xFXqFFYz.js";import"./isArray-Dim04xSh.js";import"./_getTag-DT5pSQEx.js";import"./isEqual-B3UZDxYF.js";import"./merge--HaAKor2.js";import"./_initCloneObject-BHhvY9wg.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DHTUk004.js";import"./inputBaseClasses-Bs_Q9F2g.js";import"./calculateFriendlyFileSize-DzlXv0C9.js";import"./CheckCircleTwoTone-Ifw1IDko.js";import"./InfoTwoTone-puvntKUh.js";import"./useMutation-7NzcGZE3.js";import"./dayjs.min-Bc1Mhefl.js";import"./chunk-AYJ5UCUI-CBzP6w0d.js";import"./cloneDeep-DD3Zj_Oy.js";import"./Skeleton-MT-LmfX5.js";import"./SqlFunctions-CqOxgBqv.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-z995rflr.js";import"./Backdrop-DolYY4Gf.js";import"./LinearProgress-DT4JNBsx.js";import"./index-BDnAAXHb.js";import"./index-DoAjjA3i.js";import"./index-PL_L8XLn.js";import"./const-BP60AzNb.js";import"./index-BCq5FKO_.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
