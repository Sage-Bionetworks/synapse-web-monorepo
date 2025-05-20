import{U as L}from"./UpsetPlot-DB2M1IUe.js";import{f as u}from"./index-CIIvp-t_.js";import"./jsx-runtime-BSDkjlWP.js";import"./index-C5la8P61.js";import"./iframe-CpEO7aLV.js";import"./LargeButton-D-P6XIr3.js";import"./DefaultPropsProvider-CCFrHV6G.js";import"./createTheme-CcZqtVQC.js";import"./Button-BQQptVZp.js";import"./ButtonBase-Dj24P196.js";import"./useTimeout-MHdoqxi2.js";import"./TransitionGroupContext-D5hN35Nq.js";import"./useForkRef-C-qyZ7hs.js";import"./useIsFocusVisible-Brkq1bEu.js";import"./useEventCallback-By8RRSD5.js";import"./useFiles-CZsA5Qbe.js";import"./VerificationSubmission-dxY1kvC5.js";import"./SynapseConstants-vcY9rUFQ.js";import"./OrientationBanner-D5sJkCGc.js";import"./index-DPgOB9HS.js";import"./spreadSx-CwcO6WA9.js";import"./react-J0iAw686.js";import"./FullWidthAlert-B6cMQssk.js";import"./Alert-CNReWYbj.js";import"./resolveComponentProps-WbVcNb2t.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-BuoEkjeb.js";import"./Close-Dmq5Q2BI.js";import"./IconButton-CeBEfxKg.js";import"./Paper-BL99ePLy.js";import"./Stack-BZKtOe4B.js";import"./getThemeProps-B-5KhnFs.js";import"./useTheme-DimN_8rV.js";import"./Box-CWVIrzZU.js";import"./AlertTitle-DTLuH1wp.js";import"./Typography-CSVNfWP2.js";import"./useTheme-CzNl4uro.js";import"./Grow-DYzRzPjY.js";import"./index-DFadZPdC.js";import"./utils-q2kOI160.js";import"./ClickAwayListener-Df_B1HkZ.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-Cc_s_Ea-.js";import"./index-CQTG83Ai.js";import"./useControlled-BL8CHqmI.js";import"./useId-CJHw81FJ.js";import"./Popper-Z-Tjlb1o.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-Df7AZImX.js";import"./useQuery-BLfnvJIe.js";import"./utils-Bl63LDw7.js";import"./Link-D383uXAh.js";import"./Collapse-DnVU92Yn.js";import"./isNil-BXln-Rw9.js";import"./_Uint8Array-E7WFpk-u.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-k4kl7PfQ.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-CPf1wA0P.js";import"./_getTag-D5ek6wSw.js";import"./tinycolor-Begke6kS.js";import"./Fade-VkwcT0iP.js";import"./Skeleton-BQySDk-s.js";import"./inputBaseClasses-BbfvtJGq.js";import"./calculateFriendlyFileSize-DpIr_Q57.js";import"./CheckCircleTwoTone-RvtZIOI1.js";import"./InfoTwoTone-DmSSeuxV.js";import"./mutation-BOccHYKf.js";import"./dayjs.min-D__DKXuu.js";import"./chunk-AYJ5UCUI-BR7iJ0im.js";import"./cloneDeep-jr1Kpy2S.js";import"./_initCloneObject-BFRTamF7.js";import"./isEqual-RCY8KJA0.js";import"./merge-kqURPiz6.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-BxVSBgLJ.js";import"./react-sizeme-B00xnvE0.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-CND4aBlm.js";import"./Backdrop-DY38PZk5.js";import"./LinearProgress-DpQH0-pd.js";const Yt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var e,i,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
