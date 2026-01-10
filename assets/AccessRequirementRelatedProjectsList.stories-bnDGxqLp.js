import{n as o,b as n,O as a,H as c}from"./iframe-DtOCV9ZO.js";import{A as m}from"./AccessRequirementRelatedProjectsList-aVwpHKUc.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CnF7zoc9.js";import"./index-CtezEvjc.js";import"./_baseOrderBy-Bbv9ZUQX.js";import"./_baseIteratee-BeERohTt.js";import"./_baseMap-CPsPgwJJ.js";import"./_baseEach-Cu1g2duW.js";import"./useQueries-6xM6HhA6.js";import"./useInfiniteQuery-BrzIGqoa.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-Bvk7WOpu.js";import"./useEntity-B3UI8wvz.js";import"./pickBy-BZq1ALQx.js";import"./isString-DEn23QUL.js";import"./useSuspenseQuery-SVjMJt8R.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-HsFiPHD1.js";import"./useGetEntityHeaders-BaSvgf7u.js";import"./EntityIcon-BbaflQf2.js";import"./ErrorChip-DAUxKXFM.js";import"./Chip-Br7md4nX.js";import"./ListItem-Cj4hV5OB.js";import"./listItemButtonClasses-WkkuZrVR.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9603055
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9605913
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const y=["ManyProjects","OneProject","ZeroProjectsMock"];export{e as ManyProjects,r as OneProject,t as ZeroProjectsMock,y as __namedExportsOrder,H as default};
