import{U as L}from"./UpsetPlot-B2llgPsf.js";import{f as u}from"./index-5H1rbREx.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-BAeP2jsZ.js";import"./DefaultPropsProvider-B3Z6d7cd.js";import"./createTheme-B6Lo4ZED.js";import"./index-C8_-xO9z.js";import"./iframe-D4GfFzpq.js";import"./Button-BiRQv90a.js";import"./createSimplePaletteValueFilter-BO0vWEti.js";import"./useTimeout-CNsX2D-4.js";import"./ButtonBase-PBhvszGq.js";import"./useForkRef-BUNGokmg.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DEPIic2u.js";import"./useFiles-DBKLnBhU.js";import"./VerificationSubmission-NmfK1W18.js";import"./SynapseConstants-Cf2IvIMd.js";import"./OrientationBanner-DGsT6Byd.js";import"./index-B8A8l2gJ.js";import"./spreadSx-CwcO6WA9.js";import"./react-HsrREZVI.js";import"./FullWidthAlert-B414p8-Y.js";import"./Alert-ZdCqqW67.js";import"./useSlot-aolT_R-h.js";import"./createSvgIcon-CYBMDAOL.js";import"./Close-XMwLoZpf.js";import"./IconButton-IGGC8VbQ.js";import"./Paper-BaQ9wGuk.js";import"./useTheme-BLLd2G7c.js";import"./useTheme-6zkbiB4i.js";import"./Stack-DsYO_YqT.js";import"./extendSxProp-Dx4u8pgT.js";import"./getThemeProps-K5kW8-AJ.js";import"./Box-C1CMpwHK.js";import"./AlertTitle-DryrJGv0.js";import"./Typography-CuNt_Raz.js";import"./index-DfEZuSiJ.js";import"./ClickAwayListener-Bvd5lGVf.js";import"./getReactElementRef-B9dtttgM.js";import"./index-RcggQRry.js";import"./index-B5NA_6ph.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BkxUsJGb.js";import"./Tooltip-1t4QqBuE.js";import"./index-pYCdg-1c.js";import"./useControlled-C1H5CV1T.js";import"./Popper-pAYhUujr.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-DZw2U2Bh.js";import"./QueryClientProvider-CRWXaDQK.js";import"./Link-DnBeaHc4.js";import"./Collapse-uRyCInYg.js";import"./_baseUniq-B1cLkrhm.js";import"./_Uint8Array-BQnIyb4e.js";import"./isArray-DhvEetYU.js";import"./_getTag-sTGbf34T.js";import"./isEqual-CRZ6MpvO.js";import"./merge-Cyse0J_S.js";import"./_initCloneObject-bMjAFI63.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-bm54aEoZ.js";import"./inputBaseClasses-BoW5TwFg.js";import"./calculateFriendlyFileSize-lxyJTl9W.js";import"./CheckCircleTwoTone-BXe916XB.js";import"./InfoTwoTone-DwDxmgRy.js";import"./useMutation-DfXyzvsj.js";import"./dayjs.min-DjfB_4vT.js";import"./chunk-AYJ5UCUI-CdIa_0T-.js";import"./cloneDeep-DsDZvi6Z.js";import"./Skeleton-1wBICD1d.js";import"./SqlFunctions-CqOxgBqv.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-yTmRcu_r.js";import"./Backdrop-CNMPdTF6.js";import"./LinearProgress-BoGDiIXj.js";import"./index-BGCvSh0I.js";import"./index-Cg8cxhtx.js";import"./index-C1WVqxaO.js";import"./const-BP60AzNb.js";import"./index-BdYtpzDr.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
