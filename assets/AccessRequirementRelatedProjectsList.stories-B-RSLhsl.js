import{n as o,b as n,Q as a,H as c}from"./iframe-BEF4MEGo.js";import{A as m}from"./AccessRequirementRelatedProjectsList-BXwESWyF.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-B0-4Za3Z.js";import"./index-CPBFcEpw.js";import"./_baseOrderBy-ClP2j4Ii.js";import"./_baseIteratee-HJwSZeSD.js";import"./_baseMap-BNCMHn69.js";import"./_baseEach-DFsFxJY1.js";import"./useInfiniteQuery-DIn0P7iw.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-Bho8fsrv.js";import"./useEntity-DdNYsGui.js";import"./pickBy-DiCMKNkD.js";import"./isString-CNlkU8gZ.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BKjAM-VU.js";import"./useGetEntityHeaders-TWuXyZ8-.js";import"./EntityIcon-DoO3NrCy.js";import"./ErrorChip-CGfYS3si.js";import"./Chip-Cww2ggjY.js";import"./ListItem-B6o86zKv.js";import"./listItemButtonClasses-BgbB4LY1.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const v=["ManyProjects","OneProject","ZeroProjectsMock"];export{e as ManyProjects,r as OneProject,s as ZeroProjectsMock,v as __namedExportsOrder,f as default};
