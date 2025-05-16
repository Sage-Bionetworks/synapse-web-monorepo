import{U as L}from"./UpsetPlot-ZlmGvfg5.js";import{f as u}from"./index-DURzHr1I.js";import"./jsx-runtime-CgBRLEa-.js";import"./index-Cm3VAqvi.js";import"./iframe-D-z5eryP.js";import"./LargeButton-SMI1yBF9.js";import"./DefaultPropsProvider-CoJm6rCv.js";import"./createTheme-D3A4yulZ.js";import"./Button-LaCGCM-J.js";import"./ButtonBase-C0HDqlf7.js";import"./useTimeout-CtGwrGZE.js";import"./TransitionGroupContext-B4SgA8fZ.js";import"./useForkRef-JdeycaeZ.js";import"./useIsFocusVisible-CdG0Xk-w.js";import"./useEventCallback-D4tUhhl4.js";import"./useFiles-Bj1qDzht.js";import"./VerificationSubmission-dxY1kvC5.js";import"./SynapseConstants-C4_BSfJX.js";import"./OrientationBanner-BfQKEM6f.js";import"./index-CQbK4M81.js";import"./spreadSx-CwcO6WA9.js";import"./react-BszH1LB1.js";import"./FullWidthAlert-DhrO65_m.js";import"./Alert-4kvTLzfn.js";import"./resolveComponentProps-BYCi2bu3.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-kNdxJAy9.js";import"./Close-agg9DekZ.js";import"./IconButton-eVrh23VG.js";import"./Paper-C1f04ktM.js";import"./Stack-BC_fHXlJ.js";import"./getThemeProps-BIMvOQzE.js";import"./useTheme-B4dGVzj9.js";import"./Box-wR1-okkc.js";import"./AlertTitle-CiwBKXMY.js";import"./Typography-ByTWsZ15.js";import"./useTheme-BI2S4QNb.js";import"./Grow-RHuPc6fz.js";import"./index-DW4Ai1wC.js";import"./utils-D287OKWf.js";import"./ClickAwayListener-Bk44fSg7.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BerKoCs9.js";import"./index-6MOF0f3P.js";import"./useControlled-BPLd89bY.js";import"./useId-BzDDLVft.js";import"./Popper-DpEkWGMI.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-lE31obNl.js";import"./useQuery-jCh7k4c8.js";import"./utils-C1QIpVL-.js";import"./Link-BcIkkE9V.js";import"./Collapse-DpmNiXw9.js";import"./isNil-Ant6sUSY.js";import"./_Uint8Array-Bx9A3vk2.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-C5sgg6cm.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-BpqpksID.js";import"./_getTag-CItFztzL.js";import"./tinycolor-Begke6kS.js";import"./Fade-DgzFB8i7.js";import"./Skeleton-Ccnh0KXd.js";import"./inputBaseClasses-BegAz63u.js";import"./calculateFriendlyFileSize-BXtfvFHv.js";import"./CheckCircleTwoTone-DgUHfpw1.js";import"./InfoTwoTone-BpDpNORF.js";import"./mutation-Ds3RVbc1.js";import"./dayjs.min-BcfQFtj1.js";import"./chunk-AYJ5UCUI-DyvibXab.js";import"./cloneDeep-4cLsR06D.js";import"./_initCloneObject-DPNyC6eJ.js";import"./isEqual-CjzFxgA_.js";import"./merge-BmbNGbHm.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-BxcEiHsR.js";import"./react-sizeme-DekehGbf.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-Ce3F6l2m.js";import"./Backdrop-CDTUMtib.js";import"./LinearProgress-DKfnm3BH.js";const Yt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var e,i,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
