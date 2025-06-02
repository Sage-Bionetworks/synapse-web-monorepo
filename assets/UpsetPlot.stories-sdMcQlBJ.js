import{U as L}from"./UpsetPlot-DmkwhzGI.js";import{f as u}from"./index-DvYpZUW_.js";import"./jsx-runtime-CXqxCHrr.js";import"./index-chvr4nzo.js";import"./iframe-mEF7r3QC.js";import"./LargeButton-B6R2JeAW.js";import"./DefaultPropsProvider-CQhminKs.js";import"./createTheme-BPHeU5pH.js";import"./Button-BpvCZV0i.js";import"./ButtonBase-BLchPz6_.js";import"./useTimeout-BWWIDppC.js";import"./TransitionGroupContext-DyGj_AR7.js";import"./useForkRef-CaxDp9Tt.js";import"./useIsFocusVisible-B8jESHd6.js";import"./useEventCallback-DLF8tsWn.js";import"./useFiles-zmIgDHgj.js";import"./VerificationSubmission-DHPhgAH7.js";import"./SynapseConstants-B7Xg8pkB.js";import"./OrientationBanner-BM51AJT8.js";import"./index-Cvd5NvQW.js";import"./spreadSx-CwcO6WA9.js";import"./react-BD6rhIxb.js";import"./FullWidthAlert-6C2VnmRK.js";import"./Alert-9xz83nqa.js";import"./resolveComponentProps-CbO5b_W8.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-Dtr3C6X8.js";import"./Close-BIQ5NLvL.js";import"./IconButton-CnvaAokU.js";import"./Paper-CiYpDnEl.js";import"./Stack-Cqm_sIC4.js";import"./getThemeProps-svO4y_8_.js";import"./useTheme-CxHbQHwg.js";import"./Box-DhrCRVep.js";import"./AlertTitle-BiQA2OHP.js";import"./Typography-TPoZq6Wq.js";import"./useTheme-BltnVY5I.js";import"./Grow-DruuI62p.js";import"./index-B5S9-Spv.js";import"./utils-B6LfoJiy.js";import"./ClickAwayListener-BLAWwxqk.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-3yxV1myM.js";import"./index-HXVr3Mau.js";import"./useControlled-WEflZAwQ.js";import"./useId-B8wqeFko.js";import"./Popper-B5wcKjOJ.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-Bj0SG9ce.js";import"./useQuery-Dy_B_T4H.js";import"./utils-Dl0-3C1y.js";import"./Link-7m1R2YkZ.js";import"./Collapse-BEP1-Zw5.js";import"./isNil-DDPeQmp8.js";import"./_Uint8Array-z-B_nzR7.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-IzodiS5Q.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-dyv7qhgE.js";import"./_getTag-B5Qu8EDV.js";import"./tinycolor-Begke6kS.js";import"./Fade-sswq0Zcs.js";import"./Skeleton-BetMcy4d.js";import"./inputBaseClasses-B8luTHJ2.js";import"./calculateFriendlyFileSize-JSfKWotV.js";import"./CheckCircleTwoTone-kEK2dVkR.js";import"./InfoTwoTone-DHKS4jcI.js";import"./useMutation-VbtcAGxp.js";import"./isEqual-B86MZMBQ.js";import"./dayjs.min-BdvEa-tw.js";import"./chunk-AYJ5UCUI-BN6H7asg.js";import"./cloneDeep-BJ-BOCet.js";import"./_initCloneObject-CMW1C9rS.js";import"./merge-vKDFgieM.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-DhoAZ_qc.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-zkdZROPN.js";import"./Backdrop-CsHfhpP9.js";import"./LinearProgress-DlHbjLNd.js";import"./index-DF1ME-Dm.js";import"./index-DM62uTsx.js";import"./const-Doag8klc.js";import"./index-C4Msuu4p.js";const jt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
