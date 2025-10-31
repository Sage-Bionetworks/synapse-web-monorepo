import{jB as T}from"./iframe-SFoYirDz.js";import{S as C}from"./SchemaDrivenAnnotationEditor-Tt-hp7jn.js";import"./index-r8ZA1smB.js";import"./useEntity-DJx9kr6F.js";import"./pickBy-B6e5906y.js";import"./isString-axfUnF0q.js";import"./_baseIteratee-3mtgIhyy.js";import"./useQueries-wygqzh_8.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-BXG3TdfN.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Dn65PMqz.js";import"./index-CoH3MwS5.js";import"./enums-a14lInQj.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-Dvvfy_q_.js";import"./uniq-BBRbUiEP.js";import"./forEach-B8iwwgef.js";import"./Grid-DgxOnKrN.js";import"./ListItem-X7Sn9QrN.js";import"./listItemButtonClasses-DTmMqNul.js";import"./ListItemIcon-jzKWfauG.js";import"./MenuItem-CfJpQ_dM.js";import"./ListItemText-Bucw6mxy.js";import"./ArrowUpward-DtDzADbZ.js";import"./ContentCopy-BLUFXtkU.js";import"./FormControlLabel-BdI7Ynze.js";import"./Checkbox-C0ba4mce.js";import"./SwitchBase-B1PJBJjS.js";import"./FormGroup-D_baejGI.js";import"./RadioGroup-CFEtrjAe.js";import"./Radio-DepSv39E.js";import"./Slider-CcguhbzO.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-Sxdwb5-l.js";import"./DialogBase-inZlHGFS.js";import"./Close-BJ49k-BP.js";import"./HelpPopover-BLir_Etv.js";import"./MarkdownPopover-DPeUsc6W.js";import"./LightTooltip--axdJ8pX.js";import"./MarkdownSynapse-CC4Dnhut.js";import"./SkeletonButton-Di0Yg_Uv.js";import"./SkeletonInlineBlock-DrZRW3Px.js";import"./SkeletonTable-Drqg7wxh.js";import"./SkeletonParagraph-D_k7-Stv.js";import"./JsonSchemaForm-B_x9PKPO.js";import"./GridLegacy-C5WRGkuT.js";import"./HelpTwoTone-D6G1UBLM.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./groupBy-YHSKrCB9.js";import"./_createAggregator-BdR2456o.js";import"./_baseMap-CF5SXoQH.js";import"./DateTimePicker--icMKJuB.js";import"./useMobilePicker-cpbXCnpz.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-DrnIpz85.js";import"./index-CPHx5Zd7.js";import"./Chip-05FYIvnY.js";import"./Tabs-JvICd9PT.js";import"./KeyboardArrowRight-oYtnNlA9.js";import"./Autocomplete-YaQ6a89U.js";import"./usePreviousProps-CZDlgYsu.js";import"./use-deep-compare-effect.esm-CucFAbzx.js";import"./TextWidget-DoDHvn8K.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(b=(q=s.parameters)==null?void 0:q.docs)==null?void 0:b.source}}};const Kr=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Kr as __namedExportsOrder,Vr as default};
