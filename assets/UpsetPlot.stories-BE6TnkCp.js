import{U as L}from"./UpsetPlot-DIzYo9J2.js";import{f as u}from"./index-D_OlqUbw.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-PXqXElR5.js";import"./DefaultPropsProvider-DvBkxC4C.js";import"./createTheme-BoMy76Wd.js";import"./index-BlLk-Cpc.js";import"./iframe-DJCqPViV.js";import"./Button-CUHfRZHg.js";import"./createSimplePaletteValueFilter-rT-XZ6YK.js";import"./useTimeout-C_n07iHc.js";import"./ButtonBase-BNSbuHrY.js";import"./useForkRef-CGY_Jpnx.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CYiXRZxW.js";import"./useFiles-LRfWBx7T.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-ChWUMcnS.js";import"./OrientationBanner-s6eTZzEt.js";import"./index-BYyc2JrK.js";import"./spreadSx-CwcO6WA9.js";import"./react-D5cejL4U.js";import"./FullWidthAlert-D4jTY0fX.js";import"./Alert-B7NYi1K_.js";import"./useSlot-CpdUPpqd.js";import"./createSvgIcon-C2KnO3b1.js";import"./Close-BVMYX_2b.js";import"./IconButton-C7cq6q9W.js";import"./Paper-fh_aPiaL.js";import"./useTheme-DDFbBi03.js";import"./useTheme-D2m2JSWe.js";import"./Stack-U_7UVz7x.js";import"./extendSxProp-CBVJ6YUV.js";import"./getThemeProps-MT1NWnOz.js";import"./Box-DQcvacV7.js";import"./AlertTitle-Dl16SzKZ.js";import"./Typography-BbClb5JZ.js";import"./index-Dl9oXoY9.js";import"./ClickAwayListener-BgS_jDtg.js";import"./getReactElementRef-WVFk0XF3.js";import"./index-cmVBkNr4.js";import"./index-C-9IeJIn.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-tZoeOsj2.js";import"./Tooltip-Dl_Yp1xA.js";import"./index-BCiEuy_k.js";import"./useControlled-ByhA5hml.js";import"./Popper-BZ3v4Tpm.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-CxpB_4ZD.js";import"./QueryClientProvider-BUsydTN1.js";import"./Link-BgcZchnZ.js";import"./Collapse-BxntDTnK.js";import"./_baseUniq-DMKGI_1z.js";import"./_Uint8Array-_eNHEINi.js";import"./isArray-7RDBt840.js";import"./_getTag-DFujFdhf.js";import"./isEqual-DoNViL0q.js";import"./merge-DnwzsJk3.js";import"./_initCloneObject-BEyCVTwE.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CD2qHBnv.js";import"./inputBaseClasses-DEpJxZAI.js";import"./calculateFriendlyFileSize-BID7fkoL.js";import"./CheckCircleTwoTone-DcxIrYc5.js";import"./InfoTwoTone-B4Gj6T04.js";import"./useMutation-CZJJ3y2Z.js";import"./dayjs.min-CGHnQ1ES.js";import"./chunk-AYJ5UCUI-18XW2Mua.js";import"./cloneDeep-D14gkEBB.js";import"./Skeleton-DTvEDHoY.js";import"./SqlFunctions-C8HqQ3uk.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-CLGNl1Jm.js";import"./Backdrop-QgzGluVQ.js";import"./LinearProgress-CoFBfln6.js";import"./index-ynQydQ4g.js";import"./index-DRiF1ilQ.js";import"./index-CpmRDgvz.js";import"./const-BP60AzNb.js";import"./index-Cw5IOQQi.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
