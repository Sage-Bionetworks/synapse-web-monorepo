import{jH as T}from"./iframe-Dz8P-dI2.js";import{S as C}from"./SchemaDrivenAnnotationEditor-Di3G9hEo.js";import"./index-r8ZA1smB.js";import"./useEntity-DvlLZK12.js";import"./pickBy-D2HAKuY1.js";import"./isString-jwQqBAc7.js";import"./_baseIteratee-PAFQZt6W.js";import"./useQueries-Dblxfsni.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-C8P6ajVv.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BhYVsd8D.js";import"./useSchema-BObKzYhr.js";import"./index-C5O6_Ex3.js";import"./enums-CT1ZGkLi.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-CucG64Iw.js";import"./uniq-B4CkjmWE.js";import"./forEach-B8iwwgef.js";import"./Grid-D6P_m0Xy.js";import"./ListItem-CfN87vTM.js";import"./listItemButtonClasses-D2LV-GJ_.js";import"./ListItemIcon-BKndqFFV.js";import"./MenuItem-MnHW3c-e.js";import"./ListItemText-CGaGeldB.js";import"./ArrowUpward-D64dmLFv.js";import"./ContentCopy-DzyAZJPJ.js";import"./FormControlLabel-U_2oimB5.js";import"./Checkbox-B47vyOHs.js";import"./SwitchBase-B9lWykMd.js";import"./FormGroup-BPiZHfOE.js";import"./RadioGroup-BMx0206X.js";import"./Radio-BMewsMBT.js";import"./Slider-Cj-9Mc9r.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-DvlZtFFP.js";import"./DialogBase-GK7w3r0y.js";import"./Close-BWrQ-snO.js";import"./HelpPopover-CJRWDTvc.js";import"./MarkdownPopover-7Q79L-1x.js";import"./LightTooltip-DgOc2Xfz.js";import"./MarkdownSynapse-9b0IyTJh.js";import"./SkeletonButton-2qZCOB9B.js";import"./SkeletonInlineBlock-DU5NVTXg.js";import"./SkeletonTable-s01CyjIZ.js";import"./SkeletonParagraph-DjiISGk9.js";import"./JsonSchemaForm-EMR6CliR.js";import"./GridLegacy-rPJKF-ip.js";import"./HelpTwoTone-C7-Cyega.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./groupBy-DT2r9h0r.js";import"./_createAggregator-BkkdaJUx.js";import"./_baseMap-CIKcJdN5.js";import"./DateTimePicker-Nzbz1nVq.js";import"./useMobilePicker-UPe_Xnc3.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-BjtOApjz.js";import"./index-BXaeJfK5.js";import"./Chip-Cj9us3E8.js";import"./Tabs-BvDKwiQk.js";import"./KeyboardArrowRight-D7eqvAZi.js";import"./Autocomplete-gWxe0YPJ.js";import"./usePreviousProps-oI6DtAo-.js";import"./use-deep-compare-effect.esm-Dnjq1VY6.js";import"./TextWidget-D3uoOTIY.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Hr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(b=(q=s.parameters)==null?void 0:q.docs)==null?void 0:b.source}}};const Kr=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Kr as __namedExportsOrder,Hr as default};
