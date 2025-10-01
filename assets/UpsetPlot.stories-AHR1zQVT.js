import{U as L}from"./UpsetPlot-krXux-Yc.js";import{f as u}from"./index-B9LybF72.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-BJgC0_1C.js";import"./DefaultPropsProvider-DX1Tm6hX.js";import"./createTheme-DKmQ0T8u.js";import"./index-BoC9mbPI.js";import"./iframe-D_Fqsfq4.js";import"./Button-Dvv07PAX.js";import"./createSimplePaletteValueFilter-C5zma5o1.js";import"./useTimeout-D2L2hKd5.js";import"./ButtonBase-CVi0DzxW.js";import"./useForkRef-DuJEVWZk.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CkE3_q69.js";import"./useFiles-DBEctmab.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-CbAC6j7A.js";import"./OrientationBanner-DpVC70dt.js";import"./index-Ct3r44PU.js";import"./spreadSx-CwcO6WA9.js";import"./react-BH467_GQ.js";import"./FullWidthAlert-Bj9eHiJK.js";import"./Alert-Ds3NZtv3.js";import"./useSlot-DHgN7HRG.js";import"./createSvgIcon-D0lTdNMg.js";import"./Close-C6pR0wvq.js";import"./IconButton-jj7u6pzf.js";import"./Paper-bVT9BLiU.js";import"./useTheme-DOeDq_FU.js";import"./useTheme-BCF8IGAN.js";import"./Stack-86eFiKCQ.js";import"./extendSxProp-CsGDdDwy.js";import"./getThemeProps-DawfSU79.js";import"./Box-F0f29abT.js";import"./AlertTitle-CAoDvZac.js";import"./Typography-Ch2gxwNH.js";import"./index-BQwSpiiQ.js";import"./ClickAwayListener-gJuMmyJa.js";import"./getReactElementRef-Bemv---L.js";import"./index-BNyjnn7z.js";import"./index-CIfKdjTQ.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DW5gViin.js";import"./Tooltip-B8qmX082.js";import"./index-LLHf2Rll.js";import"./useControlled-Fn_6fmgT.js";import"./Popper-D90A6WnX.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-B9gAQeEx.js";import"./QueryClientProvider-D1-MD6zl.js";import"./Link-CeAlzF0F.js";import"./Collapse-BPGnxPXh.js";import"./_baseUniq-CoHdZ8H5.js";import"./_Uint8Array-I8Q0tngj.js";import"./isArray-DrXY-ag7.js";import"./_getTag-CnqFMyCR.js";import"./isEqual-OqqYJb0M.js";import"./merge-DV3Kq0zA.js";import"./_initCloneObject-CmSiAr5t.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DC6uyZ5B.js";import"./inputBaseClasses-CZ5eTaNL.js";import"./calculateFriendlyFileSize-C67i4Vi9.js";import"./CheckCircleTwoTone-DBrdLgIO.js";import"./InfoTwoTone-CsFI_uty.js";import"./useMutation-C76vb5A5.js";import"./dayjs.min-BAmezIeJ.js";import"./chunk-AYJ5UCUI-zMqkVHKR.js";import"./cloneDeep-DqSuasmx.js";import"./Skeleton-EPd-3t_-.js";import"./SqlFunctions-B6aZ8mL4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-C_5oPNBY.js";import"./Backdrop-QgD6SPmw.js";import"./LinearProgress-5Eh0UE6x.js";import"./index-C5yUe81a.js";import"./index-DMscQPf0.js";import"./index-DhCoSTUS.js";import"./const-BP60AzNb.js";import"./index-CJIrNURB.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const jt=["Demo","ElitePortalDemo","AMPALSPortalVariant"];export{r as AMPALSPortalVariant,t as Demo,o as ElitePortalDemo,jt as __namedExportsOrder,$t as default};
