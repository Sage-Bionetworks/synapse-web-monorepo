import{U as L}from"./UpsetPlot-B7VczYdN.js";import{f as u}from"./index-EcCAJUBc.js";import"./jsx-runtime-3OrYGa-A.js";import"./index-E0Zgd8PJ.js";import"./iframe-DGKewhZ-.js";import"./LargeButton-U6ToSO0D.js";import"./DefaultPropsProvider-B5yGAE64.js";import"./createTheme-BnTuIRv6.js";import"./Button-CIP1MA1L.js";import"./ButtonBase-BzsSFjIg.js";import"./useTimeout-b192V-41.js";import"./TransitionGroupContext-DyqmDSGM.js";import"./useForkRef-fbjtUiV8.js";import"./useIsFocusVisible-DHNMeGMf.js";import"./useEventCallback-ByjSGWYF.js";import"./useFiles-DUA-Jj-0.js";import"./VerificationSubmission-DHPhgAH7.js";import"./SynapseConstants-jSYxgpcu.js";import"./OrientationBanner-CccXL3x3.js";import"./index-DyAapOrS.js";import"./spreadSx-CwcO6WA9.js";import"./react-Bs2L_zF6.js";import"./FullWidthAlert-0pF52_M1.js";import"./Alert-DonyAFK0.js";import"./resolveComponentProps-CSqydSMD.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-eKjsHGUK.js";import"./Close-CGILoACs.js";import"./IconButton-B9wVP-A1.js";import"./Paper-Bzm_Nx-y.js";import"./Stack-C7Who12C.js";import"./getThemeProps-BeGrbUHB.js";import"./useTheme-CA91lOJv.js";import"./Box-347FjrZL.js";import"./AlertTitle-e1QbrWbH.js";import"./Typography-BqXAY_j_.js";import"./useTheme-YD2d8a2f.js";import"./Grow-BGnhXozI.js";import"./index-DK7lSTXT.js";import"./utils-D9FR9N58.js";import"./ClickAwayListener-vy6Nn4he.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DJrmkq86.js";import"./index-EEjFQgdf.js";import"./useControlled-DoAv-Xot.js";import"./useId-BmJ6jTVu.js";import"./Popper-OySlr5Dd.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-Bj0SG9ce.js";import"./useQuery-BqSCqwMR.js";import"./utils-CYumXUBm.js";import"./Link-HA4mk3tW.js";import"./Collapse-D67OGycD.js";import"./isNil-BmumFaXA.js";import"./_Uint8Array-Bvb5BnvN.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DBRiHJjl.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-0jby8jfS.js";import"./_getTag-t_JCQRAi.js";import"./tinycolor-Begke6kS.js";import"./Fade-LqP4BbTu.js";import"./Skeleton-BCoikWZP.js";import"./inputBaseClasses-BSS9qqFG.js";import"./calculateFriendlyFileSize-5_UVqq-F.js";import"./CheckCircleTwoTone-G4C_D7UA.js";import"./InfoTwoTone-CaLHzJw9.js";import"./useMutation-BWqLpdaP.js";import"./isEqual-oelJpyyy.js";import"./dayjs.min-B6dWaLXc.js";import"./chunk-AYJ5UCUI-CBOKgxJt.js";import"./cloneDeep-Dr-I4MgV.js";import"./_initCloneObject-DR5O-GqP.js";import"./merge-3rJ4KN2X.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-DhoAZ_qc.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-Boj_Jl8f.js";import"./Backdrop-B_jRy5C5.js";import"./LinearProgress-DoKk1Zge.js";import"./index-CiE6XrMW.js";import"./index-Cmy3_5Jx.js";import"./const-Doag8klc.js";import"./index-BtbAv9w3.js";const jt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
