import{U as L}from"./UpsetPlot-376-Fv3Z.js";import{f as u}from"./index-XYjDgQBJ.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-O0wWNRat.js";import"./DefaultPropsProvider-DzRiX1xR.js";import"./createTheme-B_zC4xf3.js";import"./index-DSkVdhrf.js";import"./iframe-DYeF287a.js";import"./Button-aqwJXSce.js";import"./createSimplePaletteValueFilter-t_V-XiMr.js";import"./useTimeout-BAqBF6lB.js";import"./ButtonBase-B5hFWQuv.js";import"./useForkRef-CYgCZhxb.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CosGYM1x.js";import"./useFiles-DzpLvPyG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-rUPxR7Yc.js";import"./OrientationBanner-t173fekd.js";import"./index-ZhrB7fIQ.js";import"./spreadSx-CwcO6WA9.js";import"./react-p7CCM9Kc.js";import"./FullWidthAlert-D_pY0MvE.js";import"./Alert-yfsCI1Uq.js";import"./useSlot-DW6hEZC9.js";import"./createSvgIcon-YQCSlHK0.js";import"./Close-BIVj7De7.js";import"./IconButton-Bo7k1tr3.js";import"./Paper-_-PoF_c7.js";import"./useTheme-CV8KRl2q.js";import"./useTheme-Cym59Nt6.js";import"./Stack-hea32SzM.js";import"./extendSxProp-DAsRLwVq.js";import"./getThemeProps-C3jqbSrb.js";import"./Box-BMSgzQAg.js";import"./AlertTitle-DvplFeT5.js";import"./Typography-CyWUTtXN.js";import"./index-DCjjB6Mt.js";import"./ClickAwayListener-CAWvQwZB.js";import"./getReactElementRef-CGvdkwYh.js";import"./index-B_05Cg5Y.js";import"./index-wPQ0IiXn.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Tn7aC0Mr.js";import"./Tooltip-DNwnDvqE.js";import"./index-BHkBa_FS.js";import"./useControlled-DwIZwnDy.js";import"./Popper-MBWBO-b7.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-CZolMSVi.js";import"./QueryClientProvider-Ci5Hg-vp.js";import"./Link-DpsHsyH0.js";import"./Collapse-BNkf-Q_O.js";import"./_baseUniq-BigHUiwX.js";import"./_Uint8Array-BOn-FcwP.js";import"./isArray-BlUZsipK.js";import"./_getTag-Dmk0aOnu.js";import"./isEqual-BsahL1ut.js";import"./merge-DLD6Pxo_.js";import"./_initCloneObject-BeI6Ken0.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DzXsEJ83.js";import"./inputBaseClasses-BiN3BCCk.js";import"./calculateFriendlyFileSize-DXtfxGKv.js";import"./CheckCircleTwoTone-C_SCJO_4.js";import"./InfoTwoTone-BvmJpf6Z.js";import"./useMutation-CfLUXx7H.js";import"./dayjs.min-CM3QBd8M.js";import"./chunk-AYJ5UCUI-CJ-mOY9f.js";import"./cloneDeep-CZzYrGxO.js";import"./Skeleton-muhm2lVo.js";import"./SqlFunctions-C8HqQ3uk.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-CR99leqj.js";import"./Backdrop-CCbiOw7n.js";import"./LinearProgress-BlCpZkFb.js";import"./index-DjgDk-ax.js";import"./index-DGaJgb5T.js";import"./index-BUfVVzfY.js";import"./const-BP60AzNb.js";import"./index-CqH4Me-f.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
