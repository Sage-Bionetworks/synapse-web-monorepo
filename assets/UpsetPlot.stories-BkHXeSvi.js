import{U as L}from"./UpsetPlot-DzwsIGAv.js";import{f as u}from"./index-CxAKiHta.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-BXzyqJy3.js";import"./DefaultPropsProvider-KvTTViBi.js";import"./createTheme-OgACEKFy.js";import"./index-BQRoB34Y.js";import"./iframe-wFz6NR2i.js";import"./Button-BOPJE-r2.js";import"./createSimplePaletteValueFilter-BLrDGAYr.js";import"./useTimeout-CRdyE016.js";import"./ButtonBase-C-cW54jM.js";import"./useForkRef-DZ26eI5p.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-D_Dt9D69.js";import"./useFiles-CxOJMHxy.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-6hqCI_bn.js";import"./OrientationBanner-CDmer2ln.js";import"./index-BPv32WV_.js";import"./spreadSx-CwcO6WA9.js";import"./react-BAoaUXp-.js";import"./FullWidthAlert-CueNuCtS.js";import"./Alert-6OLHU9q0.js";import"./useSlot-XNf6rMRg.js";import"./createSvgIcon-C4Jsw3SJ.js";import"./Close-DmsMf-HS.js";import"./IconButton-CrpuUTMi.js";import"./Paper-BIhpz0WW.js";import"./useTheme-Cpo7V1wB.js";import"./useTheme-D9np60aF.js";import"./Stack-DiArWIsZ.js";import"./extendSxProp-DCzPJLnO.js";import"./getThemeProps-CzWi-LI4.js";import"./Box-B51gNXNQ.js";import"./AlertTitle-BNI9ezyf.js";import"./Typography-CbD70NAW.js";import"./index-D_YDMtQp.js";import"./ClickAwayListener-DEiiydM4.js";import"./getReactElementRef-iWBRBLQn.js";import"./index-Q5lQ2Atr.js";import"./index-BZ9OT8gV.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CxvW4zE-.js";import"./Tooltip-IUvgeh03.js";import"./index-CrZSqurj.js";import"./useControlled-CRAjcali.js";import"./Popper-B5_jAiJQ.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-0UQQQAas.js";import"./QueryClientProvider-C1xpUglu.js";import"./Link-Dap56USK.js";import"./Collapse-CcVUukcz.js";import"./_baseUniq-Db67Ge-V.js";import"./_Uint8Array-CGzJzsDJ.js";import"./isArray-ucl6ZwDA.js";import"./_getTag-DhtB1oE9.js";import"./isEqual-Hq3MHdB0.js";import"./merge-D2JEfvCI.js";import"./_initCloneObject-BuaC84gC.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CfFEceuu.js";import"./inputBaseClasses-BbOv1ZUQ.js";import"./calculateFriendlyFileSize-Bi3iKiOQ.js";import"./CheckCircleTwoTone-aocLlp2y.js";import"./InfoTwoTone-DzU0Aqgl.js";import"./useMutation-Br0kviKt.js";import"./dayjs.min-DxfBWlmU.js";import"./chunk-AYJ5UCUI-CBByD3Sp.js";import"./cloneDeep-neqlse2g.js";import"./Skeleton-DyhXsoKf.js";import"./SqlFunctions-C8HqQ3uk.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BBFkF_7e.js";import"./Backdrop-Bh80y5bO.js";import"./LinearProgress-CWNeZ1-M.js";import"./index-BW5ki-8M.js";import"./index-WCTNVLg9.js";import"./index-BJZh81Vp.js";import"./const-BP60AzNb.js";import"./index-PcXz9UJI.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
