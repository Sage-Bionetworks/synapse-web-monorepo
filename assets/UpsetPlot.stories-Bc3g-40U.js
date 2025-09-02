import{U as L}from"./UpsetPlot-DH1F578L.js";import{f as u}from"./index-XQyRstzm.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-Bc6oeMKs.js";import"./DefaultPropsProvider-COWWULUE.js";import"./createTheme-Bx9zg2Aq.js";import"./index-8E8AJVLG.js";import"./iframe-CzLjpwC-.js";import"./Button-ywBIoKZb.js";import"./createSimplePaletteValueFilter-DDzZQsPH.js";import"./useTimeout-BP57oaAx.js";import"./ButtonBase-Cyxw6Mpk.js";import"./useForkRef-C_PXFLFs.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Dwx7-res.js";import"./useFiles-CJN3kP-B.js";import"./VerificationSubmission-CDh9xETu.js";import"./SynapseConstants-CiX6Gvr2.js";import"./OrientationBanner-D-aNPlud.js";import"./index-MNm9JVKb.js";import"./spreadSx-CwcO6WA9.js";import"./react-CwZBqyfL.js";import"./FullWidthAlert-D_VdwJ38.js";import"./Alert-CMhD3tNE.js";import"./useSlot-C-J-wYvm.js";import"./createSvgIcon-pAqF6Sga.js";import"./Close-CAAkSTlU.js";import"./IconButton-CDLYYfzu.js";import"./Paper-MzL6UsMi.js";import"./useTheme-BiqLUHW5.js";import"./useTheme-BGF5cY2j.js";import"./Stack-l6MPWt0d.js";import"./extendSxProp-BzCNwJ73.js";import"./getThemeProps-C3zF82al.js";import"./Box-DzK9TEyW.js";import"./AlertTitle-BcbX6m1C.js";import"./Typography-CuUtzz6d.js";import"./index-Ul9lyVXm.js";import"./ClickAwayListener-ct0gOahX.js";import"./getReactElementRef-CjntyuAB.js";import"./index-CSs9NJT0.js";import"./index-Tff9hZ9I.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Cf8vHn8q.js";import"./Tooltip-soL0zlaW.js";import"./index-CtD269za.js";import"./useControlled-otgNWUVW.js";import"./Popper-CrvShqtU.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-_BY2npJD.js";import"./useQuery-BnbbyIhE.js";import"./QueryClientProvider-COgRCJUL.js";import"./Link-CGU2rv-S.js";import"./Collapse-CDYVdUa-.js";import"./_baseUniq-AXqUKFNv.js";import"./_Uint8Array-CGGeiCCw.js";import"./isArray-BLHhTiIE.js";import"./_getTag-Du58puFw.js";import"./isEqual-D2oP3hG9.js";import"./merge-42V_qSrK.js";import"./_initCloneObject-CrEU1V4a.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BPXFur0f.js";import"./inputBaseClasses-AhrTDcKT.js";import"./calculateFriendlyFileSize-CMMha0yD.js";import"./CheckCircleTwoTone-CejlYcpI.js";import"./InfoTwoTone-Ba1eQKjs.js";import"./useMutation-CZgqQHx5.js";import"./dayjs.min-BQGfd5_o.js";import"./chunk-AYJ5UCUI-D2oE-vF0.js";import"./cloneDeep-DPn60SEG.js";import"./Skeleton-BAJjCxjE.js";import"./SqlFunctions-BjspnTaW.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BnGtkN2p.js";import"./Backdrop-BxtedZaR.js";import"./LinearProgress-CdAIOmwU.js";import"./index-DX6tbtzg.js";import"./index-BFKJwgF0.js";import"./index-BzCfym6X.js";import"./const-BP60AzNb.js";import"./index-DDl93p90.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
