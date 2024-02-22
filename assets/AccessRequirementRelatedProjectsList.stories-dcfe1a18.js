import{A as j}from"./AccessRequirementRelatedProjectsList-06ed3ddd.js";import{M as P}from"./getEndpoint-ac94413e.js";import{l as I}from"./index-1d3e3937.js";import{c as g}from"./SynapseClient-5617d165.js";import"./jsx-runtime-9dc53467.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./OrientationBanner-a1ca5cdb.js";import"./FullWidthAlert-706fe840.js";import"./Alert-c3fe2b05.js";import"./styled-3c6f4d83.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./createSvgIcon-396e3e24.js";import"./Paper-411d859b.js";import"./IconButton-f820fa46.js";import"./ButtonBase-8587e55b.js";import"./emotion-react.browser.esm-5fddd3df.js";import"./TransitionGroupContext-e6fd87c7.js";import"./useForkRef-8feb2ebf.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./useIsFocusVisible-18cd238e.js";import"./Stack-4eda368b.js";import"./extendSxProp-1372051e.js";import"./Box-8faf86fd.js";import"./AlertTitle-aeea0d59.js";import"./Typography-1d068b0b.js";import"./useTheme-e79ecbc0.js";import"./Grow-c431c788.js";import"./isHostComponent-fa76b8d9.js";import"./index-d3ea75b5.js";import"./utils-6fa73630.js";import"./ClickAwayListener-3b20c94f.js";import"./Tooltip-801f2a9c.js";import"./Button-33299b2c.js";import"./useAccessRequirements-bfdd3d39.js";import"./useMutation-0086f62e.js";import"./useQueries-fa0e18e3.js";import"./useInfiniteQuery-7807cef7.js";import"./useMediaQuery-009aa540.js";import"./sortBy-b77ea840.js";import"./_baseIteratee-bfdf7715.js";import"./_getAllKeys-70546490.js";import"./isArray-5e3f9107.js";import"./_Uint8Array-595ed3dd.js";import"./_Map-02912bad.js";import"./_baseTimes-8715be3e.js";import"./_getTag-545f1420.js";import"./_getMatchData-5ace0f87.js";import"./_cacheHas-cc8fa475.js";import"./_setToArray-3d6ec6fd.js";import"./isSymbol-7c514724.js";import"./toString-cc90cb98.js";import"./identity-46f208ab.js";import"./_baseFor-d254fa1e.js";import"./_baseRest-a17404df.js";import"./_overRest-54674ae8.js";import"./_isIterateeCall-984cc862.js";import"./EntityLink-2a1e0304.js";import"./useEntity-f56cb1ec.js";import"./isEqualWith-86a8a0b7.js";import"./pick-e2ff1673.js";import"./_baseIndexOf-c808ca38.js";import"./toInteger-8c467ff1.js";import"./_baseClone-5d6e0823.js";import"./_initCloneObject-b3d76b79.js";import"./_baseSlice-cf92e063.js";import"./isPlainObject-9a905694.js";import"./InfiniteQueryUtils-54ae7e6b.js";import"./useGetEntityHeaders-a5cfd4b8.js";import"./EntityIcon-b8cfc2f7.js";import"./index-3a31b023.js";import"./IconSvg-a7217c47.js";import"./ErrorOutlined-6f3ac166.js";import"./GetAppTwoTone-d672483d.js";import"./InfoOutlined-e9da64e0.js";import"./CheckCircleTwoTone-c37d81c7.js";import"./ErrorChip-b71597ae.js";import"./Chip-c99cf170.js";import"./Avatar-47fe5841.js";import"./useSlot-14db1f32.js";import"./Link-6ae0d01e.js";import"./Skeleton-131bd473.js";import"./pluralize-9f2b9a2f.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./List-a6975dc7.js";import"./ListItem-55cd17a8.js";import"./listItemButtonClasses-a2f1e990.js";import"./isMuiElement-bce4c331.js";import"./util-1969ce74.js";import"./index-17a77bb8.js";import"./SynapseConstants-6baf84cd.js";import"./InfoTwoTone-b17047a2.js";import"./inputBaseClasses-034b6b96.js";import"./Fade-240af196.js";import"./StringUtils-2ea3ab4d.js";import"./dayjs.min-f79c4412.js";import"./index-9d475cdf.js";import"./tiny-invariant-dd7d57d2.js";const dt={title:"Governance/AccessRequirementRelatedProjectsList",component:j},r={args:{accessRequirementId:9603055}},t={args:{accessRequirementId:9605913}},o={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[I.rest.post(`${P}${g}`,async(A,u,e)=>{const l={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return u(e.status(200),e.json(l))})]}}};var m,i,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9603055
  }
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var s,a,n;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9605913
  }
}`,...(n=(a=t.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var c,d,R;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 1234567
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [
      // searchAccessRequirements
      rest.post(\`\${MOCK_REPO_ORIGIN}\${ACCESS_REQUIREMENT_SEARCH}\`, async (req, res, ctx) => {
        const zeroRelatedProjects = {
          results: [{
            id: '1234567',
            type: 'org.sagebionetworks.repo.model.ManagedACTAccessRequirement',
            createdOn: '2017-08-23T18:48:20.892Z',
            modifiedOn: '2023-12-14T00:43:41.315Z',
            name: 'Team AR without Related Projects',
            version: '1',
            relatedProjectIds: [],
            reviewerIds: []
          }]
        };
        return res(ctx.status(200), ctx.json(zeroRelatedProjects));
      })]
    }
  }
}`,...(R=(d=o.parameters)==null?void 0:d.docs)==null?void 0:R.source}}};const Rt=["ManyProjects","OneProject","ZeroProjectsMock"];export{r as ManyProjects,t as OneProject,o as ZeroProjectsMock,Rt as __namedExportsOrder,dt as default};
