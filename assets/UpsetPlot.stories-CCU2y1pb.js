import{U as L}from"./UpsetPlot-CnSQUMOa.js";import{f as u}from"./index-C0IvUVte.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-Cr_hMB46.js";import"./DefaultPropsProvider-DJHi1R08.js";import"./createTheme-DnXMRcPS.js";import"./index-C5ISxCze.js";import"./iframe-CJXX_HEp.js";import"./Button-DoHmcmtx.js";import"./createSimplePaletteValueFilter-Cq1nldBu.js";import"./useTimeout-BGwHbdIe.js";import"./ButtonBase-Bzdpe_ef.js";import"./useForkRef-D85PsNQK.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-sTdI8cEw.js";import"./useFiles-C1SZYsHJ.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-DOcxbSXv.js";import"./OrientationBanner-0l92o_hq.js";import"./index-8eP7pCJv.js";import"./spreadSx-CwcO6WA9.js";import"./react-n319Pynr.js";import"./FullWidthAlert-BXosfpkO.js";import"./Alert-y_xDb_9T.js";import"./useSlot-CBkWMAH8.js";import"./createSvgIcon-J6P9XFai.js";import"./Close-CNO_2RgE.js";import"./IconButton-kB0cRMKx.js";import"./Paper-DmK_ReCG.js";import"./useTheme-BFSnT1oV.js";import"./useTheme-CyqjyiOc.js";import"./Stack-BYEEnAvb.js";import"./extendSxProp-D949apCT.js";import"./getThemeProps-Dc2St_bQ.js";import"./Box-8PZ_haH7.js";import"./AlertTitle-uWLQX9Lu.js";import"./Typography-CFGar2kE.js";import"./index-5S5GhFFj.js";import"./ClickAwayListener-BCNxBpX7.js";import"./getReactElementRef-DJWfZNic.js";import"./index-C6vkH45X.js";import"./index-1VbLkhR3.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BLYI2CiH.js";import"./Tooltip-bMDGEQYu.js";import"./index-D_dMnI5A.js";import"./useControlled-D1RUa1Rp.js";import"./Popper-781Z81b1.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-DlZe90UE.js";import"./QueryClientProvider-CjOas7HF.js";import"./Link-Dr6FC8Lc.js";import"./Collapse-Duiz4XTK.js";import"./_baseUniq-Ctwgay9y.js";import"./_Uint8Array-CdQldqai.js";import"./isArray-BXJYUcpZ.js";import"./_getTag-CK2vplJH.js";import"./isEqual-6ETdbas7.js";import"./merge-Dyqx4TiO.js";import"./_initCloneObject-BO7pqg35.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BgHOn6RZ.js";import"./inputBaseClasses-DvXW_vKY.js";import"./calculateFriendlyFileSize-CspbCWFd.js";import"./CheckCircleTwoTone-Dp6-ZoT0.js";import"./InfoTwoTone-C6cakw3O.js";import"./useMutation-CCxl44YJ.js";import"./dayjs.min-BoYnap0S.js";import"./chunk-AYJ5UCUI-Ds2vnOw0.js";import"./cloneDeep-DP6v8uS5.js";import"./Skeleton-eWeIv0U1.js";import"./SqlFunctions-B6aZ8mL4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BgFawXsT.js";import"./Backdrop-Dczx_oIL.js";import"./LinearProgress-UgZ9VJzN.js";import"./index-C2xdGSX-.js";import"./index-CqXdGR8d.js";import"./index-CyuQvm6H.js";import"./const-BP60AzNb.js";import"./index-CTI2TsxQ.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
