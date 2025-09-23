import{U as L}from"./UpsetPlot-B_FADfkd.js";import{f as u}from"./index-Db_6TcMY.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-0e6ecU_B.js";import"./DefaultPropsProvider-CossAyJe.js";import"./createTheme-805fwRnW.js";import"./index-DY9mdyPi.js";import"./iframe-foaHJy_d.js";import"./Button-3mgletA9.js";import"./createSimplePaletteValueFilter-DyvNuA5n.js";import"./useTimeout-C44WAk2R.js";import"./ButtonBase-DTXci-DT.js";import"./useForkRef-BM8yPrHv.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Chhkm6cO.js";import"./useFiles-4auXP0HE.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-DgvD2GSf.js";import"./OrientationBanner-CdA_N81g.js";import"./index-Btojeglz.js";import"./spreadSx-CwcO6WA9.js";import"./react-D8btsb_W.js";import"./FullWidthAlert-BNsug2BQ.js";import"./Alert-BSA3wL1o.js";import"./useSlot-DRgbk0MI.js";import"./createSvgIcon-BPzUoahr.js";import"./Close-CFREto0o.js";import"./IconButton-CyOD0ivW.js";import"./Paper-5zmbLrbd.js";import"./useTheme-CemLkdiZ.js";import"./useTheme-BMnvZPWl.js";import"./Stack-Ds9V3v2E.js";import"./extendSxProp-BNcg_9Kx.js";import"./getThemeProps-CE04HLlV.js";import"./Box-U43iDY-R.js";import"./AlertTitle-Cjpu7TC-.js";import"./Typography-D46yYVKI.js";import"./index-C7uFXVHy.js";import"./ClickAwayListener-DsaPV5nr.js";import"./getReactElementRef-BDAa_hCW.js";import"./index-CPZzWBSL.js";import"./index-Cwn0dq2o.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CSjIhoje.js";import"./Tooltip-Cqj1ZLU8.js";import"./index-Bkr87tKu.js";import"./useControlled-DsLo-4-V.js";import"./Popper-DudO-GPp.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-8y-s5Pjc.js";import"./QueryClientProvider-DyDsuevu.js";import"./Link-CBhfnUs8.js";import"./Collapse-DwI0-2AC.js";import"./_baseUniq-CWzK8lQ2.js";import"./_Uint8Array-DjQqamw2.js";import"./isArray-D4kTfiKp.js";import"./_getTag-CwqD0vF9.js";import"./isEqual-Cu31opz6.js";import"./merge-H_UyJaym.js";import"./_initCloneObject-BUPoaIeA.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-B9TGkY69.js";import"./inputBaseClasses-DjFPwRJg.js";import"./calculateFriendlyFileSize-dPQB9gIu.js";import"./CheckCircleTwoTone-B0uaPTts.js";import"./InfoTwoTone-7OESuLhA.js";import"./useMutation-Dm55FjBv.js";import"./dayjs.min-Dv1AES53.js";import"./chunk-AYJ5UCUI-DDyJQ7LG.js";import"./cloneDeep-UlK_jgh2.js";import"./Skeleton-BFMyuLob.js";import"./SqlFunctions-B6aZ8mL4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-C2DTOCy-.js";import"./Backdrop-CITz1Yjk.js";import"./LinearProgress-Ce1kp8Sh.js";import"./index-BVRk3FA3.js";import"./index-CmC7box6.js";import"./index-jbNixj8C.js";import"./const-BP60AzNb.js";import"./index-BC222L3X.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
