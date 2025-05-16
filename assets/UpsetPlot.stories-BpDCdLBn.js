import{U as L}from"./UpsetPlot-BFERLGmx.js";import{f as u}from"./index-C-gQBGQs.js";import"./jsx-runtime-CoXzOFQn.js";import"./index-Bv-s9W2u.js";import"./iframe-Cbn6Wioa.js";import"./LargeButton-Depz_A_g.js";import"./DefaultPropsProvider-CV1WaMnn.js";import"./createTheme-B2jVum5G.js";import"./Button-CQ-PKmTk.js";import"./ButtonBase-DsKebiHo.js";import"./useTimeout-CxKGPiOF.js";import"./TransitionGroupContext-CntLVBsw.js";import"./useForkRef-CYGkZ_5i.js";import"./useIsFocusVisible-CNLfUmJ0.js";import"./useEventCallback-BzaKhurB.js";import"./useFiles-DkRsMa6G.js";import"./VerificationSubmission-dxY1kvC5.js";import"./SynapseConstants-Bfg1qQ66.js";import"./OrientationBanner-BN7sc-yW.js";import"./index-BTAejVQp.js";import"./spreadSx-CwcO6WA9.js";import"./react-DOQBJuAS.js";import"./FullWidthAlert-Vqv0OtJl.js";import"./Alert-3vS49jrx.js";import"./resolveComponentProps-Da3g-n6Q.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-zGAR842g.js";import"./Close-BLBNR7A4.js";import"./IconButton-EuepfCvL.js";import"./Paper-DTlkPfUp.js";import"./Stack-cKH5qMzO.js";import"./getThemeProps-BpylFmtp.js";import"./useTheme-BjBg_HQE.js";import"./Box-BCl-T6Nm.js";import"./AlertTitle-BN8ssDQ0.js";import"./Typography-mifgVkJr.js";import"./useTheme-BFXFTIwP.js";import"./Grow-DEaHBlcM.js";import"./index-CDrKje1t.js";import"./utils-Bov2-oov.js";import"./ClickAwayListener-CQQ6DDI4.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DfqKSysC.js";import"./index-ByVQsoFM.js";import"./useControlled-CDkZ20IG.js";import"./useId-BXknn2vZ.js";import"./Popper-BA5jVx5O.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-lE31obNl.js";import"./useQuery-BRqwTfcM.js";import"./utils-Dml2HCW2.js";import"./Link-8rZT6qId.js";import"./Collapse-DUScFzSi.js";import"./isNil-IKS6J4hT.js";import"./_Uint8Array-CAE93Lp8.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-D46PIp9S.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-Cv659kD2.js";import"./_getTag-CYQCzpsu.js";import"./tinycolor-Begke6kS.js";import"./Fade-DfUGStCB.js";import"./Skeleton-C6cw4nQZ.js";import"./inputBaseClasses-CRfo2RbF.js";import"./calculateFriendlyFileSize-BVB5UzoH.js";import"./CheckCircleTwoTone-DLeaCtrD.js";import"./InfoTwoTone-ZwE3NCw_.js";import"./mutation-B83MkDYj.js";import"./dayjs.min-B7F5G4Hx.js";import"./chunk-AYJ5UCUI-DxylnMeD.js";import"./cloneDeep-Szv4Lrja.js";import"./_initCloneObject-DTpM-W_c.js";import"./isEqual-mmtDgPnd.js";import"./merge-Dt1OjAEO.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-BxcEiHsR.js";import"./react-sizeme-VlqgJUPw.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DQXXm9Ne.js";import"./Backdrop-DoJW_1Xn.js";import"./LinearProgress-DCCCBgKu.js";const Yt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var e,i,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
