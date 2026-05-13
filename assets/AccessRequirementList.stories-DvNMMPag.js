import{n as e}from"./chunk-jRWAZmH_.js";import{C as t,Ct as n,Ft as r,Hv as i,I as a,I_ as o,Ih as s,It as c,L as l,Mt as u,Nt as d,Ot as f,St as p,Xt as m,Yt as h,Zt as g,a as _,ag as v,bt as y,eg as b,f as x,jt as S,jv as C,kt as w,ng as T,nn as E,o as D,pn as O,tn as k,u as A,vt as j,w as M,xt as N,yt as P}from"./iframe-DsTrbw8G.js";import{r as F,t as I}from"./AccessRequirementList-Dq_alxs8.js";function L(e){return[g.get(`${T}/auth/v1/2fa`,()=>{let t={status:e?`ENABLED`:`DISABLED`};return m.json(t,{status:200})})]}var R,z,B,V,H,U,W,G,K,q;e((()=>{f(),p(),k(),N(),l(),M(),x(),D(),O(),b(),v(),o(),h(),F(),R={title:`Governance/Data Access Request Flow/AccessRequirementList`,component:I,parameters:{stack:`mock`},argTypes:{isAuthenticated:{control:{type:`boolean`}}},args:{isAuthenticated:!0}},z={args:{entityId:E.id,renderAsModal:!0},parameters:{msw:{handlers:[...a(T),...L(!1),...P(T),...j(T,void 0,[])]}}},B={parameters:{msw:{handlers:[...a(T),A(T,!0,!0),...L(!0),...P(T),...j(T),...y(T,[{accessRequirementId:d.id.toString(),concreteType:`org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus`,isApproved:!0,currentSubmissionStatus:{submissionId:n.id,submittedBy:n.submittedBy,modifiedOn:n.modifiedOn,state:C.APPROVED}},{accessRequirementId:r.id.toString(),concreteType:`org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus`,isApproved:!0},{accessRequirementId:c.id.toString(),concreteType:`org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus`,isApproved:!0},{accessRequirementId:w.id.toString(),concreteType:`org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus`,isApproved:!0}]),..._(T)]}},args:{entityId:E.id,isAuthenticated:!0,renderAsModal:!0}},V=[...S,{...d,id:21},{...c,id:22},{...r,id:23},{...w,id:24}],H={parameters:{msw:{handlers:[...a(T),A(T,!0,!0),...L(!0),...P(T),...j(T,void 0,V),...y(T,[{accessRequirementId:d.id.toString(),concreteType:`org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus`,isApproved:!0,currentSubmissionStatus:{submissionId:n.id,submittedBy:n.submittedBy,modifiedOn:n.modifiedOn,state:C.APPROVED}},{accessRequirementId:r.id.toString(),concreteType:`org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus`,isApproved:!0},{accessRequirementId:c.id.toString(),concreteType:`org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus`,isApproved:!0},{accessRequirementId:w.id.toString(),concreteType:`org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus`,isApproved:!0},{accessRequirementId:`21`,concreteType:`org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus`,isApproved:!1},{accessRequirementId:`22`,concreteType:`org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus`,isApproved:!1},{accessRequirementId:`23`,concreteType:`org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus`,isApproved:!1},{accessRequirementId:`24`,concreteType:`org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus`,isApproved:!1}]),..._(T),...t(T),g.post(`${T}${s}`,()=>{let e={requirementId:w.id,submitterId:`999`,accessorId:`999`,state:i.APPROVED,id:123,etag:`etag`,createdOn:new Date().toISOString(),modifiedOn:new Date().toISOString(),createdBy:`999`,modifiedBy:`999`};return m.json(e,{status:201})})]}},args:{entityId:E.id,isAuthenticated:!0,renderAsModal:!0}},U={parameters:{msw:{handlers:[...a(T),A(T,!0,!1),...L(!0),...P(T),...j(T),...y(T,[{accessRequirementId:r.id.toString(),concreteType:`org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus`,isApproved:!1}]),..._(T),g.post(`${T}${s}`,()=>{let e={requirementId:r.id,submitterId:`999`,accessorId:`999`,state:i.APPROVED,id:123,etag:`etag`,createdOn:new Date().toISOString(),modifiedOn:new Date().toISOString(),createdBy:`999`,modifiedBy:`999`};return m.json(e,{status:201})})]}},args:{entityId:E.id,renderAsModal:!0,isAuthenticated:!0}},W={parameters:{msw:{handlers:[...a(T),A(T,!1,!0),...L(!0),...P(T),...j(T),...y(T,[{accessRequirementId:r.id.toString(),concreteType:`org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus`,isApproved:!1}]),..._(T),g.post(`${T}${s}`,()=>{let e={requirementId:r.id,submitterId:`999`,accessorId:`999`,state:i.APPROVED,id:123,etag:`etag`,createdOn:new Date().toISOString(),modifiedOn:new Date().toISOString(),createdBy:`999`,modifiedBy:`999`};return m.json(e,{status:201})})]}},args:{entityId:E.id,renderAsModal:!0,isAuthenticated:!0}},G={parameters:{msw:{handlers:[...a(T),A(T,!0,!0),...L(!0),...P(T),...j(T,void 0,[d]),...y(T,[{accessRequirementId:d.id.toString(),concreteType:`org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus`,isApproved:!1,currentSubmissionStatus:{submissionId:n.id,submittedBy:n.submittedBy,modifiedOn:n.modifiedOn,state:C.REJECTED,rejectedReason:`Thank you for requesting access, but you were rejected. Here's why:
 * You did not meet the requirements.
 * Another reason: you did not meet the requirements.
Feel free to apply again.`}}]),..._(T),...t(T)]}},args:{entityId:E.id,isAuthenticated:!0,renderAsModal:!0}},K={args:{entityId:E.id,isAuthenticated:!0,renderAsModal:!0},parameters:{msw:{handlers:[...a(T),A(T,!0,!0),...L(!0),...P(T),...j(T,void 0,[u]),...y(T,[{accessRequirementId:u.id.toString(),concreteType:`org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus`,isApproved:!1}]),..._(T)]}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    entityId: mockFileEntity.id,
    renderAsModal: true
  },
  parameters: {
    msw: {
      handlers: [...getEntityHandlers(MOCK_REPO_ORIGIN), ...getTwoFactorAuthStatusHandler(false), ...getAccessRequirementHandlers(MOCK_REPO_ORIGIN), ...getAccessRequirementEntityBindingHandlers(MOCK_REPO_ORIGIN, undefined, [])]
    }
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source},description:{story:`Verify ARs are grouped by type, and sorted by completion status`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    entityId: mockFileEntity.id,
    isAuthenticated: true,
    renderAsModal: true
  },
  parameters: {
    msw: {
      handlers: [...getEntityHandlers(MOCK_REPO_ORIGIN), getCurrentUserCertifiedValidatedHandler(MOCK_REPO_ORIGIN, true, true), ...getTwoFactorAuthStatusHandler(true), ...getAccessRequirementHandlers(MOCK_REPO_ORIGIN), ...getAccessRequirementEntityBindingHandlers(MOCK_REPO_ORIGIN, undefined, [mockLockAccessRequirement]), ...getAccessRequirementStatusHandlers(MOCK_REPO_ORIGIN, [{
        accessRequirementId: mockLockAccessRequirement.id.toString(),
        concreteType: 'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus',
        isApproved: false
      }]), ...getWikiHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...K.parameters?.docs?.source}}},q=[`NoRequirements`,`HasMetRequirements`,`HasUnmetRequirementsOfEveryType`,`NotValidated`,`NotCertified`,`RejectedRequirement`,`LockAccessRequirement`]}))();export{B as HasMetRequirements,H as HasUnmetRequirementsOfEveryType,K as LockAccessRequirement,z as NoRequirements,W as NotCertified,U as NotValidated,G as RejectedRequirement,q as __namedExportsOrder,R as default};