import{jx as p}from"./iframe-TELIK5St.js";import{S as a}from"./SchemaDrivenAnnotationEditor-DqGJblum.js";import"./index-Chi_LkuB.js";import"./useEntity-uH0IPj5d.js";import"./pickBy-D8zlkIai.js";import"./isString-DOfKFuJ8.js";import"./_baseIteratee-Bm_ygrTG.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-CsPobzOo.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BX92XFzE.js";import"./useSchema-Cr_qkoGy.js";import"./index-Bvjbqg9b.js";import"./enums-vN__SG3s.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-1R1uGBUK.js";import"./uniq-5uD1tEnu.js";import"./forEach-UWyboym_.js";import"./Add-CXtIjF9j.js";import"./Grid--nzUhU6x.js";import"./ListItem-Bh9VXM03.js";import"./listItemButtonClasses-DyQLHwEc.js";import"./ListItemIcon-BA00N0oE.js";import"./MenuItem-CZMXI3mZ.js";import"./ListItemText-BuXg6UvD.js";import"./ArrowUpward-BW1LFHZF.js";import"./ContentCopy-pO5zHRHF.js";import"./FormControlLabel-DkZ0xtIe.js";import"./Checkbox-DmDIVSeI.js";import"./SwitchBase-C4A-3PON.js";import"./FormGroup-tH04-FQb.js";import"./RadioGroup-DcKVrU9M.js";import"./Radio-Ch940cOi.js";import"./Slider-CyP88qd1.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-BxrjJOlJ.js";import"./DialogBase-B_W-3fb4.js";import"./Close-1aRbQcSU.js";import"./HelpPopover-CHQIvLmq.js";import"./MarkdownPopover-ByQ3xb7d.js";import"./LightTooltip-B6lk_bQM.js";import"./MarkdownSynapse-DMWe3Ld4.js";import"./SkeletonButton-Ch0HQYiA.js";import"./SkeletonInlineBlock-DmvsIilu.js";import"./SkeletonTable-BK56JWcz.js";import"./SkeletonParagraph-CsdCh0c6.js";import"./JsonSchemaForm-DZ92WqLy.js";import"./GridLegacy-DWN38_vn.js";import"./HelpTwoTone-CJ7OmFtx.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-CysP0WnF.js";import"./_createAggregator-e-GYgwFr.js";import"./_baseMap-BW9Pah7Q.js";import"./DateTimePicker-DhVgxczf.js";import"./useMobilePicker-DtZjscHG.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-DbnoJ775.js";import"./index-DhCG1PUT.js";import"./Chip-ChN1vAl3.js";import"./Tabs-Clv9-XGp.js";import"./KeyboardArrowRight-BNVp3x8e.js";import"./Autocomplete-DNrg8QTw.js";import"./usePreviousProps-Dq07bXWo.js";import"./use-deep-compare-effect.esm-DtUBe5bY.js";import"./TextWidget-BKb37LzC.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Ir={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
