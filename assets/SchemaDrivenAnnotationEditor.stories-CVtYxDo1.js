import{jx as p}from"./iframe-ClE2Hy4B.js";import{S as a}from"./SchemaDrivenAnnotationEditor-JmY08L-M.js";import"./index-Chi_LkuB.js";import"./useEntity-f1eXyneH.js";import"./pickBy-B0wWvjyi.js";import"./isString-CF09GXlR.js";import"./_baseIteratee-CgCh-4yA.js";import"./useInfiniteQuery-JunBPFxO.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DpKOZjgZ.js";import"./useSchema-Nzp_-nt0.js";import"./index-CqoKKtcn.js";import"./enums-KViwHNsm.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-DuBrkErz.js";import"./uniq-BNyN2DCs.js";import"./forEach-CWOCpBhE.js";import"./Add-CkjQMqGS.js";import"./Grid-BqzM4-vy.js";import"./ListItem-CLrwt6PG.js";import"./listItemButtonClasses-t-CZSWTm.js";import"./ListItemIcon-Anl3gSXc.js";import"./MenuItem-BLx0eK9Y.js";import"./ListItemText-v9jzp2c0.js";import"./ArrowUpward-BcqEk78P.js";import"./ContentCopy-B6WYBmeZ.js";import"./FormControlLabel-SUMnMu_R.js";import"./Checkbox-MnArzcXf.js";import"./SwitchBase-8Qf5k-j0.js";import"./FormGroup-_O_UrnjV.js";import"./RadioGroup-DGPR4OqO.js";import"./Radio-B_DIXeGK.js";import"./Slider-VgfKhd6a.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-BMQMl3nb.js";import"./DialogBase-DsoF6kFj.js";import"./Close-B-5zc9Mn.js";import"./HelpPopover-CS-MG7ku.js";import"./MarkdownPopover-BV7I0bXQ.js";import"./LightTooltip-CUHr0mUG.js";import"./MarkdownSynapse-b_n8loNV.js";import"./SkeletonButton-DSmPjAvU.js";import"./SkeletonInlineBlock-DYja8lR7.js";import"./SkeletonTable-D7N707Oc.js";import"./SkeletonParagraph-Br74pmuK.js";import"./JsonSchemaForm-I9katTu6.js";import"./GridLegacy-mf-miyP7.js";import"./HelpTwoTone-yAM7oCs6.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-DeviL7FV.js";import"./_createAggregator-B7QG7kvJ.js";import"./_baseMap-B8ZbbJGp.js";import"./DateTimePicker-m-Pmc6CG.js";import"./useMobilePicker-DmZCNpmA.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-BlAhfAWe.js";import"./index-C7fdTBbx.js";import"./Chip-BpTWRkwH.js";import"./Tabs-II36-u51.js";import"./KeyboardArrowRight-DBElEXas.js";import"./Autocomplete-BsWHEr1C.js";import"./usePreviousProps-CWdY3sUd.js";import"./use-deep-compare-effect.esm-DW0gLXFO.js";import"./TextWidget-BekYUUWV.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
