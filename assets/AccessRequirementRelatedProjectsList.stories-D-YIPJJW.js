import{n as o,b as n,Q as a,H as c}from"./iframe-D1nGOIH-.js";import{A as m}from"./AccessRequirementRelatedProjectsList-BbwuRyay.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CTJs9P0Q.js";import"./index-03zVvH3U.js";import"./_baseOrderBy-CVK5KDR5.js";import"./_baseIteratee-DMGufiEs.js";import"./_baseMap-CCrqr-lv.js";import"./_baseEach-CIEMg2cY.js";import"./useQueries-B9MwPHmO.js";import"./useInfiniteQuery-BoAhb982.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-D_cpTWLM.js";import"./useEntity-BOi8Tjp5.js";import"./pickBy-CtojyeyU.js";import"./isString-Bz27LlTZ.js";import"./useSuspenseQuery-a9uGkD3u.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CJm8sVKX.js";import"./useGetEntityHeaders-Dk2aeL6L.js";import"./EntityIcon-CZzzLQxi.js";import"./ErrorChip-C5tJaf51.js";import"./Chip-BUJWntqC.js";import"./ListItem-DPbOfcdh.js";import"./listItemButtonClasses-BWGNlQvP.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
