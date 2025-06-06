import{U as L}from"./UpsetPlot-CwC9lxTF.js";import{f as u}from"./index-DtQ0iVgw.js";import"./jsx-runtime-DqkftVdl.js";import"./index-DePaHtiF.js";import"./iframe-BROhmg6M.js";import"./LargeButton-CBTxPrbk.js";import"./DefaultPropsProvider-DjeLsGG1.js";import"./createTheme-5Fe3luW2.js";import"./Button-CvbUAx7X.js";import"./ButtonBase-Do0JJz1c.js";import"./useTimeout-D5dvr_Gi.js";import"./TransitionGroupContext-DQEZvtFj.js";import"./useForkRef-DxGWz-nP.js";import"./useIsFocusVisible-DI2M56aP.js";import"./useEventCallback-BZ6D7d5A.js";import"./useFiles-00zV7j3M.js";import"./VerificationSubmission-DHPhgAH7.js";import"./SynapseConstants-DXxtZCNr.js";import"./OrientationBanner-CW_OwSoZ.js";import"./index-s5f8zLZY.js";import"./spreadSx-CwcO6WA9.js";import"./react-ao0sqeqP.js";import"./FullWidthAlert-BxE7qCkE.js";import"./Alert-q_ZdLQQt.js";import"./resolveComponentProps-B_dOnkEG.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-BC6UvAwx.js";import"./Close-ChuplZX6.js";import"./IconButton-BcbjXjc9.js";import"./Paper-CB6CO99j.js";import"./Stack-HiEVvsaJ.js";import"./getThemeProps-f2sadzhq.js";import"./useTheme-U-7hfo9l.js";import"./Box-D9NrrPyX.js";import"./AlertTitle-ChAbcANF.js";import"./Typography-OD-ts1pz.js";import"./useTheme-CTLaU0Ir.js";import"./Grow-BU8iQ-gL.js";import"./index-CBZYBfor.js";import"./utils-CJvWoSDr.js";import"./ClickAwayListener-CUMsr3-e.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-CuUlmnbr.js";import"./index-DXHrkCm3.js";import"./useControlled-BOD8q2oj.js";import"./useId-wERg8hog.js";import"./Popper-Cuj0UtxU.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-Bj0SG9ce.js";import"./useQuery-Cm5Odpzo.js";import"./utils-BjkGJnUz.js";import"./Link-EHhEhz1_.js";import"./Collapse-B-I-lrDJ.js";import"./isNil-Dezvb9P5.js";import"./_Uint8Array-D-I36iIO.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-BZYvinLn.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-ByXVEM-G.js";import"./_getTag-BTItrKZg.js";import"./tinycolor-Begke6kS.js";import"./Fade-f--pyCs_.js";import"./Skeleton-B9nMYFge.js";import"./inputBaseClasses-CpJ0CZmE.js";import"./calculateFriendlyFileSize-BkKsHBWw.js";import"./CheckCircleTwoTone-_t8YNrIT.js";import"./InfoTwoTone-CcQ4P4q-.js";import"./useMutation-Du37KsLM.js";import"./isEqual-DMzBEPBa.js";import"./dayjs.min-DwUMv8zl.js";import"./chunk-AYJ5UCUI-CnSKK497.js";import"./cloneDeep-Be3a7qNY.js";import"./_initCloneObject-BDPs-veD.js";import"./merge-CMvw9-qj.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-DhoAZ_qc.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BTcccO1n.js";import"./Backdrop-DpEFLiLP.js";import"./LinearProgress-Dm4mNZTq.js";import"./index-BcAW8eNv.js";import"./index-4JzVx3rl.js";import"./const-Doag8klc.js";import"./index-Ck_xNA9L.js";const jt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
