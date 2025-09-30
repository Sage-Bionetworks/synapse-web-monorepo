import{U as L}from"./UpsetPlot-D8Ub7kZo.js";import{f as u}from"./index-UkCNbzbz.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-BS_ansTC.js";import"./DefaultPropsProvider-C9lcJsco.js";import"./createTheme-Ct4hOUY0.js";import"./index-BTixfpmo.js";import"./iframe-BR9Ja6hI.js";import"./Button-CcoB3lWu.js";import"./createSimplePaletteValueFilter-BaklvuFn.js";import"./useTimeout-BT71a5BG.js";import"./ButtonBase-CLhQYawW.js";import"./useForkRef-ByyUlt6l.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CGHL4dKq.js";import"./useFiles-DXugVBdN.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-C06Ch0Di.js";import"./OrientationBanner-DBXHK8nr.js";import"./index-Cr129Lwm.js";import"./spreadSx-CwcO6WA9.js";import"./react-zGOPWrfW.js";import"./FullWidthAlert-DUgF28iy.js";import"./Alert-Bzs890sv.js";import"./useSlot-DVAL2WEY.js";import"./createSvgIcon-DkE23E6T.js";import"./Close-r5Eir0nI.js";import"./IconButton-DMbp8lhT.js";import"./Paper-CkXasqHE.js";import"./useTheme--DNYjqwV.js";import"./useTheme-C0qI9DFm.js";import"./Stack-3xN7A2um.js";import"./extendSxProp-DVTPON9k.js";import"./getThemeProps-M7RFjJi5.js";import"./Box-CApkhvtQ.js";import"./AlertTitle-CiWcZZaU.js";import"./Typography-CEi--Dpe.js";import"./index-C9fK3pkP.js";import"./ClickAwayListener-B29foLKR.js";import"./getReactElementRef-DrnFIYrE.js";import"./index-BXtdr2fX.js";import"./index-BUHx5KqL.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BqeXQhC3.js";import"./Tooltip-D-Bq3_L7.js";import"./index-BD7cvM_0.js";import"./useControlled-Cpbrkwwj.js";import"./Popper-CRYbaicA.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-CcZA1bE6.js";import"./QueryClientProvider-BCBx_4eV.js";import"./Link-a0CVLUjg.js";import"./Collapse-CtU4v-Lk.js";import"./_baseUniq-SSlWZVFw.js";import"./_Uint8Array-D-glPVel.js";import"./isArray-BHu1IHx8.js";import"./_getTag-B95UPAyz.js";import"./isEqual-BrkuIRuc.js";import"./merge-C4pBA74N.js";import"./_initCloneObject-B2AZAceM.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DOxyPF1-.js";import"./inputBaseClasses-CxLG9xAk.js";import"./calculateFriendlyFileSize-DuOTJlq3.js";import"./CheckCircleTwoTone-Cs68L0RV.js";import"./InfoTwoTone-DaXqbztf.js";import"./useMutation-DsMluRIG.js";import"./dayjs.min-DWGHZlck.js";import"./chunk-AYJ5UCUI-DVpYxvti.js";import"./cloneDeep-Igvd9DYO.js";import"./Skeleton-hVDOD6Fh.js";import"./SqlFunctions-B6aZ8mL4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-iF0iA0GH.js";import"./Backdrop-BBgrtg4k.js";import"./LinearProgress-uUwJmZax.js";import"./index-BDrXtzgn.js";import"./index-BYv1RlkZ.js";import"./index-DRPpAZW0.js";import"./const-BP60AzNb.js";import"./index-DHjT4JeI.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
