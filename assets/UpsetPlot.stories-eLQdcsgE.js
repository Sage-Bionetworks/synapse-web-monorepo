import{U as L}from"./UpsetPlot-6Pv_dSL3.js";import{f as u}from"./index-BIgsn2PC.js";import"./jsx-runtime-CJcMkd2a.js";import"./index-D8IQqatP.js";import"./iframe-B3klFfb3.js";import"./LargeButton-B4axhIMw.js";import"./DefaultPropsProvider-BdAH66gj.js";import"./createTheme-BgkRoyWx.js";import"./Button-DPUTJjYo.js";import"./ButtonBase-BMm9ZI01.js";import"./useTimeout-CGDmoPwO.js";import"./TransitionGroupContext-BuH8XwDI.js";import"./useForkRef-BtMPwt5U.js";import"./useIsFocusVisible-CEgQdcXj.js";import"./useEventCallback-CeSGo_7v.js";import"./useFiles-EY5yUS1a.js";import"./VerificationSubmission-BI5WaB2N.js";import"./SynapseConstants-C9G9oc3F.js";import"./OrientationBanner-D5pstQt3.js";import"./index-BlfPjPPL.js";import"./spreadSx-CwcO6WA9.js";import"./react--3FdDKFe.js";import"./FullWidthAlert-D4yctO1D.js";import"./Alert-HwfZasOY.js";import"./resolveComponentProps-sTax8ldv.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-itcnBQV6.js";import"./Close-DHWtdwuS.js";import"./IconButton-DgeU6NWZ.js";import"./Paper-CFO5aWKw.js";import"./Stack-CAfo5E6f.js";import"./getThemeProps-_ttmqSlx.js";import"./useTheme-SfVjWsDY.js";import"./Box-DHTTRiCn.js";import"./AlertTitle-D4AVQS7x.js";import"./Typography-B8--A30q.js";import"./useTheme-Bub1kAfA.js";import"./Grow-wiKAnCjf.js";import"./index-zd_GrE0U.js";import"./utils-iLe1jc-J.js";import"./ClickAwayListener-DkoVjmkZ.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BA0zzAb6.js";import"./index-CrmRNCUB.js";import"./useControlled-BWj-QM7C.js";import"./useId-BxUPaSO-.js";import"./Popper-TpTiHex5.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-DN6u4g4A.js";import"./useQuery-nEN4f5Ah.js";import"./utils-hetqLS4L.js";import"./Link-D3E1V0rp.js";import"./Collapse-B8HvoXuG.js";import"./isNil-BbTWaJUC.js";import"./_Uint8Array-G2XBJ7Fr.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CeKfXdYG.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-Dkugu-u4.js";import"./_getTag-C38afX1X.js";import"./tinycolor-Begke6kS.js";import"./Fade-B8FJIUU6.js";import"./Skeleton-DMCJU624.js";import"./inputBaseClasses-CYv3VH4x.js";import"./calculateFriendlyFileSize-DwzdMftx.js";import"./CheckCircleTwoTone-D2i9AJR2.js";import"./InfoTwoTone-Cpiy0ZTW.js";import"./useMutation-D7CwHq8T.js";import"./isEqual-BaplPoEC.js";import"./dayjs.min-DuG5OfHn.js";import"./chunk-AYJ5UCUI-D343kYd5.js";import"./cloneDeep-CZ2oFFmE.js";import"./_initCloneObject-Dgntrhkh.js";import"./merge-D1YZpMkh.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-DJ9aEy1v.js";import"./react-sizeme-CxNAtY0L.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DWzBIQqC.js";import"./Backdrop-CE29QxMa.js";import"./LinearProgress-XnIEipJD.js";const Yt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var e,i,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
