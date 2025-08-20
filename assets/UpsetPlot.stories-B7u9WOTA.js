import{U as L}from"./UpsetPlot-Ca1yGFnO.js";import{f as u}from"./index-USTdSyyS.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-Mf58FaBS.js";import"./DefaultPropsProvider-CEqRozh0.js";import"./createTheme-dGGVbsHM.js";import"./index-C8AgDejC.js";import"./iframe-BpbBGkgc.js";import"./Button-8Hf9dmO4.js";import"./createSimplePaletteValueFilter-DQe7d5Qb.js";import"./useTimeout-BkEmZ-C2.js";import"./ButtonBase-cVvht4wM.js";import"./useForkRef-QK4cJop7.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CgsLq8_L.js";import"./useFiles-B8lGVSZx.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-BV_vjEV4.js";import"./OrientationBanner-C78UQJCr.js";import"./index-BMDI4sDj.js";import"./spreadSx-CwcO6WA9.js";import"./react-B80l2OrH.js";import"./FullWidthAlert-1tHM104s.js";import"./Alert-fdSUVrh5.js";import"./useSlot-Csx6ihJx.js";import"./createSvgIcon-CchSg1Gx.js";import"./Close-CxVV_b-1.js";import"./IconButton-muudUxJv.js";import"./Paper-CRP6Ta3q.js";import"./useTheme-BVkYgVpj.js";import"./useTheme-CfmQtQKd.js";import"./Stack-CdExR9_o.js";import"./extendSxProp-D0VtO7mi.js";import"./getThemeProps-DYqoV81W.js";import"./Box-_-I0XUqB.js";import"./AlertTitle-_N-Juk4h.js";import"./Typography-YA-Nis2y.js";import"./index-B_eatk0d.js";import"./ClickAwayListener-Cus--QEu.js";import"./getReactElementRef-BiSbqrbX.js";import"./index-Ckm25AxB.js";import"./index-BbU_ZiS0.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow--3DiAtyk.js";import"./Tooltip-BgTWlnJ0.js";import"./index-Bs_yQwLJ.js";import"./useControlled-CY9xyabe.js";import"./Popper-Bd_A_V6g.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-BrTWN470.js";import"./QueryClientProvider-Bgnvz8QP.js";import"./Link-BE6I7YcM.js";import"./Collapse-nm8xx53n.js";import"./_baseUniq-hk5S7B08.js";import"./_Uint8Array-BXZJkGT_.js";import"./isArray-_KeI5LAQ.js";import"./_getTag-Cp8N0B3j.js";import"./isEqual-lgf4hh2o.js";import"./merge-iiJlJXc8.js";import"./_initCloneObject-CwKxztrP.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-eufq9lg7.js";import"./inputBaseClasses-CqPu9QD6.js";import"./calculateFriendlyFileSize-mq7SKF2J.js";import"./CheckCircleTwoTone-B2In--cY.js";import"./InfoTwoTone-c1x43jMK.js";import"./useMutation-m6_xjbin.js";import"./dayjs.min-BZRgxVGz.js";import"./chunk-AYJ5UCUI-fXw5Uk8X.js";import"./cloneDeep-BV8D8Wbh.js";import"./Skeleton-kBOXpjk-.js";import"./SqlFunctions-C8HqQ3uk.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-9y7xJ5gw.js";import"./Backdrop-CKMTVolO.js";import"./LinearProgress-CtrCHr_X.js";import"./index-DDTnpWDd.js";import"./index-DGV3v8D8.js";import"./index-CHDfo017.js";import"./const-BP60AzNb.js";import"./index-De0BWy7u.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
