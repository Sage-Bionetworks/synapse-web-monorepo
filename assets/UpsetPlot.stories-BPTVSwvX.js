import{U as L}from"./UpsetPlot-r_qT8uYf.js";import{f as u}from"./index-D2fcNwCX.js";import"./jsx-runtime-Mut6b6ZN.js";import"./index-vS9mnyWj.js";import"./iframe-1zaoe6gF.js";import"./LargeButton-CO2soThe.js";import"./DefaultPropsProvider-2M3YnDDd.js";import"./createTheme-DpNzE4d4.js";import"./Button-CwJlsjun.js";import"./ButtonBase-CFptddls.js";import"./useTimeout-MfSepqIs.js";import"./TransitionGroupContext-DwVNEQzN.js";import"./useForkRef-B963EUWM.js";import"./useIsFocusVisible-BSo-X-iu.js";import"./useEventCallback-7NNh7VNL.js";import"./useFiles-D1zDsRtE.js";import"./VerificationSubmission-DsgC4t7y.js";import"./SynapseConstants-Ch0rC1P2.js";import"./OrientationBanner-DFyDzGuH.js";import"./index-BGE9F3qY.js";import"./spreadSx-CwcO6WA9.js";import"./react-DHhj6IBI.js";import"./FullWidthAlert-Dmbyyznq.js";import"./Alert-CaW4HrEE.js";import"./resolveComponentProps-DPiFg_7Y.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-B9xlizw1.js";import"./Close-l5PLK5SY.js";import"./IconButton-DWP4WfZS.js";import"./Paper-pEQNvCle.js";import"./Stack-C83qUTSK.js";import"./getThemeProps-Cc8P44uD.js";import"./useTheme-CJ_GeJUx.js";import"./Box-VEfKzwzZ.js";import"./AlertTitle-DYy2gM_I.js";import"./Typography-C735P2Wu.js";import"./useTheme-CfGNks2Q.js";import"./Grow-Dq35ME0n.js";import"./index-ChtUdljt.js";import"./utils-CMYcSCNM.js";import"./ClickAwayListener-CCYfSXt6.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-C4YQYU6J.js";import"./index-BxOngdo6.js";import"./useControlled-Dm40RTb9.js";import"./useId-CTXoB2V5.js";import"./Popper-KpOZuT_B.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-tNCAfVhp.js";import"./useQuery-CCyZLsCb.js";import"./utils-CkpiaAWG.js";import"./Link-UtnI4NMQ.js";import"./Collapse-CJSUDuZs.js";import"./isNil-S5XSv3sm.js";import"./_Uint8Array-jbfd-DZF.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-Dt3Q8mbv.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-Ci23lrYU.js";import"./_getTag-Puwgzc-K.js";import"./tinycolor-Begke6kS.js";import"./Fade-CYw9ikGp.js";import"./Skeleton-Cq9f4rV_.js";import"./inputBaseClasses-CmBA2hPH.js";import"./calculateFriendlyFileSize-Dgr-X9ZX.js";import"./CheckCircleTwoTone-DHHVQUzF.js";import"./InfoTwoTone-pCgBZYpo.js";import"./mutation-nnr-ZiFk.js";import"./dayjs.min-BzPAf8fo.js";import"./chunk-AYJ5UCUI-cKaE7QDH.js";import"./cloneDeep-C-sRBbU_.js";import"./_initCloneObject-9iu-MeYW.js";import"./isEqual-CuIwC5PF.js";import"./merge-sRA-gjlr.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-C1gwNAz5.js";import"./react-sizeme-DUqq9yK5.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-B01_sqVA.js";import"./Backdrop-BydHRRW8.js";import"./LinearProgress-DIb7BC-P.js";const Yt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var e,i,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
