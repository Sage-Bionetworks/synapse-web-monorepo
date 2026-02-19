import{jJ as p}from"./iframe-C_dryyJN.js";import{S as a}from"./SchemaDrivenAnnotationEditor-CuH5KVYt.js";import"./index-Chi_LkuB.js";import"./useEntity-BvJnGaOd.js";import"./pickBy-DYsFflkF.js";import"./isString-DiG9etdC.js";import"./_baseIteratee-BWtFRFDt.js";import"./useQueries-CV3SItnz.js";import"./useSuspenseQuery-DbrtCnso.js";import"./useInfiniteQuery-CNeRYV1j.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CnImPArp.js";import"./useSchema-CfIC1HSz.js";import"./index-DXOad2uO.js";import"./enums-DFNzBHg3.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-DAcOskvX.js";import"./uniq-Bo6-IDOO.js";import"./forEach-CWOCpBhE.js";import"./Add-Dcn89qtn.js";import"./Grid-BY3BZ-52.js";import"./ListItem-cOh_8Uoh.js";import"./listItemButtonClasses-BcTYeMjo.js";import"./ListItemIcon-Duqq__yW.js";import"./MenuItem-DGJNpis4.js";import"./ListItemText-CfTHM04l.js";import"./ArrowUpward-12sqrVQX.js";import"./ContentCopy-Ba019jwa.js";import"./FormControlLabel-COE-xUzF.js";import"./Checkbox-BbczdEJd.js";import"./SwitchBase-CP_0pcQR.js";import"./FormGroup-D867ixit.js";import"./RadioGroup-Byt3G26C.js";import"./Radio-VQPG9_1H.js";import"./Slider-CURtPnbj.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-DwI3ORsC.js";import"./DialogBase-DK1f3XXS.js";import"./Close-qhBbRzO3.js";import"./HelpPopover-Bv7T8EMS.js";import"./MarkdownPopover-t0Q781ku.js";import"./LightTooltip-kABvS4Wq.js";import"./MarkdownSynapse-63MOCJzX.js";import"./SkeletonButton-DhVxQIGw.js";import"./SkeletonInlineBlock-DprLb70P.js";import"./SkeletonTable-DtAMx_Lr.js";import"./SkeletonParagraph-Me_ye6-N.js";import"./JsonSchemaForm-CYBhIgfx.js";import"./GridLegacy-BHgIXg1b.js";import"./HelpTwoTone-DSew-Otp.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-CoMS2XMN.js";import"./_createAggregator-Cp-FM7lY.js";import"./_baseMap-BLNeiwE3.js";import"./DateTimePicker-CsLEOQQ3.js";import"./useMobilePicker-Dh5_49n4.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-CxE9uA8t.js";import"./index-ClzeWg2J.js";import"./Chip-0QWq_ruD.js";import"./Tabs-Dk6yQc4B.js";import"./KeyboardArrowRight-BRx21zoQ.js";import"./Autocomplete-C7Bf5yvV.js";import"./usePreviousProps-35wWwmqT.js";import"./use-deep-compare-effect.esm-OAQm12oT.js";import"./TextWidget-CiPXYTJg.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const br=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,br as __namedExportsOrder,qr as default};
