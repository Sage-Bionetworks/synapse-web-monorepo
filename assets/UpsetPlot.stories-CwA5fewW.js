import{U as L}from"./UpsetPlot-B7U5y2fZ.js";import{f as u}from"./index-BWRpRdLX.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-DvJbl4Rc.js";import"./DefaultPropsProvider-BIvMs3xX.js";import"./createTheme-gj4ta8JK.js";import"./index-CJTqbwg9.js";import"./iframe-CG85BzK6.js";import"./Button-D8a1OC-O.js";import"./createSimplePaletteValueFilter-Xz4nl1-g.js";import"./useTimeout-DDPxidDq.js";import"./ButtonBase-CmahN1yA.js";import"./useForkRef-CL-HmWE-.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BBZlh3jv.js";import"./useFiles-lb8uXJha.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-CBaWUDFp.js";import"./OrientationBanner-C_cI8Wdu.js";import"./index-HT8vm-KD.js";import"./spreadSx-CwcO6WA9.js";import"./react-C5eOr4qq.js";import"./FullWidthAlert-BYzUdYmy.js";import"./Alert-CfqRHpto.js";import"./useSlot-C9QU161m.js";import"./createSvgIcon-Ds67miPL.js";import"./Close-DUTvymq8.js";import"./IconButton-BVm2k0V8.js";import"./Paper-_TypEQXS.js";import"./useTheme-J3HQsDMf.js";import"./useTheme-DHaXmWDd.js";import"./Stack-B6Fv6rDP.js";import"./extendSxProp-LD-I1WVR.js";import"./getThemeProps-BkNvNRVH.js";import"./Box-DO5is7mO.js";import"./AlertTitle-DW1ksqT6.js";import"./Typography-BjJo8e6h.js";import"./index-ClhWbTH2.js";import"./ClickAwayListener-Bz0pJjhC.js";import"./getReactElementRef-DefmUWlD.js";import"./index-DhqT-wZf.js";import"./index-B30IKtuV.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DT56OTPx.js";import"./Tooltip-_Br_YO6O.js";import"./index-BTTzR3FC.js";import"./useControlled-CGanW96O.js";import"./Popper-TkGtPLMk.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-DccECcxJ.js";import"./QueryClientProvider-BiW_y-Nb.js";import"./Link-w5BOvl6J.js";import"./Collapse-DPBKAoXV.js";import"./_baseUniq-Cm1Ujzdq.js";import"./_Uint8Array-Bge7RmPT.js";import"./isArray-ECjS2Mk1.js";import"./_getTag-CLHhZoU-.js";import"./isEqual-l9qiUE8w.js";import"./merge-DOaqpN72.js";import"./_initCloneObject-BNcBeVfK.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BO0WQVeb.js";import"./inputBaseClasses-8RM-Z2Qw.js";import"./calculateFriendlyFileSize-BfxCmKAO.js";import"./CheckCircleTwoTone-DRnqgNMo.js";import"./InfoTwoTone-tVAIT2bF.js";import"./useMutation-DzECAvFo.js";import"./dayjs.min-DN9ltQUU.js";import"./chunk-AYJ5UCUI-J8G0ovJt.js";import"./cloneDeep-B7tqKnHv.js";import"./Skeleton-jH73I46F.js";import"./SqlFunctions-B6aZ8mL4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-LIwWbj8i.js";import"./Backdrop-D5m0FWel.js";import"./LinearProgress-BFGQiwcu.js";import"./index-B0dlNrpm.js";import"./index-CZ1Ns97J.js";import"./index-YyqgmMlS.js";import"./const-BP60AzNb.js";import"./index-BWyXAtwC.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
