import{U as L}from"./UpsetPlot-tfyowbPA.js";import{f as u}from"./index-BW7dyojU.js";import"./jsx-runtime-Dsxiie4O.js";import"./index-ozCXQmXK.js";import"./iframe-DBa0zw63.js";import"./LargeButton-BIhGG473.js";import"./DefaultPropsProvider-C6msV3y5.js";import"./createTheme-UtkSgkJ5.js";import"./Button-DVSuhCm2.js";import"./createSimplePaletteValueFilter-oVw5J_Tg.js";import"./useTimeout-CSLyroTm.js";import"./ButtonBase-Bi7HMFSp.js";import"./useForkRef-CM_8X8JG.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DtpXaq6s.js";import"./useFiles-oSmayrgb.js";import"./VerificationSubmission-DKyendrM.js";import"./SynapseConstants-CmDV7LJl.js";import"./OrientationBanner-CWhi3zg5.js";import"./index-BpXNIs1b.js";import"./spreadSx-CwcO6WA9.js";import"./react-PYrrZijh.js";import"./FullWidthAlert-Btm-U5IG.js";import"./Alert-DP1_O_Op.js";import"./useSlot-DyxcO-8h.js";import"./createSvgIcon-iHhGnJmX.js";import"./Close-BgcWAJXU.js";import"./IconButton-CoOLAPia.js";import"./Paper-l-MCLhHw.js";import"./useTheme-DDadPh-C.js";import"./useTheme-D-q36Oyl.js";import"./Stack-676sv6cj.js";import"./extendSxProp-DGJ7aC89.js";import"./getThemeProps-C3MpcSFV.js";import"./Box-Bd1fGSNz.js";import"./AlertTitle-D1nRI2mq.js";import"./Typography-DSBe8cx6.js";import"./index-CxoHuccO.js";import"./ClickAwayListener-B_vokaBZ.js";import"./getReactElementRef-OnZXrax0.js";import"./index-B_ofmTQg.js";import"./index-395S_cOO.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BdozJXIw.js";import"./Tooltip-C4-mgBsw.js";import"./index-Xy4tmEMf.js";import"./useControlled-C_aa8L--.js";import"./Popper-CbLcG8Xr.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BcSmk1fX.js";import"./useQuery-BS7IYLBJ.js";import"./utils-CV6o2mhJ.js";import"./Link-Dx31m3OI.js";import"./Collapse-B1doriDK.js";import"./isNil-B5lyzHs4.js";import"./_Uint8Array-UOAAI0_f.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CoyN0E90.js";import"./isArray-Dxzbedgu.js";import"./isEqual-Bgi5hVtE.js";import"./_getTag-CqA7yl5M.js";import"./tinycolor-Begke6kS.js";import"./Fade-CtrqRvNM.js";import"./inputBaseClasses-ChXFSYt8.js";import"./calculateFriendlyFileSize-ue3PtNra.js";import"./CheckCircleTwoTone-Ch9oq8xX.js";import"./InfoTwoTone-BkALBS8a.js";import"./useMutation-yogh6qC8.js";import"./dayjs.min-DsaPcPSf.js";import"./chunk-AYJ5UCUI-GviuCA7M.js";import"./cloneDeep-C71O9hUJ.js";import"./_initCloneObject-CHLE_018.js";import"./Skeleton-BGL6qrPJ.js";import"./merge-BN2Rtmpw.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-D5GxPzI3.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DYBXM9lc.js";import"./Backdrop-DtHwqZxV.js";import"./LinearProgress-dd5Evyz5.js";import"./index-KQPwCOQ4.js";import"./index-BjpKcgrQ.js";import"./index-5V1q9Cwu.js";import"./const-Doag8klc.js";import"./index-CTlIGZD9.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
