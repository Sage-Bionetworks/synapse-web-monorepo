import{U as L}from"./UpsetPlot-FH1v7Enm.js";import{f as u}from"./index-B82oRXOs.js";import"./jsx-runtime-d_jSGfuW.js";import"./index-CsMIurHC.js";import"./iframe-BJUV8yd-.js";import"./LargeButton-CMJetn09.js";import"./DefaultPropsProvider-BjdTxmMk.js";import"./createTheme-CXF9bY3g.js";import"./Button-S6YMXMba.js";import"./ButtonBase-BemfzaRk.js";import"./useTimeout-M7ILagoH.js";import"./TransitionGroupContext-BzjYJz1e.js";import"./useForkRef-Qy2WE2L8.js";import"./useIsFocusVisible-CONob7Sg.js";import"./useEventCallback-BI5RiCjo.js";import"./useFiles-Dsa3u--j.js";import"./VerificationSubmission-DsgC4t7y.js";import"./SynapseConstants-BmRSEcUC.js";import"./OrientationBanner-B-arf4vv.js";import"./index-C6EkIRZO.js";import"./spreadSx-CwcO6WA9.js";import"./react-CLp1HUW8.js";import"./FullWidthAlert-g5VY_JP0.js";import"./Alert-BRIWNOtu.js";import"./resolveComponentProps-BVjKbyvI.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-nJ4brtSX.js";import"./Close-CcYrHUCv.js";import"./IconButton-Oayiszqv.js";import"./Paper-BOIlBj0a.js";import"./Stack-B6pwuley.js";import"./getThemeProps-BkFfL3GX.js";import"./useTheme-Co028x8f.js";import"./Box-0w0QXb9q.js";import"./AlertTitle-BCj215so.js";import"./Typography-DI7kYxjv.js";import"./useTheme-DxaRAP13.js";import"./Grow-Cse7N1kt.js";import"./index-ZO1NugB6.js";import"./utils-CXikhHHF.js";import"./ClickAwayListener-BhXis3j3.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-CuINGH26.js";import"./index-DioXFVDj.js";import"./useControlled-2RzUJcJv.js";import"./useId-BbVskIHx.js";import"./Popper-Dpp_HX4T.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-tNCAfVhp.js";import"./useQuery-D3ZPFprG.js";import"./utils-C7K2lhfB.js";import"./Link-6Al-Fqj4.js";import"./Collapse-BHgec6F8.js";import"./isNil-SZ1XCHa2.js";import"./_Uint8Array-Qz23elJ2.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-htAwhsM6.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-DpmEyEs-.js";import"./_getTag-CR_tant5.js";import"./tinycolor-Begke6kS.js";import"./Fade-BMnops2P.js";import"./Skeleton-wblQ7WdV.js";import"./inputBaseClasses-CsqekATJ.js";import"./calculateFriendlyFileSize-C5bVMG5e.js";import"./CheckCircleTwoTone-C73kqWtj.js";import"./InfoTwoTone-Ds0ttC-r.js";import"./mutation-CpK9fLVW.js";import"./dayjs.min-h1P3Bc9m.js";import"./chunk-AYJ5UCUI-CJN4kzPf.js";import"./cloneDeep-DjuOrVDN.js";import"./_initCloneObject-DutgCJVD.js";import"./isEqual-DjXGrVN1.js";import"./merge-DlMI-LlY.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-C1gwNAz5.js";import"./react-sizeme-CGuALPjj.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BQ1ee2DE.js";import"./Backdrop-B0QFjJH5.js";import"./LinearProgress-D5-GGrqB.js";const Yt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var e,i,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
