import{U as L}from"./UpsetPlot-CEL3GztG.js";import{f as u}from"./index-CpahEnBX.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-qrskJVHh.js";import"./DefaultPropsProvider-BaSYOPs_.js";import"./createTheme-DgzdyVUD.js";import"./index-D74nAv4K.js";import"./iframe-Ccor4afl.js";import"./Button-Ci0K1sFb.js";import"./createSimplePaletteValueFilter-BtXRE-wI.js";import"./useTimeout--jiegund.js";import"./ButtonBase-DzpekvZp.js";import"./useForkRef-BMxq_MIC.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Bp9rJEqc.js";import"./useFiles-BPLeY_T0.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-BDTIQPW-.js";import"./OrientationBanner-D6TfClQZ.js";import"./index-CFBRiZ1w.js";import"./spreadSx-CwcO6WA9.js";import"./react-D-QmtcUJ.js";import"./FullWidthAlert-D1IF5V4Z.js";import"./Alert-Cp1wuOAE.js";import"./useSlot-DG2qCDn3.js";import"./createSvgIcon-Ksakvuew.js";import"./Close-qu3HWGgD.js";import"./IconButton-IqySOcq2.js";import"./Paper-CazC8z3H.js";import"./useTheme-B2s4EB7u.js";import"./useTheme-Ca_XsRek.js";import"./Stack-nACsOQMl.js";import"./extendSxProp-BzmqKLI1.js";import"./getThemeProps-DZdSY8L1.js";import"./Box-lXBqa0w4.js";import"./AlertTitle-VLBSHrk2.js";import"./Typography-4g68DreH.js";import"./index-svIImqrz.js";import"./ClickAwayListener-Bz-ReVU0.js";import"./getReactElementRef-Box9zENy.js";import"./index-Cg-NYdTp.js";import"./index-B23RCk9E.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CjNaCVG-.js";import"./Tooltip-C8ZStvVN.js";import"./index-Ct9Rf63b.js";import"./useControlled-D3eLpMPG.js";import"./Popper-DdPF3MkX.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BYEtqtR3.js";import"./useQuery-aHTHwXyx.js";import"./QueryClientProvider-BRldLZ-m.js";import"./Link-BnLqsAr0.js";import"./Collapse-CYQyUAKl.js";import"./_baseUniq-BI6FpUhd.js";import"./_Uint8Array-CgpluCFv.js";import"./isArray-DcG_fQmu.js";import"./_getTag-Y03KTm9l.js";import"./isEqual-B4Y5Mthl.js";import"./merge-DTTjlo60.js";import"./_initCloneObject-BkHORoGk.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-8AEzUVpA.js";import"./inputBaseClasses-_-Z8ymSP.js";import"./calculateFriendlyFileSize-DVdgBpm5.js";import"./CheckCircleTwoTone-DNy4X0lL.js";import"./InfoTwoTone-DljfHxNq.js";import"./useMutation-Cb2l52Mt.js";import"./dayjs.min-CkZTX9Mn.js";import"./chunk-AYJ5UCUI-Bm-JoqAt.js";import"./cloneDeep-DhV9vMAr.js";import"./Skeleton-DyqvYy1n.js";import"./SqlFunctions-Dcy2rA-G.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DDNzTic9.js";import"./Backdrop-CvXZ4Xev.js";import"./LinearProgress-DxDiFvbg.js";import"./index-YsM-F82k.js";import"./index-CeYGXEn_.js";import"./index-Bg-fKqGX.js";import"./const-BP60AzNb.js";import"./index-BvQDfkEB.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
