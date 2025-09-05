import{U as L}from"./UpsetPlot-C1vM73iJ.js";import{f as u}from"./index-Dqs2bOip.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-BSM-GCn_.js";import"./DefaultPropsProvider-D5YzZChL.js";import"./createTheme-CKqkwa7d.js";import"./index-BHJCzbh3.js";import"./iframe-dITNj0Hx.js";import"./Button-A4JrCwSW.js";import"./createSimplePaletteValueFilter-D8THahFF.js";import"./useTimeout-D8YjTpcK.js";import"./ButtonBase-B4TRRvGR.js";import"./useForkRef-Cl9Rp-dg.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-2gMhwz2x.js";import"./useFiles-CNFcQdml.js";import"./VerificationSubmission-D0sL2gwz.js";import"./SynapseConstants-DBNLKtRP.js";import"./OrientationBanner-B8aBrx6p.js";import"./index-C9togNJv.js";import"./spreadSx-CwcO6WA9.js";import"./react-DEWDKV7G.js";import"./FullWidthAlert-BeHQTUMX.js";import"./Alert-CgIRN3k3.js";import"./useSlot-BGMO4Ps_.js";import"./createSvgIcon-hw5sef7_.js";import"./Close-Ca1w9KAM.js";import"./IconButton-D6fg4-JH.js";import"./Paper-DEWk3Iwm.js";import"./useTheme-DOVonx1n.js";import"./useTheme-C7jBfA_o.js";import"./Stack-BrOi9MTv.js";import"./extendSxProp-DJfIiLD8.js";import"./getThemeProps-Ca39sDWE.js";import"./Box-CoN9Xcom.js";import"./AlertTitle-IM4UpBhk.js";import"./Typography-CWkdFRvd.js";import"./index-DN5FxpE6.js";import"./ClickAwayListener-CHohliHo.js";import"./getReactElementRef-VVl8u3pk.js";import"./index-Ctb1fTIi.js";import"./index-C4JV96Bq.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-B7LlwP-G.js";import"./Tooltip-EB8Acvns.js";import"./index-DoXq1h2I.js";import"./useControlled-D1PVFx-p.js";import"./Popper-CU6WRkQu.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bt2r5KGg.js";import"./useQuery-DlKbqV7m.js";import"./QueryClientProvider-BL9YT6Vs.js";import"./Link-Cao8rbg2.js";import"./Collapse-CsAoI-BE.js";import"./_baseUniq-C5SXyLOe.js";import"./_Uint8Array-C5QuASXD.js";import"./isArray-Dhffyn_X.js";import"./_getTag-a5To3XUS.js";import"./isEqual-G3jbN0hm.js";import"./merge-C9xt5aZs.js";import"./_initCloneObject-Cz0cTzpK.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-crWMwZ_Y.js";import"./inputBaseClasses-CJ7Qu9r4.js";import"./calculateFriendlyFileSize-BzH9ntlH.js";import"./CheckCircleTwoTone-Brx8IfwO.js";import"./InfoTwoTone-CQSVX7va.js";import"./useMutation-CaTGYQiO.js";import"./dayjs.min-Bjd3NTcv.js";import"./chunk-AYJ5UCUI-DoqxXuGW.js";import"./cloneDeep-CoKPu_b1.js";import"./Skeleton-DQoBJCRz.js";import"./SqlFunctions-D9jcfCB0.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-Csv9iF7h.js";import"./Backdrop-DhAb3P-D.js";import"./LinearProgress-Y04Jz6Gx.js";import"./index-DFeOJrzo.js";import"./index-C0NORSjM.js";import"./index-CCNlsifi.js";import"./const-BP60AzNb.js";import"./index-Beb_iK0l.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
