import{n as o,b as n,O as a,H as c}from"./iframe-PKSisnYN.js";import{A as m}from"./AccessRequirementRelatedProjectsList-bk6qDlqc.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-e8wgHzax.js";import"./index-CHPH14xa.js";import"./_baseOrderBy-DCBrsFDV.js";import"./_baseIteratee-BO3lWvKN.js";import"./_baseMap-B9PYQd7E.js";import"./_baseEach-AR43v03m.js";import"./useQueries-DE5yqSSH.js";import"./useInfiniteQuery-CbKeCSex.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-MAyBMZb8.js";import"./useEntity-Cv_M5zHw.js";import"./pickBy-CEueLmq4.js";import"./isString-DLYReQSx.js";import"./useSuspenseQuery-CtKV56yt.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-nzc7WWYK.js";import"./useGetEntityHeaders-CHOwKBOC.js";import"./EntityIcon-d3F8ZSA_.js";import"./ErrorChip-CJNTYMtm.js";import"./Chip-BQb8GEui.js";import"./ListItem-Rh9ybIpc.js";import"./listItemButtonClasses-CQsaMkk1.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
