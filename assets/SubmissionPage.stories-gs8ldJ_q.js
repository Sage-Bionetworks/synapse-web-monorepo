import{g as d,k as u,n as t,a3 as c,d_ as R,b as e,kw as i,kx as E,H as s,ky as _,p as m,kz as I,kA as S,kf as O}from"./iframe-4beS0gqZ.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-Dp0JlDOg.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-7VgEn18S.js";import"./useAccessRequirements-B4xxCjmH.js";import"./index-CK_NCQ6g.js";import"./_baseOrderBy-DxFK1bnT.js";import"./_baseIteratee-BmxS9WAT.js";import"./_baseMap-9rlWQfeU.js";import"./_baseEach-C7tOoOBF.js";import"./useQueries-D3UXgcMQ.js";import"./useInfiniteQuery-BMIQmsjh.js";import"./groupBy-Dv7sXxns.js";import"./_createAggregator-hFqdriG_.js";import"./DialogBase-EyEbalB9.js";import"./Close-Di6LJuIZ.js";import"./HelpPopover-CrWRb3n8.js";import"./MarkdownPopover-DsiU9Oei.js";import"./LightTooltip-Bs_25L1-.js";import"./MarkdownSynapse-D_Ohq5Ke.js";import"./SkeletonButton-C4MVharh.js";import"./SkeletonInlineBlock-DJy2BwKW.js";import"./SkeletonTable-BUzuull8.js";import"./SkeletonParagraph-D8WDF9hI.js";import"./EntityLink-BWQc0UbK.js";import"./useEntity-CCW2T7nm.js";import"./pickBy-Ch8IJYmc.js";import"./isString-DrznTeW8.js";import"./useSuspenseQuery-DcbESSKQ.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DFpyvJ5c.js";import"./useGetEntityHeaders-8CBp3ZD_.js";import"./EntityIcon-2rgwGR4o.js";import"./ErrorChip-DgkZBqXt.js";import"./Chip-DN1AmnB5.js";import"./UserOrTeamBadge-CIB3EXOC.js";import"./UserBadge-Owmt2iN0.js";import"./useUserBundle-CsgmO8pI.js";import"./MenuItem-rOQE2nSk.js";import"./Card-CE7IB0pi.js";import"./TeamBadge-CA_aUlYw.js";import"./useRealmPrincipals-Puj-fJkx.js";import"./UnmanagedACTAccessRequirementItem-Dxn-C48u.js";import"./RequirementItem-CCbXylNd.js";import"./LockTwoTone-Cq5ygC9L.js";import"./UserSearchBoxV2-BltxMziL.js";import"./useDebouncedEffect-DIYYeeoE.js";import"./use-deep-compare-effect.esm-DZQaImun.js";import"./uniq-B7kIYLGP.js";import"./without-D5RWHKCY.js";import"./Select-aab027f3.esm-eQNPYluh.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-CXVbNS38.js";import"./SelfSignAccessRequirementItem-bQtwZwdO.js";import"./DataAccessRequestAccessorsFilesForm-CT_ljI0T.js";import"./enums-o_-ewK6h.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-CDOZuSkR.js";import"./RadioGroup-CU93VMeb.js";import"./Radio-B5vdngma.js";import"./SwitchBase-Dp3MNZXr.js";import"./FormGroup-Cml3BbfA.js";import"./FormControlLabel-Chk4z1Xm.js";import"./UploadDocumentField--I1CloeC.js";import"./FileUpload-KtnTdRb8.js";import"./ManagedACTAccessRequirementFormWikiWrapper-DPjZxy7U.js";import"./GridLegacy-ZgBv7Ris.js";import"./ResearchProjectForm-DiamfDBm.js";import"./TextFieldWithWordLimit-U8QfuNWl.js";import"./AuthenticatedRequirement-CoChFif1.js";import"./CertificationRequirement-Cd6BgBue.js";import"./TwoFactorAuthEnabledRequirement-BGhPDP1z.js";import"./ValidationRequirement-DMOUO0-z.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-C0Pjc1-e.js";import"./RejectDataAccessRequestModal-Z1QCpP9_.js";import"./CannedRejectionDialog-htBJocgP.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-DiR-POnZ.js";import"./Checkbox-32zvS2Va.js";import"./Grid-BXs150NI.js";import"./upperFirst-ClH-YcD7.js";import"./_stringToArray-B4t0WuPw.js";const Xe={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const er=["Demo","DemoError"];export{o as Demo,n as DemoError,er as __namedExportsOrder,Xe as default};
