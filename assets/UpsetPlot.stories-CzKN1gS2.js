import{U as L}from"./UpsetPlot-1Pp_Y1Zw.js";import{f as u}from"./index-DeFTSxPP.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-DPWruL7z.js";import"./DefaultPropsProvider-BzWAken2.js";import"./createTheme-DPxGCk7e.js";import"./index-B2AGccKG.js";import"./iframe-eFKYoG0j.js";import"./Button-PQgF7jJQ.js";import"./createSimplePaletteValueFilter-BZRticgE.js";import"./useTimeout-CUZLOZF-.js";import"./ButtonBase-DIrjwtNY.js";import"./useForkRef-DmkJa-bD.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DFqmzg7D.js";import"./useFiles-CeqoVw1o.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-CPCmN-gi.js";import"./OrientationBanner-CQIm-Ey1.js";import"./index-BcLN8RXQ.js";import"./spreadSx-CwcO6WA9.js";import"./react-DxcobhRw.js";import"./FullWidthAlert-BIez5okj.js";import"./Alert-BBi6u3qT.js";import"./useSlot-DbYJ23lg.js";import"./createSvgIcon-CrjzRFSh.js";import"./Close-CwrIQBfZ.js";import"./IconButton-ByH8Kolw.js";import"./Paper-DASBMk3C.js";import"./useTheme-B4bAnXTN.js";import"./useTheme-BpFXk7Pw.js";import"./Stack-CbTviNUh.js";import"./extendSxProp-DPlEdwEe.js";import"./getThemeProps-BwGkw9Dq.js";import"./Box-DHqzE0KV.js";import"./AlertTitle-cUB69DsC.js";import"./Typography-Cm6ZNAW-.js";import"./index-BjkGhtTa.js";import"./ClickAwayListener-Dhz2ywRL.js";import"./getReactElementRef-BY9sPS19.js";import"./index-ZBSk-buD.js";import"./index-D5UfxxD5.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BYbIhAFm.js";import"./Tooltip-D6WWxUQx.js";import"./index-Y3VDk8SE.js";import"./useControlled-BkANWM5f.js";import"./Popper-7a6yE7es.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-BWzyFAd_.js";import"./QueryClientProvider-CRKWWU78.js";import"./Link-c4vBsqYa.js";import"./Collapse-3gCBuOnS.js";import"./_baseUniq-B5SLkIvU.js";import"./_Uint8Array-nwwAmTj4.js";import"./isArray-Dpn4sx4n.js";import"./_getTag-bITFctIo.js";import"./isEqual-Dxe0NAh8.js";import"./merge-D1CwwhmI.js";import"./_initCloneObject-D2f-QGXU.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-D3Qy40VT.js";import"./inputBaseClasses-CY7MzjF7.js";import"./calculateFriendlyFileSize-XuDPvr9B.js";import"./CheckCircleTwoTone-B0-qzMIh.js";import"./InfoTwoTone-DSitWCJH.js";import"./useMutation-B17C9-3a.js";import"./dayjs.min-CjB-a8se.js";import"./chunk-AYJ5UCUI-DPDI74MQ.js";import"./cloneDeep-Dl2F-bJn.js";import"./Skeleton-DbvZ5cWo.js";import"./SqlFunctions-B6aZ8mL4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-CTaS2ytc.js";import"./Backdrop--mvX-O_t.js";import"./LinearProgress-BmCZXOvf.js";import"./index-CH1NehxQ.js";import"./index-Dsl2p2NU.js";import"./index-Dzm3letU.js";import"./const-BP60AzNb.js";import"./index-C7GJL_L5.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
