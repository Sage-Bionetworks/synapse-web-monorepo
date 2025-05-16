import{U as L}from"./UpsetPlot-C9R_UbbV.js";import{f as u}from"./index-CvRfBAPr.js";import"./jsx-runtime-Aq5fbqHl.js";import"./index-JgWvyRd0.js";import"./iframe-CGz9Tkep.js";import"./LargeButton-Brm3OS7s.js";import"./DefaultPropsProvider-rm74DNR0.js";import"./createTheme-CabrvzGG.js";import"./Button-Cj3fw4dL.js";import"./ButtonBase-DuHovILV.js";import"./useTimeout-CLPgbyPk.js";import"./TransitionGroupContext-Dv9DyMfN.js";import"./useForkRef-CH1o28Sn.js";import"./useIsFocusVisible-BGnBciWP.js";import"./useEventCallback-BAJp23lY.js";import"./useFiles-DB5RUn42.js";import"./VerificationSubmission-dxY1kvC5.js";import"./SynapseConstants-CfJFMU44.js";import"./OrientationBanner-BxqvkYhO.js";import"./index-DbjpxmLy.js";import"./spreadSx-CwcO6WA9.js";import"./react-DTfpc0Nm.js";import"./FullWidthAlert-pE7OHiYt.js";import"./Alert-DxvcGxLm.js";import"./resolveComponentProps-CbN17S1S.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-D5iVBR5M.js";import"./Close-CtA38glB.js";import"./IconButton-DJ7CnQcI.js";import"./Paper-DK1SI2Ul.js";import"./Stack-BfP3PSXZ.js";import"./getThemeProps-CiYEGSc1.js";import"./useTheme-C4qyPjnK.js";import"./Box-B2ycGbQs.js";import"./AlertTitle-CLAc8_kb.js";import"./Typography-C_Rd-vc3.js";import"./useTheme-CWq0CMFs.js";import"./Grow-96cTP3k-.js";import"./index-BAYNcIPW.js";import"./utils-BpsVJ7_L.js";import"./ClickAwayListener-CpgqDlAE.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DV1lHLML.js";import"./index-BXuttiqi.js";import"./useControlled-DKF3jkF4.js";import"./useId-te-eXufQ.js";import"./Popper-BpxIK3o5.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-lE31obNl.js";import"./useQuery-CWCK9oHA.js";import"./utils-BTjLWw9V.js";import"./Link-B-GSk5ZJ.js";import"./Collapse-DRZCXyGt.js";import"./isNil-YEBrO959.js";import"./_Uint8Array-DsX8C4yt.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DOsXpd_Z.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-B73VkKNe.js";import"./_getTag-DqJt2ioY.js";import"./tinycolor-Begke6kS.js";import"./Fade-D7vpEMyo.js";import"./Skeleton-sPP7_TZq.js";import"./inputBaseClasses-BAfHv4Bb.js";import"./calculateFriendlyFileSize-Vzb5BBgT.js";import"./CheckCircleTwoTone-DH4fkY38.js";import"./InfoTwoTone-BCIxruOU.js";import"./mutation-B9vk3ZUd.js";import"./dayjs.min-DMTb_QEv.js";import"./chunk-AYJ5UCUI-D9dVPbwt.js";import"./cloneDeep-D4yJ6Uqf.js";import"./_initCloneObject-CBlxkXZJ.js";import"./isEqual-Dlw3pN9M.js";import"./merge-CtnYmU5N.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-BxcEiHsR.js";import"./react-sizeme-C867FHrl.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-Ci5xwElE.js";import"./Backdrop-DOdQsRwS.js";import"./LinearProgress-Cqrb_-z1.js";const Yt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var e,i,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
