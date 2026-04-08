import{z as d,b as e,o as u,s as t,kp as i,kq as c,H as s,kr as R,i as m,ks as E,kt as _,a0 as I,dG as S,k8 as O}from"./iframe-FEhVLLlO.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-BkQbSTL6.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-BDIubiKC.js";import"./useAccessRequirements-DLPzpr6N.js";import"./index-D-512QAu.js";import"./_baseOrderBy-CrdayDuJ.js";import"./_baseIteratee-mWx-HW66.js";import"./_baseMap-rV8-36rj.js";import"./_baseEach-CSLszIvx.js";import"./useInfiniteQuery-BAQMxQ9Q.js";import"./groupBy-Dde7ektX.js";import"./_createAggregator-D91VG2ou.js";import"./DialogBase-CoYwCscs.js";import"./Close-DZo8bFox.js";import"./HelpPopover-D3iP0jDl.js";import"./MarkdownPopover-DPlLoOvl.js";import"./LightTooltip-CY2wMOzf.js";import"./MarkdownSynapse-FlaLI_XD.js";import"./SkeletonButton-Co5le0HJ.js";import"./SkeletonInlineBlock-DfOva5mF.js";import"./SkeletonTable-B83fe7X5.js";import"./SkeletonParagraph-u_Ry22JM.js";import"./EntityLink-B3cFFCeI.js";import"./useEntity-REhwfYE-.js";import"./pickBy-Be7w8Qan.js";import"./isString-4XSt_YuW.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Kr-j5CL1.js";import"./useGetEntityHeaders-DB8lRLKN.js";import"./EntityIcon-C1WaeWmj.js";import"./ErrorChip-COsLfVNI.js";import"./Chip-CX6tLmAn.js";import"./UserOrTeamBadge-C6sHGAPI.js";import"./useUserGroupHeader-CFFdJM92.js";import"./TeamBadge-C8u27I6r.js";import"./UserBadge-MRmSzjU6.js";import"./useUserBundle-pC4-2Gey.js";import"./MenuItem-CP-QVevM.js";import"./Card-BONVzKOo.js";import"./UnmanagedACTAccessRequirementItem-heq4-o5x.js";import"./RequirementItem-DDaey2b7.js";import"./LockTwoTone-DAtv9uzb.js";import"./ManagedACTAccessRequirementItemView-DEkgsY9_.js";import"./SelfSignAccessRequirementItem-CSRh_-nb.js";import"./DataAccessRequestAccessorsFilesForm-00GjkUNR.js";import"./enums-Nj3HgrV_.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-C0iyJqNT.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-BcMypGaZ.js";import"./UserSearchBox-BNRLD114.js";import"./useDebouncedEffect-LNF6l_XO.js";import"./Autocomplete-BXXvM_Tf.js";import"./usePreviousProps-CfQV1P60.js";import"./RadioGroup-saKN9NVz.js";import"./Radio-DXNKLg_5.js";import"./SwitchBase-DxajR-py.js";import"./FormGroup-Be0kAhVI.js";import"./FormControlLabel-C3drqlKP.js";import"./UploadDocumentField-CL0QQOPK.js";import"./FileUpload-G3LnSG4Y.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BLndfzf2.js";import"./GridLegacy-CvjuTRMJ.js";import"./ResearchProjectForm-DqPoRiVf.js";import"./TextFieldWithWordLimit-B0kJA8vf.js";import"./AuthenticatedRequirement-Dt2bjTPs.js";import"./CertificationRequirement-DAqEGB6G.js";import"./TwoFactorAuthEnabledRequirement-uxwKbiOQ.js";import"./ValidationRequirement-gM_dms4e.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-C4J10TsX.js";import"./RejectDataAccessRequestModal-Bmmu9Br6.js";import"./CannedRejectionDialog-Cgydp2ej.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-CG4E-k04.js";import"./Checkbox-BfiTC_Z_.js";import"./Grid-CwZcqGSX.js";import"./upperFirst-DX8Pcgye.js";import"./_stringToArray-C__hbgI2.js";const Je={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${R(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${E(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Ve=["Demo","DemoError"];export{o as Demo,n as DemoError,Ve as __namedExportsOrder,Je as default};
