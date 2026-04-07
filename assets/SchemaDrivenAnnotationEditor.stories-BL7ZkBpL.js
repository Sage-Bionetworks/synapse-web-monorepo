import{jw as p}from"./iframe-BqdsSWZd.js";import{S as a}from"./SchemaDrivenAnnotationEditor-CBF9AwiW.js";import"./index-Chi_LkuB.js";import"./useEntity-DGHiV3wP.js";import"./pickBy-DUs8MMAq.js";import"./isString-HbBIM6KT.js";import"./_baseIteratee-BKxCLCkQ.js";import"./useInfiniteQuery-B8rjpe3i.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Hj1n1iEc.js";import"./useSchema-B0KR65ag.js";import"./index-BW4BlSzF.js";import"./enums-CmuyZYOd.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-MY-m3ebR.js";import"./uniq-BgWLSRZf.js";import"./forEach-UWyboym_.js";import"./Add-CSyaGazM.js";import"./Grid-Z1x-TWzV.js";import"./ListItem-DvJ2ih-D.js";import"./listItemButtonClasses-DPyNCkQ_.js";import"./ListItemIcon-CIAx_5Zs.js";import"./MenuItem-BDOSlvEx.js";import"./ListItemText-C7tMB0Ba.js";import"./ArrowUpward-Cdm7295K.js";import"./ContentCopy-DT1PlFc4.js";import"./FormControlLabel-0ry4_IyI.js";import"./Checkbox-ZoMln06J.js";import"./SwitchBase-D249JllU.js";import"./FormGroup-DKNTgsef.js";import"./RadioGroup-CC612vJX.js";import"./Radio-Co-yh5xo.js";import"./Slider-Cc7nCPU5.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-DfDAoE1B.js";import"./DialogBase-DhimsSeU.js";import"./Close-CiwYrWW2.js";import"./HelpPopover-Bj_HEu0H.js";import"./MarkdownPopover-1NSkQgo1.js";import"./LightTooltip-DuUAsYAd.js";import"./MarkdownSynapse-Cq3G3Ysd.js";import"./SkeletonButton-DQlCUFlj.js";import"./SkeletonInlineBlock-BTiJ2BO_.js";import"./SkeletonTable-BNCsFwsu.js";import"./SkeletonParagraph-CITKHxXA.js";import"./JsonSchemaForm-DQrat3OO.js";import"./GridLegacy-COwedhpS.js";import"./HelpTwoTone-z7wDosFI.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-qnH-nb_g.js";import"./_createAggregator-DdXHu1bk.js";import"./_baseMap-DAe4OjTy.js";import"./DateTimePicker-BzxF5JLG.js";import"./useMobilePicker-hSR6z2r-.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-BGljoWLI.js";import"./index-BGf55DBP.js";import"./Chip-QNpY_KS_.js";import"./Tabs-RAivAKYT.js";import"./KeyboardArrowRight-B3AqKuPy.js";import"./Autocomplete-D2L8I004.js";import"./usePreviousProps-BGc4kDSn.js";import"./use-deep-compare-effect.esm-DG4YBgzR.js";import"./TextWidget-eHlXXW_L.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
