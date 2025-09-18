import{U as L}from"./UpsetPlot-DSEMEE93.js";import{f as u}from"./index-Bd43eDyb.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-DXOcTMbq.js";import"./DefaultPropsProvider-BlmQpHue.js";import"./createTheme-gXr55H0m.js";import"./index-BEjLIAR5.js";import"./iframe-CwGKoaIF.js";import"./Button-C5PiRzoR.js";import"./createSimplePaletteValueFilter-BOXH4uIn.js";import"./useTimeout-BgSeNLNv.js";import"./ButtonBase-ksp5zqqD.js";import"./useForkRef-I1dv9UDr.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-jnMXXNDb.js";import"./useFiles-BQg2l_mC.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-234bgPC3.js";import"./OrientationBanner-Ba_WLX69.js";import"./index-DRuXmisc.js";import"./spreadSx-CwcO6WA9.js";import"./react-fP1UZYcI.js";import"./FullWidthAlert-BueunzTy.js";import"./Alert-CL0zz-8I.js";import"./useSlot-D6L-ORg2.js";import"./createSvgIcon-C6p_F7p2.js";import"./Close-CmIFNtKx.js";import"./IconButton-BVkKIzAo.js";import"./Paper-dcVYzYMj.js";import"./useTheme-DXEcceH2.js";import"./useTheme-C3VYIg5j.js";import"./Stack-BIZFhOmX.js";import"./extendSxProp-DelytbQg.js";import"./getThemeProps-Bsoevkdv.js";import"./Box-DFln69uE.js";import"./AlertTitle-CO6GLx2J.js";import"./Typography-CoIbKr7l.js";import"./index-qd5JykJS.js";import"./ClickAwayListener-P3VkkFbs.js";import"./getReactElementRef-BLYsTnAm.js";import"./index-TKWJ5sXr.js";import"./index-CPXD-uRb.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BbBJN9Bb.js";import"./Tooltip-D0dK4Slt.js";import"./index-BE838Nkr.js";import"./useControlled-BHX0J-8f.js";import"./Popper-Bzy4Jbyt.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-CrW5nkBB.js";import"./QueryClientProvider-6UyNw7x6.js";import"./Link-Bq8ymdbG.js";import"./Collapse-RaZHU9Wm.js";import"./_baseUniq-gWU3IFtJ.js";import"./_Uint8Array-B2-F3GF1.js";import"./isArray-29EfBsKk.js";import"./_getTag-BwYISoq0.js";import"./isEqual-BxMVxjXA.js";import"./merge-DyG2PJVv.js";import"./_initCloneObject-Cokl0rF2.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BQZZIYWG.js";import"./inputBaseClasses-BI4UakU4.js";import"./calculateFriendlyFileSize-DTUMM0RF.js";import"./CheckCircleTwoTone-B_hMD9N9.js";import"./InfoTwoTone-DxkkeeGX.js";import"./useMutation-B59eIzkm.js";import"./dayjs.min-BBXC49jR.js";import"./chunk-AYJ5UCUI-D1bRiwJ_.js";import"./cloneDeep-DzrI_yLo.js";import"./Skeleton-CR-iryCa.js";import"./SqlFunctions-B6aZ8mL4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-x0U8zsVg.js";import"./Backdrop-hlDkKBKQ.js";import"./LinearProgress-B45-Voel.js";import"./index-DDaxMnx0.js";import"./index-B0Do8Cs0.js";import"./index-DVxOlEXy.js";import"./const-BP60AzNb.js";import"./index-BTOEdTK8.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
