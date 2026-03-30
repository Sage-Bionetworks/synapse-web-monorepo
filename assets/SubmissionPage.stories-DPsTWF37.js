import{g as u,k as d,n as t,a1 as c,dO as R,b as e,kq as i,kr as E,H as s,ks as _,p as m,kt as I,ku as S,k9 as O}from"./iframe-Cj0e1zel.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-DDA5Q1qJ.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-B0wVK7hv.js";import"./useAccessRequirements-BvX1i9of.js";import"./index-ZhGqh7fx.js";import"./_baseOrderBy-C2LZNiy4.js";import"./_baseIteratee-467XhaM-.js";import"./_baseMap-FtsgiS9G.js";import"./_baseEach-BSzMssFr.js";import"./useInfiniteQuery-CPI4HKnX.js";import"./groupBy-9qR1MAvP.js";import"./_createAggregator-6nh7NXq7.js";import"./DialogBase-BtW1rv2q.js";import"./Close-B0Ezzxla.js";import"./HelpPopover-vs9IjcEE.js";import"./MarkdownPopover-DANY9xik.js";import"./LightTooltip-GdOigsor.js";import"./MarkdownSynapse-C0Os_jLu.js";import"./SkeletonButton-70dk5TWK.js";import"./SkeletonInlineBlock-ChrVufN-.js";import"./SkeletonTable-CBixK2YG.js";import"./SkeletonParagraph-BiV9WxhL.js";import"./EntityLink-A_Oh3WcF.js";import"./useEntity-B9fCB26v.js";import"./pickBy-DdtJhL1v.js";import"./isString-hG5mPmml.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DsPUnDhp.js";import"./useGetEntityHeaders-C357br7f.js";import"./EntityIcon-EqfpZfuw.js";import"./ErrorChip-CJuc6UC8.js";import"./Chip-Deb-rO6G.js";import"./UserOrTeamBadge-t5xixvig.js";import"./UserBadge-BbVvVDZB.js";import"./useUserBundle-B7cMc4nB.js";import"./MenuItem-BJCMGP6I.js";import"./Card-BxbyDLyH.js";import"./TeamBadge-Caxicm5_.js";import"./UnmanagedACTAccessRequirementItem-xg7TW9Si.js";import"./RequirementItem-CoqGqJcr.js";import"./LockTwoTone-DryabOg3.js";import"./UserSearchBoxV2-l6LvtlRT.js";import"./useDebouncedEffect-xCtNoWo2.js";import"./use-deep-compare-effect.esm-D4cj4MEP.js";import"./uniq-BoHpyE19.js";import"./without-BWFmKtOM.js";import"./Select-aab027f3.esm-CY-VyQHU.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-62ZjdpdI.js";import"./SelfSignAccessRequirementItem-CBfFmjF4.js";import"./DataAccessRequestAccessorsFilesForm-BgA2TXMf.js";import"./enums-CF8VvvRt.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-Ubrh9GuK.js";import"./RadioGroup-BGEkWaVf.js";import"./Radio-DPKPg9aD.js";import"./SwitchBase-tOsTduEd.js";import"./FormGroup-BAAYIYJh.js";import"./FormControlLabel-DLtpIQqW.js";import"./UploadDocumentField-CGwdJ3nU.js";import"./FileUpload-CLnSQwx4.js";import"./ManagedACTAccessRequirementFormWikiWrapper-DZbGv9sv.js";import"./GridLegacy-QWyCOxDO.js";import"./ResearchProjectForm-B_14nGgi.js";import"./TextFieldWithWordLimit-CpLCFx_f.js";import"./AuthenticatedRequirement-nJoN6OFY.js";import"./CertificationRequirement-CMzihOZZ.js";import"./TwoFactorAuthEnabledRequirement-Dn611gFu.js";import"./ValidationRequirement-rJ8yMM_I.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-cTlmO4rT.js";import"./RejectDataAccessRequestModal-9QIUbRGt.js";import"./CannedRejectionDialog-CzsaQe9T.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-BOs_vWQu.js";import"./Checkbox-B3xT3d14.js";import"./Grid-DBEISHdJ.js";import"./upperFirst-dtTptOtS.js";import"./_stringToArray-BCIKqNFJ.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
