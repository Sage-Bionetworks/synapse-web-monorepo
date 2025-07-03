import{U as L}from"./UpsetPlot-v5CZKXfk.js";import{f as u}from"./index-iSI93gr5.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-CPDUQAfL.js";import"./DefaultPropsProvider-ZknljbvO.js";import"./createTheme-C6xqN3pM.js";import"./index-DlUhpUTc.js";import"./iframe-kwdT_gk1.js";import"./Button-yc9m_HDy.js";import"./createSimplePaletteValueFilter-Z6XeO5iR.js";import"./useTimeout-Dg3x6uxz.js";import"./ButtonBase-UNpQfVY-.js";import"./useForkRef-C5oUk0jn.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-z5siZ5lQ.js";import"./useFiles-BTMbMKS0.js";import"./VerificationSubmission-CMrrYimb.js";import"./SynapseConstants-BtmifUv6.js";import"./OrientationBanner-DoaIYAf3.js";import"./index-Bvnb8w-0.js";import"./spreadSx-CwcO6WA9.js";import"./react-C2x4yFKt.js";import"./FullWidthAlert-CpdlDHC-.js";import"./Alert-CxNXThTe.js";import"./useSlot-h2t-XlqD.js";import"./createSvgIcon-DrDQmURV.js";import"./Close-CPzFq2Bo.js";import"./IconButton-GyuCtgJk.js";import"./Paper-BWKjBoPp.js";import"./useTheme-DAI1kBpo.js";import"./useTheme-Bco7y1aE.js";import"./Stack-Bgrkfz1N.js";import"./extendSxProp-C3CPfF_b.js";import"./getThemeProps-B1Qtp15k.js";import"./Box-CySOkTPc.js";import"./AlertTitle-B2CehKyI.js";import"./Typography-BQKAxsEC.js";import"./index-BzF0Zbb_.js";import"./ClickAwayListener-BZNVuDg3.js";import"./getReactElementRef-CMkytmwe.js";import"./index-Baaqchp8.js";import"./index-BRb218D6.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Bm1Z1TG3.js";import"./Tooltip-DwMFGR_2.js";import"./index-DAMS7aZF.js";import"./useControlled-CqqG4mPg.js";import"./Popper-Bx5KeZ6t.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ZWLpjIdm.js";import"./useQuery-CaoMl1o0.js";import"./QueryClientProvider-gubLharG.js";import"./Link-3iSm5h_e.js";import"./Collapse-CnEwKJat.js";import"./_baseUniq-DjUOXJdb.js";import"./_Uint8Array-C8844KTU.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-D7V8taiy.js";import"./isArray-Dxzbedgu.js";import"./_getTag-DOlIleu7.js";import"./isEqual-DrKWKnfH.js";import"./merge-gf1E7D98.js";import"./_initCloneObject-BhRobUCF.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BgVJQMF-.js";import"./inputBaseClasses-CSVFbwIh.js";import"./calculateFriendlyFileSize-Cd8tFgn2.js";import"./CheckCircleTwoTone-EV8cvC11.js";import"./InfoTwoTone-CnZg-1g-.js";import"./useMutation-LsEFkyHF.js";import"./dayjs.min-Dh2U0qhW.js";import"./chunk-AYJ5UCUI-CIM6gl4h.js";import"./cloneDeep-DlQ8SRns.js";import"./Skeleton-B7OWO1pN.js";import"./SqlFunctions-c3WXx9n7.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-C5I5IF6D.js";import"./Backdrop-BeR4_SWt.js";import"./LinearProgress-Cu2EVHxm.js";import"./index-Bf-Iu2Dn.js";import"./index-DyRIwMFz.js";import"./index-Q6UK1tSE.js";import"./const-BP60AzNb.js";import"./index-DVEL1ScI.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
