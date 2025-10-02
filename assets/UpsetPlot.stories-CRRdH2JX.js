import{U as L}from"./UpsetPlot-RhzQ8vwk.js";import{f as u}from"./index-DXyWqnNI.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-1tV3CpqU.js";import"./DefaultPropsProvider-CQjsmjzx.js";import"./createTheme-Cm05LnB0.js";import"./index-BXzTDALf.js";import"./iframe-DqtMJ7kH.js";import"./Button-CBJLa-RB.js";import"./createSimplePaletteValueFilter-VPPSjR6x.js";import"./useTimeout-CAjSMdh0.js";import"./ButtonBase-C2aQNHr6.js";import"./useForkRef-DxVghhL0.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DF4qmzkO.js";import"./useFiles-DKVd1YTG.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-B4Tpha3X.js";import"./OrientationBanner-D1Gj-0BO.js";import"./index-BTulVV7N.js";import"./spreadSx-CwcO6WA9.js";import"./react-CkRYgY7R.js";import"./FullWidthAlert-BvHis07F.js";import"./Alert-D5JDd2WV.js";import"./useSlot-D-kym-2K.js";import"./createSvgIcon--QUYyvLe.js";import"./Close-CovftTFs.js";import"./IconButton-CSrxkIE2.js";import"./Paper-BQ-oZy9Y.js";import"./useTheme-BEoXmG8b.js";import"./useTheme-Bw_VFAy_.js";import"./Stack-DpwU85K6.js";import"./extendSxProp-NTFwLVkN.js";import"./getThemeProps-Cdnw0_MW.js";import"./Box-Bc5MnF01.js";import"./AlertTitle-CZt34-cU.js";import"./Typography-ButTJgkW.js";import"./index-C6TBygr3.js";import"./ClickAwayListener-TNChXEbJ.js";import"./getReactElementRef-12JOJnF4.js";import"./index-Bd4oQ-C2.js";import"./index-DseqZZS0.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DDeYcOcx.js";import"./Tooltip-D_YYABAH.js";import"./index-CNgLHgad.js";import"./useControlled-BVj0-e3Z.js";import"./Popper-Bf618VVA.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-DwiEHutI.js";import"./QueryClientProvider-Bbxj_eMn.js";import"./Link-BkSZL4Ts.js";import"./Collapse-DY2HFmzv.js";import"./_baseUniq-CPt4iqUN.js";import"./_Uint8Array-JgX0_gnb.js";import"./isArray-CKaypPRM.js";import"./_getTag-BLJc4KEH.js";import"./isEqual-Cl6IiOwx.js";import"./merge-CKRs6iQK.js";import"./_initCloneObject-CkmVyS0A.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-D5e0KJGg.js";import"./inputBaseClasses-CUwZQaMG.js";import"./calculateFriendlyFileSize-CGKyyDbL.js";import"./CheckCircleTwoTone-BN5GUe2y.js";import"./InfoTwoTone-DpSCXbve.js";import"./useMutation-DxqLSNHg.js";import"./dayjs.min-Bbcgpwmw.js";import"./chunk-AYJ5UCUI-B53NyrOq.js";import"./cloneDeep-0sjnJFIY.js";import"./Skeleton-CejZ9epo.js";import"./SqlFunctions-B6aZ8mL4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DR2BdL5B.js";import"./Backdrop-DxicCQK9.js";import"./LinearProgress-eUzxGwyO.js";import"./index-Oz7-yPWL.js";import"./index-CjPXnutd.js";import"./index-DGnWwMDm.js";import"./const-BP60AzNb.js";import"./index-CfAKSVql.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
