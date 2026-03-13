import{jy as p}from"./iframe-CsSu4aY1.js";import{S as a}from"./SchemaDrivenAnnotationEditor-BY9yxO59.js";import"./index-Chi_LkuB.js";import"./useEntity-DxQVxjiV.js";import"./pickBy-Cl3JCYxg.js";import"./isString-7JTEWMLO.js";import"./_baseIteratee-gsTZcny-.js";import"./useInfiniteQuery-BqCjpHyD.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CB6pyKp2.js";import"./useSchema-DEvqYLwt.js";import"./index-CRAuKPtT.js";import"./enums-BSF5N5Lr.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-D0zvbrXD.js";import"./uniq-BI-2V_2U.js";import"./forEach-CWOCpBhE.js";import"./Add-WAR4Qo_8.js";import"./Grid-CWxSedPD.js";import"./ListItem-oxCb3vqO.js";import"./listItemButtonClasses-ByML3Or5.js";import"./ListItemIcon-cYbGeKog.js";import"./MenuItem-DMX9IaUe.js";import"./ListItemText-BH1v3rPX.js";import"./ArrowUpward-aSmo9smx.js";import"./ContentCopy-DzTzPyuz.js";import"./FormControlLabel-ChObL5OX.js";import"./Checkbox-CDofp03P.js";import"./SwitchBase-CM4LuFoi.js";import"./FormGroup-BJ5Pffup.js";import"./RadioGroup-CgiqEym2.js";import"./Radio-7Ld_Dq6v.js";import"./Slider-YqzMBvaC.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-CBtdbnX0.js";import"./DialogBase-CanZMjo6.js";import"./Close-zQDjyYg6.js";import"./HelpPopover-DVap6Gmb.js";import"./MarkdownPopover-OLDH6d_Y.js";import"./LightTooltip-TPCxIcs1.js";import"./MarkdownSynapse-hmG2FW9K.js";import"./SkeletonButton-CJUI3Sjx.js";import"./SkeletonInlineBlock-Bq8lQ2xh.js";import"./SkeletonTable-B-kH2kE9.js";import"./SkeletonParagraph-Cpkk7Gw6.js";import"./JsonSchemaForm-BtFL1arq.js";import"./GridLegacy-CNKbJueK.js";import"./HelpTwoTone-qF1RQmkJ.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-DPwqqiH3.js";import"./_createAggregator-OuZPDTzq.js";import"./_baseMap-WrXwzA6l.js";import"./DateTimePicker-772ECcRd.js";import"./useMobilePicker-Dx_iwbiJ.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-CFD8mkzZ.js";import"./index-JJ0tKNJq.js";import"./Chip-Dd_YPni3.js";import"./Tabs-lJqzob7I.js";import"./KeyboardArrowRight-BTqXHz0V.js";import"./Autocomplete-DYbEgyLk.js";import"./usePreviousProps-DnfDwm_G.js";import"./use-deep-compare-effect.esm-DuqOxvpH.js";import"./TextWidget-D1DUsaqp.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
