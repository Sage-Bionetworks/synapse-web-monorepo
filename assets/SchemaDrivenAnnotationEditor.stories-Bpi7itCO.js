import{jH as p}from"./iframe-C4lSw8dA.js";import{S as a}from"./SchemaDrivenAnnotationEditor-iDYqxXyw.js";import"./index-Chi_LkuB.js";import"./useEntity-BOvtRLHU.js";import"./pickBy-BBo1C8Gn.js";import"./isString-r_pENBR9.js";import"./_baseIteratee-CUB4KFzE.js";import"./useQueries-BAA7F4tv.js";import"./useSuspenseQuery-BJTnPWwx.js";import"./useInfiniteQuery-hSCmVKD_.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BbK6omeJ.js";import"./useSchema-LLGcJnJU.js";import"./index-mde9uGhe.js";import"./enums-DFwrDOyk.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BmGA1jR6.js";import"./uniq-DUlxy5si.js";import"./forEach-CWOCpBhE.js";import"./Add-Cqxj0PLz.js";import"./Grid-BGiVsMZH.js";import"./ListItem-CVBXxeel.js";import"./listItemButtonClasses-C0w4hoKc.js";import"./ListItemIcon-Dz2fH132.js";import"./MenuItem-CAS1AQKd.js";import"./ListItemText-CxBeIJG8.js";import"./ArrowUpward-CBcufr8K.js";import"./ContentCopy-DcjD7BqO.js";import"./FormControlLabel-BubwgkEy.js";import"./Checkbox-nj0rGzbP.js";import"./SwitchBase-BGp01RgN.js";import"./FormGroup-BrBMb250.js";import"./RadioGroup-YkIKu7Pz.js";import"./Radio-CmBTIB8X.js";import"./Slider-hBP3BVzm.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-DNAmwDFA.js";import"./DialogBase-BGApbNeN.js";import"./Close-DOQSFODY.js";import"./HelpPopover-udz6cmYg.js";import"./MarkdownPopover-DRlkQ0Uc.js";import"./LightTooltip-PrPowMcP.js";import"./MarkdownSynapse-5q-2r_5x.js";import"./SkeletonButton-DQJTIZ4j.js";import"./SkeletonInlineBlock-Ca77zW6S.js";import"./SkeletonTable-DX2YYbbP.js";import"./SkeletonParagraph-DJj1jg11.js";import"./JsonSchemaForm-RkKHxcZm.js";import"./GridLegacy-UiVQPV1H.js";import"./HelpTwoTone-CvZpIo4D.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-Cscox_QO.js";import"./_createAggregator-KdqLVw7K.js";import"./_baseMap-C_lzQBLM.js";import"./DateTimePicker-B_rHdFLg.js";import"./useMobilePicker-Q-0V54Q0.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-DzUZRyjs.js";import"./index-CqEyw7E1.js";import"./Chip-DcvWAm0_.js";import"./Tabs-DkX-cbT3.js";import"./KeyboardArrowRight-BtUiXpIW.js";import"./Autocomplete-COPE4Msj.js";import"./usePreviousProps-CR-W2eLC.js";import"./use-deep-compare-effect.esm-CJ1j3mV5.js";import"./TextWidget-Dm2wdwIX.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
