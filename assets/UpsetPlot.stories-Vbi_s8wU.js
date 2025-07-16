import{U as L}from"./UpsetPlot-46Pl3oxh.js";import{f as u}from"./index-DQ4jQeA4.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-Dd1uP67I.js";import"./DefaultPropsProvider-Cr3dPd9g.js";import"./createTheme-B3F90xOt.js";import"./index-C0JvWMff.js";import"./iframe-DNXoYa4O.js";import"./Button-DPEBK_F3.js";import"./createSimplePaletteValueFilter-C1IGZ-iD.js";import"./useTimeout-BTkZDFKk.js";import"./ButtonBase-BYY4hzrD.js";import"./useForkRef-DbtxdJG_.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress--neujvzt.js";import"./useFiles-C1ighHnt.js";import"./VerificationSubmission-NmfK1W18.js";import"./SynapseConstants-Csz7obg_.js";import"./OrientationBanner-Cq_tYaVj.js";import"./index-AELP8EyN.js";import"./spreadSx-CwcO6WA9.js";import"./react-DQONDSgG.js";import"./FullWidthAlert-C_x8NeKc.js";import"./Alert-BDgiv6yE.js";import"./useSlot-D3cOw50Q.js";import"./createSvgIcon-koTmqTDS.js";import"./Close-CWCFLhOT.js";import"./IconButton--vg-yfR-.js";import"./Paper-DNg490FH.js";import"./useTheme-CGyFDzld.js";import"./useTheme-oQB9tHIv.js";import"./Stack-ErGFFWoh.js";import"./extendSxProp-BVQBrtSx.js";import"./getThemeProps-Db77coRQ.js";import"./Box-Cf0Q_2JL.js";import"./AlertTitle-DuB1Vbeo.js";import"./Typography-CS8I5n2T.js";import"./index-DLsodws3.js";import"./ClickAwayListener-Co9NCCCU.js";import"./getReactElementRef-DYzm166M.js";import"./index-kJ3q-whD.js";import"./index-DwXwC2jP.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-ZuxCxpoj.js";import"./Tooltip-B8Tb7fkD.js";import"./index-DznA_vW2.js";import"./useControlled-JW-RUyV0.js";import"./Popper-BkTsEBSY.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-BzmGstcF.js";import"./QueryClientProvider-BwFe2xR9.js";import"./Link-3sQ-XwAe.js";import"./Collapse-BCnqgjTK.js";import"./_baseUniq-Cb2QqR7r.js";import"./_Uint8Array-KnS-zlSM.js";import"./isArray-B2GEIt4T.js";import"./_getTag-Bbp68GcC.js";import"./isEqual-DxfPqfeo.js";import"./merge-CPltTFYH.js";import"./_initCloneObject-KSbHlFJl.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-h24MK7uO.js";import"./inputBaseClasses-52cWq4Ml.js";import"./calculateFriendlyFileSize-Dx0ihCia.js";import"./CheckCircleTwoTone-DLZUc_ip.js";import"./InfoTwoTone-DIOaCUV3.js";import"./useMutation-z7mpAMu5.js";import"./dayjs.min-BEb6uDil.js";import"./chunk-AYJ5UCUI-DJWi0FRW.js";import"./cloneDeep-Cx4KKtL5.js";import"./Skeleton-Bhvm0MZh.js";import"./SqlFunctions-CqOxgBqv.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BZLzGOdt.js";import"./Backdrop-C8zatTAs.js";import"./LinearProgress-CPBISMmD.js";import"./index-VeZdJB19.js";import"./index-ChQ0G2rm.js";import"./index-DsUJUlQc.js";import"./const-BP60AzNb.js";import"./index-CFlob_7E.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
