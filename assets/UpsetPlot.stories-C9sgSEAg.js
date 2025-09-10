import{U as L}from"./UpsetPlot-BaYggjr4.js";import{f as u}from"./index-BPft8YFV.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-DJWWktWI.js";import"./DefaultPropsProvider-D2MKCCrb.js";import"./createTheme-BWIyDVrX.js";import"./index-D9ihYNBM.js";import"./iframe-pqb1pWSd.js";import"./Button-D5076Oxi.js";import"./createSimplePaletteValueFilter-BNigTjTM.js";import"./useTimeout-Bn2K5TYG.js";import"./ButtonBase-Z-MGLh88.js";import"./useForkRef-B6xUNni8.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-B0zbCkH8.js";import"./useFiles-DfvSHy59.js";import"./VerificationSubmission-16RBrwfH.js";import"./SynapseConstants-DBaXNK7e.js";import"./OrientationBanner-i6W0EBQp.js";import"./index-B5ZWLZ5-.js";import"./spreadSx-CwcO6WA9.js";import"./react-CeveDELd.js";import"./FullWidthAlert-R0M4V0bV.js";import"./Alert-CjbkLLmN.js";import"./useSlot-DtUY8ilh.js";import"./createSvgIcon-BmRPqEb8.js";import"./Close-BEVHtHX9.js";import"./IconButton-DAJFbbML.js";import"./Paper-mhgVS_uG.js";import"./useTheme-DO7dZYA7.js";import"./useTheme-D1zuUO8e.js";import"./Stack-BSZBaPmG.js";import"./extendSxProp-9cMljFx5.js";import"./getThemeProps-DNYjrSwN.js";import"./Box-mWMALOus.js";import"./AlertTitle-m68_MPj5.js";import"./Typography-7LVqlzoQ.js";import"./index-CwGSJ5dj.js";import"./ClickAwayListener-DcwV8dky.js";import"./getReactElementRef-Ps-f7eKg.js";import"./index-XxObJK5o.js";import"./index-nNjREFEA.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DzrXL7gM.js";import"./Tooltip-BKdee5xx.js";import"./index-D65xsDcS.js";import"./useControlled-CrGo9MTn.js";import"./Popper-BeeuG86A.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-B_EIkN_W.js";import"./useQuery-DdLEtQxq.js";import"./QueryClientProvider-CGLdhYBU.js";import"./Link-lxWKc_ox.js";import"./Collapse-Bv5dU9k5.js";import"./_baseUniq-BmE0A_Xr.js";import"./_Uint8Array-BWgfEmFY.js";import"./isArray-xHMFFYhw.js";import"./_getTag-Gpw-hnp_.js";import"./isEqual-DhLJQUGp.js";import"./merge-C2LH0t1x.js";import"./_initCloneObject-CfrF0OoR.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BIiVZsiZ.js";import"./inputBaseClasses-BXrTwmtb.js";import"./calculateFriendlyFileSize-Da5J-8Wb.js";import"./CheckCircleTwoTone-BDAODfpi.js";import"./InfoTwoTone-CxGbcOZj.js";import"./useMutation-9nl8qwzg.js";import"./dayjs.min-fPgISjHY.js";import"./chunk-AYJ5UCUI-Be12IADQ.js";import"./cloneDeep-BDjbbeKs.js";import"./Skeleton-B7HWIVJV.js";import"./SqlFunctions-BeciCvGs.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DSdAJTyR.js";import"./Backdrop-DHEWrQNO.js";import"./LinearProgress-CpxbK2cj.js";import"./index-CyVuAMJC.js";import"./index-CNh-thWT.js";import"./index-BVq-Q4y1.js";import"./const-BP60AzNb.js";import"./index-DFCW93Q1.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
