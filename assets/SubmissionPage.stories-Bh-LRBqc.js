import{g as u,k as d,n as t,a1 as c,dO as R,b as e,kq as i,kr as E,H as s,ks as _,p as m,kt as I,ku as S,k9 as O}from"./iframe-DlbWcGN2.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-DohN9DT7.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-W9axRZwt.js";import"./useAccessRequirements--8-f_ezM.js";import"./index-CPDGSnl2.js";import"./_baseOrderBy-yjHgEbXY.js";import"./_baseIteratee-zBmYV8lZ.js";import"./_baseMap-CPbOR7vb.js";import"./_baseEach-DR9OfBR9.js";import"./useInfiniteQuery-EmSFUzRL.js";import"./groupBy-LhdnqlEe.js";import"./_createAggregator-BgBf_n3z.js";import"./DialogBase-iPKdwKl0.js";import"./Close-ClY7c3V4.js";import"./HelpPopover-D8qjwvMR.js";import"./MarkdownPopover-Dqmv7u1m.js";import"./LightTooltip-jUz17zhr.js";import"./MarkdownSynapse-DBEf5gPX.js";import"./SkeletonButton-dCMet_AC.js";import"./SkeletonInlineBlock-Zv-gdja3.js";import"./SkeletonTable-CLjRwafm.js";import"./SkeletonParagraph-CTcAcvxB.js";import"./EntityLink-BJaaCbdb.js";import"./useEntity-B3m7rAsd.js";import"./pickBy-BVWVK5RI.js";import"./isString-BE-JE0d2.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Bb-PLcEz.js";import"./useGetEntityHeaders-BoSn34NJ.js";import"./EntityIcon-CqpV08r5.js";import"./ErrorChip-B32TzZge.js";import"./Chip-B6dYwJrn.js";import"./UserOrTeamBadge-Bb1zL9zv.js";import"./UserBadge-BMihFK0S.js";import"./useUserBundle-fmpBDiU5.js";import"./MenuItem-y9tFSlzR.js";import"./Card-CX5B1fkb.js";import"./TeamBadge-DHed2zT5.js";import"./UnmanagedACTAccessRequirementItem-BSiM3xhB.js";import"./RequirementItem-S-iRkev6.js";import"./LockTwoTone-tt2Qli90.js";import"./UserSearchBoxV2-9WTOHrLp.js";import"./useDebouncedEffect-3thH1FAa.js";import"./use-deep-compare-effect.esm-Dh6CqU-e.js";import"./uniq-DKgJpKyz.js";import"./without-XYVfU2wd.js";import"./Select-aab027f3.esm-DbS8cvLk.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-mbCjXxFe.js";import"./SelfSignAccessRequirementItem-CtdjdapZ.js";import"./DataAccessRequestAccessorsFilesForm-BeJuWm05.js";import"./enums-DIWpo0Pm.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-BFuY3fAe.js";import"./RadioGroup-ufmF1bYT.js";import"./Radio-Di4fsXKc.js";import"./SwitchBase-CK2q1rGh.js";import"./FormGroup-BqtfAfJB.js";import"./FormControlLabel-CdDhVpIz.js";import"./UploadDocumentField-Cht6xkci.js";import"./FileUpload-qqcJsb9N.js";import"./ManagedACTAccessRequirementFormWikiWrapper-DswsWFbi.js";import"./GridLegacy-BatwzeOV.js";import"./ResearchProjectForm-CY63Oqf0.js";import"./TextFieldWithWordLimit-Br_niiTR.js";import"./AuthenticatedRequirement-BZLKwcST.js";import"./CertificationRequirement-DscNytI4.js";import"./TwoFactorAuthEnabledRequirement-DzTy2Fd4.js";import"./ValidationRequirement-DJ4hMybs.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-Dfe81h1j.js";import"./RejectDataAccessRequestModal-pA7YFtER.js";import"./CannedRejectionDialog-DGPNgxI0.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-52XVYQBi.js";import"./Checkbox-CcAZ2GlS.js";import"./Grid-BM0Djy_Q.js";import"./upperFirst-DNd4HkG4.js";import"./_stringToArray-DJip5BU9.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Ze=["Demo","DemoError"];export{o as Demo,n as DemoError,Ze as __namedExportsOrder,Ve as default};
