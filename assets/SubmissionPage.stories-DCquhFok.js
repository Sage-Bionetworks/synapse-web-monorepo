import{g as u,k as d,n as t,a3 as c,e0 as R,b as e,kv as i,kw as E,H as s,kx as _,p as m,ky as I,kz as S,ke as O}from"./iframe-BYI6UvQX.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-BdOqpbFs.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-KNeKx4yL.js";import"./useAccessRequirements-BX7_OqtS.js";import"./index-CWsmnNqr.js";import"./_baseOrderBy-BgmnMWjZ.js";import"./_baseIteratee-pBFRPpfw.js";import"./_baseMap-DvfJE8ol.js";import"./_baseEach-ClZ52RoH.js";import"./useQueries-CWXoKjwZ.js";import"./useInfiniteQuery-BV081oyQ.js";import"./groupBy-Du30YXzz.js";import"./_createAggregator-Ddx1LTyi.js";import"./DialogBase-C1QyiwVh.js";import"./Close-Clh2xDFP.js";import"./HelpPopover-DhAbnR7s.js";import"./MarkdownPopover-B8qxAI9Z.js";import"./LightTooltip-BPs4I3gS.js";import"./MarkdownSynapse-DLgizTv6.js";import"./SkeletonButton-moYwMGBJ.js";import"./SkeletonInlineBlock-CvF0ovYz.js";import"./SkeletonTable-D-cfGk8m.js";import"./SkeletonParagraph-BUXmdzG2.js";import"./EntityLink-iJK7zdJz.js";import"./useEntity-dbI9pFoY.js";import"./pickBy-BNXvQbxg.js";import"./isString-CmVKC18Y.js";import"./useSuspenseQuery-CyhHWdVP.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CmhLH8R-.js";import"./useGetEntityHeaders-C1mj-ZZF.js";import"./EntityIcon-3126BG1-.js";import"./ErrorChip-B-n_s1OB.js";import"./Chip-CzyNjUbD.js";import"./UserOrTeamBadge-L49Qd6kU.js";import"./UserBadge-C96yZvDg.js";import"./useUserBundle-Be9uEwgr.js";import"./MenuItem-x7kd2x5J.js";import"./Card-B1HzsQxk.js";import"./TeamBadge-BROu8aQi.js";import"./UnmanagedACTAccessRequirementItem-sWmAuKql.js";import"./RequirementItem-NIfkSMzd.js";import"./LockTwoTone-rV7srd4C.js";import"./UserSearchBoxV2-wYVOPsOh.js";import"./useDebouncedEffect-DHg96o3Z.js";import"./use-deep-compare-effect.esm-Da56MkFi.js";import"./uniq-DXRNdgIY.js";import"./without-0cEpkjKg.js";import"./Select-aab027f3.esm-DrNh9WqI.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-CGK-WW72.js";import"./SelfSignAccessRequirementItem-Cs8qA9gp.js";import"./DataAccessRequestAccessorsFilesForm-kD5m_rXA.js";import"./enums-DUAaKESZ.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-XSOIRG9C.js";import"./RadioGroup-DmxKohOh.js";import"./Radio-yHfqDIgQ.js";import"./SwitchBase-wy1xArrI.js";import"./FormGroup-BUh7qyUl.js";import"./FormControlLabel-Cz68SJYk.js";import"./UploadDocumentField-Ihp0CMc9.js";import"./FileUpload-41LFGeUy.js";import"./ManagedACTAccessRequirementFormWikiWrapper-DAkk3uic.js";import"./GridLegacy--ncYMh8e.js";import"./ResearchProjectForm-BPBRX5yQ.js";import"./TextFieldWithWordLimit-C5ebZKkk.js";import"./AuthenticatedRequirement-qw9Zipr1.js";import"./CertificationRequirement-_XCnNMik.js";import"./TwoFactorAuthEnabledRequirement-0fAfvlMN.js";import"./ValidationRequirement-VcvunGWR.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-BJxMyED-.js";import"./RejectDataAccessRequestModal-CFHGnW6Q.js";import"./CannedRejectionDialog-DVMQaslV.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-toxY45nm.js";import"./Checkbox-pSIFJ5K9.js";import"./Grid-L5qrXUIJ.js";import"./upperFirst-DEDM9d1h.js";import"./_stringToArray-B7EXajt4.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Xe=["Demo","DemoError"];export{o as Demo,n as DemoError,Xe as __namedExportsOrder,ze as default};
