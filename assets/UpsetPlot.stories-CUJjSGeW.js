import{U as L}from"./UpsetPlot-CGMQCQOU.js";import{f as u}from"./index-C0hGAPgB.js";import"./jsx-runtime-CnC__bFg.js";import"./index-BsJQi6Dk.js";import"./iframe-CLOMuBS1.js";import"./LargeButton-C_AhICS6.js";import"./DefaultPropsProvider-yqsgBtMO.js";import"./createTheme-DVbiGJ67.js";import"./Button-CKoHvT6d.js";import"./ButtonBase-DlZPLEXy.js";import"./useTimeout-BtTY_1Hi.js";import"./TransitionGroupContext-yGFzkBTt.js";import"./useForkRef-BJRw6fTR.js";import"./useIsFocusVisible-D3oCvNA0.js";import"./useEventCallback-Bh5fpomL.js";import"./useFiles-D6D6aavL.js";import"./VerificationSubmission-DHPhgAH7.js";import"./SynapseConstants-CIJTL8Hh.js";import"./OrientationBanner-CiRzQfQO.js";import"./index-IjppgAFK.js";import"./spreadSx-CwcO6WA9.js";import"./react-Wpnlki_N.js";import"./FullWidthAlert-BgsUTCUD.js";import"./Alert-lc64fEld.js";import"./resolveComponentProps-Bv7pQW1z.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-DTKv9Rlb.js";import"./Close-DCccWvSR.js";import"./IconButton-qFeqvS30.js";import"./Paper-CZ6IEQ09.js";import"./Stack-DW2g_KTM.js";import"./getThemeProps-CQ-evv0A.js";import"./useTheme-SwEfz4tC.js";import"./Box-Jd0TGo98.js";import"./AlertTitle-DXQWSGGX.js";import"./Typography-BcmFSKlE.js";import"./useTheme-D0sMZgaF.js";import"./Grow-BADnlCPX.js";import"./index-CL9pY3NP.js";import"./utils-5GDObXQ_.js";import"./ClickAwayListener-Cd-S1Q1u.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DaXBtCB8.js";import"./index-cvImvpDl.js";import"./useControlled-CCxoHuWH.js";import"./useId-CFCmZZFw.js";import"./Popper-CD-JqEPm.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-Bj0SG9ce.js";import"./useQuery-CF-CfnG8.js";import"./utils-Bq0_XUyv.js";import"./Link-_TBTXcDx.js";import"./Collapse-B7cdoG5y.js";import"./isNil-CTodBd8q.js";import"./_Uint8Array-BSaYQZWv.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DmdZbYeo.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-CsLca8bb.js";import"./_getTag-m1EiPaOw.js";import"./tinycolor-Begke6kS.js";import"./Fade-DcXqhDgy.js";import"./Skeleton-BNofG0Ec.js";import"./inputBaseClasses-CFue45jM.js";import"./calculateFriendlyFileSize-Bt8qXmv0.js";import"./CheckCircleTwoTone-jeuH2qq1.js";import"./InfoTwoTone-CeQqu_rR.js";import"./useMutation-3NTG8Lcv.js";import"./isEqual-C1O3GEEt.js";import"./dayjs.min-CnuSBCzJ.js";import"./chunk-AYJ5UCUI-pNtXMNcj.js";import"./cloneDeep-C2q4fZxO.js";import"./_initCloneObject-Csqg8Vlr.js";import"./merge-LpyMrc_U.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-DhoAZ_qc.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-D6r5z3mg.js";import"./Backdrop-CjJ9RRa2.js";import"./LinearProgress-0FcBOYkQ.js";import"./index-D_z4nQnM.js";import"./index-CMI4MVQW.js";import"./index-DRRdFxBR.js";import"./const-Doag8klc.js";import"./index-C5JwaiiL.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
