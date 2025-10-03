import{U as L}from"./UpsetPlot-DhePFseK.js";import{f as u}from"./index-BqBIRtzc.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-Dgv5jrvL.js";import"./DefaultPropsProvider-DuSIaWNU.js";import"./createTheme-BJKfy1iC.js";import"./index-B3YonXtA.js";import"./iframe-BZuF5Rk5.js";import"./Button-Ch1wz1oD.js";import"./createSimplePaletteValueFilter-CxzoQfv0.js";import"./useTimeout-N1XqQ7Tv.js";import"./ButtonBase-B7_bMh0J.js";import"./useForkRef-BtqTZArO.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Ce4Ta4eA.js";import"./useFiles-nz_G27ZD.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-QIqdlNPs.js";import"./OrientationBanner-CPj0PuP9.js";import"./index-BMYyeuyr.js";import"./spreadSx-CwcO6WA9.js";import"./react-BuDUhSyG.js";import"./FullWidthAlert-BAt_LGWT.js";import"./Alert-DxUMyYvX.js";import"./useSlot-BXLighSu.js";import"./createSvgIcon-Bs0uwjDd.js";import"./Close-Cpf8yWN0.js";import"./IconButton-DnWxZwUa.js";import"./Paper-DqrrvOAH.js";import"./useTheme-Bb3tF0fY.js";import"./useTheme-BqUAtbKs.js";import"./Stack-Cij852nX.js";import"./useThemeProps-CnowrksF.js";import"./getThemeProps-B0O8BOmA.js";import"./extendSxProp-D1NEKyNb.js";import"./Box-PoNijjGW.js";import"./AlertTitle-rtt8k-JU.js";import"./Typography-BlpiGXay.js";import"./index-SV-CQluw.js";import"./ClickAwayListener-CPlRAx9Y.js";import"./getReactElementRef-uQKecpNl.js";import"./index-B7I8xQtn.js";import"./index-Dmzd7xWV.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BGI5WGEZ.js";import"./Tooltip-BStWPht6.js";import"./index-BvINnhAG.js";import"./useControlled-C_6BPMUf.js";import"./Popper-BfvQl467.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-BsSbosha.js";import"./QueryClientProvider-BRz6sphI.js";import"./Link-Bpl0ygdi.js";import"./Collapse-COA2sox0.js";import"./_baseUniq-BuOmYGlr.js";import"./_Uint8Array-szfHHksL.js";import"./isArray-D7cLY-Ue.js";import"./_getTag-BZgbHbgT.js";import"./isEqual-BQl5jUFq.js";import"./noop-DX6rZLP_.js";import"./merge-BLtkJLx6.js";import"./_initCloneObject-IL6c6Kxn.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-hXWdH60e.js";import"./inputBaseClasses-CTMFoWXf.js";import"./calculateFriendlyFileSize-D7pBFWpU.js";import"./CheckCircleTwoTone-DGwA4b8a.js";import"./InfoTwoTone-LXUWHOi0.js";import"./useMutation-DYD3J3xj.js";import"./dayjs.min-CGFBeRSw.js";import"./chunk-AYJ5UCUI-BiQJU0O1.js";import"./cloneDeep-BGmY4GVF.js";import"./Skeleton-ClHaAhyN.js";import"./SqlFunctions-B8wRZva4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-B-udeDjp.js";import"./Backdrop-DYvnx2NP.js";import"./LinearProgress-BsHkNozY.js";import"./index-BH8v9OLD.js";import"./index-D5jW8HW4.js";import"./index-BTEV80fx.js";import"./const-BP60AzNb.js";import"./index-4sF6yiuj.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const Xt=["Demo","ElitePortalDemo","AMPALSPortalVariant"];export{r as AMPALSPortalVariant,t as Demo,o as ElitePortalDemo,Xt as __namedExportsOrder,Kt as default};
