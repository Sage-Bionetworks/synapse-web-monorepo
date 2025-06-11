import{U as L}from"./UpsetPlot-TAqF-QKc.js";import{f as u}from"./index-D90xtYr7.js";import"./jsx-runtime-CDD16J4I.js";import"./index-CTtGSwtz.js";import"./iframe-DHqncNvI.js";import"./LargeButton-DihKkuvX.js";import"./DefaultPropsProvider-Q55trC2F.js";import"./createTheme-DtyqCcsW.js";import"./Button-CSREDgQS.js";import"./ButtonBase-BX3py27C.js";import"./useTimeout-DCvpGNuJ.js";import"./TransitionGroupContext-D_AfR7Ts.js";import"./useForkRef-8EUHzdYl.js";import"./useIsFocusVisible-DSE28IXe.js";import"./useEventCallback-LaXwXmvX.js";import"./useFiles-CWzgJ9sH.js";import"./VerificationSubmission-DeH3Sb8D.js";import"./SynapseConstants-CxcbPKuN.js";import"./OrientationBanner-CDewlRHC.js";import"./index-6q9LD8_w.js";import"./spreadSx-CwcO6WA9.js";import"./react-Ck4mbq7a.js";import"./FullWidthAlert-Cgkxxv0P.js";import"./Alert-DlUFZ172.js";import"./resolveComponentProps-yty8tDzr.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-D2nihEOR.js";import"./Close-CLUvZd8_.js";import"./IconButton-CFbw2MTT.js";import"./Paper-D2Ya4jZy.js";import"./Stack-D5IlQnMa.js";import"./getThemeProps-DrtVxYpm.js";import"./useTheme-BqMk1IzG.js";import"./Box-BldPxOqU.js";import"./AlertTitle-iHGnMN1B.js";import"./Typography-DfBcTN0P.js";import"./useTheme-4fjKTJkR.js";import"./Grow-DwKxzONN.js";import"./index-CXYQz1UQ.js";import"./index-DnAMs-MC.js";import"./utils-BT38eB9s.js";import"./ClickAwayListener-DJDqohlz.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-Bjl6zEeo.js";import"./index-DTKxd2xi.js";import"./useControlled-DrJNWWi-.js";import"./useId-Dl5Lr_f7.js";import"./Popper-BEuA7c-9.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-DnD65nWI.js";import"./useQuery-DtswAvya.js";import"./utils-CwLPV75P.js";import"./Link-C2X9bszK.js";import"./Collapse-zM_t4339.js";import"./isNil-BtYaoqDt.js";import"./_Uint8Array-CNETH7XA.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-B2aI8r_K.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-UnDsdCOv.js";import"./_getTag-B1tLmQft.js";import"./tinycolor-Begke6kS.js";import"./Fade-DGqyTv5e.js";import"./Skeleton-BZhHyFlz.js";import"./inputBaseClasses-C_hlAuoX.js";import"./calculateFriendlyFileSize-BMa6rFxO.js";import"./CheckCircleTwoTone-DaGpdtOL.js";import"./InfoTwoTone-D_LpKHwl.js";import"./useMutation-a2O88IgO.js";import"./isEqual-CycnANg8.js";import"./dayjs.min-DMkylBgh.js";import"./chunk-AYJ5UCUI-T8nVnVS8.js";import"./cloneDeep-DnuAzlve.js";import"./_initCloneObject-D8hJZdZ8.js";import"./merge-CsgEdur4.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-DMQpCQSh.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BUr5CgTq.js";import"./Backdrop-CnI61w8e.js";import"./LinearProgress-D8qBrI70.js";import"./index-Prz-1fMI.js";import"./index-v78TGjNJ.js";import"./index-gv0YtUg9.js";import"./const-Doag8klc.js";import"./index-D8jnc5ly.js";const Xt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const Zt=["Demo","ElitePortalDemo","AMPALSPortalVariant"];export{r as AMPALSPortalVariant,t as Demo,o as ElitePortalDemo,Zt as __namedExportsOrder,Xt as default};
