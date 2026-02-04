import{jH as p}from"./iframe-C64n1GD8.js";import{S as a}from"./SchemaDrivenAnnotationEditor-BiLz-WPv.js";import"./index-Chi_LkuB.js";import"./useEntity-Dy6ZZyZt.js";import"./pickBy-DIyQM_4r.js";import"./isString-C0jfIwgY.js";import"./_baseIteratee-DRcYnuUR.js";import"./useQueries-CI1-f4sD.js";import"./useSuspenseQuery-DKR51829.js";import"./useInfiniteQuery-17Rp3FWY.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-RjJQ7I9X.js";import"./useSchema-BHAzDlgM.js";import"./index-BqDq-tS5.js";import"./enums-BQxze2eu.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-5KfUbR-i.js";import"./uniq-DGMRWxbl.js";import"./forEach-CWOCpBhE.js";import"./Add-B0KjEoAS.js";import"./Grid-DqBexckt.js";import"./ListItem-C3OYT-7h.js";import"./listItemButtonClasses-YtkzxDhc.js";import"./ListItemIcon-DRLAHRsu.js";import"./MenuItem-BnAVJRr4.js";import"./ListItemText-CVmUzYmO.js";import"./ArrowUpward-DydSPPyb.js";import"./ContentCopy-7kt5wjxV.js";import"./FormControlLabel-DFd8tF3Z.js";import"./Checkbox-D83KQWHy.js";import"./SwitchBase-D7SWinHy.js";import"./FormGroup-DLoUgC6Y.js";import"./RadioGroup-MIdNZpCX.js";import"./Radio-x9l2We6W.js";import"./Slider-CXZ8U9S9.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-0v5aIB6P.js";import"./DialogBase-CvFrMWW4.js";import"./Close-jGAkMweY.js";import"./HelpPopover-DMcj4HzC.js";import"./MarkdownPopover-aVtIL7z6.js";import"./LightTooltip-DDkKmTHq.js";import"./MarkdownSynapse-CenQtkph.js";import"./SkeletonButton-BHX6f9gP.js";import"./SkeletonInlineBlock-CDYMy8y_.js";import"./SkeletonTable-QL6vSy9n.js";import"./SkeletonParagraph-Duc3bDvV.js";import"./JsonSchemaForm-B7frPmQQ.js";import"./GridLegacy-B8nrD_X8.js";import"./HelpTwoTone-C1JElwEp.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-Bh0mH1Eo.js";import"./_createAggregator-BqfzYLZy.js";import"./_baseMap-BIWfE2OE.js";import"./DateTimePicker-CKff5rEO.js";import"./useMobilePicker-oSp30eZo.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-CyOFPwVG.js";import"./index-C-1MBf7J.js";import"./Chip-B6rIlUNr.js";import"./Tabs-BSQJJnhZ.js";import"./KeyboardArrowRight-BoY3ZYNN.js";import"./Autocomplete-BpC4fM2a.js";import"./usePreviousProps-jrNC5DIm.js";import"./use-deep-compare-effect.esm-DM9VHs1k.js";import"./TextWidget-B3aq9jPU.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
