import{U as L}from"./UpsetPlot-CnOpCqoX.js";import{f as u}from"./index-B4RUb3L-.js";import"./jsx-runtime-kSuSxVWb.js";import"./index-DzLHwIBG.js";import"./iframe-BQT_7Lg6.js";import"./LargeButton-BV50lWPj.js";import"./DefaultPropsProvider-Bu_s_0Tm.js";import"./createTheme-BTXBvcKL.js";import"./Button-GF_6bSVk.js";import"./ButtonBase-ChvO5Q6L.js";import"./useTimeout-B1a7bHFn.js";import"./TransitionGroupContext-BfVD2Af2.js";import"./useForkRef-O8EcKEzJ.js";import"./useIsFocusVisible-L_0hhVjt.js";import"./useEventCallback-QGqMHzSP.js";import"./useFiles-C8VBGdZa.js";import"./VerificationSubmission-DeH3Sb8D.js";import"./SynapseConstants-BDVPajZl.js";import"./OrientationBanner-D7LrLz7c.js";import"./index-B20oKQ0J.js";import"./spreadSx-CwcO6WA9.js";import"./react-BaTg5ICW.js";import"./FullWidthAlert-CGCjVD8W.js";import"./Alert-B10dln1B.js";import"./resolveComponentProps-CcU-Fcc7.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-B27mfBNF.js";import"./Close-BIllBSm-.js";import"./IconButton-NBKJm7Yd.js";import"./Paper-jmTRz3X4.js";import"./Stack-BJqbpt9Y.js";import"./getThemeProps-D21eazjJ.js";import"./useTheme-Qg-GQRM8.js";import"./Box-C8lbBj1O.js";import"./AlertTitle-C-Od-Fyn.js";import"./Typography-Csi6gfED.js";import"./useTheme-C-C_ETX2.js";import"./Grow-BkOVapbj.js";import"./index-DCY139J6.js";import"./index-ChDfgwBD.js";import"./utils-7XiBdlAf.js";import"./ClickAwayListener-DiX6ZIUB.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BRIJeJzt.js";import"./index-CHtwux_5.js";import"./useControlled-BcND-koL.js";import"./useId-BLsARxa-.js";import"./Popper-Cr--_EAy.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-DnD65nWI.js";import"./useQuery-DEtpWp9w.js";import"./utils-BMBX8HaV.js";import"./Link-DV8-OVTX.js";import"./Collapse-CdZOqTzI.js";import"./isNil-B5OaQLPC.js";import"./_Uint8Array-BM3hzyWE.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-oyCl2IsJ.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-B38WqkZ8.js";import"./_getTag-CqABlva8.js";import"./tinycolor-Begke6kS.js";import"./Fade-B1YOx7qq.js";import"./Skeleton-B7la2lIF.js";import"./inputBaseClasses-B7iH5CdK.js";import"./calculateFriendlyFileSize-CucZHjCC.js";import"./CheckCircleTwoTone-D0eQ3RJY.js";import"./InfoTwoTone-CsvRrYgN.js";import"./useMutation-CbxM-4oY.js";import"./isEqual-DEgRKORm.js";import"./dayjs.min-DPvumxTe.js";import"./chunk-AYJ5UCUI-IYEc_8ly.js";import"./cloneDeep-BjILtH52.js";import"./_initCloneObject-CqEPD-yQ.js";import"./merge-Dop04rZp.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-DMQpCQSh.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-C98BHJxH.js";import"./Backdrop-B8T1aj4j.js";import"./LinearProgress-1RQtwx38.js";import"./index-Djb3PqRE.js";import"./index-BFhd_8Zl.js";import"./index-IwEZgRSF.js";import"./const-Doag8klc.js";import"./index-CtCfk9rg.js";const Xt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const Zt=["Demo","ElitePortalDemo","AMPALSPortalVariant"];export{r as AMPALSPortalVariant,t as Demo,o as ElitePortalDemo,Zt as __namedExportsOrder,Xt as default};
