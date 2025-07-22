import{U as L}from"./UpsetPlot-CdXjugqA.js";import{f as u}from"./index-IPoDBhH6.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-B-ODdfNQ.js";import"./DefaultPropsProvider-2rL3zKZZ.js";import"./createTheme-BxrJIZZA.js";import"./index-C6CB2jWR.js";import"./iframe-BrY7ve3a.js";import"./Button-ARfYFQRF.js";import"./createSimplePaletteValueFilter-CAMoPieZ.js";import"./useTimeout-hVuR9U1q.js";import"./ButtonBase-DvVhWcii.js";import"./useForkRef-Cpa6MheN.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-81Z4_lZz.js";import"./useFiles-B8v_yoVq.js";import"./VerificationSubmission-NmfK1W18.js";import"./SynapseConstants-D5MGXB0b.js";import"./OrientationBanner-DXfsKPKD.js";import"./index-CrtuBj0B.js";import"./spreadSx-CwcO6WA9.js";import"./react-C7XjUzLS.js";import"./FullWidthAlert-CKUNv5n5.js";import"./Alert-CY6v2Us8.js";import"./useSlot-40XJx3zz.js";import"./createSvgIcon-BTXgHK0C.js";import"./Close-BPdP5AlG.js";import"./IconButton-CbdRsmZ_.js";import"./Paper-CSESaBNh.js";import"./useTheme-B5LoXWfl.js";import"./useTheme-XKQ19B89.js";import"./Stack-DtCherd2.js";import"./extendSxProp-BpXXdIFm.js";import"./getThemeProps-BtEAG56k.js";import"./Box-Cy_lKH6E.js";import"./AlertTitle-CkzFa2mO.js";import"./Typography-BRpkhNhA.js";import"./index-CLQctDsx.js";import"./ClickAwayListener-BmrFbcSi.js";import"./getReactElementRef-B9ecqkhl.js";import"./index-DDRx11n6.js";import"./index-C9S1haND.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-5B01QhkT.js";import"./Tooltip-bO2wIMLb.js";import"./index--2jRr67_.js";import"./useControlled-CprGF-Oj.js";import"./Popper-B-aCHUvm.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-CSjhYa6F.js";import"./QueryClientProvider-D6vTImx2.js";import"./Link-CL9jvq0Z.js";import"./Collapse-DZ4hP59A.js";import"./_baseUniq-BxY9p7tT.js";import"./_Uint8Array-RSRR2-ef.js";import"./isArray-3Re1H6_m.js";import"./_getTag-DPkIZdby.js";import"./isEqual-C9Q3mZ9F.js";import"./merge-U0hqNhRx.js";import"./_initCloneObject-BO3X6uKd.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-D6mYJQm1.js";import"./inputBaseClasses-DISLeeEk.js";import"./calculateFriendlyFileSize-K8w4xgaX.js";import"./CheckCircleTwoTone-BJ-saQul.js";import"./InfoTwoTone-BZ1ttLwb.js";import"./useMutation-C3GuUf9J.js";import"./dayjs.min-zjrh0DVn.js";import"./chunk-AYJ5UCUI-DV9WKtjr.js";import"./cloneDeep-DeeuzNKv.js";import"./Skeleton-gFmRZZ7u.js";import"./SqlFunctions-B-lgMRiM.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-Dnf8zbKK.js";import"./Backdrop-DPBqC6sb.js";import"./LinearProgress-CMW8WHSv.js";import"./index-BQaYjGkX.js";import"./index-CkJ0OHpO.js";import"./index-C_fE8tdP.js";import"./const-BP60AzNb.js";import"./index-Dht_1CgP.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
