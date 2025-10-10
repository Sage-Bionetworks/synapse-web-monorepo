import{U as L}from"./UpsetPlot-BzQeHOY7.js";import{f as u}from"./index-DobT5OHt.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-CcwOLyGh.js";import"./DefaultPropsProvider-BNmp3YDg.js";import"./createTheme-QOrAiC8v.js";import"./index-BAUB8VxZ.js";import"./iframe-CEgLHbLB.js";import"./Button-C6MKCi2u.js";import"./createSimplePaletteValueFilter-Dk8LfQw2.js";import"./useTimeout-YGtm5ulj.js";import"./ButtonBase-Xz_eRae2.js";import"./useForkRef-BOC0myPy.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-ePAruf6a.js";import"./useFiles-D9eBDzux.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-BzHhhFhS.js";import"./OrientationBanner-D3KAsP4w.js";import"./index-Ceq_OOHv.js";import"./spreadSx-CwcO6WA9.js";import"./react-YFCJrhYh.js";import"./FullWidthAlert-T2yM82RP.js";import"./Alert-CXVLc8vo.js";import"./useSlot-DvaOHrx3.js";import"./createSvgIcon-cYtzdOwk.js";import"./Close-NLvB7XHm.js";import"./IconButton-BFqyrDq4.js";import"./Paper-B6p4m8Ct.js";import"./useTheme-DC3v4V5z.js";import"./useTheme-CE_afK7b.js";import"./Stack-CAodq4L2.js";import"./useThemeProps-Q4q-imGj.js";import"./getThemeProps-CB6wP6r1.js";import"./extendSxProp-68QBnwPw.js";import"./Box-CJ_mc_KC.js";import"./AlertTitle-ysdi09bF.js";import"./Typography-DBeu9HJZ.js";import"./index-Byhwwvse.js";import"./ClickAwayListener-DHpiF-gd.js";import"./getReactElementRef-o5Cru5cj.js";import"./index-dVVgrbsH.js";import"./index-DZrE4oxZ.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-OlzdlbwJ.js";import"./Tooltip-D5KeB_wU.js";import"./index-BTEM2iTZ.js";import"./useControlled-CI2yt4-5.js";import"./Popper-DIHHlKWR.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-DUgtzxZD.js";import"./QueryClientProvider-Db2j_WHz.js";import"./Link-Cez3cIoy.js";import"./Collapse-DrBAZrf0.js";import"./_baseUniq-C6s3Loyy.js";import"./_Uint8Array-CY2fm9S_.js";import"./isArray-fTt9doPm.js";import"./_getTag-wZmIsRPD.js";import"./isEqual-CSeg9Uiq.js";import"./noop-DX6rZLP_.js";import"./merge-D2adZoeu.js";import"./_initCloneObject-BfCQnLPN.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-D7n7NZNC.js";import"./inputBaseClasses-CVINOxDr.js";import"./calculateFriendlyFileSize-BvXrAxXk.js";import"./CheckCircleTwoTone-D4WLn7r6.js";import"./InfoTwoTone-Cd8riuW_.js";import"./useMutation-DbSD0zUI.js";import"./dayjs.min-Bq55Fdj0.js";import"./chunk-AYJ5UCUI-C9vLqfh1.js";import"./cloneDeep-D1-JOxW9.js";import"./Skeleton-C0B6B6Td.js";import"./SqlFunctions-B8wRZva4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-8xr-s-oZ.js";import"./Backdrop-D1kaju81.js";import"./LinearProgress-DPDAOGeP.js";import"./index-BdtvuP2C.js";import"./index-D3zZJKpo.js";import"./index-09x9rKLA.js";import"./const-BP60AzNb.js";import"./index-BL06NoFi.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
