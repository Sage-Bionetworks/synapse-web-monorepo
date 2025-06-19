import{U as L}from"./UpsetPlot-cfYFhQM_.js";import{f as u}from"./index-DjHUH2v1.js";import"./jsx-runtime-CxQJGWmB.js";import"./index-bYuXtfvu.js";import"./iframe-BorzRatB.js";import"./LargeButton-D3X05kDs.js";import"./DefaultPropsProvider-CR6JJVGo.js";import"./createTheme-BhfFif7c.js";import"./Button-VWYMgatt.js";import"./createSimplePaletteValueFilter-DvhmL7gt.js";import"./useTimeout-CKXPEWw5.js";import"./ButtonBase-DncC0xkq.js";import"./useForkRef-Dz67y12k.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BE3JMWLs.js";import"./useFiles-BWzpbira.js";import"./VerificationSubmission-CMrrYimb.js";import"./SynapseConstants-D3gSaWkR.js";import"./OrientationBanner-B7lzUez5.js";import"./index-BEaZtgWO.js";import"./spreadSx-CwcO6WA9.js";import"./react-CeHOpBdi.js";import"./FullWidthAlert-DvY_ZKmv.js";import"./Alert-Bi1MPf5U.js";import"./useSlot-DmrfrwWw.js";import"./createSvgIcon-CGs2aUKk.js";import"./Close-DdKd6WtE.js";import"./IconButton-BO_Vyt7M.js";import"./Paper-vTxZNVZo.js";import"./useTheme-CAoH1kQC.js";import"./useTheme-eWijQT4_.js";import"./Stack-DbdBQoMT.js";import"./extendSxProp-BaSZxf1G.js";import"./getThemeProps-BKg1XlR8.js";import"./Box-BRuH1Ora.js";import"./AlertTitle-wIkcLOLb.js";import"./Typography-Ci2kAYGi.js";import"./index-pdYlt5rv.js";import"./ClickAwayListener-DXa8E7oh.js";import"./getReactElementRef-DLB-yWFi.js";import"./index-aySbfJ0W.js";import"./index-CLzFrY6n.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DXtNWBBe.js";import"./Tooltip-CIvfN4g7.js";import"./index-dEv_nVrL.js";import"./useControlled-4-utESF-.js";import"./Popper-C-FGpZWn.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bdqa-HwM.js";import"./useQuery-oCM2ScmL.js";import"./utils-DZeFJEEI.js";import"./Link-DQQymv2C.js";import"./Collapse-CG5TH7JR.js";import"./_baseUniq-DWXvxkjA.js";import"./_Uint8Array-D3y4G5m1.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike--mXepCRA.js";import"./isArray-Dxzbedgu.js";import"./_getTag-BZVYVZDa.js";import"./isEqual-hVZZo_Zh.js";import"./merge-CvokAV8g.js";import"./_initCloneObject-DB4cLElU.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-I42jnFEQ.js";import"./inputBaseClasses-OOFSrIFW.js";import"./calculateFriendlyFileSize-DlyyWhYD.js";import"./CheckCircleTwoTone-Bi8LtDNf.js";import"./InfoTwoTone-CyiHi3rF.js";import"./useMutation-0ePs12yi.js";import"./dayjs.min-B3WKbRA4.js";import"./chunk-AYJ5UCUI-CANmZQ7w.js";import"./cloneDeep-_uTojtj1.js";import"./Skeleton-uiHptTpV.js";import"./SqlFunctions-DPgti-mT.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-mP5POTj9.js";import"./Backdrop-DCotU7B_.js";import"./LinearProgress-Dzmlk2S2.js";import"./index-DWGrjvHN.js";import"./index-CxgMT4oM.js";import"./index-U-nFcqv3.js";import"./const-Doag8klc.js";import"./index-DzMD7IC0.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
