import{d as i,e as o,f as a,m as c,h as p,i as g,k as R,l as M,n as _,b as e,H as y,S as E,o as s,p as u,q as n,s as C,t as q,u as P,A as b,v as f,w as t}from"./iframe-DuFc9wy7.js";import{A as w}from"./AccessRequirementList-DoPpXGlS.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CvmgBl8a.js";import"./index-CH5M0AIg.js";import"./_baseOrderBy-DE_-pFzz.js";import"./_baseIteratee-qsGxLCcA.js";import"./_baseMap-CQziI25s.js";import"./_baseEach-BR_mWg9y.js";import"./useQueries-DQWP9YtM.js";import"./useInfiniteQuery-DzgY0_q9.js";import"./groupBy-DX2-17_O.js";import"./_createAggregator-DpXSnwT8.js";import"./DialogBase-BR60Qdy4.js";import"./Close-DDp2NBBe.js";import"./HelpPopover-DYKBAVc-.js";import"./MarkdownPopover-DymcBMfp.js";import"./LightTooltip-BztaycEr.js";import"./MarkdownSynapse-BVL-tgRC.js";import"./SkeletonButton-p5NHVcC3.js";import"./SkeletonInlineBlock-DWi7tVQO.js";import"./SkeletonTable-9HY8re28.js";import"./SkeletonParagraph-DXhZKBI2.js";import"./EntityLink-DyUzOJ9x.js";import"./useEntity-B7cW9knU.js";import"./pickBy-BR3FB8tc.js";import"./isString-Hxb7yJlJ.js";import"./useSuspenseQuery-DxSHSM8_.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-4CFtjNR5.js";import"./useGetEntityHeaders-Bb0WFsEd.js";import"./EntityIcon-BcEulVYE.js";import"./ErrorChip-BI-Ibx5e.js";import"./Chip-Bhz-2AzF.js";import"./UserOrTeamBadge-C3zOagyf.js";import"./UserBadge-B3eZrs9B.js";import"./useUserBundle-Dse17CN3.js";import"./MenuItem-BaPxBIGw.js";import"./Card-DG5CjRLq.js";import"./TeamBadge-C6-IDH2J.js";import"./UnmanagedACTAccessRequirementItem-upY6r58i.js";import"./RequirementItem-Bchp7jvO.js";import"./LockTwoTone-B4xRsKPf.js";import"./UserSearchBoxV2-DAPeifG9.js";import"./useDebouncedEffect-_d4wlOVi.js";import"./use-deep-compare-effect.esm-Bdc5x1y7.js";import"./uniq-DF_zmgwE.js";import"./without-DRrBpKd8.js";import"./Select-aab027f3.esm-BN-pE_5t.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-ClgTHi6A.js";import"./SelfSignAccessRequirementItem-BF8SDNjj.js";import"./DataAccessRequestAccessorsFilesForm-s9mWWQF0.js";import"./enums-BURaCo-W.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-mKJYW6bU.js";import"./RadioGroup-Cl0yXWAB.js";import"./Radio-DV1Kxqyu.js";import"./SwitchBase-XjUV0H1u.js";import"./FormGroup-D8X_uLLt.js";import"./FormControlLabel-Dadrkpu7.js";import"./UploadDocumentField-CVRNhH7S.js";import"./FileUpload-C1M2Gb-L.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BGUuExio.js";import"./GridLegacy-BmTV8VyM.js";import"./ResearchProjectForm-CPMf6f7L.js";import"./TextFieldWithWordLimit-BF0gcshl.js";import"./AuthenticatedRequirement--Fj5AOOT.js";import"./CertificationRequirement-sRen2WEn.js";import"./TwoFactorAuthEnabledRequirement-MBjbl5jh.js";import"./ValidationRequirement-BH2nizkq.js";const Xe={title:"Governance/Data Access Request Flow/AccessRequirementList",component:w,parameters:{stack:"mock"},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}};function d(r){return[_.get(`${e}/auth/v1/2fa`,()=>{const k={status:r?"ENABLED":"DISABLED"};return y.json(k,{status:200})})]}const A={args:{entityId:c.id,renderAsModal:!0},parameters:{msw:{handlers:[...i(e),...d(!1),...o(e),...a(e,void 0,[])]}}},S={parameters:{msw:{handlers:[...i(e),p(e,!0,!0),...d(!0),...o(e),...a(e),...g(e,[{accessRequirementId:u.id.toString(),concreteType:"org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus",isApproved:!0,currentSubmissionStatus:{submissionId:s.id,submittedBy:s.submittedBy,modifiedOn:s.modifiedOn,state:E.APPROVED}},{accessRequirementId:n.id.toString(),concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!0},{accessRequirementId:C.id.toString(),concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!0},{accessRequirementId:q.id.toString(),concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!0}]),...R(e)]}},args:{entityId:c.id,isAuthenticated:!0,renderAsModal:!0}},T=[...P,{...u,id:21},{...C,id:22},{...n,id:23},{...q,id:24}],m={parameters:{msw:{handlers:[...i(e),p(e,!0,!0),...d(!0),...o(e),...a(e,void 0,T),...g(e,[{accessRequirementId:u.id.toString(),concreteType:"org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus",isApproved:!0,currentSubmissionStatus:{submissionId:s.id,submittedBy:s.submittedBy,modifiedOn:s.modifiedOn,state:E.APPROVED}},{accessRequirementId:n.id.toString(),concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!0},{accessRequirementId:C.id.toString(),concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!0},{accessRequirementId:q.id.toString(),concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!0},{accessRequirementId:"21",concreteType:"org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus",isApproved:!1},{accessRequirementId:"22",concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!1},{accessRequirementId:"23",concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!1},{accessRequirementId:"24",concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!1}]),...R(e),...M(e),_.post(`${e}${b}`,()=>{const r={requirementId:q.id,submitterId:t.toString(),accessorId:t.toString(),state:f.APPROVED,id:123,etag:"etag",createdOn:new Date().toISOString(),modifiedOn:new Date().toISOString(),createdBy:String(t),modifiedBy:String(t)};return y.json(r,{status:201})})]}},args:{entityId:c.id,isAuthenticated:!0,renderAsModal:!0}},O={parameters:{msw:{handlers:[...i(e),p(e,!0,!1),...d(!0),...o(e),...a(e),...g(e,[{accessRequirementId:n.id.toString(),concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!1}]),...R(e),_.post(`${e}${b}`,()=>{const r={requirementId:n.id,submitterId:t.toString(),accessorId:t.toString(),state:f.APPROVED,id:123,etag:"etag",createdOn:new Date().toISOString(),modifiedOn:new Date().toISOString(),createdBy:String(t),modifiedBy:String(t)};return y.json(r,{status:201})})]}},args:{entityId:c.id,renderAsModal:!0,isAuthenticated:!0}},l={parameters:{msw:{handlers:[...i(e),p(e,!1,!0),...d(!0),...o(e),...a(e),...g(e,[{accessRequirementId:n.id.toString(),concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!1}]),...R(e),_.post(`${e}${b}`,()=>{const r={requirementId:n.id,submitterId:t.toString(),accessorId:t.toString(),state:f.APPROVED,id:123,etag:"etag",createdOn:new Date().toISOString(),modifiedOn:new Date().toISOString(),createdBy:String(t),modifiedBy:String(t)};return y.json(r,{status:201})})]}},args:{entityId:c.id,renderAsModal:!0,isAuthenticated:!0}},I={parameters:{msw:{handlers:[...i(e),p(e,!0,!0),...d(!0),...o(e),...a(e,void 0,[u]),...g(e,[{accessRequirementId:u.id.toString(),concreteType:"org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus",isApproved:!1,currentSubmissionStatus:{submissionId:s.id,submittedBy:s.submittedBy,modifiedOn:s.modifiedOn,state:E.REJECTED,rejectedReason:`Thank you for requesting access, but you were rejected. Here's why:
 * You did not meet the requirements.
 * Another reason: you did not meet the requirements.
Feel free to apply again.`}}]),...R(e),...M(e)]}},args:{entityId:c.id,isAuthenticated:!0,renderAsModal:!0}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    entityId: mockFileEntity.id,
    renderAsModal: true
  },
  parameters: {
    msw: {
      handlers: [...getEntityHandlers(MOCK_REPO_ORIGIN), ...getTwoFactorAuthStatusHandler(false), ...getAccessRequirementHandlers(MOCK_REPO_ORIGIN), ...getAccessRequirementEntityBindingHandlers(MOCK_REPO_ORIGIN, undefined, [])]
    }
  }
}`,...A.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [...getEntityHandlers(MOCK_REPO_ORIGIN), getCurrentUserCertifiedValidatedHandler(MOCK_REPO_ORIGIN, true, true), ...getTwoFactorAuthStatusHandler(true), ...getAccessRequirementHandlers(MOCK_REPO_ORIGIN), ...getAccessRequirementEntityBindingHandlers(MOCK_REPO_ORIGIN), ...getAccessRequirementStatusHandlers(MOCK_REPO_ORIGIN, [{
        accessRequirementId: mockManagedACTAccessRequirement.id.toString(),
        concreteType: 'org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus',
        isApproved: true,
        /* Current submission status. Will be undefined if no submission has been created */
        currentSubmissionStatus: {
          submissionId: mockApprovedSubmission.id,
          submittedBy: mockApprovedSubmission.submittedBy,
          modifiedOn: mockApprovedSubmission.modifiedOn,
          state: SubmissionState.APPROVED
        }
      }, {
        accessRequirementId: mockSelfSignAccessRequirement.id.toString(),
        concreteType: 'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus',
        isApproved: true
      }, {
        accessRequirementId: mockToUAccessRequirement.id.toString(),
        concreteType: 'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus',
        isApproved: true
      }, {
        accessRequirementId: mockACTAccessRequirement.id.toString(),
        concreteType: 'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus',
        isApproved: true
      }]), ...getWikiHandlers(MOCK_REPO_ORIGIN)]
    }
  },
  args: {
    entityId: mockFileEntity.id,
    isAuthenticated: true,
    renderAsModal: true
  }
}`,...S.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [...getEntityHandlers(MOCK_REPO_ORIGIN), getCurrentUserCertifiedValidatedHandler(MOCK_REPO_ORIGIN, true, true), ...getTwoFactorAuthStatusHandler(true), ...getAccessRequirementHandlers(MOCK_REPO_ORIGIN), ...getAccessRequirementEntityBindingHandlers(MOCK_REPO_ORIGIN, undefined, expandedMockAccessRequirements), ...getAccessRequirementStatusHandlers(MOCK_REPO_ORIGIN, [{
        accessRequirementId: mockManagedACTAccessRequirement.id.toString(),
        concreteType: 'org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus',
        isApproved: true,
        /* Current submission status. Will be undefined if no submission has been created */
        currentSubmissionStatus: {
          submissionId: mockApprovedSubmission.id,
          submittedBy: mockApprovedSubmission.submittedBy,
          modifiedOn: mockApprovedSubmission.modifiedOn,
          state: SubmissionState.APPROVED
        }
      }, {
        accessRequirementId: mockSelfSignAccessRequirement.id.toString(),
        concreteType: 'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus',
        isApproved: true
      }, {
        accessRequirementId: mockToUAccessRequirement.id.toString(),
        concreteType: 'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus',
        isApproved: true
      }, {
        accessRequirementId: mockACTAccessRequirement.id.toString(),
        concreteType: 'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus',
        isApproved: true
      }, {
        accessRequirementId: '21',
        concreteType: 'org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus',
        isApproved: false
      }, {
        accessRequirementId: '22',
        concreteType: 'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus',
        isApproved: false
      }, {
        accessRequirementId: '23',
        concreteType: 'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus',
        isApproved: false
      }, {
        accessRequirementId: '24',
        concreteType: 'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus',
        isApproved: false
      }]), ...getWikiHandlers(MOCK_REPO_ORIGIN), ...getResearchProjectHandlers(MOCK_REPO_ORIGIN), http.post(\`\${MOCK_REPO_ORIGIN}\${ACCESS_APPROVAL}\`, () => {
        const response: AccessApproval = {
          requirementId: mockACTAccessRequirement.id,
          submitterId: MOCK_USER_ID.toString(),
          accessorId: MOCK_USER_ID.toString(),
          state: ApprovalState.APPROVED,
          id: 123,
          etag: 'etag',
          createdOn: new Date().toISOString(),
          modifiedOn: new Date().toISOString(),
          createdBy: String(MOCK_USER_ID),
          modifiedBy: String(MOCK_USER_ID)
        };
        return HttpResponse.json(response, {
          status: 201
        });
      })]
    }
  },
  args: {
    entityId: mockFileEntity.id,
    isAuthenticated: true,
    renderAsModal: true
  }
}`,...m.parameters?.docs?.source},description:{story:"Verify ARs are grouped by type, and sorted by completion status",...m.parameters?.docs?.description}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [...getEntityHandlers(MOCK_REPO_ORIGIN), getCurrentUserCertifiedValidatedHandler(MOCK_REPO_ORIGIN, true, false), ...getTwoFactorAuthStatusHandler(true), ...getAccessRequirementHandlers(MOCK_REPO_ORIGIN), ...getAccessRequirementEntityBindingHandlers(MOCK_REPO_ORIGIN), ...getAccessRequirementStatusHandlers(MOCK_REPO_ORIGIN, [{
        accessRequirementId: mockSelfSignAccessRequirement.id.toString(),
        concreteType: 'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus',
        isApproved: false
      }]), ...getWikiHandlers(MOCK_REPO_ORIGIN), http.post(\`\${MOCK_REPO_ORIGIN}\${ACCESS_APPROVAL}\`, () => {
        const response: AccessApproval = {
          requirementId: mockSelfSignAccessRequirement.id,
          submitterId: MOCK_USER_ID.toString(),
          accessorId: MOCK_USER_ID.toString(),
          state: ApprovalState.APPROVED,
          id: 123,
          etag: 'etag',
          createdOn: new Date().toISOString(),
          modifiedOn: new Date().toISOString(),
          createdBy: String(MOCK_USER_ID),
          modifiedBy: String(MOCK_USER_ID)
        };
        return HttpResponse.json(response, {
          status: 201
        });
      })]
    }
  },
  args: {
    entityId: mockFileEntity.id,
    renderAsModal: true,
    isAuthenticated: true
  }
}`,...O.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [...getEntityHandlers(MOCK_REPO_ORIGIN), getCurrentUserCertifiedValidatedHandler(MOCK_REPO_ORIGIN, false, true), ...getTwoFactorAuthStatusHandler(true), ...getAccessRequirementHandlers(MOCK_REPO_ORIGIN), ...getAccessRequirementEntityBindingHandlers(MOCK_REPO_ORIGIN), ...getAccessRequirementStatusHandlers(MOCK_REPO_ORIGIN, [{
        accessRequirementId: mockSelfSignAccessRequirement.id.toString(),
        concreteType: 'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus',
        isApproved: false
      }]), ...getWikiHandlers(MOCK_REPO_ORIGIN), http.post(\`\${MOCK_REPO_ORIGIN}\${ACCESS_APPROVAL}\`, () => {
        const response: AccessApproval = {
          requirementId: mockSelfSignAccessRequirement.id,
          submitterId: MOCK_USER_ID.toString(),
          accessorId: MOCK_USER_ID.toString(),
          state: ApprovalState.APPROVED,
          id: 123,
          etag: 'etag',
          createdOn: new Date().toISOString(),
          modifiedOn: new Date().toISOString(),
          createdBy: String(MOCK_USER_ID),
          modifiedBy: String(MOCK_USER_ID)
        };
        return HttpResponse.json(response, {
          status: 201
        });
      })]
    }
  },
  args: {
    entityId: mockFileEntity.id,
    renderAsModal: true,
    isAuthenticated: true
  }
}`,...l.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [...getEntityHandlers(MOCK_REPO_ORIGIN), getCurrentUserCertifiedValidatedHandler(MOCK_REPO_ORIGIN, true, true), ...getTwoFactorAuthStatusHandler(true), ...getAccessRequirementHandlers(MOCK_REPO_ORIGIN), ...getAccessRequirementEntityBindingHandlers(MOCK_REPO_ORIGIN, undefined, [mockManagedACTAccessRequirement]), ...getAccessRequirementStatusHandlers(MOCK_REPO_ORIGIN, [{
        accessRequirementId: mockManagedACTAccessRequirement.id.toString(),
        concreteType: 'org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus',
        isApproved: false,
        /* Current submission status. Will be undefined if no submission has been created */
        currentSubmissionStatus: {
          submissionId: mockApprovedSubmission.id,
          submittedBy: mockApprovedSubmission.submittedBy,
          modifiedOn: mockApprovedSubmission.modifiedOn,
          state: SubmissionState.REJECTED,
          rejectedReason: "Thank you for requesting access, but you were rejected. Here's why:\\n * You did not meet the requirements.\\n * Another reason: you did not meet the requirements.\\nFeel free to apply again."
        }
      }]), ...getWikiHandlers(MOCK_REPO_ORIGIN), ...getResearchProjectHandlers(MOCK_REPO_ORIGIN)]
    }
  },
  args: {
    entityId: mockFileEntity.id,
    isAuthenticated: true,
    renderAsModal: true
  }
}`,...I.parameters?.docs?.source}}};const Ze=["NoRequirements","HasMetRequirements","HasUnmetRequirementsOfEveryType","NotValidated","NotCertified","RejectedRequirement"];export{S as HasMetRequirements,m as HasUnmetRequirementsOfEveryType,A as NoRequirements,l as NotCertified,O as NotValidated,I as RejectedRequirement,Ze as __namedExportsOrder,Xe as default};
