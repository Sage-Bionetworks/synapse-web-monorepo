import{U as L}from"./UpsetPlot-CqXExTyG.js";import{f as u}from"./index-DeTTgdZo.js";import"./jsx-runtime-B8p3sbYp.js";import"./index-w9WeLW3c.js";import"./iframe-Asvj3i57.js";import"./LargeButton-CszifCrc.js";import"./DefaultPropsProvider-B8LU8o9q.js";import"./createTheme-DfE_l7fh.js";import"./Button-DlKIFd8I.js";import"./ButtonBase-BI1CiCIR.js";import"./useTimeout-DtkCtw32.js";import"./TransitionGroupContext-E5HcsAwp.js";import"./useForkRef-BikEN9Oe.js";import"./useIsFocusVisible-yzb205lP.js";import"./useEventCallback-H7A-SEZM.js";import"./useFiles-DesDA-4w.js";import"./VerificationSubmission-DsgC4t7y.js";import"./SynapseConstants-CkNL9tfS.js";import"./OrientationBanner-T98nrl-y.js";import"./index-BsCR_eh5.js";import"./spreadSx-CwcO6WA9.js";import"./react-dUjTuPER.js";import"./FullWidthAlert-DJCHcIx-.js";import"./Alert-BjpfLK2B.js";import"./resolveComponentProps-DK3a2xv6.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-CFiQ1ApI.js";import"./Close-ChfM_AlY.js";import"./IconButton-DoJdjScg.js";import"./Paper-DCHmdWJj.js";import"./Stack-CotbFTt2.js";import"./getThemeProps-BDyn-BEF.js";import"./useTheme-9PQSeyW-.js";import"./Box-CnxWcHOe.js";import"./AlertTitle-DitZ3tPO.js";import"./Typography-BvS3uuok.js";import"./useTheme-CQr96cnb.js";import"./Grow-s44nII5P.js";import"./index-DgLB2t6n.js";import"./utils-DNh8IEA0.js";import"./ClickAwayListener-D8lghhOx.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BnJQ2gnX.js";import"./index-GtvJuuzD.js";import"./useControlled-D1WSYfsz.js";import"./useId-BQ-eUGSB.js";import"./Popper-8eBb15T8.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-tNCAfVhp.js";import"./useQuery-CgQSlLpx.js";import"./utils-DIJ1YRVE.js";import"./Link-OJK74gkl.js";import"./Collapse-DF4Jc8cn.js";import"./isNil-BXRYPzmI.js";import"./_Uint8Array-oLKfr7O_.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DimCDoBQ.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-BmBs-yHc.js";import"./_getTag-BjkIdouv.js";import"./tinycolor-Begke6kS.js";import"./Fade-flmyQvY4.js";import"./Skeleton-CkdkB3Ve.js";import"./inputBaseClasses-DQaoDeQ9.js";import"./calculateFriendlyFileSize-DpR2ltQV.js";import"./CheckCircleTwoTone-oHlSZvuV.js";import"./InfoTwoTone-fltNCXgD.js";import"./mutation-BE5QGJq0.js";import"./dayjs.min-C2QKGBMu.js";import"./chunk-AYJ5UCUI-pJeN8JWb.js";import"./cloneDeep-DLb1zHSL.js";import"./_initCloneObject-wFbTLhun.js";import"./isEqual-DvQ_cDaS.js";import"./merge-DRxhOKVw.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-C1gwNAz5.js";import"./react-sizeme-BBJdAZ7F.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BPSux0Od.js";import"./Backdrop-BDmFytli.js";import"./LinearProgress-Dgw01Q3G.js";const Yt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var e,i,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
