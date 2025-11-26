import{jK as T}from"./iframe-DbV7x0Bc.js";import{S as C}from"./SchemaDrivenAnnotationEditor-BoFTdPAu.js";import"./index-r8ZA1smB.js";import"./useEntity-DLaC8iaG.js";import"./pickBy-BpZduv0C.js";import"./isString-Dz9SZekD.js";import"./_baseIteratee-Ce614RAD.js";import"./useQueries-DZBfPbhP.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-CQxVeuk5.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CVQ1PPlf.js";import"./useSchema-BB89nZtx.js";import"./index-DhXy6coK.js";import"./enums-8UZ-jtlD.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-DrahPvDJ.js";import"./uniq-whkMau-N.js";import"./forEach-B8iwwgef.js";import"./Grid-C1yu_EgY.js";import"./ListItem-BQgkV2D4.js";import"./listItemButtonClasses-B5QWTHx6.js";import"./ListItemIcon-Bl6AopYq.js";import"./MenuItem-tbPVUwvL.js";import"./ListItemText-BR616S4V.js";import"./ArrowUpward-D7uKonlY.js";import"./ContentCopy-CxktDSyX.js";import"./FormControlLabel-DJbMYuJO.js";import"./Checkbox-Cz2XkOYO.js";import"./SwitchBase-DGuqDH3e.js";import"./FormGroup-C_AmRPJM.js";import"./RadioGroup-h-T1F84o.js";import"./Radio-DrLKHt1e.js";import"./Slider-4HVBSVAV.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-fMOwxCoC.js";import"./DialogBase-BD7SYBJ5.js";import"./Close--0rVQaHw.js";import"./HelpPopover-D60yTUPQ.js";import"./MarkdownPopover-CeZB9GVN.js";import"./LightTooltip-Djp-H0Gj.js";import"./MarkdownSynapse-jLoV8o0B.js";import"./SkeletonButton-CEdKSSw-.js";import"./SkeletonInlineBlock-DPkHUg7t.js";import"./SkeletonTable-D35PHSUs.js";import"./SkeletonParagraph-CtXDblG_.js";import"./JsonSchemaForm-iTueVxEf.js";import"./GridLegacy-DdWP4TB9.js";import"./HelpTwoTone-DfBzRisC.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-BX76tvZ7.js";import"./_createAggregator-CB--yn0V.js";import"./_baseMap-Tp95EtUm.js";import"./DateTimePicker-BFIkGekA.js";import"./useMobilePicker-CXTKP2bO.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-CD8h06zt.js";import"./index-D2Qrjv69.js";import"./Chip-Df3eRAme.js";import"./Tabs-Dp2ZCz1q.js";import"./KeyboardArrowRight-DGzmsQvK.js";import"./Autocomplete-DPxJz7PX.js";import"./usePreviousProps-Ce7xHsAY.js";import"./use-deep-compare-effect.esm-DdgMJnVC.js";import"./TextWidget-QEQam__U.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Lr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-Arrays',
    entityId: 'syn25959281'
  }
}`,...(m=(a=r.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};var c,d,y;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-IfThenElse'
  }
}`,...(y=(d=e.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var u,h,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    schemaId: 'nkauer-ad.main'
  }
}`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var S,l,A;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    entityId: 'syn32673093'
  }
}`,...(A=(l=o.parameters)==null?void 0:l.docs)==null?void 0:A.source}}};var f,v,I;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    entityId: 'syn25959288'
  }
}`,...(I=(v=n.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var E,q,b;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    validationSchema: {
      $schema: 'http://json-schema.org/draft-07/schema#',
      $id: \`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/\${mockSchemaBinding.jsonSchemaVersionInfo.$id}\`,
      type: 'object',
      properties: {
        country: {
          enum: ['USA', 'CA'],
          description: 'Test description for country property'
        },
        showStringArray: {
          type: 'boolean'
        }
      },
      required: ['country'],
      allOf: [{
        if: {
          properties: {
            country: {
              const: 'USA'
            }
          },
          required: ['country']
        },
        then: {
          properties: {
            state: {
              type: 'string'
            }
          },
          required: ['state']
        }
      }, {
        if: {
          properties: {
            country: {
              const: 'CA'
            }
          },
          required: ['country']
        },
        then: {
          properties: {
            province: {
              type: 'string'
            }
          },
          required: ['province']
        }
      }, {
        if: {
          properties: {
            showStringArray: {
              const: true
            }
          },
          required: ['showStringArray']
        },
        then: {
          properties: {
            stringArray: {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          }
        }
      }]
    }
  }
}`,...(b=(q=s.parameters)==null?void 0:q.docs)==null?void 0:b.source}}};const Mr=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Mr as __namedExportsOrder,Lr as default};
