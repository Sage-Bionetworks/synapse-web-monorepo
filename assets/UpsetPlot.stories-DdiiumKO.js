import{U as L}from"./UpsetPlot-rEhD0296.js";import{f as u}from"./index-Cs_8W7x3.js";import"./jsx-runtime-DAaBWb6T.js";import"./index-Xf1O9ikp.js";import"./iframe-B_m65hDw.js";import"./LargeButton-DeU1xadp.js";import"./DefaultPropsProvider-DUU6Afn6.js";import"./createTheme-BPsmSStf.js";import"./Button-DHXbStV7.js";import"./ButtonBase-DbIQbHcr.js";import"./useTimeout-z16zSBtj.js";import"./TransitionGroupContext-BaEufJrg.js";import"./useForkRef-WI0T7G2k.js";import"./useIsFocusVisible-Dn-kQzBe.js";import"./useEventCallback-73R0Cdtm.js";import"./useFiles-BKBPcS9M.js";import"./VerificationSubmission-DeH3Sb8D.js";import"./SynapseConstants-BXkC6V3M.js";import"./OrientationBanner-Bt5KXMld.js";import"./index-CieDzUgj.js";import"./spreadSx-CwcO6WA9.js";import"./react-DiYhiNSX.js";import"./FullWidthAlert-D9puXSMj.js";import"./Alert-CUF8LNAO.js";import"./resolveComponentProps-KJNM2QOM.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-DVx6_utu.js";import"./Close-DxKhXCXb.js";import"./IconButton-B14I6JZ-.js";import"./Paper-C2wh6oGd.js";import"./Stack-D6_yLpjr.js";import"./getThemeProps-By9ePiKq.js";import"./useTheme-Dep3Rwvi.js";import"./Box-DNeDBxyL.js";import"./AlertTitle-Dza9sH2Z.js";import"./Typography-BPIqdMo0.js";import"./useTheme-BhvIEHTS.js";import"./Grow-CgBPa8pa.js";import"./index-DuBLUsaX.js";import"./index-DwjutXdk.js";import"./utils-DliwND9M.js";import"./ClickAwayListener-MoU-q8dh.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-C5shgk-b.js";import"./index-DFaDYC1h.js";import"./useControlled-CupxzkdF.js";import"./useId-ByR0Yxjm.js";import"./Popper-BQ1y8daP.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-DnD65nWI.js";import"./useQuery-B5vmFQja.js";import"./utils-MZ8GUwUF.js";import"./Link-BDB2c8Gp.js";import"./Collapse-B3JvYKsm.js";import"./isNil-CR6lfaE1.js";import"./_Uint8Array-BOx5P9Xc.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-BiKz2sgZ.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-B_rVxBBn.js";import"./_getTag-QLWgiDxt.js";import"./tinycolor-Begke6kS.js";import"./Fade-Bfw_JdGm.js";import"./Skeleton-BeDwOILI.js";import"./inputBaseClasses-B5hzMWUB.js";import"./calculateFriendlyFileSize-B-7MNgb2.js";import"./CheckCircleTwoTone-BiiCvHDT.js";import"./InfoTwoTone-C5a1d32_.js";import"./useMutation-B3eiPWdA.js";import"./isEqual-Bl4BOS8c.js";import"./dayjs.min-B3_BjScJ.js";import"./chunk-AYJ5UCUI-DbD2EPuZ.js";import"./cloneDeep-HsP7Or5O.js";import"./_initCloneObject-T_9F4B_P.js";import"./merge-DiosaRoA.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-DMQpCQSh.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BWQKdbG1.js";import"./Backdrop-BgCy0foa.js";import"./LinearProgress-CgC9cziM.js";import"./index-CBCICGiz.js";import"./index-COthmxN_.js";import"./index-BksapUWC.js";import"./const-Doag8klc.js";import"./index-CrPbPhZQ.js";const Xt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
