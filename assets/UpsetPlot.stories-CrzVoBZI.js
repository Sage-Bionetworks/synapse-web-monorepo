import{U as L}from"./UpsetPlot-DRRSpqFv.js";import{f as u}from"./index-yxaHfdCA.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-SG4dklje.js";import"./DefaultPropsProvider-DLZzrGai.js";import"./createTheme-DHuxjkGy.js";import"./index-C045nZJo.js";import"./iframe-Bg19SH8_.js";import"./Button-h-3-8qlu.js";import"./createSimplePaletteValueFilter-BIfczF7D.js";import"./useTimeout-CveBny2q.js";import"./ButtonBase-3B5SDrqt.js";import"./useForkRef-CE4bbMId.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-5pfiVIje.js";import"./useFiles-C1KqnXzG.js";import"./VerificationSubmission-NmfK1W18.js";import"./SynapseConstants-Cp6uR9La.js";import"./OrientationBanner-YDuv3oL5.js";import"./index-DWu3LH1b.js";import"./spreadSx-CwcO6WA9.js";import"./react-CO_fLa7Q.js";import"./FullWidthAlert-MQrW5CBX.js";import"./Alert-DHIs3rBU.js";import"./useSlot-6MrHq_bU.js";import"./createSvgIcon-CKY2FmG4.js";import"./Close-C6mZFMHo.js";import"./IconButton-BMZtRkCL.js";import"./Paper-BVfddmgd.js";import"./useTheme-0wGv3fbU.js";import"./useTheme-DBZnhqg9.js";import"./Stack-CxNlQAPN.js";import"./extendSxProp-DKjB3YeG.js";import"./getThemeProps-CfQcXNXI.js";import"./Box-BZQooeEd.js";import"./AlertTitle-CniBYMPE.js";import"./Typography-DFjn6MN_.js";import"./index-caYvnNGc.js";import"./ClickAwayListener-Dicgb---.js";import"./getReactElementRef-DrfBVC7T.js";import"./index--7Wf1_nO.js";import"./index-CKs0NhYm.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Di0MZsBA.js";import"./Tooltip-CGZlolgu.js";import"./index-LRGMY2LF.js";import"./useControlled-BZc2g0D3.js";import"./Popper-CIekPOcM.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-BvUHfP_r.js";import"./QueryClientProvider-Dnbczliu.js";import"./Link-BxbwKL-u.js";import"./Collapse-CZvLj_1L.js";import"./_baseUniq-DNUqmfhB.js";import"./_Uint8Array-_PB4x22l.js";import"./isArray-UwOYPmBF.js";import"./_getTag-D36lfOnb.js";import"./isEqual-D810Zby2.js";import"./merge-DxqqUWyI.js";import"./_initCloneObject-BTciHt-h.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CzZPgyvZ.js";import"./inputBaseClasses-DrhMVsbw.js";import"./calculateFriendlyFileSize-jiJnc5Ro.js";import"./CheckCircleTwoTone-C0gUn0WH.js";import"./InfoTwoTone-6D-QNEwY.js";import"./useMutation-BfL6Bx-Y.js";import"./dayjs.min-5GTZRxmA.js";import"./chunk-AYJ5UCUI-CPY0ZgBB.js";import"./cloneDeep-DSr3G_r4.js";import"./Skeleton-B8tOQT9J.js";import"./SqlFunctions-B-lgMRiM.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DdM2Oakh.js";import"./Backdrop-Bp44yx3a.js";import"./LinearProgress-B_dpqZVI.js";import"./index-CAuC4c5P.js";import"./index-o2bHQFoZ.js";import"./index-Dr_Lnmrj.js";import"./const-BP60AzNb.js";import"./index-BlQM9y-H.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
