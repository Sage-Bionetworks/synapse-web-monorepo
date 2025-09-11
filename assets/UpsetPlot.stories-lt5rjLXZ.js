import{U as L}from"./UpsetPlot-zTtIMSYC.js";import{f as u}from"./index-Dijv3jOh.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-f0z0Okx5.js";import"./DefaultPropsProvider-DbzGYC6R.js";import"./createTheme-DvxOXisY.js";import"./index-d3rqgMCN.js";import"./iframe-ClNwV9PY.js";import"./Button-CrXDoJqf.js";import"./createSimplePaletteValueFilter-BGU1NRjf.js";import"./useTimeout-Ba8UwYs3.js";import"./ButtonBase-DY__CRx9.js";import"./useForkRef-D3CdTM63.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BIWxjXOd.js";import"./useFiles-C8pQ42sC.js";import"./VerificationSubmission-DHtRxRPZ.js";import"./SynapseConstants-BWEIGnwu.js";import"./OrientationBanner-CCfEbiwH.js";import"./index-CpmJTZ4x.js";import"./spreadSx-CwcO6WA9.js";import"./react-Bg_7O6IH.js";import"./FullWidthAlert-DnoeA5M1.js";import"./Alert-BzUj_4eQ.js";import"./useSlot-B3TfMazm.js";import"./createSvgIcon-877S8SfZ.js";import"./Close-DCJBwk8x.js";import"./IconButton-Cyq5--N7.js";import"./Paper-CSLfVwPp.js";import"./useTheme-qO_LFzDa.js";import"./useTheme-CIBZr94v.js";import"./Stack-D_7wB_A8.js";import"./extendSxProp-FnuzVdsZ.js";import"./getThemeProps-CIY2LghJ.js";import"./Box-DpHzd5pI.js";import"./AlertTitle-C9nDlQ1G.js";import"./Typography-CCVx77H_.js";import"./index-g0GcxGYP.js";import"./ClickAwayListener-DuB1ADIA.js";import"./getReactElementRef-CEbG-EIy.js";import"./index-BhU5E2yG.js";import"./index--vTnsLgE.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DIVOJwgj.js";import"./Tooltip-CPb4seuM.js";import"./index-SecRffPd.js";import"./useControlled-LqlwTi-d.js";import"./Popper-RXngH7Nw.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-DP1EOPFU.js";import"./useQuery-DYyOnCTL.js";import"./QueryClientProvider-BFF2BFJZ.js";import"./Link-DEQR3Bj0.js";import"./Collapse-IVJU_aLj.js";import"./_baseUniq-DbqMLa1W.js";import"./_Uint8Array-1H9Im2BA.js";import"./isArray-yr-f1zea.js";import"./_getTag-CJ6sfUGW.js";import"./isEqual-BafHoWgl.js";import"./merge-DGYilYtD.js";import"./_initCloneObject-DxuZsF47.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-D4LvABf9.js";import"./inputBaseClasses-CUQGo_ih.js";import"./calculateFriendlyFileSize-BwWE2ebF.js";import"./CheckCircleTwoTone-CHuMDpy1.js";import"./InfoTwoTone-BINpw3Ae.js";import"./useMutation-DZbu7UUC.js";import"./dayjs.min-DjKPkMPs.js";import"./chunk-AYJ5UCUI-2UEh2evp.js";import"./cloneDeep-C2sTo4gJ.js";import"./Skeleton-D1wacr3-.js";import"./SqlFunctions-DQ27hT8m.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-h4s4Rnbo.js";import"./Backdrop-B0kf8RBZ.js";import"./LinearProgress-B7fZxoFL.js";import"./index-pNII-0DO.js";import"./index-Cwz0kwco.js";import"./index-ByKbXZve.js";import"./const-BP60AzNb.js";import"./index-ZCDlgTvM.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
