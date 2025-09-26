import{U as L}from"./UpsetPlot-BMx67z6M.js";import{f as u}from"./index-CgSGPlzF.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-CnbW-jA_.js";import"./DefaultPropsProvider-6pJ8FZcR.js";import"./createTheme-i8RyPaYL.js";import"./index-ByFgbSi1.js";import"./iframe-DQjbfcQ9.js";import"./Button-CYldgbV6.js";import"./createSimplePaletteValueFilter-Bc_Jnzdb.js";import"./useTimeout-CSjKXMwL.js";import"./ButtonBase-CTwLXAXZ.js";import"./useForkRef-23rwbX6-.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DEGgbvx4.js";import"./useFiles-Cg_eAUDA.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-BaFW-Hk1.js";import"./OrientationBanner-7A6I2Sts.js";import"./index-DrKws1ZS.js";import"./spreadSx-CwcO6WA9.js";import"./react-4DRvf2RG.js";import"./FullWidthAlert-BmX-nqa8.js";import"./Alert-cq0Vou2L.js";import"./useSlot-C0bdZSh0.js";import"./createSvgIcon-Dx2LBnYP.js";import"./Close-D3BjbVZl.js";import"./IconButton-DxywuGM_.js";import"./Paper-QA66fCso.js";import"./useTheme-BSYxzT2u.js";import"./useTheme-d8TpmLbK.js";import"./Stack-DWAVfk6y.js";import"./extendSxProp-Dtt1Z7Rz.js";import"./getThemeProps-B9cF21qQ.js";import"./Box-CZ8nomX1.js";import"./AlertTitle-Dpusuo1a.js";import"./Typography-CY333YIv.js";import"./index-OanGvPr5.js";import"./ClickAwayListener-DiPtj9kP.js";import"./getReactElementRef-DnnqkrYN.js";import"./index-DXPb9-O7.js";import"./index-D164aDtB.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-B4czxb_I.js";import"./Tooltip-Z97fGrMz.js";import"./index-Dmk_WNz3.js";import"./useControlled-CEl4StEV.js";import"./Popper-Dj-99SyI.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-DKynZEci.js";import"./QueryClientProvider--7WDvxPi.js";import"./Link-CtNtuiDF.js";import"./Collapse-CjU9t1fz.js";import"./_baseUniq-B5okjzLX.js";import"./_Uint8Array-CpLANe0M.js";import"./isArray-slhQyjYX.js";import"./_getTag-EGniEwS5.js";import"./isEqual-CZZqW4AH.js";import"./merge-UMFakapv.js";import"./_initCloneObject-wkm3rYXe.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-55a661Ax.js";import"./inputBaseClasses-QMrXpAyg.js";import"./calculateFriendlyFileSize-CWPY0s9D.js";import"./CheckCircleTwoTone-UKzD70d6.js";import"./InfoTwoTone-D2qSN7nc.js";import"./useMutation-BXPMCqV1.js";import"./dayjs.min-BfZA8BkT.js";import"./chunk-AYJ5UCUI-OavDP728.js";import"./cloneDeep-QdVPM6qo.js";import"./Skeleton-DdQ3uvfq.js";import"./SqlFunctions-B6aZ8mL4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-CiHarq7U.js";import"./Backdrop-BDkMiSAk.js";import"./LinearProgress-COXg6p9N.js";import"./index-Dapxtzry.js";import"./index-CaJZCjT4.js";import"./index-R7poavx1.js";import"./const-BP60AzNb.js";import"./index-BddSzx28.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
