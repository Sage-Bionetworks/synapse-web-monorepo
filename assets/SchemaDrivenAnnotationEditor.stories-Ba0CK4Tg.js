import{jJ as T}from"./iframe-ynK1h1ZQ.js";import{S as C}from"./SchemaDrivenAnnotationEditor-BjjEI4Lm.js";import"./index-r8ZA1smB.js";import"./useEntity-DkZNn0-6.js";import"./pickBy-BXzVzUst.js";import"./isString-Rq1Sw5tw.js";import"./_baseIteratee-f8KlzNwu.js";import"./useQueries-DoP51xjB.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-C_WgtIFm.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-747MaeoS.js";import"./useSchema-CmDR-NdK.js";import"./index-CXqbWCRV.js";import"./enums-DstKDIV6.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BZDElJQx.js";import"./uniq-BBr-0w4l.js";import"./forEach-B8iwwgef.js";import"./Grid-BiX0S-HB.js";import"./ListItem-cw6cUJjv.js";import"./listItemButtonClasses-BkfcQ6Hr.js";import"./ListItemIcon-CS6MTSyq.js";import"./MenuItem-AKaHxYJT.js";import"./ListItemText-98c85xoB.js";import"./ArrowUpward-DvLhLxoT.js";import"./ContentCopy-8W9htiUE.js";import"./FormControlLabel-NofvAP8Q.js";import"./Checkbox-CGzkhN5U.js";import"./SwitchBase-DQA_xSey.js";import"./FormGroup-MF1_z3Ph.js";import"./RadioGroup-T2WvEbiB.js";import"./Radio-BIA2EoV2.js";import"./Slider-C4gAAFuv.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-_5j4EqxQ.js";import"./DialogBase-04kg5s93.js";import"./Close-BsDzgrCN.js";import"./HelpPopover-DR5Q4c37.js";import"./MarkdownPopover-Dyxx0IQ0.js";import"./LightTooltip-D_YZpsMa.js";import"./MarkdownSynapse-Cg823f1k.js";import"./SkeletonButton-Bwr03Ql7.js";import"./SkeletonInlineBlock-C3nmwKQa.js";import"./SkeletonTable-CyuXTNTX.js";import"./SkeletonParagraph-DikrQ7Cm.js";import"./JsonSchemaForm-DoG7iZ3L.js";import"./GridLegacy-CLKFI2aP.js";import"./HelpTwoTone-Dbpe5BO5.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./groupBy-5v3mL-Zq.js";import"./_createAggregator-DUyxouRk.js";import"./_baseMap-D8G-5nF0.js";import"./DateTimePicker-ChhzJ83R.js";import"./useMobilePicker-xo2CvZpc.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-BwhahNHn.js";import"./index-B5clCFJM.js";import"./Chip-9C2a3vCF.js";import"./Tabs-CqcpSj4t.js";import"./KeyboardArrowRight-KzF3RqWg.js";import"./Autocomplete-Ct8269di.js";import"./usePreviousProps-CqtFs6TL.js";import"./use-deep-compare-effect.esm-D95pMM68.js";import"./TextWidget-xQhM3qBv.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Jr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-Arrays',
    entityId: 'syn25959281'
  }
}`,...(m=(a=r.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};var c,d,y;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-IfThenElse'
  }
}`,...(y=(d=e.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var u,h,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    schemaId: 'nkauer-ad.main'
  }
}`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var S,l,A;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    entityId: 'syn32673093'
  }
}`,...(A=(l=o.parameters)==null?void 0:l.docs)==null?void 0:A.source}}};var f,v,I;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    entityId: 'syn25959288'
  }
}`,...(I=(v=n.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var E,q,b;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(b=(q=s.parameters)==null?void 0:q.docs)==null?void 0:b.source}}};const Kr=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Kr as __namedExportsOrder,Jr as default};
