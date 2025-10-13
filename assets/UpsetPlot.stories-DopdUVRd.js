import{U as L}from"./UpsetPlot-D-wQ4qBy.js";import{f as u}from"./index-DEvvhp2m.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-Csel-lqq.js";import"./DefaultPropsProvider-9yDVx9dT.js";import"./createTheme-B4cUhGob.js";import"./index-Df_FdJl-.js";import"./iframe-DsTvFT6Q.js";import"./Button-UK5ni8CN.js";import"./createSimplePaletteValueFilter-CmcCRKj9.js";import"./useTimeout-B-uQAk7X.js";import"./ButtonBase-COtAfe0-.js";import"./useForkRef-C37ywrok.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-D859Rgox.js";import"./useFiles-BM92AjlG.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-CSQZ8LdY.js";import"./OrientationBanner-B9vK_fOZ.js";import"./index-D-UvISqL.js";import"./spreadSx-CwcO6WA9.js";import"./react-C6TP9ok4.js";import"./FullWidthAlert-Bu31KEHU.js";import"./Alert-BfEFHSpf.js";import"./useSlot-DHoMpVG_.js";import"./createSvgIcon-Bx2dCIbF.js";import"./Close-DNuwum3q.js";import"./IconButton-BXTZx6ON.js";import"./Paper-Cf1kvPYs.js";import"./useTheme-BCgVrM8U.js";import"./useTheme-BNWJT91L.js";import"./Stack-BnE5AZPR.js";import"./useThemeProps-Di9ozye9.js";import"./getThemeProps-DDS8aWDb.js";import"./extendSxProp-DGFMAjvY.js";import"./Box-CWKxjGZN.js";import"./AlertTitle-BrquGJFX.js";import"./Typography-DzNtFqki.js";import"./index-DvmyVfCT.js";import"./ClickAwayListener-CFjnMEqm.js";import"./getReactElementRef-q6KXtwDj.js";import"./index-LtSKZm9d.js";import"./index-Bj500_V6.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CSPbf5zw.js";import"./Tooltip-CIfcREkL.js";import"./index-Bc5ECFUa.js";import"./useControlled-47FWtaLW.js";import"./Popper-DFTLUIEO.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-BWAW2VGJ.js";import"./QueryClientProvider-OtgzlTZ3.js";import"./Link-DFZaBwQ-.js";import"./Collapse-BS71YIGZ.js";import"./_baseUniq-CmLy7hQ9.js";import"./_Uint8Array-Tgc0IKEL.js";import"./isArray-CCt3-GU-.js";import"./_getTag-DDx0ez5Y.js";import"./isEqual-BrMooGWr.js";import"./noop-DX6rZLP_.js";import"./merge-DiyJyzhC.js";import"./_initCloneObject-CwDTQz61.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BnQ6e4Q4.js";import"./inputBaseClasses-C0c-AyIl.js";import"./calculateFriendlyFileSize-CvjtSy_b.js";import"./CheckCircleTwoTone-gDseQqaM.js";import"./InfoTwoTone-DfKGI0-a.js";import"./useMutation-Busowt2v.js";import"./dayjs.min-DK0WmqxW.js";import"./chunk-AYJ5UCUI-CSRoxWwe.js";import"./cloneDeep-CNI9lROB.js";import"./Skeleton-Da4ynUFT.js";import"./SqlFunctions-B8wRZva4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BGVFcTJN.js";import"./Backdrop-DBuoQaOJ.js";import"./LinearProgress-VIEKJBjr.js";import"./index-CtotqUke.js";import"./index-CnJP3KxH.js";import"./index-CN5AiPkf.js";import"./const-BP60AzNb.js";import"./index-B5V04-lJ.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
