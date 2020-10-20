!function($){var createdElements=[],defaults={options:{prependExistingHelpBlock:!1,sniffHtml:!0,preventSubmit:!0,submitError:!1,submitSuccess:!1,semanticallyStrict:!1,autoAdd:{helpBlocks:!0},filter:function(){return!0}},methods:{init:function(options){var settings=$.extend(!0,{},defaults);settings.options=$.extend(!0,settings.options,options);var =this,uniqueForms=$.unique(this.map((function(){return $(this).parents("form")[0]})).toArray());return $(uniqueForms).bind("submit",(function(e){var =$(this),warningsFound=0,=.find("input,textarea,select").not("[type=submit],[type=image]").filter(settings.options.filter);.trigger("submit.validation").trigger("validationLostFocus.validation"),.each((function(i,el){var ,=$(el).parents(".form-group, .checkbox").first();.hasClass("warning")&&(.removeClass("warning").addClass("error"),warningsFound++)})),.trigger("validationLostFocus.validation"),warningsFound?(settings.options.preventSubmit&&e.preventDefault(),.addClass("error"),$.isFunction(settings.options.submitError)&&settings.options.submitError(,e,.jqBootstrapValidation("collectErrors",!0))):(.removeClass("error"),$.isFunction(settings.options.submitSuccess)&&settings.options.submitSuccess(,e))})),this.each((function(){var =$(this),=.parents(".form-group, .checkbox").first(),=.find(".help-block").first(),=.parents("form").first(),validatorNames=[];if(!.length&&settings.options.autoAdd&&settings.options.autoAdd.helpBlocks&&(=$('<div class="help-block" />'),.append(),createdElements.push([0])),settings.options.sniffHtml){var message="";if(void 0!==.attr("pattern")&&(message="Not in the expected format\x3c!-- data-validation-pattern-message to override --\x3e",.data("validationPatternMessage")&&(message=.data("validationPatternMessage")),.data("validationPatternMessage",message),.data("validationPatternRegex",.attr("pattern"))),void 0!==.attr("max")||void 0!==.attr("aria-valuemax")){var max=void 0!==.attr("max")?.attr("max"):.attr("aria-valuemax");message="Too high: Maximum of '"+max+"'\x3c!-- data-validation-max-message to override --\x3e",.data("validationMaxMessage")&&(message=.data("validationMaxMessage")),.data("validationMaxMessage",message),.data("validationMaxMax",max)}if(void 0!==.attr("min")||void 0!==.attr("aria-valuemin")){var min=void 0!==.attr("min")?.attr("min"):.attr("aria-valuemin");message="Too low: Minimum of '"+min+"'\x3c!-- data-validation-min-message to override --\x3e",.data("validationMinMessage")&&(message=.data("validationMinMessage")),.data("validationMinMessage",message),.data("validationMinMin",min)}void 0!==.attr("maxlength")&&(message="Too long: Maximum of '"+.attr("maxlength")+"' characters\x3c!-- data-validation-maxlength-message to override --\x3e",.data("validationMaxlengthMessage")&&(message=.data("validationMaxlengthMessage")),.data("validationMaxlengthMessage",message),.data("validationMaxlengthMaxlength",.attr("maxlength"))),void 0!==.attr("minlength")&&(message="Too short: Minimum of '"+.attr("minlength")+"' characters\x3c!-- data-validation-minlength-message to override --\x3e",.data("validationMinlengthMessage")&&(message=.data("validationMinlengthMessage")),.data("validationMinlengthMessage",message),.data("validationMinlengthMinlength",.attr("minlength"))),void 0===.attr("required")&&void 0===.attr("aria-required")||(message=settings.builtInValidators.required.message,.data("validationRequiredMessage")&&(message=.data("validationRequiredMessage")),.data("validationRequiredMessage",message)),void 0!==.attr("type")&&"number"===.attr("type").toLowerCase()&&(message=settings.builtInValidators.number.message,.data("validationNumberMessage")&&(message=.data("validationNumberMessage")),.data("validationNumberMessage",message)),void 0!==.attr("type")&&"email"===.attr("type").toLowerCase()&&(message="Not a valid email address\x3c!-- data-validator-validemail-message to override --\x3e",.data("validationValidemailMessage")?message=.data("validationValidemailMessage"):.data("validationEmailMessage")&&(message=.data("validationEmailMessage")),.data("validationValidemailMessage",message)),void 0!==.attr("minchecked")&&(message="Not enough options checked; Minimum of '"+.attr("minchecked")+"' required\x3c!-- data-validation-minchecked-message to override --\x3e",.data("validationMincheckedMessage")&&(message=.data("validationMincheckedMessage")),.data("validationMincheckedMessage",message),.data("validationMincheckedMinchecked",.attr("minchecked"))),void 0!==.attr("maxchecked")&&(message="Too many options checked; Maximum of '"+.attr("maxchecked")+"' required\x3c!-- data-validation-maxchecked-message to override --\x3e",.data("validationMaxcheckedMessage")&&(message=.data("validationMaxcheckedMessage")),.data("validationMaxcheckedMessage",message),.data("validationMaxcheckedMaxchecked",.attr("maxchecked")))}void 0!==.data("validation")&&(validatorNames=.data("validation").split(",")),$.each(.data(),(function(i,el){var parts=i.replace(/([A-Z])/g,",").split(",");"validation"===parts[0]&&parts[1]&&validatorNames.push(parts[1])}));var validatorNamesToInspect=validatorNames,newValidatorNamesToInspect=[];do{$.each(validatorNames,(function(i,el){validatorNames[i]=formatValidatorName(el)})),validatorNames=$.unique(validatorNames),newValidatorNamesToInspect=[],$.each(validatorNamesToInspect,(function(i,el){if(void 0!==.data("validation"+el+"Shortcut"))$.each(.data("validation"+el+"Shortcut").split(","),(function(i2,el2){newValidatorNamesToInspect.push(el2)}));else if(settings.builtInValidators[el.toLowerCase()]){var validator=settings.builtInValidators[el.toLowerCase()];"shortcut"===validator.type.toLowerCase()&&$.each(validator.shortcut.split(","),(function(i,el){el=formatValidatorName(el),newValidatorNamesToInspect.push(el),validatorNames.push(el)}))}})),validatorNamesToInspect=newValidatorNamesToInspect}while(validatorNamesToInspect.length>0);var validators={};$.each(validatorNames,(function(i,el){var message=.data("validation"+el+"Message"),hasOverrideMessage=void 0!==message,foundValidator=!1;if(message=message||"'"+el+"' validation failed \x3c!-- Add attribute 'data-validation-"+el.toLowerCase()+"-message' to input to change this message --\x3e",$.each(settings.validatorTypes,(function(validatorType,validatorTemplate){void 0===validators[validatorType]&&(validators[validatorType]=[]),foundValidator||void 0===.data("validation"+el+formatValidatorName(validatorTemplate.name))||(validators[validatorType].push($.extend(!0,{name:formatValidatorName(validatorTemplate.name),message:message},validatorTemplate.init(,el))),foundValidator=!0)})),!foundValidator&&settings.builtInValidators[el.toLowerCase()]){var validator=$.extend(!0,{},settings.builtInValidators[el.toLowerCase()]);hasOverrideMessage&&(validator.message=message);var validatorType=validator.type.toLowerCase();"shortcut"===validatorType?foundValidator=!0:$.each(settings.validatorTypes,(function(validatorTemplateType,validatorTemplate){void 0===validators[validatorTemplateType]&&(validators[validatorTemplateType]=[]),foundValidator||validatorType!==validatorTemplateType.toLowerCase()||(.data("validation"+el+formatValidatorName(validatorTemplate.name),validator[validatorTemplate.name.toLowerCase()]),validators[validatorType].push($.extend(validator,validatorTemplate.init(,el))),foundValidator=!0)}))}foundValidator||$.error("Cannot find validation info for '"+el+"'")})),.data("original-contents",.data("original-contents")?.data("original-contents"):.html()),.data("original-role",.data("original-role")?.data("original-role"):.attr("role")),.data("original-classes",.data("original-clases")?.data("original-classes"):.attr("class")),.data("original-aria-invalid",.data("original-aria-invalid")?.data("original-aria-invalid"):.attr("aria-invalid")),.bind("validation.validation",(function(event,params){var value=getValue(),errorsFound=[];return $.each(validators,(function(validatorType,validatorTypeArray){(value||value.length||params&&params.includeEmpty||settings.validatorTypes[validatorType].blockSubmit&&params&&params.submitting)&&$.each(validatorTypeArray,(function(i,validator){settings.validatorTypes[validatorType].validate(,value,validator)&&errorsFound.push(validator.message)}))})),errorsFound})),.bind("getValidators.validation",(function(){return validators})),.bind("submit.validation",(function(){return .triggerHandler("change.validation",{submitting:!0})})),.bind(["keyup","focus","blur","click","keydown","keypress","change"].join(".validation ")+".validation",(function(e,params){var value=getValue(),errorsFound=[];.find("input,textarea,select").each((function(i,el){var oldCount=errorsFound.length;if($.each($(el).triggerHandler("validation.validation",params),(function(j,message){errorsFound.push(message)})),errorsFound.length>oldCount)$(el).attr("aria-invalid","true");else{var original=.data("original-aria-invalid");$(el).attr("aria-invalid",void 0!==original&&original)}})),.find("input,select,textarea").not().not('[name="'+.attr("name")+'"]').trigger("validationLostFocus.validation"),(errorsFound=$.unique(errorsFound.sort())).length?(.removeClass("success error").addClass("warning"),settings.options.semanticallyStrict&&1===errorsFound.length?.html(errorsFound[0]+(settings.options.prependExistingHelpBlock?.data("original-contents"):"")):.html('<ul class="list-unstyled alert alert-warning" role="alert"><li>'+errorsFound.join("</li><li>")+"</li></ul>"+(settings.options.prependExistingHelpBlock?.data("original-contents"):""))):(.removeClass("warning error success"),value.length>0&&.addClass("success"),.html(.data("original-contents"))),"blur"===e.type&&.removeClass("success")})),.bind("validationLostFocus.validation",(function(){.removeClass("success")}))}))},destroy:function(){return this.each((function(){var =$(this),=.parents(".form-group, .checkbox").first(),=.find(".help-block").first();.unbind(".validation"),.html(.data("original-contents")),.attr("class",.data("original-classes")),.attr("aria-invalid",.data("original-aria-invalid")),.attr("role",.data("original-role")),createdElements.indexOf([0])>-1&&.remove()}))},collectErrors:function(includeEmpty){var errorMessages={};return this.each((function(i,el){var =$(el),name=.attr("name"),errors=.triggerHandler("validation.validation",{includeEmpty:!0});errorMessages[name]=$.extend(!0,errors,errorMessages[name])})),$.each(errorMessages,(function(i,el){0===el.length&&delete errorMessages[i]})),errorMessages},hasErrors:function(){var errorMessages=[];return this.each((function(i,el){errorMessages=errorMessages.concat($(el).triggerHandler("getValidators.validation")?$(el).triggerHandler("validation.validation",{submitting:!0}):[])})),errorMessages.length>0},override:function(newDefaults){defaults=$.extend(!0,defaults,newDefaults)}},validatorTypes:{callback:{name:"callback",init:function(,name){return{validatorName:name,callback:.data("validation"+name+"Callback"),lastValue:.val(),lastValid:!0,lastFinished:!0}},validate:function(,value,validator){if(validator.lastValue===value&&validator.lastFinished)return!validator.lastValid;if(!0===validator.lastFinished){validator.lastValue=value,validator.lastValid=!0,validator.lastFinished=!1;var rrjqbvValidator=validator,rrjqbvThis=;executeFunctionByName(validator.callback,window,,value,(function(data){rrjqbvValidator.lastValue===data.value&&(rrjqbvValidator.lastValid=data.valid,data.message&&(rrjqbvValidator.message=data.message),rrjqbvValidator.lastFinished=!0,rrjqbvThis.data("validation"+rrjqbvValidator.validatorName+"Message",rrjqbvValidator.message),setTimeout((function(){rrjqbvThis.trigger("change.validation")}),1))}))}return!1}},ajax:{name:"ajax",init:function(,name){return{validatorName:name,url:.data("validation"+name+"Ajax"),lastValue:.val(),lastValid:!0,lastFinished:!0}},validate:function(,value,validator){return""+validator.lastValue==""+value&&!0===validator.lastFinished?!1===validator.lastValid:(!0===validator.lastFinished&&(validator.lastValue=value,validator.lastValid=!0,validator.lastFinished=!1,$.ajax({url:validator.url,data:"value="+value+"&field="+.attr("name"),dataType:"json",success:function(data){""+validator.lastValue==""+data.value&&(validator.lastValid=!!data.valid,data.message&&(validator.message=data.message),validator.lastFinished=!0,.data("validation"+validator.validatorName+"Message",validator.message),setTimeout((function(){.trigger("change.validation")}),1))},failure:function(){validator.lastValid=!0,validator.message="ajax call failed",validator.lastFinished=!0,.data("validation"+validator.validatorName+"Message",validator.message),setTimeout((function(){.trigger("change.validation")}),1)}})),!1)}},regex:{name:"regex",init:function(,name){return{regex:regexFromString(.data("validation"+name+"Regex"))}},validate:function(,value,validator){return!validator.regex.test(value)&&!validator.negative||validator.regex.test(value)&&validator.negative}},required:{name:"required",init:function(,name){return{}},validate:function(,value,validator){return!(0!==value.length||validator.negative)||!!(value.length>0&&validator.negative)},blockSubmit:!0},match:{name:"match",init:function(,name){var element=.parents("form").first().find('[name="'+.data("validation"+name+"Match")+'"]').first();return element.bind("validation.validation",(function(){.trigger("change.validation",{submitting:!0})})),{element:element}},validate:function(,value,validator){return value!==validator.element.val()&&!validator.negative||value===validator.element.val()&&validator.negative},blockSubmit:!0},max:{name:"max",init:function(,name){return{max:.data("validation"+name+"Max")}},validate:function(,value,validator){return parseFloat(value,10)>parseFloat(validator.max,10)&&!validator.negative||parseFloat(value,10)<=parseFloat(validator.max,10)&&validator.negative}},min:{name:"min",init:function(,name){return{min:.data("validation"+name+"Min")}},validate:function(,value,validator){return parseFloat(value)<parseFloat(validator.min)&&!validator.negative||parseFloat(value)>=parseFloat(validator.min)&&validator.negative}},maxlength:{name:"maxlength",init:function(,name){return{maxlength:.data("validation"+name+"Maxlength")}},validate:function(,value,validator){return value.length>validator.maxlength&&!validator.negative||value.length<=validator.maxlength&&validator.negative}},minlength:{name:"minlength",init:function(,name){return{minlength:.data("validation"+name+"Minlength")}},validate:function(,value,validator){return value.length<validator.minlength&&!validator.negative||value.length>=validator.minlength&&validator.negative}},maxchecked:{name:"maxchecked",init:function(,name){var elements=.parents("form").first().find('[name="'+.attr("name")+'"]');return elements.bind("click.validation",(function(){.trigger("change.validation",{includeEmpty:!0})})),{maxchecked:.data("validation"+name+"Maxchecked"),elements:elements}},validate:function(,value,validator){return validator.elements.filter(":checked").length>validator.maxchecked&&!validator.negative||validator.elements.filter(":checked").length<=validator.maxchecked&&validator.negative},blockSubmit:!0},minchecked:{name:"minchecked",init:function(,name){var elements=.parents("form").first().find('[name="'+.attr("name")+'"]');return elements.bind("click.validation",(function(){.trigger("change.validation",{includeEmpty:!0})})),{minchecked:.data("validation"+name+"Minchecked"),elements:elements}},validate:function(,value,validator){return validator.elements.filter(":checked").length<validator.minchecked&&!validator.negative||validator.elements.filter(":checked").length>=validator.minchecked&&validator.negative},blockSubmit:!0}},builtInValidators:{email:{name:"Email",type:"shortcut",shortcut:"validemail"},validemail:{name:"Validemail",type:"regex",regex:"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,10}",message:"Not a valid email address\x3c!-- data-validator-validemail-message to override --\x3e"},passwordagain:{name:"Passwordagain",type:"match",match:"password",message:"Does not match the given password\x3c!-- data-validator-paswordagain-message to override --\x3e"},positive:{name:"Positive",type:"shortcut",shortcut:"number,positivenumber"},negative:{name:"Negative",type:"shortcut",shortcut:"number,negativenumber"},number:{name:"Number",type:"regex",regex:"([+-]?\d+(\.\d*)?([eE][+-]?[0-9]+)?)?",message:"Must be a number\x3c!-- data-validator-number-message to override --\x3e"},integer:{name:"Integer",type:"regex",regex:"[+-]?\d+",message:"No decimal places allowed\x3c!-- data-validator-integer-message to override --\x3e"},positivenumber:{name:"Positivenumber",type:"min",min:0,message:"Must be a positive number\x3c!-- data-validator-positivenumber-message to override --\x3e"},negativenumber:{name:"Negativenumber",type:"max",max:0,message:"Must be a negative number\x3c!-- data-validator-negativenumber-message to override --\x3e"},required:{name:"Required",type:"required",message:"This is required\x3c!-- data-validator-required-message to override --\x3e"},checkone:{name:"Checkone",type:"minchecked",minchecked:1,message:"Check at least one option\x3c!-- data-validation-checkone-message to override --\x3e"}}},formatValidatorName=function(name){return name.toLowerCase().replace(/(^|\s)([a-z])/g,(function(m,p1,p2){return p1+p2.toUpperCase()}))},getValue=function(){var value=.val(),type=.attr("type");return"checkbox"===type&&(value=.is(":checked")?value:""),"radio"===type&&(value=$('input[name="'+.attr("name")+'"]:checked').length>0?value:""),value};function regexFromString(inputstring){return new RegExp("^"+inputstring+"$")}function executeFunctionByName(functionName,context){for(var args=Array.prototype.slice.call(arguments).splice(2),namespaces=functionName.split("."),func=namespaces.pop(),i=0;i<namespaces.length;i++)context=context[namespaces[i]];return context[func].apply(this,args)}$.fn.jqBootstrapValidation=function(method){return defaults.methods[method]?defaults.methods[method].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof method&&method?($.error("Method "+method+" does not exist on jQuery.jqBootstrapValidation"),null):defaults.methods.init.apply(this,arguments)},$.jqBootstrapValidation=function(options){$(":input").not("[type=image],[type=submit]").jqBootstrapValidation.apply(this,arguments)}}(jQuery);