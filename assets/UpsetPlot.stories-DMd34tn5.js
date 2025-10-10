import{U as L}from"./UpsetPlot-Be4OlrL3.js";import{f as u}from"./index-DRgWvlCV.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-BgLvt5sA.js";import"./DefaultPropsProvider-CwkbiRMZ.js";import"./createTheme-x4ryc2Ug.js";import"./index-C5xsNgZG.js";import"./iframe-DjJstJjx.js";import"./Button-D0nWNt-2.js";import"./createSimplePaletteValueFilter-CL52-X8Y.js";import"./useTimeout-D-uIEIeC.js";import"./ButtonBase-DSSoqZCh.js";import"./useForkRef-DWIqmgSu.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BvSla5A0.js";import"./useFiles-BxcP6yly.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-CxL0y1Ph.js";import"./OrientationBanner-B2D9V7kc.js";import"./index-CN27a-T8.js";import"./spreadSx-CwcO6WA9.js";import"./react-C02iEKn1.js";import"./FullWidthAlert-B1NkCeua.js";import"./Alert-CNdyFczj.js";import"./useSlot-B8IHFzfX.js";import"./createSvgIcon-BrnNN5qG.js";import"./Close-DqDyvys5.js";import"./IconButton-B4vCrkNM.js";import"./Paper-CRrJPGQt.js";import"./useTheme-lhY-n5X2.js";import"./useTheme-D3c8EOn8.js";import"./Stack-C2WogMgh.js";import"./useThemeProps-DBr2DVzl.js";import"./getThemeProps-BzelbPlK.js";import"./extendSxProp-Cxj75GXg.js";import"./Box-DfWINr92.js";import"./AlertTitle-BdC4ZB4j.js";import"./Typography-Bj14LD1K.js";import"./index-Dcy6S4kN.js";import"./ClickAwayListener-DAgIiq7F.js";import"./getReactElementRef-C7DXzbxC.js";import"./index-7vxEK90g.js";import"./index-CwtGRN4N.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BJc1AeJd.js";import"./Tooltip-y1vasDyH.js";import"./index-k1TfjJ7z.js";import"./useControlled-DAzrAxdX.js";import"./Popper-DMgncvK7.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-Do_i6ApH.js";import"./QueryClientProvider-DUPNZ32L.js";import"./Link-w9o19gyK.js";import"./Collapse-De5mdlYK.js";import"./_baseUniq-Bd92tBU-.js";import"./_Uint8Array-C_rOqdQT.js";import"./isArray-DZzh4s_m.js";import"./_getTag-BB_bRlg1.js";import"./isEqual-AuJseeVw.js";import"./noop-DX6rZLP_.js";import"./merge-BqztFXmQ.js";import"./_initCloneObject-CklytaJV.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-8jyKvWbc.js";import"./inputBaseClasses-BIs4bNY7.js";import"./calculateFriendlyFileSize-BYGBdEDj.js";import"./CheckCircleTwoTone-DGTSwBS2.js";import"./InfoTwoTone-DT8fPbHv.js";import"./useMutation-YpbZurJl.js";import"./dayjs.min-637-zvhS.js";import"./chunk-AYJ5UCUI-ZRV38xHs.js";import"./cloneDeep-nnktIvKW.js";import"./Skeleton-viu--MBo.js";import"./SqlFunctions-B8wRZva4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-CGd3Qz53.js";import"./Backdrop-1aSiyOJd.js";import"./LinearProgress-F9GHps3y.js";import"./index-CqsdowwC.js";import"./index-C4lPoDvs.js";import"./index-g5Kll1Eq.js";import"./const-BP60AzNb.js";import"./index-D4POD6Eo.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
