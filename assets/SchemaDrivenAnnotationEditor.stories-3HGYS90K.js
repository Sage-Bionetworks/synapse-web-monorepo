import{ju as p}from"./iframe-CxpGQRBF.js";import{S as a}from"./SchemaDrivenAnnotationEditor-B38y9_r3.js";import"./index-Chi_LkuB.js";import"./useEntity-CXfAtQVa.js";import"./pickBy-mSFqw4zy.js";import"./isString-BVklKN--.js";import"./_baseIteratee-CEqYEKXQ.js";import"./useInfiniteQuery-5mr2kSpt.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-C2Akntb-.js";import"./useSchema-BJTYFfin.js";import"./index-B-Rvq_dO.js";import"./enums-Ha8p2Y-D.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-B4851qud.js";import"./uniq-C1mF3GF0.js";import"./forEach-CWOCpBhE.js";import"./Add-BL9AxmKI.js";import"./Grid-DzCEe4zi.js";import"./ListItem-CUaNCzSQ.js";import"./listItemButtonClasses-HW3kQ_L8.js";import"./ListItemIcon-BIot56lD.js";import"./MenuItem-B0A_VAcM.js";import"./ListItemText-COooVLa3.js";import"./ArrowUpward-Kct8zwN7.js";import"./ContentCopy-CSyPCxOS.js";import"./FormControlLabel-DOKrTtT6.js";import"./Checkbox-BrGglNIe.js";import"./SwitchBase-Czm70tKI.js";import"./FormGroup-WGcP9PN8.js";import"./RadioGroup-BNv8zjJX.js";import"./Radio-LaAe_-JO.js";import"./Slider-BiJGRKnT.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-48YNczn8.js";import"./DialogBase-VRRvXcss.js";import"./Close-BVGSUcxq.js";import"./HelpPopover-Bah9lcl8.js";import"./MarkdownPopover-BXPyAi3h.js";import"./LightTooltip-DF3uJOWM.js";import"./MarkdownSynapse-D7ZvzCtj.js";import"./SkeletonButton-8uBDlMQq.js";import"./SkeletonInlineBlock-DzPT_dbg.js";import"./SkeletonTable-B9WKv7bd.js";import"./SkeletonParagraph-BVjbv9Tg.js";import"./JsonSchemaForm-C377qgRb.js";import"./GridLegacy-UwEXQb8f.js";import"./HelpTwoTone-CJktMhfA.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-BwpNTGHa.js";import"./_createAggregator-DZGl0PCT.js";import"./_baseMap-Oh885vco.js";import"./DateTimePicker-C02t4U2V.js";import"./useMobilePicker-Iq8Zc_Cu.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-DI-ivuGT.js";import"./index-Bxpms_sx.js";import"./Chip-CAv6xn2G.js";import"./Tabs-hkqWjW1l.js";import"./KeyboardArrowRight-CsLf-yh2.js";import"./Autocomplete-1GOjr5kR.js";import"./usePreviousProps-LNEuLmgF.js";import"./use-deep-compare-effect.esm-DVQApDDI.js";import"./TextWidget-CIVpHSHx.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
