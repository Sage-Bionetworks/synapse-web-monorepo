import{U as L}from"./UpsetPlot-BFsCz1vU.js";import{f as u}from"./index-CRnuKXlD.js";import"./jsx-runtime-BlM1FRL-.js";import"./index-BhP06szg.js";import"./iframe-BS9W2Wvb.js";import"./LargeButton-6BKcWKYs.js";import"./DefaultPropsProvider-gaRRcztr.js";import"./createTheme-D8pQAHfD.js";import"./Button-IngFgvGz.js";import"./createSimplePaletteValueFilter-gb3Prl0-.js";import"./useTimeout-_zJD3Z48.js";import"./ButtonBase-D7tG9DeA.js";import"./useForkRef-gIxop5VW.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CJzEjqd8.js";import"./useFiles-CBr5IUon.js";import"./VerificationSubmission-DKyendrM.js";import"./SynapseConstants-BX7tnvz1.js";import"./OrientationBanner-aQ8TNTQw.js";import"./index-BefUjdsq.js";import"./spreadSx-CwcO6WA9.js";import"./react-ZdlEz97l.js";import"./FullWidthAlert-ChnU0mY7.js";import"./Alert-BHIxQlih.js";import"./useSlot-ClnjNJA7.js";import"./createSvgIcon-DpXe8oC3.js";import"./Close-CpYvi_-W.js";import"./IconButton-CA4bGOWo.js";import"./Paper-BlhQV-oR.js";import"./useTheme-DDaTSMTi.js";import"./useTheme-AK3AFNkh.js";import"./Stack-DNhQ6903.js";import"./extendSxProp-BkAfocSO.js";import"./getThemeProps-5XoFBxB1.js";import"./Box-DNU2ZVbF.js";import"./AlertTitle-DK-br470.js";import"./Typography-d5nb-62C.js";import"./index-CLleM3ip.js";import"./ClickAwayListener-BmyARUuY.js";import"./getReactElementRef-C4sAiCDA.js";import"./index-BypZKsN-.js";import"./index-CwHgGaqN.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-B_o6YR8Y.js";import"./Tooltip-DTvwQu62.js";import"./index-xGj7KpDx.js";import"./useControlled-RqfzBbBX.js";import"./Popper-BaY7U30F.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BcSmk1fX.js";import"./useQuery-r-Re3Rsi.js";import"./utils-BBLC3F9-.js";import"./Link-u9n50BXl.js";import"./Collapse-DIuNVBul.js";import"./isNil-DY9kn39-.js";import"./_Uint8Array-BJM1l806.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CWvSJDLb.js";import"./isArray-Dxzbedgu.js";import"./isEqual-BvywnoNX.js";import"./_getTag-BrTe4_9V.js";import"./tinycolor-Begke6kS.js";import"./Fade-DZwn-bFq.js";import"./inputBaseClasses-Bzako8_G.js";import"./calculateFriendlyFileSize-B8udOIoo.js";import"./CheckCircleTwoTone-DyeJWu1k.js";import"./InfoTwoTone-XL0at7dW.js";import"./useMutation-DeHyVrkY.js";import"./dayjs.min-acHY-hx9.js";import"./chunk-AYJ5UCUI-DwxRC3Bw.js";import"./cloneDeep-yBjRdL4k.js";import"./_initCloneObject-B9ahOE9F.js";import"./Skeleton-CkqDtb85.js";import"./merge-Bb3N9CEi.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-D5GxPzI3.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DvluwVSj.js";import"./Backdrop-D26XsY6T.js";import"./LinearProgress-IutgoFW1.js";import"./index-DEvKpCy_.js";import"./index-CfILnNQx.js";import"./index-CpG77-61.js";import"./const-Doag8klc.js";import"./index-Cimw7LYD.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
