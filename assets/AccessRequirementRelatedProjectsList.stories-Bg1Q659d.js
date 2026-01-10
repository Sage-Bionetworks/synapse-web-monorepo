import{n as o,b as n,O as a,H as c}from"./iframe-BulltPlS.js";import{A as m}from"./AccessRequirementRelatedProjectsList-BtogzifP.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CaLt4H2F.js";import"./index-cwz30I0r.js";import"./_baseOrderBy-BF5JbbBu.js";import"./_baseIteratee-ypnnxg3G.js";import"./_baseMap-D-3mppFr.js";import"./_baseEach-rWqQ2DGz.js";import"./useQueries-CWxE_GlV.js";import"./useInfiniteQuery-pUjrcR8S.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-BefyLgsH.js";import"./useEntity-BiGeOlwx.js";import"./pickBy-5lAUttHe.js";import"./isString-CghkokNG.js";import"./useSuspenseQuery-BZkq8k4a.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DtiXNmfa.js";import"./useGetEntityHeaders-DIZD46j1.js";import"./EntityIcon-l5C315up.js";import"./ErrorChip-BET0LyWL.js";import"./Chip-CTw5NN0f.js";import"./ListItem-DA8rVcGY.js";import"./listItemButtonClasses-DDru6bL7.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
