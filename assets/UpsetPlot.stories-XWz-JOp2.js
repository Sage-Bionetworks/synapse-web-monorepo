import{U as L}from"./UpsetPlot-DQiwIAQL.js";import{f as u}from"./index-D98i5EoO.js";import"./jsx-runtime-CFF0IO7V.js";import"./index-BJ7ALwL2.js";import"./iframe-CEp3iVjq.js";import"./LargeButton-KHzHR7AN.js";import"./DefaultPropsProvider-BOxd0Sbo.js";import"./createTheme-CkS4QZvJ.js";import"./Button-ccYrDQpx.js";import"./ButtonBase-CTg1nl5M.js";import"./useTimeout-Bk89QPaF.js";import"./TransitionGroupContext-CXLwUvot.js";import"./useForkRef-I_DnR4si.js";import"./useIsFocusVisible-C8TPXvxP.js";import"./useEventCallback-DbmQPL7x.js";import"./useFiles-DngzFh3e.js";import"./VerificationSubmission-dxY1kvC5.js";import"./SynapseConstants-BdkZXYLP.js";import"./OrientationBanner-ew17TVg2.js";import"./index-DMrxKmOb.js";import"./spreadSx-CwcO6WA9.js";import"./react-BaKqR22l.js";import"./FullWidthAlert-BEiywVvi.js";import"./Alert-BlzsnL1m.js";import"./resolveComponentProps-zYoat5PD.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-D5G5uwJ2.js";import"./Close-emeGZ8Oh.js";import"./IconButton-CwxeWoqe.js";import"./Paper-Cct9MIyy.js";import"./Stack-DS40NBuF.js";import"./getThemeProps-57vBxk9k.js";import"./useTheme-DLOkYWdY.js";import"./Box-CcK0P2x-.js";import"./AlertTitle-Ch5AT8_u.js";import"./Typography-DGjlBq7i.js";import"./useTheme-GCly8xFo.js";import"./Grow-CJ587jf8.js";import"./index-BKgV-8-K.js";import"./utils-N-VcAcuA.js";import"./ClickAwayListener-DMb0I8qX.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-CuT-J_CD.js";import"./index-Cx7C3SmO.js";import"./useControlled-Bv_mN-Tz.js";import"./useId-GJMEvMLg.js";import"./Popper-CMhfExlC.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-lE31obNl.js";import"./useQuery-C8kIrZqY.js";import"./utils-B07lb4xZ.js";import"./Link-C4VUduzM.js";import"./Collapse-D9ccO4UN.js";import"./isNil-Bhqo1LuL.js";import"./_Uint8Array-CwY4XA2G.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DeBm8QAe.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-CCkvd24j.js";import"./_getTag-O2YfvaR4.js";import"./tinycolor-Begke6kS.js";import"./Fade-BTPNk_kk.js";import"./Skeleton-BHIft4PN.js";import"./inputBaseClasses-LotBqPRG.js";import"./calculateFriendlyFileSize-N19TG0GH.js";import"./CheckCircleTwoTone-CKABL2ap.js";import"./InfoTwoTone-Dg1V0kNu.js";import"./mutation-QWAq6Bhb.js";import"./dayjs.min-pki8ZpMi.js";import"./chunk-AYJ5UCUI-Bf0CTJmh.js";import"./cloneDeep-Bs7Imfre.js";import"./_initCloneObject-DL14YJfm.js";import"./isEqual-B2v3mw20.js";import"./merge-BR1H3Nu7.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-BxcEiHsR.js";import"./react-sizeme-CQyZ4NaI.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-CbQrn2Nl.js";import"./Backdrop-DlIk-oiw.js";import"./LinearProgress-D8k06NHD.js";const Yt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var e,i,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
