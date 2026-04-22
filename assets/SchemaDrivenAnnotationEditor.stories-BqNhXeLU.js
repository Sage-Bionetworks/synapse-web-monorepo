import{jx as p}from"./iframe-DvEsUTpQ.js";import{S as a}from"./SchemaDrivenAnnotationEditor-B_9uHtF-.js";import"./index-Chi_LkuB.js";import"./useEntity-D0ug6J_E.js";import"./pickBy-CaZCapPb.js";import"./isString-2mlaZJEb.js";import"./_baseIteratee-D3bhaGJS.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-BdEWda9R.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-X871VZH0.js";import"./useSchema-CRBsGaSk.js";import"./index-CqorwR7Z.js";import"./enums-D_cQ5J2h.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-C5Fi7LFB.js";import"./uniq-C5TQ7vY4.js";import"./forEach-UWyboym_.js";import"./Add-DHL2dhxL.js";import"./Grid-CjxcWtBh.js";import"./ListItem-CoP1faAk.js";import"./listItemButtonClasses-BiArEVo7.js";import"./ListItemIcon-Bcb21THH.js";import"./MenuItem-DvqM882a.js";import"./ListItemText-F124MVly.js";import"./ArrowUpward-CjfEPAMS.js";import"./ContentCopy-D8c5QNXn.js";import"./FormControlLabel-BcuVfQyz.js";import"./Checkbox-Cq6VSCz7.js";import"./SwitchBase-jh5RIPFl.js";import"./FormGroup-z77k8kTs.js";import"./RadioGroup-BzKki668.js";import"./Radio-DEn_Buu3.js";import"./Slider-DBEhZzHT.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-DkIXQsLU.js";import"./DialogBase-DjSguv9P.js";import"./Close-g9h1bwgZ.js";import"./HelpPopover-KzPfIUfL.js";import"./MarkdownPopover-zfAn5NTB.js";import"./LightTooltip-CPlesbUn.js";import"./MarkdownSynapse-G6S7jkSU.js";import"./SkeletonButton-Dd7TiKIa.js";import"./SkeletonInlineBlock-D94lxhr7.js";import"./SkeletonTable-Dt5bLLrY.js";import"./SkeletonParagraph-lw_IwEhg.js";import"./JsonSchemaForm-WAu1C5_b.js";import"./GridLegacy-xFilL_TL.js";import"./HelpTwoTone-CsoYVBHo.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-uitZDKlw.js";import"./_createAggregator-BYSMAyVR.js";import"./_baseMap-CAOUDwt_.js";import"./DateTimePicker-CLMyHOG4.js";import"./useMobilePicker-DNUFT8e0.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-aYqiAxnk.js";import"./index-BttQD56F.js";import"./Chip-DM8j9a4z.js";import"./Tabs-DBhcrtNR.js";import"./KeyboardArrowRight-FlfFobUx.js";import"./Autocomplete-BY5e0fcm.js";import"./usePreviousProps-Blw-B0Rc.js";import"./use-deep-compare-effect.esm-Dw0kND94.js";import"./TextWidget-D7_sGzrM.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Ir={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Er=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Er as __namedExportsOrder,Ir as default};
