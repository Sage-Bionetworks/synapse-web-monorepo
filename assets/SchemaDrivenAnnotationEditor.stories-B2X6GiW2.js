import{jw as p}from"./iframe-DnxOmzjq.js";import{S as a}from"./SchemaDrivenAnnotationEditor-Iy1dEN6V.js";import"./index-Chi_LkuB.js";import"./useEntity-DJslnMA8.js";import"./pickBy-BhKGT5ho.js";import"./isString-Cg4EQByH.js";import"./_baseIteratee-C_T2x48z.js";import"./useInfiniteQuery-BiSYghaZ.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-D5DN4xp6.js";import"./useSchema-DS1G2gH-.js";import"./index-BV_O6GCC.js";import"./enums-CjAbXm-J.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-MCwZYOPx.js";import"./uniq-DDGLeeV4.js";import"./forEach-UWyboym_.js";import"./Add-DUXP1T_U.js";import"./Grid-B--VudpN.js";import"./ListItem-DCxpPG7F.js";import"./listItemButtonClasses-Dx3JM9G1.js";import"./ListItemIcon-DHhMPl0W.js";import"./MenuItem-CSaQiiYA.js";import"./ListItemText-DsyIdA0r.js";import"./ArrowUpward-DyxMQy43.js";import"./ContentCopy-DSyBeUIf.js";import"./FormControlLabel-DRARADOY.js";import"./Checkbox-z9I2CIKw.js";import"./SwitchBase-D18-gFmO.js";import"./FormGroup-BQ8Ffcll.js";import"./RadioGroup-CqFf0k8y.js";import"./Radio-BmkwTj_l.js";import"./Slider-K0IInaoN.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-DmtyRXb1.js";import"./DialogBase-D3z_RB8X.js";import"./Close-BG6pWxxQ.js";import"./HelpPopover-7iTAnRZF.js";import"./MarkdownPopover-BBvcdCrE.js";import"./LightTooltip-DBTB_o03.js";import"./MarkdownSynapse-Dhwl4QzF.js";import"./SkeletonButton-BsjS3fr7.js";import"./SkeletonInlineBlock-Df91B-1t.js";import"./SkeletonTable-CwpgexC9.js";import"./SkeletonParagraph-gynKm0um.js";import"./JsonSchemaForm-Dui1SvKE.js";import"./GridLegacy-Zi_1yQ7f.js";import"./HelpTwoTone-C1cddcge.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-DN4idoer.js";import"./_createAggregator-M3bEv3sR.js";import"./_baseMap-DlgqdAJU.js";import"./DateTimePicker-BKmIK4QR.js";import"./useMobilePicker-DsP78_Jb.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-Cs24ViBN.js";import"./index-CXjrgaVo.js";import"./Chip-IfgFn8uB.js";import"./Tabs-RqHIbu_a.js";import"./KeyboardArrowRight-mbPTswKj.js";import"./Autocomplete-DapLW15v.js";import"./usePreviousProps-DDp_4LnU.js";import"./use-deep-compare-effect.esm-LWeTJCgr.js";import"./TextWidget-LMl8NAaH.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
