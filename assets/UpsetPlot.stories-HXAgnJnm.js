import{U as L}from"./UpsetPlot-D7V-_nTa.js";import{f as u}from"./index-BcQa_T5t.js";import"./jsx-runtime-DlVfSSgi.js";import"./index-DPE8LggK.js";import"./iframe-Jjs3PvF2.js";import"./LargeButton-og43aUYH.js";import"./DefaultPropsProvider-CUAfvKu9.js";import"./createTheme-wIq6nkHq.js";import"./Button-P2Zyoj0L.js";import"./ButtonBase-BYiG-NiS.js";import"./useTimeout-CELy5fSc.js";import"./TransitionGroupContext-BKX3xK3G.js";import"./useForkRef-CL1DfuC5.js";import"./useIsFocusVisible-CZhSNZhW.js";import"./useEventCallback-qRG00JS0.js";import"./useFiles-BvVEvkzV.js";import"./VerificationSubmission-BI5WaB2N.js";import"./SynapseConstants-wqvrHPlZ.js";import"./OrientationBanner-DmzYZlcd.js";import"./index-CxxiR4Y6.js";import"./spreadSx-CwcO6WA9.js";import"./react-CeGRGS1C.js";import"./FullWidthAlert-ick5Fkqc.js";import"./Alert-Cfop5H0X.js";import"./resolveComponentProps-DfBwVYrR.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-Dd24k-E7.js";import"./Close-C4EX66tx.js";import"./IconButton-B8SjGcLt.js";import"./Paper-BbPwTjsC.js";import"./Stack-HJIz7Hbf.js";import"./getThemeProps-BZgCW1lw.js";import"./useTheme-ji22fOw_.js";import"./Box-KwwXXMF7.js";import"./AlertTitle-DOccvRxz.js";import"./Typography--GpIRUDE.js";import"./useTheme-CwZpFb2K.js";import"./Grow-C2jy2TXc.js";import"./index-CtZ76oBs.js";import"./utils-CT4h-b37.js";import"./ClickAwayListener-CLPL0qy8.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-bzEc3Szz.js";import"./index-DQZASTmO.js";import"./useControlled-D55v4Buj.js";import"./useId-Brt77SST.js";import"./Popper-BQa6JT3M.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-DN6u4g4A.js";import"./useQuery-B_NCuM87.js";import"./utils-CFiJ55YR.js";import"./Link-EwXe_hHa.js";import"./Collapse-CtmwXz7e.js";import"./isNil-CgvgzyZy.js";import"./_Uint8Array-BcqxRYau.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-BBK9B_em.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-471Ecflj.js";import"./_getTag-C7oE45wN.js";import"./tinycolor-Begke6kS.js";import"./Fade-DCVnogLJ.js";import"./Skeleton-pRm6tosD.js";import"./inputBaseClasses-FBOigNcs.js";import"./calculateFriendlyFileSize-TGjloNDJ.js";import"./CheckCircleTwoTone-CBhEJAKe.js";import"./InfoTwoTone-CtFVuxDs.js";import"./mutation-DyOiQnhd.js";import"./dayjs.min-CduCMC2B.js";import"./chunk-AYJ5UCUI-DbU7SMux.js";import"./cloneDeep-BkhdAupP.js";import"./_initCloneObject-C2815fMz.js";import"./isEqual-DVG7vGtv.js";import"./merge-BsKyAI14.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-DJ9aEy1v.js";import"./react-sizeme-Dv3fRC0O.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-d4mjaZmT.js";import"./Backdrop-DNA-M_d1.js";import"./LinearProgress-5HbYAVdP.js";const Yt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var e,i,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
