import{U as L}from"./UpsetPlot-DEpgzfvs.js";import{f as u}from"./index-D7nsUw9W.js";import"./jsx-runtime-Ba9fMlvA.js";import"./index-Dt8RCK4S.js";import"./iframe-JOL0DIag.js";import"./LargeButton-VjZ7nMCT.js";import"./DefaultPropsProvider-CC3RmJFF.js";import"./createTheme-DJv4KxAa.js";import"./Button-DQx1S7a-.js";import"./ButtonBase-BzBJSv7k.js";import"./useTimeout-Cb7XUfzj.js";import"./TransitionGroupContext-DCPGH_5I.js";import"./useForkRef-DpIKFJcv.js";import"./useIsFocusVisible-DJ0VMGRG.js";import"./useEventCallback-nA6SeeXV.js";import"./useFiles-Ct8yHZV5.js";import"./VerificationSubmission-DsgC4t7y.js";import"./SynapseConstants-udfJhW5T.js";import"./OrientationBanner-DJri4Kzp.js";import"./index-BEgggBqy.js";import"./spreadSx-CwcO6WA9.js";import"./react-D_Md03mS.js";import"./FullWidthAlert-Db4YYATT.js";import"./Alert-C19m3Cgy.js";import"./resolveComponentProps-BzkYWVeC.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-BXRachk3.js";import"./Close-DK3CWPJx.js";import"./IconButton-QPgr3jad.js";import"./Paper-C8bYjZ05.js";import"./Stack-DYgZuVBh.js";import"./getThemeProps-FNrSmzJU.js";import"./useTheme-RaTCH1LG.js";import"./Box-C2U2Cla2.js";import"./AlertTitle-DnEBj5ck.js";import"./Typography-DW07qzJw.js";import"./useTheme-Dx1-xZeI.js";import"./Grow-BjBn3HwU.js";import"./index-zJECZUC7.js";import"./utils-DOUzCTI2.js";import"./ClickAwayListener-C_4AhYce.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-D90On-M6.js";import"./index-BAcXyNSJ.js";import"./useControlled-ZTZ0Etwt.js";import"./useId-D7asr5CX.js";import"./Popper-Dig447md.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-tNCAfVhp.js";import"./useQuery-CwaWMnsJ.js";import"./utils-DM63yWLX.js";import"./Link-uk-18KNT.js";import"./Collapse-jddULD66.js";import"./isNil-DfPOP6hp.js";import"./_Uint8Array-BkBwBmmf.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DNalVVPe.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-D7Le_Dhe.js";import"./_getTag-Dz-F_7de.js";import"./tinycolor-Begke6kS.js";import"./Fade-CILW4bK-.js";import"./Skeleton-DT9L0_5S.js";import"./inputBaseClasses-DtdDEN5W.js";import"./calculateFriendlyFileSize-DkjKyaJA.js";import"./CheckCircleTwoTone-C5t_bAXs.js";import"./InfoTwoTone-B0Nnp4Au.js";import"./mutation-CUQob5G8.js";import"./dayjs.min-tmZNEDTt.js";import"./chunk-AYJ5UCUI-D-lxXuxw.js";import"./cloneDeep-CKKH_joM.js";import"./_initCloneObject-B09Yb8G1.js";import"./isEqual-BRN3P_WC.js";import"./merge-CO9M1S60.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-C1gwNAz5.js";import"./react-sizeme-Wg-hvig9.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-CDeASzVg.js";import"./Backdrop-oAJ03AJh.js";import"./LinearProgress-CmQaiKsP.js";const Yt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var e,i,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
