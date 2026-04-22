import{z as u,b as e,o as d,s,kq as i,kr as c,H as t,ks as R,i as m,kt as E,ku as _,a0 as I,dH as S,k9 as O}from"./iframe-CseC-baw.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-DRvwcL7h.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-C1r7KGGb.js";import"./useAccessRequirements-LlRVvucj.js";import"./index-Cs-oxnB7.js";import"./_baseOrderBy-BI2WWhcD.js";import"./_baseIteratee-FkIOi2kZ.js";import"./_baseMap-ChkSHv-Q.js";import"./_baseEach-I5MBxf0i.js";import"./useInfiniteQuery-BZ_GGw6g.js";import"./groupBy-CX0VHO6r.js";import"./_createAggregator-D6vInaaC.js";import"./DialogBase-BvEmiGuX.js";import"./Close-CEWvO-tT.js";import"./HelpPopover-Bv1OIhKO.js";import"./MarkdownPopover-jmvUxWZs.js";import"./LightTooltip-Dys4qYAB.js";import"./MarkdownSynapse-DWH-mAwE.js";import"./SkeletonButton-CcHwUw1K.js";import"./SkeletonInlineBlock-dgjaDxOx.js";import"./SkeletonTable-BSCFUHCb.js";import"./SkeletonParagraph-BnipCtVU.js";import"./EntityLink-_JXZE8-S.js";import"./useEntity-IS8-aX6E.js";import"./pickBy-BLqDP6KE.js";import"./isString-CDFSk2zC.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DQ3kjnM1.js";import"./useGetEntityHeaders-DvnfnpZp.js";import"./EntityIcon-87f12oRf.js";import"./ErrorChip-CkWsggLP.js";import"./Chip-8D96B7uR.js";import"./UserOrTeamBadge-CpddX1LK.js";import"./UserBadge-CsME2JGa.js";import"./useUserBundle-DcGFbwia.js";import"./MenuItem-JA9eMCvt.js";import"./Card-CkAhX4H-.js";import"./TeamBadge-BZduf3Tn.js";import"./UnmanagedACTAccessRequirementItem-BOQIt2s3.js";import"./RequirementItem-BJ0RjvpK.js";import"./CheckTwoTone-BCywWPci.js";import"./ManagedACTAccessRequirementItemView-DB0Du-eZ.js";import"./SelfSignAccessRequirementItem-SPzMYfy4.js";import"./DataAccessRequestAccessorsFilesForm-BBs6pks9.js";import"./enums-B9YqTcqs.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-BmWqfc-v.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-dm94PwzQ.js";import"./UserSearchBox-C0b380xg.js";import"./useDebouncedEffect-D1NvQUWq.js";import"./Autocomplete-B0cmA3-q.js";import"./usePreviousProps-DrR79Lb9.js";import"./RadioGroup-qkGp_qqA.js";import"./Radio-BOtMyg1i.js";import"./SwitchBase-viy3IhPp.js";import"./FormGroup-DkbuhrfL.js";import"./FormControlLabel-yR_OFq_k.js";import"./UploadDocumentField-BVgfL7Sq.js";import"./FileUpload-Dxw5rcdM.js";import"./ManagedACTAccessRequirementFormWikiWrapper-Ce2s34fa.js";import"./GridLegacy-BT3u4m13.js";import"./ResearchProjectForm-B0I_gTFZ.js";import"./TextFieldWithWordLimit-Bxgqif81.js";import"./AuthenticatedRequirement-BPPtpYYi.js";import"./CertificationRequirement-BxR1Hdnq.js";import"./TwoFactorAuthEnabledRequirement-5KZz1nbu.js";import"./ValidationRequirement-yBWgkTfA.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-Bec0Lnl6.js";import"./RejectDataAccessRequestModal-DF0_1zgh.js";import"./CannedRejectionDialog-DmAVCKKY.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-CcRCdpta.js";import"./Checkbox-cR5eTvXg.js";import"./Grid-DLfQ-OhD.js";import"./upperFirst-KbdjWoxv.js";import"./_stringToArray-WPfo-JdD.js";const xe={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),s.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return t.json(a,{status:200})}),s.get(`${e}${R(":id")}`,()=>t.json(m,{status:200})),s.get(`${e}${E(":id")}`,()=>t.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),s.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>t.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),s.put(`${e}${i(":id")}`,async({request:r})=>t.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[s.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return t.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
