import{U as L}from"./UpsetPlot-CPvFxQ4E.js";import{f as u}from"./index-a_mjkFvk.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-G2u_kiMP.js";import"./DefaultPropsProvider-b_g8zUyE.js";import"./createTheme-DrHrTBAI.js";import"./index-CWZWvv1W.js";import"./iframe-Dl6dwUMh.js";import"./Button-CBChxZSW.js";import"./createSimplePaletteValueFilter-DQ6vsZ1N.js";import"./useTimeout-QsaiUxz8.js";import"./ButtonBase-BbrLiB8i.js";import"./useForkRef-B7ScjJI-.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-iciy9I-w.js";import"./useFiles-JGbdqG3Z.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-kWct_gQs.js";import"./OrientationBanner-Ck0cmJTU.js";import"./index-DY5eCRt3.js";import"./spreadSx-CwcO6WA9.js";import"./react-041y4hcL.js";import"./FullWidthAlert-BVVPVNM_.js";import"./Alert-7WB9ky2v.js";import"./useSlot-W-35lwUb.js";import"./createSvgIcon-CGP5Vahk.js";import"./Close-CHvILsQT.js";import"./IconButton-CnA-Cp_o.js";import"./Paper-BssQ7z_K.js";import"./useTheme-VP9MaFmI.js";import"./useTheme-W99C2NWG.js";import"./Stack-BtAK458Q.js";import"./extendSxProp-bGo6jZzH.js";import"./getThemeProps-DsLLdsLt.js";import"./Box-BW7pWfnx.js";import"./AlertTitle-CGItHB3S.js";import"./Typography-lJ_1_SO5.js";import"./index-CZZGf4is.js";import"./ClickAwayListener-CwoGzl_2.js";import"./getReactElementRef-v5yPsMqZ.js";import"./index-CDcwVaYq.js";import"./index-B6U5P1sA.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CWSVLSwQ.js";import"./Tooltip-C7ySumjD.js";import"./index-BjOTui5h.js";import"./useControlled-CQrAKh1A.js";import"./Popper-CkkCOvJq.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-DUZYe0ub.js";import"./QueryClientProvider-CX6pklzM.js";import"./Link-CimwTNCl.js";import"./Collapse-DVtgaf19.js";import"./_baseUniq-HMETs2Z2.js";import"./_Uint8Array-C9TiJjUd.js";import"./isArray-BJslNNN2.js";import"./_getTag-XmbY4FoW.js";import"./isEqual-DNkn9Q83.js";import"./merge-CqcSBB9I.js";import"./_initCloneObject-BGoKfN6L.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-D6tyxliU.js";import"./inputBaseClasses-LMGvHKbZ.js";import"./calculateFriendlyFileSize-B6ZKKM-n.js";import"./CheckCircleTwoTone-D_IhPaUf.js";import"./InfoTwoTone-B_CAKEKg.js";import"./useMutation-BJhaoQyM.js";import"./dayjs.min-BmvV46gs.js";import"./chunk-AYJ5UCUI-BeySss7E.js";import"./cloneDeep-HZfj7TcY.js";import"./Skeleton-B5sKivAV.js";import"./SqlFunctions-C8HqQ3uk.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DmCwPvJJ.js";import"./Backdrop-ChnpcaW5.js";import"./LinearProgress-DdejlR5b.js";import"./index-C-TIui5w.js";import"./index-_2Q-SDx2.js";import"./index-B8-jiqnJ.js";import"./const-BP60AzNb.js";import"./index-C5slJ93f.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
