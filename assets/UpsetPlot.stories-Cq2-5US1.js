import{U as L}from"./UpsetPlot-DsmzAX6z.js";import{f as u}from"./index-BhG_f-4J.js";import"./jsx-runtime-DjELr09S.js";import"./index-CRC0gUGT.js";import"./iframe-tJqn4f01.js";import"./LargeButton-BqsXSMpw.js";import"./DefaultPropsProvider-BD-C1P_v.js";import"./createTheme-DQgOOKGc.js";import"./Button-94LdtlT8.js";import"./createSimplePaletteValueFilter-BGAHH8st.js";import"./useTimeout-LJKXBrqp.js";import"./ButtonBase-BxvSQLqm.js";import"./useForkRef-CiEqLLys.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-C-pin8Wm.js";import"./useFiles-BW-owtxo.js";import"./VerificationSubmission-DKyendrM.js";import"./SynapseConstants-DYVulwWj.js";import"./OrientationBanner-CkExct-K.js";import"./index-Cma5SVl3.js";import"./spreadSx-CwcO6WA9.js";import"./react-axdigFKh.js";import"./FullWidthAlert-DDbXXCv9.js";import"./Alert-CujLCNcc.js";import"./useSlot-BoDDrK5C.js";import"./createSvgIcon-ClTXAx25.js";import"./Close-v_Yqb0Ff.js";import"./IconButton-BMaEMUSh.js";import"./Paper-YzbxsTTQ.js";import"./useTheme-5c2fjMQ9.js";import"./useTheme-C1X5k2vU.js";import"./Stack-CkCmnvh9.js";import"./extendSxProp-BdaBbCaG.js";import"./getThemeProps-GT0SpVYm.js";import"./Box-B8SxUwYv.js";import"./AlertTitle-CKDD2-B2.js";import"./Typography-CjUaZcjg.js";import"./index-FRkwLtZ5.js";import"./ClickAwayListener-BmI1rJ_C.js";import"./getReactElementRef-Bn8XLpha.js";import"./index-DwsODiYZ.js";import"./index-86h2p3s9.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CC-UToNg.js";import"./Tooltip-CA2ntON0.js";import"./index-0_SuK6xJ.js";import"./useControlled-CSFe08nh.js";import"./Popper-Dc8rhSID.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BcSmk1fX.js";import"./useQuery-DR-NIgIW.js";import"./utils-BHyCoYbL.js";import"./Link-BWzpb2I3.js";import"./Collapse-CeVTy5G8.js";import"./isNil-Dt1ur5ER.js";import"./_Uint8Array-DNmeFNwt.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DBdzEJhN.js";import"./isArray-Dxzbedgu.js";import"./isEqual-BDSMxr4M.js";import"./_getTag-Dbs1MR1b.js";import"./tinycolor-Begke6kS.js";import"./Fade-DnU0MG16.js";import"./inputBaseClasses-Cxqzqvgy.js";import"./calculateFriendlyFileSize-NoS0jg63.js";import"./CheckCircleTwoTone-BW8ZNfsM.js";import"./InfoTwoTone-2sQfC__e.js";import"./useMutation-BApUlXSa.js";import"./dayjs.min-Cwlc6FFu.js";import"./chunk-AYJ5UCUI-DrMux6IH.js";import"./cloneDeep-DS1BAkOs.js";import"./_initCloneObject-CMrr9E2i.js";import"./Skeleton-BjJ3iFNk.js";import"./merge-rOUTElX2.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-D5GxPzI3.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-B3m7HCEo.js";import"./Backdrop-C4U60Dzf.js";import"./LinearProgress-hjovXbbK.js";import"./index-CJ15ebLm.js";import"./index-D6YY9Z4w.js";import"./index-DLMy0mXU.js";import"./const-Doag8klc.js";import"./index-BjfQSOiM.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
