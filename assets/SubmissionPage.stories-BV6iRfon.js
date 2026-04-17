import{z as u,b as e,o as d,s,kq as i,kr as c,H as t,ks as R,i as m,kt as E,ku as _,a0 as I,dH as S,k9 as O}from"./iframe-DjCs0N9T.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-BOHn-sRu.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-B4PI7bQa.js";import"./useAccessRequirements-rMfVBDt3.js";import"./index-Cwlx-Oul.js";import"./_baseOrderBy-DVAlmebq.js";import"./_baseIteratee-BxSzENNZ.js";import"./_baseMap-BXvVAQO1.js";import"./_baseEach-DCQjENFm.js";import"./useInfiniteQuery-D7nav_iQ.js";import"./groupBy-CBb1sk5A.js";import"./_createAggregator-D92RqQDz.js";import"./DialogBase-G442yd3L.js";import"./Close-BtUXOgnJ.js";import"./HelpPopover-Cv3rcWtw.js";import"./MarkdownPopover-ERQh7wwa.js";import"./LightTooltip-Mucs5Dmz.js";import"./MarkdownSynapse-BphwuRUM.js";import"./SkeletonButton-ra5Cjzqp.js";import"./SkeletonInlineBlock-BcoZAk2Q.js";import"./SkeletonTable-C6E9liFP.js";import"./SkeletonParagraph-COuF-1cd.js";import"./EntityLink-CUk4YEfy.js";import"./useEntity-Db4mV1RE.js";import"./pickBy-CmgfTtCR.js";import"./isString-yYV1C6Tz.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Ca0eF1An.js";import"./useGetEntityHeaders-Xa1G1qyy.js";import"./EntityIcon-CpJ2pASY.js";import"./ErrorChip-CTWOprUW.js";import"./Chip-DtYkZqnx.js";import"./UserOrTeamBadge-WK5CmVHD.js";import"./UserBadge-BDehV7Zq.js";import"./useUserBundle-Bj8x-K_h.js";import"./MenuItem-DkdGwV6_.js";import"./Card-CYz3fxIC.js";import"./TeamBadge-BxjCEMls.js";import"./UnmanagedACTAccessRequirementItem-B3CpVdpR.js";import"./RequirementItem-ggJec_Jc.js";import"./CheckTwoTone-ayHUjiGj.js";import"./ManagedACTAccessRequirementItemView-El4b4dBK.js";import"./SelfSignAccessRequirementItem-5p3V1hHE.js";import"./DataAccessRequestAccessorsFilesForm-CTnBqRGb.js";import"./enums-BBbefqZu.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-BnwTc5rB.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-DJPIaRze.js";import"./UserSearchBox-DUBv2mqO.js";import"./useDebouncedEffect-COmGLK0u.js";import"./Autocomplete-BWEgSIuX.js";import"./usePreviousProps-BWpwLj3U.js";import"./RadioGroup-BPC2IIjZ.js";import"./Radio-B0yVambt.js";import"./SwitchBase-VN_kzZ6i.js";import"./FormGroup-DoIxIReK.js";import"./FormControlLabel-DzJTgcEX.js";import"./UploadDocumentField-BAwHj6eI.js";import"./FileUpload-D0tQ4pWL.js";import"./ManagedACTAccessRequirementFormWikiWrapper-C3yDq-bV.js";import"./GridLegacy-DV90tZf6.js";import"./ResearchProjectForm-Cc3Ohfvp.js";import"./TextFieldWithWordLimit-CB2ZB7cI.js";import"./AuthenticatedRequirement-BwNMXw7r.js";import"./CertificationRequirement-BtIF5nJW.js";import"./TwoFactorAuthEnabledRequirement-BSNATm8Z.js";import"./ValidationRequirement-CaR418go.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-DLil9T1N.js";import"./RejectDataAccessRequestModal-KuY66_Oi.js";import"./CannedRejectionDialog-DtO-HXke.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-DtaMK8Wg.js";import"./Checkbox-s3F0M9zi.js";import"./Grid-CSIVzVil.js";import"./upperFirst-B48Q7qYE.js";import"./_stringToArray-CHqkicUz.js";const xe={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),s.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return t.json(a,{status:200})}),s.get(`${e}${R(":id")}`,()=>t.json(m,{status:200})),s.get(`${e}${E(":id")}`,()=>t.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),s.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>t.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),s.put(`${e}${i(":id")}`,async({request:r})=>t.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[s.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return t.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
