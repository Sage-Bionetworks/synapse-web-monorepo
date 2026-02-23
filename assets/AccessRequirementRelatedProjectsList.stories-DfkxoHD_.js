import{n as o,b as n,Q as a,H as c}from"./iframe-81JeKJJY.js";import{A as m}from"./AccessRequirementRelatedProjectsList-t0czktDd.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-Bz_10GRb.js";import"./index-hxZfLxrn.js";import"./_baseOrderBy-BwCykfFi.js";import"./_baseIteratee-lj1Fn_3g.js";import"./_baseMap-D7XNcdNx.js";import"./_baseEach-BIYGB8bs.js";import"./useQueries-DsAAcLRN.js";import"./useInfiniteQuery-Du-dGdgl.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-Dv7-Txap.js";import"./useEntity-Cz5Bw4rt.js";import"./pickBy-Bl67QIhz.js";import"./isString-C4Ei_WmE.js";import"./useSuspenseQuery-CSCSqsGh.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BiUzTEC2.js";import"./useGetEntityHeaders-BV3dGKRO.js";import"./EntityIcon-Slwo7vvz.js";import"./ErrorChip-9stTafPp.js";import"./Chip-BUhAw0AO.js";import"./ListItem-DwgOBYpm.js";import"./listItemButtonClasses-BsodkClp.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
