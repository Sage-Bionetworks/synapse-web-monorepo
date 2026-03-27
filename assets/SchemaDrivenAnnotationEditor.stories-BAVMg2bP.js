import{jx as p}from"./iframe-C0AexDGo.js";import{S as a}from"./SchemaDrivenAnnotationEditor-DmX6KDqj.js";import"./index-Chi_LkuB.js";import"./useEntity-0eq8IzEx.js";import"./pickBy-BKiqvuJk.js";import"./isString-CEp7wxdK.js";import"./_baseIteratee-Cumo85pk.js";import"./useInfiniteQuery-B2H1bPeH.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-C-QbFGo_.js";import"./useSchema-Bl5qqskb.js";import"./index-Ca7NU9-G.js";import"./enums-Cm5_FEh0.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BYTNHSI6.js";import"./uniq-ZZe97vhK.js";import"./forEach-CWOCpBhE.js";import"./Add-CwVzyaBl.js";import"./Grid-BoLhaorR.js";import"./ListItem-NycXdyyE.js";import"./listItemButtonClasses-BVWTFNxv.js";import"./ListItemIcon-T6N4-fEx.js";import"./MenuItem-CS8tSfW4.js";import"./ListItemText-D2VEWgxf.js";import"./ArrowUpward-JmMWyaV4.js";import"./ContentCopy-BKewfxgl.js";import"./FormControlLabel-BzeqMExL.js";import"./Checkbox-B3_Pm9Q5.js";import"./SwitchBase-BMyeD8S1.js";import"./FormGroup-vwjDuQmv.js";import"./RadioGroup-COY7vPKR.js";import"./Radio-BWHwd3Go.js";import"./Slider-BKQdsDvt.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-Tlg0AvaS.js";import"./DialogBase-DEQixVmG.js";import"./Close-BSsXOVcm.js";import"./HelpPopover-CVzUoBki.js";import"./MarkdownPopover-DABKYL5O.js";import"./LightTooltip-D8PwR5sb.js";import"./MarkdownSynapse-BQk4puC1.js";import"./SkeletonButton-BkD5G1Zw.js";import"./SkeletonInlineBlock-BJifXgdu.js";import"./SkeletonTable-ButMnzRS.js";import"./SkeletonParagraph-BSPRuMA0.js";import"./JsonSchemaForm--LLtJL3c.js";import"./GridLegacy-Bq04Khpx.js";import"./HelpTwoTone-CZojEnPv.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-5y3ZbfdA.js";import"./_createAggregator-BSTGRsRl.js";import"./_baseMap-DuuksuE2.js";import"./DateTimePicker-CXBIuG-Q.js";import"./useMobilePicker-zbSe08dh.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-9zUz1kYm.js";import"./index-BLmC8C9J.js";import"./Chip-7BiG69Cu.js";import"./Tabs-wOvJRsCJ.js";import"./KeyboardArrowRight-Cr_-2_Rz.js";import"./Autocomplete-BQtQha_k.js";import"./usePreviousProps-Cb80TPQl.js";import"./use-deep-compare-effect.esm-DvTX_KHd.js";import"./TextWidget-CZx5nAQU.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
