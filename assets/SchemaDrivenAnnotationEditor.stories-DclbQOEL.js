import{jI as p}from"./iframe-Ya-g_qay.js";import{S as a}from"./SchemaDrivenAnnotationEditor-CcJOo8DV.js";import"./index-Chi_LkuB.js";import"./useEntity-JPDUhxLN.js";import"./pickBy-DJc1YXZT.js";import"./isString-BPoMGSCO.js";import"./_baseIteratee-NNKH08m9.js";import"./useQueries-BAvG0eo3.js";import"./useSuspenseQuery-ajSSmE51.js";import"./useInfiniteQuery-DO90_A9I.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-0DqdtmhJ.js";import"./useSchema-CfDakLZd.js";import"./index-I16f2aV3.js";import"./enums-DunsyY2A.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-ub4T8Ncm.js";import"./uniq-06ZLqp-Y.js";import"./forEach-CWOCpBhE.js";import"./Add-Cl6vOGw1.js";import"./Grid-BjdRoMiy.js";import"./ListItem-WVfw-_Td.js";import"./listItemButtonClasses-CkcGfhEa.js";import"./ListItemIcon-B3nysgNy.js";import"./MenuItem-BuXikWov.js";import"./ListItemText-DoAp-a7n.js";import"./ArrowUpward-TPzKvdcd.js";import"./ContentCopy-BGUtOKvg.js";import"./FormControlLabel-D1Z2Cjqs.js";import"./Checkbox-iublSEO5.js";import"./SwitchBase-CIlRr3Ri.js";import"./FormGroup-CBGJL5ph.js";import"./RadioGroup-CdVHnydt.js";import"./Radio-CugMrLNm.js";import"./Slider-9Zm9CsZF.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-BBcvYt37.js";import"./DialogBase-Cq0exykH.js";import"./Close-CwYN6EVd.js";import"./HelpPopover-Cg_-TFXL.js";import"./MarkdownPopover-GltQLah1.js";import"./LightTooltip-CmE9Hp-T.js";import"./MarkdownSynapse-CFShCHbb.js";import"./SkeletonButton-WGw1QxaV.js";import"./SkeletonInlineBlock-BhpPIW12.js";import"./SkeletonTable-gSh9dXdS.js";import"./SkeletonParagraph-B7nhBI0o.js";import"./JsonSchemaForm-COoRlikJ.js";import"./GridLegacy-BLbwwrl6.js";import"./HelpTwoTone-DpKyoDzI.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-ubTlryLP.js";import"./_createAggregator-CiTI5SEZ.js";import"./_baseMap-D_QMnoLZ.js";import"./DateTimePicker-BNfeYK2b.js";import"./useMobilePicker-jXGvLg0T.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-7ZLVJq0V.js";import"./index-xVTfjyPx.js";import"./Chip-CWV3Xi6n.js";import"./Tabs-B57xDml_.js";import"./KeyboardArrowRight-BCgZy198.js";import"./Autocomplete-CsNog2r6.js";import"./usePreviousProps-C9_GVCp9.js";import"./use-deep-compare-effect.esm-MAGuoYEF.js";import"./TextWidget-kNkidVgf.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
