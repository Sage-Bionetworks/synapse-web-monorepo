import{n as u,b as l,O as j,H as P}from"./iframe-DuUClhsc.js";import{A as I}from"./AccessRequirementRelatedProjectsList-Bi2O9fHZ.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-CixKZePK.js";import"./index-DotbbxLs.js";import"./_baseOrderBy-D4lrjUmZ.js";import"./_baseIteratee-BmViwUWH.js";import"./_baseMap-kYERsGcq.js";import"./_baseEach-YhHACzfI.js";import"./useQueries-C-pf41ja.js";import"./useInfiniteQuery-DgaFpXmy.js";import"./pluralize-Dtp1DlEB.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./EntityLink-CdtAVP-n.js";import"./useEntity-DKAM6L6-.js";import"./pickBy-CNJKHgGV.js";import"./isString-cuuc2ObN.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-uakqbPTl.js";import"./useGetEntityHeaders-DkKHY6Uk.js";import"./EntityIcon-D5S5pctT.js";import"./ErrorChip-D_mwStiu.js";import"./Chip-Do2OA_d6.js";import"./ListItem-DZ976fkW.js";import"./listItemButtonClasses-DZdI3jEo.js";const Q={title:"Governance/AccessRequirementRelatedProjectsList",component:I},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[u.post(`${l}${j}`,()=>{const R={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return P.json(R,{status:200})})]}}};var s,o,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9603055
  }
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var a,c,m;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9605913
  }
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var i,p,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 1234567
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [
      // searchAccessRequirements
      http.post(\`\${MOCK_REPO_ORIGIN}\${ACCESS_REQUIREMENT_SEARCH}\`, () => {
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
        return HttpResponse.json(zeroRelatedProjects, {
          status: 200
        });
      })]
    }
  }
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const U=["ManyProjects","OneProject","ZeroProjectsMock"];export{e as ManyProjects,r as OneProject,t as ZeroProjectsMock,U as __namedExportsOrder,Q as default};
