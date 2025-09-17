import{U as L}from"./UpsetPlot-97DWxIvX.js";import{f as u}from"./index-DcGK7f6a.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-D8L24iRt.js";import"./DefaultPropsProvider-DPRhv_AP.js";import"./createTheme-CwyfHowY.js";import"./index-D48SXRoA.js";import"./iframe-CGMSSV3a.js";import"./Button-DixPWBu_.js";import"./createSimplePaletteValueFilter-D-ylNyMT.js";import"./useTimeout-DCletuKH.js";import"./ButtonBase-BBTsQTx6.js";import"./useForkRef-ISS65Dbm.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CBtKmTpr.js";import"./useFiles-BRC0e057.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-CfvgkpB4.js";import"./OrientationBanner-BWVrubWR.js";import"./index-D_cRBOD6.js";import"./spreadSx-CwcO6WA9.js";import"./react-D986rM5G.js";import"./FullWidthAlert-B5UKJIYG.js";import"./Alert-bz4bj5M3.js";import"./useSlot-C8xh2t7a.js";import"./createSvgIcon-BdhbaoYx.js";import"./Close-BDxJ-CL7.js";import"./IconButton-CNghFUuS.js";import"./Paper-zc-lrNFo.js";import"./useTheme-BGjL3p3E.js";import"./useTheme-CYR3sgEx.js";import"./Stack-BMkmBXpw.js";import"./extendSxProp-B8hz4pXV.js";import"./getThemeProps-DdHk9pvF.js";import"./Box-BPM5q58Y.js";import"./AlertTitle-BCr-iYO8.js";import"./Typography-CWBVLAyW.js";import"./index-MSg-8E6y.js";import"./ClickAwayListener-Bp9Ns1it.js";import"./getReactElementRef-WUekJjzf.js";import"./index-zG4oEPGU.js";import"./index-BJiYowkb.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Bt4rr9VO.js";import"./Tooltip-CFQP7Dzi.js";import"./index-DfdAMDFO.js";import"./useControlled-DWNCs13l.js";import"./Popper-Do8nfD9j.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-BFYapwyn.js";import"./QueryClientProvider-B024YWxc.js";import"./Link-DB1ue7Mo.js";import"./Collapse-DtLKmRWa.js";import"./_baseUniq-NLHVw4Us.js";import"./_Uint8Array-DKRij8Pm.js";import"./isArray-CQWoh040.js";import"./_getTag-B_fA-_8S.js";import"./isEqual-DYS1ityr.js";import"./merge-BAPM3reP.js";import"./_initCloneObject-DlkwyIPz.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DAchz5lR.js";import"./inputBaseClasses-De2T74iN.js";import"./calculateFriendlyFileSize-CZVs-iSb.js";import"./CheckCircleTwoTone-CmaQzaow.js";import"./InfoTwoTone-BJLTUP-0.js";import"./useMutation-B3cc0E9Q.js";import"./dayjs.min-DhyUtXUb.js";import"./chunk-AYJ5UCUI-B-7RGnHT.js";import"./cloneDeep-BixVh9mJ.js";import"./Skeleton-BgVXRcxp.js";import"./SqlFunctions-B6aZ8mL4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-q_Yj9Klh.js";import"./Backdrop-CxdBv-5w.js";import"./LinearProgress-CG_fA3fh.js";import"./index-BALzEfL6.js";import"./index-BGBI9VrG.js";import"./index-DBJ_jORv.js";import"./const-BP60AzNb.js";import"./index-BzxmxmBt.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const jt=["Demo","ElitePortalDemo","AMPALSPortalVariant"];export{r as AMPALSPortalVariant,t as Demo,o as ElitePortalDemo,jt as __namedExportsOrder,$t as default};
