import{U as L}from"./UpsetPlot-drovGhsm.js";import{f as u}from"./index-DYqPOt9b.js";import"./jsx-runtime-nSLCg5Ff.js";import"./index-BW_4_Xzt.js";import"./iframe-BbO8AEg3.js";import"./LargeButton-C0k3FtNu.js";import"./DefaultPropsProvider-C-nDaUyT.js";import"./createTheme-vWIlxZDX.js";import"./Button-DjI-_s9b.js";import"./createSimplePaletteValueFilter-CIShsUkc.js";import"./useTimeout-DT_CqPP6.js";import"./ButtonBase-zIZj5pIX.js";import"./useForkRef-OHC-fPBp.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-7jOzBolD.js";import"./useFiles-BLcjN_vE.js";import"./VerificationSubmission-CMrrYimb.js";import"./SynapseConstants-Dzr99xnJ.js";import"./OrientationBanner-C5SBjrEf.js";import"./index-DqNWLDHU.js";import"./spreadSx-CwcO6WA9.js";import"./react-Bn9XeOTM.js";import"./FullWidthAlert-CAvEoFVp.js";import"./Alert-D-FHTxWE.js";import"./useSlot-Cp46zHXT.js";import"./createSvgIcon-Dgwa5ydj.js";import"./Close-BL7HgOv5.js";import"./IconButton-D-fwjRi5.js";import"./Paper-D1M0V8sZ.js";import"./useTheme-Bh6OBAyW.js";import"./useTheme-DRbZ6Lwr.js";import"./Stack-BxuDWvu6.js";import"./extendSxProp-AvLc-Gna.js";import"./getThemeProps-CsD-j25b.js";import"./Box-DIO_vLOn.js";import"./AlertTitle-BeAhdm4R.js";import"./Typography-S1uwKLwx.js";import"./index-GghUaGLv.js";import"./ClickAwayListener-Cs3HVAbr.js";import"./getReactElementRef-BCL413Bt.js";import"./index-KSoqftDU.js";import"./index-JrbwngIs.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-wlJUshl8.js";import"./Tooltip-wCFJUNlH.js";import"./index-OAMuKwzI.js";import"./useControlled-DQu4-N-P.js";import"./Popper-DwNrEIow.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ZWLpjIdm.js";import"./useQuery-CRnHf3v3.js";import"./utils-Cko606K0.js";import"./Link-pPMpELn7.js";import"./Collapse-DaSDYcQM.js";import"./_baseUniq-DGSRVZOK.js";import"./_Uint8Array-Ba7rGLcu.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-16qo--Kn.js";import"./isArray-Dxzbedgu.js";import"./_getTag-B1d1cni4.js";import"./isEqual-C5z_UD0M.js";import"./merge-CsUFeV3q.js";import"./_initCloneObject-C2IiQrp-.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BvEbZxAO.js";import"./inputBaseClasses-BgpMFcFd.js";import"./calculateFriendlyFileSize-yxP6i7Lu.js";import"./CheckCircleTwoTone-DnLU6JyV.js";import"./InfoTwoTone-Tlli5nVp.js";import"./useMutation-BxpQOKgr.js";import"./dayjs.min-BchtRh_q.js";import"./chunk-AYJ5UCUI-QISceWWU.js";import"./cloneDeep-DIr9Kc2h.js";import"./Skeleton-B0eqaPDs.js";import"./SqlFunctions-c3WXx9n7.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-Dw3Lqxpj.js";import"./Backdrop-DNEa77Lm.js";import"./LinearProgress-BME9JT8P.js";import"./index-Pz-KQYKn.js";import"./index-Brc6M1-A.js";import"./index-B63r8JCA.js";import"./const-Doag8klc.js";import"./index-BQb_ef1i.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
