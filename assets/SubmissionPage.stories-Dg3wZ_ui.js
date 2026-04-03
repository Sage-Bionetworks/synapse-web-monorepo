import{z as d,b as e,o as u,s,kp as i,kq as c,H as t,kr as R,i as m,ks as E,kt as _,a0 as I,dG as S,k8 as O}from"./iframe-BwdMKcfW.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-CaddxKsh.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-CKPxbUDi.js";import"./useAccessRequirements-DswR_YxC.js";import"./index-DPZa-GBy.js";import"./_baseOrderBy-DLgIa6mW.js";import"./_baseIteratee-VD_UmMwY.js";import"./_baseMap-CCHmg080.js";import"./_baseEach-e-P7ukc6.js";import"./useInfiniteQuery-BjFBPSmE.js";import"./groupBy-D0PcZ0TB.js";import"./_createAggregator-CSp8A1mF.js";import"./DialogBase-BFX7NXuk.js";import"./Close-CCUUydcy.js";import"./HelpPopover-CYbiM6iC.js";import"./MarkdownPopover-DR3WgxmO.js";import"./LightTooltip-C5q6jm3B.js";import"./MarkdownSynapse-N8osBNe-.js";import"./SkeletonButton-DUX7R0sB.js";import"./SkeletonInlineBlock-CGQ5Gfg-.js";import"./SkeletonTable-O-mI3Ojq.js";import"./SkeletonParagraph-CepsPnNp.js";import"./EntityLink-CNbiph16.js";import"./useEntity-C9ozPcxe.js";import"./pickBy-HOJozbd1.js";import"./isString-Am2EKcP0.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BAmhWJtF.js";import"./useGetEntityHeaders-C27idDbT.js";import"./EntityIcon-jHzPX9yU.js";import"./ErrorChip-NWIA38Jr.js";import"./Chip-CdEMn9W3.js";import"./UserOrTeamBadge-DRaw0ZTS.js";import"./UserBadge-CA7iopPx.js";import"./useUserBundle-BXxupc5B.js";import"./MenuItem-DnEBuXas.js";import"./Card-Bl3eAq5k.js";import"./TeamBadge-BqHxeZf0.js";import"./UnmanagedACTAccessRequirementItem-Cqq1ZmYA.js";import"./RequirementItem-CqZjE6CM.js";import"./LockTwoTone-ChCGu7kI.js";import"./ManagedACTAccessRequirementItemView-CnoQt8om.js";import"./SelfSignAccessRequirementItem-6DLMTQCI.js";import"./DataAccessRequestAccessorsFilesForm-D6YSrm6J.js";import"./enums-CChH0gn9.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-Ce9I-kAz.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-BCeu0-rY.js";import"./UserSearchBox-WoOcNYMS.js";import"./useDebouncedEffect-Cb_h3h8D.js";import"./Autocomplete-Cj8_Qp3g.js";import"./usePreviousProps-Bo7rFF-f.js";import"./RadioGroup-B9zXu6Gg.js";import"./Radio-Bko6O33i.js";import"./SwitchBase-B1boux3R.js";import"./FormGroup-PMg690LC.js";import"./FormControlLabel-BnBiSy9D.js";import"./UploadDocumentField-mHahm-EP.js";import"./FileUpload-DL3QqU7t.js";import"./ManagedACTAccessRequirementFormWikiWrapper-lWPurDUX.js";import"./GridLegacy-D8qmmgN6.js";import"./ResearchProjectForm-DDDerBzH.js";import"./TextFieldWithWordLimit-VtpkSs4A.js";import"./AuthenticatedRequirement-J9HLriuA.js";import"./CertificationRequirement-C-awEiPx.js";import"./TwoFactorAuthEnabledRequirement-DzCtS86L.js";import"./ValidationRequirement-DO1rPrsj.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-QGOybn2G.js";import"./RejectDataAccessRequestModal-BabZ7y5I.js";import"./CannedRejectionDialog-Dk86Jdqe.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-EESVjpz0.js";import"./Checkbox-CzvQeSJ4.js";import"./Grid-BDNOy2GH.js";import"./upperFirst-Dm9nXpyC.js";import"./_stringToArray-DnfP1v4t.js";const Le={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),s.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return t.json(a,{status:200})}),s.get(`${e}${R(":id")}`,()=>t.json(m,{status:200})),s.get(`${e}${E(":id")}`,()=>t.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),s.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>t.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),s.put(`${e}${i(":id")}`,async({request:r})=>t.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[s.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return t.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const xe=["Demo","DemoError"];export{o as Demo,n as DemoError,xe as __namedExportsOrder,Le as default};
