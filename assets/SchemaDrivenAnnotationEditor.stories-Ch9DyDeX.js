import{ju as p}from"./iframe-Dbbh8EoS.js";import{S as a}from"./SchemaDrivenAnnotationEditor-CmF3JwfG.js";import"./index-Chi_LkuB.js";import"./useEntity-C7229iuw.js";import"./pickBy-euuktPBy.js";import"./isString-Crns8k2p.js";import"./_baseIteratee-Cv68UzAc.js";import"./useInfiniteQuery-DwX98EP2.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Bz0ZdlYf.js";import"./useSchema-03weUqBe.js";import"./index-D6JUmw61.js";import"./enums-CssWh4Bo.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-B2oUF5fZ.js";import"./uniq-C2nxWVi4.js";import"./forEach-CWOCpBhE.js";import"./Add-CzP-BVzb.js";import"./Grid-CQsegt0C.js";import"./ListItem-F4osOKIr.js";import"./listItemButtonClasses-BdiprMYh.js";import"./ListItemIcon-DaQZsJWx.js";import"./MenuItem-DT6oAegc.js";import"./ListItemText-C4pNoEQa.js";import"./ArrowUpward-Bhs8PP8_.js";import"./ContentCopy-BsYe140_.js";import"./FormControlLabel-jfsl2tBz.js";import"./Checkbox-CL29762Y.js";import"./SwitchBase-z6kwMqP-.js";import"./FormGroup-DLmCsInn.js";import"./RadioGroup-CdbZSHeK.js";import"./Radio-Cw3OIANI.js";import"./Slider-DWBMdTKU.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-DgOVI2l3.js";import"./DialogBase-DP21qmxt.js";import"./Close-Dh11qsnE.js";import"./HelpPopover-D9KVZzsy.js";import"./MarkdownPopover-BphtwQmM.js";import"./LightTooltip-CYhWOoK6.js";import"./MarkdownSynapse-Na_JpKhK.js";import"./SkeletonButton-BznCZj-O.js";import"./SkeletonInlineBlock-BfsUoAAw.js";import"./SkeletonTable-Cpo7iVUX.js";import"./SkeletonParagraph-DMnuMidF.js";import"./JsonSchemaForm-CzPIJq4r.js";import"./GridLegacy-z_jjh39R.js";import"./HelpTwoTone-D1OU6VXX.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-BYr-O8fp.js";import"./_createAggregator-B88630wK.js";import"./_baseMap-uGS4ydDB.js";import"./DateTimePicker-Ct2UwzHs.js";import"./useMobilePicker-BEXfYVPF.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-SNxRM6VY.js";import"./index-C5FBv2d-.js";import"./Chip-D58Qw1vN.js";import"./Tabs-1DOBUmLC.js";import"./KeyboardArrowRight-CpvWz4HP.js";import"./Autocomplete-CHCshB-5.js";import"./usePreviousProps-5gNaxLyP.js";import"./use-deep-compare-effect.esm-DpPyWBYt.js";import"./TextWidget-CjWWWTV1.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
