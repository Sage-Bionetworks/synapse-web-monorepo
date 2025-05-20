import{U as L}from"./UpsetPlot-CD1mRBfO.js";import{f as u}from"./index-BO6vCnVR.js";import"./jsx-runtime-camNUIeC.js";import"./index-3qy05by_.js";import"./iframe-DcLzMnze.js";import"./LargeButton-BNgK4Qkl.js";import"./DefaultPropsProvider-DLeeu6LA.js";import"./createTheme-BxrJgBSW.js";import"./Button-EqcuO244.js";import"./ButtonBase-BHtY9VZL.js";import"./useTimeout-ssszZLNk.js";import"./TransitionGroupContext-Pdv27smz.js";import"./useForkRef-CLEivBCN.js";import"./useIsFocusVisible-C3N0_RYP.js";import"./useEventCallback-8ueBEeTE.js";import"./useFiles-C5Mq70RQ.js";import"./VerificationSubmission-dxY1kvC5.js";import"./SynapseConstants-C6dWug1_.js";import"./OrientationBanner-BWRgEzO9.js";import"./index-BZbH1w8C.js";import"./spreadSx-CwcO6WA9.js";import"./react-CbTk7auu.js";import"./FullWidthAlert-BQAeOLAY.js";import"./Alert-C56d-Dk2.js";import"./resolveComponentProps-C4VxWT4p.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-CeAJU78Y.js";import"./Close-C5t_KRqI.js";import"./IconButton-BHUvtcCe.js";import"./Paper-Ber0U2Dw.js";import"./Stack-Icu4aaDP.js";import"./getThemeProps-Z_xok4s4.js";import"./useTheme-B0RT_gxt.js";import"./Box-BdQJQTds.js";import"./AlertTitle-DvX8uaVr.js";import"./Typography-3xjKDb7N.js";import"./useTheme-BeRZYfS0.js";import"./Grow-DpiwUoQW.js";import"./index-DzjMEJyD.js";import"./utils-C1frHh93.js";import"./ClickAwayListener-B3Ml9YPS.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BWvdWZlE.js";import"./index-CEIkfSAW.js";import"./useControlled-CesbcXsm.js";import"./useId-BFCGIoCo.js";import"./Popper-8EezrjSi.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-Df7AZImX.js";import"./useQuery-BG0Ze_zN.js";import"./utils-DnzoUh7_.js";import"./Link-CiQ-OV23.js";import"./Collapse-Bo7xNqfl.js";import"./isNil-BR-_1Pzq.js";import"./_Uint8Array-Cq1aENa3.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DJBklG-L.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-Dtkjh-d1.js";import"./_getTag-FobV6xDg.js";import"./tinycolor-Begke6kS.js";import"./Fade-DjOJc1x_.js";import"./Skeleton-BPkEygKI.js";import"./inputBaseClasses-DFhmw9MT.js";import"./calculateFriendlyFileSize-DeQhHFBq.js";import"./CheckCircleTwoTone-Bg2tqZXX.js";import"./InfoTwoTone-Bi0fUZGN.js";import"./mutation-BwbNpoFa.js";import"./dayjs.min-CEepuNfW.js";import"./chunk-AYJ5UCUI-CBYDAt04.js";import"./cloneDeep-DXQ6UOjN.js";import"./_initCloneObject-CARNlWyH.js";import"./isEqual-Bs8vOeuK.js";import"./merge-BFUthBpK.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-BxVSBgLJ.js";import"./react-sizeme-C04zGFlS.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-Cje5BY8f.js";import"./Backdrop-CckJXoMw.js";import"./LinearProgress-DcaduZYC.js";const Yt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var e,i,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
