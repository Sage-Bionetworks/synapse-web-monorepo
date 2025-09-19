import{U as L}from"./UpsetPlot-BQIYMmuX.js";import{f as u}from"./index-B0ape4fX.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-DIluPCKH.js";import"./DefaultPropsProvider-CWWNlooN.js";import"./createTheme-5O93HVJl.js";import"./index-WFGZkfGQ.js";import"./iframe-DE8stXB9.js";import"./Button-XWZFAulY.js";import"./createSimplePaletteValueFilter-OVNBhgRo.js";import"./useTimeout-DUcSAsaz.js";import"./ButtonBase-iE-VM-jO.js";import"./useForkRef-CyYB5Kx6.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Dvg-ZYdT.js";import"./useFiles-BHvy6J25.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-DhtbM-hg.js";import"./OrientationBanner-BMOzWmyx.js";import"./index-uswm353_.js";import"./spreadSx-CwcO6WA9.js";import"./react-ChMSZi63.js";import"./FullWidthAlert-Cw7ejPgA.js";import"./Alert-DCRiEVnW.js";import"./useSlot-DU_7KX09.js";import"./createSvgIcon-C7Y92pv9.js";import"./Close-CNpDafw2.js";import"./IconButton-CS3CoVBF.js";import"./Paper-Q2IEgrqh.js";import"./useTheme-DTvwicwG.js";import"./useTheme-CrHUFg5h.js";import"./Stack-D-2jqZf5.js";import"./extendSxProp-BIfBmP65.js";import"./getThemeProps-B78isNmh.js";import"./Box-GHDzk8iC.js";import"./AlertTitle-C-svQxOb.js";import"./Typography-CbhbYSPG.js";import"./index-CNoXD2e7.js";import"./ClickAwayListener-FMjLV4qb.js";import"./getReactElementRef-oicLdd8e.js";import"./index-B1vVZwXe.js";import"./index-DLljrjFI.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CNV_tGPV.js";import"./Tooltip-D6w5RXxh.js";import"./index-CkHOP_FM.js";import"./useControlled-Bf8XxeTv.js";import"./Popper-CXSQlPF7.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-CC_Fs9a3.js";import"./QueryClientProvider-5Pkappvb.js";import"./Link-DULQ-qik.js";import"./Collapse-DBF0QCN7.js";import"./_baseUniq-DXCYBlUE.js";import"./_Uint8Array-CbNzLaeU.js";import"./isArray-CRez7Py_.js";import"./_getTag-Bx5kgCoR.js";import"./isEqual-BCKPWyF7.js";import"./merge-BlVKkzie.js";import"./_initCloneObject-Cjggmh7c.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-KSG4UTe1.js";import"./inputBaseClasses-D4jRMdEi.js";import"./calculateFriendlyFileSize-CX9y1s78.js";import"./CheckCircleTwoTone-BuWLjQ0I.js";import"./InfoTwoTone-Cayf5KPj.js";import"./useMutation-CFvMxEo-.js";import"./dayjs.min-Cht117Nf.js";import"./chunk-AYJ5UCUI-DKsCyvUv.js";import"./cloneDeep-DHY4QwXX.js";import"./Skeleton-Cu9UBnpu.js";import"./SqlFunctions-B6aZ8mL4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-FpY2RRRv.js";import"./Backdrop-VwEKK_0J.js";import"./LinearProgress-Dr_4XUc-.js";import"./index-NWBb3IIy.js";import"./index-Ej3XFWhJ.js";import"./index-DVPhCnpJ.js";import"./const-BP60AzNb.js";import"./index-C-StNmTa.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
