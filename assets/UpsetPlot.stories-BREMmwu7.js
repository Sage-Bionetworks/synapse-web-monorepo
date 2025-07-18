import{U as L}from"./UpsetPlot-DZNDMgUG.js";import{f as u}from"./index-mr1ah6ks.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-BDhvHCaS.js";import"./DefaultPropsProvider-BIK3-Fp6.js";import"./createTheme-D6cSveZq.js";import"./index-BSauoGfH.js";import"./iframe-DWGvaAod.js";import"./Button-CGZDb9Y1.js";import"./createSimplePaletteValueFilter-BWAPHtgQ.js";import"./useTimeout-Ck3AelOe.js";import"./ButtonBase-ChuwbCIj.js";import"./useForkRef-l9YKqcDP.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Cq-vDarp.js";import"./useFiles-5cvKAYad.js";import"./VerificationSubmission-NmfK1W18.js";import"./SynapseConstants-C0Oof1mV.js";import"./OrientationBanner-ChfhgKIK.js";import"./index-DT0pxb4l.js";import"./spreadSx-CwcO6WA9.js";import"./react-DvWYcNrf.js";import"./FullWidthAlert-BjFxaKcs.js";import"./Alert-BSp4rsLj.js";import"./useSlot-CKwwXJIc.js";import"./createSvgIcon-BaHS3xPA.js";import"./Close-BsTP-0ob.js";import"./IconButton-CYK1p1UC.js";import"./Paper-xyOjuvD3.js";import"./useTheme-BcEdJmmM.js";import"./useTheme-BD4_qs7q.js";import"./Stack-kDTTSjyS.js";import"./extendSxProp-D4_LNznW.js";import"./getThemeProps-pNkz1--F.js";import"./Box-Gm5XzVTK.js";import"./AlertTitle-CYlWv99z.js";import"./Typography-DHm0M_nf.js";import"./index-CVqqfbay.js";import"./ClickAwayListener-B2wPvcHr.js";import"./getReactElementRef-BQ2E9ykM.js";import"./index-CvIyfMno.js";import"./index-DzXs5bUm.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-SOx8WHBZ.js";import"./Tooltip-Din95ZoG.js";import"./index-DjvCuIBi.js";import"./useControlled-CIuSvVaG.js";import"./Popper-BXl7GrUw.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-yaxXeeQ-.js";import"./QueryClientProvider-BnNBfSVg.js";import"./Link-BNKsM4Ur.js";import"./Collapse-d18fKv2o.js";import"./_baseUniq-tvr54zCu.js";import"./_Uint8Array-Bu2OVTOS.js";import"./isArray-C0X-wnSg.js";import"./_getTag-g2DuEzz2.js";import"./isEqual-BhH8zZbz.js";import"./merge-ClevoGJL.js";import"./_initCloneObject-BQ0OliXN.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CA9d53gI.js";import"./inputBaseClasses-Cu4m9kbn.js";import"./calculateFriendlyFileSize-dXB7O8uO.js";import"./CheckCircleTwoTone-DxF39P8s.js";import"./InfoTwoTone-DybDK18U.js";import"./useMutation-BtGW8mOs.js";import"./dayjs.min-B2aQJTC-.js";import"./chunk-AYJ5UCUI-DB_-8FL4.js";import"./cloneDeep-NwMlNjcb.js";import"./Skeleton-CH21gXoa.js";import"./SqlFunctions-B-lgMRiM.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-B14H2-L8.js";import"./Backdrop-B-ZbxNnA.js";import"./LinearProgress-C--kewEt.js";import"./index-CQG_JN74.js";import"./index-BxlXyggD.js";import"./index-x4Vr5JDs.js";import"./const-BP60AzNb.js";import"./index-CfvfwTlR.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
