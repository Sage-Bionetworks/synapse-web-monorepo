import{U as L}from"./UpsetPlot-Cr7u4Waq.js";import{f as u}from"./index-DAxQS6_E.js";import"./jsx-runtime-DNP5ZHPF.js";import"./index-C9LqO53Z.js";import"./iframe-DzZkUbt0.js";import"./LargeButton-j2U6xG18.js";import"./DefaultPropsProvider-CBoC3p-_.js";import"./createTheme-BG9REND8.js";import"./Button-C1D6jijN.js";import"./ButtonBase-C0iYjrZq.js";import"./useTimeout-9s3akjMN.js";import"./TransitionGroupContext-CdwE7o-d.js";import"./useForkRef-D7H_VIUT.js";import"./useIsFocusVisible-C4iYqwwm.js";import"./useEventCallback-CFsLaU7U.js";import"./useFiles-DxEFRl-N.js";import"./VerificationSubmission-B0kBNeMy.js";import"./SynapseConstants-x7wBmLwm.js";import"./OrientationBanner-lGnlzz1n.js";import"./index-DNCRZXKi.js";import"./spreadSx-CwcO6WA9.js";import"./react-LeG2f8XJ.js";import"./FullWidthAlert-XMCCRjsq.js";import"./Alert-DBftbUxX.js";import"./resolveComponentProps-DJsKa-oF.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-BtT08fNl.js";import"./Close-BrzxmRIz.js";import"./IconButton-HsPug_ob.js";import"./Paper-BZJIjrog.js";import"./Stack-C3Yli3Do.js";import"./getThemeProps-CmxBhP06.js";import"./useTheme-Dqg7276U.js";import"./Box-DhP9mjg7.js";import"./AlertTitle-CFko3bX9.js";import"./Typography-BdVBJyiw.js";import"./useTheme-DaIKVKIj.js";import"./Grow-BEsXXeLg.js";import"./index-B7SGfn2n.js";import"./utils-Bn3sr0WI.js";import"./ClickAwayListener-CiZf8GXf.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip--gcNUJrW.js";import"./index-DfJVQJTe.js";import"./useControlled-C6FPOIeJ.js";import"./useId-Bp9otoFB.js";import"./Popper-wFK3a8ms.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-CzgJJW-6.js";import"./useQuery-Drm9MnN6.js";import"./utils-Dge9E0v5.js";import"./Link-BP8bljuP.js";import"./Collapse-DAEF_CSM.js";import"./isNil-C_6EL5i8.js";import"./_Uint8Array-CYf3IgYh.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-BAT6WrGj.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-DUOouxQQ.js";import"./_getTag-DKMcyan0.js";import"./tinycolor-Begke6kS.js";import"./Fade-BS8huG_s.js";import"./Skeleton-X6vAixA1.js";import"./inputBaseClasses-Cvq7yWxw.js";import"./calculateFriendlyFileSize-FpJgzzI_.js";import"./CheckCircleTwoTone-DooSA5RY.js";import"./InfoTwoTone-BUvN6rod.js";import"./mutation-DZbFfGts.js";import"./dayjs.min-DYHBVdyC.js";import"./chunk-AYJ5UCUI-BAVTTsGw.js";import"./cloneDeep-DGtsa-PL.js";import"./_initCloneObject-BZtj6YT_.js";import"./isEqual-CyOrkakg.js";import"./merge-CAVgou7m.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-DnxC6kpb.js";import"./react-sizeme-B42fHwJi.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-60maNtYR.js";import"./Backdrop-UeKywpjz.js";import"./LinearProgress-WoOq-nai.js";const Yt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var e,i,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
