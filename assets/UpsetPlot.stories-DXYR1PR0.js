import{U as L}from"./UpsetPlot-BUe8leC2.js";import{f as u}from"./index-RSfUbqcD.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-14r5leiR.js";import"./DefaultPropsProvider-B_w7IYYh.js";import"./createTheme-BYEQ9_hi.js";import"./index-DiBc7ili.js";import"./iframe-BCfGTZPw.js";import"./Button-DssAH1j_.js";import"./createSimplePaletteValueFilter-DrZgBPk1.js";import"./useTimeout-DwBfdaeZ.js";import"./ButtonBase-Dnyx7xRG.js";import"./useForkRef-BYY2iHNG.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DebbhL9u.js";import"./useFiles-uUrEVYQx.js";import"./VerificationSubmission-CMrrYimb.js";import"./SynapseConstants-ahGnFf3k.js";import"./OrientationBanner-GXrRF8mk.js";import"./index-DnagD0Nz.js";import"./spreadSx-CwcO6WA9.js";import"./react-aF39rpsl.js";import"./FullWidthAlert-CK4wibJn.js";import"./Alert-D7JG5kLu.js";import"./useSlot-DRGMPBiG.js";import"./createSvgIcon-CJ_vZh-q.js";import"./Close-DsePz3ap.js";import"./IconButton-IDvQ8M-m.js";import"./Paper-C7EZ6ltN.js";import"./useTheme-C7C1XPb0.js";import"./useTheme-J2BHHVgs.js";import"./Stack-3IMyKWDS.js";import"./extendSxProp-B4j-uB6H.js";import"./getThemeProps-CJhYyVGc.js";import"./Box-sfqkaym-.js";import"./AlertTitle-Bsx8g5ER.js";import"./Typography-CWRwBx33.js";import"./index-CzekjSiY.js";import"./ClickAwayListener-DlH8isjH.js";import"./getReactElementRef-Du_i-g5u.js";import"./index-CeyxHs1b.js";import"./index-DYqm8Nap.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-D2msnuRh.js";import"./Tooltip-Cx1ug7Gi.js";import"./index-kC_fNR5g.js";import"./useControlled-wm2Rxg1j.js";import"./Popper-Dj13oF1t.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ZWLpjIdm.js";import"./useQuery-CF36TnAQ.js";import"./QueryClientProvider-C64Hptub.js";import"./Link-bm7NuS4R.js";import"./Collapse-DpinT9bj.js";import"./_baseUniq-DvjXdn_t.js";import"./_Uint8Array-f-FpD8DO.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-QB8Hyke0.js";import"./isArray-Dxzbedgu.js";import"./_getTag-B5Sj4aG3.js";import"./isEqual-CjtVx9YG.js";import"./merge-BEK32ont.js";import"./_initCloneObject-CanONHSu.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DpcXanbB.js";import"./inputBaseClasses-BXkyxIhf.js";import"./calculateFriendlyFileSize-CWyPJuaS.js";import"./CheckCircleTwoTone-BEZHxOdF.js";import"./InfoTwoTone-C7V38IQu.js";import"./useMutation-CDRYvyQU.js";import"./dayjs.min-DMjxlcFe.js";import"./chunk-AYJ5UCUI-CV8nXzFE.js";import"./cloneDeep-DUB92CXH.js";import"./Skeleton-B-upnsO9.js";import"./SqlFunctions-c3WXx9n7.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-OqA-1Fwx.js";import"./Backdrop-C9H3fYSj.js";import"./LinearProgress-CFzG4hss.js";import"./index-1PTVtOzj.js";import"./index-B8iRG7pD.js";import"./index-ddG4fCFR.js";import"./const-BP60AzNb.js";import"./index-B6PEh6Vl.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
