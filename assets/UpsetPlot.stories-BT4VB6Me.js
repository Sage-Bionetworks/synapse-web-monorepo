import{U as L}from"./UpsetPlot-DMp8mM5K.js";import{f as u}from"./index-BfJJ9iSw.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-549z3cAs.js";import"./DefaultPropsProvider-BoHZ1rqc.js";import"./createTheme-BiMww641.js";import"./index-KO5yBezO.js";import"./iframe-BWtzi3Fu.js";import"./Button-BDASUTyZ.js";import"./createSimplePaletteValueFilter-UnnRFOda.js";import"./useTimeout-D67sEVIl.js";import"./ButtonBase-CZrPHVPS.js";import"./useForkRef-CTzi7RL5.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CIeVfw1I.js";import"./useFiles-Ds_bREMK.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-D489MFxy.js";import"./OrientationBanner-DQLq-M9F.js";import"./index-CKFZHx8F.js";import"./spreadSx-CwcO6WA9.js";import"./react-D5Kw-Idf.js";import"./FullWidthAlert-COzh-JV3.js";import"./Alert-DxH2xLmB.js";import"./useSlot-HveTRmcP.js";import"./createSvgIcon-C9ylNz7Z.js";import"./Close-BjY3tzYx.js";import"./IconButton-D1QHohjU.js";import"./Paper-tceDeyQ-.js";import"./useTheme-BqZaM65K.js";import"./useTheme-CM4wnLKj.js";import"./Stack-CvutscYA.js";import"./useThemeProps-DfEwavVO.js";import"./getThemeProps-D-9myJJW.js";import"./extendSxProp-mBp2xHbV.js";import"./Box-BDifCyM8.js";import"./AlertTitle-BpztvcIe.js";import"./Typography-CxNE9IZM.js";import"./index-By9_PeXc.js";import"./ClickAwayListener-DVtkFkiL.js";import"./getReactElementRef-D7Qedxf3.js";import"./index-Dr_d-L0h.js";import"./index-Bh8b_a61.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Bai82ClR.js";import"./Tooltip-v-ea6aM6.js";import"./index-B3fWEhVy.js";import"./useControlled-B7xU-BaO.js";import"./Popper-BD0dU3Wk.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-C4kyH3KQ.js";import"./QueryClientProvider-CWGnu1_a.js";import"./Link-hRQmmRQx.js";import"./Collapse-vR8OSL7u.js";import"./_baseUniq-CLUAcwzD.js";import"./_Uint8Array-B97Nrg_E.js";import"./isArray-ZF-H6sf6.js";import"./_getTag-Dv5kflz0.js";import"./isEqual-hUxn6nkp.js";import"./noop-DX6rZLP_.js";import"./merge-B4VAHq3z.js";import"./_initCloneObject-DiMowaiZ.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-QhzadI6Z.js";import"./inputBaseClasses-DfpAAtBx.js";import"./calculateFriendlyFileSize-B_nf1MCd.js";import"./CheckCircleTwoTone-CERx72Pg.js";import"./InfoTwoTone-aw-Y5OVy.js";import"./useMutation-BYw0U5y_.js";import"./dayjs.min-CBt31E3Q.js";import"./chunk-AYJ5UCUI-DRnCpsds.js";import"./cloneDeep-BLJ74t8I.js";import"./Skeleton-BPL1hR_k.js";import"./SqlFunctions-B8wRZva4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DLIsGiUw.js";import"./Backdrop-DOjMQrTV.js";import"./LinearProgress-DfMVAvD7.js";import"./index-BZmSvbQq.js";import"./index-DMpmR0Se.js";import"./index-DFyAg_u6.js";import"./const-BP60AzNb.js";import"./index-DULIClRC.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
