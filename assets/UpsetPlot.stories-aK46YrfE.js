import{U as L}from"./UpsetPlot-CTo4jQ1V.js";import{f as u}from"./index-Dm3cMQJO.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-BAywAsax.js";import"./DefaultPropsProvider-CrrxgVPq.js";import"./createTheme-CyTLEU3i.js";import"./index-BdUAYS9h.js";import"./iframe-CpJoLHmY.js";import"./Button-DC_qvPIS.js";import"./createSimplePaletteValueFilter-C6dToHOG.js";import"./useTimeout-Cde0jI0k.js";import"./ButtonBase-DQ_Dc5W1.js";import"./useForkRef-BYJIK3bI.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-PI0728JC.js";import"./useFiles-DgHx6Fcc.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-DGyiOG2g.js";import"./OrientationBanner-Dg3sFsFB.js";import"./index-BFkvzL3d.js";import"./spreadSx-CwcO6WA9.js";import"./react-D1smhX9V.js";import"./FullWidthAlert-NrRGzUzR.js";import"./Alert-BZkkNxmN.js";import"./useSlot-BFkGEdWp.js";import"./createSvgIcon-CQtqRFBT.js";import"./Close-BveyDO89.js";import"./IconButton-CV35gqz1.js";import"./Paper-uMerSr0J.js";import"./useTheme-IErwV-Ug.js";import"./useTheme-ClrSPtrJ.js";import"./Stack-zXk8gjNn.js";import"./extendSxProp-CPzueTmv.js";import"./getThemeProps-DtfOwbG6.js";import"./Box-Dyy71dSi.js";import"./AlertTitle-C2NB19_E.js";import"./Typography-DtWAgXAy.js";import"./index-CqQRnKb9.js";import"./ClickAwayListener-l3nc9S5t.js";import"./getReactElementRef-DLKh61Wu.js";import"./index-C6AkVaeY.js";import"./index-DPcBfgK1.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CuumPSVk.js";import"./Tooltip-BRwDLAyh.js";import"./index-CWp-JoAj.js";import"./useControlled-oba0F23J.js";import"./Popper-B4kjXWcz.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-8wNQI5yr.js";import"./QueryClientProvider-COZl3LvE.js";import"./Link-HYpi97nk.js";import"./Collapse-CHQWLyDp.js";import"./_baseUniq-CFJWH6fy.js";import"./_Uint8Array-DKtfINLr.js";import"./isArray-DbAuuatd.js";import"./_getTag-D3pOfrS4.js";import"./isEqual-Bob0DS1n.js";import"./merge-Xtgp757m.js";import"./_initCloneObject-D_ChcyVf.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BbISf70S.js";import"./inputBaseClasses-D_EUhFSv.js";import"./calculateFriendlyFileSize-DN2lkErt.js";import"./CheckCircleTwoTone-CZFnuvZG.js";import"./InfoTwoTone-A_M6B1fv.js";import"./useMutation-eF8r02NM.js";import"./dayjs.min-CdID1Wrq.js";import"./chunk-AYJ5UCUI-D8grMOqq.js";import"./cloneDeep-C6yg3ATo.js";import"./Skeleton-CVb7LHcV.js";import"./SqlFunctions-B6aZ8mL4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DUA7R9WT.js";import"./Backdrop-Dmteeurx.js";import"./LinearProgress-8ekgT4MY.js";import"./index-C5FaYWBA.js";import"./index-XyBcCryI.js";import"./index-DXI_DtsS.js";import"./const-BP60AzNb.js";import"./index-BAx9So0M.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
