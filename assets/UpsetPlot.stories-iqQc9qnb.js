import{U as L}from"./UpsetPlot-DPrQ9aRc.js";import{f as u}from"./index-Bav4eJwc.js";import"./jsx-runtime-BRZS3XqV.js";import"./index-CocunraB.js";import"./iframe-DYt3ChXB.js";import"./LargeButton-8YHPnZsb.js";import"./DefaultPropsProvider-DnSfdlzo.js";import"./createTheme-CGRZ8lhJ.js";import"./Button-DawLv5b0.js";import"./ButtonBase-C8J7qx50.js";import"./useTimeout-DD2fy9Gt.js";import"./TransitionGroupContext-CzgTvDz_.js";import"./useForkRef-CwaqtBp7.js";import"./useIsFocusVisible-DrjNToTJ.js";import"./useEventCallback-V5MPUxUC.js";import"./useFiles-DT6hcIL5.js";import"./VerificationSubmission-DHPhgAH7.js";import"./SynapseConstants-Bn0ZfuPv.js";import"./OrientationBanner-Cej92lXT.js";import"./index-BVWcfbtT.js";import"./spreadSx-CwcO6WA9.js";import"./react--z23vKgd.js";import"./FullWidthAlert-DenfhEqP.js";import"./Alert-BzQ3w-i2.js";import"./resolveComponentProps-B7kow99E.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-DrSrpjUE.js";import"./Close-D48z0Brg.js";import"./IconButton-DnEI_ZVS.js";import"./Paper-B_miGDM5.js";import"./Stack-Cm7eDOYX.js";import"./getThemeProps-B5VTfPhr.js";import"./useTheme-Cmuf7htp.js";import"./Box-DAkKAoja.js";import"./AlertTitle-At8nRksm.js";import"./Typography-B5nvwako.js";import"./useTheme-BGfrpkOf.js";import"./Grow-DfpdITPV.js";import"./index-DEq8PKf6.js";import"./utils-CyklZQon.js";import"./ClickAwayListener-BNIu3AiL.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-Cd9QzmBG.js";import"./index-D0zZwq32.js";import"./useControlled-9lBX7zRL.js";import"./useId-DmpfYdh3.js";import"./Popper-DSp1FeIG.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-Bj0SG9ce.js";import"./useQuery-_ws85yL5.js";import"./utils-Dz9cxE1U.js";import"./Link-CNEgPUo2.js";import"./Collapse-CZFNRH1o.js";import"./isNil-Cw5qWwbI.js";import"./_Uint8Array-BL-Me88q.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-Ch1jIX1x.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-XMcuzNdJ.js";import"./_getTag-GUncnsoi.js";import"./tinycolor-Begke6kS.js";import"./Fade-CoSzwWpP.js";import"./Skeleton-BUNW0s0t.js";import"./inputBaseClasses-DhLGEEvE.js";import"./calculateFriendlyFileSize-CDRjbozM.js";import"./CheckCircleTwoTone-DBPw0BfE.js";import"./InfoTwoTone-ciM6HWp8.js";import"./useMutation-meEtlnbI.js";import"./isEqual-e2b-ZfBh.js";import"./dayjs.min-BI6axHk4.js";import"./chunk-AYJ5UCUI-BzOTHJcD.js";import"./cloneDeep-G1XxhtGs.js";import"./_initCloneObject-DWORq14n.js";import"./merge-DhlXzTQF.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-DhoAZ_qc.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-Dimmzl9G.js";import"./Backdrop-0nOgrklK.js";import"./LinearProgress-DwR8Rp2R.js";import"./index-m7WBZR67.js";import"./index-C5IClwGA.js";import"./const-Doag8klc.js";import"./index-B3ASDO3F.js";const jt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
