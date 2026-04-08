import{jw as p}from"./iframe-Ddo1nd2c.js";import{S as a}from"./SchemaDrivenAnnotationEditor-DlZSZgyP.js";import"./index-Chi_LkuB.js";import"./useEntity-6i1utiFK.js";import"./pickBy-Ca1HoaHl.js";import"./isString-C31m5vfz.js";import"./_baseIteratee-BL_XVY7N.js";import"./useInfiniteQuery-DJwQPHS2.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-qjtX1WIb.js";import"./useSchema-DhEtz-r0.js";import"./index-DOjG6Ddz.js";import"./enums-C9JBc_Cp.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-Deb1er3l.js";import"./uniq-DVrtmJut.js";import"./forEach-UWyboym_.js";import"./Add-CijTS_uY.js";import"./Grid-CX3jOppe.js";import"./ListItem-B658fDRe.js";import"./listItemButtonClasses-n83jtxv3.js";import"./ListItemIcon-BF-eEpva.js";import"./MenuItem-BaT97X1Q.js";import"./ListItemText-DTXYYnkS.js";import"./ArrowUpward-0TOaHorK.js";import"./ContentCopy-DR9HhUK8.js";import"./FormControlLabel-Y3B08TzJ.js";import"./Checkbox-DuiaAW4b.js";import"./SwitchBase-LT8Y2S2D.js";import"./FormGroup-D84xiJQ6.js";import"./RadioGroup-DchJVIWM.js";import"./Radio-a_ECWc1o.js";import"./Slider-Cs4tG1QE.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-DbD8Znq3.js";import"./DialogBase-CayqfCYU.js";import"./Close-Bdp-VK_k.js";import"./HelpPopover-CG9mhVeJ.js";import"./MarkdownPopover-Dbkj-DS5.js";import"./LightTooltip-LQW8Tril.js";import"./MarkdownSynapse-D36GJOu2.js";import"./SkeletonButton-0wbjxtel.js";import"./SkeletonInlineBlock-CIgujLoL.js";import"./SkeletonTable-0-Nn1Nvg.js";import"./SkeletonParagraph-B50bUVUG.js";import"./JsonSchemaForm-CkNu40W4.js";import"./GridLegacy-DORIVWfG.js";import"./HelpTwoTone-DTgcwAO9.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-BgtZoBjx.js";import"./_createAggregator-CDvlTxUA.js";import"./_baseMap-ZZuoWbUp.js";import"./DateTimePicker-RQikRj_R.js";import"./useMobilePicker-BZIty5Jz.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-PLwEupuk.js";import"./index-BY1pmXbi.js";import"./Chip-Lk48EpR4.js";import"./Tabs-DYRr0WqH.js";import"./KeyboardArrowRight-C3RussVL.js";import"./Autocomplete-3ZOC5Hmp.js";import"./usePreviousProps-BnbbWDH5.js";import"./use-deep-compare-effect.esm-C0R9k3zV.js";import"./TextWidget-BvKp9z8n.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
