import{z as d,b as e,o as u,s,kp as i,kq as c,H as t,kr as R,i as m,ks as E,kt as _,a0 as I,dG as S,k8 as O}from"./iframe-D7cxPiDf.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-DEE2LBBH.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-Bx7L4HiY.js";import"./useAccessRequirements-Z2Fytl5q.js";import"./index-Dfurbkx6.js";import"./_baseOrderBy-CrKH7iu3.js";import"./_baseIteratee-TLvHA3OX.js";import"./_baseMap-lHyQJgq8.js";import"./_baseEach-BqFsp9gH.js";import"./useInfiniteQuery-8o2gAKoR.js";import"./groupBy-DaSVELaS.js";import"./_createAggregator-DnVQeki1.js";import"./DialogBase-5a5Z8JWG.js";import"./Close-Du54B76W.js";import"./HelpPopover-dkwX9Qyj.js";import"./MarkdownPopover-BoWdnzj9.js";import"./LightTooltip-BKRysDKC.js";import"./MarkdownSynapse-BKDmyY35.js";import"./SkeletonButton-C1ogbO9H.js";import"./SkeletonInlineBlock-CPizO8Fa.js";import"./SkeletonTable-CXYD3wmd.js";import"./SkeletonParagraph-BqM2-1Ca.js";import"./EntityLink-DHIudBb_.js";import"./useEntity-wh1b78ru.js";import"./pickBy-B_aDNz0n.js";import"./isString-BrOW184h.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CyJ-j5um.js";import"./useGetEntityHeaders-Nf3Wk7OG.js";import"./EntityIcon-BmxcsFw0.js";import"./ErrorChip-CG5eXOkR.js";import"./Chip-DysZYHv9.js";import"./UserOrTeamBadge-fPQHcD3V.js";import"./UserBadge-fquBPCcK.js";import"./useUserBundle-BfK4pX7T.js";import"./MenuItem-D-DyuXNw.js";import"./Card-w3ZTOvJG.js";import"./TeamBadge-DS3X4FjG.js";import"./UnmanagedACTAccessRequirementItem-D27FUnr_.js";import"./RequirementItem-CfWHWvxA.js";import"./LockTwoTone-CP2O4j4R.js";import"./ManagedACTAccessRequirementItemView-CWgVLDtq.js";import"./SelfSignAccessRequirementItem-BUMfWwXg.js";import"./DataAccessRequestAccessorsFilesForm-BPsxatI-.js";import"./enums-BtzJC151.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-BoorwxYz.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-_qohQ6xx.js";import"./UserSearchBox-DLYhe0E8.js";import"./useDebouncedEffect-7E0-czL9.js";import"./Autocomplete-qIDixVzh.js";import"./usePreviousProps-4c5lPU7n.js";import"./RadioGroup-D42PkQCG.js";import"./Radio-CKZJMBYO.js";import"./SwitchBase-YNIgnTmA.js";import"./FormGroup-BU_oUDT0.js";import"./FormControlLabel-C2lYTuKb.js";import"./UploadDocumentField-OrvcGdyw.js";import"./FileUpload-DU8xOVe4.js";import"./ManagedACTAccessRequirementFormWikiWrapper-CpMASM9h.js";import"./GridLegacy-CMt21OBP.js";import"./ResearchProjectForm-C3mBIUNN.js";import"./TextFieldWithWordLimit-CmG3-FdW.js";import"./AuthenticatedRequirement-BcwmDolt.js";import"./CertificationRequirement-BUDvrgjT.js";import"./TwoFactorAuthEnabledRequirement-BTIVRn-4.js";import"./ValidationRequirement-BidCRUty.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-BIburfu_.js";import"./RejectDataAccessRequestModal-3ipVD5Di.js";import"./CannedRejectionDialog-CdBO69on.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-DUvSWS7G.js";import"./Checkbox-D7IQ0D5W.js";import"./Grid-B9SC3qZ6.js";import"./upperFirst-Ipgk9-Zj.js";import"./_stringToArray-DdwsldGd.js";const Le={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),s.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return t.json(a,{status:200})}),s.get(`${e}${R(":id")}`,()=>t.json(m,{status:200})),s.get(`${e}${E(":id")}`,()=>t.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),s.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>t.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),s.put(`${e}${i(":id")}`,async({request:r})=>t.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[s.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return t.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
