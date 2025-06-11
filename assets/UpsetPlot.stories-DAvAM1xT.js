import{U as L}from"./UpsetPlot-DhOUO_kV.js";import{f as u}from"./index-DQcDWQif.js";import"./jsx-runtime-BGmYwjPw.js";import"./index-D70Qzix6.js";import"./iframe-DCGyuO0M.js";import"./LargeButton-Dcxz-hki.js";import"./DefaultPropsProvider-CHINDxai.js";import"./createTheme-DTUolO0P.js";import"./Button-DG9uclF8.js";import"./ButtonBase-ChIHx4gv.js";import"./useTimeout-B3y1ya_9.js";import"./TransitionGroupContext-BS1EhBkF.js";import"./useForkRef-PnJMPW2z.js";import"./useIsFocusVisible-UcDA8XlT.js";import"./useEventCallback-CMR8BFHz.js";import"./useFiles-BAdDWMwP.js";import"./VerificationSubmission-DeH3Sb8D.js";import"./SynapseConstants-DMItxiUw.js";import"./OrientationBanner-C2Rl8t55.js";import"./index-BeB6r0BQ.js";import"./spreadSx-CwcO6WA9.js";import"./react-Ckn5zcIR.js";import"./FullWidthAlert-BNfuXb54.js";import"./Alert-JRFPsNhb.js";import"./resolveComponentProps-B8bYubln.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-D5FygO3K.js";import"./Close-DDg3mWRC.js";import"./IconButton-Ct_6672G.js";import"./Paper-BpVklOsW.js";import"./Stack-CceUr8if.js";import"./getThemeProps-p9C_LR9K.js";import"./useTheme-B7WU9K6r.js";import"./Box-C2MzxFhK.js";import"./AlertTitle-CzBbxzgQ.js";import"./Typography-CsSvRUvL.js";import"./useTheme-CIwx_-T9.js";import"./Grow-BSX4EQAQ.js";import"./index-Bu7vuuk9.js";import"./index-D9rL04kk.js";import"./utils-iFrGAl4U.js";import"./ClickAwayListener-DK6tNhWK.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DOg4lbe7.js";import"./index-by4eOjYR.js";import"./useControlled-IkxPlRtZ.js";import"./useId-WNkH_viu.js";import"./Popper-DCJrpf0R.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-DnD65nWI.js";import"./useQuery-vQy2YZdM.js";import"./utils-DJIDGhA4.js";import"./Link-r-bBv3bP.js";import"./Collapse-CH_V_oIx.js";import"./isNil-DyjpXBCD.js";import"./_Uint8Array-VWPPbkz8.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-BKsyZwdL.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-DBcWrHFj.js";import"./_getTag-DJe0a-jp.js";import"./tinycolor-Begke6kS.js";import"./Fade-DtUM3drq.js";import"./Skeleton-D7lmToRS.js";import"./inputBaseClasses-CLcW9eOo.js";import"./calculateFriendlyFileSize-BTA8IzSb.js";import"./CheckCircleTwoTone-bVAQNLE5.js";import"./InfoTwoTone-DU8xWpIM.js";import"./useMutation-XvJSvDdS.js";import"./isEqual-DJSZp9ad.js";import"./dayjs.min-DpFc7CZO.js";import"./chunk-AYJ5UCUI-CeZ-Supy.js";import"./cloneDeep-DxxkzVfq.js";import"./_initCloneObject-Bubq1LVM.js";import"./merge-CmDk7BfC.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-DMQpCQSh.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BY6n73rP.js";import"./Backdrop-DEMQnhv0.js";import"./LinearProgress-CdCIcSl1.js";import"./index-BaTS8UAT.js";import"./index-BMh4KIct.js";import"./index-B4MWwi3i.js";import"./const-Doag8klc.js";import"./index-tsRQqRJQ.js";const Xt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
