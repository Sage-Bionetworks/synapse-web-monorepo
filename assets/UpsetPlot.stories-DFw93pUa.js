import{U as L}from"./UpsetPlot-CvQUAXEc.js";import{f as u}from"./index-DErGc1LA.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-s8CeGq6e.js";import"./DefaultPropsProvider-B_iKn7F1.js";import"./createTheme-XQ1XG1uT.js";import"./index-DqCNeVui.js";import"./iframe-DLJ04gD7.js";import"./Button-BKKfuiiA.js";import"./createSimplePaletteValueFilter-0xywFCdl.js";import"./useTimeout-Ci1YOS2N.js";import"./ButtonBase-CnbaYMND.js";import"./useForkRef-Wbx4V2YI.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Bc47s1w8.js";import"./useFiles-DSPyswUJ.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-DUNFlq0e.js";import"./OrientationBanner-BouT6_-v.js";import"./index-ovDtYbUI.js";import"./spreadSx-CwcO6WA9.js";import"./react-DBCxFg72.js";import"./FullWidthAlert-D4uvuPk0.js";import"./Alert-CyNwItA7.js";import"./useSlot-G1t5X145.js";import"./createSvgIcon-AhXV-Lxi.js";import"./Close-M_K7APZJ.js";import"./IconButton-CNFKcrJM.js";import"./Paper-CYyby8z3.js";import"./useTheme-DbAeu6yd.js";import"./useTheme-CktZyT1n.js";import"./Stack-D9rYCQQF.js";import"./useThemeProps-Uu3RamaM.js";import"./getThemeProps-BLiK3YSp.js";import"./extendSxProp-DQG93Und.js";import"./Box-nPc4YptG.js";import"./AlertTitle-o2mAfrn3.js";import"./Typography-D-0ZBQX2.js";import"./index-Dn5oTu5D.js";import"./ClickAwayListener-vSy9CTVX.js";import"./getReactElementRef-Dojj8YKz.js";import"./index-lhBCL31b.js";import"./index-CQk5-tNr.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BbYs77F_.js";import"./Tooltip-C4CjRY6Y.js";import"./index-B0wLNRQ3.js";import"./useControlled-BbEwI8f2.js";import"./Popper-BTa4sm66.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-Dz2CGP3m.js";import"./QueryClientProvider-C0WiXwv4.js";import"./Link-CH4iZoNX.js";import"./Collapse-BH6wb8pT.js";import"./_baseUniq-CqT83kDA.js";import"./_Uint8Array-BN5v77BQ.js";import"./isArray-cRRhqXew.js";import"./_getTag-wQVUyFtv.js";import"./isEqual-dM2_k6w0.js";import"./noop-DX6rZLP_.js";import"./merge-BzIMSKk1.js";import"./_initCloneObject-mADqvNT2.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BEi6VzVG.js";import"./inputBaseClasses-BfMVnRnK.js";import"./calculateFriendlyFileSize-BUdwJH4A.js";import"./CheckCircleTwoTone-B6jn311F.js";import"./InfoTwoTone-Cwq51stI.js";import"./useMutation-DslBe_ZR.js";import"./dayjs.min-CITIma5U.js";import"./chunk-AYJ5UCUI-DxDCzQTA.js";import"./cloneDeep-BGk3XvFY.js";import"./Skeleton-0b9O17k9.js";import"./SqlFunctions-B8wRZva4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-C3w5aacU.js";import"./Backdrop-DZYar7pK.js";import"./LinearProgress-D8rmhrzk.js";import"./index-KK7T8hwb.js";import"./index-BKJgstuz.js";import"./index-D6rYrXVf.js";import"./const-BP60AzNb.js";import"./index-CvDBHga5.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
