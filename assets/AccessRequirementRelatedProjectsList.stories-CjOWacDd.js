import{s as o,b as n,O as a,H as c}from"./iframe-CZUUdnAP.js";import{A as m}from"./AccessRequirementRelatedProjectsList-D90kOfmx.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DPho3mft.js";import"./index-fDzCYU54.js";import"./_baseOrderBy-BEqEe8Uq.js";import"./_baseIteratee-Cu60_Mvy.js";import"./_baseMap-CIeYxFCy.js";import"./_baseEach-DAbWNnVh.js";import"./useInfiniteQuery-C_MyS1FN.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-BE6ulM2T.js";import"./useEntity-CGzWG93n.js";import"./pickBy-BKwcq0Ux.js";import"./isString-d6qttKaI.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BHKutWda.js";import"./useGetEntityHeaders-DvZS3_9x.js";import"./EntityIcon-9wntPtel.js";import"./ErrorChip-CtvIgHRg.js";import"./Chip-vSFEg4gP.js";import"./ListItem-CgE_p33y.js";import"./listItemButtonClasses-DUz4wm5w.js";const v={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9603055
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9605913
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const H=["ManyProjects","OneProject","ZeroProjectsMock"];export{e as ManyProjects,r as OneProject,s as ZeroProjectsMock,H as __namedExportsOrder,v as default};
