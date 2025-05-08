import{U as L}from"./UpsetPlot-xGMO8dKM.js";import{f as u}from"./index-DMh9asBG.js";import"./jsx-runtime-MbANjM5d.js";import"./index-Stft8yAF.js";import"./iframe-Eyx7BfFH.js";import"./LargeButton-Gg9pYiBc.js";import"./DefaultPropsProvider-FhwSztk3.js";import"./createTheme-jQ9KZqcc.js";import"./Button-QMhARrEB.js";import"./ButtonBase-CfpZjHJu.js";import"./useTimeout-DgOeYeoR.js";import"./TransitionGroupContext-Guw97GTb.js";import"./useForkRef-CM-vHVZZ.js";import"./useIsFocusVisible-B-x5fER0.js";import"./useEventCallback-stF_Adn8.js";import"./useFiles-r0U6RSjO.js";import"./VerificationSubmission-dxY1kvC5.js";import"./SynapseConstants-Ddv_sASQ.js";import"./OrientationBanner-Csl-2pZk.js";import"./index-D4uvL01q.js";import"./spreadSx-CwcO6WA9.js";import"./react-Ty8OjFhT.js";import"./FullWidthAlert-BXy9FGq7.js";import"./Alert-BEs0h04_.js";import"./resolveComponentProps-Uv4DXZPh.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-ahNp5mb4.js";import"./Close-DeUlv-hX.js";import"./IconButton-C3n9Amn2.js";import"./Paper-ClGej5m7.js";import"./Stack-ZfUk0QTF.js";import"./getThemeProps-CwbHPl98.js";import"./useTheme-Cg8edm68.js";import"./Box-BazTlXiX.js";import"./AlertTitle-D4wSndy1.js";import"./Typography-Bp1kuzQ9.js";import"./useTheme-DxzWrAqM.js";import"./Grow-B6bNt6NJ.js";import"./index-BwLOZI6R.js";import"./utils-Q2rLk6hY.js";import"./ClickAwayListener-CzS2Hc3O.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-CGzCAXGw.js";import"./index-D7Er7lOD.js";import"./useControlled-Da1pt4FN.js";import"./useId-CTllctf1.js";import"./Popper-D24yfDla.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-lE31obNl.js";import"./useQuery-BLYr3XUa.js";import"./utils-BqgeSEgy.js";import"./Link-hNn2B0Ku.js";import"./Collapse-DchOfKL9.js";import"./isNil-cy96NJPL.js";import"./_Uint8Array-5zdnKaSc.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CGmwipMX.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-C_N9kwgW.js";import"./_getTag-BOvE1drH.js";import"./tinycolor-Begke6kS.js";import"./Fade-DTssxnyf.js";import"./Skeleton-9Zi_XDpB.js";import"./inputBaseClasses-DZEjAUWo.js";import"./calculateFriendlyFileSize-_EOO9nxF.js";import"./CheckCircleTwoTone-WWJOEVUL.js";import"./InfoTwoTone-yt1o89I7.js";import"./mutation-oi93bAPr.js";import"./dayjs.min-3V6J6eqe.js";import"./chunk-AYJ5UCUI-DlvXe13e.js";import"./cloneDeep-UBC5IJiv.js";import"./_initCloneObject-CWmp2ROs.js";import"./isEqual-CpPaJiLx.js";import"./merge-D95p5VCO.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-BxcEiHsR.js";import"./react-sizeme-CdZEv3S2.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-CYHPb8HQ.js";import"./Backdrop-hWAuyd8W.js";import"./LinearProgress-CBXQB8p1.js";const Yt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var e,i,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(a=(i=t.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var s,n,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const _t=["Demo","ElitePortalDemo","AMPALSPortalVariant"];export{r as AMPALSPortalVariant,t as Demo,o as ElitePortalDemo,_t as __namedExportsOrder,Yt as default};
