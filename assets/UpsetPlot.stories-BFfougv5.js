import{U as L}from"./UpsetPlot-Dov6AzRm.js";import{f as u}from"./index-B4GytA1t.js";import"./jsx-runtime-ZqC83-wP.js";import"./index-D3UU9lQW.js";import"./iframe-itIUiwxo.js";import"./LargeButton-BERNuNgc.js";import"./DefaultPropsProvider-YK680Z1R.js";import"./createTheme-C_IqejkE.js";import"./Button-CMT8k8PB.js";import"./ButtonBase-75CAl-fr.js";import"./useTimeout-BV5S8NXn.js";import"./TransitionGroupContext-B6Qra7Rj.js";import"./useForkRef-hDXtKHAF.js";import"./useIsFocusVisible-DHBCoWw5.js";import"./useEventCallback-CA3yg066.js";import"./useFiles-DQNFO6M3.js";import"./VerificationSubmission-BI5WaB2N.js";import"./SynapseConstants-CKvgSoDH.js";import"./OrientationBanner-B0OoLswb.js";import"./index-D11wmJq-.js";import"./spreadSx-CwcO6WA9.js";import"./react-O6I3oTFU.js";import"./FullWidthAlert-DAax8okC.js";import"./Alert-CU_Obpy3.js";import"./resolveComponentProps-Dmj9A9RV.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-DHcmv218.js";import"./Close-BJ4PCaUp.js";import"./IconButton-ChC2FTBM.js";import"./Paper-B36p1j3K.js";import"./Stack-DlqPlAbi.js";import"./getThemeProps-wZq0Zah2.js";import"./useTheme-B_XHKhDB.js";import"./Box-CmLfYmAL.js";import"./AlertTitle-BLeEkfUJ.js";import"./Typography-DQbfKnED.js";import"./useTheme-DfwXarV_.js";import"./Grow-CryHvXlm.js";import"./index-C3D0ccmq.js";import"./utils-Bd-b7f2h.js";import"./ClickAwayListener-zCiIq-sA.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BPpCrc9w.js";import"./index-Ccj1bX3p.js";import"./useControlled-C9HNAFVZ.js";import"./useId-CG4UsncK.js";import"./Popper-C1SIfDvh.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-DN6u4g4A.js";import"./useQuery-BqZh5555.js";import"./utils-DJNKw99O.js";import"./Link-DZafluH_.js";import"./Collapse-CyQNCh1z.js";import"./isNil-DGBBC_gM.js";import"./_Uint8Array-CyAVpPKh.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-m8g4xdIh.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-BPztA6qE.js";import"./_getTag-BQtK23u5.js";import"./tinycolor-Begke6kS.js";import"./Fade-CojYmX76.js";import"./Skeleton-DQuvMvZk.js";import"./inputBaseClasses-CShjFgOh.js";import"./calculateFriendlyFileSize-CQTrwrnu.js";import"./CheckCircleTwoTone-C8wF6a0h.js";import"./InfoTwoTone-BK1P1y4D.js";import"./useMutation-BrGCzCug.js";import"./isEqual-BPjkdIBC.js";import"./dayjs.min-DYPT4JpK.js";import"./chunk-AYJ5UCUI-BhbJP7T3.js";import"./cloneDeep-BUB8jjRG.js";import"./_initCloneObject-D6hrjEDP.js";import"./merge-BOQKqbFD.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-DJ9aEy1v.js";import"./react-sizeme-BSKLXUK3.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-hbuA7HWn.js";import"./Backdrop-1DB62AU-.js";import"./LinearProgress-2YfNU4aL.js";const Yt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var e,i,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
