import{U as L}from"./UpsetPlot-S3Q2qWJn.js";import{f as u}from"./index-DzycOVCU.js";import"./jsx-runtime-DHIV3NgZ.js";import"./index-CiYMHn1W.js";import"./iframe-9bS_PLuc.js";import"./LargeButton-zXLI6ZS3.js";import"./DefaultPropsProvider-BAMSfddg.js";import"./createTheme-Dr-FRt9h.js";import"./Button-Ca1xluWo.js";import"./ButtonBase-C-DypvYL.js";import"./useTimeout-BiQhycxo.js";import"./TransitionGroupContext-BBtvCtfD.js";import"./useForkRef-C9IHRvmt.js";import"./useIsFocusVisible-mZKnxQyk.js";import"./useEventCallback-JqRP_TZc.js";import"./useFiles-DjXRh0_n.js";import"./VerificationSubmission-BI5WaB2N.js";import"./SynapseConstants-fQvBwSlx.js";import"./OrientationBanner-BhufqD1t.js";import"./index-D-zz3DaY.js";import"./spreadSx-CwcO6WA9.js";import"./react-B3nk1sNR.js";import"./FullWidthAlert-C8QiR1e2.js";import"./Alert-LB2clXnU.js";import"./resolveComponentProps-Sf251QpC.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-BBEbPora.js";import"./Close-ByobNJAN.js";import"./IconButton-D-tqR65J.js";import"./Paper-Bc8Qqi_T.js";import"./Stack-DXiFrEmq.js";import"./getThemeProps-DLQUokRi.js";import"./useTheme-DcLbTF_6.js";import"./Box-BW1oPic-.js";import"./AlertTitle-qhIofB3L.js";import"./Typography-DmEMLsP4.js";import"./useTheme-nIT41qkF.js";import"./Grow-BC_xmw6o.js";import"./index-4OiUqoTL.js";import"./utils-GYwY21oY.js";import"./ClickAwayListener-B8xxEDtm.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-JzxXX3xe.js";import"./index-BFdM0H06.js";import"./useControlled-0q5EUitM.js";import"./useId-Bv47RgPy.js";import"./Popper-BqTYAN2h.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-DN6u4g4A.js";import"./useQuery-CtFs5y4P.js";import"./utils-2YUT114m.js";import"./Link-CCpec3ar.js";import"./Collapse-Bya5aszg.js";import"./isNil-CQPdfDEX.js";import"./_Uint8Array-CtrrdRS6.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-vEelmOLE.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-KSbFY_iK.js";import"./_getTag-CGOAJCRD.js";import"./tinycolor-Begke6kS.js";import"./Fade-CJ8x8QLn.js";import"./Skeleton-sF-UrVUs.js";import"./inputBaseClasses-DdQjr_My.js";import"./calculateFriendlyFileSize-M5bk7f-W.js";import"./CheckCircleTwoTone-8R91UKy5.js";import"./InfoTwoTone-BvOnGl6w.js";import"./mutation-D54CMcpZ.js";import"./dayjs.min-C1-dRU45.js";import"./chunk-AYJ5UCUI-B7vmRBcT.js";import"./cloneDeep-jYEjTLhY.js";import"./_initCloneObject-BF1nDgPw.js";import"./isEqual-CQGRlhBE.js";import"./merge-CVJPWvx4.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-DJ9aEy1v.js";import"./react-sizeme-BqEAqUuf.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-CUmxh5gD.js";import"./Backdrop-DyRdCxSB.js";import"./LinearProgress-DzCejiD2.js";const Yt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var e,i,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
