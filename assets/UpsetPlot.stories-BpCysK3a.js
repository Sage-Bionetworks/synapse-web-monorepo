import{U as L}from"./UpsetPlot-D3amBPTs.js";import{f as u}from"./index-UME-ttJn.js";import"./jsx-runtime-DMre8F17.js";import"./index-BAuVHV2z.js";import"./iframe-OI0nEnmn.js";import"./LargeButton-POaD-Rzv.js";import"./DefaultPropsProvider-Cq1pa9G2.js";import"./createTheme-BB1S4NEt.js";import"./Button-9_gAD86Z.js";import"./ButtonBase-BaQs7_Pa.js";import"./useTimeout-pAtqERQv.js";import"./TransitionGroupContext-BNPxgiLu.js";import"./useForkRef-u21J4taN.js";import"./useIsFocusVisible-DfUxaCJB.js";import"./useEventCallback-DAxHKips.js";import"./useFiles-CAS_QhlS.js";import"./VerificationSubmission-DHPhgAH7.js";import"./SynapseConstants-oxozjXiE.js";import"./OrientationBanner-D5pw8BSu.js";import"./index-D6eIipcS.js";import"./spreadSx-CwcO6WA9.js";import"./react-B8rHlrBa.js";import"./FullWidthAlert-yVU6QIpW.js";import"./Alert-Bmvy0Okm.js";import"./resolveComponentProps-DF96h0Eq.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-D0kdEjIj.js";import"./Close-CcZGAq3X.js";import"./IconButton-8W9a9RnF.js";import"./Paper-2bbvmWyl.js";import"./Stack-CTUsYAii.js";import"./getThemeProps-B1TL05kh.js";import"./useTheme-B1Sv5EJG.js";import"./Box-DIA65-hd.js";import"./AlertTitle-D9nMGlyg.js";import"./Typography-CTMq_pdk.js";import"./useTheme-B8P1yjh0.js";import"./Grow-CPqua1HP.js";import"./index-DSD_JLMH.js";import"./utils-DOe16nNH.js";import"./ClickAwayListener-1SXS2RHr.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DuZFgwly.js";import"./index-CR-BbFJG.js";import"./useControlled-BGfTKx8L.js";import"./useId-BaHTv3Ol.js";import"./Popper-BATOstVY.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-Bj0SG9ce.js";import"./useQuery-B2-wbKIs.js";import"./utils-CILTy0he.js";import"./Link-C-2XG2Lr.js";import"./Collapse-DTOGVf0W.js";import"./isNil-BTdFIcRc.js";import"./_Uint8Array-d9oc9a-e.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DS50Q_-r.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-DAhZrM2m.js";import"./_getTag-TV9QcuB2.js";import"./tinycolor-Begke6kS.js";import"./Fade-1XXXk4ux.js";import"./Skeleton-DFEpqHx_.js";import"./inputBaseClasses-C7D8GWl7.js";import"./calculateFriendlyFileSize-Dz_VodOE.js";import"./CheckCircleTwoTone-D0Rd8YBH.js";import"./InfoTwoTone-D4EKW_HA.js";import"./useMutation-CENJvQo9.js";import"./isEqual-DpbblXQH.js";import"./dayjs.min-cdOwOoLt.js";import"./chunk-AYJ5UCUI-BkWiTWCP.js";import"./cloneDeep-nAHUzRQX.js";import"./_initCloneObject-BLowrZgy.js";import"./merge-Bij2bwXJ.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-DhoAZ_qc.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-22LxNHNz.js";import"./Backdrop-DC0yWDpb.js";import"./LinearProgress-GUzECLK8.js";import"./index-Cxo0rNoM.js";import"./index-CMgYqPEy.js";import"./const-Doag8klc.js";import"./index-Zuyy61T_.js";const jt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const Kt=["Demo","ElitePortalDemo","AMPALSPortalVariant"];export{r as AMPALSPortalVariant,t as Demo,o as ElitePortalDemo,Kt as __namedExportsOrder,jt as default};
