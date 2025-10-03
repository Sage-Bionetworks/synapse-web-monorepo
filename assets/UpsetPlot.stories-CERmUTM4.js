import{U as L}from"./UpsetPlot-DepUBYvX.js";import{f as u}from"./index-DP_VMKa7.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-CyHqQTZq.js";import"./DefaultPropsProvider-CuIKnw1u.js";import"./createTheme-CLaEDdPQ.js";import"./index-DVkvcA_X.js";import"./iframe-DXTuuIB8.js";import"./Button-D1pRKzJ5.js";import"./createSimplePaletteValueFilter-aDgbEVGf.js";import"./useTimeout-DXFIOS9o.js";import"./ButtonBase-DDJ8Zik5.js";import"./useForkRef-D52SqoyK.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-WyX1suUl.js";import"./useFiles-BcOp3J9q.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-Djz1eDCb.js";import"./OrientationBanner-0SatnoWN.js";import"./index-Cgp7Fr2y.js";import"./spreadSx-CwcO6WA9.js";import"./react-JO-gccfv.js";import"./FullWidthAlert-eBuHzIDT.js";import"./Alert-BY5VRYB8.js";import"./useSlot-C_1XBrUD.js";import"./createSvgIcon-C5j-w5qY.js";import"./Close-DfOEo3ot.js";import"./IconButton-DGIQFJcy.js";import"./Paper-wIcb_i9m.js";import"./useTheme-B62f1yoy.js";import"./useTheme-C1P9mfNV.js";import"./Stack-DiF77Lkk.js";import"./extendSxProp-DSZ__TYT.js";import"./getThemeProps-OHGuBYlk.js";import"./Box-DEh918aS.js";import"./AlertTitle-D_ekppPW.js";import"./Typography-B1PObzbp.js";import"./index-B3S2GMAT.js";import"./ClickAwayListener--qQuedCY.js";import"./getReactElementRef-DTGtnvkV.js";import"./index-BzJMSVrG.js";import"./index-MAwSiZZZ.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BWoXoFY0.js";import"./Tooltip-DGMS6sKu.js";import"./index-2_-RNHTx.js";import"./useControlled-DMZfhKvt.js";import"./Popper-Bj4y9GNA.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-2oV4dAcJ.js";import"./QueryClientProvider-NT-Ok-dU.js";import"./Link-HDokgQ6f.js";import"./Collapse-DMxkdKx1.js";import"./_baseUniq-B-3xrBnc.js";import"./_Uint8Array-DYT8ocWE.js";import"./isArray-DO6yf-4A.js";import"./_getTag-DUjOkMuI.js";import"./isEqual-CWB7x7bo.js";import"./merge-CJQInoiv.js";import"./_initCloneObject-dH7HCR6T.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DuYHphZs.js";import"./inputBaseClasses-DyQj29gk.js";import"./calculateFriendlyFileSize-CzSgR5ke.js";import"./CheckCircleTwoTone-B5xperQI.js";import"./InfoTwoTone-k2lsfCRJ.js";import"./useMutation-CRoKKj0V.js";import"./dayjs.min-DpfhmZH9.js";import"./chunk-AYJ5UCUI-BxVsfoL4.js";import"./cloneDeep-BIlo70rr.js";import"./Skeleton-BUuixYV7.js";import"./SqlFunctions-B6aZ8mL4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-Ba5R_L0Y.js";import"./Backdrop-B4vQzNF8.js";import"./LinearProgress-K-IXbPLh.js";import"./index-CX6CFfUc.js";import"./index-BK52U-Hf.js";import"./index-5HfXV_MQ.js";import"./const-BP60AzNb.js";import"./index-M2uaD2hX.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
