import{U as L}from"./UpsetPlot-kSJo-tNL.js";import{f as u}from"./index-CpPIHQ5_.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-C3j-uWyn.js";import"./DefaultPropsProvider-COwJEhlj.js";import"./createTheme-BL3Erky_.js";import"./index-RrA2ZeU8.js";import"./iframe-Cl7yHxey.js";import"./Button-BEEyN1i5.js";import"./createSimplePaletteValueFilter-BTUUkyHX.js";import"./useTimeout-DGdq9XXh.js";import"./ButtonBase-DZeD6OmU.js";import"./useForkRef-7FksC7Wk.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-JqIc0wtk.js";import"./useFiles-BZn2zwij.js";import"./VerificationSubmission-CMrrYimb.js";import"./SynapseConstants-CZppcqKY.js";import"./OrientationBanner-2w8GnB88.js";import"./index-BFLTeMN7.js";import"./spreadSx-CwcO6WA9.js";import"./react-Dnp_5-VT.js";import"./FullWidthAlert-D-7kzovJ.js";import"./Alert-HXCm2ukD.js";import"./useSlot-DPCj5w37.js";import"./createSvgIcon-bnX5AEip.js";import"./Close-DM2leFU3.js";import"./IconButton-S1pQl1Qb.js";import"./Paper-DiNvo0OR.js";import"./useTheme-Ct7FFNBK.js";import"./useTheme-99fH-d8E.js";import"./Stack-r6VQu8BX.js";import"./extendSxProp-C9QzDRlU.js";import"./getThemeProps-BILLkI9C.js";import"./Box-C4n8VpXx.js";import"./AlertTitle-DX3Er_xV.js";import"./Typography-C3KVIo5J.js";import"./index-CeXYih2O.js";import"./ClickAwayListener-0-8j9UKu.js";import"./getReactElementRef-C_WWxu9h.js";import"./index-Bsynu-fh.js";import"./index--rNMgt8r.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BjkRkIh9.js";import"./Tooltip-QNoITWuX.js";import"./index-u7SOeJ0n.js";import"./useControlled-D-DOyfjM.js";import"./Popper-D2G1xZsN.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ZWLpjIdm.js";import"./useQuery-vKaTDWF8.js";import"./QueryClientProvider-DKALCs-s.js";import"./Link-DWy4Krdn.js";import"./Collapse-Dn5clTlB.js";import"./_baseUniq-DHWoN2oF.js";import"./_Uint8Array-Bhyyg1TJ.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-UDjeZMJA.js";import"./isArray-Dxzbedgu.js";import"./_getTag-Cpn6i2oH.js";import"./isEqual-D_YUXdZO.js";import"./merge-D_xgEugG.js";import"./_initCloneObject-VZ4ZIpDG.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DvuAdk7a.js";import"./inputBaseClasses-9iEejl7P.js";import"./calculateFriendlyFileSize-Bj-tb9VL.js";import"./CheckCircleTwoTone-C2zsmKmG.js";import"./InfoTwoTone-Dj4324tE.js";import"./useMutation-Zc9HGuUS.js";import"./dayjs.min-y9IVFdO2.js";import"./chunk-AYJ5UCUI-CsQTRQBd.js";import"./cloneDeep-ClT3OHhm.js";import"./Skeleton-CAuWZ4Jn.js";import"./SqlFunctions-c3WXx9n7.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BAgt_JiS.js";import"./Backdrop-DZGa36zi.js";import"./LinearProgress-DqEEFlzY.js";import"./index-CTNYLCt8.js";import"./index-QFpCn8zV.js";import"./index-CDTMMvZg.js";import"./const-BP60AzNb.js";import"./index-BCQRBFA1.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
