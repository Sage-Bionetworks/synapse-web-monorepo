import{jJ as T}from"./iframe-AZFkaj29.js";import{S as C}from"./SchemaDrivenAnnotationEditor-Bv5uUiQU.js";import"./index-r8ZA1smB.js";import"./useEntity-CRct_y1I.js";import"./pickBy-DBC5Ou7j.js";import"./isString-BRS8MwW8.js";import"./_baseIteratee-DXtS-ESO.js";import"./useQueries-DAVMkUle.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-BBaTsQSm.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DjNL6bRI.js";import"./useSchema-COpDKPXr.js";import"./index-CfnkTGRR.js";import"./enums-s92RVAZY.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-7Jf3BhmM.js";import"./uniq-DPD25Rk_.js";import"./forEach-B8iwwgef.js";import"./Grid-xwi4Yp31.js";import"./ListItem--OvGQDlt.js";import"./listItemButtonClasses-Dg_LIiw2.js";import"./ListItemIcon-Bq2dfmYc.js";import"./MenuItem-BsTRry6Y.js";import"./ListItemText-BhNcRuRw.js";import"./ArrowUpward-BC3aJKhV.js";import"./ContentCopy-CTCWg5jF.js";import"./FormControlLabel-jUWSiJCh.js";import"./Checkbox-B90CJICb.js";import"./SwitchBase-BUhbphe5.js";import"./FormGroup-C7RsE6KK.js";import"./RadioGroup-B0Rvo4Wj.js";import"./Radio-CCJNRm9V.js";import"./Slider-N0GgDjJf.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-Ow6R4RYA.js";import"./DialogBase-B8NpJzbS.js";import"./Close-xaNb154N.js";import"./HelpPopover-PDjBv-ns.js";import"./MarkdownPopover-DeqK0fwY.js";import"./LightTooltip-Bbukg8CX.js";import"./MarkdownSynapse-DdUZXrJi.js";import"./SkeletonButton-oQJZ7ToR.js";import"./SkeletonInlineBlock-DtSMBTT9.js";import"./SkeletonTable-DQttbHFf.js";import"./SkeletonParagraph-Bf05FZ4M.js";import"./JsonSchemaForm-D-Y6LbDh.js";import"./GridLegacy-a_OXwgK1.js";import"./HelpTwoTone-wX4EwuVC.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./groupBy-CmWgSbt8.js";import"./_createAggregator-D4uI8RV1.js";import"./_baseMap-CoTbMhkx.js";import"./DateTimePicker-D56YtfbB.js";import"./useMobilePicker-hBlU691D.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-BkfWUdq-.js";import"./index-D-3YUotp.js";import"./Chip-TJPVsrF2.js";import"./Tabs-1XYbjiJK.js";import"./KeyboardArrowRight-CN_JVvIl.js";import"./Autocomplete-XnKZ_leF.js";import"./usePreviousProps-CrVAKLwH.js";import"./use-deep-compare-effect.esm-CkjIpb9c.js";import"./TextWidget-DbZbg50x.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Jr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
