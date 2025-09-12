import{U as L}from"./UpsetPlot-c7VOSN1u.js";import{f as u}from"./index-MxqpE9KV.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-BMqSD7I7.js";import"./DefaultPropsProvider-CCvcxJNd.js";import"./createTheme-BWzdH0Tw.js";import"./index-B6sCHtko.js";import"./iframe-Dyc1tvxa.js";import"./Button-8h_8cD3R.js";import"./createSimplePaletteValueFilter-CMkrO5Gi.js";import"./useTimeout-DUwBfTM5.js";import"./ButtonBase-CUnnAwa6.js";import"./useForkRef-DUqjROYa.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CT39lesf.js";import"./useFiles-DfV3g7j3.js";import"./VerificationSubmission-DHtRxRPZ.js";import"./SynapseConstants-BeeeLEMb.js";import"./OrientationBanner-Do4jzaCq.js";import"./index-BFZGQ6OZ.js";import"./spreadSx-CwcO6WA9.js";import"./react-D7gwMTFz.js";import"./FullWidthAlert-Bewi29vo.js";import"./Alert-Cz1bM932.js";import"./useSlot-Db71F0Ap.js";import"./createSvgIcon-C--GKjVa.js";import"./Close-oTdZr2QN.js";import"./IconButton-TfKmbk1q.js";import"./Paper-CI2WrX6i.js";import"./useTheme-C3WRzWQr.js";import"./useTheme-DrGalr3E.js";import"./Stack-CYHPltJP.js";import"./extendSxProp-D8MMv9HH.js";import"./getThemeProps-cCUYVmNA.js";import"./Box-B4DT_63e.js";import"./AlertTitle-C0GFUGtD.js";import"./Typography-CjHB-jF7.js";import"./index-COs8OngO.js";import"./ClickAwayListener-9Td87dKe.js";import"./getReactElementRef-6O_b0WmK.js";import"./index-5LQf57Zc.js";import"./index-f60bxPXB.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DCOXsKMM.js";import"./Tooltip-CgudnGYK.js";import"./index-Bedvx39d.js";import"./useControlled-CkNRWmXj.js";import"./Popper-Cv8b6PxU.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-DP1EOPFU.js";import"./useQuery-CO7ddoea.js";import"./QueryClientProvider-Bsm8Viqu.js";import"./Link-BqVElqqF.js";import"./Collapse-CpLblW_e.js";import"./_baseUniq-9gO7m8Ct.js";import"./_Uint8Array-CuRypYcz.js";import"./isArray-NVQNoNUM.js";import"./_getTag-BL5NJBfU.js";import"./isEqual-BogDr9UX.js";import"./merge-BOVQlJlI.js";import"./_initCloneObject-BD93w92L.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DGN7jsVH.js";import"./inputBaseClasses-LiHImfCr.js";import"./calculateFriendlyFileSize-EeAcNQrV.js";import"./CheckCircleTwoTone-B107xYF1.js";import"./InfoTwoTone-D2pybSip.js";import"./useMutation-DJj0HLy6.js";import"./dayjs.min-DDBsyKwq.js";import"./chunk-AYJ5UCUI-0eZLL8Z-.js";import"./cloneDeep-DopPwT4s.js";import"./Skeleton-Cifl5Ozt.js";import"./SqlFunctions-DQ27hT8m.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BExdnYTH.js";import"./Backdrop-DRdOboRQ.js";import"./LinearProgress-BvjIaNt7.js";import"./index-CpnoooGW.js";import"./index-DD2HwE7z.js";import"./index-B0MDPxvh.js";import"./const-BP60AzNb.js";import"./index-DttGltIu.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
