import{U as L}from"./UpsetPlot-BlJXXwqn.js";import{f as u}from"./index-BbU2UQVs.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-Bvwu7Xcd.js";import"./DefaultPropsProvider-BQKHGYt3.js";import"./createTheme-CSYFy0tJ.js";import"./index-kApR6eUD.js";import"./iframe-C1nR21KR.js";import"./Button-vFqvsZ_S.js";import"./createSimplePaletteValueFilter-BXSts7e0.js";import"./useTimeout-qFNtREIo.js";import"./ButtonBase-Ul-e6mur.js";import"./useForkRef-ClT4czLv.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BdT7iClJ.js";import"./useFiles-CQZM7AjY.js";import"./VerificationSubmission-D0sL2gwz.js";import"./SynapseConstants-D1Rd9Fix.js";import"./OrientationBanner-CQSEzNQc.js";import"./index-CmJRSThR.js";import"./spreadSx-CwcO6WA9.js";import"./react-DHAib5XX.js";import"./FullWidthAlert-_-vUMgq2.js";import"./Alert-B2tMfc0Q.js";import"./useSlot-BJdZFJin.js";import"./createSvgIcon-CaNkmE0v.js";import"./Close-C_G8zN6d.js";import"./IconButton-CajfBzdr.js";import"./Paper-Jv25uXd0.js";import"./useTheme-CB1lVSGz.js";import"./useTheme-Cm7toniF.js";import"./Stack-YS6NY2uD.js";import"./extendSxProp-CXwrbAFG.js";import"./getThemeProps-D9JdBzab.js";import"./Box-CTd7KeGu.js";import"./AlertTitle-TjF0o3BZ.js";import"./Typography-CKnFtURh.js";import"./index-CeYZXjHS.js";import"./ClickAwayListener-DhMDdb_T.js";import"./getReactElementRef-DnTIc2Hk.js";import"./index-BpvY6iLc.js";import"./index-DmsJ0_Ye.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-D--k5b0i.js";import"./Tooltip-BSA_yst_.js";import"./index-DVkUNgxp.js";import"./useControlled-6B2E2-2f.js";import"./Popper-DCKxGQ65.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bt2r5KGg.js";import"./useQuery-EF-nh5FZ.js";import"./QueryClientProvider-D7uLIhi_.js";import"./Link-BfpLPVbK.js";import"./Collapse-DcHWYaIp.js";import"./_baseUniq-Dl2e6RlB.js";import"./_Uint8Array-BepIjRsc.js";import"./isArray-iHViX0It.js";import"./_getTag-CTo9qp6D.js";import"./isEqual-BiownIIs.js";import"./merge-Cg28nVdS.js";import"./_initCloneObject-BPrGxJGL.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DqWfp0OJ.js";import"./inputBaseClasses-B7QkOVaL.js";import"./calculateFriendlyFileSize-BFr0UfNA.js";import"./CheckCircleTwoTone-BYpjdEsB.js";import"./InfoTwoTone-mxiRZzIp.js";import"./useMutation-DihXsUK8.js";import"./dayjs.min-BBH-MskI.js";import"./chunk-AYJ5UCUI-CvWcFBw0.js";import"./cloneDeep-8BIV-kZZ.js";import"./Skeleton-Dkoro0nH.js";import"./SqlFunctions-D9jcfCB0.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DAG_MbAt.js";import"./Backdrop-DlI1NmD4.js";import"./LinearProgress-CI0ToNc1.js";import"./index-CnzKtL97.js";import"./index-kCXo0dB8.js";import"./index-C5-Z4CsP.js";import"./const-BP60AzNb.js";import"./index-CExntQl7.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
