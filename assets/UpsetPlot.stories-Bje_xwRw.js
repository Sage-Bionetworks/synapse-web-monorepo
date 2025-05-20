import{U as L}from"./UpsetPlot-DDTD4FuO.js";import{f as u}from"./index-CZ0CNhsY.js";import"./jsx-runtime-soP0eJw3.js";import"./index-hpfWuA9c.js";import"./iframe-BHoKq1w1.js";import"./LargeButton-Bqr5xxQk.js";import"./DefaultPropsProvider-PXZSU-pD.js";import"./createTheme-Dpipd2B4.js";import"./Button-G66wYlJC.js";import"./ButtonBase-Df7HWHxL.js";import"./useTimeout-CZFMIsWC.js";import"./TransitionGroupContext-D0hM1Q67.js";import"./useForkRef-D4rX5W63.js";import"./useIsFocusVisible-DiKKqeBi.js";import"./useEventCallback-B8sxSnWX.js";import"./useFiles-B7wbSLKA.js";import"./VerificationSubmission-dxY1kvC5.js";import"./SynapseConstants-6diw_2V4.js";import"./OrientationBanner-CALynnLL.js";import"./index-COJsKla7.js";import"./spreadSx-CwcO6WA9.js";import"./react-l0lHratm.js";import"./FullWidthAlert-Boq7L3Qf.js";import"./Alert-Dvpc-zfR.js";import"./resolveComponentProps-C2Zw4Y40.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-DBYVCs44.js";import"./Close-D3yIz2Os.js";import"./IconButton-BWQMO1ah.js";import"./Paper-C_pRCP3n.js";import"./Stack-DlM6dtWc.js";import"./getThemeProps-BDNwUju8.js";import"./useTheme-BvuKB97Z.js";import"./Box-B-UIBw2g.js";import"./AlertTitle-BqaE6HNK.js";import"./Typography-Bmj31eeD.js";import"./useTheme-Dxbanuns.js";import"./Grow-CQfJefys.js";import"./index-Cu-xJgCv.js";import"./utils-BJRE2IYR.js";import"./ClickAwayListener-DeeVJesb.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BIvonp8D.js";import"./index-DdAibAWs.js";import"./useControlled-YZ_o9Ute.js";import"./useId-CpvJc5ah.js";import"./Popper-C8BiWNkC.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-Df7AZImX.js";import"./useQuery-BrR264Iv.js";import"./utils-DQrTSbe2.js";import"./Link-BDjhksuj.js";import"./Collapse-CwH3Wopy.js";import"./isNil-CvysbORv.js";import"./_Uint8Array-DTt4064I.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-Bbw-pWo9.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-CZFbHhrG.js";import"./_getTag-D37krsF-.js";import"./tinycolor-Begke6kS.js";import"./Fade-CXUBWJhZ.js";import"./Skeleton-DvLjtclJ.js";import"./inputBaseClasses-CAkrk-fM.js";import"./calculateFriendlyFileSize-DnMRx2GO.js";import"./CheckCircleTwoTone-6jKvRjuJ.js";import"./InfoTwoTone-l-H02dCE.js";import"./mutation-DZlyKlKR.js";import"./dayjs.min-BIqhQsmA.js";import"./chunk-AYJ5UCUI-0avzdJN8.js";import"./cloneDeep-CVJPWTAF.js";import"./_initCloneObject-BJtqxeAa.js";import"./isEqual-Ci70EvoW.js";import"./merge-D-nboOHF.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-BxVSBgLJ.js";import"./react-sizeme-UWv8FtKF.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-CCtRSDpl.js";import"./Backdrop-cdFctmzP.js";import"./LinearProgress-p97u7Zad.js";const Yt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var e,i,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
