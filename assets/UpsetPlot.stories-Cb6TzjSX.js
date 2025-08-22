import{U as L}from"./UpsetPlot-BAtlxzjn.js";import{f as u}from"./index-CFA0qAMJ.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-CHKGuJNe.js";import"./DefaultPropsProvider-BpRUECsb.js";import"./createTheme-BueTOkol.js";import"./index-Bc3skFOa.js";import"./iframe-BtSaXkuM.js";import"./Button-BkrQibwj.js";import"./createSimplePaletteValueFilter-C0etH01x.js";import"./useTimeout-CmS7swDh.js";import"./ButtonBase-Dth68TUA.js";import"./useForkRef-B-XQJunB.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-cVYl0jD1.js";import"./useFiles-C-nnLZH6.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-Bd4_h58t.js";import"./OrientationBanner-cbKX41Kv.js";import"./index-Ce-DoZYC.js";import"./spreadSx-CwcO6WA9.js";import"./react-7i1wTRCj.js";import"./FullWidthAlert-DDY--klD.js";import"./Alert-CawsPOmr.js";import"./useSlot-DzYM2NXh.js";import"./createSvgIcon-DuBP14r-.js";import"./Close-B4YztUj-.js";import"./IconButton-DhrIHtmc.js";import"./Paper-BMQ9bliB.js";import"./useTheme-BdsV2UtN.js";import"./useTheme-CESjAg12.js";import"./Stack-SJgolWM_.js";import"./extendSxProp-A8hSLdSh.js";import"./getThemeProps-tTcTqxCF.js";import"./Box-BM0uF6eN.js";import"./AlertTitle-B_ZKmDYB.js";import"./Typography-CCq_2k8T.js";import"./index-hdfdv7Z8.js";import"./ClickAwayListener-DkMj7hy7.js";import"./getReactElementRef-BshGVvhA.js";import"./index-B3GonlML.js";import"./index-B_yUMdDC.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-LPswSJij.js";import"./Tooltip-BJmPo455.js";import"./index-L24AK7Ts.js";import"./useControlled-D8fGF6t0.js";import"./Popper-DKZ5oZcV.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-DaTlqfog.js";import"./QueryClientProvider-i7CmffhL.js";import"./Link-BTa2TnZw.js";import"./Collapse-BE1J1oKa.js";import"./_baseUniq-DaVelePf.js";import"./_Uint8Array-Bjb-AI1p.js";import"./isArray-BomWlQac.js";import"./_getTag-C4wX9zYW.js";import"./isEqual-B4npu7s9.js";import"./merge-MLtxKLuV.js";import"./_initCloneObject-Br6pXeAy.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BFpHeoSz.js";import"./inputBaseClasses-Dec7bLBK.js";import"./calculateFriendlyFileSize-CMIQVYOK.js";import"./CheckCircleTwoTone-CeziCU9H.js";import"./InfoTwoTone-CkavrGoq.js";import"./useMutation-PlwPtoOX.js";import"./dayjs.min-C2l0GvUg.js";import"./chunk-AYJ5UCUI-DDM9bpV7.js";import"./cloneDeep-Dz7n1ow1.js";import"./Skeleton-Kr-2WdY2.js";import"./SqlFunctions-C8HqQ3uk.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-CB5ZETAi.js";import"./Backdrop-cN0R4EgD.js";import"./LinearProgress-CyMZbHrX.js";import"./index-C7eelp5D.js";import"./index-4oNcnQl9.js";import"./index-WsK4Gkse.js";import"./const-BP60AzNb.js";import"./index-CVo8SuUp.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
