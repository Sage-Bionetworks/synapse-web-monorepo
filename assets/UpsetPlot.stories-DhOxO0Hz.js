import{U as L}from"./UpsetPlot-COFryIcg.js";import{f as u}from"./index-NURAM4q4.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-BnV1kqNk.js";import"./DefaultPropsProvider-BT4R1ruD.js";import"./createTheme-CeLgvmU3.js";import"./index-B25hjvII.js";import"./iframe-CanEKFkf.js";import"./Button-DtzkNhDQ.js";import"./createSimplePaletteValueFilter-Dmw5w500.js";import"./useTimeout-CT9u6xIp.js";import"./ButtonBase-DVVpaHYC.js";import"./useForkRef-C_zmFNEw.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-a2Aa-IB0.js";import"./useFiles-D_gVWFHx.js";import"./VerificationSubmission-CNoSrCdk.js";import"./SynapseConstants-MtbKIoc0.js";import"./OrientationBanner-TuzAQv9d.js";import"./index-Bgb0qH91.js";import"./spreadSx-CwcO6WA9.js";import"./react-gdPSVHxq.js";import"./FullWidthAlert-CsnT3S0Z.js";import"./Alert-CMUYxoU4.js";import"./useSlot-FmPpnltM.js";import"./createSvgIcon-B3urn6DB.js";import"./Close-BFk95YTC.js";import"./IconButton-Bo1_iaRr.js";import"./Paper-CrOcAKNw.js";import"./useTheme-W4kAWd5b.js";import"./useTheme-S_q5Ryto.js";import"./Stack-CX78Gz_0.js";import"./extendSxProp-MkfofRzG.js";import"./getThemeProps-BIWXTvD7.js";import"./Box-DvcAnSFU.js";import"./AlertTitle-JLHtZuQn.js";import"./Typography-C1n2Gc-4.js";import"./index-CNqkfiqy.js";import"./ClickAwayListener-Bjyhl2ez.js";import"./getReactElementRef-B5zyHyCE.js";import"./index-DN2r2ujZ.js";import"./index-h-VymCwS.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-ymICMWfx.js";import"./Tooltip-BuHnAymE.js";import"./index-DQDbwlvs.js";import"./useControlled-D0puIBKv.js";import"./Popper-CUKMxY22.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-CwQ1lgbR.js";import"./useQuery-Bfg-ZGUc.js";import"./QueryClientProvider-Bp731WZp.js";import"./Link-DZC6UXn4.js";import"./Collapse-CZ2ygZqM.js";import"./_baseUniq-DS_qtplq.js";import"./_Uint8Array-CWekYRsx.js";import"./isArray-BQjuIHDh.js";import"./_getTag-DA_-6Xr_.js";import"./isEqual-CBHP1RPv.js";import"./merge-BDNvaxBl.js";import"./_initCloneObject-DZRG-IW9.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-zN12Tza6.js";import"./inputBaseClasses-Dqo0IIFM.js";import"./calculateFriendlyFileSize-RGx1gGOH.js";import"./CheckCircleTwoTone-DcmFcPP3.js";import"./InfoTwoTone-DR6uvdma.js";import"./useMutation-BaIPXJDt.js";import"./dayjs.min-DonIRj0C.js";import"./chunk-AYJ5UCUI-CY7fVuNR.js";import"./cloneDeep-BzZKBefz.js";import"./Skeleton-CnthbRVq.js";import"./SqlFunctions-zz0CCrj4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-bNqOLi6a.js";import"./Backdrop-DkFuSOBH.js";import"./LinearProgress-DI-CDo1l.js";import"./index-teu2Tzb8.js";import"./index-CQsO4JMB.js";import"./index-BM3s2Z0U.js";import"./const-BP60AzNb.js";import"./index-C0OvX3ts.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
