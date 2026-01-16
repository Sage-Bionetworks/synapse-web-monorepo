import{g as u,k as d,n as t,a2 as c,d_ as R,b as e,ks as i,kt as E,H as s,ku as _,p as m,kv as I,kw as S,kb as O}from"./iframe-B-xyH02x.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-Dqk-RMqX.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-DWeoQHfm.js";import"./useAccessRequirements-_j6x-JtH.js";import"./index-BJsp20bP.js";import"./_baseOrderBy-C0REZliL.js";import"./_baseIteratee-fpDZ_ZY4.js";import"./_baseMap-DjISqwK4.js";import"./_baseEach-CHfNr7If.js";import"./useQueries-D6R1GWKv.js";import"./useInfiniteQuery-Co2saULA.js";import"./groupBy-CGL-_oNd.js";import"./_createAggregator-BqyhZRaF.js";import"./DialogBase-Bm7WFoz5.js";import"./Close-BSQRjDbl.js";import"./HelpPopover-Bx7iTtjG.js";import"./MarkdownPopover-BdoLK-ES.js";import"./LightTooltip-C149eTsy.js";import"./MarkdownSynapse-CecSU3tu.js";import"./SkeletonButton-DjfAVN5h.js";import"./SkeletonInlineBlock-C-y9BK0k.js";import"./SkeletonTable-Bag6oVsL.js";import"./SkeletonParagraph-DEhsnig5.js";import"./EntityLink-DZ4RsdMg.js";import"./useEntity-B_VK1sTi.js";import"./pickBy-NGLZhl8P.js";import"./isString-BD56fkoe.js";import"./useSuspenseQuery-C7ZzErHF.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CFMjsswk.js";import"./useGetEntityHeaders-GhOqHanu.js";import"./EntityIcon-BxcgRxp4.js";import"./ErrorChip-BRT26K5x.js";import"./Chip-CRxMN-mm.js";import"./UserOrTeamBadge-CAHxuPyN.js";import"./UserBadge-BdL4OP-p.js";import"./useUserBundle-C9QAiHQ4.js";import"./MenuItem-Dlz7KwY1.js";import"./Card-CTmYONpx.js";import"./TeamBadge-Bw28BNYs.js";import"./UnmanagedACTAccessRequirementItem-CBqA8nd4.js";import"./RequirementItem-BN1tRb2p.js";import"./LockTwoTone-l95JwPKx.js";import"./UserSearchBoxV2-B1uxyYj8.js";import"./useDebouncedEffect-Dz4ygARW.js";import"./use-deep-compare-effect.esm-g-YILfzs.js";import"./uniq-BhePJzMA.js";import"./without-aeDYs7dM.js";import"./Select-aab027f3.esm-Du6EeKVL.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-Y7ja1ZFr.js";import"./SelfSignAccessRequirementItem-4UWHvyfx.js";import"./DataAccessRequestAccessorsFilesForm-B6LM7hqe.js";import"./enums-CbV9-apb.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-DiZxY72Z.js";import"./RadioGroup-B-WJ9OZi.js";import"./Radio-C7f7HjUZ.js";import"./SwitchBase-OXBlSqsv.js";import"./FormGroup-CsfZBLJU.js";import"./FormControlLabel-CbugnA7k.js";import"./UploadDocumentField-JYQFkjK3.js";import"./FileUpload-3b1gC7TX.js";import"./ManagedACTAccessRequirementFormWikiWrapper-D4_c49RP.js";import"./GridLegacy-C2gNJxBQ.js";import"./ResearchProjectForm-ET8Jf9NJ.js";import"./TextFieldWithWordLimit-9k3ds7II.js";import"./AuthenticatedRequirement-DVMXQxDe.js";import"./CertificationRequirement-DGodpUJG.js";import"./TwoFactorAuthEnabledRequirement-OixTv3FI.js";import"./ValidationRequirement-BBM9a2JE.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-BThJHbTE.js";import"./RejectDataAccessRequestModal-BOniGGmS.js";import"./CannedRejectionDialog-CeDTTvw9.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-D9aFQcvZ.js";import"./Checkbox-BtMdyA1l.js";import"./Grid-BrbHm5Ne.js";import"./upperFirst-BbsCi8hK.js";import"./_stringToArray-Cyr9b7t7.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
