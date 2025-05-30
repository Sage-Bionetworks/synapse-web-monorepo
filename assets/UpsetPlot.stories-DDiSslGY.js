import{U as L}from"./UpsetPlot-BP_Aoydv.js";import{f as u}from"./index-CfK26ETT.js";import"./jsx-runtime-BShfRpSZ.js";import"./index-BbtDhika.js";import"./iframe-CKrYTaKd.js";import"./LargeButton-L_rPSa1h.js";import"./DefaultPropsProvider-cSSWhC_N.js";import"./createTheme-DKmxwRcy.js";import"./Button-C3bos-pW.js";import"./ButtonBase-ClE2TfhF.js";import"./useTimeout-k-gMJ94D.js";import"./TransitionGroupContext-Cve-nvmp.js";import"./useForkRef-IOZ1OulF.js";import"./useIsFocusVisible-Dks7CKXr.js";import"./useEventCallback-jwq_ByoI.js";import"./useFiles-PZ8-Ka-K.js";import"./VerificationSubmission-BI5WaB2N.js";import"./SynapseConstants-D-g__08a.js";import"./OrientationBanner-Cvk0vZwz.js";import"./index-N1kOmd9H.js";import"./spreadSx-CwcO6WA9.js";import"./react-HYFTtNt4.js";import"./FullWidthAlert-D-sxDN5-.js";import"./Alert-C2YXBWCZ.js";import"./resolveComponentProps-BVwZEvDc.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-hcVlY0Ml.js";import"./Close-DBkHOwqb.js";import"./IconButton-5km8qVSa.js";import"./Paper-Bm29IVK3.js";import"./Stack-COuT9-_l.js";import"./getThemeProps-DEq8Zk9I.js";import"./useTheme-DuVt1FxG.js";import"./Box-CWd-bsj8.js";import"./AlertTitle-D7VJteKH.js";import"./Typography-D596ILSX.js";import"./useTheme-BKtsw1fM.js";import"./Grow-DArXpOEh.js";import"./index-C2ZmoJQv.js";import"./utils-JiBfP0T-.js";import"./ClickAwayListener-DJDrwr3D.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BhjMsB6i.js";import"./index-CmWQNtGo.js";import"./useControlled-BNOR6_Pf.js";import"./useId-C10K-7yC.js";import"./Popper-BEhyKRxf.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-DN6u4g4A.js";import"./useQuery-BY-c2cTp.js";import"./utils-BIdFCP2Y.js";import"./Link-BR06mnNh.js";import"./Collapse-D4OMLybv.js";import"./isNil-9z8ZomJ0.js";import"./_Uint8Array-DIVOU-2-.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CHy9fFvj.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-ClNnW1Hu.js";import"./_getTag-l16BreDv.js";import"./tinycolor-Begke6kS.js";import"./Fade-RO7PwX5V.js";import"./Skeleton-CB5rBUhd.js";import"./inputBaseClasses-C06Dmsts.js";import"./calculateFriendlyFileSize-Hpnh_yqR.js";import"./CheckCircleTwoTone-ly2iPN9C.js";import"./InfoTwoTone-CEeh4CzQ.js";import"./mutation-Br5mjHBF.js";import"./dayjs.min-D0qkn3AN.js";import"./chunk-AYJ5UCUI-D7I6sN6G.js";import"./cloneDeep-DpCux0qf.js";import"./_initCloneObject-wn-R8NIZ.js";import"./isEqual-CVkRzbJy.js";import"./merge-BWGd7Swl.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-DJ9aEy1v.js";import"./react-sizeme-BL1FjqOs.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-Bvw3bg3i.js";import"./Backdrop-DRLFuN1U.js";import"./LinearProgress-NYRjj-4y.js";const Yt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var e,i,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
