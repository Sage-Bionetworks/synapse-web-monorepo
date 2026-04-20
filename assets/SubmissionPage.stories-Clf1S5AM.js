import{z as u,b as e,o as d,s,kq as i,kr as c,H as t,ks as R,i as m,kt as E,ku as _,a0 as I,dH as S,k9 as O}from"./iframe-Gl2uG7Gu.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-DOCv8HX_.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-DMj4Ioy5.js";import"./useAccessRequirements-CNvie9sI.js";import"./index-Dl1iid2-.js";import"./_baseOrderBy-CThs2gYZ.js";import"./_baseIteratee-BYtIyUzR.js";import"./_baseMap-QVGtldut.js";import"./_baseEach-DDXBWgx7.js";import"./useInfiniteQuery-B8esF6xB.js";import"./groupBy-57GfemKd.js";import"./_createAggregator-BxszEWDY.js";import"./DialogBase-CFDv1eZ2.js";import"./Close-D3nqMVPZ.js";import"./HelpPopover-FfzFHXn8.js";import"./MarkdownPopover-CvADHgL2.js";import"./LightTooltip-DCTLNLfM.js";import"./MarkdownSynapse-Dvsaf59R.js";import"./SkeletonButton-CAFmp0_I.js";import"./SkeletonInlineBlock-BdepDM7J.js";import"./SkeletonTable-DN89Pk10.js";import"./SkeletonParagraph-Ck270a2X.js";import"./EntityLink-C-7VEjWx.js";import"./useEntity-D934njKf.js";import"./pickBy-CvHjxjJ_.js";import"./isString-Dwqv5QF9.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DMHI0iCj.js";import"./useGetEntityHeaders-CMjjRh3f.js";import"./EntityIcon-ynVXFnm1.js";import"./ErrorChip-BBwpsiGN.js";import"./Chip-DiD-80ip.js";import"./UserOrTeamBadge-D6dgcxJ_.js";import"./UserBadge-RCt5BhEq.js";import"./useUserBundle-BOqjtCMe.js";import"./MenuItem-DDtGYU59.js";import"./Card-W8tHan4r.js";import"./TeamBadge-Dfi6JICp.js";import"./UnmanagedACTAccessRequirementItem-lKqx4RxH.js";import"./RequirementItem-DHFDbxr_.js";import"./CheckTwoTone-CV19tbVR.js";import"./ManagedACTAccessRequirementItemView-B_Pss3n8.js";import"./SelfSignAccessRequirementItem-BaW-P4WZ.js";import"./DataAccessRequestAccessorsFilesForm-DzJGHyTU.js";import"./enums-B9xZNMOc.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-CEpVmCy4.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-jOu8cgyr.js";import"./UserSearchBox-CSYniZ9Z.js";import"./useDebouncedEffect-XrdPg-37.js";import"./Autocomplete-D4-XVfDi.js";import"./usePreviousProps-Cy9XFhAc.js";import"./RadioGroup-D-asg-mZ.js";import"./Radio-DMUEn6SK.js";import"./SwitchBase-fjg8G-tJ.js";import"./FormGroup-BcPdbL3e.js";import"./FormControlLabel-BhQ-7Pqi.js";import"./UploadDocumentField-DyJG6cGG.js";import"./FileUpload-C5SlwcP8.js";import"./ManagedACTAccessRequirementFormWikiWrapper-wOVSSpeS.js";import"./GridLegacy-Dgy4ns4A.js";import"./ResearchProjectForm-DbgyzH2M.js";import"./TextFieldWithWordLimit-B2ixb3Dq.js";import"./AuthenticatedRequirement-B7fJRmnp.js";import"./CertificationRequirement-2rlcp2_0.js";import"./TwoFactorAuthEnabledRequirement-_RAJVGBh.js";import"./ValidationRequirement-CBDIndUB.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-Dv9nnfp5.js";import"./RejectDataAccessRequestModal-EMj77ZQj.js";import"./CannedRejectionDialog-BzALk5xu.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-CkI_Ky3R.js";import"./Checkbox-CsdNX8eC.js";import"./Grid-Bw2tg2Qw.js";import"./upperFirst-CdlFUTDd.js";import"./_stringToArray-BG4Lnhkj.js";const xe={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),s.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return t.json(a,{status:200})}),s.get(`${e}${R(":id")}`,()=>t.json(m,{status:200})),s.get(`${e}${E(":id")}`,()=>t.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),s.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>t.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),s.put(`${e}${i(":id")}`,async({request:r})=>t.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[s.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return t.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
