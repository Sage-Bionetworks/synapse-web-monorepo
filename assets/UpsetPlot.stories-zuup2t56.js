import{U as L}from"./UpsetPlot-Byu5031o.js";import{f as u}from"./index-DqzWNi4f.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-9F0IhJwb.js";import"./DefaultPropsProvider-rpfn49E6.js";import"./createTheme-C_6BZK9I.js";import"./index-Ql9GupV3.js";import"./iframe-BbHdFlCZ.js";import"./Button-D2UKPT4_.js";import"./createSimplePaletteValueFilter-BIR6Oix8.js";import"./useTimeout-TryPwkLv.js";import"./ButtonBase-Bt8F52QF.js";import"./useForkRef-BF16tT9B.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-C70WqXs-.js";import"./useFiles-NAPEOWTe.js";import"./VerificationSubmission-NmfK1W18.js";import"./SynapseConstants-ZujiDdnj.js";import"./OrientationBanner-BFVnzJCT.js";import"./index-DMDSLEuz.js";import"./spreadSx-CwcO6WA9.js";import"./react-zz4KRBGZ.js";import"./FullWidthAlert-D3CWhk1l.js";import"./Alert-CZm30nVm.js";import"./useSlot-BTPaFSp6.js";import"./createSvgIcon-CPcNPoAE.js";import"./Close-Cpfh8eGa.js";import"./IconButton-Byr7eQUa.js";import"./Paper-DzUltBD5.js";import"./useTheme-CXo8RiLD.js";import"./useTheme-BMAsJgNK.js";import"./Stack-CNcS7o0G.js";import"./extendSxProp-DmfldSCx.js";import"./getThemeProps-fXGlpw-D.js";import"./Box-CA3S1lN6.js";import"./AlertTitle-EMsYZkCw.js";import"./Typography-D7deOCV_.js";import"./index-B587bjKH.js";import"./ClickAwayListener-PpiBcJVc.js";import"./getReactElementRef-elL7tX--.js";import"./index-CqAKZs2B.js";import"./index-SqxiyzVh.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-KpdUeqoE.js";import"./Tooltip-BFZ2f7bi.js";import"./index-B-0wYL79.js";import"./useControlled-0i4uVPox.js";import"./Popper-CiJ7Ne0_.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-BNYuqUnX.js";import"./QueryClientProvider-DqJEe2D5.js";import"./Link-BPac_WEw.js";import"./Collapse-BQ7cM5q3.js";import"./_baseUniq-DKv4zAu-.js";import"./_Uint8Array-ByDmfzgO.js";import"./isArray-DEIFM-s9.js";import"./_getTag-Db2AEv7U.js";import"./isEqual-Baw0u5Wf.js";import"./merge-qUzdv09r.js";import"./_initCloneObject-CWeP-xbp.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-B64SxHFI.js";import"./inputBaseClasses-DAdGnvWP.js";import"./calculateFriendlyFileSize-DP-Gl2nj.js";import"./CheckCircleTwoTone-DfJnscXI.js";import"./InfoTwoTone-BmG_ee19.js";import"./useMutation-BnQem0Nf.js";import"./dayjs.min-brR9x7FJ.js";import"./chunk-AYJ5UCUI-vAcJJ7XF.js";import"./cloneDeep-gtIpU5US.js";import"./Skeleton-BLLmu3fn.js";import"./SqlFunctions-B-lgMRiM.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-ymbQ_R9Q.js";import"./Backdrop-Db4PG58g.js";import"./LinearProgress-DWKQ2O1O.js";import"./index-CY6BERDw.js";import"./index-Bu1SVbNT.js";import"./index-DtZEa-fb.js";import"./const-BP60AzNb.js";import"./index-CTAgDID8.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
