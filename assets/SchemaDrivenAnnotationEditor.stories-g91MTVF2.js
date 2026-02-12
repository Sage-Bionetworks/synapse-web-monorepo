import{jJ as p}from"./iframe-BjUpq5xd.js";import{S as a}from"./SchemaDrivenAnnotationEditor-DbLWyKpx.js";import"./index-Chi_LkuB.js";import"./useEntity-Cwe7aQYA.js";import"./pickBy-DY83DiKG.js";import"./isString-C2yk-Fxu.js";import"./_baseIteratee-CH7JnBeO.js";import"./useQueries-Cqwk_xQ6.js";import"./useSuspenseQuery-DbgujXvY.js";import"./useInfiniteQuery-BQLrsI8-.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DPEZEXzu.js";import"./useSchema-ApLjtxMA.js";import"./index-D5Rm26Gg.js";import"./enums-DKtG3wd3.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-CpXFuCDm.js";import"./uniq-C8TjA6Un.js";import"./forEach-CWOCpBhE.js";import"./Add-BtsYCZ1V.js";import"./Grid-C-Jjv4Qv.js";import"./ListItem-t7v8GaVx.js";import"./listItemButtonClasses-CE8hegso.js";import"./ListItemIcon-MxllqD5p.js";import"./MenuItem-CC-RPPM2.js";import"./ListItemText-oDpr11i7.js";import"./ArrowUpward-BTupK1FZ.js";import"./ContentCopy-BcCy_8v7.js";import"./FormControlLabel-DmdTSbMj.js";import"./Checkbox-CS3hOzCE.js";import"./SwitchBase-Bo9gKiR2.js";import"./FormGroup-DZV8Y3IK.js";import"./RadioGroup-Ba_Yz390.js";import"./Radio-DMO1J20h.js";import"./Slider-BdYeT31U.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-B5pmgtC9.js";import"./DialogBase-CzW-EroP.js";import"./Close-CJMPACEo.js";import"./HelpPopover-DKCN5vTJ.js";import"./MarkdownPopover-DUsub1Bj.js";import"./LightTooltip-DMh9w68D.js";import"./MarkdownSynapse-DVFomeAo.js";import"./SkeletonButton-CV3RH36o.js";import"./SkeletonInlineBlock-ANrbFXbS.js";import"./SkeletonTable-B-Y_KPUW.js";import"./SkeletonParagraph-C60Mi91l.js";import"./JsonSchemaForm-DJfLw3pU.js";import"./GridLegacy-Drjwg8aj.js";import"./HelpTwoTone-BENutTr9.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-D3_TqSjP.js";import"./_createAggregator-C-Nc3hm1.js";import"./_baseMap-C1Geoiqh.js";import"./DateTimePicker-D_7LkSna.js";import"./useMobilePicker-D-wBi0JW.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-DmeeXtui.js";import"./index-DbW4RfeC.js";import"./Chip-iDCojdQO.js";import"./Tabs-0N-H49MY.js";import"./KeyboardArrowRight-DsGJZV0K.js";import"./Autocomplete-D47htjkH.js";import"./usePreviousProps-CWa1F3rL.js";import"./use-deep-compare-effect.esm-DkS9_zp9.js";import"./TextWidget-B7E8fYTo.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
