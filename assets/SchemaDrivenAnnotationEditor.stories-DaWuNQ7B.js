import{jG as p}from"./iframe-CKbLOTsP.js";import{S as a}from"./SchemaDrivenAnnotationEditor-Buxe8ZWn.js";import"./index-Chi_LkuB.js";import"./useEntity-CpDeexrA.js";import"./pickBy-DtAx7Zad.js";import"./isString-Z8lC2x5p.js";import"./_baseIteratee-DG3kTKCt.js";import"./useQueries-Crmwrrll.js";import"./useSuspenseQuery-uKlZGoJr.js";import"./useInfiniteQuery-3dT2qg-d.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-FcyEIsmG.js";import"./useSchema-CI6GTn7c.js";import"./index-BD1zXiuW.js";import"./enums-plsXAN29.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BW2NyVLM.js";import"./uniq--fJ4fBkP.js";import"./forEach-CWOCpBhE.js";import"./Add-DA1r2Mv-.js";import"./Grid-Bi_dYFOR.js";import"./ListItem-DDxI0YKz.js";import"./listItemButtonClasses-CxlrSwUL.js";import"./ListItemIcon-DvYMc09c.js";import"./MenuItem-BEEnz0ed.js";import"./ListItemText-WK_92HBa.js";import"./ArrowUpward-Bbx6pw16.js";import"./ContentCopy-dDrh1Rsn.js";import"./FormControlLabel-CcttKXCu.js";import"./Checkbox-7g56acu5.js";import"./SwitchBase-XdBe4z01.js";import"./FormGroup-DhKs9vzn.js";import"./RadioGroup-B_IZGKjJ.js";import"./Radio-ecbFYP80.js";import"./Slider-DN3gLaSw.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-Cpo9FRDD.js";import"./DialogBase-Yec6-9FP.js";import"./Close-BeDMsUE7.js";import"./HelpPopover-BR9cC52u.js";import"./MarkdownPopover-6_Y0Co8e.js";import"./LightTooltip-CgnSmSvt.js";import"./MarkdownSynapse-DMmwxLiP.js";import"./SkeletonButton-8Vj3L_5j.js";import"./SkeletonInlineBlock-D5PXFjGc.js";import"./SkeletonTable-DmfimDzq.js";import"./SkeletonParagraph-Kah2Bnvf.js";import"./JsonSchemaForm-BhSpmH4_.js";import"./GridLegacy-BHrvqpxA.js";import"./HelpTwoTone-B7zIF-O8.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy--E6fVYcR.js";import"./_createAggregator-BA0HPVCc.js";import"./_baseMap-BlvC3fFz.js";import"./DateTimePicker-SaX0Tjj_.js";import"./useMobilePicker-CGci3V8v.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-B2TMA_5Y.js";import"./index-Dm4n4t0Y.js";import"./Chip-CxgxE7T3.js";import"./Tabs-BxmWGvHT.js";import"./KeyboardArrowRight-Df-2jg7J.js";import"./Autocomplete-t_FNPX90.js";import"./usePreviousProps-DTRMooXL.js";import"./use-deep-compare-effect.esm-SK-d_1QT.js";import"./TextWidget-BDNto8of.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Er={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
