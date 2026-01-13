import{jF as p}from"./iframe-z21gSILm.js";import{S as a}from"./SchemaDrivenAnnotationEditor-p0Hhmc-c.js";import"./index-Chi_LkuB.js";import"./useEntity-DnU3C6M5.js";import"./pickBy-C38-sRNI.js";import"./isString-BfwWT6Hp.js";import"./_baseIteratee-K4gGkGhX.js";import"./useQueries-BqopBRXG.js";import"./useSuspenseQuery-BDbBJqHo.js";import"./useInfiniteQuery-DViYzGwW.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-hKGlFwyR.js";import"./useSchema-44hzelmi.js";import"./index-DNxigodI.js";import"./enums-Rgo4j3BR.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BjqsPzRj.js";import"./uniq-wtN09MDV.js";import"./forEach-CWOCpBhE.js";import"./Add-BTGAiOdD.js";import"./Grid-ZG61elFB.js";import"./ListItem-Cc1k8A6D.js";import"./listItemButtonClasses-Oj7JTGQ5.js";import"./ListItemIcon-ibNDc8FM.js";import"./MenuItem-BqzvmG8S.js";import"./ListItemText-CUtxz_x9.js";import"./ArrowUpward-BWdqyOG3.js";import"./ContentCopy-sxNSBP2e.js";import"./FormControlLabel-CHgCz5PK.js";import"./Checkbox-BzxLKyOz.js";import"./SwitchBase-hDliWsMw.js";import"./FormGroup-xyXxPmjh.js";import"./RadioGroup-DBvUwZT0.js";import"./Radio-iigXD3iG.js";import"./Slider-BhgcH3J4.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-C8lFb7mH.js";import"./DialogBase-DQK4XqJC.js";import"./Close-qryw1NjU.js";import"./HelpPopover-Boy-nK2n.js";import"./MarkdownPopover-BmUk5Bqy.js";import"./LightTooltip-S0tAvjiv.js";import"./MarkdownSynapse-DllhcJ_D.js";import"./SkeletonButton-Q38ELWwJ.js";import"./SkeletonInlineBlock-DuFis4qM.js";import"./SkeletonTable-HmkSCDv0.js";import"./SkeletonParagraph-DwVqH0kg.js";import"./JsonSchemaForm-D3jC29gx.js";import"./GridLegacy-4YF6Sl2U.js";import"./HelpTwoTone-COvJac_V.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-CzEckRw2.js";import"./_createAggregator-CHWu8HJj.js";import"./_baseMap-9TWFIhh_.js";import"./DateTimePicker-CZ8GyPmN.js";import"./useMobilePicker-CziU9u3j.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-eK22iVz-.js";import"./index-BRmRy84u.js";import"./Chip-rCXgsppD.js";import"./Tabs-DPuUSCfT.js";import"./KeyboardArrowRight-DG1y5pLF.js";import"./Autocomplete-DqbspXHB.js";import"./usePreviousProps-CKbyNIUV.js";import"./use-deep-compare-effect.esm-BLtmLhJ_.js";import"./TextWidget-HTYRhSi2.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
