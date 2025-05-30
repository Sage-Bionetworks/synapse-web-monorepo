import{U as L}from"./UpsetPlot-Ba5ku-NV.js";import{f as u}from"./index-DDj-fZgd.js";import"./jsx-runtime-Bz85XGaa.js";import"./index-BVV_9QeJ.js";import"./iframe-BDVC29SQ.js";import"./LargeButton-BTgD5qnN.js";import"./DefaultPropsProvider-CCX4Uzgz.js";import"./createTheme-DtOhOvpP.js";import"./Button-DW5LN-qF.js";import"./ButtonBase-DPyplpjy.js";import"./useTimeout-ufiQ3DfI.js";import"./TransitionGroupContext-xDeP4cu6.js";import"./useForkRef-DA5a99gH.js";import"./useIsFocusVisible-BJFAdkmc.js";import"./useEventCallback-DXpDzqzG.js";import"./useFiles-ytsAIoDW.js";import"./VerificationSubmission-BI5WaB2N.js";import"./SynapseConstants-p8jYVOEo.js";import"./OrientationBanner-BRf2AysZ.js";import"./index-Bw2EO2AE.js";import"./spreadSx-CwcO6WA9.js";import"./react-2XGxyWwi.js";import"./FullWidthAlert-UUgrqYvS.js";import"./Alert-DrO5kr0y.js";import"./resolveComponentProps-CoZ49OvA.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-_A5ycCXI.js";import"./Close-Bx0nXc68.js";import"./IconButton-zwyTJ7c3.js";import"./Paper-ClD_GGAy.js";import"./Stack-CYlmPWRV.js";import"./getThemeProps-DLBQ4YtD.js";import"./useTheme-8dQg3nEl.js";import"./Box-CeB-moYn.js";import"./AlertTitle-CgFT2f_w.js";import"./Typography-Bx51Sgda.js";import"./useTheme-r0RJ9GrL.js";import"./Grow-D4qHwQig.js";import"./index-D5bn-Jqh.js";import"./utils-DJ4l4jbW.js";import"./ClickAwayListener-O89kXouk.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-B1gm0b5o.js";import"./index-BcBgZbxD.js";import"./useControlled-CrvnJ5-v.js";import"./useId-udz03xSJ.js";import"./Popper-DWX0dxaL.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-DN6u4g4A.js";import"./useQuery-wJKiWrQl.js";import"./utils-D3qV5qLe.js";import"./Link-BBtfC7zm.js";import"./Collapse-CU4oUoZ1.js";import"./isNil-BSjmuNaz.js";import"./_Uint8Array-BadtYtfl.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CQFXE7dF.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-D9I-2NFJ.js";import"./_getTag-Cn9y3BG0.js";import"./tinycolor-Begke6kS.js";import"./Fade-DsXpCnut.js";import"./Skeleton-p_YUG_xc.js";import"./inputBaseClasses-DWE6vfig.js";import"./calculateFriendlyFileSize-B_AmRV2M.js";import"./CheckCircleTwoTone-GIsapumQ.js";import"./InfoTwoTone-Eafa2etc.js";import"./mutation--dTc--pt.js";import"./dayjs.min-BBy7-jh7.js";import"./chunk-AYJ5UCUI-CEWJUJfg.js";import"./cloneDeep-DSj2Q_zQ.js";import"./_initCloneObject-BAJkGHCF.js";import"./isEqual-CYbZ3Lcd.js";import"./merge-FXhtNPRC.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-DJ9aEy1v.js";import"./react-sizeme-BoLaFJxK.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-Cll_Q4OZ.js";import"./Backdrop-WZ3MgCw4.js";import"./LinearProgress-CABSpfQ1.js";const Yt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var e,i,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(a=(i=t.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var s,n,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const _t=["Demo","ElitePortalDemo","AMPALSPortalVariant"];export{r as AMPALSPortalVariant,t as Demo,o as ElitePortalDemo,_t as __namedExportsOrder,Yt as default};
