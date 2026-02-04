import{jH as p}from"./iframe-BhrR5Sll.js";import{S as a}from"./SchemaDrivenAnnotationEditor-CpyUFvVJ.js";import"./index-Chi_LkuB.js";import"./useEntity-Dq9EUdRo.js";import"./pickBy-CCz-VO2T.js";import"./isString-ChPx5Gz6.js";import"./_baseIteratee-BvC8fp-4.js";import"./useQueries-DqSPqXIA.js";import"./useSuspenseQuery-CuIa-HUN.js";import"./useInfiniteQuery-BrWjCX7v.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DoH_2kpH.js";import"./useSchema-BpyAGpl4.js";import"./index-tYVLsxI1.js";import"./enums-NfKBr0mO.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BandNteZ.js";import"./uniq-CQgVzW-H.js";import"./forEach-CWOCpBhE.js";import"./Add-xSAFDDrc.js";import"./Grid-Dfl2LtvY.js";import"./ListItem-CGDrFowS.js";import"./listItemButtonClasses-DXNiEFb2.js";import"./ListItemIcon-BDlZtwHe.js";import"./MenuItem-BJbLDGlr.js";import"./ListItemText-3sjZXtw6.js";import"./ArrowUpward-D-Znlk9n.js";import"./ContentCopy-CxzwnOV7.js";import"./FormControlLabel-e808tZ2M.js";import"./Checkbox-DkVVye31.js";import"./SwitchBase-CdXIgPgp.js";import"./FormGroup-CWz-ppbD.js";import"./RadioGroup-ln7L0SAh.js";import"./Radio-BsM5thS8.js";import"./Slider-Bz-tv8N7.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-B44tNgOv.js";import"./DialogBase-BYIqUMiE.js";import"./Close-8bb5EJ6t.js";import"./HelpPopover-lG-0-_4j.js";import"./MarkdownPopover-Dra-bAXM.js";import"./LightTooltip-CtyC1diu.js";import"./MarkdownSynapse-gk6o-aVH.js";import"./SkeletonButton-CXfcR02x.js";import"./SkeletonInlineBlock-BVfsrZM3.js";import"./SkeletonTable-bVZR_JBz.js";import"./SkeletonParagraph-BvDfq1qX.js";import"./JsonSchemaForm-DyvghFpw.js";import"./GridLegacy-DWUuI_Fy.js";import"./HelpTwoTone-D4VHbo1H.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-DNKraTIH.js";import"./_createAggregator-CcoI5Jl7.js";import"./_baseMap-BS7AJXJp.js";import"./DateTimePicker-BRr0jxN9.js";import"./useMobilePicker-Dx0H2nsl.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-vUCDV8FZ.js";import"./index-CPX53gcL.js";import"./Chip-BT3G1XLE.js";import"./Tabs-dbtRCa5o.js";import"./KeyboardArrowRight-Do6ENIrs.js";import"./Autocomplete-PBn9EAiL.js";import"./usePreviousProps-N55TCA3c.js";import"./use-deep-compare-effect.esm-CGRSmNRA.js";import"./TextWidget-ctKHZCXQ.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const br=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,br as __namedExportsOrder,qr as default};
