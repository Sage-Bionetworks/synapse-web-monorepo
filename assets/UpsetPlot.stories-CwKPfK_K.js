import{U as L}from"./UpsetPlot-BFjfwfsd.js";import{f as u}from"./index-Cc9XSbwe.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-C8BmFzwb.js";import"./DefaultPropsProvider-C9wjepK5.js";import"./createTheme-DSq-Mol7.js";import"./index-50V2EGz2.js";import"./iframe-CnNyPxR5.js";import"./Button-Cf0eu55O.js";import"./createSimplePaletteValueFilter-CldMCLtR.js";import"./useTimeout-BhJq4kG5.js";import"./ButtonBase-BX83Z0VB.js";import"./useForkRef-BAPdpbNW.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BGTymdZp.js";import"./useFiles-w6-CIEB7.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-BvlkkbYT.js";import"./OrientationBanner-DQJGhgFu.js";import"./index-CWABsZZt.js";import"./spreadSx-CwcO6WA9.js";import"./react-otK05ZBX.js";import"./FullWidthAlert-BQO2ZM0K.js";import"./Alert-B_-c_7mx.js";import"./useSlot-DsxpMVrm.js";import"./createSvgIcon-DGQsVitk.js";import"./Close-CVOLFbw1.js";import"./IconButton-BVSRfYlJ.js";import"./Paper-BCS61ZLh.js";import"./useTheme-CjTtqgxL.js";import"./useTheme-CZTnF3AF.js";import"./Stack-BQvEapyr.js";import"./useThemeProps-CmnHZ3En.js";import"./getThemeProps-DlbFbBX7.js";import"./extendSxProp-Et1BOirn.js";import"./Box-BDTYEpGC.js";import"./AlertTitle-D8cxvMZv.js";import"./Typography-fBjhrNMo.js";import"./index-CLkWSig2.js";import"./ClickAwayListener-DDweZR_J.js";import"./getReactElementRef-DBAVQkW_.js";import"./index-D3DJx0X2.js";import"./index-CC6HTFNl.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BtgJxlwW.js";import"./Tooltip-C_M9hetJ.js";import"./index-Etco1RFO.js";import"./useControlled-DtifG75u.js";import"./Popper-C9tLJj2J.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-CH0n5MNt.js";import"./QueryClientProvider-Py7SAasE.js";import"./Link-DFtCODF5.js";import"./Collapse-BeiaCXPV.js";import"./_baseUniq-Cu_OF4Xp.js";import"./_Uint8Array-CzRmNIxi.js";import"./isArray-KvXH-Jx4.js";import"./_getTag-B8WXN5Nr.js";import"./isEqual-CzDcfwhI.js";import"./noop-DX6rZLP_.js";import"./merge-jd3NSUkd.js";import"./_initCloneObject-XmSwrlPI.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-ByV7WbF5.js";import"./inputBaseClasses-CtqzjeT7.js";import"./calculateFriendlyFileSize-uiD7W4tT.js";import"./CheckCircleTwoTone-DAKkXTN_.js";import"./InfoTwoTone-C_fE8DJq.js";import"./useMutation-0FRbsOeu.js";import"./dayjs.min-C2eBLBEm.js";import"./chunk-AYJ5UCUI-DBs_SlKK.js";import"./cloneDeep-7VEFdNK3.js";import"./Skeleton-Cb30zSej.js";import"./SqlFunctions-B8wRZva4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-CovsMJ6T.js";import"./Backdrop-iwUY4j7_.js";import"./LinearProgress-rA35xzrE.js";import"./index-DlMm-L9L.js";import"./index-fwFOMBAr.js";import"./index-BaKNHO6W.js";import"./const-BP60AzNb.js";import"./index-Bl97o5ZS.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
