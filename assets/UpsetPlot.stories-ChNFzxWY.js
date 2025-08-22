import{U as L}from"./UpsetPlot-CmyCs1RU.js";import{f as u}from"./index-C7sDvilQ.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-C9ZPlTzx.js";import"./DefaultPropsProvider-D5VkK-GM.js";import"./createTheme-KT6ovmnU.js";import"./index-Fct1fJYK.js";import"./iframe-CdaSO_eF.js";import"./Button-DT2sB6xE.js";import"./createSimplePaletteValueFilter-Bn1ICdwZ.js";import"./useTimeout-CGysDwV5.js";import"./ButtonBase-BzMUbCTS.js";import"./useForkRef-BejQGHNG.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BPhMjjgU.js";import"./useFiles-BotM9FxX.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-BLHb5NQT.js";import"./OrientationBanner-C7fwD44_.js";import"./index-BKsYyMgB.js";import"./spreadSx-CwcO6WA9.js";import"./react-Dzv6eqoj.js";import"./FullWidthAlert-BHvp60rx.js";import"./Alert-BbpltcOr.js";import"./useSlot-DToWd5Xc.js";import"./createSvgIcon-DxxuQnaJ.js";import"./Close-ByQsBb02.js";import"./IconButton-BHwbAkE7.js";import"./Paper-BtRLv9QE.js";import"./useTheme-CpppXMwN.js";import"./useTheme-BNWr4apX.js";import"./Stack-D36c7fPZ.js";import"./extendSxProp-CWnjY0x8.js";import"./getThemeProps-B9214kqk.js";import"./Box-BdQqh4Aq.js";import"./AlertTitle-CtxXO7s0.js";import"./Typography-DJMsLYCm.js";import"./index-CRCsf55N.js";import"./ClickAwayListener-DGulCAS9.js";import"./getReactElementRef-9rAAbMvM.js";import"./index-CkufiiNZ.js";import"./index-CRUr0FzG.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Dekp173Y.js";import"./Tooltip-DM5GcwoG.js";import"./index-BTvSqKmm.js";import"./useControlled-DKD0UIT1.js";import"./Popper-DpM5olrR.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-CDo5Q5Z3.js";import"./QueryClientProvider-WmtJ9HUx.js";import"./Link-DTBVsOid.js";import"./Collapse-CmKZpyr5.js";import"./_baseUniq-CflXaZO6.js";import"./_Uint8Array-CsoACzV4.js";import"./isArray-g99Ar8f5.js";import"./_getTag-jXoVqQQH.js";import"./isEqual-B4-VOX98.js";import"./merge-CwmLDA8E.js";import"./_initCloneObject-BZXOr0F1.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-amiIB_kc.js";import"./inputBaseClasses-gdVCUkrF.js";import"./calculateFriendlyFileSize-Bc5NU5Eo.js";import"./CheckCircleTwoTone-B29SNO7l.js";import"./InfoTwoTone-CGAeQS_q.js";import"./useMutation-CeP1vCsj.js";import"./dayjs.min-Ctz8f95b.js";import"./chunk-AYJ5UCUI-GVgUekA6.js";import"./cloneDeep-CiUfLbXh.js";import"./Skeleton-CtXnJt7s.js";import"./SqlFunctions-C8HqQ3uk.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-CODDdlI4.js";import"./Backdrop-CWQrO1Mc.js";import"./LinearProgress-CMRjCIFm.js";import"./index-D76X0qk6.js";import"./index-BGZmE3bk.js";import"./index-DodmJVLb.js";import"./const-BP60AzNb.js";import"./index-D6AzyKMw.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
