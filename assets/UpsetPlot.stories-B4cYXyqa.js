import{U as L}from"./UpsetPlot-DtJHYGyd.js";import{f as u}from"./index-CwWvSTfa.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-C-PiKlNQ.js";import"./DefaultPropsProvider-Cw6x8ixs.js";import"./createTheme-CzZhU4mT.js";import"./index-Bclfwf2c.js";import"./iframe-BwmT6DnA.js";import"./Button-CMsK5jkJ.js";import"./createSimplePaletteValueFilter-CHJUaE6s.js";import"./useTimeout-DQRToeqs.js";import"./ButtonBase-BanSt4k6.js";import"./useForkRef-DrhSOHJn.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-eGIE85BV.js";import"./useFiles-CabKz2BX.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-s7AVu6sL.js";import"./OrientationBanner-BK2mf2Th.js";import"./index-XnoiuBUV.js";import"./spreadSx-CwcO6WA9.js";import"./react-D0WT0Cnf.js";import"./FullWidthAlert-Cg_Edw0M.js";import"./Alert-DsoayRUU.js";import"./useSlot--qVLG9rV.js";import"./createSvgIcon-Bbg0YSe_.js";import"./Close-CTF-FaFj.js";import"./IconButton-C2yfwCnc.js";import"./Paper-C-MxAE3X.js";import"./useTheme-DBez2_uP.js";import"./useTheme-B2qwNNbc.js";import"./Stack-B8lUTm_5.js";import"./useThemeProps-BkMB52f-.js";import"./getThemeProps-BgWx5ja4.js";import"./extendSxProp-Cy_w0M7c.js";import"./Box-Dif21-Ta.js";import"./AlertTitle-Xjxp6dYf.js";import"./Typography-CR9HyBtT.js";import"./index-_J9zFtLw.js";import"./ClickAwayListener-BQ-icjcb.js";import"./getReactElementRef-rMJwrBoh.js";import"./index-Wtgxe081.js";import"./index-DfrTKupj.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-AhBpZALS.js";import"./Tooltip-BcHs3bh9.js";import"./index-CFBjFAlj.js";import"./useControlled-sVn0qm5_.js";import"./Popper-CqTlDTef.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-B9rRePvy.js";import"./QueryClientProvider-Dc7Y7gmt.js";import"./Link-DpQKU4aY.js";import"./Collapse-CvW24kl2.js";import"./_baseUniq-X4u6lSY4.js";import"./_Uint8Array-C8WR35dk.js";import"./isArray-Bjvy55fd.js";import"./_getTag-DMyVPIGy.js";import"./isEqual-CBygoy8c.js";import"./noop-DX6rZLP_.js";import"./merge-D_9vdqan.js";import"./_initCloneObject-DFlTj-VM.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-B2NLaioE.js";import"./inputBaseClasses-CS9kB3iA.js";import"./calculateFriendlyFileSize-Cz7skY0R.js";import"./CheckCircleTwoTone-Dsau-jpM.js";import"./InfoTwoTone-B7Emrovp.js";import"./useMutation-DmB6IlS-.js";import"./dayjs.min-BYIiwRKv.js";import"./chunk-AYJ5UCUI-DdNkrdCt.js";import"./cloneDeep-Cr5aOjXu.js";import"./Skeleton-CsmpLdqI.js";import"./SqlFunctions-B8wRZva4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-ML8Hc_Q1.js";import"./Backdrop-CH7Pq-xS.js";import"./LinearProgress-Cp5_MWGL.js";import"./index-gQzc_nxj.js";import"./index-Bdhymuba.js";import"./index-njxKQixz.js";import"./const-BP60AzNb.js";import"./index-4qlpCy2p.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
