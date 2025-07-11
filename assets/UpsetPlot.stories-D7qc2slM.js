import{U as L}from"./UpsetPlot-C2aP0-h0.js";import{f as u}from"./index-BCKP7LiK.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-D_56AgHk.js";import"./DefaultPropsProvider-BspoEs_3.js";import"./createTheme-NstNY56j.js";import"./index-DfXhoS93.js";import"./iframe-CmMCQ4D1.js";import"./Button-CIhLg1aw.js";import"./createSimplePaletteValueFilter-BVA8XCKf.js";import"./useTimeout-BXTGuQAu.js";import"./ButtonBase-Cx1k84i0.js";import"./useForkRef-BP-fxWVS.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-LMad5R4j.js";import"./useFiles-BGqzmh3K.js";import"./VerificationSubmission-NmfK1W18.js";import"./SynapseConstants-ljMAdx68.js";import"./OrientationBanner-BJoiLH5u.js";import"./index-BLHxJKGR.js";import"./spreadSx-CwcO6WA9.js";import"./react-C55eq54t.js";import"./FullWidthAlert-Dmg54ubi.js";import"./Alert-DdXaF5ih.js";import"./useSlot-G1lnVT-7.js";import"./createSvgIcon-DWS9jufq.js";import"./Close-Bw8bO_ey.js";import"./IconButton-BWMua7vU.js";import"./Paper-De0lh8eX.js";import"./useTheme-BWvFZ9eF.js";import"./useTheme-BYUnt95G.js";import"./Stack-CfaqAJqE.js";import"./extendSxProp-SsxQet_B.js";import"./getThemeProps-C5S3wagm.js";import"./Box-uE-W7Sa0.js";import"./AlertTitle-CCmDEvrt.js";import"./Typography-UvjlH3GM.js";import"./index-BhAvfGUh.js";import"./ClickAwayListener-BwjI0Npa.js";import"./getReactElementRef-mWD2ut9h.js";import"./index-Birxyppr.js";import"./index-C4Gk4dZy.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-HWLRwbg6.js";import"./Tooltip-D5cxmH7B.js";import"./index-D63gI9c1.js";import"./useControlled-DmifYyk4.js";import"./Popper-DR2KrX6d.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-8Z3xdu9W.js";import"./QueryClientProvider-DMlK99P5.js";import"./Link-BSPnFS7F.js";import"./Collapse-DBDRnYj5.js";import"./_baseUniq-BI8Wf5sc.js";import"./_Uint8Array-Ydrn2Wyi.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CX_aDVYj.js";import"./isArray-Dxzbedgu.js";import"./_getTag-D1f8lrtD.js";import"./isEqual-DxBbzxZF.js";import"./merge-DIokW4tV.js";import"./_initCloneObject-DQnn-fay.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-2DQ5ggOQ.js";import"./inputBaseClasses-CX2aFV1A.js";import"./calculateFriendlyFileSize-5GaeDM8q.js";import"./CheckCircleTwoTone-3PcAFoLI.js";import"./InfoTwoTone-o8EvCK01.js";import"./useMutation-Dx_N1B5f.js";import"./dayjs.min-BaM1Jxz1.js";import"./chunk-AYJ5UCUI-DkR7fV6X.js";import"./cloneDeep-C6XcWJ4n.js";import"./Skeleton-F5jMcS6Z.js";import"./SqlFunctions-CqOxgBqv.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-Cnl3ObEs.js";import"./Backdrop-BLvUnQQJ.js";import"./LinearProgress-BBr9BU56.js";import"./index-BiHhtHIY.js";import"./index-BOv6vN-y.js";import"./index-XL0JWOQF.js";import"./const-BP60AzNb.js";import"./index-BgHo3-0T.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
