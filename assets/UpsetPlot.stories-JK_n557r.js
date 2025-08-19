import{U as L}from"./UpsetPlot-WD9iOL8W.js";import{f as u}from"./index-ClkAGppM.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-CD-BSNn5.js";import"./DefaultPropsProvider-MsJBWg3I.js";import"./createTheme-BBcmnOvd.js";import"./index-CzvTTXra.js";import"./iframe-BnhebwFh.js";import"./Button-DHUU4YS0.js";import"./createSimplePaletteValueFilter-f4T_jVmW.js";import"./useTimeout-D5G-CtgI.js";import"./ButtonBase-C7l6OA8V.js";import"./useForkRef-BfkTblL9.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DvGoH6e5.js";import"./useFiles-CQdMNpwn.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-BKOIVSJ4.js";import"./OrientationBanner-VS5H_DpA.js";import"./index-KnRDUL2Q.js";import"./spreadSx-CwcO6WA9.js";import"./react-CwiTBx-n.js";import"./FullWidthAlert-Cm6t_VNT.js";import"./Alert-C_RtWjz7.js";import"./useSlot-BCyVFvGq.js";import"./createSvgIcon-9MzpKAHB.js";import"./Close-DC7k06u9.js";import"./IconButton-BO4ctIYi.js";import"./Paper-BMidXjbc.js";import"./useTheme-CS-MMbqX.js";import"./useTheme-C3jckGwZ.js";import"./Stack-cWDEnh-V.js";import"./extendSxProp-DpqtawsB.js";import"./getThemeProps-DmSfrJqa.js";import"./Box-ti_b82sh.js";import"./AlertTitle-DvPEm5Gy.js";import"./Typography-OgSpv5jV.js";import"./index-D_WOl2uf.js";import"./ClickAwayListener-XtBEsLYa.js";import"./getReactElementRef-DdyaVXMl.js";import"./index-C--iv-i_.js";import"./index-Bx9u3dOQ.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BD3gZhMj.js";import"./Tooltip-C_HHz7XN.js";import"./index-PPFeiqod.js";import"./useControlled-W5KRR2ES.js";import"./Popper-BxPEE_mv.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-Zz63RtHv.js";import"./QueryClientProvider-CzdxtEsU.js";import"./Link-ClQQShoZ.js";import"./Collapse-DWeFT-od.js";import"./_baseUniq-BdWipXwy.js";import"./_Uint8Array-gbGN_m7B.js";import"./isArray-_QOVi47p.js";import"./_getTag-D0ycOmhH.js";import"./isEqual-Xeyt-HlP.js";import"./merge-rXRdWApR.js";import"./_initCloneObject-CksKMSIv.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade--cBwDFJB.js";import"./inputBaseClasses-BNkcRSXg.js";import"./calculateFriendlyFileSize-BNVEkr6h.js";import"./CheckCircleTwoTone-Ck5Qv6hm.js";import"./InfoTwoTone-DetrBiiu.js";import"./useMutation-DBPLKtEQ.js";import"./dayjs.min-Dy65Hx2l.js";import"./chunk-AYJ5UCUI-DqG-g6K6.js";import"./cloneDeep-BkBBgP7B.js";import"./Skeleton-B1HZakfV.js";import"./SqlFunctions-C8HqQ3uk.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-CgrkkMeV.js";import"./Backdrop-DBzrxpr9.js";import"./LinearProgress-C41qSAPc.js";import"./index-0GuiYslC.js";import"./index-ClZa609s.js";import"./index-CmqdiAcX.js";import"./const-BP60AzNb.js";import"./index-B1BkXydm.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
