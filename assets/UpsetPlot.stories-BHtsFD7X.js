import{U as L}from"./UpsetPlot-Q6z6_gSS.js";import{f as u}from"./index-B0qfCs0v.js";import"./jsx-runtime-A9W2czdM.js";import"./index-BFZKnfET.js";import"./iframe-mi3m-uSs.js";import"./LargeButton-DpSaZmxS.js";import"./DefaultPropsProvider-B7TQo-eI.js";import"./createTheme-BdDtZy0O.js";import"./Button-CiKevTS7.js";import"./ButtonBase-oOx9FjhK.js";import"./useTimeout-DsjFGen0.js";import"./TransitionGroupContext-Dj8Cy1m_.js";import"./useForkRef-DM_Gr1hR.js";import"./useIsFocusVisible-DFTbXIJK.js";import"./useEventCallback-DIA2UmT1.js";import"./useFiles-B4zpNhuf.js";import"./VerificationSubmission-DeH3Sb8D.js";import"./SynapseConstants-C_MmGiSB.js";import"./OrientationBanner-BSYXm2L9.js";import"./index-B7uZzOz7.js";import"./spreadSx-CwcO6WA9.js";import"./react-C8YIxmMt.js";import"./FullWidthAlert-ChuwXj02.js";import"./Alert-BAIQM6YU.js";import"./resolveComponentProps-0AXW_HwS.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-JBE6eGbI.js";import"./Close-GTentS_0.js";import"./IconButton-DHV-qBSs.js";import"./Paper-D7I7kF_c.js";import"./Stack-DOrCsrsi.js";import"./getThemeProps-CQ7oTslf.js";import"./useTheme-CQj2XPRO.js";import"./Box-Ba7vUtzE.js";import"./AlertTitle-3huF3rgS.js";import"./Typography-DcjY5Ket.js";import"./useTheme-DBpP0q2e.js";import"./Grow-BPEDSxJK.js";import"./index-lRliZ52m.js";import"./index-C-qha7Of.js";import"./utils-BXeje1kT.js";import"./ClickAwayListener-CtowH6UG.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-Bb5nGE0s.js";import"./index-v2Ki_WPX.js";import"./useControlled-DCLpsVH6.js";import"./useId-Bw3oMwc-.js";import"./Popper-B3-fPGvr.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-DnD65nWI.js";import"./useQuery-CEzc6Ncz.js";import"./utils-DsCUD75n.js";import"./Link-Cdbh9Yjo.js";import"./Collapse-BjWxAvoi.js";import"./isNil-CoC0wotL.js";import"./_Uint8Array-CUcL-wbP.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CM8O5eHy.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-Bv2-mzDy.js";import"./_getTag-NplZNcJR.js";import"./tinycolor-Begke6kS.js";import"./Fade-dSAzNaxC.js";import"./Skeleton-BWrh50zo.js";import"./inputBaseClasses-BIVu0zbG.js";import"./calculateFriendlyFileSize-CX1Oq2nB.js";import"./CheckCircleTwoTone-t0U7XX7o.js";import"./InfoTwoTone-BbMWH-DU.js";import"./useMutation-CBMAkF_e.js";import"./isEqual-1-gtA63Q.js";import"./dayjs.min-B6vZI5WY.js";import"./chunk-AYJ5UCUI-gWuEHVDL.js";import"./cloneDeep-D04fZAJ3.js";import"./_initCloneObject-DoS7JtrC.js";import"./merge-BDPYq1PB.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-DMQpCQSh.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-Dh7VyDIV.js";import"./Backdrop-T0OBfZVq.js";import"./LinearProgress-Bk87aH8Q.js";import"./index-B-2-lWh5.js";import"./index-IEyRMy5S.js";import"./index-DvbUraa1.js";import"./const-Doag8klc.js";import"./index-Dt9Wz7oj.js";const Xt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
