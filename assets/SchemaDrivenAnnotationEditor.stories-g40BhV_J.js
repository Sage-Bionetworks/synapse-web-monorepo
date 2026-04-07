import{jw as p}from"./iframe-BknA5AKQ.js";import{S as a}from"./SchemaDrivenAnnotationEditor-DUj_74JA.js";import"./index-Chi_LkuB.js";import"./useEntity-DPMi0o_T.js";import"./pickBy-DoG8KzPZ.js";import"./isString-R8upoJvM.js";import"./_baseIteratee-CSacSwwJ.js";import"./useInfiniteQuery-IfHRRpU9.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-vvNjbWO5.js";import"./useSchema-1BIoMirz.js";import"./index-29hRtXVE.js";import"./enums-D6WaIIll.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-UREiZOpt.js";import"./uniq-CSK8b-F9.js";import"./forEach-UWyboym_.js";import"./Add-BoaLypZW.js";import"./Grid-BIn9HLJX.js";import"./ListItem-ODMa0BLI.js";import"./listItemButtonClasses-Fsi9w07s.js";import"./ListItemIcon-GqxPCRFn.js";import"./MenuItem-BQAxjpVg.js";import"./ListItemText-D3lPR5ie.js";import"./ArrowUpward-CwWEVspm.js";import"./ContentCopy-BqKIShJN.js";import"./FormControlLabel-D6qH4hbx.js";import"./Checkbox-X4PIicdY.js";import"./SwitchBase-BdMKy0_S.js";import"./FormGroup-BAXt1Qow.js";import"./RadioGroup-Tg6JH8CJ.js";import"./Radio-B-qc4l9g.js";import"./Slider-DnSs5eKy.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-DEKZKJ8u.js";import"./DialogBase-2oKzQzDh.js";import"./Close-Dt0xqxPt.js";import"./HelpPopover-CoqMnHLA.js";import"./MarkdownPopover-UDNbtmIF.js";import"./LightTooltip-T0pPDs7d.js";import"./MarkdownSynapse-D0cltami.js";import"./SkeletonButton-DS3-vsq6.js";import"./SkeletonInlineBlock-CJPbZx5E.js";import"./SkeletonTable-DbyGjMNM.js";import"./SkeletonParagraph-COPAUoGX.js";import"./JsonSchemaForm-C4xT0h0L.js";import"./GridLegacy-DzHcGgRu.js";import"./HelpTwoTone-DafNAy1q.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-C1xSJWZE.js";import"./_createAggregator-CmRTscji.js";import"./_baseMap-BlcHWZxP.js";import"./DateTimePicker-6PledBNy.js";import"./useMobilePicker-DjM-cwPw.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-CKHpUtme.js";import"./index-CB5up3MK.js";import"./Chip-CVnCUFdM.js";import"./Tabs-emnfpVhX.js";import"./KeyboardArrowRight-C_N0xNkn.js";import"./Autocomplete-C7TmKGrZ.js";import"./usePreviousProps-Bfj6pKxe.js";import"./use-deep-compare-effect.esm-CpGHQ5lS.js";import"./TextWidget-DXDI5GTi.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-Arrays',
    entityId: 'syn25959281'
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-IfThenElse'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    schemaId: 'nkauer-ad.main'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    entityId: 'syn32673093'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    entityId: 'syn25959288'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Ir=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Ir as __namedExportsOrder,vr as default};
