import{U as L}from"./UpsetPlot-C6ZuM1_j.js";import{f as u}from"./index-BwNqqLtZ.js";import"./jsx-runtime-TwxSPpge.js";import"./index-CP2ombwK.js";import"./iframe-DELcdr28.js";import"./LargeButton-BYQFXJF9.js";import"./DefaultPropsProvider-CFQoP9D3.js";import"./createTheme--XeMpcIA.js";import"./Button-BFW2wg2m.js";import"./ButtonBase-Xvjt3VdP.js";import"./useTimeout-BvmDw31A.js";import"./TransitionGroupContext-BqEE9JDI.js";import"./useForkRef-BTeFA_Hh.js";import"./useIsFocusVisible-BvGnrCgo.js";import"./useEventCallback-3xmF-Fyu.js";import"./useFiles-CjD41V1e.js";import"./VerificationSubmission-DeH3Sb8D.js";import"./SynapseConstants-qhCgmPo2.js";import"./OrientationBanner-PAkVLtDj.js";import"./index-DDTRWmF_.js";import"./spreadSx-CwcO6WA9.js";import"./react-BwCWi7yt.js";import"./FullWidthAlert-C02ikxsw.js";import"./Alert-DXgGMWRg.js";import"./resolveComponentProps-gSlQduCW.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-CxsSGhzU.js";import"./Close-CBYHhd3e.js";import"./IconButton-DbbMJHnd.js";import"./Paper-CfudIHrR.js";import"./Stack-GpaDpopE.js";import"./getThemeProps-CGck1bva.js";import"./useTheme-Byz5Ojax.js";import"./Box-DS3zPfAO.js";import"./AlertTitle-BHnzChDM.js";import"./Typography-DKoHBbqi.js";import"./useTheme-Dkz8W119.js";import"./Grow-CGp3UrJ6.js";import"./index-yCLJ8nr9.js";import"./index-H7gE-4SG.js";import"./utils-Dq3QiokW.js";import"./ClickAwayListener-DNJlLkB-.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-C2lPtfFI.js";import"./index-BlQzu9ng.js";import"./useControlled-DgiNbB_g.js";import"./useId-COlya_Y0.js";import"./Popper-Dsyid569.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-DnD65nWI.js";import"./useQuery-C-XYJIex.js";import"./utils-C96tNR1M.js";import"./Link-BX2lIlPn.js";import"./Collapse-CWKH_sJZ.js";import"./isNil-fEUU7fIg.js";import"./_Uint8Array-sWy1T8xd.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CIsPGAoN.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-xi4DsmAB.js";import"./_getTag-DFaT4zHc.js";import"./tinycolor-Begke6kS.js";import"./Fade-C9PsbQ81.js";import"./Skeleton-OPnWbGkQ.js";import"./inputBaseClasses-D5Lb_ZTl.js";import"./calculateFriendlyFileSize-BV2jZfrl.js";import"./CheckCircleTwoTone-BnmX4Xsz.js";import"./InfoTwoTone-XdTRaOZd.js";import"./useMutation-CgEkPnYU.js";import"./isEqual-Dr-LLa-c.js";import"./dayjs.min-674unzfE.js";import"./chunk-AYJ5UCUI-DOC_4awE.js";import"./cloneDeep-APW-NT8P.js";import"./_initCloneObject-BkVuG82H.js";import"./merge-D-wdjlc3.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-DMQpCQSh.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-TU6nP1bH.js";import"./Backdrop-CPyUOzmJ.js";import"./LinearProgress-J0HjgOIZ.js";import"./index-DovtW9Wl.js";import"./index-D1DHNJwT.js";import"./index-Cu3THZak.js";import"./const-Doag8klc.js";import"./index-C2Jw874a.js";const Xt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
