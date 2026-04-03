import{jw as p}from"./iframe-BfB6FrYj.js";import{S as a}from"./SchemaDrivenAnnotationEditor-DqlAHFjB.js";import"./index-Chi_LkuB.js";import"./useEntity-Di2XEsy8.js";import"./pickBy-CRDgoixE.js";import"./isString-Bld0cjlJ.js";import"./_baseIteratee-BXfMppB5.js";import"./useInfiniteQuery-DyZ1e7rN.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BITphhFW.js";import"./useSchema-BBCSmQcx.js";import"./index-wx-AP-i-.js";import"./enums-Eq6kf4y9.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-C_OwUKu_.js";import"./uniq-DrXEBJXx.js";import"./forEach-UWyboym_.js";import"./Add-C2RS2ffR.js";import"./Grid-CKKdVltP.js";import"./ListItem-D5pRGaNH.js";import"./listItemButtonClasses-8UczhBBp.js";import"./ListItemIcon-B4PAKJpg.js";import"./MenuItem-CG4XGW7R.js";import"./ListItemText-C8TrbWPG.js";import"./ArrowUpward-CZRXO2lV.js";import"./ContentCopy-NBQSbwvN.js";import"./FormControlLabel-jJq3AgOA.js";import"./Checkbox-CZIHvRti.js";import"./SwitchBase-CpXG8q-V.js";import"./FormGroup-DyWw_IJN.js";import"./RadioGroup-ClTwLnA4.js";import"./Radio-DyraNeXY.js";import"./Slider-BbES1z08.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-DRAawVI6.js";import"./DialogBase-Oo5YqmVI.js";import"./Close-BRAhiQKl.js";import"./HelpPopover-BCQ8LHno.js";import"./MarkdownPopover-DQe0NYIR.js";import"./LightTooltip-BjAj_W1D.js";import"./MarkdownSynapse-BMEskP2u.js";import"./SkeletonButton-CyKkbiIk.js";import"./SkeletonInlineBlock-CtmRc0d4.js";import"./SkeletonTable-KlaWzsOV.js";import"./SkeletonParagraph-CD0x-Nfw.js";import"./JsonSchemaForm-Cn31CMfZ.js";import"./GridLegacy-9q_NKHlN.js";import"./HelpTwoTone-CEec_Nhi.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-BXqx5G-t.js";import"./_createAggregator-CcQ2yD6T.js";import"./_baseMap-D5GGKe2u.js";import"./DateTimePicker-BTlLIJeb.js";import"./useMobilePicker-MCb89ubn.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-B4GfmCdD.js";import"./index-DcdQR_Vf.js";import"./Chip-H1nC51OX.js";import"./Tabs-BsPstjbT.js";import"./KeyboardArrowRight-BHviQNSD.js";import"./Autocomplete-Debb-qQe.js";import"./usePreviousProps-Dh5fkFTb.js";import"./use-deep-compare-effect.esm-D6H02bcg.js";import"./TextWidget-CZMw1NVB.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
