import{U as L}from"./UpsetPlot-gmQMbzBx.js";import{f as u}from"./index-W7t9voW1.js";import"./jsx-runtime-DfABaRRm.js";import"./index-DYlxwmQf.js";import"./iframe-N_SCbRud.js";import"./LargeButton-BBon2IR_.js";import"./DefaultPropsProvider-zBbok_Rg.js";import"./createTheme-B7j6gmB9.js";import"./Button-CYmbjpql.js";import"./ButtonBase-BvEMQRg-.js";import"./useTimeout-DZ-OqC0g.js";import"./TransitionGroupContext-Dyr4l5YQ.js";import"./useForkRef-pxSTpRRe.js";import"./useIsFocusVisible-BStVjJ1N.js";import"./useEventCallback-Hfhvhsjq.js";import"./useFiles-B_YGx59Q.js";import"./VerificationSubmission-DsgC4t7y.js";import"./SynapseConstants-CgNOmtbB.js";import"./OrientationBanner-tFttoDJP.js";import"./index-B6ZDsx2K.js";import"./spreadSx-CwcO6WA9.js";import"./react-fTEcXI9d.js";import"./FullWidthAlert-BkSSmOGu.js";import"./Alert-DZ4FxOIp.js";import"./resolveComponentProps-Dk7HmJ2Q.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-C1r-9WuP.js";import"./Close-DTAljvJz.js";import"./IconButton-CtrWpawg.js";import"./Paper-LaDS8bEp.js";import"./Stack-BuqrQrvy.js";import"./getThemeProps-qtNr_xPF.js";import"./useTheme-Dtm1qci2.js";import"./Box-BqS2LAmE.js";import"./AlertTitle-BWu0j2xR.js";import"./Typography-CeIa-fZn.js";import"./useTheme-Jk5FIvWn.js";import"./Grow-BehhM4N7.js";import"./index-CeyVdOhP.js";import"./utils-BKSSoB6B.js";import"./ClickAwayListener-B9uGoLeK.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DdV7RVVG.js";import"./index-Dj_6vp2Q.js";import"./useControlled-YFKV2F2n.js";import"./useId-ebMPsm6_.js";import"./Popper-Crl-0kzB.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-tNCAfVhp.js";import"./useQuery-RqcQXr6l.js";import"./utils-7vG6A43c.js";import"./Link-C4XBdo-g.js";import"./Collapse-hevKOALZ.js";import"./isNil-BgiRU2Us.js";import"./_Uint8Array-Capyws4v.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-IRS_VwDX.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-DxRvwVdk.js";import"./_getTag-DYVojOvt.js";import"./tinycolor-Begke6kS.js";import"./Fade-CCfhYHs2.js";import"./Skeleton-DeHRU0rh.js";import"./inputBaseClasses-DuedhsRY.js";import"./calculateFriendlyFileSize-Wtc8EXbC.js";import"./CheckCircleTwoTone-Bo9T9_TT.js";import"./InfoTwoTone-BEe_0-jU.js";import"./mutation-BY_OAeuj.js";import"./dayjs.min-Cm4ygt_D.js";import"./chunk-AYJ5UCUI-CmQNpgxF.js";import"./cloneDeep-IiHMspIc.js";import"./_initCloneObject-DuN2pDEt.js";import"./isEqual-D6ItS3N1.js";import"./merge-0Cc2NZpY.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-C1gwNAz5.js";import"./react-sizeme-CJXxEIYt.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-CNDstneR.js";import"./Backdrop-DhEdRS2d.js";import"./LinearProgress-U1C5QSvG.js";const Yt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var e,i,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
