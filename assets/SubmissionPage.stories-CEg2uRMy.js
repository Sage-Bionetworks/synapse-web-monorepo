import{z as u,b as e,o as d,s,kq as i,kr as c,H as t,ks as R,i as m,kt as E,ku as _,a0 as I,dH as S,k9 as O}from"./iframe-BnuiMoX_.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-BwxlzuQp.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-BSUJUIFj.js";import"./useAccessRequirements-mKJQ9X-A.js";import"./index-Jll9ObM-.js";import"./_baseOrderBy-DRT_m02G.js";import"./_baseIteratee-CAfW7TLG.js";import"./_baseMap-P5cfwgYq.js";import"./_baseEach-BqK8_kug.js";import"./useInfiniteQuery-BmLi_mNn.js";import"./groupBy-0_OLJJNb.js";import"./_createAggregator-BbQMAFis.js";import"./DialogBase-ZChlIQOE.js";import"./Close-DJ29z905.js";import"./HelpPopover-x83RozMQ.js";import"./MarkdownPopover-Cm0YthTk.js";import"./LightTooltip-DUGbboAh.js";import"./MarkdownSynapse-DkYu3x07.js";import"./SkeletonButton-CgoQvaBi.js";import"./SkeletonInlineBlock-DxCr7zGd.js";import"./SkeletonTable-B_UPgtXl.js";import"./SkeletonParagraph-BQZp8fCk.js";import"./EntityLink-B-ZzRJv8.js";import"./useEntity-BZdZQARv.js";import"./pickBy-EI1FWKdl.js";import"./isString-fNqKPnY6.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Cd9CwkMP.js";import"./useGetEntityHeaders-4nYTpNhU.js";import"./EntityIcon-Cp-E7gZa.js";import"./ErrorChip-CDS4oqJF.js";import"./Chip-iaML2TUf.js";import"./UserOrTeamBadge-DeUK1hGM.js";import"./UserBadge-C04__7Q8.js";import"./useUserBundle-MQOAsYfr.js";import"./MenuItem-CJFsHkvO.js";import"./Card-C1dzVdqQ.js";import"./TeamBadge-U5E-aD0J.js";import"./UnmanagedACTAccessRequirementItem-C7nW5ILp.js";import"./RequirementItem-DTZ3NSbe.js";import"./CheckTwoTone-BoGtFBXp.js";import"./ManagedACTAccessRequirementItemView-Br9tfnkw.js";import"./SelfSignAccessRequirementItem-D1FVocKT.js";import"./DataAccessRequestAccessorsFilesForm-hiLF5dT1.js";import"./enums-tpaUHWV7.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-lOHwK7VR.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-DqOKI0Q3.js";import"./UserSearchBox-kyeiexqJ.js";import"./useDebouncedEffect-p58N9oTf.js";import"./Autocomplete-DDE1rP2z.js";import"./usePreviousProps-DWT1NPvn.js";import"./RadioGroup-iS6x-pe0.js";import"./Radio-2zVdB3VL.js";import"./SwitchBase-FDevkp1d.js";import"./FormGroup-B5iNv033.js";import"./FormControlLabel-DGDrtWSS.js";import"./UploadDocumentField-DDzxTwa9.js";import"./FileUpload-DkoRnKRY.js";import"./ManagedACTAccessRequirementFormWikiWrapper-CwUJRFW0.js";import"./GridLegacy-COdQJWh6.js";import"./ResearchProjectForm-CIySiVX1.js";import"./TextFieldWithWordLimit-3x5uKQlO.js";import"./AuthenticatedRequirement-Dc-SWKfQ.js";import"./CertificationRequirement-CWcJbpCI.js";import"./TwoFactorAuthEnabledRequirement-CqDRh955.js";import"./ValidationRequirement-BlYnLmWd.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-JyEbRiN6.js";import"./RejectDataAccessRequestModal-BQ6rQbZP.js";import"./CannedRejectionDialog-DJl6uwR7.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-trKeO__a.js";import"./Checkbox-DbZ9UnIo.js";import"./Grid-CqU-Fml2.js";import"./upperFirst-BJqNHn3x.js";import"./_stringToArray-DamUorDa.js";const xe={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),s.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return t.json(a,{status:200})}),s.get(`${e}${R(":id")}`,()=>t.json(m,{status:200})),s.get(`${e}${E(":id")}`,()=>t.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),s.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>t.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),s.put(`${e}${i(":id")}`,async({request:r})=>t.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[s.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return t.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
