import{U as L}from"./UpsetPlot-m0NdLf7b.js";import{f as u}from"./index-CSCJrcfS.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-BaK-5FED.js";import"./DefaultPropsProvider-sdt8O3fx.js";import"./createTheme-BwKauHHe.js";import"./index-BuaY3YW0.js";import"./iframe-CB9RLm2k.js";import"./Button-C84MYn5A.js";import"./createSimplePaletteValueFilter-C2q_FQJj.js";import"./useTimeout-BXDWjVyi.js";import"./ButtonBase-DkxGY9m0.js";import"./useForkRef-_jAcTXIz.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-D8RR-Hwe.js";import"./useFiles-D8rghsAH.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-BCna4l2c.js";import"./OrientationBanner-C9MUfTx5.js";import"./index-CVoQLnv9.js";import"./spreadSx-CwcO6WA9.js";import"./react-0syDy3V6.js";import"./FullWidthAlert-BZxmMm3l.js";import"./Alert-BuIno2nG.js";import"./useSlot-2Lcx0oJc.js";import"./createSvgIcon-3wDtnJX3.js";import"./Close-P5_Ux7pg.js";import"./IconButton-D6lW0S_w.js";import"./Paper-CY5FVEAG.js";import"./useTheme-C2n0rsfr.js";import"./useTheme-DPiytpU9.js";import"./Stack-D679agRe.js";import"./extendSxProp-CurqUalJ.js";import"./getThemeProps-DTYZfuZ8.js";import"./Box-B2-eTlSN.js";import"./AlertTitle-Dc-QdeUX.js";import"./Typography-CuSWghUP.js";import"./index-DASj5E_q.js";import"./ClickAwayListener-DXs6rXAY.js";import"./getReactElementRef-Dk7gEWKT.js";import"./index-D0Ht5zCB.js";import"./index-DcmrF_XG.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-C7nlyfN6.js";import"./Tooltip-Co-YvhFo.js";import"./index-VT5DBhWW.js";import"./useControlled-C93SLyQj.js";import"./Popper-CPhprIAB.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-B_0w80Fl.js";import"./QueryClientProvider-DbVmeRWK.js";import"./Link-CvYSWFWB.js";import"./Collapse-BjWhwNwG.js";import"./_baseUniq-D9jAkyOV.js";import"./_Uint8Array-CmXresUg.js";import"./isArray-C5D-ZESG.js";import"./_getTag-8Ax-wOhp.js";import"./isEqual-PLFD9L4o.js";import"./merge-B2EPh-KY.js";import"./_initCloneObject-Bq8KZ5MO.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-T6p8CTbb.js";import"./inputBaseClasses-x_KSJMkP.js";import"./calculateFriendlyFileSize-B8XXE6y4.js";import"./CheckCircleTwoTone-uAYBjvIl.js";import"./InfoTwoTone-C3VRMjQy.js";import"./useMutation-CK4U1fL0.js";import"./dayjs.min-CesC2iFM.js";import"./chunk-AYJ5UCUI-BKDt8PqE.js";import"./cloneDeep-DFPYlp5j.js";import"./Skeleton-gDxVQ58P.js";import"./SqlFunctions-C8HqQ3uk.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DxKKscFN.js";import"./Backdrop-ClV2QlSQ.js";import"./LinearProgress-CXDCFir4.js";import"./index-DBmKlaKB.js";import"./index-C6B5FwO5.js";import"./index-DPovzT-a.js";import"./const-BP60AzNb.js";import"./index-BAiaXPqM.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
