import{U as L}from"./UpsetPlot-23zJ0Y4h.js";import{f as u}from"./index-Nk0IGOd2.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-Bka7eYzT.js";import"./DefaultPropsProvider-CTjt-8zY.js";import"./createTheme-Dtg1wCfy.js";import"./index-DkZoFfx5.js";import"./iframe-CJGpPw1o.js";import"./Button-CTFpvydl.js";import"./createSimplePaletteValueFilter-LSon_xMw.js";import"./useTimeout-DNT-m6g2.js";import"./ButtonBase-BSY_LTtp.js";import"./useForkRef-CtY8tP-S.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-s3w59CRq.js";import"./useFiles-CbBRbdWd.js";import"./VerificationSubmission-CMrrYimb.js";import"./SynapseConstants-hGLgqndx.js";import"./OrientationBanner-LNBCfYfH.js";import"./index-CISyF1wU.js";import"./spreadSx-CwcO6WA9.js";import"./react-DWAK326i.js";import"./FullWidthAlert-Ds5AKV0w.js";import"./Alert-lOqTDc-9.js";import"./useSlot-CfUlgWNz.js";import"./createSvgIcon-CwCmRHkO.js";import"./Close-JKkcByth.js";import"./IconButton-BLCtip1h.js";import"./Paper-LciGP85z.js";import"./useTheme-CXYb8IF2.js";import"./useTheme-C4HCFZHP.js";import"./Stack-BLpiiIjx.js";import"./extendSxProp-CYcqzPHY.js";import"./getThemeProps-BaW3Ifvr.js";import"./Box-FjMdCpDL.js";import"./AlertTitle-DTh08hre.js";import"./Typography-BMMlqfE7.js";import"./index-Bjxfhvit.js";import"./ClickAwayListener-E1JwztXI.js";import"./getReactElementRef-CBu9u29I.js";import"./index-Ce22gE6o.js";import"./index-B8db3wfS.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BztBxul1.js";import"./Tooltip-DwQWb7MM.js";import"./index-COz8OLTi.js";import"./useControlled-DOk0F4HW.js";import"./Popper-DaDJ3xMM.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ZWLpjIdm.js";import"./useQuery-BocMyuEp.js";import"./QueryClientProvider-Fcgj1TIf.js";import"./Link-C70H0Bqq.js";import"./Collapse-CoYpk6qA.js";import"./_baseUniq-B58wj4F5.js";import"./_Uint8Array-CWPMNhMM.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-gtGhcZ58.js";import"./isArray-Dxzbedgu.js";import"./_getTag-Bsb1WP3m.js";import"./isEqual-B0nVun5r.js";import"./merge-baTrsKZw.js";import"./_initCloneObject-_8OEWLLi.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Cfl-Ls-r.js";import"./inputBaseClasses-7JASpf1p.js";import"./calculateFriendlyFileSize-BHiHoeD-.js";import"./CheckCircleTwoTone-E3L7TLM1.js";import"./InfoTwoTone-CgpYnPu0.js";import"./useMutation-GNMVsm5g.js";import"./dayjs.min-DZYVRRJw.js";import"./chunk-AYJ5UCUI-B_wjLnLE.js";import"./cloneDeep-B0wNp5n_.js";import"./Skeleton-CqA2478q.js";import"./SqlFunctions-c3WXx9n7.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-JvyUhra_.js";import"./Backdrop-1VX5YWHV.js";import"./LinearProgress-DNeKJ3-7.js";import"./index-DAX2k5kU.js";import"./index-CUA6bzzf.js";import"./index-7e3xwC9u.js";import"./const-BP60AzNb.js";import"./index-BceLsEV7.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
