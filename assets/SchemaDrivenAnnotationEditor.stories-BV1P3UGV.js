import{jx as p}from"./iframe-BJt7q_JV.js";import{S as a}from"./SchemaDrivenAnnotationEditor-01skiFTa.js";import"./index-Chi_LkuB.js";import"./useEntity-BiFHWUYV.js";import"./pickBy-ggZJH3G-.js";import"./isString-CsqEOPqS.js";import"./_baseIteratee-BPQNR2Jo.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-Ceo7_zT8.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BO5FYJrE.js";import"./useSchema-BC8BhHXq.js";import"./index-1060QF6u.js";import"./enums-Cv9chIdu.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-B4timjj-.js";import"./uniq-jUrse6Oz.js";import"./forEach-UWyboym_.js";import"./Add-CBhDjo2n.js";import"./Grid-DFP1jire.js";import"./ListItem-CS-Guzgl.js";import"./listItemButtonClasses-CLI1Iss5.js";import"./ListItemIcon-BP3qVdEs.js";import"./MenuItem-DUuZTALA.js";import"./ListItemText-CgHg06ui.js";import"./ArrowUpward-DYAYlKQ0.js";import"./ContentCopy-BVLNEeh7.js";import"./FormControlLabel-BZzQmDal.js";import"./Checkbox-Beiu9b0t.js";import"./SwitchBase-B6wo5qcW.js";import"./FormGroup-DKxxADn2.js";import"./RadioGroup-BoIVV53h.js";import"./Radio-DgNCNVuW.js";import"./Slider-BdNGyAkJ.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-DhIfbqQu.js";import"./DialogBase-DNgmg92r.js";import"./Close-CnuYTtXB.js";import"./HelpPopover-BKPDM7P7.js";import"./MarkdownPopover-iIdPMRk3.js";import"./LightTooltip-boxSQgEG.js";import"./MarkdownSynapse-BHezFvPm.js";import"./SkeletonButton-CQzFd6lb.js";import"./SkeletonInlineBlock-DWTLId8s.js";import"./SkeletonTable-BoHNQ0XH.js";import"./SkeletonParagraph-76490YmJ.js";import"./JsonSchemaForm-Bk-KfX7K.js";import"./GridLegacy-Crv8shTW.js";import"./HelpTwoTone-C8ldU_1s.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-CUrgQl7L.js";import"./_createAggregator-NmKpHOFS.js";import"./_baseMap-BzkpFs2l.js";import"./DateTimePicker-CYqAuSpm.js";import"./useMobilePicker-CBplxm2q.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-v7fhpYFD.js";import"./index-D1KUKnNi.js";import"./Chip-D4cY5ocF.js";import"./Tabs-BooHiB-G.js";import"./KeyboardArrowRight-C9e9Jqvi.js";import"./Autocomplete-2yZW5YM0.js";import"./usePreviousProps-_k1Molu3.js";import"./use-deep-compare-effect.esm-DfIFqHEC.js";import"./TextWidget-C9bRHhK_.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Ir={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
