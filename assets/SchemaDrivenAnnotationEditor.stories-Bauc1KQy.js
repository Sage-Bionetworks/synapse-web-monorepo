import{ju as p}from"./iframe-RNQ9FFfL.js";import{S as a}from"./SchemaDrivenAnnotationEditor-O9YPdeBj.js";import"./index-Chi_LkuB.js";import"./useEntity-D2rXBnNC.js";import"./pickBy-B1UJ-_RB.js";import"./isString-BkhGZ6X_.js";import"./_baseIteratee-DejOueIh.js";import"./useInfiniteQuery-BxfOt_4y.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BF6-QWBu.js";import"./useSchema-DSN5XH6u.js";import"./index-Ey5TLC_m.js";import"./enums-BCSCmXXs.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-D2x73z0-.js";import"./uniq-BtLabKOw.js";import"./forEach-CWOCpBhE.js";import"./Add-ax2AKbas.js";import"./Grid-YYSVNtq1.js";import"./ListItem-Bvl-IGxq.js";import"./listItemButtonClasses-CVAJKFUP.js";import"./ListItemIcon-DEduPZIA.js";import"./MenuItem-CB_dWfsU.js";import"./ListItemText-t0DDDpwd.js";import"./ArrowUpward-BcUKw4Y0.js";import"./ContentCopy-ChjyfoN3.js";import"./FormControlLabel-CQvWlPja.js";import"./Checkbox-C6yQUJRz.js";import"./SwitchBase-Djcezb5v.js";import"./FormGroup-BCIPib_p.js";import"./RadioGroup-BgqOmLVY.js";import"./Radio-D5pQpiI2.js";import"./Slider-Ay5W4b-B.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-B3HKAPXk.js";import"./DialogBase-obsFT4U8.js";import"./Close-D12ceDGd.js";import"./HelpPopover-Bu2Wm8fE.js";import"./MarkdownPopover-Dg5ZNl7W.js";import"./LightTooltip-DXhNzA7Y.js";import"./MarkdownSynapse-DBaSEh29.js";import"./SkeletonButton-D0L_5F4L.js";import"./SkeletonInlineBlock-Bh2U8Vk5.js";import"./SkeletonTable-CWFE2ocy.js";import"./SkeletonParagraph-TNDyKrCR.js";import"./JsonSchemaForm-DoBuOyys.js";import"./GridLegacy-Du9x2190.js";import"./HelpTwoTone--9Wr1kQt.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-kSoHz5a7.js";import"./_createAggregator-DUAU6T_6.js";import"./_baseMap-By2r3gd3.js";import"./DateTimePicker-CYdjAJSR.js";import"./useMobilePicker-CwOu22MM.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-3R51bvDZ.js";import"./index-BQpHgqbu.js";import"./Chip-Dz2JQ-pG.js";import"./Tabs-Dv7OSYaT.js";import"./KeyboardArrowRight--brK2yNz.js";import"./Autocomplete-Bxl78B02.js";import"./usePreviousProps--w6OgRvC.js";import"./use-deep-compare-effect.esm-CR1MGTYv.js";import"./TextWidget-Cx8wpAtl.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
