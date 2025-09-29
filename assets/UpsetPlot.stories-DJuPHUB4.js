import{U as L}from"./UpsetPlot-DTLwYh6L.js";import{f as u}from"./index-DZfZpcF7.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-_1EihAoD.js";import"./DefaultPropsProvider-CWzj9DzQ.js";import"./createTheme-1jm5ezYP.js";import"./index-BiZonhDH.js";import"./iframe-KhA6412S.js";import"./Button-BryWV2Kx.js";import"./createSimplePaletteValueFilter-Cihnsp1l.js";import"./useTimeout-DJBvZtwQ.js";import"./ButtonBase-DbSCIXDh.js";import"./useForkRef-BESM7ku1.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CWj0IvOC.js";import"./useFiles-DkJCHeA3.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-DAiqgyg1.js";import"./OrientationBanner-D4wTKRw8.js";import"./index-DRNEewT0.js";import"./spreadSx-CwcO6WA9.js";import"./react-Bf6tZNz9.js";import"./FullWidthAlert-CEBDcxDb.js";import"./Alert-Si5Sm7uX.js";import"./useSlot-xBg9ATiI.js";import"./createSvgIcon-CrhVCK6n.js";import"./Close-C2_S8l8h.js";import"./IconButton-CzceikyK.js";import"./Paper-ABqWba6I.js";import"./useTheme-B6M16tYP.js";import"./useTheme-BMWmfRcC.js";import"./Stack-DWSzmDyR.js";import"./extendSxProp-A_0H_slr.js";import"./getThemeProps-Db880qGR.js";import"./Box-BUnumDhd.js";import"./AlertTitle-BszRCW5W.js";import"./Typography-BETUzylk.js";import"./index-B3yBNt-L.js";import"./ClickAwayListener-DxBKDWMy.js";import"./getReactElementRef-d88flgGN.js";import"./index-Y07cJu9Y.js";import"./index-Xo5PhUpn.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DyIUulWJ.js";import"./Tooltip-Bo4_h0TM.js";import"./index-Bs9Rydsp.js";import"./useControlled-DxMP8c3u.js";import"./Popper-I1BUdcss.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-DtcY72pw.js";import"./QueryClientProvider-CnMpTV32.js";import"./Link-DyfbRNUw.js";import"./Collapse-A2nC22g8.js";import"./_baseUniq-B6yOCfKH.js";import"./_Uint8Array-BuKzuZ_U.js";import"./isArray-CDuRcB0M.js";import"./_getTag-Bf7qzLHR.js";import"./isEqual-Bin5dEGo.js";import"./merge-CHIVU8Rn.js";import"./_initCloneObject-CMoDBQQ6.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BtLpzY4K.js";import"./inputBaseClasses-CplbFm5w.js";import"./calculateFriendlyFileSize-CxNXhpME.js";import"./CheckCircleTwoTone-CJ92NpYr.js";import"./InfoTwoTone-39J4YKRz.js";import"./useMutation-CHMb5Grd.js";import"./dayjs.min-7SCA9Rrv.js";import"./chunk-AYJ5UCUI-C95cDugv.js";import"./cloneDeep-CR3aRAiR.js";import"./Skeleton-xaP9f2sv.js";import"./SqlFunctions-B6aZ8mL4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-D49qJksN.js";import"./Backdrop-DjUerqbG.js";import"./LinearProgress-Cs6qw1ma.js";import"./index-V1CIYiMV.js";import"./index-Bz_vgEqs.js";import"./index-neILPqt_.js";import"./const-BP60AzNb.js";import"./index-CSsQ7f96.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
