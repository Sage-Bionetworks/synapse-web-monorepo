import{jF as p}from"./iframe-D6-EgIYn.js";import{S as a}from"./SchemaDrivenAnnotationEditor-dcCBgkjp.js";import"./index-Chi_LkuB.js";import"./useEntity-CcmBzuUK.js";import"./pickBy-DPt-VEwT.js";import"./isString-BleN90PO.js";import"./_baseIteratee-DM4WPHJT.js";import"./useQueries-Dp7eDvCj.js";import"./useSuspenseQuery-CDWRAkW_.js";import"./useInfiniteQuery-Bac3XvRa.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-B-ukV0jW.js";import"./useSchema-BBzcLXXk.js";import"./index-Nz_RWjY8.js";import"./enums-Bp4SAlPN.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-DEorYF5u.js";import"./uniq-BP7VOetn.js";import"./forEach-CWOCpBhE.js";import"./Add-C2-yJqcf.js";import"./Grid-Doyl9us1.js";import"./ListItem-C6u7Ik_4.js";import"./listItemButtonClasses-Dg5mxcei.js";import"./ListItemIcon-DQNXpxeJ.js";import"./MenuItem-CdqoCxWB.js";import"./ListItemText-Lm8rOxzY.js";import"./ArrowUpward-DNmwttY7.js";import"./ContentCopy-uHfgGG1I.js";import"./FormControlLabel-I4j_CSGI.js";import"./Checkbox-Bv8D7Yjv.js";import"./SwitchBase-BDm3YM90.js";import"./FormGroup-DM3ug8nc.js";import"./RadioGroup-BmoBIvLx.js";import"./Radio-DOF2g2El.js";import"./Slider-CUjZAHK9.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-BievdrGA.js";import"./DialogBase-jhwmtm1u.js";import"./Close-CB4RDINp.js";import"./HelpPopover-6jNO7rXC.js";import"./MarkdownPopover-63--326B.js";import"./LightTooltip-ByM4QqbN.js";import"./MarkdownSynapse-BOOvENLm.js";import"./SkeletonButton-BgAZzTmz.js";import"./SkeletonInlineBlock-CkGbAtvq.js";import"./SkeletonTable-Cw1xCxvL.js";import"./SkeletonParagraph-DzfgVu65.js";import"./JsonSchemaForm-vPa_c-5a.js";import"./GridLegacy-DZ4OMtJD.js";import"./HelpTwoTone-6k_JfbIU.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-CvbJCaVB.js";import"./_createAggregator-BEUroU0K.js";import"./_baseMap-DlGLzu_z.js";import"./DateTimePicker-uRgWlK62.js";import"./useMobilePicker-CadBPusv.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-DnIZLWBQ.js";import"./index-BAqH8QUV.js";import"./Chip-C2QYErxj.js";import"./Tabs-CkZYx0hg.js";import"./KeyboardArrowRight-BS-yDiLQ.js";import"./Autocomplete-D0U-__H0.js";import"./usePreviousProps-BH-KhJ4K.js";import"./use-deep-compare-effect.esm-C9A8HvcU.js";import"./TextWidget-DVghvqiY.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Er={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const qr=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,qr as __namedExportsOrder,Er as default};
