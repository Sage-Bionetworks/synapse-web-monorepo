import{U as L}from"./UpsetPlot-BJqNa4NH.js";import{f as u}from"./index-1ZlwA9BR.js";import"./jsx-runtime-BhAJ9Y3L.js";import"./index-DOU8PYus.js";import"./iframe-B6_QaExc.js";import"./LargeButton-CvYWd33w.js";import"./DefaultPropsProvider-DhGy6nlm.js";import"./createTheme-D3vVDGxc.js";import"./Button-BoYMPhvT.js";import"./ButtonBase-D0SP54zG.js";import"./useTimeout-oLXMGs4M.js";import"./TransitionGroupContext-jyNSIYMl.js";import"./useForkRef-B6dY2QVl.js";import"./useIsFocusVisible-DXSm2biM.js";import"./useEventCallback-hd3UIFn8.js";import"./useFiles-BOR3GEax.js";import"./VerificationSubmission-DHPhgAH7.js";import"./SynapseConstants-BnRMD3Ad.js";import"./OrientationBanner-B5TTXIo1.js";import"./index-BT3_9142.js";import"./spreadSx-CwcO6WA9.js";import"./react-Ce9ZDlA0.js";import"./FullWidthAlert-CBJigWFY.js";import"./Alert-D_KCgbxC.js";import"./resolveComponentProps-Cjit2Pfx.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-JfH61MHK.js";import"./Close-CbL4oY-7.js";import"./IconButton-NaOCI8Aw.js";import"./Paper-Dk5V-YxU.js";import"./Stack-IAxykChz.js";import"./getThemeProps--AtUlah8.js";import"./useTheme-Da75Vo1i.js";import"./Box-CYTyMrXG.js";import"./AlertTitle-i5YQ8W7y.js";import"./Typography-Ct5R0hvY.js";import"./useTheme-ZaQ7CBOE.js";import"./Grow-BdWvYuX7.js";import"./index-DM9E6TvJ.js";import"./utils-iLK5s9y8.js";import"./ClickAwayListener-DqnJeGQQ.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DuAYmp6Z.js";import"./index-CFqG_Jpv.js";import"./useControlled-gMYeIHlS.js";import"./useId-CgSs2jjB.js";import"./Popper-BMfFCZeV.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-Bj0SG9ce.js";import"./useQuery-DRIeZwaP.js";import"./utils-DXbw_cY9.js";import"./Link-C_cMubJU.js";import"./Collapse-CjFArZDB.js";import"./isNil-Ck-WrAnD.js";import"./_Uint8Array-DPQIIKW5.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-B80JG2sS.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-BJMDhiwP.js";import"./_getTag-29ZQCHUY.js";import"./tinycolor-Begke6kS.js";import"./Fade-BuJnQaLb.js";import"./Skeleton-DA4aoZ9E.js";import"./inputBaseClasses-Bn2kxj98.js";import"./calculateFriendlyFileSize-Bhr9QEPb.js";import"./CheckCircleTwoTone-Be32YNCB.js";import"./InfoTwoTone-ldp8P5kK.js";import"./useMutation-BvjgdMJk.js";import"./isEqual-BW52Ww6h.js";import"./dayjs.min-CyrBdQwZ.js";import"./chunk-AYJ5UCUI-CcAccbZB.js";import"./cloneDeep-wuRwbMo-.js";import"./_initCloneObject-DIw4QhPh.js";import"./merge-B-QEi8am.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-DhoAZ_qc.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-4Nw5eS_U.js";import"./Backdrop-CdofvlQI.js";import"./LinearProgress-D3UTSVC2.js";import"./index-CYDGgpom.js";import"./index-BZ4bnNgw.js";import"./index-adXUs4Mu.js";import"./const-Doag8klc.js";import"./index-B9yWla0E.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
