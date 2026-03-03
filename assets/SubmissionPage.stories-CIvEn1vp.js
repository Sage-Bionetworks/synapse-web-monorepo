import{g as d,k as u,n as t,a3 as c,dN as R,b as e,kn as i,ko as E,H as s,kp as _,p as m,kq as I,kr as S,k6 as O}from"./iframe-BXOaFC93.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-CBR1Meig.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-D_X-r9_9.js";import"./useAccessRequirements-C1oiBpLa.js";import"./index-MNp32NR_.js";import"./_baseOrderBy-BVLiNwYK.js";import"./_baseIteratee-BNwFHJhH.js";import"./_baseMap-DCppEN5q.js";import"./_baseEach-zBNXABpw.js";import"./useInfiniteQuery-CMyAeBvQ.js";import"./groupBy-BbeTsM1W.js";import"./_createAggregator-BcbqeVDP.js";import"./DialogBase-D6Ud-Adz.js";import"./Close-D1WVTMvM.js";import"./HelpPopover-9iSqJaFc.js";import"./MarkdownPopover-BQxFNv37.js";import"./LightTooltip-CPiLa2tV.js";import"./MarkdownSynapse-BQFq1ZI6.js";import"./SkeletonButton-Bqwyl1dP.js";import"./SkeletonInlineBlock-Cl-hsdeu.js";import"./SkeletonTable-CeAdm2qt.js";import"./SkeletonParagraph-DymEZI1w.js";import"./EntityLink-D6jh-xhU.js";import"./useEntity-B5tBnkAi.js";import"./pickBy-D29u2qXa.js";import"./isString-BRDb8suW.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DgsaoJ5e.js";import"./useGetEntityHeaders-BuCFiaa3.js";import"./EntityIcon-Dq06XCyh.js";import"./ErrorChip-QMVVhWIJ.js";import"./Chip-DABoi-5O.js";import"./UserOrTeamBadge-DyIgOzWL.js";import"./UserBadge-XxMl2-q6.js";import"./useUserBundle-GtjAuzC1.js";import"./MenuItem-Dtwb3tI6.js";import"./Card-myTQBzog.js";import"./TeamBadge-DHsiQMLq.js";import"./UnmanagedACTAccessRequirementItem-Caes5S8I.js";import"./RequirementItem-CGfKsaaB.js";import"./LockTwoTone-CwLAbpIW.js";import"./UserSearchBoxV2-B5S3nhP-.js";import"./useDebouncedEffect-DZwp19LD.js";import"./use-deep-compare-effect.esm-BP-X_lnI.js";import"./uniq-Jrb7SEaY.js";import"./without-DoDVYMXe.js";import"./Select-aab027f3.esm-JMIvy_Qu.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-BHO0MN-J.js";import"./SelfSignAccessRequirementItem-D1xxqrXC.js";import"./DataAccessRequestAccessorsFilesForm-Cq0-sBpp.js";import"./enums-5wtu5mKA.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-BX8ZrOI1.js";import"./RadioGroup-C0Pwupiw.js";import"./Radio-DuBucmy-.js";import"./SwitchBase-wPFSCN8t.js";import"./FormGroup-BZyAAptq.js";import"./FormControlLabel-C6Gvndii.js";import"./UploadDocumentField-zr6RFLxr.js";import"./FileUpload-CihiM7U4.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BlKefuOu.js";import"./GridLegacy-D46plKVh.js";import"./ResearchProjectForm-B_LljYuZ.js";import"./TextFieldWithWordLimit-NkOrdOTN.js";import"./AuthenticatedRequirement-DRwARA8j.js";import"./CertificationRequirement-DyZjWhKJ.js";import"./TwoFactorAuthEnabledRequirement-CMERsy3y.js";import"./ValidationRequirement-DpLu0GDu.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-Da40Rvyw.js";import"./RejectDataAccessRequestModal-Cnm41KE_.js";import"./CannedRejectionDialog-BVBgWLjP.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-B4Nlucy5.js";import"./Checkbox-D3B6ddTd.js";import"./Grid-C6QXGUzL.js";import"./upperFirst-LXcgnReP.js";import"./_stringToArray-BVM7mLMr.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
