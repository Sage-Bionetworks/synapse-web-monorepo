import{U as L}from"./UpsetPlot-DbD_Jcdo.js";import{f as u}from"./index-B803QibG.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-DRsTIZbz.js";import"./DefaultPropsProvider-DwPP3bOP.js";import"./createTheme-C9EZPXEl.js";import"./index-DEetYTfk.js";import"./iframe-C-MPYzZi.js";import"./Button-BL_fp4Os.js";import"./createSimplePaletteValueFilter-BR9gglpu.js";import"./useTimeout-DNpCpD9V.js";import"./ButtonBase-5v4FJDTD.js";import"./useForkRef-DkrxeQbv.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-WZhZ03Br.js";import"./useFiles-B-MOJFSh.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-Cc-HMvkL.js";import"./OrientationBanner-C0ehmwb7.js";import"./index-DchYQ3Mc.js";import"./spreadSx-CwcO6WA9.js";import"./react-CXxQAGbU.js";import"./FullWidthAlert-Ck84NdpA.js";import"./Alert-_bV9OJzj.js";import"./useSlot-2YE5fyiv.js";import"./createSvgIcon-Dzk4QJYL.js";import"./Close-C3nihQcj.js";import"./IconButton-Dqfvr7rJ.js";import"./Paper-DH7xrxqR.js";import"./useTheme-DXyNl_vd.js";import"./useTheme-D3sP_cXV.js";import"./Stack-BTl5FUE0.js";import"./extendSxProp-Dr7aYpEo.js";import"./getThemeProps-B3XaEgn2.js";import"./Box-CKaaiV7a.js";import"./AlertTitle-iBUnAFGb.js";import"./Typography-Cb42LCBv.js";import"./index-DlH4Vicf.js";import"./ClickAwayListener-Blea4asG.js";import"./getReactElementRef-Diuk2ClR.js";import"./index-DOsk1eHV.js";import"./index-zNG0VahZ.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CCMREaaO.js";import"./Tooltip-DMWzMGEQ.js";import"./index-DxnimhWp.js";import"./useControlled-BFJ3sQsg.js";import"./Popper-DscDM7CW.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-DM1NJ13Q.js";import"./QueryClientProvider-qMgOh1rV.js";import"./Link-DZl6OaXa.js";import"./Collapse-DLJHdOiv.js";import"./_baseUniq-CBb3s_wd.js";import"./_Uint8Array-0Ord_V5d.js";import"./isArray-BfbWQSD3.js";import"./_getTag-ZfnB4koV.js";import"./isEqual-B7CeAIws.js";import"./merge-p-czfyOi.js";import"./_initCloneObject-CGBqmTO2.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-C2MWQSlF.js";import"./inputBaseClasses-C7s2JheL.js";import"./calculateFriendlyFileSize-CiuxncCp.js";import"./CheckCircleTwoTone-BXy6NFWn.js";import"./InfoTwoTone-CjF9XSBG.js";import"./useMutation-BxuoAeqR.js";import"./dayjs.min-B4S98Tf3.js";import"./chunk-AYJ5UCUI-Nhx8Yo4w.js";import"./cloneDeep-Bz0lqHWE.js";import"./Skeleton-DbYni0HE.js";import"./SqlFunctions-C8HqQ3uk.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-c19m9cTC.js";import"./Backdrop-DLcfU7TG.js";import"./LinearProgress-BOZ2mUc4.js";import"./index-Db7JeNl5.js";import"./index-9aVdpIMU.js";import"./index-D_2ePep7.js";import"./const-BP60AzNb.js";import"./index-CM_g68LY.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
