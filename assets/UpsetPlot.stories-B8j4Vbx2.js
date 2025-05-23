import{U as L}from"./UpsetPlot-kB5hOcg_.js";import{f as u}from"./index-CaflTKvh.js";import"./jsx-runtime-Cpzuo2ay.js";import"./index-qzbKbFlq.js";import"./iframe-B7UWlENb.js";import"./LargeButton-D95zNSd8.js";import"./DefaultPropsProvider-Bptl8wGp.js";import"./createTheme-BSeZw0jO.js";import"./Button-CJoc-lWM.js";import"./ButtonBase-Cd6E67ue.js";import"./useTimeout-QDIkgYlw.js";import"./TransitionGroupContext-C6XQh8Dh.js";import"./useForkRef-Dl0HqeWq.js";import"./useIsFocusVisible-yY6MxYkr.js";import"./useEventCallback-DFF1Wb54.js";import"./useFiles-BHzIddvO.js";import"./VerificationSubmission-DsgC4t7y.js";import"./SynapseConstants-DQnuBn7R.js";import"./OrientationBanner-Di6wDKmu.js";import"./index-D_POy7Ue.js";import"./spreadSx-CwcO6WA9.js";import"./react-DhQQnVH8.js";import"./FullWidthAlert-CYLONltS.js";import"./Alert-BoJtOfcQ.js";import"./resolveComponentProps-CxH78Z7f.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-ClunDJ6D.js";import"./Close-C7ppEedf.js";import"./IconButton-DdxKVWSD.js";import"./Paper-C_MNeKnS.js";import"./Stack-NeCVAsSl.js";import"./getThemeProps-v3E6r25K.js";import"./useTheme-CanYvo4O.js";import"./Box-DWG1pAIJ.js";import"./AlertTitle-CXuF7YB4.js";import"./Typography-UpxeVSC9.js";import"./useTheme-BXUKSYiP.js";import"./Grow---qI4Xyl.js";import"./index-V6m7UmXo.js";import"./utils-UQqgZKk5.js";import"./ClickAwayListener-BsZYeWwC.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-x8bHq8cu.js";import"./index-DhW7zJ1I.js";import"./useControlled-0Y9QxmiD.js";import"./useId-BZdi58KL.js";import"./Popper-DJNlKWGH.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-tNCAfVhp.js";import"./useQuery-B_mXUuWt.js";import"./utils-BsHt5Ez6.js";import"./Link-bG66493O.js";import"./Collapse-JpDvYyye.js";import"./isNil-BFbe1Fm3.js";import"./_Uint8Array-BeS2nPDv.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-sZnKwddx.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-i7PtvCG3.js";import"./_getTag-BvHcUwIL.js";import"./tinycolor-Begke6kS.js";import"./Fade-BXyi4DiG.js";import"./Skeleton-Lg9a-sk4.js";import"./inputBaseClasses-BcoPWVf4.js";import"./calculateFriendlyFileSize-LFzydKri.js";import"./CheckCircleTwoTone-JlmlKZJ4.js";import"./InfoTwoTone-CWclAxfb.js";import"./mutation-Hk4gcjTH.js";import"./dayjs.min-C7AzIqXS.js";import"./chunk-AYJ5UCUI-C6fnNANP.js";import"./cloneDeep-Bk965Mg-.js";import"./_initCloneObject-o-TgjwA3.js";import"./isEqual-DJSPEdYQ.js";import"./merge-DYg2YPZj.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-C1gwNAz5.js";import"./react-sizeme-CLG-vbkb.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-5E2Wa20M.js";import"./Backdrop-CGBHLPj9.js";import"./LinearProgress-DfyMrHqY.js";const Yt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var e,i,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
