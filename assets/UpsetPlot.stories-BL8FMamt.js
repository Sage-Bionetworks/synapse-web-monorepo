import{U as L}from"./UpsetPlot-BNYZqzEi.js";import{f as u}from"./index-CiQM1KYT.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-DnoN7-Uk.js";import"./DefaultPropsProvider-DfeCRuM2.js";import"./createTheme-C8aN_5H7.js";import"./index-BbTPqiCn.js";import"./iframe-BDeBTOK4.js";import"./Button-DO_YtF-L.js";import"./createSimplePaletteValueFilter-CkWiCtpD.js";import"./useTimeout-D3iui2zG.js";import"./ButtonBase-B6SxUwFg.js";import"./useForkRef-BDlNsu6F.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Di39B066.js";import"./useFiles-DpJBj2AL.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-CqTJLipI.js";import"./OrientationBanner-C9wDwZSC.js";import"./index-CnsReYf-.js";import"./spreadSx-CwcO6WA9.js";import"./react-BknCWz1L.js";import"./FullWidthAlert-BXBdUtvq.js";import"./Alert--2zsbDLV.js";import"./useSlot-DH9rqZvE.js";import"./createSvgIcon-DB8vrG54.js";import"./Close-FgBi9k_n.js";import"./IconButton-bBx42FY4.js";import"./Paper-CW_EMfLy.js";import"./useTheme-D1Mz9iKf.js";import"./useTheme-CiV8_rAf.js";import"./Stack-Dkx_EbsU.js";import"./useThemeProps-BGnqLams.js";import"./getThemeProps-BkdBMERG.js";import"./extendSxProp-C7UKrf5K.js";import"./Box-DVYF36LU.js";import"./AlertTitle-Do0KjEmZ.js";import"./Typography-CyqgmQqf.js";import"./index-RffKHa2K.js";import"./ClickAwayListener-CgxM2Y3N.js";import"./getReactElementRef-BnzINgQV.js";import"./index-BEGoUC_S.js";import"./index-QvRUPdA0.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DBmkL7Nf.js";import"./Tooltip-DIv0rXnM.js";import"./index-CKApejzQ.js";import"./useControlled-Cezacta0.js";import"./Popper-DA9vNxNk.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-BazSUp96.js";import"./QueryClientProvider-DROpbOor.js";import"./Link-t4uxn4d5.js";import"./Collapse-BvEvwhh1.js";import"./_baseUniq-D2vZ8VQ3.js";import"./_Uint8Array-DLQNtMzN.js";import"./isArray-DP3AaeZx.js";import"./_getTag-8zR4n8vk.js";import"./isEqual-BDrI-DAW.js";import"./noop-DX6rZLP_.js";import"./merge-V-4g9wfx.js";import"./_initCloneObject-DzFlCXpP.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DblKOQCF.js";import"./inputBaseClasses-CzCcMIdu.js";import"./calculateFriendlyFileSize-C9qxO0pM.js";import"./CheckCircleTwoTone-JwoKdBR7.js";import"./InfoTwoTone-DPKU0Q1t.js";import"./useMutation-B8qQRwG6.js";import"./dayjs.min-B-Cmgun6.js";import"./chunk-AYJ5UCUI-CooKSxTU.js";import"./cloneDeep-CmGcLtYN.js";import"./Skeleton-Dc4-dhYQ.js";import"./SqlFunctions-B8wRZva4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-CwiLH8uN.js";import"./Backdrop-DkQYsTeg.js";import"./LinearProgress-Du-3dBeY.js";import"./index-PpslJeGb.js";import"./index-CAsVpK1Y.js";import"./index-dz8jKRf5.js";import"./const-BP60AzNb.js";import"./index-DxDswEVX.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
