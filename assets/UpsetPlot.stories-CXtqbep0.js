import{U as L}from"./UpsetPlot-OpXxpvZY.js";import{f as u}from"./index-CtgRdUr6.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-y3DmyoDi.js";import"./DefaultPropsProvider-CC2kaeZR.js";import"./createTheme-ChtqmcTg.js";import"./index-CPLnAWAL.js";import"./iframe-Cw_yZaV2.js";import"./Button-GGnGFuhO.js";import"./createSimplePaletteValueFilter-pT0uCa3p.js";import"./useTimeout-Betqu8W3.js";import"./ButtonBase-Bqm1GJY2.js";import"./useForkRef-C5BUgNSS.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-yW_HmXon.js";import"./useFiles-Ck0SAQJm.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-H2H4uJUY.js";import"./OrientationBanner-CK4-pjte.js";import"./index-Dp7LC-uS.js";import"./spreadSx-CwcO6WA9.js";import"./react-CT2CPoKP.js";import"./FullWidthAlert-l1-NGKjy.js";import"./Alert-li6zxXuR.js";import"./useSlot-omfmVDzD.js";import"./createSvgIcon-B9ptMgVS.js";import"./Close-C0YdDub3.js";import"./IconButton-29B3UHc_.js";import"./Paper-ieaJEv4g.js";import"./useTheme-Nym6qI7j.js";import"./useTheme-BhYP72KB.js";import"./Stack-LiOQB_FT.js";import"./extendSxProp-Buxb_804.js";import"./getThemeProps-CJPvSiqT.js";import"./Box-nyneOUy5.js";import"./AlertTitle-BmjQYwBY.js";import"./Typography-1GfpkFqt.js";import"./index-NVuPnC3E.js";import"./ClickAwayListener-XweM7X4K.js";import"./getReactElementRef-_LpF0Sxi.js";import"./index-Cw5q5fsG.js";import"./index-hd-48767.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Cj47bIQe.js";import"./Tooltip-Xzq95ZNX.js";import"./index-Bpvbg0qk.js";import"./useControlled-DiXAzLHp.js";import"./Popper-0YxxjHE0.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-WlLeMRk4.js";import"./QueryClientProvider-h3dPF_D_.js";import"./Link-CgzQNGBC.js";import"./Collapse-PwrV_8LN.js";import"./_baseUniq-DYWY_jNP.js";import"./_Uint8Array-CuCmzQhK.js";import"./isArray-CtmyCLSC.js";import"./_getTag-CTKZEpNQ.js";import"./isEqual-CaRsZTl5.js";import"./merge-T85d_cJJ.js";import"./_initCloneObject-D9NhiOWJ.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DHH7H9w2.js";import"./inputBaseClasses-CPehs8P6.js";import"./calculateFriendlyFileSize-CYetzTdg.js";import"./CheckCircleTwoTone-BaJiyXQW.js";import"./InfoTwoTone-jSNHxiDk.js";import"./useMutation-2r_PMyuf.js";import"./dayjs.min-w8p9vUsD.js";import"./chunk-AYJ5UCUI-BO41wFUG.js";import"./cloneDeep-BIbNGKVC.js";import"./Skeleton-eCubiaGi.js";import"./SqlFunctions-B6aZ8mL4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-C7Hm95eg.js";import"./Backdrop-DFEjVKc_.js";import"./LinearProgress-DamC70n7.js";import"./index-Cko-uO8n.js";import"./index-BS93aOCD.js";import"./index-C2HK78HC.js";import"./const-BP60AzNb.js";import"./index-BHrfDxQP.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
