import{z as d,b as e,o as u,s,kp as i,kq as c,H as t,kr as R,i as m,ks as E,kt as _,a0 as I,dG as S,k8 as O}from"./iframe-CA42Mn9q.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-DX63NyzZ.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-CizCwgtS.js";import"./useAccessRequirements-gnBjqTyt.js";import"./index-D60w0tLm.js";import"./_baseOrderBy-d4nLeMvZ.js";import"./_baseIteratee-Bs1FcXpk.js";import"./_baseMap-2hGsRQwM.js";import"./_baseEach-C5i0FLu_.js";import"./useInfiniteQuery-uipgRME6.js";import"./groupBy-mrsMEO2c.js";import"./_createAggregator-CNUCDTmu.js";import"./DialogBase-DPa9xviX.js";import"./Close-BxAT1Y3p.js";import"./HelpPopover-_39XgxVX.js";import"./MarkdownPopover-Cw4pup3u.js";import"./LightTooltip-CkVaiv9P.js";import"./MarkdownSynapse-BtRsfIl6.js";import"./SkeletonButton-BBbLk1YB.js";import"./SkeletonInlineBlock-COfhdDsT.js";import"./SkeletonTable--UszwM1d.js";import"./SkeletonParagraph-CDHIPMz9.js";import"./EntityLink-161-svBf.js";import"./useEntity-CU14jxI-.js";import"./pickBy-x6qhMxFk.js";import"./isString-C-nM3PI9.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-C7vol-cD.js";import"./useGetEntityHeaders-DK2KBr_J.js";import"./EntityIcon-BCYQs4Yg.js";import"./ErrorChip-B2v0yDS2.js";import"./Chip-CtbWqGj5.js";import"./UserOrTeamBadge-BKHSk8CN.js";import"./UserBadge-BKVFzTvo.js";import"./useUserBundle-BhbwoHT_.js";import"./MenuItem-BtHpeBI3.js";import"./Card-CaU8zpDF.js";import"./TeamBadge-BoejoXMi.js";import"./UnmanagedACTAccessRequirementItem-XavIOwkO.js";import"./RequirementItem-mIaWBQm9.js";import"./LockTwoTone-Bvkcc7e7.js";import"./ManagedACTAccessRequirementItemView-DmaV5jGF.js";import"./SelfSignAccessRequirementItem--O-LEyej.js";import"./DataAccessRequestAccessorsFilesForm-DSbMuJi8.js";import"./enums-CsJ1jbRu.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-biRh0X9x.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-Cv4P-h27.js";import"./UserSearchBox-Cfies7rm.js";import"./useDebouncedEffect-DYtqXnBy.js";import"./Autocomplete-CgHWwNDH.js";import"./usePreviousProps-B1BOdqtH.js";import"./RadioGroup-DTym7F7_.js";import"./Radio-Co2yso-D.js";import"./SwitchBase-COFpZMHN.js";import"./FormGroup-DcGJePCZ.js";import"./FormControlLabel-DyBRYtGv.js";import"./UploadDocumentField-CGx5JzCA.js";import"./FileUpload-U9JCSj3z.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BITMxqDM.js";import"./GridLegacy-nAhtZnNO.js";import"./ResearchProjectForm-BnIiWq3D.js";import"./TextFieldWithWordLimit-DtZenxID.js";import"./AuthenticatedRequirement-BUagdQ6B.js";import"./CertificationRequirement-0FQi6hl-.js";import"./TwoFactorAuthEnabledRequirement-DIAmc0d-.js";import"./ValidationRequirement-egTRxfs2.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-CfJTJnGP.js";import"./RejectDataAccessRequestModal-B4PSIoT2.js";import"./CannedRejectionDialog-wUnzXq8c.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-BSBfViGH.js";import"./Checkbox-DGCzgHVy.js";import"./Grid-B4lamEEo.js";import"./upperFirst-BAkcJvH8.js";import"./_stringToArray-C1BtncIx.js";const Le={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),s.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return t.json(a,{status:200})}),s.get(`${e}${R(":id")}`,()=>t.json(m,{status:200})),s.get(`${e}${E(":id")}`,()=>t.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),s.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>t.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),s.put(`${e}${i(":id")}`,async({request:r})=>t.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[s.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return t.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const xe=["Demo","DemoError"];export{o as Demo,n as DemoError,xe as __namedExportsOrder,Le as default};
