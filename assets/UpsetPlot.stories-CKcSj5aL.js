import{U as L}from"./UpsetPlot-BBQxhKGI.js";import{f as u}from"./index-afse83dh.js";import"./jsx-runtime-BhYgtz2a.js";import"./index-TnDTBzFf.js";import"./iframe-CuKEFSiv.js";import"./LargeButton-CWBJSR9t.js";import"./DefaultPropsProvider-Dj24Y2Xr.js";import"./createTheme-CiTCtaPq.js";import"./Button-BfAXo1Lk.js";import"./ButtonBase-Ck0XLcvU.js";import"./useTimeout-Do5JDutj.js";import"./TransitionGroupContext-D1ipvWwM.js";import"./useForkRef-YmPuCFu8.js";import"./useIsFocusVisible-CZe6Gkhu.js";import"./useEventCallback-DApRzhme.js";import"./useFiles-DYAnKXqx.js";import"./VerificationSubmission-dxY1kvC5.js";import"./SynapseConstants-gkdcnAma.js";import"./OrientationBanner-Cxt7qCaJ.js";import"./index-CiypzW3i.js";import"./spreadSx-CwcO6WA9.js";import"./react-BPX5T-jr.js";import"./FullWidthAlert-DOInkpIF.js";import"./Alert-D33iOhM3.js";import"./resolveComponentProps-CX2YNoCK.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-PYlHuLfO.js";import"./Close-BTgdsF2d.js";import"./IconButton-Btlm9KUL.js";import"./Paper-CYE3NXP2.js";import"./Stack-BZm-4vsJ.js";import"./getThemeProps-BNyY6QJd.js";import"./useTheme-K5JEE0Rs.js";import"./Box-CjckbGK_.js";import"./AlertTitle-0i1SwaRE.js";import"./Typography-BHacpJuX.js";import"./useTheme-DOFgFuwm.js";import"./Grow-CP00JTgt.js";import"./index-OQkrhSPO.js";import"./utils-DBPX0-1k.js";import"./ClickAwayListener-B7QLYZZn.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DRjJPI8u.js";import"./index-DRLnAiW7.js";import"./useControlled-C3ftmNlQ.js";import"./useId-CBzLqrSr.js";import"./Popper-BDQKAv4l.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-lE31obNl.js";import"./useQuery-BViQs6v7.js";import"./utils-BprPXMtG.js";import"./Link-C3TGAzuv.js";import"./Collapse-BQyvnYTI.js";import"./isNil-B6T7CFbI.js";import"./_Uint8Array-C6rSnNnZ.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-Cgap4Gvx.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-C_QgXv57.js";import"./_getTag-DjjFc0nJ.js";import"./tinycolor-Begke6kS.js";import"./Fade-BvJPDuul.js";import"./Skeleton-BGy2m945.js";import"./inputBaseClasses-MLdP7SJy.js";import"./calculateFriendlyFileSize-KWbP0lKx.js";import"./CheckCircleTwoTone-DCcgpwt_.js";import"./InfoTwoTone-Cj98hI2s.js";import"./mutation-CE1ugUAr.js";import"./dayjs.min-B38EMs9S.js";import"./chunk-AYJ5UCUI-DNdPl_oj.js";import"./cloneDeep-Gs3EDVNV.js";import"./_initCloneObject-Bo4fS92M.js";import"./isEqual-BBsO-C2U.js";import"./merge-Dj9R6MmV.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-BxcEiHsR.js";import"./react-sizeme-C9USCL-E.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BW6o7ZHS.js";import"./Backdrop-wju8tcdJ.js";import"./LinearProgress-JUYlofZh.js";const Yt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var e,i,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
