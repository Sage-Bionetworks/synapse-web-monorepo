import{U as L}from"./UpsetPlot-DKKNINNb.js";import{f as u}from"./index-BoHULKJ_.js";import"./jsx-runtime-CZmUC0kc.js";import"./index-D48dKAGK.js";import"./iframe-DXxs8wzV.js";import"./LargeButton-DyZytXBh.js";import"./DefaultPropsProvider-DnsYkYhu.js";import"./createTheme-DdUHwKDu.js";import"./Button-CYaahIbs.js";import"./ButtonBase-DijL8LGZ.js";import"./useTimeout-CfJSgBAN.js";import"./TransitionGroupContext-xk93-I-l.js";import"./useForkRef-B4VymO4y.js";import"./useIsFocusVisible-pZRnHMmE.js";import"./useEventCallback-CfXeTH2v.js";import"./useFiles-QsHV2q1R.js";import"./VerificationSubmission-DHPhgAH7.js";import"./SynapseConstants-BtQ24Nut.js";import"./OrientationBanner-Bqf4PnT9.js";import"./index-Bqph6avf.js";import"./spreadSx-CwcO6WA9.js";import"./react-DnH3PGz_.js";import"./FullWidthAlert-WrZ35eIA.js";import"./Alert-CrX7ZBHc.js";import"./resolveComponentProps-DBk_bQ3w.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-CGfU68f8.js";import"./Close-B2Put2a1.js";import"./IconButton-MNk6eaK_.js";import"./Paper-BWc9QIn7.js";import"./Stack-s10dd2v_.js";import"./getThemeProps-DpFYsVdH.js";import"./useTheme-Cdkd9-zl.js";import"./Box-EZ-Kz8mO.js";import"./AlertTitle-qABI-vcz.js";import"./Typography-CDDEj6bd.js";import"./useTheme-CDkkRwMy.js";import"./Grow-DPoxz4OE.js";import"./index-CTlj-uEa.js";import"./utils-BgEZDT5t.js";import"./ClickAwayListener-CyT30qp6.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-B0EkgW6k.js";import"./index-7Uf9BQgU.js";import"./useControlled-DZ97s39z.js";import"./useId-Buvf4Xiv.js";import"./Popper-DgH4d2MR.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-Bj0SG9ce.js";import"./useQuery-DWbROD4e.js";import"./utils-DnrSKvOR.js";import"./Link-Cbjql7oX.js";import"./Collapse-DQpZ3-gN.js";import"./isNil-BEj-5XkN.js";import"./_Uint8Array-K-J4cL1T.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DKyqGUYf.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-DH-XEyfw.js";import"./_getTag-CYk1drFw.js";import"./tinycolor-Begke6kS.js";import"./Fade-B1FcSJEt.js";import"./Skeleton-DJgc57tZ.js";import"./inputBaseClasses-DcQwlFr_.js";import"./calculateFriendlyFileSize-9m6yHg2A.js";import"./CheckCircleTwoTone-BY4FzlSL.js";import"./InfoTwoTone-DL9tebAy.js";import"./useMutation-hkATgPdp.js";import"./isEqual-b23C5zIw.js";import"./dayjs.min-DlNJuh2r.js";import"./chunk-AYJ5UCUI-S23a5Wq1.js";import"./cloneDeep-hNZImc-4.js";import"./_initCloneObject-02v0DsxF.js";import"./merge-Dd1BqavR.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-DhoAZ_qc.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-D87YH2JH.js";import"./Backdrop-Bmsj-0DB.js";import"./LinearProgress-Cfy2pows.js";import"./index-lplRYZJ1.js";import"./index-CMsUhWEo.js";import"./const-Doag8klc.js";import"./index-fM41Y96t.js";const jt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
