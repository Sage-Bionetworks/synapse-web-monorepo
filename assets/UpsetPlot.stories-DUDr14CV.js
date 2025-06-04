import{U as L}from"./UpsetPlot-DQySwXfe.js";import{f as u}from"./index-Bj3GUvFY.js";import"./jsx-runtime-CeNNE178.js";import"./index-Bt2HldYQ.js";import"./iframe-BLXaVYvq.js";import"./LargeButton-BZofz741.js";import"./DefaultPropsProvider-CZ1ixMCP.js";import"./createTheme-CKb99kjG.js";import"./Button-WgFG7Kv7.js";import"./ButtonBase-DGK36sqj.js";import"./useTimeout-CmIrVyao.js";import"./TransitionGroupContext-Da8-nKIU.js";import"./useForkRef-uSm8hWtq.js";import"./useIsFocusVisible-C5zF6H-R.js";import"./useEventCallback-CS_P56Cl.js";import"./useFiles-CYCG5By9.js";import"./VerificationSubmission-DHPhgAH7.js";import"./SynapseConstants-CmfpXss_.js";import"./OrientationBanner--O3J5zHJ.js";import"./index-CfmE6CoI.js";import"./spreadSx-CwcO6WA9.js";import"./react-BMavKsjq.js";import"./FullWidthAlert-DyeuC1vJ.js";import"./Alert-B7nkz1ia.js";import"./resolveComponentProps-CMIWR73s.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-DLoGZJ7f.js";import"./Close-BJ7cjjFc.js";import"./IconButton-Bk_PmWuO.js";import"./Paper-DPHdlQ6w.js";import"./Stack-B2UZSqeE.js";import"./getThemeProps-MWZ41NY4.js";import"./useTheme-D2L9K1WU.js";import"./Box-Bhf9Kz_5.js";import"./AlertTitle-CMAceEnv.js";import"./Typography-CFXxu8IN.js";import"./useTheme-Dl4JanPa.js";import"./Grow-C5U1AU2n.js";import"./index-BHhAFVUK.js";import"./utils-DshReT03.js";import"./ClickAwayListener-CA8RUKC1.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BmtwnYm2.js";import"./index-DNfyRJhZ.js";import"./useControlled-C5JTjFUD.js";import"./useId-QtHUq3oX.js";import"./Popper-BoV6apG6.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-Bj0SG9ce.js";import"./useQuery-ozFMDHTC.js";import"./utils-C7h47-8F.js";import"./Link-wPFjZble.js";import"./Collapse-BG7m57yp.js";import"./isNil-BnN6qy0c.js";import"./_Uint8Array-BlRziyVS.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DvBEekQS.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-DUAR2DVI.js";import"./_getTag-BStwP3vH.js";import"./tinycolor-Begke6kS.js";import"./Fade-TT1SN1XX.js";import"./Skeleton-1xe7MdCp.js";import"./inputBaseClasses-Kd2PBwef.js";import"./calculateFriendlyFileSize-Dy-aVZfM.js";import"./CheckCircleTwoTone-DIkLEp5G.js";import"./InfoTwoTone-xvjf5lJX.js";import"./useMutation-Cr2LGzTW.js";import"./isEqual-BjlCgmbf.js";import"./dayjs.min-CUcU5xVS.js";import"./chunk-AYJ5UCUI-0PQAposk.js";import"./cloneDeep-xAnl9iNy.js";import"./_initCloneObject-B-889FSA.js";import"./merge-BnQpxRnb.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-DhoAZ_qc.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-B7rQaIfc.js";import"./Backdrop-BE3NEOZw.js";import"./LinearProgress-C3lzidtk.js";import"./index-DbWH0WNH.js";import"./index-Ds1PyMtU.js";import"./const-Doag8klc.js";import"./index-4Jq7TpS5.js";const jt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const Kt=["Demo","ElitePortalDemo","AMPALSPortalVariant"];export{r as AMPALSPortalVariant,t as Demo,o as ElitePortalDemo,Kt as __namedExportsOrder,jt as default};
