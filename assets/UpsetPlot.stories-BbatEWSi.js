import{U as L}from"./UpsetPlot-DROu_8MB.js";import{f as u}from"./index-CSjVp6Dx.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-C7VM2Vpm.js";import"./DefaultPropsProvider-DIzpH3Fg.js";import"./createTheme-CAa1rIKv.js";import"./index-BGKfHSk8.js";import"./iframe-hwM07gcL.js";import"./Button-COK4dnOS.js";import"./createSimplePaletteValueFilter-DsH-b64n.js";import"./useTimeout-5Q0Z7_vO.js";import"./ButtonBase-BFODyUCV.js";import"./useForkRef-DzDqwRel.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DvUgbv3o.js";import"./useFiles-En5liOfn.js";import"./VerificationSubmission-NmfK1W18.js";import"./SynapseConstants-C6zJ4IJQ.js";import"./OrientationBanner-B4uqU9lW.js";import"./index-DxyBYFfC.js";import"./spreadSx-CwcO6WA9.js";import"./react-CAsqVN01.js";import"./FullWidthAlert-0V12Rkuf.js";import"./Alert-CyRc4Clc.js";import"./useSlot-DwXZ_j6C.js";import"./createSvgIcon-C9jSypZa.js";import"./Close-SD3DC24O.js";import"./IconButton-DAJgvnrd.js";import"./Paper-Gj35BgLn.js";import"./useTheme-CPstsOGE.js";import"./useTheme-DgxJ3CLL.js";import"./Stack-Ch0lA1Ch.js";import"./extendSxProp-BO6t2ASw.js";import"./getThemeProps-C51oBefI.js";import"./Box-Dl9bdDgz.js";import"./AlertTitle-BjOUD14l.js";import"./Typography-4FBfznuU.js";import"./index-CtVaEtER.js";import"./ClickAwayListener-di5aomVr.js";import"./getReactElementRef-DsQrM9l7.js";import"./index-CcJMFhVR.js";import"./index-DJM3o9cS.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-D5ckU-GR.js";import"./Tooltip-HabFJOHL.js";import"./index-D2DV3O1J.js";import"./useControlled-D7Vfogjk.js";import"./Popper-CAg7-6pF.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-D1dT8CXY.js";import"./useQuery-DwS_k2nL.js";import"./QueryClientProvider-CvTrulJZ.js";import"./Link-nIKgOOJn.js";import"./Collapse-B1wdMAtp.js";import"./_baseUniq-B-rBxMDk.js";import"./_Uint8Array-BS5v6wM4.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DFt_srKj.js";import"./isArray-Dxzbedgu.js";import"./_getTag-B3lOEEon.js";import"./isEqual-Bc2MJLgB.js";import"./merge-CnMidIvr.js";import"./_initCloneObject-CqCgam3p.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DxE_f_NY.js";import"./inputBaseClasses-B2dsuVyA.js";import"./calculateFriendlyFileSize-DxMWruXs.js";import"./CheckCircleTwoTone-Cf5s39nD.js";import"./InfoTwoTone-C5ChC8_t.js";import"./useMutation-uR_lUn9I.js";import"./dayjs.min-CV6CNdty.js";import"./chunk-AYJ5UCUI-UiPGEWhr.js";import"./cloneDeep-CXETPPTh.js";import"./Skeleton-t7s89DoH.js";import"./SqlFunctions-OlXdLdyI.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-jZ020hZ8.js";import"./Backdrop-CsC4pNgX.js";import"./LinearProgress-WlwJAWRc.js";import"./index-C-baQ3vG.js";import"./index-CpuJ1BoC.js";import"./index-JsWX3YKx.js";import"./const-BP60AzNb.js";import"./index-CgoMYbN8.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const Xt=["Demo","ElitePortalDemo","AMPALSPortalVariant"];export{r as AMPALSPortalVariant,t as Demo,o as ElitePortalDemo,Xt as __namedExportsOrder,Kt as default};
