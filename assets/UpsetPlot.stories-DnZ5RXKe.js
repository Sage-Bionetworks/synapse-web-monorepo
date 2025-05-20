import{U as L}from"./UpsetPlot-wgsbWkOJ.js";import{f as u}from"./index-DaHFKC2W.js";import"./jsx-runtime-BUTz-_1d.js";import"./index-BqTi-gbl.js";import"./iframe-wZhmiXCk.js";import"./LargeButton-BdYWb1GV.js";import"./DefaultPropsProvider-BOHgnvI3.js";import"./createTheme-soJfsoye.js";import"./Button-CtX8_Saj.js";import"./ButtonBase-CKX0S0z7.js";import"./useTimeout-CnqrO3bW.js";import"./TransitionGroupContext-BJpxVonh.js";import"./useForkRef-ByBK5LxV.js";import"./useIsFocusVisible-CaJhUmpq.js";import"./useEventCallback-BfU_6Zjf.js";import"./useFiles-BPngUtdk.js";import"./VerificationSubmission-dxY1kvC5.js";import"./SynapseConstants-BY3JuDZs.js";import"./OrientationBanner-BYm0UpyJ.js";import"./index-CaguALO7.js";import"./spreadSx-CwcO6WA9.js";import"./react-C4PVEyLu.js";import"./FullWidthAlert-DAqcg72v.js";import"./Alert-CYG0eisg.js";import"./resolveComponentProps-CfcJcXFP.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-Cl2wkW3w.js";import"./Close-CX3B_Dfj.js";import"./IconButton-CakZjNno.js";import"./Paper-C5QIbe3w.js";import"./Stack-DjPKGgcW.js";import"./getThemeProps-B2E-r3vi.js";import"./useTheme-CFktQkaS.js";import"./Box-CfIT6twS.js";import"./AlertTitle-9SyC8FhY.js";import"./Typography-CxdHD8cJ.js";import"./useTheme-BBJ1ppa1.js";import"./Grow-CMwxiNI1.js";import"./index-EIZBVaa_.js";import"./utils-BEz3L9Oz.js";import"./ClickAwayListener-F5HYeZZ-.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DqRz8FoT.js";import"./index-BvDuf_JS.js";import"./useControlled-UDQD-7tg.js";import"./useId-BxSkkWRt.js";import"./Popper-B7nviUGz.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-Df7AZImX.js";import"./useQuery-BGrXjv6K.js";import"./utils-CWAFC6_Q.js";import"./Link-DQqq1f1o.js";import"./Collapse-dyoyaW4g.js";import"./isNil-CgSz4o_M.js";import"./_Uint8Array-BwHQqEhE.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-Dlji57C8.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-CRDDryoJ.js";import"./_getTag-BCC_5J7n.js";import"./tinycolor-Begke6kS.js";import"./Fade-C93QLRyh.js";import"./Skeleton-CDIZWh-g.js";import"./inputBaseClasses-1Xhc3FA6.js";import"./calculateFriendlyFileSize-BmfNa6-Y.js";import"./CheckCircleTwoTone-ChTCFVAD.js";import"./InfoTwoTone-CeZrC0ph.js";import"./mutation-Chly-9yq.js";import"./dayjs.min-BEEQVVA0.js";import"./chunk-AYJ5UCUI-C-jqZwGp.js";import"./cloneDeep-Bwr1RsLr.js";import"./_initCloneObject-CCl-eqZ2.js";import"./isEqual-B5BjI5-L.js";import"./merge-DHlcnBRc.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-BxVSBgLJ.js";import"./react-sizeme-Br1R1BtO.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-OjzTHAFi.js";import"./Backdrop-BCBKj3yb.js";import"./LinearProgress-hZF5VXqZ.js";const Yt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var e,i,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
