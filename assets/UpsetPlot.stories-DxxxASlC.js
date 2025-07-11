import{U as L}from"./UpsetPlot-Cy5D02Ku.js";import{f as u}from"./index-BEpi1Pkt.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-CR_BOnUG.js";import"./DefaultPropsProvider-DeTWygJX.js";import"./createTheme-X1uAO7Ls.js";import"./index-BGNdVh4R.js";import"./iframe-AE1mdQoy.js";import"./Button-B1gMTkV-.js";import"./createSimplePaletteValueFilter-UFX2hhfO.js";import"./useTimeout-DgF5bVxv.js";import"./ButtonBase-CNobuHaW.js";import"./useForkRef-C2dIUn0r.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Dy4elvdO.js";import"./useFiles-Cicb2Fab.js";import"./VerificationSubmission-NmfK1W18.js";import"./SynapseConstants-CTkk0YcO.js";import"./OrientationBanner-BlUDpySg.js";import"./index-DQ--YI-K.js";import"./spreadSx-CwcO6WA9.js";import"./react-Cuejj4jT.js";import"./FullWidthAlert-Be2gwQj0.js";import"./Alert-CrqIY-wz.js";import"./useSlot-CPEJSkHd.js";import"./createSvgIcon-CvselUDy.js";import"./Close-C_qvVBoC.js";import"./IconButton-C680_5sO.js";import"./Paper-BG7l0_y8.js";import"./useTheme-Mm30pFmH.js";import"./useTheme-DIi1T6MV.js";import"./Stack-lzsMsHwx.js";import"./extendSxProp-DtVryybG.js";import"./getThemeProps-DdP4bzUV.js";import"./Box-L0O0STFf.js";import"./AlertTitle-CfXld3PK.js";import"./Typography-D1X9pdoV.js";import"./index-C_i8MycT.js";import"./ClickAwayListener-0YWAWQC6.js";import"./getReactElementRef-DtWA-gMz.js";import"./index-DsBOwLp_.js";import"./index-DxPajm_D.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BShcMnXs.js";import"./Tooltip-CZAWndgC.js";import"./index-CqiNrveo.js";import"./useControlled-DQbRxG7o.js";import"./Popper-Dq6SXrQt.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-B_5XOlz9.js";import"./QueryClientProvider-Bh11H2Tx.js";import"./Link-YzWgcoa0.js";import"./Collapse-DXtiwbuY.js";import"./_baseUniq-d9dUqTFO.js";import"./_Uint8Array-BwRsIvdr.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-3QLBOayV.js";import"./isArray-Dxzbedgu.js";import"./_getTag-DrMv2q-5.js";import"./isEqual-MO8O5CIC.js";import"./merge-CPwsaWlS.js";import"./_initCloneObject-DRS-e6dQ.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BZMDodWD.js";import"./inputBaseClasses-DGNggaF4.js";import"./calculateFriendlyFileSize-CT4UXWlw.js";import"./CheckCircleTwoTone-BJFSGkoY.js";import"./InfoTwoTone-C-EnLn6a.js";import"./useMutation-DZs3LBGN.js";import"./dayjs.min-BRrhIEIv.js";import"./chunk-AYJ5UCUI-C8bXuSzp.js";import"./cloneDeep-C4z9jnuA.js";import"./Skeleton-xTAD3frA.js";import"./SqlFunctions-CqOxgBqv.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BfiG0_Gw.js";import"./Backdrop-BRgERwgO.js";import"./LinearProgress-BzS2ruNS.js";import"./index-BeMBtiFU.js";import"./index-DiQS-nwQ.js";import"./index-DxtvDlHJ.js";import"./const-BP60AzNb.js";import"./index-C3rnqkPR.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
