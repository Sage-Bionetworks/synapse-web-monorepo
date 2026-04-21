import{z as u,b as e,o as d,s,kq as i,kr as c,H as t,ks as R,i as m,kt as E,ku as _,a0 as I,dH as S,k9 as O}from"./iframe-DeCZWsOw.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-BJyodNka.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-DMIsk_Zj.js";import"./useAccessRequirements-BRAxiTze.js";import"./index-C-sY2UDa.js";import"./_baseOrderBy-CQyk44FF.js";import"./_baseIteratee-CIfFj-z5.js";import"./_baseMap-DC3gc6Nz.js";import"./_baseEach-Dz2eYAP2.js";import"./useInfiniteQuery-U4Po-hj0.js";import"./groupBy-CBNs1UlB.js";import"./_createAggregator-CMKjUMA_.js";import"./DialogBase-KILzPQhc.js";import"./Close-C8-LQoZ0.js";import"./HelpPopover-CwKb1-x2.js";import"./MarkdownPopover-jZMkPkG9.js";import"./LightTooltip-B9fHYLYn.js";import"./MarkdownSynapse-D0mIxpTT.js";import"./SkeletonButton-KOOFtLVu.js";import"./SkeletonInlineBlock-Dvt7Y2hl.js";import"./SkeletonTable-wLNyC9qX.js";import"./SkeletonParagraph-Bh8QkB1r.js";import"./EntityLink-Bbl9sRRT.js";import"./useEntity-CBiaU1hI.js";import"./pickBy-B-Moz5ZX.js";import"./isString-B4eYWujz.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-D0P5jgr-.js";import"./useGetEntityHeaders-BQCi1wlG.js";import"./EntityIcon-YleBpMuR.js";import"./ErrorChip-BDc9RgAj.js";import"./Chip-Zt9ByBCz.js";import"./UserOrTeamBadge-CexbrvGK.js";import"./UserBadge-Bzk1CSGa.js";import"./useUserBundle-x45H33EG.js";import"./MenuItem-BwXWDpmH.js";import"./Card-B6034kBB.js";import"./TeamBadge-fxG6dfPZ.js";import"./UnmanagedACTAccessRequirementItem-Cg6177Z7.js";import"./RequirementItem-BUrGmrbM.js";import"./CheckTwoTone-D5QffFLv.js";import"./ManagedACTAccessRequirementItemView-BAXiQdUB.js";import"./SelfSignAccessRequirementItem-BIY0oabP.js";import"./DataAccessRequestAccessorsFilesForm-3SoSAHIN.js";import"./enums-B0Mg_tkc.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-6nc1eT33.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-DF6_I5od.js";import"./UserSearchBox-DiXQAbe7.js";import"./useDebouncedEffect-Bb91ovzl.js";import"./Autocomplete-BMy6RmqV.js";import"./usePreviousProps-Dy-mp2ym.js";import"./RadioGroup-BHT7V9e6.js";import"./Radio-CLXsYHdC.js";import"./SwitchBase-D0NKihTE.js";import"./FormGroup-CWTsMuWD.js";import"./FormControlLabel-CDGc6Svz.js";import"./UploadDocumentField-ipgMgn6B.js";import"./FileUpload-BQN_13T7.js";import"./ManagedACTAccessRequirementFormWikiWrapper-Bb6G6YsK.js";import"./GridLegacy-D7kYFndq.js";import"./ResearchProjectForm-DC6q8-lK.js";import"./TextFieldWithWordLimit-8qHrgcGl.js";import"./AuthenticatedRequirement-0NGiyauf.js";import"./CertificationRequirement-B8oFmRSR.js";import"./TwoFactorAuthEnabledRequirement-Ba3WEA_E.js";import"./ValidationRequirement-oyuP5MpF.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-Bfj7C2S4.js";import"./RejectDataAccessRequestModal-BaG6vyJt.js";import"./CannedRejectionDialog-DmEarMlf.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-BEm0Hfbq.js";import"./Checkbox-BTel-voD.js";import"./Grid-BBpd3EAB.js";import"./upperFirst-DKidVO03.js";import"./_stringToArray-BZiosPPZ.js";const xe={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),s.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return t.json(a,{status:200})}),s.get(`${e}${R(":id")}`,()=>t.json(m,{status:200})),s.get(`${e}${E(":id")}`,()=>t.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),s.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>t.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),s.put(`${e}${i(":id")}`,async({request:r})=>t.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[s.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return t.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
