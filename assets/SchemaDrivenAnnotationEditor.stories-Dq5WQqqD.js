import{jx as p}from"./iframe-DR0uSfJB.js";import{S as a}from"./SchemaDrivenAnnotationEditor-ChBZeuBj.js";import"./index-Chi_LkuB.js";import"./useEntity-BooQYDEM.js";import"./pickBy-BtS8uSOi.js";import"./isString-B5pzKkPi.js";import"./_baseIteratee-BliHnktd.js";import"./useInfiniteQuery-Bf2Ztb4F.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-B0tud9UF.js";import"./useSchema-ByZx_9Yn.js";import"./index-C2aUtQt3.js";import"./enums-BmoTKo2b.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-DK-2XrG3.js";import"./uniq-CnlYDF1j.js";import"./forEach-CWOCpBhE.js";import"./Add-CI4k6IvZ.js";import"./Grid-BsMBS9ZV.js";import"./ListItem-DwXaJExL.js";import"./listItemButtonClasses-B9kCoXz5.js";import"./ListItemIcon-REL_B7Zs.js";import"./MenuItem-Fs-K7yfa.js";import"./ListItemText-BnwE9VC9.js";import"./ArrowUpward-B4w9Bma7.js";import"./ContentCopy-BPvqWpkz.js";import"./FormControlLabel-jBye_ljs.js";import"./Checkbox-D1u9ZvPz.js";import"./SwitchBase-CNQkEcG9.js";import"./FormGroup-gZBewhBg.js";import"./RadioGroup-DuJbs0jq.js";import"./Radio-AnHLvEi1.js";import"./Slider-BFAwTOY3.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-DZyRzdVz.js";import"./DialogBase-BCLn1mc7.js";import"./Close-DW5206ij.js";import"./HelpPopover-BiI80afJ.js";import"./MarkdownPopover-CdU2RNyH.js";import"./LightTooltip-CqEwD-qc.js";import"./MarkdownSynapse-BewMr670.js";import"./SkeletonButton-hycMW2ML.js";import"./SkeletonInlineBlock-Cc3tKGBX.js";import"./SkeletonTable-DQpC9D8t.js";import"./SkeletonParagraph-FBICusf3.js";import"./JsonSchemaForm-Bs9kxbrf.js";import"./GridLegacy-BrrtEhMO.js";import"./HelpTwoTone-D8Sc9svh.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-CEISOJaI.js";import"./_createAggregator-FYglJ6Ew.js";import"./_baseMap-BohI5ZmA.js";import"./DateTimePicker-BHyB6bcv.js";import"./useMobilePicker-BH4J00Ps.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-Bgntno0J.js";import"./index-BHYxApRu.js";import"./Chip-C7t_e7oc.js";import"./Tabs-CvK4ArKL.js";import"./KeyboardArrowRight-7EQTvC4Y.js";import"./Autocomplete-B-lpNpCq.js";import"./usePreviousProps-BBTyiXzX.js";import"./use-deep-compare-effect.esm-CI45YVk3.js";import"./TextWidget-DMAbBnvv.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
