import{U as L}from"./UpsetPlot-CRRLMtV-.js";import{f as u}from"./index-CtXnnE6l.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-BTBHDtPl.js";import"./DefaultPropsProvider-DGXu47pl.js";import"./createTheme-BAQ3rZhl.js";import"./index-CcTQ3WdX.js";import"./iframe-CYkumvO5.js";import"./Button-BXf8fhfi.js";import"./createSimplePaletteValueFilter-Cplj6hkT.js";import"./useTimeout-DaidvoSY.js";import"./ButtonBase-D05d1-H-.js";import"./useForkRef-BljHSZVO.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-O9xTCaBT.js";import"./useFiles-oO7GrsV5.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-Bmu9G6LM.js";import"./OrientationBanner-BK_U_QS6.js";import"./index-D6IgxdMK.js";import"./spreadSx-CwcO6WA9.js";import"./react-DA31n1ZF.js";import"./FullWidthAlert-FejwYpUb.js";import"./Alert-CM8tkFFZ.js";import"./useSlot-DrlupqXw.js";import"./createSvgIcon-CZ-GW4zL.js";import"./Close-jLj2T727.js";import"./IconButton-DkwgSArA.js";import"./Paper-CylKyD4j.js";import"./useTheme-CY9JWpxK.js";import"./useTheme-CejdeoLN.js";import"./Stack-DkhwwS4g.js";import"./useThemeProps-DT73glV_.js";import"./getThemeProps-ByCJoaGS.js";import"./extendSxProp-BHvI69bl.js";import"./Box-CE5cjKbm.js";import"./AlertTitle-B89-U-6u.js";import"./Typography-DNHXQdFk.js";import"./index-pWe_y6eu.js";import"./ClickAwayListener-CJlLM5BK.js";import"./getReactElementRef-D4qxxYNU.js";import"./index-Du4HHj8v.js";import"./index-DQ-U_C86.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DlsUjMbS.js";import"./Tooltip-EVgy7Cv2.js";import"./index-Dq_74rXD.js";import"./useControlled-DngFEdhJ.js";import"./Popper-DCZu-ZtC.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-CndoBeOz.js";import"./QueryClientProvider-DvAzj1_f.js";import"./Link-BEZ_n53O.js";import"./Collapse-BUVbvzbA.js";import"./_baseUniq-DX2jmGNc.js";import"./_Uint8Array-DugeRibj.js";import"./isArray-BMB1XgSf.js";import"./_getTag-DrtrN6SG.js";import"./isEqual-DU5zUzGe.js";import"./noop-DX6rZLP_.js";import"./merge-CtKOImIh.js";import"./_initCloneObject-CS3p4FjZ.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BEn4SSZZ.js";import"./inputBaseClasses-BSqbkdlX.js";import"./calculateFriendlyFileSize-B8Lwwjn7.js";import"./CheckCircleTwoTone-DJt1hcfd.js";import"./InfoTwoTone-XSsxJQnA.js";import"./useMutation-BPfoSKCy.js";import"./dayjs.min-CjQ7llLN.js";import"./chunk-AYJ5UCUI-DNCVSZLe.js";import"./cloneDeep-BooNHHIp.js";import"./Skeleton-DETWlJEm.js";import"./SqlFunctions-B8wRZva4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen--5yVK8Rs.js";import"./Backdrop-DkkHWssF.js";import"./LinearProgress-ooiJN65t.js";import"./index-LnMmq72F.js";import"./index-DvFf7Yq7.js";import"./index-FkyNgHoI.js";import"./const-BP60AzNb.js";import"./index-BECnRGA5.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
