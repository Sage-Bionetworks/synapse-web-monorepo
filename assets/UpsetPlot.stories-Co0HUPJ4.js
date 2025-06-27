import{U as L}from"./UpsetPlot-bP1pL1yO.js";import{f as u}from"./index-_6cikOr0.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-CQns8wWo.js";import"./DefaultPropsProvider-rjE15iKg.js";import"./createTheme-uO4hqOl0.js";import"./index-CiTIL43e.js";import"./iframe-Cayhvn5K.js";import"./Button-g1eq2ahp.js";import"./createSimplePaletteValueFilter-Df6fBoTZ.js";import"./useTimeout-BRmr54LZ.js";import"./ButtonBase-CQXp2J7x.js";import"./useForkRef-Co5CBSn4.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DtjzCl_v.js";import"./useFiles-DfvW_iKe.js";import"./VerificationSubmission-CMrrYimb.js";import"./SynapseConstants-Cbeu2Oyn.js";import"./OrientationBanner-ByRlhM_a.js";import"./index-_NIx4lXM.js";import"./spreadSx-CwcO6WA9.js";import"./react-BVEP5XKz.js";import"./FullWidthAlert-Ccn_EvPT.js";import"./Alert-DrI66yvk.js";import"./useSlot-DNUzsPmH.js";import"./createSvgIcon-ClNB3HD5.js";import"./Close-DwhyisnY.js";import"./IconButton-r0IwIs_z.js";import"./Paper-DpIYilS4.js";import"./useTheme-BgmYpj4o.js";import"./useTheme-BJ-zay94.js";import"./Stack-BhvVP5f4.js";import"./extendSxProp-BAvHuC_Y.js";import"./getThemeProps-lIkUo-RK.js";import"./Box-Dna7VRUa.js";import"./AlertTitle-msVq37IX.js";import"./Typography-Dzd7C-5o.js";import"./index-CIsQZRtc.js";import"./ClickAwayListener-joZsflyy.js";import"./getReactElementRef-DohlxJTS.js";import"./index-j18IfTeB.js";import"./index-DGlI5JgX.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-C3XaHn-2.js";import"./Tooltip-jMq5XwCC.js";import"./index-CSyBK4mn.js";import"./useControlled-h_Ywxv7k.js";import"./Popper-BsSzgmVt.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ZWLpjIdm.js";import"./useQuery-BonNJG6c.js";import"./QueryClientProvider-BWWE1lZe.js";import"./Link-C-Vr5p9O.js";import"./Collapse-CqTJrAqY.js";import"./_baseUniq-Tcha3pqa.js";import"./_Uint8Array-DQQX6ZQZ.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-U5Ai_0xq.js";import"./isArray-Dxzbedgu.js";import"./_getTag-CW1nhIBx.js";import"./isEqual-G6XQBDSF.js";import"./merge-BdvLa6pX.js";import"./_initCloneObject-BTvG49r5.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-B-pTEA8F.js";import"./inputBaseClasses-DKNjI2JS.js";import"./calculateFriendlyFileSize-4eCHEye3.js";import"./CheckCircleTwoTone-BV6qRXGy.js";import"./InfoTwoTone-G8qb8_WT.js";import"./useMutation-lTzopEF7.js";import"./dayjs.min-CV_XXVMs.js";import"./chunk-AYJ5UCUI-BelqaLd_.js";import"./cloneDeep-CF0C-DTO.js";import"./Skeleton-CAD_J8Lh.js";import"./SqlFunctions-c3WXx9n7.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-C0SJu4Gm.js";import"./Backdrop-CLk4Aph1.js";import"./LinearProgress-CBUK86_Q.js";import"./index-tHaq0-Xi.js";import"./index-NMKeYtWt.js";import"./index-D8sbxtLf.js";import"./const-BP60AzNb.js";import"./index-DdDHWfC7.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
