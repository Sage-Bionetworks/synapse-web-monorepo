import{U as L}from"./UpsetPlot-Blsicrh9.js";import{f as u}from"./index-CJVrT7u9.js";import"./jsx-runtime-BEwiZqqY.js";import"./index-ChFhW-Al.js";import"./iframe-BDIPDNq-.js";import"./LargeButton-DD4cH7Pu.js";import"./DefaultPropsProvider-BlteA6AR.js";import"./createTheme-Ci6KGXQR.js";import"./Button-ybpmpbus.js";import"./createSimplePaletteValueFilter-CpZQzAHX.js";import"./useTimeout-sh9t1mz6.js";import"./ButtonBase-bLST6SVW.js";import"./useForkRef-BWiBtI0w.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-0rw7mHGA.js";import"./useFiles-CoPTJU2m.js";import"./VerificationSubmission-CMrrYimb.js";import"./SynapseConstants-BUskGhcf.js";import"./OrientationBanner-CPbkKQek.js";import"./index-IQx7kxSP.js";import"./spreadSx-CwcO6WA9.js";import"./react-BbfSSYil.js";import"./FullWidthAlert-BOO8eGDE.js";import"./Alert-CP_ZH_t2.js";import"./useSlot-nTDpiNCx.js";import"./createSvgIcon-Dew27WPy.js";import"./Close-B-NuZT7-.js";import"./IconButton-B0cLDBAl.js";import"./Paper-B-JdPdJU.js";import"./useTheme-C-oPGgQ8.js";import"./useTheme-BdKBLGwS.js";import"./Stack-C1sXbxMW.js";import"./extendSxProp-Aqw1KmhH.js";import"./getThemeProps-M3c_UKdt.js";import"./Box-DEfo559R.js";import"./AlertTitle-DzsWEgBT.js";import"./Typography-Cf3i3BnW.js";import"./index-DGdGSDgm.js";import"./ClickAwayListener-KjH_W-vg.js";import"./getReactElementRef-Owx3bBor.js";import"./index-B5v3iApY.js";import"./index-BLOKhgvX.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CUOtS4jF.js";import"./Tooltip-DCTnEZ2t.js";import"./index-kCbyR7e8.js";import"./useControlled-Ctg1L2cF.js";import"./Popper-C8qBGzSt.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bdqa-HwM.js";import"./useQuery-DQW1e0ji.js";import"./utils-DkfgZeN-.js";import"./Link-BHEmtyEW.js";import"./Collapse-BVbFoSTT.js";import"./_baseUniq-Dhs9PoiQ.js";import"./_Uint8Array-CWnTYOhE.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DPtjXJm5.js";import"./isArray-Dxzbedgu.js";import"./_getTag-CyaBrs7I.js";import"./isEqual-DXs3uMaR.js";import"./merge-C0wwPI46.js";import"./_initCloneObject-BMuVs7Aw.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BvqjwpVD.js";import"./inputBaseClasses-B5YRdgVz.js";import"./calculateFriendlyFileSize-cAyroo8L.js";import"./CheckCircleTwoTone-CxrGtju7.js";import"./InfoTwoTone-WVgG-mPn.js";import"./useMutation-CIDB2zHb.js";import"./dayjs.min-BAOWiB_b.js";import"./chunk-AYJ5UCUI-K2UKqvT5.js";import"./cloneDeep-CAuTZ58R.js";import"./Skeleton-CHAkNa8l.js";import"./SqlFunctions-DPgti-mT.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BxWBEIJO.js";import"./Backdrop-C4VuFW0j.js";import"./LinearProgress-znXf_sWZ.js";import"./index-4c1FLDfz.js";import"./index-CjEGSoq4.js";import"./index-CFlSInFD.js";import"./const-Doag8klc.js";import"./index-DVftrKtM.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
