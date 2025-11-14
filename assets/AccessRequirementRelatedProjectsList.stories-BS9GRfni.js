import{n as u,b as l,O as j,H as P}from"./iframe-BnETViYe.js";import{A as I}from"./AccessRequirementRelatedProjectsList-qo4L6Zur.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-Iv4cG14S.js";import"./index-DAJANqDt.js";import"./_baseOrderBy-B6I-T1FN.js";import"./_baseIteratee-ClPPPdqy.js";import"./_baseMap-BS8DVFvS.js";import"./_baseEach-UM9MKom9.js";import"./useQueries-CZq_142Z.js";import"./useInfiniteQuery-C73-i-7k.js";import"./pluralize-Dtp1DlEB.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./EntityLink-BSm1IRxU.js";import"./useEntity-C6p_NrjE.js";import"./pickBy-CsRlTggi.js";import"./isString-DbDKXoQd.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DZsIq2C9.js";import"./useGetEntityHeaders-C5V4GIOr.js";import"./EntityIcon-ey8-Culf.js";import"./ErrorChip-Bs4RNhmp.js";import"./Chip-7gWmkBqZ.js";import"./ListItem-P2Kn5T0k.js";import"./listItemButtonClasses-BfL6-Aoa.js";const Q={title:"Governance/AccessRequirementRelatedProjectsList",component:I},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[u.post(`${l}${j}`,()=>{const R={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return P.json(R,{status:200})})]}}};var s,o,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
