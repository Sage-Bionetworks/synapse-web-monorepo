import{U as L}from"./UpsetPlot-D4ex1COi.js";import{f as u}from"./index-CTZIhWfy.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-Dbc1Ox5G.js";import"./DefaultPropsProvider-eweqAGHU.js";import"./createTheme-BEQYpO7H.js";import"./index-CVU8fmIt.js";import"./iframe-3BblAhfh.js";import"./Button-DvFdbPpn.js";import"./createSimplePaletteValueFilter-CJm1vCna.js";import"./useTimeout-ycJc4VsK.js";import"./ButtonBase-DH7wyoGx.js";import"./useForkRef-DHmtZf__.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Cv9ow6yl.js";import"./useFiles-BUoK9LxI.js";import"./VerificationSubmission-NmfK1W18.js";import"./SynapseConstants-BjtAWyRc.js";import"./OrientationBanner-CsT_B8xR.js";import"./index-B80U4eOu.js";import"./spreadSx-CwcO6WA9.js";import"./react-BLzGWzYT.js";import"./FullWidthAlert-Dq5DmS4U.js";import"./Alert-ByG-WB_P.js";import"./useSlot-DZbtlwDt.js";import"./createSvgIcon-BXj-KSbU.js";import"./Close-Ch2uSqAK.js";import"./IconButton-B0ScJW7L.js";import"./Paper-86AvQ8vE.js";import"./useTheme-DNC1wnHP.js";import"./useTheme-BFjbifIs.js";import"./Stack-dWwuvtQn.js";import"./extendSxProp-C9pWxk8Q.js";import"./getThemeProps-BQQmzsIX.js";import"./Box-Cl3YMLJO.js";import"./AlertTitle-CLmbQ9QS.js";import"./Typography-CCAvv5Ue.js";import"./index-CFaJqEi0.js";import"./ClickAwayListener-BVR_Fcze.js";import"./getReactElementRef-Ctsk67vP.js";import"./index-BnYaRa7T.js";import"./index-Dzaz5wbF.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BGfTDpr4.js";import"./Tooltip-DfbSuxhk.js";import"./index-BVuVGHCc.js";import"./useControlled-70Ch9zkJ.js";import"./Popper-BEcHQ4qX.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-Delb-QDS.js";import"./QueryClientProvider-1HAi0AOq.js";import"./Link-TypUoXxy.js";import"./Collapse-Nuve2Zkq.js";import"./_baseUniq-l_eXoChv.js";import"./_Uint8Array-DdNy53CP.js";import"./isArray-CQBUmIjk.js";import"./_getTag-YmF9TRN4.js";import"./isEqual-Dx1px7XN.js";import"./merge-CiygzYLZ.js";import"./_initCloneObject-C2s0SPMm.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-kCBwCjSY.js";import"./inputBaseClasses-C9VZqwym.js";import"./calculateFriendlyFileSize-CWZuJIfd.js";import"./CheckCircleTwoTone-CF4WtDyY.js";import"./InfoTwoTone-I-Qjw9Zz.js";import"./useMutation-DQSp4tkZ.js";import"./dayjs.min-CylQlKE8.js";import"./chunk-AYJ5UCUI-CIKx6JE_.js";import"./cloneDeep-DCZmlt62.js";import"./Skeleton-BYiQe7AD.js";import"./SqlFunctions-CqOxgBqv.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BFpH4WEW.js";import"./Backdrop-D8yR6SAT.js";import"./LinearProgress-IAylmrEN.js";import"./index-BU03GsPQ.js";import"./index-B4WirCGg.js";import"./index-BKF-vvou.js";import"./const-BP60AzNb.js";import"./index-D06vL57F.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
