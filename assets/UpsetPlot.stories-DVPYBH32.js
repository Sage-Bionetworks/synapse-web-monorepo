import{U as L}from"./UpsetPlot-BYxjWqUy.js";import{f as u}from"./index-CeoCFVgA.js";import"./jsx-runtime-BiWA54l5.js";import"./index-DhiVPEXr.js";import"./iframe-DdfsIYam.js";import"./LargeButton-B9f2mrbx.js";import"./DefaultPropsProvider-BNGQCVUl.js";import"./createTheme-D7uPp7E_.js";import"./Button-BX-85nHl.js";import"./createSimplePaletteValueFilter-37lQ19gZ.js";import"./useTimeout-DBCArjJg.js";import"./ButtonBase-BAw29sd5.js";import"./useForkRef-D6Ozyr_R.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-X0wyc6kr.js";import"./useFiles-DFuiG744.js";import"./VerificationSubmission-DKyendrM.js";import"./SynapseConstants-Bqeym1jK.js";import"./OrientationBanner-DtOwZzDw.js";import"./index-C12dOKGf.js";import"./spreadSx-CwcO6WA9.js";import"./react-DMypNxiR.js";import"./FullWidthAlert-zKKUZdhG.js";import"./Alert-XZzYdMFx.js";import"./useSlot-mlQ06HgV.js";import"./createSvgIcon-BrbTVqGj.js";import"./Close-Ce0cvGVf.js";import"./IconButton-DiRXQYen.js";import"./Paper-BdIQK_6J.js";import"./useTheme-Bgl42pYj.js";import"./useTheme-ClwTON04.js";import"./Stack-DAwVky2z.js";import"./extendSxProp-BFwTiWAX.js";import"./getThemeProps-C20Tg9I8.js";import"./Box-ChSwPMHV.js";import"./AlertTitle-BIF0pMej.js";import"./Typography-BQoiqdiw.js";import"./index-BP2NWRlB.js";import"./ClickAwayListener-nsW1tqeE.js";import"./getReactElementRef-Cx7-4IP1.js";import"./index-3znFL5fM.js";import"./index-CbQDV7ub.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BA9w5EK3.js";import"./Tooltip-BQ2Zx4cU.js";import"./index-CnleELMM.js";import"./useControlled-DL7QACQp.js";import"./Popper-CzJrasAD.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BcSmk1fX.js";import"./useQuery-C8aUx7Vd.js";import"./utils-BlMtL_IL.js";import"./Link-DWAOj1dQ.js";import"./Collapse-Cj9251w7.js";import"./isNil-Bp9Gpt_s.js";import"./_Uint8Array-IiFQ2nXs.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-Sn8HKbSJ.js";import"./isArray-Dxzbedgu.js";import"./isEqual-CBR6zOeP.js";import"./_getTag-BJIbzf7A.js";import"./tinycolor-Begke6kS.js";import"./Fade-B_Kbt0VW.js";import"./inputBaseClasses-B5msBFiG.js";import"./calculateFriendlyFileSize-DFGrycOX.js";import"./CheckCircleTwoTone-C4eJ2xB1.js";import"./InfoTwoTone-D7rbUfcN.js";import"./useMutation-BAtKFIoo.js";import"./dayjs.min-iire0L97.js";import"./chunk-AYJ5UCUI-CHKzmd4h.js";import"./cloneDeep-CjyUMlLu.js";import"./_initCloneObject-B8SJcj1G.js";import"./Skeleton-wLFF7FAc.js";import"./merge-CMku2vk-.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-D5GxPzI3.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-yLGO8bRy.js";import"./Backdrop-BaaJEU_D.js";import"./LinearProgress-BeQ92TWw.js";import"./index-BRhI3uao.js";import"./index-DOxNhMy4.js";import"./index-VkYB4Y4N.js";import"./const-Doag8klc.js";import"./index-B2kZVoYd.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
