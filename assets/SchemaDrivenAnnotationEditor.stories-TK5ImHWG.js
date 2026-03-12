import{jy as p}from"./iframe-Dj9QuIYm.js";import{S as a}from"./SchemaDrivenAnnotationEditor-CDDiiEpR.js";import"./index-Chi_LkuB.js";import"./useEntity-DrsXJrOv.js";import"./pickBy-C7zQ5L4o.js";import"./isString-CL_Uwcm1.js";import"./_baseIteratee-DhNtCOv6.js";import"./useInfiniteQuery-BlRW4UqT.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-C6D_Cjqk.js";import"./useSchema-B8daqt-X.js";import"./index-CuCS1txz.js";import"./enums-4hiO-BJ2.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-DeWBIhgR.js";import"./uniq-JQnUvl5O.js";import"./forEach-CWOCpBhE.js";import"./Add-DTh8cdSW.js";import"./Grid-PsRNIPe8.js";import"./ListItem-D74AJDZK.js";import"./listItemButtonClasses-DBPUANJZ.js";import"./ListItemIcon-CVyvRfGj.js";import"./MenuItem-Bpg2cwa6.js";import"./ListItemText-zqjXgaOR.js";import"./ArrowUpward-BpEQu43m.js";import"./ContentCopy-Cm003Xop.js";import"./FormControlLabel-CPoAf6VC.js";import"./Checkbox-DGSgr0_P.js";import"./SwitchBase-DytbKUAu.js";import"./FormGroup-CC1gpdv9.js";import"./RadioGroup-BfsvTYnz.js";import"./Radio-MiNAji5a.js";import"./Slider-mQq7gd_Z.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-Dwbyyygg.js";import"./DialogBase-Dda3MpTM.js";import"./Close-BjHtaxrZ.js";import"./HelpPopover-BLYAVpYE.js";import"./MarkdownPopover-CcYcEdRz.js";import"./LightTooltip-e6_OdOFE.js";import"./MarkdownSynapse-Dau4XtwA.js";import"./SkeletonButton-iTrOeh7-.js";import"./SkeletonInlineBlock-D2uK1sRl.js";import"./SkeletonTable-rcTO73Uk.js";import"./SkeletonParagraph-8dZQFouk.js";import"./JsonSchemaForm-DQ6brRYn.js";import"./GridLegacy-BlgbOu1D.js";import"./HelpTwoTone-BxROZcsh.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-B2oDL6Us.js";import"./_createAggregator-BD4qq2vZ.js";import"./_baseMap-D-dsez5o.js";import"./DateTimePicker-D4rvjNZF.js";import"./useMobilePicker-C5G3wbSp.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-BRSw7Gvv.js";import"./index-BLkPSDKJ.js";import"./Chip-Dc-U4nz3.js";import"./Tabs-saibHowZ.js";import"./KeyboardArrowRight-JWM30gXP.js";import"./Autocomplete-DqCSzmaf.js";import"./usePreviousProps-oIKpEDMS.js";import"./use-deep-compare-effect.esm-BBRMHuiL.js";import"./TextWidget-CY79SL5X.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
