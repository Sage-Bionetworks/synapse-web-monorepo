import{U as L}from"./UpsetPlot-Q6XhVG61.js";import{f as u}from"./index-DPev_gil.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-DPzQ_A-h.js";import"./DefaultPropsProvider-ZG31g4it.js";import"./createTheme-DDjBIDwT.js";import"./index-D4HCKe9w.js";import"./iframe-DmVsNHze.js";import"./Button-B4c76i7l.js";import"./createSimplePaletteValueFilter-BfnPoD90.js";import"./useTimeout-B3vqbFY1.js";import"./ButtonBase-5xAiWb9k.js";import"./useForkRef-CtbIu23o.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-ClcLOpgT.js";import"./useFiles-CzKjjYtp.js";import"./VerificationSubmission-D0sL2gwz.js";import"./SynapseConstants-DhETcuUG.js";import"./OrientationBanner-BO2Urp1Z.js";import"./index-DmNLJKNh.js";import"./spreadSx-CwcO6WA9.js";import"./react-Cf5Ec-mS.js";import"./FullWidthAlert-DTnEraAC.js";import"./Alert-DZeS4a6d.js";import"./useSlot-B6tvNwBv.js";import"./createSvgIcon-KWX4yQl-.js";import"./Close-BXYzJc-1.js";import"./IconButton-C_01hWEL.js";import"./Paper-D9hajRDM.js";import"./useTheme-CMCRSdXO.js";import"./useTheme-B-XUUHR4.js";import"./Stack-pvEbUifr.js";import"./extendSxProp-BRR-amD5.js";import"./getThemeProps-vcNQnBjM.js";import"./Box-CnC4K3Hl.js";import"./AlertTitle-B8t1dWfY.js";import"./Typography-COIcc1hS.js";import"./index-Dv8t99-T.js";import"./ClickAwayListener-DTjm8Qvd.js";import"./getReactElementRef-Cq2rgrLM.js";import"./index-CDdDji97.js";import"./index-ij53IW3H.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BAl4bw2D.js";import"./Tooltip-BiehG5fl.js";import"./index-Cr6df_e3.js";import"./useControlled-CG4yijLR.js";import"./Popper-D6_eAqlt.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bt2r5KGg.js";import"./useQuery-c65xEHlU.js";import"./QueryClientProvider-C2sJR7rF.js";import"./Link-D-8puque.js";import"./Collapse-TlU8ywi5.js";import"./_baseUniq-BWQ-3uky.js";import"./_Uint8Array-v1dD2eCV.js";import"./isArray-DGXFKXW_.js";import"./_getTag-nqsjAOYQ.js";import"./isEqual-CR012Pz3.js";import"./merge-h4l3whDn.js";import"./_initCloneObject-DBdarpnq.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CQjdMO4r.js";import"./inputBaseClasses-ByCdm5ps.js";import"./calculateFriendlyFileSize-DXggbpxX.js";import"./CheckCircleTwoTone-BcVs8xEZ.js";import"./InfoTwoTone-QwWHAuS5.js";import"./useMutation-Ddf_PzNC.js";import"./dayjs.min-CwuDG8BM.js";import"./chunk-AYJ5UCUI-CwOFpPmP.js";import"./cloneDeep-ChqpFpcu.js";import"./Skeleton-BWhOU1Pc.js";import"./SqlFunctions-D9jcfCB0.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-Ca8yOGnX.js";import"./Backdrop-tURbt0Eh.js";import"./LinearProgress-CASe0_Fr.js";import"./index-Dwf8vm6R.js";import"./index-D-9fTzx0.js";import"./index-Cbg0sBAH.js";import"./const-BP60AzNb.js";import"./index-Czjlc2p6.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
