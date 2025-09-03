import{U as L}from"./UpsetPlot-Brm1g-wE.js";import{f as u}from"./index-B8A8E30k.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-C4zdTyDJ.js";import"./DefaultPropsProvider-DcOZysit.js";import"./createTheme-CiUfzjCM.js";import"./index-yvy-db2D.js";import"./iframe-1q_ZXoNJ.js";import"./Button-r7xQACsx.js";import"./createSimplePaletteValueFilter-C1zgnp1T.js";import"./useTimeout-DNwjqBRA.js";import"./ButtonBase-Gt11VN7t.js";import"./useForkRef-beRYI9rx.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-B4CUiK17.js";import"./useFiles-BY7RR_24.js";import"./VerificationSubmission-CDh9xETu.js";import"./SynapseConstants-5wFUozBC.js";import"./OrientationBanner-Bi-PGINz.js";import"./index-CtXvjQZG.js";import"./spreadSx-CwcO6WA9.js";import"./react-Z8wD_rYz.js";import"./FullWidthAlert-CoE9vDR_.js";import"./Alert-DCknF0A6.js";import"./useSlot-Z2GA-iSS.js";import"./createSvgIcon-CL-Zh4hn.js";import"./Close-seSZeBuJ.js";import"./IconButton-dJCsQ0LH.js";import"./Paper-xpThwoIG.js";import"./useTheme-CVLuf0XX.js";import"./useTheme-BJkLbB1K.js";import"./Stack-xD0mjSDc.js";import"./extendSxProp-BVtlM31J.js";import"./getThemeProps-BueUQJN-.js";import"./Box-VPHC_qet.js";import"./AlertTitle-BToGfpRY.js";import"./Typography-C40mCnbz.js";import"./index-Dfz0lUif.js";import"./ClickAwayListener-D5QI5yc9.js";import"./getReactElementRef-ByzYBIwj.js";import"./index-xIq1_iwD.js";import"./index-C5pH_wbS.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-A-RAayFp.js";import"./Tooltip-DCFIcbMu.js";import"./index-Q8rg9TUC.js";import"./useControlled-CPCJ5tB0.js";import"./Popper-DIjI2LY0.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-_BY2npJD.js";import"./useQuery-X6st-VlV.js";import"./QueryClientProvider-DdXPuLGz.js";import"./Link-CWqmhl9r.js";import"./Collapse-8g1xf4pi.js";import"./_baseUniq-CsyBfxx_.js";import"./_Uint8Array-c111EMGA.js";import"./isArray-CGnJ5Q6W.js";import"./_getTag-CvnuNdI4.js";import"./isEqual-CoOAKsPN.js";import"./merge-BIptyiay.js";import"./_initCloneObject-BRxCbDFA.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-JTkPoVCR.js";import"./inputBaseClasses-CHfnDXYO.js";import"./calculateFriendlyFileSize-CbAXs_BD.js";import"./CheckCircleTwoTone-BmvHMB2T.js";import"./InfoTwoTone-Cq9CFdau.js";import"./useMutation-DGiPDpom.js";import"./dayjs.min-B9RRCe8t.js";import"./chunk-AYJ5UCUI-CnetVj3K.js";import"./cloneDeep-BzGc9IrP.js";import"./Skeleton-JmOEAHCD.js";import"./SqlFunctions-BjspnTaW.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-Y24V_y_i.js";import"./Backdrop-Dg9gjJPA.js";import"./LinearProgress-KqsmKarF.js";import"./index-8wtH1IGW.js";import"./index-DcWFO_e5.js";import"./index-TQOOA1mr.js";import"./const-BP60AzNb.js";import"./index-0aoDX4dz.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
