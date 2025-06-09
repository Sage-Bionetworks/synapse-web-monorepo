import{U as L}from"./UpsetPlot-RYUlx58w.js";import{f as u}from"./index-DPA9dRG1.js";import"./jsx-runtime-JMjDAiku.js";import"./index-CZYh0tRp.js";import"./iframe-CCE2QgdW.js";import"./LargeButton-Do5osSe4.js";import"./DefaultPropsProvider-omTkMwKz.js";import"./createTheme-BsMgtWZT.js";import"./Button-Cbd-R7S0.js";import"./ButtonBase-B2wgZIDS.js";import"./useTimeout-BJT5itvQ.js";import"./TransitionGroupContext-l1GBX2CH.js";import"./useForkRef-DQdHfMmH.js";import"./useIsFocusVisible-CJXqI5Ok.js";import"./useEventCallback-CMwoN8rY.js";import"./useFiles-BKoaRBy7.js";import"./VerificationSubmission-DHPhgAH7.js";import"./SynapseConstants-BAkIMR8-.js";import"./OrientationBanner-C4LioKg8.js";import"./index-CbpQBUYj.js";import"./spreadSx-CwcO6WA9.js";import"./react-mnnoerZo.js";import"./FullWidthAlert-_xWROjSF.js";import"./Alert-DhU8zZuo.js";import"./resolveComponentProps-CNbOM-P8.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-BIs1E3cK.js";import"./Close-CXRj7muF.js";import"./IconButton-CB2yg_JS.js";import"./Paper-CfNAfVct.js";import"./Stack-B6FqdQE3.js";import"./getThemeProps-DNrBl4wZ.js";import"./useTheme-knQsgu-L.js";import"./Box-CZfJ9FNL.js";import"./AlertTitle-CaGh6uKR.js";import"./Typography-CsnhBgcI.js";import"./useTheme-N2s54T76.js";import"./Grow-C4EvBoga.js";import"./index-C283ZE_A.js";import"./utils-D_mGwy7L.js";import"./ClickAwayListener-DChUe8a7.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DLYYTJAc.js";import"./index-CXLskV8c.js";import"./useControlled-BOEsG-Ke.js";import"./useId-sjHSV8uf.js";import"./Popper-CgUdf8Yp.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-Bj0SG9ce.js";import"./useQuery-B2W7WvCN.js";import"./utils-BTDD21Gu.js";import"./Link-BK0CPbSA.js";import"./Collapse-D7BpYLKk.js";import"./isNil-jJiu7qUq.js";import"./_Uint8Array-CRK6RbyJ.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DXDyFbLA.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-CCn7fuDD.js";import"./_getTag-CzbInwKL.js";import"./tinycolor-Begke6kS.js";import"./Fade-Dsc-ng1t.js";import"./Skeleton-BD-shLg_.js";import"./inputBaseClasses-CzPMbH9V.js";import"./calculateFriendlyFileSize-Cls87z73.js";import"./CheckCircleTwoTone-BDkgaxM-.js";import"./InfoTwoTone-Dd48EZp1.js";import"./useMutation-Dl-XAcpb.js";import"./isEqual-BeXmNxMu.js";import"./dayjs.min-CPUkpIN-.js";import"./chunk-AYJ5UCUI-DhzNmnWU.js";import"./cloneDeep-D1htCpIz.js";import"./_initCloneObject-Bn1ipTO5.js";import"./merge-cNoXgvrO.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-DhoAZ_qc.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-_dLY4ued.js";import"./Backdrop-wU2G6vto.js";import"./LinearProgress-uKGgdkgR.js";import"./index-O7huphLO.js";import"./index-BrMXFR1S.js";import"./const-Doag8klc.js";import"./index-B0CBhJUj.js";const jt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
