import{n as u,b as l,O as j,H as P}from"./iframe-B9o6ulgU.js";import{A as I}from"./AccessRequirementRelatedProjectsList-CCey3ceT.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-BB2-4oS9.js";import"./index-Cr_TSGSN.js";import"./_baseOrderBy-BiyKeECO.js";import"./_baseIteratee-CBt9dape.js";import"./_baseMap-C229BfOD.js";import"./_baseEach-BoVOpmuL.js";import"./useQueries-C3uV33GD.js";import"./useInfiniteQuery-kNzCWB85.js";import"./pluralize-Dtp1DlEB.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./EntityLink-DYKLrEtR.js";import"./useEntity-5a0SBMIF.js";import"./pickBy-CfdE4eqp.js";import"./isString-C-D2gbfq.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-4AaPqvkr.js";import"./useGetEntityHeaders-DPQZXzWu.js";import"./EntityIcon-CKkZ9bqn.js";import"./ErrorChip-CGI8uygo.js";import"./Chip-BZa4nVPR.js";import"./ListItem-BxuoG3sj.js";import"./listItemButtonClasses-CSkNAwo0.js";const Q={title:"Governance/AccessRequirementRelatedProjectsList",component:I},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[u.post(`${l}${j}`,()=>{const R={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return P.json(R,{status:200})})]}}};var s,o,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
