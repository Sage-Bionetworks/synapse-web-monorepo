import{z as u,b as e,o as d,s,kq as i,kr as c,H as t,ks as R,i as m,kt as E,ku as _,a0 as I,dH as S,k9 as O}from"./iframe-CZUUdnAP.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-CduTQmfF.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-DPIU5mic.js";import"./useAccessRequirements-DPho3mft.js";import"./index-fDzCYU54.js";import"./_baseOrderBy-BEqEe8Uq.js";import"./_baseIteratee-Cu60_Mvy.js";import"./_baseMap-CIeYxFCy.js";import"./_baseEach-DAbWNnVh.js";import"./useInfiniteQuery-C_MyS1FN.js";import"./groupBy-eU7pABTG.js";import"./_createAggregator-FIFYhWl-.js";import"./DialogBase-vGJ-9Ozq.js";import"./Close-C0cVzGCV.js";import"./HelpPopover-BVtbTHqG.js";import"./MarkdownPopover-D3m2bqb5.js";import"./LightTooltip-DSgBjgHB.js";import"./MarkdownSynapse-m6An14vR.js";import"./SkeletonButton-u1mXBMmd.js";import"./SkeletonInlineBlock-Dwwns8en.js";import"./SkeletonTable-B92SNSTz.js";import"./SkeletonParagraph-Dccn5vm_.js";import"./EntityLink-BE6ulM2T.js";import"./useEntity-CGzWG93n.js";import"./pickBy-BKwcq0Ux.js";import"./isString-d6qttKaI.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BHKutWda.js";import"./useGetEntityHeaders-DvZS3_9x.js";import"./EntityIcon-9wntPtel.js";import"./ErrorChip-CtvIgHRg.js";import"./Chip-vSFEg4gP.js";import"./UserOrTeamBadge-4SSEN_r1.js";import"./UserBadge-CgUWMwJt.js";import"./useUserBundle-CqpwNloT.js";import"./MenuItem-BQBfTSFf.js";import"./Card-BktRylCw.js";import"./TeamBadge-BGxFrnkp.js";import"./UnmanagedACTAccessRequirementItem-BDdnJszY.js";import"./RequirementItem-7Br8kNeu.js";import"./CheckTwoTone-C6TrQXW-.js";import"./ManagedACTAccessRequirementItemView-D0WIvdKU.js";import"./SelfSignAccessRequirementItem-C-1oiqx2.js";import"./DataAccessRequestAccessorsFilesForm-BZ11cBGb.js";import"./enums-C-h5Jx__.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-CoQFLPJv.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-DwlKAnKl.js";import"./UserSearchBox-CusV3gI5.js";import"./useDebouncedEffect-DAbATWp6.js";import"./Autocomplete-Dpt9MbEp.js";import"./usePreviousProps-BYJ5T-gX.js";import"./RadioGroup-Bt65-_CX.js";import"./Radio-Dde4Awwg.js";import"./SwitchBase-B1xcpsp0.js";import"./FormGroup-BlHjy926.js";import"./FormControlLabel-Cv5LGeMa.js";import"./UploadDocumentField-Dn0Wpkku.js";import"./FileUpload-BXvbPzHE.js";import"./ManagedACTAccessRequirementFormWikiWrapper-DCA2LLU2.js";import"./GridLegacy-CVqZ8Qs5.js";import"./ResearchProjectForm-DoEI2KIN.js";import"./TextFieldWithWordLimit-B4M3hIEL.js";import"./AuthenticatedRequirement-BAmOBqfL.js";import"./CertificationRequirement-BYK-JlUR.js";import"./TwoFactorAuthEnabledRequirement-Dy1A8G1B.js";import"./ValidationRequirement-Dy6bfZ2P.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-Bw_XtTNH.js";import"./RejectDataAccessRequestModal-CY5cWsAN.js";import"./CannedRejectionDialog-BgO-Tpt7.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-bHj4aTcl.js";import"./Checkbox-DsRD5Alo.js";import"./Grid-CYH6R9jX.js";import"./upperFirst-BxLOqPEe.js";import"./_stringToArray-BOY_Dgu1.js";const xe={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),s.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return t.json(a,{status:200})}),s.get(`${e}${R(":id")}`,()=>t.json(m,{status:200})),s.get(`${e}${E(":id")}`,()=>t.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),s.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>t.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),s.put(`${e}${i(":id")}`,async({request:r})=>t.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[s.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return t.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
