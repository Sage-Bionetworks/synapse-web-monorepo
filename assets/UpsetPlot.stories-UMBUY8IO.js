import{U as L}from"./UpsetPlot-DN9RlW64.js";import{f as u}from"./index-CvkZ6egX.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-BbZcWRw7.js";import"./DefaultPropsProvider-YWEOpPZN.js";import"./createTheme-BIa8Hjln.js";import"./index-Cs9CjK7r.js";import"./iframe-Cj4GSdI2.js";import"./Button-DHnYQq3H.js";import"./createSimplePaletteValueFilter-mKXxLgfc.js";import"./useTimeout-BjE_E-bf.js";import"./ButtonBase-B7Gz_ND3.js";import"./useForkRef-Bz0HDi5t.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Dx_YCkJD.js";import"./useFiles-CXiqlPSq.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-B7Cv2IkP.js";import"./OrientationBanner-lhHTwIdw.js";import"./index-BUI4FiBO.js";import"./spreadSx-CwcO6WA9.js";import"./react-CghgWeRs.js";import"./FullWidthAlert-CB74esH-.js";import"./Alert-CKXj_Bd4.js";import"./useSlot-DTYVzfTH.js";import"./createSvgIcon-BVBy7BJX.js";import"./Close-D6D1a_iR.js";import"./IconButton-DEDMP5i3.js";import"./Paper-BIhOUD_N.js";import"./useTheme-OT9aJ8bc.js";import"./useTheme-BEKscu5j.js";import"./Stack-CQAoz_Xa.js";import"./extendSxProp-yLgpd7yt.js";import"./getThemeProps-DcL6NaT1.js";import"./Box-ClzatLWK.js";import"./AlertTitle-BTfNBdTC.js";import"./Typography-DDUPIwVV.js";import"./index-CO9tqBcC.js";import"./ClickAwayListener-DVyb7oNF.js";import"./getReactElementRef-BqsyU8wJ.js";import"./index-64JtD6BB.js";import"./index-3BbafwZI.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BrpkQUR6.js";import"./Tooltip-4GK8-bfW.js";import"./index-DJJ3DC7I.js";import"./useControlled-BNY87BJG.js";import"./Popper-c9p6qZUp.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-CsEV-wFY.js";import"./QueryClientProvider-B_2a5it8.js";import"./Link-Bnw3Ve0w.js";import"./Collapse-BA7qxafq.js";import"./_baseUniq-BKxNTwTH.js";import"./_Uint8Array-zOOrGSrF.js";import"./isArray-CfhIzhxX.js";import"./_getTag-CiaowtC2.js";import"./isEqual-Cu3LJ_QS.js";import"./merge-DNO3CHl0.js";import"./_initCloneObject-C1DTlXoU.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BvSGSUrh.js";import"./inputBaseClasses-BpYAyMdk.js";import"./calculateFriendlyFileSize-Cj49OqTd.js";import"./CheckCircleTwoTone-B0HwW7tj.js";import"./InfoTwoTone-BqgX5jT0.js";import"./useMutation-B5PcCJqF.js";import"./dayjs.min-Cp0TP9Uz.js";import"./chunk-AYJ5UCUI-C7mkkE5K.js";import"./cloneDeep-D3TsZAuj.js";import"./Skeleton-B6zAAzvS.js";import"./SqlFunctions-C8HqQ3uk.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-y9KEKGmx.js";import"./Backdrop-wLnOUE-D.js";import"./LinearProgress-B7Df6iqa.js";import"./index-Dg20zvAN.js";import"./index-BB13P5HH.js";import"./index-BkQlmiqH.js";import"./const-BP60AzNb.js";import"./index-BMjT3OnD.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
