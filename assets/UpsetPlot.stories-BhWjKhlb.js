import{U as L}from"./UpsetPlot-Dag_g3uO.js";import{f as u}from"./index-BHg91lrW.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-BUBZSGFX.js";import"./DefaultPropsProvider-DsyVZICV.js";import"./createTheme-DY7tfLgK.js";import"./index-DJ7s27gv.js";import"./iframe-D0CinymP.js";import"./Button-Z7sw75bx.js";import"./createSimplePaletteValueFilter-CcGeRbxj.js";import"./useTimeout-BGSSVVff.js";import"./ButtonBase-DxqANTCq.js";import"./useForkRef-Okwk8pY8.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DuyFbQBS.js";import"./useFiles-Mm0wjKgi.js";import"./VerificationSubmission-CMrrYimb.js";import"./SynapseConstants-Bq_nwQvz.js";import"./OrientationBanner-Cr46aANW.js";import"./index-C2PgwLER.js";import"./spreadSx-CwcO6WA9.js";import"./react-BAZu9DMF.js";import"./FullWidthAlert-QgWdp2sQ.js";import"./Alert-VR-3EFtA.js";import"./useSlot-BHJawztZ.js";import"./createSvgIcon-B6jxSWW-.js";import"./Close-jJQJ0kak.js";import"./IconButton-_-2hYwOX.js";import"./Paper-BZmalIBk.js";import"./useTheme-BUf5_UJX.js";import"./useTheme-JQ5l8csr.js";import"./Stack-Dn2XtxPA.js";import"./extendSxProp-CR7IlrIo.js";import"./getThemeProps-2R3ivTTN.js";import"./Box-BHiMh-E4.js";import"./AlertTitle-WUIko3Bq.js";import"./Typography-D1TFYjH9.js";import"./index-B0gLw_60.js";import"./ClickAwayListener-C4cFrzuU.js";import"./getReactElementRef-Cn-IiLAf.js";import"./index-Buv9OFuL.js";import"./index-Dt-OJcf2.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DPqul1hx.js";import"./Tooltip-BCRDpw-n.js";import"./index-CJ9g_y5M.js";import"./useControlled-BHf7nHaI.js";import"./Popper-Dscz3i95.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ZWLpjIdm.js";import"./useQuery-YHVYyVh2.js";import"./QueryClientProvider-CpZbvOo0.js";import"./Link-Cld4LcBu.js";import"./Collapse-bRHPsk0u.js";import"./_baseUniq-a8BoBjy6.js";import"./_Uint8Array-qccxbrbR.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-BO4v01KV.js";import"./isArray-Dxzbedgu.js";import"./_getTag-D4qE1r4v.js";import"./isEqual-BflAykTt.js";import"./merge-BWaq0l3a.js";import"./_initCloneObject-DjlzTU2t.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-e7XcL0GH.js";import"./inputBaseClasses-fpPDlCvI.js";import"./calculateFriendlyFileSize-F-WATwL6.js";import"./CheckCircleTwoTone-85F1yn7H.js";import"./InfoTwoTone-B6Id3oDW.js";import"./useMutation-CnDGJ8yC.js";import"./dayjs.min-iu3rbzLN.js";import"./chunk-AYJ5UCUI-_sMuqP7Q.js";import"./cloneDeep-bJNslP0j.js";import"./Skeleton-E4JfS37G.js";import"./SqlFunctions-c3WXx9n7.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DV89hXe5.js";import"./Backdrop-CEDeP_bG.js";import"./LinearProgress-kf8iJ3xw.js";import"./index-DmDhdkK6.js";import"./index-BjPAmCLE.js";import"./index-C6vXR1_2.js";import"./const-BP60AzNb.js";import"./index-E0HTDV7N.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
