import{U as L}from"./UpsetPlot-B5uWREHG.js";import{f as u}from"./index-DlfiEqWY.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-BEChN-xX.js";import"./DefaultPropsProvider-B4LZRkCM.js";import"./createTheme-BQUJAjgK.js";import"./index-CBfPRsLX.js";import"./iframe-BW6JEyK_.js";import"./Button-M2vuYRBN.js";import"./createSimplePaletteValueFilter-5y3emdse.js";import"./useTimeout-BGZ3xCEB.js";import"./ButtonBase-8Z9A3MQE.js";import"./useForkRef-Tm9G3NYj.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Ce53bUKn.js";import"./useFiles-BaMpUgRF.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-BRUlnsmD.js";import"./OrientationBanner-HNbL1TGL.js";import"./index-1w2TTrBh.js";import"./spreadSx-CwcO6WA9.js";import"./react-XyY8nHR8.js";import"./FullWidthAlert-BAQZSi58.js";import"./Alert-vGMwbP_z.js";import"./useSlot-B9lcFwxe.js";import"./createSvgIcon-DcP4g_ya.js";import"./Close-COGFSJZj.js";import"./IconButton-0IVNrtrc.js";import"./Paper-BDvRMvlD.js";import"./useTheme-Dj820_fk.js";import"./useTheme-DQC57DiK.js";import"./Stack-YtjVbKKd.js";import"./extendSxProp-XTMZWoyV.js";import"./getThemeProps-04CPpPQO.js";import"./Box-Bc-90VAx.js";import"./AlertTitle-DDY4r4P1.js";import"./Typography-C5aMCJ4O.js";import"./index-CKdCwKST.js";import"./ClickAwayListener-DeQJwmKr.js";import"./getReactElementRef-CPCCm0If.js";import"./index-nyMMnnmb.js";import"./index-DIHMMwdQ.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Gz3UorJ-.js";import"./Tooltip-DirOuoyD.js";import"./index-Cywkhedm.js";import"./useControlled-DyHOSNBP.js";import"./Popper--hGQ_Vmk.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BYEtqtR3.js";import"./useQuery-CgYxw4RF.js";import"./QueryClientProvider-C_XgAa0e.js";import"./Link-BURlIMsF.js";import"./Collapse-DfFpa9z7.js";import"./_baseUniq-C6EJpBwW.js";import"./_Uint8Array-C_ZTd6pO.js";import"./isArray-C2EAbzcP.js";import"./_getTag-DzU_Pvij.js";import"./isEqual-T1nr5fhG.js";import"./merge-BTfS-Knx.js";import"./_initCloneObject-CTEvesnt.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-D90A6vuJ.js";import"./inputBaseClasses-CowIdqFg.js";import"./calculateFriendlyFileSize-B1Q0dtu7.js";import"./CheckCircleTwoTone-CWBvn9GO.js";import"./InfoTwoTone-BEOG3uKl.js";import"./useMutation-DREPiXeT.js";import"./dayjs.min-CbgDg3VQ.js";import"./chunk-AYJ5UCUI-BAFgS2VU.js";import"./cloneDeep-BsKsinQ1.js";import"./Skeleton-BRb3V-oH.js";import"./SqlFunctions-Dcy2rA-G.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-Cw5bhnC7.js";import"./Backdrop-DCS8zL2F.js";import"./LinearProgress-CI0H8WVN.js";import"./index-4Qoqn0_s.js";import"./index-Cz1FoGkI.js";import"./index-DQhMiHbj.js";import"./const-BP60AzNb.js";import"./index-CkQ-fk0l.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
