import{U as L}from"./UpsetPlot-CyDQmDlW.js";import{f as u}from"./index-BGmudB0S.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-CH6OOwZZ.js";import"./DefaultPropsProvider-ZI2sxVbZ.js";import"./createTheme-DcluBHDz.js";import"./index-CQ6hJmgW.js";import"./iframe-DBLSlUlM.js";import"./Button-D65AIMBA.js";import"./createSimplePaletteValueFilter-oYjRqgE7.js";import"./useTimeout-_fh52LB_.js";import"./ButtonBase-Bov65eTU.js";import"./useForkRef-DooywLql.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-ASAwFG9e.js";import"./useFiles-Cl7iPkP2.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-k8J4G2g0.js";import"./OrientationBanner-Cay0I_Rt.js";import"./index-8ZlaN0KU.js";import"./spreadSx-CwcO6WA9.js";import"./react-CekjFg9U.js";import"./FullWidthAlert-CbdaCswA.js";import"./Alert-hAudTaki.js";import"./useSlot-66fkwDAg.js";import"./createSvgIcon-CJYbEqxG.js";import"./Close-CHeVeGkX.js";import"./IconButton-Bh69he5-.js";import"./Paper-D-DccQnO.js";import"./useTheme-BGuepDlr.js";import"./useTheme-27YPboVz.js";import"./Stack-BtIxaE9P.js";import"./extendSxProp-YRmzrdHl.js";import"./getThemeProps-DSATpSeZ.js";import"./Box-Cntk2MIO.js";import"./AlertTitle-D24R2e_4.js";import"./Typography-Dm61OQER.js";import"./index-Ci7ktC4R.js";import"./ClickAwayListener-VYYUrldH.js";import"./getReactElementRef-BoHY-GqX.js";import"./index-DGNyRJeG.js";import"./index-CIWwvEWD.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DpHErTTs.js";import"./Tooltip-kPWKAtR8.js";import"./index-DLIdZaB1.js";import"./useControlled-CYPIr_yw.js";import"./Popper-Cpq6kGnG.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-BLF80Y5p.js";import"./QueryClientProvider-LHOBn88c.js";import"./Link-DPVf6eQF.js";import"./Collapse-B5PXfbL3.js";import"./_baseUniq-C1GjGhSb.js";import"./_Uint8Array-VToj_l7w.js";import"./isArray-CCh7EMNH.js";import"./_getTag-DadTTLKK.js";import"./isEqual-DDdqe_xI.js";import"./merge-BIg5srE9.js";import"./_initCloneObject-DleR7C7U.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BJT3-mqI.js";import"./inputBaseClasses-DXATOCIJ.js";import"./calculateFriendlyFileSize-BM-0xruH.js";import"./CheckCircleTwoTone-CKcbuZl5.js";import"./InfoTwoTone-yPYIEBIY.js";import"./useMutation-EAVGskWB.js";import"./dayjs.min-SyJWqs4d.js";import"./chunk-AYJ5UCUI-zqOAelV1.js";import"./cloneDeep-BdpZvwEq.js";import"./Skeleton-jZRJXesW.js";import"./SqlFunctions-C8HqQ3uk.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BVccTMsN.js";import"./Backdrop-BSvTrvyy.js";import"./LinearProgress-Zb5wBOqW.js";import"./index-CU7vlstd.js";import"./index-DQ8Cc3ao.js";import"./index-GSSIlSQQ.js";import"./const-BP60AzNb.js";import"./index-BaBf5lof.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
