import{n as o,b as n,O as a,H as c}from"./iframe-Bvh78Lip.js";import{A as m}from"./AccessRequirementRelatedProjectsList-CyPfkGte.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BtrKoIEU.js";import"./index-C5Az4rP9.js";import"./_baseOrderBy-Dpgrbaku.js";import"./_baseIteratee-CMAOpFF8.js";import"./_baseMap-Ba9XjSMD.js";import"./_baseEach-BEegoy1c.js";import"./useQueries-C_spzrWe.js";import"./useInfiniteQuery-Bs48Hq-k.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-CzlmBAmZ.js";import"./useEntity-DMQV6cN8.js";import"./pickBy-DHB3DoRP.js";import"./isString-DcoLED5O.js";import"./useSuspenseQuery-Bos4-4YQ.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-ZTP8hW3j.js";import"./useGetEntityHeaders-Bx8psGQr.js";import"./EntityIcon-B75MdgAf.js";import"./ErrorChip-Djs8R74t.js";import"./Chip-BCnYHX9c.js";import"./ListItem-B-yciqvL.js";import"./listItemButtonClasses-BKblHEER.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
