import{z as u,b as e,o as d,s,kq as i,kr as c,H as t,ks as R,i as m,kt as E,ku as _,a0 as I,dH as S,k9 as O}from"./iframe-Bq2Ob2aK.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-DcJnY7MS.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-h5tw2wPz.js";import"./useAccessRequirements-Cwq9BJw7.js";import"./index-BURFaEcg.js";import"./_baseOrderBy-DJEDLbih.js";import"./_baseIteratee-CN9fj1bw.js";import"./_baseMap-D4oR6jyW.js";import"./_baseEach-BB0shV65.js";import"./useInfiniteQuery-Ds4aQTI9.js";import"./groupBy-UkkrJNDD.js";import"./_createAggregator-WaSn0SUK.js";import"./DialogBase-94P046rC.js";import"./Close-UeiWMwwR.js";import"./HelpPopover-CG_-BC6G.js";import"./MarkdownPopover-CtjBz5l1.js";import"./LightTooltip-CzYg_hTr.js";import"./MarkdownSynapse-Dhzef1qm.js";import"./SkeletonButton-BGK0wFQC.js";import"./SkeletonInlineBlock-CmYjNg7h.js";import"./SkeletonTable-BBXhhxxV.js";import"./SkeletonParagraph-LdyaQqI_.js";import"./EntityLink-BdISe9bg.js";import"./useEntity-RdLrWF5v.js";import"./pickBy-CIbwfc1B.js";import"./isString-BbppNPY9.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CjWODRIC.js";import"./useGetEntityHeaders-CyCqMn0A.js";import"./EntityIcon-CSep5-eN.js";import"./ErrorChip-T8KMO9AH.js";import"./Chip-6y5YmXDt.js";import"./UserOrTeamBadge-B7wn485n.js";import"./UserBadge-ByqebRvh.js";import"./useUserBundle-BEHCcl1q.js";import"./MenuItem-QKEL9EzE.js";import"./Card-CpWT9_D-.js";import"./TeamBadge-NocTKWyL.js";import"./UnmanagedACTAccessRequirementItem-CWtBf7sp.js";import"./RequirementItem-bE_wza0O.js";import"./CheckTwoTone-D2Tgw_Ze.js";import"./ManagedACTAccessRequirementItemView-JQ64TkTL.js";import"./SelfSignAccessRequirementItem-CKf_Tiet.js";import"./DataAccessRequestAccessorsFilesForm-DraEJu7P.js";import"./enums-BFgsakBj.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-BgZaMtMO.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-6p2luA4E.js";import"./UserSearchBox-DIGANnd0.js";import"./useDebouncedEffect-C8Aqitb2.js";import"./Autocomplete-09y2S2VY.js";import"./usePreviousProps-DZM5n9-N.js";import"./RadioGroup-5LCSUqsC.js";import"./Radio-BwaWw5Pp.js";import"./SwitchBase-C5-igteL.js";import"./FormGroup-C_b7b_WO.js";import"./FormControlLabel-HJWDlDWs.js";import"./UploadDocumentField-DrsqFwBD.js";import"./FileUpload-C6mXCbp_.js";import"./ManagedACTAccessRequirementFormWikiWrapper-CuxxDwNA.js";import"./GridLegacy-Gvkq71cg.js";import"./ResearchProjectForm-zmPJg85O.js";import"./TextFieldWithWordLimit-DYkfgz9r.js";import"./AuthenticatedRequirement-B2zjUvyK.js";import"./CertificationRequirement-CWGZ_yWj.js";import"./TwoFactorAuthEnabledRequirement-B2j1ycX_.js";import"./ValidationRequirement-Bwkob_MO.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-yUvWlD6w.js";import"./RejectDataAccessRequestModal-CyDXSOGy.js";import"./CannedRejectionDialog-CvhmEUmh.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-Bu-Eb5tt.js";import"./Checkbox-1GF_U2bt.js";import"./Grid-Bly1A-LN.js";import"./upperFirst-5ejbxxNy.js";import"./_stringToArray-Cp_JKiQw.js";const xe={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),s.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return t.json(a,{status:200})}),s.get(`${e}${R(":id")}`,()=>t.json(m,{status:200})),s.get(`${e}${E(":id")}`,()=>t.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),s.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>t.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),s.put(`${e}${i(":id")}`,async({request:r})=>t.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[s.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return t.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'SubmissionPage',
  loaders: [() => registerTableQueryResult({
    sql: \`SELECT * FROM \${REJECT_SUBMISSION_CANNED_RESPONSES_TABLE}\`
  }, mockRejectionReasonsTableQueryResultBundle)],
  parameters: {
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getWikiHandlers(MOCK_REPO_ORIGIN),
      // Return submission based on ID
      http.get(\`\${MOCK_REPO_ORIGIN}\${DATA_ACCESS_SUBMISSION_BY_ID(':id')}\`, ({
        params
      }) => {
        const submission = mockSubmissions.find(submission => params.id === submission.id);
        return HttpResponse.json(submission, {
          status: 200
        });
      }),
      // Return a mocked access requirement
      http.get(\`\${MOCK_REPO_ORIGIN}\${ACCESS_REQUIREMENT_BY_ID(':id')}\`, () => {
        return HttpResponse.json(mockManagedACTAccessRequirement, {
          status: 200
        });
      }), http.get(\`\${MOCK_REPO_ORIGIN}\${ACCESS_REQUIREMENT_WIKI_PAGE_KEY(':id')}\`, () => {
        return HttpResponse.json({
          wikiPageId: 123,
          ownerObjectId: mockManagedACTAccessRequirement.id,
          ownerObjectType: 'ACCESS_REQUIREMENT'
        }, {
          status: 200
        });
      }), http.get<{
        id: string;
      }>(\`\${MOCK_REPO_ORIGIN}/repo/v1/accessRequirement/:id/acl\`, ({
        params
      }) => {
        return HttpResponse.json({
          id: params.id,
          creationDate: '2022-05-20T14:32:31.665Z',
          etag: 'f4fbd4f2-751d-40dd-9421-1d2693231217',
          resourceAccess: [{
            principalId: MOCK_USER_ID_2,
            accessType: ['REVIEW_SUBMISSIONS']
          }]
        }, {
          status: 200
        });
      }), ...getHandlersForTableQuery(MOCK_REPO_ORIGIN), http.put(\`\${MOCK_REPO_ORIGIN}\${DATA_ACCESS_SUBMISSION_BY_ID(':id')}\`, async ({
        request
      }) => {
        return HttpResponse.json(await request.json(), {
          status: 201
        });
      })]
    }
  },
  args: {
    isReviewer: true,
    submissionId: 1
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Demo Error State',
  parameters: {
    msw: {
      handlers: [http.get(\`\${MOCK_REPO_ORIGIN}\${DATA_ACCESS_SUBMISSION_BY_ID(':id')}\`, () => {
        const errorResponse: ErrorResponse = {
          reason: 'The user must be validated in order to review data access submissions.',
          concreteType: 'org.sagebionetworks.repo.model.ErrorResponse'
        };
        return HttpResponse.json(errorResponse, {
          status: 403
        });
      })]
    }
  },
  args: {
    isReviewer: true,
    submissionId: 9999
  }
}`,...n.parameters?.docs?.source}}};const Je=["Demo","DemoError"];export{o as Demo,n as DemoError,Je as __namedExportsOrder,xe as default};
