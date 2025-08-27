import{U as L}from"./UpsetPlot-Cs7WWTBN.js";import{f as u}from"./index-C512p806.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-_tkhWshd.js";import"./DefaultPropsProvider-CNbyjzXA.js";import"./createTheme-D0jwdMH6.js";import"./index-CeHTzJyp.js";import"./iframe-CRPpa2KP.js";import"./Button-VoQsandl.js";import"./createSimplePaletteValueFilter-BLZB6jXM.js";import"./useTimeout-DuSUC5v5.js";import"./ButtonBase-CyFFJ92C.js";import"./useForkRef-BHeMBZ9A.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-luIUEH-s.js";import"./useFiles-CW6WwbiD.js";import"./VerificationSubmission-CNoSrCdk.js";import"./SynapseConstants-BsoqDikB.js";import"./OrientationBanner-BN7DsriS.js";import"./index-C6143cPZ.js";import"./spreadSx-CwcO6WA9.js";import"./react-Hm267hUH.js";import"./FullWidthAlert-CeM3RPEo.js";import"./Alert-BH7e5q2h.js";import"./useSlot-Blh8swMU.js";import"./createSvgIcon-DmkT2sbO.js";import"./Close-CqNAUic4.js";import"./IconButton-D1JdUJVf.js";import"./Paper-D5Ed-jwF.js";import"./useTheme-D54EzNLV.js";import"./useTheme-DzRx46t8.js";import"./Stack-DH_3e60E.js";import"./extendSxProp-ao-kpT-0.js";import"./getThemeProps-CmJ_wHji.js";import"./Box-_fu27yuW.js";import"./AlertTitle-Cyy-oy6Z.js";import"./Typography-EPPVSSRU.js";import"./index-DjGhb9rT.js";import"./ClickAwayListener-CpwBEN2t.js";import"./getReactElementRef-Qf8deF3R.js";import"./index--lJFKKqu.js";import"./index-_-J0f0OQ.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CnNkUdh0.js";import"./Tooltip-CWVch6yN.js";import"./index-NFQzg98e.js";import"./useControlled-Qn6GC-e_.js";import"./Popper-BpwnzHmp.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-CwQ1lgbR.js";import"./useQuery-DF_TajiR.js";import"./QueryClientProvider-DysUnEIb.js";import"./Link-JFKDsYEI.js";import"./Collapse-CVpMFzBG.js";import"./_baseUniq-BLdjdo5_.js";import"./_Uint8Array-Dnll8ZdL.js";import"./isArray-Dy3KJCqk.js";import"./_getTag-DFGN5r_7.js";import"./isEqual-CBx4vvAz.js";import"./merge-BSWrWw_g.js";import"./_initCloneObject-BxCU3HsA.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-_onL1Bmv.js";import"./inputBaseClasses-_kG_KU0z.js";import"./calculateFriendlyFileSize-6alSNTxW.js";import"./CheckCircleTwoTone-CcyJnJAE.js";import"./InfoTwoTone-NfSk4DBl.js";import"./useMutation-9xt_MpMS.js";import"./dayjs.min-pPdGcl-0.js";import"./chunk-AYJ5UCUI-F0wUneiu.js";import"./cloneDeep-BrXhEFPe.js";import"./Skeleton-ChNcqWa3.js";import"./SqlFunctions-zz0CCrj4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-B5CfxxkV.js";import"./Backdrop-CmsBBBt9.js";import"./LinearProgress-C9i_IPyg.js";import"./index-Dk_u7r9A.js";import"./index-yPGjdICa.js";import"./index-BusBsB0k.js";import"./const-BP60AzNb.js";import"./index-mXXrQf5U.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
