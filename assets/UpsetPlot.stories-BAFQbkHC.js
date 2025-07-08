import{U as L}from"./UpsetPlot-C8_Ms2v-.js";import{f as u}from"./index-CjO7RG9v.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-F4dksbn2.js";import"./DefaultPropsProvider-COwBkssq.js";import"./createTheme-DKCGYC74.js";import"./index-C4cZfyta.js";import"./iframe-CQBsSkH1.js";import"./Button-E__CqjIq.js";import"./createSimplePaletteValueFilter-DHrQxoJ8.js";import"./useTimeout-CW0CeN_n.js";import"./ButtonBase-C-h7fRM9.js";import"./useForkRef-BF8W8g8e.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-K8HXy70m.js";import"./useFiles-EGfN7v81.js";import"./VerificationSubmission-CMrrYimb.js";import"./SynapseConstants-HZfgxyVC.js";import"./OrientationBanner-bKncPt7L.js";import"./index-AqVxOODs.js";import"./spreadSx-CwcO6WA9.js";import"./react-DOljhHAU.js";import"./FullWidthAlert-DnpZV_UO.js";import"./Alert-DcJw1Yal.js";import"./useSlot-DfJG0AmY.js";import"./createSvgIcon-DlknZ8DT.js";import"./Close-BoeY2J99.js";import"./IconButton-CwYzm24i.js";import"./Paper-DPyh2a0v.js";import"./useTheme-EUM0u8OS.js";import"./useTheme-CHQao_Ky.js";import"./Stack-2tRDeGT2.js";import"./extendSxProp-BrBmoHLs.js";import"./getThemeProps-B-F6rZRM.js";import"./Box-D9QD3wi2.js";import"./AlertTitle-DOFVO6ug.js";import"./Typography-Dt7Vbgv5.js";import"./index-BSdJvT-T.js";import"./ClickAwayListener-BMl-2hNa.js";import"./getReactElementRef-CpsFMufv.js";import"./index-GslO3b7v.js";import"./index-C8oq6Qy8.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-B2J6GiXL.js";import"./Tooltip-DmYP4Mhv.js";import"./index-CIMObRwO.js";import"./useControlled-mUKNRlyv.js";import"./Popper-ChHHXfih.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ZWLpjIdm.js";import"./useQuery-BlFfdln7.js";import"./QueryClientProvider-CIB_lo7b.js";import"./Link-BXKNZ-pa.js";import"./Collapse-DtwYkYUA.js";import"./_baseUniq-CvjW1C9G.js";import"./_Uint8Array-kotwdY3J.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-C483-sDY.js";import"./isArray-Dxzbedgu.js";import"./_getTag-CWYJuwg9.js";import"./isEqual-HSfSQqhG.js";import"./merge-D-oin5d0.js";import"./_initCloneObject-DytxOhH4.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Cy8MZmCt.js";import"./inputBaseClasses-8zZPEIN8.js";import"./calculateFriendlyFileSize-B9p2qUuN.js";import"./CheckCircleTwoTone-B4zrJ57y.js";import"./InfoTwoTone-sF1vwWjh.js";import"./useMutation-CdwcMr7m.js";import"./dayjs.min-prqqaKU9.js";import"./chunk-AYJ5UCUI-D3OBuXyF.js";import"./cloneDeep-D07pjg3R.js";import"./Skeleton-CisoqfmN.js";import"./SqlFunctions-c3WXx9n7.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-D3vhsPMy.js";import"./Backdrop-SNOQ9i5-.js";import"./LinearProgress-DH3vhbB2.js";import"./index-e3ytpTBc.js";import"./index-Cc6-H5UZ.js";import"./index-Cn3yg7jF.js";import"./const-BP60AzNb.js";import"./index-DQN2NjaT.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const Xt=["Demo","ElitePortalDemo","AMPALSPortalVariant"];export{r as AMPALSPortalVariant,t as Demo,o as ElitePortalDemo,Xt as __namedExportsOrder,Kt as default};
