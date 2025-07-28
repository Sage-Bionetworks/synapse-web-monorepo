import{U as L}from"./UpsetPlot-D7Ciq2-Z.js";import{f as u}from"./index-CA4pmvjn.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-DieRa6Hr.js";import"./DefaultPropsProvider-DGwxxiOV.js";import"./createTheme-BrtesNaL.js";import"./index-D2DVVrZC.js";import"./iframe-DEj1FbhD.js";import"./Button-B9JExKBE.js";import"./createSimplePaletteValueFilter-BzVPQ0Is.js";import"./useTimeout-B8omw9oy.js";import"./ButtonBase-qh3ge3Iz.js";import"./useForkRef-DnXT39nc.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-C4Y_z_Lj.js";import"./useFiles-Bv--fwl9.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-DNVKW_0P.js";import"./OrientationBanner-D2acI3Y0.js";import"./index-Den6D1hk.js";import"./spreadSx-CwcO6WA9.js";import"./react-Br2nhtEr.js";import"./FullWidthAlert-DLvYc-mK.js";import"./Alert-C4xJaD5r.js";import"./useSlot-CRgDYWsW.js";import"./createSvgIcon-9hLuZfsj.js";import"./Close-S8c1l9gS.js";import"./IconButton-BPWJJaNr.js";import"./Paper-rrh4EhEU.js";import"./useTheme-DQcaU_c0.js";import"./useTheme-CCwBo4L7.js";import"./Stack-DYSZnyeP.js";import"./extendSxProp-oFnhdn5m.js";import"./getThemeProps-DwMcYXae.js";import"./Box-C2mf0bBj.js";import"./AlertTitle-BXcy4_le.js";import"./Typography-CA5VtOac.js";import"./index-oV3RSY5s.js";import"./ClickAwayListener-ByPpYTg0.js";import"./getReactElementRef-CsMZkxrX.js";import"./index-BG1FSV2G.js";import"./index-BvuoCrXu.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-RewzRyPY.js";import"./Tooltip-BlvtctqX.js";import"./index-Cc771K3C.js";import"./useControlled-CEEWwcxf.js";import"./Popper-BBBa4RhT.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BYEtqtR3.js";import"./useQuery-Dd5Ly_-E.js";import"./QueryClientProvider-DZqp77rY.js";import"./Link-DJri5NVw.js";import"./Collapse-BGZ_EW0U.js";import"./_baseUniq-CsGa5lG1.js";import"./_Uint8Array-C1otOYDC.js";import"./isArray-C99RcUWQ.js";import"./_getTag-e_BxTD0p.js";import"./isEqual-BfYFzBkA.js";import"./merge-BF3GtWz9.js";import"./_initCloneObject-C4FgYO8g.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CLINBJ41.js";import"./inputBaseClasses-DUNxg_pL.js";import"./calculateFriendlyFileSize-Cq4ARSZt.js";import"./CheckCircleTwoTone-CSRW2OkR.js";import"./InfoTwoTone-CeCPPG8P.js";import"./useMutation-Nj2toVn8.js";import"./dayjs.min-BZCkXBA6.js";import"./chunk-AYJ5UCUI-DNYbjiDO.js";import"./cloneDeep-DeaEDQra.js";import"./Skeleton-C8CXK6y4.js";import"./SqlFunctions-Dcy2rA-G.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BIcb3ZkC.js";import"./Backdrop-HcGKAkd-.js";import"./LinearProgress-QTVwXdJS.js";import"./index-BoxmSfcc.js";import"./index-CqK2r2YQ.js";import"./index-CuEMPPc7.js";import"./const-BP60AzNb.js";import"./index-Bm2n_KyF.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
