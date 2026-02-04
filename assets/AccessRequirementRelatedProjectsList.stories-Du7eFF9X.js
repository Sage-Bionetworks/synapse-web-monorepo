import{n as o,b as n,O as a,H as c}from"./iframe-CjPdK8o3.js";import{A as m}from"./AccessRequirementRelatedProjectsList-_ongfaMA.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DzysjAS8.js";import"./index-DUxszvjk.js";import"./_baseOrderBy-BWPI49fO.js";import"./_baseIteratee-BgCPnYOG.js";import"./_baseMap-CI1anwhT.js";import"./_baseEach-Dk-toVaC.js";import"./useQueries-Dr4qOk9C.js";import"./useInfiniteQuery-CmFbqkY3.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-9vetazXG.js";import"./useEntity-CWLVTGdY.js";import"./pickBy-Bfv3J4LC.js";import"./isString-BzCX1oQo.js";import"./useSuspenseQuery-B-tj7iZo.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-tZBriJuW.js";import"./useGetEntityHeaders-C9iRnJPu.js";import"./EntityIcon-Dresg0YV.js";import"./ErrorChip-DpyjKwR8.js";import"./Chip-CTyQGhqc.js";import"./ListItem-BdnPXKUa.js";import"./listItemButtonClasses-4mF2oHoZ.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
