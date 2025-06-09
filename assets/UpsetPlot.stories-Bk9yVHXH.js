import{U as L}from"./UpsetPlot-D9_H7BcP.js";import{f as u}from"./index-BpYU0aPq.js";import"./jsx-runtime-BgCq8gwN.js";import"./index-C_gnWP_t.js";import"./iframe-CbIreDb2.js";import"./LargeButton-DsZjgx6E.js";import"./DefaultPropsProvider-BseDZ5eB.js";import"./createTheme-OkraJ5eJ.js";import"./Button-BoTYrHNG.js";import"./ButtonBase-IB6_m_jw.js";import"./useTimeout-Cye8bwlJ.js";import"./TransitionGroupContext-CS2phJ3S.js";import"./useForkRef-dNLbFQVo.js";import"./useIsFocusVisible-pfxCMmj4.js";import"./useEventCallback-Bck77aoL.js";import"./useFiles-DPLNIGPK.js";import"./VerificationSubmission-DHPhgAH7.js";import"./SynapseConstants-DIGbeuIK.js";import"./OrientationBanner-CdVTuGgb.js";import"./index-DsPoo2Ro.js";import"./spreadSx-CwcO6WA9.js";import"./react-D4nFN3Ah.js";import"./FullWidthAlert-BWkqCL07.js";import"./Alert-zI21t_ct.js";import"./resolveComponentProps-CePEpoP1.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-BHiZORw5.js";import"./Close-CDYC--wl.js";import"./IconButton-DAaKFUzV.js";import"./Paper-CRf9WCXu.js";import"./Stack-CtKa76FJ.js";import"./getThemeProps-CZUDRWGj.js";import"./useTheme-D5uDEtFj.js";import"./Box-SbfP01m2.js";import"./AlertTitle-YuhibS0Q.js";import"./Typography-ooch0MpL.js";import"./useTheme-BxZhO2mg.js";import"./Grow-BRU2ZIec.js";import"./index-BLcRfihU.js";import"./utils-BOrTgFDN.js";import"./ClickAwayListener-0jLBZ_NF.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-CnSmt6JP.js";import"./index-C8hSn997.js";import"./useControlled-B5xsJp7-.js";import"./useId-B3qv0Fqa.js";import"./Popper-BJu7XYtc.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-Bj0SG9ce.js";import"./useQuery-D2x4aW1T.js";import"./utils-BhHY6IUZ.js";import"./Link-CUHo7LkR.js";import"./Collapse-CcAZYdGa.js";import"./isNil-KHj6LWxN.js";import"./_Uint8Array-BfzcZJqI.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-ArQpH04e.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-BsH3YbMu.js";import"./_getTag-RwKhRrOD.js";import"./tinycolor-Begke6kS.js";import"./Fade-DHaVGwVo.js";import"./Skeleton-aBWFkCqk.js";import"./inputBaseClasses-CUxDQaHH.js";import"./calculateFriendlyFileSize-D8IbqDIv.js";import"./CheckCircleTwoTone-WEcEfruf.js";import"./InfoTwoTone-CVKap42G.js";import"./useMutation-Bc_DK1q5.js";import"./isEqual-Cs40Ekkd.js";import"./dayjs.min-DrfyowjI.js";import"./chunk-AYJ5UCUI-CbqUZpCT.js";import"./cloneDeep-w86UdGPr.js";import"./_initCloneObject-C1jMuqUN.js";import"./merge-CGttcKyQ.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-DhoAZ_qc.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DFMB5EVu.js";import"./Backdrop-CBiUf-TH.js";import"./LinearProgress-Delae9I-.js";import"./index-gd5pDbFv.js";import"./index-Dyd8Op8U.js";import"./index-BYaS5iky.js";import"./const-Doag8klc.js";import"./index-eJXonVEK.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const Xt=["Demo","ElitePortalDemo","AMPALSPortalVariant"];export{r as AMPALSPortalVariant,t as Demo,o as ElitePortalDemo,Xt as __namedExportsOrder,Kt as default};
