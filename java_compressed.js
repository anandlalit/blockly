// Do not edit this file; automatically generated by build.py.
'use strict';


// Copyright 2012 Google Inc.  Apache License 2.0
Blockly.Java=new Blockly.Generator("Java");Blockly.Java.addReservedWords("abstract,assert,boolean,break,case,catch,class,const,continue,default,do,double,else,enum,extends,final,finally,float,for,goto,if,implements,import,instanceof,int,interface,long,native,new,package,private,protected,public,return,short,static,strictfp,super,switch,synchronized,this,throw,throws,transient,try,void,volatile,while,false,null,true,abs,divmod,input,open,staticmethod,all,enumerate,int,ord,str,any,eval,isinstance,pow,sum,basestring,execfile,issubclass,print,super,bin,file,iter,property,tuple,bool,filter,len,range,type,bytearray,float,list,raw_input,unichr,callable,format,locals,reduce,unicode,chr,frozenset,long,reload,vars,classmethod,getattr,map,repr,xrange,cmp,globals,max,reversed,zip,compile,hasattr,memoryview,round,__import__,complex,hash,min,set,apply,delattr,help,next,setattr,buffer,dict,hex,object,slice,coerce,dir,id,oct,sorted,intern,equal");
Blockly.Java.ORDER_ATOMIC=0;Blockly.Java.ORDER_COLLECTION=1;Blockly.Java.ORDER_STRING_CONVERSION=1;Blockly.Java.ORDER_MEMBER=2;Blockly.Java.ORDER_FUNCTION_CALL=2;Blockly.Java.ORDER_POSTFIX=3;Blockly.Java.ORDER_EXPONENTIATION=3;Blockly.Java.ORDER_LOGICAL_NOT=3;Blockly.Java.ORDER_UNARY_SIGN=4;Blockly.Java.ORDER_MULTIPLICATIVE=5;Blockly.Java.ORDER_ADDITIVE=6;Blockly.Java.ORDER_BITWISE_SHIFT=7;Blockly.Java.ORDER_RELATIONAL=8;Blockly.Java.ORDER_EQUALITY=9;Blockly.Java.ORDER_BITWISE_AND=10;
Blockly.Java.ORDER_BITWISE_XOR=11;Blockly.Java.ORDER_BITWISE_OR=12;Blockly.Java.ORDER_LOGICAL_AND=13;Blockly.Java.ORDER_LOGICAL_OR=14;Blockly.Java.ORDER_CONDITIONAL=15;Blockly.Java.ORDER_ASSIGNMENT=16;Blockly.Java.ORDER_NONE=99;Blockly.Java.PASS="  {}\n";Blockly.Java.POSTFIX="";Blockly.Java.EXTRAINDENT="";Blockly.Java.variableTypes_={};Blockly.Java.blocklyTypes_={};Blockly.Java.AppName_="myApp";Blockly.Java.Package_="demo";Blockly.Java.Baseclass_="";Blockly.Java.needImports_=[];
Blockly.Java.ExtraImports_=null;Blockly.Java.setAppName=function(a){a&&""!==a||(a="MyApp");this.AppName_=a;console.log(this.AppName_+" --- <"+a+">")};Blockly.Java.getAppName=function(){return this.AppName_};Blockly.Java.setPackage=function(a){a&&""!==a||(a="demo");this.Package_=a};Blockly.Java.getPackage=function(){return this.Package_};Blockly.Java.setBaseclass=function(a){this.Baseclass_=a};Blockly.Java.getBaseclass=function(){return this.Baseclass_};
Blockly.Java.GetVariableType=function(a){(a=this.variableTypes_[a])||(a="string/*UNKNOWN_TYPE*/");return a};Blockly.Java.GetBlocklyType=function(a){return this.blocklyTypes_[a]};Blockly.Java.addImport=function(a){a="import "+a+";";this.imports_[a]=a};Blockly.Java.getImports=function(){if(this.ExtraImports_)for(var a=0;a<this.ExtraImports_.length;a++)this.addImport(this.ExtraImports_[a]);a=goog.object.getValues(this.imports_);goog.array.sort(a);return a.join("\n")};
Blockly.Java.setExtraImports=function(a){this.ExtraImports_=a};Blockly.Java.workspaceToCode_=Blockly.Java.workspaceToCode;Blockly.Java.workspaceToCode=function(a,b){var c=this.workspaceToCode_(a,b),d="package "+this.getPackage()+";\n\n"+this.getImports()+"\n\npublic class "+this.getAppName();this.getBaseclass()&&(d+=" extends "+this.getBaseclass());return d+(" {\n\n"+c+"\n}\n")};Blockly.Java.getValueType=function(a,b){var c=a.getInputTargetBlock(b);return c?c.outputConnection.check_:""};
Blockly.Java.init=function(a,b){this.definitions_=Object.create(null);this.functionNames_=Object.create(null);this.imports_=Object.create(null);for(var c=0;c<this.needImports_.length;c++)this.addImport(this.needImports_[c]);this.variableDB_?this.variableDB_.reset():this.variableDB_=new Blockly.Names(this.RESERVED_WORDS_);var c=[],d=Blockly.Variables.allVariables(a);this.blocklyTypes_=Blockly.Variables.allVariablesTypes(a);for(var e=0;e<d.length;e++){var g=d[e],f=this.blocklyTypes_[g];"Object"===f?
f="Object":"Array"===f?f="LinkedList":"Boolean"===f?f="Boolean":"String"===f?f="String":"Colour"===f?f="String":"Number"===f?f="double":""!==f?Blockly.Blocks[f]&&Blockly.Blocks[f].GBPClass?f=Blockly.Blocks[f].GBPClass:(console.log("Unknown type for "+g+" using Object for"+f),f="Object/*UNKNOWN_TYPE for "+f+"*/"):(console.log("Unknown type for "+g+" using String"),f="String/*UNKNOWN_TYPE*/");this.variableTypes_[g]=f;c.push("protected "+f+" "+this.variableDB_.getName(d[e],Blockly.Variables.NAME_TYPE)+
";")}this.definitions_.variables=c.join("\n")};Blockly.Java.finish=function(a){var b=[],c;for(c in this.definitions_){var d=this.definitions_[c];"function"===typeof d&&(d=d.call(this));b.push(d)}return b.join("\n\n").replace(/\n\n+/g,"\n\n").replace(/\n*$/,"\n\n\n")+a};Blockly.Java.scrubNakedValue=function(a){return a+"\n"};Blockly.Java.quote_=function(a){a=a.replace(/\\/g,"\\\\").replace(/\n/g,"\\\n").replace(/\%/g,"\\%").replace(/"/g,'\\"');return'"'+a+'"'};
Blockly.Java.toStringCode=function(a){a=a.trim();""!==a&&'"'!==a.charAt(0)&&(Blockly.isNumber(a)?a='"'+a+'"':(this.addImport("java.text.DecimalFormat"),this.addImport("java.text.NumberFormat"),a=this.provideFunction_("blocklyToString",["public static String blocklyToString(Object object) {","  String result;","  if (object instanceof String) {","      result = (String) object;","  } else {","      // must be a number","      // might be a double","      try {","          Double d = (double) object;",
"          // it was a double, so keep going",'          NumberFormat formatter = new DecimalFormat("#.#####");',"          result = formatter.format(d);","","      } catch (Exception ex) {","          // not a double, see if it is an integer","          try {","              Integer i = (int) object;","              // format should be number with a decimal point","              result = i.toString();","          } catch (Exception ex2) {","              // not a double or integer",'              result = "UNKNOWN";',
"          }","      }","  }","","  return result;","}"])+"("+a+")"));return a};
Blockly.Java.scrub_=function(a,b,c){var d="";if(!a.outputConnection||!a.outputConnection.targetConnection){var e=a.getCommentText();e&&(d+=this.prefixLines(e,"// ")+"\n");for(var g=0;g<a.inputList.length;g++)a.inputList[g].type==Blockly.INPUT_VALUE&&(e=a.inputList[g].connection.targetBlock())&&(e=this.allNestedComments(e))&&(d+=this.prefixLines(e,"// "))}g=this.POSTFIX;this.POSTFIX="";e=this.EXTRAINDENT;this.EXTRAINDENT="";a=a.nextConnection&&a.nextConnection.targetBlock();c=this.blockToCode(a,c);
""!=e&&(c=this.prefixLines(c,e));return d+b+c+g};
// Copyright 2012 Google Inc.  Apache License 2.0
Blockly.Java.colour={};Blockly.Java.colour_picker=function(a){return['"'+a.getFieldValue("COLOUR")+'"',Blockly.Java.ORDER_ATOMIC]};Blockly.Java.colour_random=function(a){Blockly.Java.addImport("java.util.Random");return[Blockly.Java.provideFunction_("colour_random",["public static String "+Blockly.Java.FUNCTION_NAME_PLACEHOLDER_+"() {","  double num = Math.floor(Math.random() * Math.pow(2, 24));",'  return String.format("#%06x", (int)num);',"}"])+"()",Blockly.Java.ORDER_FUNCTION_CALL]};
Blockly.Java.colour_rgb=function(a){var b=Blockly.Java.provideFunction_("colour_rgb",["public static String "+Blockly.Java.FUNCTION_NAME_PLACEHOLDER_+"(double r, double g, double b) {","  r = Math.round(Math.max(Math.min(r, 100), 0) * 2.55);","  g = Math.round(Math.max(Math.min(g, 100), 0) * 2.55);","  b = Math.round(Math.max(Math.min(b, 100), 0) * 2.55);",'  return String.format("#%02x%02x%02x", (int)r, (int)g, (int)b);',"}"]),c=Blockly.Java.valueToCode(a,"RED",Blockly.Java.ORDER_NONE)||0,d=Blockly.Java.valueToCode(a,
"GREEN",Blockly.Java.ORDER_NONE)||0;a=Blockly.Java.valueToCode(a,"BLUE",Blockly.Java.ORDER_NONE)||0;return[b+"("+c+", "+d+", "+a+")",Blockly.Java.ORDER_FUNCTION_CALL]};
Blockly.Java.colour_blend=function(a){var b=Blockly.Java.provideFunction_("colour_blend",["public static String "+Blockly.Java.FUNCTION_NAME_PLACEHOLDER_+"(String c1, String c2, double ratio) {","  int r = 0;","  int g = 0;","  int b = 0;","  try {","    ratio = Math.max(Math.min(ratio, 1), 0);","    int r1 = Integer.parseInt(c1.substring(1, 3), 16);","    int g1 = Integer.parseInt(c1.substring(3, 5), 16);","    int b1 = Integer.parseInt(c1.substring(5, 7), 16);","    int r2 = Integer.parseInt(c2.substring(1, 3), 16);",
"    int g2 = Integer.parseInt(c2.substring(3, 5), 16);","    int b2 = Integer.parseInt(c2.substring(5, 7), 16);","    r = (int)Math.round(r1 * (1 - ratio) + r2 * ratio);","    g = (int)Math.round(g1 * (1 - ratio) + g2 * ratio);","    b = (int)Math.round(b1 * (1 - ratio) + b2 * ratio);","  } catch (Exception ex) {","  }",'  return String.format("#%02x%02x%02x", r, g, b);',"}"]),c=Blockly.Java.valueToCode(a,"COLOUR1",Blockly.Java.ORDER_NONE)||'"#000000"',d=Blockly.Java.valueToCode(a,"COLOUR2",Blockly.Java.ORDER_NONE)||
'"#000000"';a=Blockly.Java.valueToCode(a,"RATIO",Blockly.Java.ORDER_NONE)||0;return[b+"("+c+", "+d+", "+a+")",Blockly.Java.ORDER_FUNCTION_CALL]};
// Copyright 2012 Google Inc.  Apache License 2.0
Blockly.Java.lists={};Blockly.Java.lists_create_empty=function(a){return["new LinkedList()",Blockly.Java.ORDER_ATOMIC]};Blockly.Java.lists_create_with=function(a){for(var b=Array(a.itemCount_),c=0;c<a.itemCount_;c++)b[c]=Blockly.Java.valueToCode(a,"ADD"+c,Blockly.Java.ORDER_NONE)||"None";Blockly.Java.addImport("java.util.Arrays");b="new LinkedList(Arrays.asList("+b.join(", ")+"))";return[b,Blockly.Java.ORDER_ATOMIC]};
Blockly.Java.lists_repeat=function(a){var b=Blockly.Java.valueToCode(a,"ITEM",Blockly.Java.ORDER_NONE)||"None";a=Blockly.Java.valueToCode(a,"NUM",Blockly.Java.ORDER_MULTIPLICATIVE)||"0";return[Blockly.Java.provideFunction_("lists_repeat",["public static LinkedList "+Blockly.Java.FUNCTION_NAME_PLACEHOLDER_+"(Object item, int torepeat) {","  LinkedList<Object> result = new LinkedList<>();","  for(int x = 0; x < torepeat; x++) {","    result.add(item);","  }","  return result;","}"])+"("+b+","+a+")",
Blockly.Java.ORDER_FUNCTION_CALL]};Blockly.Java.lists_length=function(a){return[(Blockly.Java.valueToCode(a,"VALUE",Blockly.Java.ORDER_NONE)||"[]")+".size()",Blockly.Java.ORDER_FUNCTION_CALL]};Blockly.Java.lists_isEmpty=function(a){return[(Blockly.Java.valueToCode(a,"VALUE",Blockly.Java.ORDER_NONE)||"[]")+".size() == 0",Blockly.Java.ORDER_LOGICAL_NOT]};
Blockly.Java.lists_indexOf=function(a){var b="FIRST"==a.getFieldValue("END")?"indexOf":"lastIndexOf",c=Blockly.Java.valueToCode(a,"FIND",Blockly.Java.ORDER_NONE)||"[]";return[(Blockly.Java.valueToCode(a,"VALUE",Blockly.Java.ORDER_MEMBER)||"''")+"."+b+"("+c+") + 1",Blockly.Java.ORDER_FUNCTION_CALL]};
Blockly.Java.lists_getIndex=function(a){var b=a.getFieldValue("MODE")||"GET",c=a.getFieldValue("WHERE")||"FROM_START",d=Blockly.Java.valueToCode(a,"AT",Blockly.Java.ORDER_UNARY_SIGN)||"1";a=Blockly.Java.valueToCode(a,"VALUE",Blockly.Java.ORDER_MEMBER)||"[]";if("FIRST"==c){if("GET"==b)return[a+".getFirst()",Blockly.Java.ORDER_MEMBER];c=a+".removeFirst()";if("GET_REMOVE"==b)return[c,Blockly.Java.ORDER_FUNCTION_CALL];if("REMOVE"==b)return c+";\n"}else if("LAST"==c){if("GET"==b)return[a+".getLast()",
Blockly.Java.ORDER_MEMBER];c=a+".removeLast()";if("GET_REMOVE"==b)return[c,Blockly.Java.ORDER_FUNCTION_CALL];if("REMOVE"==b)return c+";\n"}else if("FROM_START"==c){d=Blockly.isNumber(d)?parseInt(d,10)-1:"("+d+" - 1)";if("GET"==b)return[a+".get((int)"+d+")",Blockly.Java.ORDER_MEMBER];c=a+".remove((int)"+d+")";if("GET_REMOVE"==b)return[c,Blockly.Java.ORDER_FUNCTION_CALL];if("REMOVE"==b)return c+";\n"}else if("FROM_END"==c){if("GET"==b)return[a+".get("+a+".size() - (int)"+d+")",Blockly.Java.ORDER_MEMBER];
c=a+".remove("+a+".size() - (int)"+d+")";if("GET_REMOVE"==b)return[c,Blockly.Java.ORDER_FUNCTION_CALL];if("REMOVE"==b)return c+";\n"}else if("RANDOM"==c){Blockly.Java.addImport("java.lang.Math");if("GET"==b)return[a+".get((int)(Math.random() * "+a+".size()))",Blockly.Java.ORDER_FUNCTION_CALL];c=Blockly.Java.provideFunction_("lists_remove_random_item",["public static Object "+Blockly.Java.FUNCTION_NAME_PLACEHOLDER_+"(LinkedList myList) {","  int x = (int)(Math.random() * myList.size());","  return myList.remove(x);",
"}"])+"("+a+")";if("GET_REMOVE"==b)return[c,Blockly.Java.ORDER_FUNCTION_CALL];if("REMOVE"==b)return c+";\n"}throw"Unhandled combination (lists_getIndex).";};
Blockly.Java.lists_setIndex=function(a){var b=Blockly.Java.valueToCode(a,"LIST",Blockly.Java.ORDER_MEMBER)||"[]",c=a.getFieldValue("MODE")||"GET",d=a.getFieldValue("WHERE")||"FROM_START",e=Blockly.Java.valueToCode(a,"AT",Blockly.Java.ORDER_NONE)||"1";a=Blockly.Java.valueToCode(a,"TO",Blockly.Java.ORDER_NONE)||"None";if("FIRST"==d){if("SET"==c)return b+".set(0, "+a+");\n";if("INSERT"==c)return b+".addFirst("+a+");\n"}else if("LAST"==d){if("SET"==c)return b+".set("+b+".size()-1, "+a+");\n";if("INSERT"==
c)return b+".add("+a+");\n"}else if("FROM_START"==d){e=Blockly.isNumber(e)?parseInt(e,10)-1:"((int)"+e+" - 1)";if("SET"==c)return b+".set("+e+", "+a+");\n";if("INSERT"==c)return b+".add("+e+", "+a+");\n"}else if("FROM_END"==d){e=Blockly.isNumber(e)?parseInt(e,10):"((int)"+e+")";if("SET"==c)return b+".set("+b+".size() -"+e+", "+a+");\n";if("INSERT"==c)return b+".add("+b+".size() -"+e+", "+a+");\n"}else if("RANDOM"==d){Blockly.Java.addImport("java.util.Random");b.match(/^\w+$/)?d="":(d=Blockly.Java.variableDB_.getDistinctName("tmp_list",
Blockly.Variables.NAME_TYPE),e=d+" = "+b+"\n",b=d,d=e);e=Blockly.Java.variableDB_.getDistinctName("tmp_x",Blockly.Variables.NAME_TYPE);d+="int "+e+" = (int)(Math.random() * "+b+".size());\n";if("SET"==c)return d+(b+".set("+e+", "+a+");\n");if("INSERT"==c)return d+=b+".add("+e+", "+a+");\n"}throw"Unhandled combination (lists_setIndex).";};
Blockly.Java.lists_getSublist=function(a){var b=Blockly.Java.valueToCode(a,"LIST",Blockly.Java.ORDER_MEMBER)||"[]",c=a.getFieldValue("WHERE1"),d=a.getFieldValue("WHERE2"),e=Blockly.Java.valueToCode(a,"AT1",Blockly.Java.ORDER_ADDITIVE)||"1";a=Blockly.Java.valueToCode(a,"AT2",Blockly.Java.ORDER_ADDITIVE)||"1";"FIRST"==c||"FROM_START"==c&&"1"==e?e="0":"FROM_START"==c?e=Blockly.isNumber(e)?parseInt(e,10)-1:"((int)"+e+" - 1)":"FROM_END"==c&&(e=Blockly.isNumber(e)?parseInt(e,10):"((int)"+e+")",e=b+".size() - "+
e);"LAST"==d||"FROM_END"==d&&"1"==a?a=b+".size()-1":"FROM_START"==d?a=Blockly.isNumber(a)?parseInt(a,10)-1:"((int)"+a+"-1)":"FROM_END"==d&&(Blockly.isNumber(a)?(a=parseInt(a,10),a=b+".size() - "+a):a=b+".size() - ((int)"+a+"-1)");return[Blockly.Java.provideFunction_("lists_sublist",["public static LinkedList "+Blockly.Java.FUNCTION_NAME_PLACEHOLDER_+"(List list, int startIndex, int endIndex) {","  LinkedList<Object> result = new LinkedList<>();","  int sizeList = list.size();","  for(int x = startIndex; x <= endIndex && x < sizeList; x++) {",
"    result.add(list.get(x));","  }","  return result;","}"])+"("+b+", "+e+", "+a+")",Blockly.Java.ORDER_MEMBER]};
Blockly.Java.lists_split=function(a){var b=a.getFieldValue("MODE");if("SPLIT"==b)b=Blockly.Java.valueToCode(a,"INPUT",Blockly.Java.ORDER_MEMBER)||"''",a=Blockly.Java.valueToCode(a,"DELIM",Blockly.Java.ORDER_NONE),a="new LinkedList(Arrays.asList("+b+".split("+a+")))";else if("JOIN"==b)b=Blockly.Java.valueToCode(a,"INPUT",Blockly.Java.ORDER_NONE)||"[]",a=Blockly.Java.valueToCode(a,"DELIM",Blockly.Java.ORDER_MEMBER)||"''",Blockly.Java.addImport("java.lang.StringBuilder"),a=Blockly.Java.provideFunction_("lists_join",
["public static String "+Blockly.Java.FUNCTION_NAME_PLACEHOLDER_+"(List<String> list, String separator) {","  StringBuilder result = new StringBuilder();",'  String extra = "";',"  for (String elem : list) {","     result.append(extra);","     result.append(elem);","     extra = separator;","  }","  return result.toString();","}"])+"("+b+", "+a+")";else throw"Unknown mode: "+b;return[a,Blockly.Java.ORDER_FUNCTION_CALL]};
// Copyright 2012 Google Inc.  Apache License 2.0
Blockly.Java.logic={};
Blockly.Java.controls_if=function(a){for(var b=0,c=Blockly.Java.valueToCode(a,"IF"+b,Blockly.Java.ORDER_NONE)||"false",d=Blockly.Java.statementToCode(a,"DO"+b)||Blockly.Java.PASS,e="if ("+c+") {\n"+d,b=1;b<=a.elseifCount_;b++)c=Blockly.Java.valueToCode(a,"IF"+b,Blockly.Java.ORDER_NONE)||"false",d=Blockly.Java.statementToCode(a,"DO"+b)||Blockly.Java.PASS,e+="} else if ("+c+") {\n"+d;a.elseCount_&&(d=Blockly.Java.statementToCode(a,"ELSE")||Blockly.Java.PASS,e+="} else {\n"+d);return e+"}\n"};
Blockly.Java.logic_compare=function(a){var b={EQ:"==",NEQ:"!=",LT:"<",LTE:"<=",GT:">",GTE:">="}[a.getFieldValue("OP")],c=Blockly.Java.getValueType(a,"A"),d=Blockly.Java.getValueType(a,"B"),e="",g=Blockly.Java.ORDER_RELATIONAL;c&&goog.array.contains(c,"String")||d&&goog.array.contains(d,"String")?(c=Blockly.Java.valueToCode(a,"A",g)||'""',a=Blockly.Java.valueToCode(a,"B",g)||'""',e="=="===b?c+".equals("+a+")":"!="===b?"!"+c+".equals("+a+")":c+".compareTo("+a+") "+b+" 0"):(c=Blockly.Java.valueToCode(a,
"A",g)||"0",a=Blockly.Java.valueToCode(a,"B",g)||"0",e=c+" "+b+" "+a);return[e,g]};Blockly.Java.logic_operation=function(a){var b="AND"==a.getFieldValue("OP")?" && ":" || ",c="and"==b?Blockly.Java.ORDER_LOGICAL_AND:Blockly.Java.ORDER_LOGICAL_OR,d=Blockly.Java.valueToCode(a,"A",c);a=Blockly.Java.valueToCode(a,"B",c);if(d||a){var e=" && "==b?"true":"false";d||(d=e);a||(a=e)}else a=d="false";return[d+b+a,c]};
Blockly.Java.logic_negate=function(a){return["!("+(Blockly.Java.valueToCode(a,"BOOL",Blockly.Java.ORDER_LOGICAL_NOT)||"true")+")",Blockly.Java.ORDER_LOGICAL_NOT]};Blockly.Java.logic_boolean=function(a){return["TRUE"==a.getFieldValue("BOOL")?"true":"false",Blockly.Java.ORDER_ATOMIC]};Blockly.Java.logic_null=function(a){return["null",Blockly.Java.ORDER_ATOMIC]};
Blockly.Java.logic_ternary=function(a){var b=Blockly.Java.valueToCode(a,"IF",Blockly.Java.ORDER_CONDITIONAL)||"false",c=Blockly.Java.valueToCode(a,"THEN",Blockly.Java.ORDER_CONDITIONAL)||"null";a=Blockly.Java.valueToCode(a,"ELSE",Blockly.Java.ORDER_CONDITIONAL)||"null";return[b+" ? "+c+" : "+a,Blockly.Java.ORDER_CONDITIONAL]};
// Copyright 2012 Google Inc.  Apache License 2.0
Blockly.Java.loops={};Blockly.Java.controls_repeat=function(a){var b=parseInt(a.getFieldValue("TIMES"),10),c=Blockly.Java.statementToCode(a,"DO"),c=Blockly.Java.addLoopTrap(c,a.id)||Blockly.Java.PASS;a=Blockly.Java.variableDB_.getDistinctName("count",Blockly.Variables.NAME_TYPE);return"for (int "+a+"=0; "+a+" < "+b+";"+a+"++) {\n"+c+"} // end for\n"};
Blockly.Java.controls_repeat_ext=function(a){var b=Blockly.Java.valueToCode(a,"TIMES",Blockly.Java.ORDER_NONE)||"0",b=Blockly.isNumber(b)?parseInt(b,10):"int("+b+")",c=Blockly.Java.statementToCode(a,"DO"),c=Blockly.Java.addLoopTrap(c,a.id)||Blockly.Java.PASS;a=Blockly.Java.variableDB_.getDistinctName("count",Blockly.Variables.NAME_TYPE);return"for (int "+a+"=0; "+a+" < "+b+";"+a+"++) {\n"+c+"} // end for\n"};
Blockly.Java.controls_whileUntil=function(a){var b="UNTIL"==a.getFieldValue("MODE"),c=Blockly.Java.valueToCode(a,"BOOL",b?Blockly.Java.ORDER_LOGICAL_NOT:Blockly.Java.ORDER_NONE)||"false",d=Blockly.Java.statementToCode(a,"DO"),d=Blockly.Java.addLoopTrap(d,a.id)||Blockly.Java.PASS;if(b&&"true"===c||!b&&"false"===c)a=Blockly.Java.variableDB_.getDistinctName(c,Blockly.Variables.NAME_TYPE),Blockly.Java.stashStatement("boolean "+a+" = "+c+";\n"),c=a;b&&(c="!"+c);return"while ("+c+") {\n"+d+"} // end while\n"};
Blockly.Java.controls_for=function(a){var b=Blockly.Java.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE);Blockly.Java.GetVariableType(a.getFieldValue("VAR"));var c=Blockly.Java.valueToCode(a,"FROM",Blockly.Java.ORDER_NONE)||"0",d=Blockly.Java.valueToCode(a,"TO",Blockly.Java.ORDER_NONE)||"0",e=Blockly.Java.valueToCode(a,"BY",Blockly.Java.ORDER_NONE)||"1",g=Blockly.Java.statementToCode(a,"DO"),g=Blockly.Java.addLoopTrap(g,a.id)||Blockly.Java.PASS;a="";if(Blockly.isNumber(c)&&
Blockly.isNumber(d)&&Blockly.isNumber(e)){var c=parseFloat(c),d=parseFloat(d),e=Math.abs(parseFloat(e)),f="<=",h="++";c>d&&(f=">=",e=-e);0>e?h=" -= "+Math.abs(e):1!=e&&(h=" += "+e);a+="for ("+b+" = "+c+"; "+b+f+d+"; "+b+h+")"}else f=c,c.match(/^\w+$/)||Blockly.isNumber(c)||(f=Blockly.Java.variableDB_.getDistinctName(b+"_start",Blockly.Variables.NAME_TYPE),a+="double "+f+" = "+c+";\n"),c=d,d.match(/^\w+$/)||Blockly.isNumber(d)||(c=Blockly.Java.variableDB_.getDistinctName(b+"_end",Blockly.Variables.NAME_TYPE),
a+="double "+c+" = "+d+";\n"),d=Blockly.Java.variableDB_.getDistinctName(b+"_inc",Blockly.Variables.NAME_TYPE),a+="double "+d+" = ",a=Blockly.isNumber(e)?a+(Math.abs(e)+";\n"):a+("Math.abs("+e+");\n"),a=a+("if ("+f+" > "+c+") {\n")+(Blockly.Java.INDENT+d+" = -"+d+";\n"),a+="}\n",a+="for ("+b+" = "+f+";\n     "+d+" >= 0 ? "+b+" <= "+c+" : "+b+" >= "+c+";\n     "+b+" += "+d+")";return a+=" {\n"+g+"} // end for\n"};
Blockly.Java.controls_forEach=function(a){var b=Blockly.Java.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE),c=Blockly.Java.GetVariableType(a.getFieldValue("VAR")),d=Blockly.Java.valueToCode(a,"LIST",Blockly.Java.ORDER_RELATIONAL)||"[]",e=Blockly.Java.statementToCode(a,"DO"),e=Blockly.Java.addLoopTrap(e,a.id)||Blockly.Java.PASS;return"for ("+c+" "+b+" :"+d+") {\n"+e+"} // end for\n"};
Blockly.Java.controls_flow_statements=function(a){switch(a.getFieldValue("FLOW")){case "BREAK":return"break;\n";case "CONTINUE":return"continue;\n"}throw"Unknown flow statement.";};
// Copyright 2012 Google Inc.  Apache License 2.0
Blockly.Java.math={};Blockly.Java.addReservedWords("math,random");Blockly.Java.math_number=function(a){a=parseFloat(a.getFieldValue("NUM"));return[a,0>a?Blockly.Java.ORDER_UNARY_SIGN:Blockly.Java.ORDER_ATOMIC]};
Blockly.Java.math_arithmetic=function(a){var b={ADD:[" + ",Blockly.Java.ORDER_ADDITIVE],MINUS:[" - ",Blockly.Java.ORDER_ADDITIVE],MULTIPLY:[" * ",Blockly.Java.ORDER_MULTIPLICATIVE],DIVIDE:[" / ",Blockly.Java.ORDER_MULTIPLICATIVE],POWER:[" ** ",Blockly.Java.ORDER_EXPONENTIATION]}[a.getFieldValue("OP")],c=b[0],b=b[1],d=Blockly.Java.valueToCode(a,"A",b)||"0";a=Blockly.Java.valueToCode(a,"B",b)||"0";var e="";" ** "===c?(Blockly.Java.addImport("java.lang.Math"),e="Math.pow("+d+", "+a+")"):e=d+c+a;return[e,
b]};
Blockly.Java.math_single=function(a){var b=a.getFieldValue("OP"),c;if("NEG"==b)return c=Blockly.Java.valueToCode(a,"NUM",Blockly.Java.ORDER_UNARY_SIGN)||"0",["-"+c,Blockly.Java.ORDER_UNARY_SIGN];Blockly.Java.addImport("java.lang.Math");a="SIN"==b||"COS"==b||"TAN"==b?Blockly.Java.valueToCode(a,"NUM",Blockly.Java.ORDER_MULTIPLICATIVE)||"0":Blockly.Java.valueToCode(a,"NUM",Blockly.Java.ORDER_NONE)||"0";switch(b){case "ABS":c="Math.abs("+a+")";break;case "ROOT":c="Math.sqrt("+a+")";break;case "LN":c="Math.log("+
a+")";break;case "LOG10":c="Math.log10("+a+")";break;case "EXP":c="Math.exp("+a+")";break;case "POW10":c="Math.pow(10,"+a+")";break;case "ROUND":c="Math.round("+a+")";break;case "ROUNDUP":c="Math.ceil("+a+")";break;case "ROUNDDOWN":c="Math.floor("+a+")";break;case "SIN":c="Math.sin("+a+" / 180.0 * Math.PI)";break;case "COS":c="Math.cos("+a+" / 180.0 * Math.PI)";break;case "TAN":c="Math.tan("+a+" / 180.0 * Math.PI)"}if(c)return[c,Blockly.Java.ORDER_FUNCTION_CALL];switch(b){case "ASIN":c="Math.asin("+
a+") / Math.PI * 180";break;case "ACOS":c="Math.acos("+a+") / Math.PI * 180";break;case "ATAN":c="Math.atan("+a+") / Math.PI * 180";break;default:throw"Unknown math operator: "+b;}return[c,Blockly.Java.ORDER_MULTIPLICATIVE]};
Blockly.Java.math_constant=function(a){var b={PI:["Math.PI",Blockly.Java.ORDER_MEMBER],E:["Math.E",Blockly.Java.ORDER_MEMBER],GOLDEN_RATIO:["(1 + Math.sqrt(5)) / 2",Blockly.Java.ORDER_MULTIPLICATIVE],SQRT2:["Math.sqrt(2)",Blockly.Java.ORDER_MEMBER],SQRT1_2:["Math.sqrt(1.0 / 2)",Blockly.Java.ORDER_MEMBER],INFINITY:["Double.POSITIVE_INFINITY",Blockly.Java.ORDER_ATOMIC]};a=a.getFieldValue("CONSTANT");"INFINITY"!=a&&Blockly.Java.addImport("java.lang.Math");return b[a]};
Blockly.Java.math_number_property=function(a){var b=Blockly.Java.valueToCode(a,"NUMBER_TO_CHECK",Blockly.Java.ORDER_MULTIPLICATIVE)||"0",c=a.getFieldValue("PROPERTY"),d;if("PRIME"==c)return Blockly.Java.addImport("java.lang.Math"),d=Blockly.Java.provideFunction_("math_isPrime",["public static boolean "+Blockly.Java.FUNCTION_NAME_PLACEHOLDER_+"(Object d) {","  // https://en.wikipedia.org/wiki/Primality_test#Naive_methods","  // If n is not a number but a string, try parsing it.","  double n;","  if (d instanceof Double) {",
"    n = (Double)d;","  } else if (d instanceof Integer) {","    n = (Integer)d;","  } else {","    return false;","  }","  if (n == 2 || n == 3) {","    return true;","  }","  // False if n is negative, is 1, or not whole, or if n is divisible by 2 or 3.","  if ((n <= 1) || (n % 1 != 0) || (n % 2 == 0) || (n % 3 == 0)) {","    return false;","  }","  // Check all the numbers of form 6k +/- 1, up to sqrt(n).","  for (int x = 6; x <= Math.sqrt(n) + 1; x += 6) {","    if (n % (x - 1) == 0 || n % (x + 1) == 0) {",
"      return false;","    }","  }","  return true;","}"])+"("+b+")",[d,Blockly.Java.ORDER_FUNCTION_CALL];switch(c){case "EVEN":d=b+" % 2 == 0";break;case "ODD":d=b+" % 2 == 1";break;case "WHOLE":d=b+" % 1 == 0";break;case "POSITIVE":d=b+" > 0";break;case "NEGATIVE":d=b+" < 0";break;case "DIVISIBLE_BY":a=Blockly.Java.valueToCode(a,"DIVISOR",Blockly.Java.ORDER_MULTIPLICATIVE);if(!a||"0"==a)return["False",Blockly.Java.ORDER_ATOMIC];d=b+" % "+a+" == 0"}return[d,Blockly.Java.ORDER_RELATIONAL]};
Blockly.Java.math_change=function(a){var b=Blockly.Java.valueToCode(a,"DELTA",Blockly.Java.ORDER_ADDITIVE)||"0";a=Blockly.Java.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE);return a+" = "+a+" + "+b+";\n"};Blockly.Java.math_round=Blockly.Java.math_single;Blockly.Java.math_trig=Blockly.Java.math_single;
Blockly.Java.math_on_list=function(a){var b=a.getFieldValue("OP"),c=Blockly.Java.valueToCode(a,"LIST",Blockly.Java.ORDER_NONE)||"[]";switch(b){case "SUM":a="sum("+c+")";break;case "MIN":a="min("+c+")";break;case "MAX":a="max("+c+")";break;case "AVERAGE":b=Blockly.Java.provideFunction_("math_mean",["public static double "+Blockly.Java.FUNCTION_NAME_PLACEHOLDER_+"(Object myList) {","// TODO: Implement this function","  return 0;","}"]);a=b+"("+c+")";break;case "MEDIAN":b=Blockly.Java.provideFunction_("math_median",
["public static double "+Blockly.Java.FUNCTION_NAME_PLACEHOLDER_+"(Object myList) {","// TODO: Implement this function","  return 0;","}"]);a=b+"("+c+")";break;case "MODE":b=Blockly.Java.provideFunction_("math_modes",["public static double "+Blockly.Java.FUNCTION_NAME_PLACEHOLDER_+"(Object myList) {","// TODO: Implement this function","  return 0;","}"]);a=b+"("+c+")";break;case "STD_DEV":Blockly.Java.addImport("java.lang.Math");b=Blockly.Java.provideFunction_("math_standard_deviation",["public static double "+
Blockly.Java.FUNCTION_NAME_PLACEHOLDER_+"(Object myList) {","// TODO: Implement this function","  return 0;","}"]);a=b+"("+c+")";break;case "RANDOM":Blockly.Java.addImport("java.lang.Math");b=Blockly.Java.provideFunction_("math_random_list",["public static Object "+Blockly.Java.FUNCTION_NAME_PLACEHOLDER_+"(List list) {","  int x = (int)(Math.floor(Math.random() * list.size()));","  return list.get(x);","}"]);c=Blockly.Java.valueToCode(a,"LIST",Blockly.Java.ORDER_NONE)||"[]";a=b+"("+c+")";break;default:throw"Unknown operator: "+
b;}return[a,Blockly.Java.ORDER_FUNCTION_CALL]};Blockly.Java.math_modulo=function(a){var b=Blockly.Java.valueToCode(a,"DIVIDEND",Blockly.Java.ORDER_MULTIPLICATIVE)||"0";a=Blockly.Java.valueToCode(a,"DIVISOR",Blockly.Java.ORDER_MULTIPLICATIVE)||"0";return[b+" % "+a,Blockly.Java.ORDER_MULTIPLICATIVE]};
Blockly.Java.math_format_as_decimal=function(a){var b=Blockly.Java.valueToCode(a,"NUM",Blockly.Java.ORDER_MULTIPLICATIVE)||"0";a=Blockly.Java.valueToCode(a,"PLACES",Blockly.Java.ORDER_MULTIPLICATIVE)||"0";return['new DecimalFormat("#.'+Array(++a).join("0")+'").format('+b+")",Blockly.Java.ORDER_MULTIPLICATIVE]};
Blockly.Java.math_constrain=function(a){Blockly.Java.addImport("java.lang.Math");var b=Blockly.Java.valueToCode(a,"VALUE",Blockly.Java.ORDER_NONE)||"0",c=Blockly.Java.valueToCode(a,"LOW",Blockly.Java.ORDER_NONE)||"0";a=Blockly.Java.valueToCode(a,"HIGH",Blockly.Java.ORDER_NONE)||"float('inf')";return["Math.min(Math.max("+b+", "+c+"), "+a+")",Blockly.Java.ORDER_FUNCTION_CALL]};
Blockly.Java.math_random_int=function(a){Blockly.Java.addImport("java.lang.Math");var b=Blockly.Java.valueToCode(a,"FROM",Blockly.Java.ORDER_NONE)||"0";a=Blockly.Java.valueToCode(a,"TO",Blockly.Java.ORDER_NONE)||"0";return[Blockly.Java.provideFunction_("math_random_int",["public static int "+Blockly.Java.FUNCTION_NAME_PLACEHOLDER_+"(int a, int b) {","  if (a > b) {","    // Swap a and b to ensure a is smaller.","    int c = a;","    a = b;","    b = c;","  }","  return (int)Math.floor(Math.random() * (b - a + 1) + a);",
"}"])+"("+b+", "+a+")",Blockly.Java.ORDER_FUNCTION_CALL]};Blockly.Java.math_random_float=function(a){Blockly.Java.addImport("java.lang.Math");return["Math.random()",Blockly.Java.ORDER_FUNCTION_CALL]};
// Copyright 2012 Google Inc.  Apache License 2.0
Blockly.Java.procedures={};
Blockly.Java.procedures_defreturn=function(a){var b=Blockly.Java.variableDB_.getName(a.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE),c=Blockly.Java.statementToCode(a,"STACK");Blockly.Java.STATEMENT_PREFIX&&(c=Blockly.Java.prefixLines(Blockly.Java.STATEMENT_PREFIX.replace(/%1/g,"'"+a.id+"'"),Blockly.Java.INDENT)+c);Blockly.Java.INFINITE_LOOP_TRAP&&(c=Blockly.Java.INFINITE_LOOP_TRAP.replace(/%1/g,'"'+a.id+'"')+c);var d=Blockly.Java.valueToCode(a,"RETURN",Blockly.Java.ORDER_NONE)||"";d?d="  return "+
d+";\n":c||(c=Blockly.Java.PASS);for(var e=[],g=0;g<a.arguments_.length;g++){var f=Blockly.Java.GetVariableType(a.arguments_[g].name);e[g]=f+" "+Blockly.Java.variableDB_.getName(a.arguments_[g].name,Blockly.Variables.NAME_TYPE)}c="public void "+b+"("+e.join(", ")+"){\n"+c+d+"}";c=Blockly.Java.scrub_(a,c);Blockly.Java.definitions_[b]=c;return null};Blockly.Java.procedures_defnoreturn=Blockly.Java.procedures_defreturn;
Blockly.Java.procedures_callreturn=function(a){for(var b=Blockly.Java.variableDB_.getName(a.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE),c=[],d=0;d<a.arguments_.length;d++)c[d]=Blockly.Java.valueToCode(a,"ARG"+d,Blockly.Java.ORDER_NONE)||"null";return["this."+b+"("+c.join(", ")+")",Blockly.Java.ORDER_FUNCTION_CALL]};
Blockly.Java.procedures_callnoreturn=function(a){for(var b=Blockly.Java.variableDB_.getName(a.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE),c=[],d=0;d<a.arguments_.length;d++)c[d]=Blockly.Java.valueToCode(a,"ARG"+d,Blockly.Java.ORDER_NONE)||"null";return"this."+b+"("+c.join(", ")+");\n"};
Blockly.Java.procedures_ifreturn=function(a){var b="if ("+(Blockly.Java.valueToCode(a,"CONDITION",Blockly.Java.ORDER_NONE)||"False")+"){\n";a.hasReturnValue_?(a=Blockly.Java.valueToCode(a,"VALUE",Blockly.Java.ORDER_NONE)||"None",b+="  return "+a+";\n}"):b+="  return;\n}";return b};
// Copyright 2012 Google Inc.  Apache License 2.0
Blockly.Java.texts={};Blockly.Java.text=function(a){return[Blockly.Java.quote_(a.getFieldValue("TEXT")),Blockly.Java.ORDER_ATOMIC]};Blockly.Java.text_join=function(a){var b;if(0==a.itemCount_)return['""',Blockly.Java.ORDER_ATOMIC];for(var c=b="",d=0;d<a.itemCount_;d++){var e=Blockly.Java.valueToCode(a,"ADD"+d,Blockly.Java.ORDER_NONE);e&&(b+=c+Blockly.Java.toStringCode(e),c=" + ")}return[b,Blockly.Java.ORDER_FUNCTION_CALL]};
Blockly.Java.text_append=function(a){var b=Blockly.Java.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE),c=Blockly.Java.valueToCode(a,"TEXT",Blockly.Java.ORDER_NONE)||'""';Blockly.Java.getValueType(a,"TEXT");return b+" = "+b+" + "+Blockly.Java.toStringCode(c)+";\n"};Blockly.Java.text_length=function(a){return[(Blockly.Java.valueToCode(a,"VALUE",Blockly.Java.ORDER_NONE)||'""')+".length()",Blockly.Java.ORDER_FUNCTION_CALL]};
Blockly.Java.text_isEmpty=function(a){return[(Blockly.Java.valueToCode(a,"VALUE",Blockly.Java.ORDER_NONE)||'""')+".isEmpty()",Blockly.Java.ORDER_LOGICAL_NOT]};Blockly.Java.text_indexOf=function(a){var b="FIRST"==a.getFieldValue("END")?"indexOf":"lastIndexOf",c=Blockly.Java.valueToCode(a,"FIND",Blockly.Java.ORDER_NONE)||'""';return[(Blockly.Java.valueToCode(a,"VALUE",Blockly.Java.ORDER_MEMBER)||'""')+"."+b+"("+c+") + 1",Blockly.Java.ORDER_MEMBER]};
Blockly.Java.text_charAt=function(a){var b=a.getFieldValue("WHERE")||"FROM_START",c=Blockly.Java.valueToCode(a,"AT",Blockly.Java.ORDER_UNARY_SIGN)||"1";a=Blockly.Java.valueToCode(a,"VALUE",Blockly.Java.ORDER_MEMBER)||'""';switch(b){case "FIRST":return[a+".substring(0,1)",Blockly.Java.ORDER_MEMBER];case "LAST":return[a+".substring("+a+".length()-1)",Blockly.Java.ORDER_MEMBER];case "FROM_START":return Blockly.isNumber(c)?(b=parseInt(c,10),c=b-1):(c="(int)"+c+" - 1",b="(int)"+c),[a+".substring("+c+","+
b+")",Blockly.Java.ORDER_MEMBER];case "FROM_END":return Blockly.isNumber(c)?(b=parseInt(c,10),c=a+".length()-"+b,b=a+".length()-"+(b-1)):(b=a+".length()-(int)"+c,c=a+".length()-((int)"+c+"-1)"),[a+".substring("+c+","+b+")",Blockly.Java.ORDER_MEMBER];case "RANDOM":return Blockly.Java.addImport("java.lang.Math"),c=Blockly.Java.provideFunction_("text_random_letter",["public static int "+Blockly.Java.FUNCTION_NAME_PLACEHOLDER_+"(String text) {","  int x = (int)(Math.random() * text.length());","  return text.charAt(x);",
"}"])+"("+a+")",[c,Blockly.Java.ORDER_FUNCTION_CALL]}throw"Unhandled option (text_charAt).";};
Blockly.Java.text_getSubstring=function(a){var b=Blockly.Java.valueToCode(a,"STRING",Blockly.Java.ORDER_MEMBER)||'""',c=a.getFieldValue("WHERE1"),d=a.getFieldValue("WHERE2"),e=Blockly.Java.valueToCode(a,"AT1",Blockly.Java.ORDER_ADDITIVE)||"1";a=Blockly.Java.valueToCode(a,"AT2",Blockly.Java.ORDER_ADDITIVE)||"1";"FIRST"==c||"FROM_START"==c&&"1"==e?e="0":"FROM_START"==c?e=Blockly.isNumber(e)?parseInt(e,10)-1:"((int)"+e+" - 1)":"FROM_END"==c&&(e=Blockly.isNumber(e)?b+".length() -"+parseInt(e,10):b+".length() - ((int)"+
e+")");"LAST"==d||"FROM_END"==d&&"1"==a?a="":"FROM_START"==d?a=Blockly.isNumber(a)?parseInt(a,10):"((int)"+a+")":"FROM_END"==d&&(Blockly.isNumber(a)?(a=parseInt(a,10)-1,a=0==a?"":b+".length() -"+a):a=b+".length() - ((int)"+a+"-1)");""!==a&&(a=", "+a);return[b+".substring("+e+a+")",Blockly.Java.ORDER_MEMBER]};
Blockly.Java.text_changeCase=function(a){var b={UPPERCASE:".toUpperCase()",LOWERCASE:".toLowerCase()",TITLECASE:"TITLECASE"}[a.getFieldValue("CASE")];a=Blockly.Java.valueToCode(a,"TEXT",Blockly.Java.ORDER_MEMBER)||'""';var c="";"TITLECASE"===b?(Blockly.Java.addImport("java.lang.StringBuilder"),c=Blockly.Java.provideFunction_("toTitleCase",["public static String "+Blockly.Java.FUNCTION_NAME_PLACEHOLDER_+"(String input) {","  StringBuilder titleCase = new StringBuilder();","  boolean nextTitleCase = true;",
"","  for (char c : input.toLowerCase().toCharArray()) {","    if (Character.isSpaceChar(c)) {","       nextTitleCase = true;","     } else if (nextTitleCase) {","       c = Character.toTitleCase(c);","       nextTitleCase = false;","     }","","     titleCase.append(c);","   }","","  return titleCase.toString();","}"])+"("+a+")"):c=a+b;return[c,Blockly.Java.ORDER_MEMBER]};
Blockly.Java.text_trim=function(a){var b={LEFT:'.replaceAll("^\\\\s+", "")',RIGHT:'.replaceAll("\\\\s+$", "")',BOTH:".trim()"}[a.getFieldValue("MODE")];return[(Blockly.Java.valueToCode(a,"TEXT",Blockly.Java.ORDER_MEMBER)||'""')+b,Blockly.Java.ORDER_MEMBER]};Blockly.Java.text_print=function(a){return"System.out.println("+(Blockly.Java.valueToCode(a,"TEXT",Blockly.Java.ORDER_NONE)||'""')+".toString());\n"};
Blockly.Java.text_prompt=function(a){var b=Blockly.Java.provideFunction_("text_prompt",["def "+Blockly.Java.FUNCTION_NAME_PLACEHOLDER_+"(msg):","  try:","    return raw_input(msg)","  except NameError:","    return input(msg)"]),c=Blockly.Java.quote_(a.getFieldValue("TEXT")),b=b+"("+c+")";"NUMBER"==a.getFieldValue("TYPE")&&(b="float("+b+")");return[b,Blockly.Java.ORDER_FUNCTION_CALL]};
Blockly.Java.text_prompt_ext=function(a){var b=Blockly.Java.provideFunction_("text_prompt",["def "+Blockly.Java.FUNCTION_NAME_PLACEHOLDER_+"(msg):","  try:","    return raw_input(msg)","  except NameError:","    return input(msg)"]),c=Blockly.Java.valueToCode(a,"TEXT",Blockly.Java.ORDER_NONE)||'""',b=b+"("+c+")";"NUMBER"==a.getFieldValue("TYPE")&&(b="float("+b+")");return[b,Blockly.Java.ORDER_FUNCTION_CALL]};Blockly.Java.text_comment=function(a){return"/*\n"+(a.getFieldValue("COMMENT")||"")+"\n*/\n"};
Blockly.Java.text_code_insert=function(a){var b="";"Java"==(a.getFieldValue("TYPE")||"")&&(a=a.getFieldValue("CODE")||"",b="//Arbitrary Java code insert block",b=""!=a?b+"\n"+(a+"\n"):b+" is empty\n");return b};
// Copyright 2012 Google Inc.  Apache License 2.0
Blockly.Java.variables={};Blockly.Java.variables_get=function(a){return[Blockly.Java.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE),Blockly.Java.ORDER_ATOMIC]};
Blockly.Java.variables_set=function(a){var b=Blockly.Java.valueToCode(a,"VALUE",Blockly.Java.ORDER_NONE)||"0",c=Blockly.Java.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE),d=Blockly.Java.getValueType(a,"VALUE");a=Blockly.Java.GetBlocklyType(a.getFieldValue("VAR"));for(var e=!1,g=0;g<d.length;g++)if(d[g]===a){e=!0;break}"String"!==a||e||(b=Blockly.Java.toStringCode(b));return c+" = "+b+";\n"};
Blockly.Java.hash_variables_get=function(a){var b="getString",c=a.getParent();if(c){var d=c.getVars;if(d)for(c=d.call(c),d=0;d<c.length;d++){var e=c[d];e&&(e=Blockly.Java.GetVariableType(e),"Array"===e?b="get":"Object"===e&&(b="get"))}}return[Blockly.Java.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE)+"."+b+"("+Blockly.Java.quote_(a.getFieldValue("HASHKEY"))+")",Blockly.Java.ORDER_ATOMIC]};
Blockly.Java.hash_parmvariables_get=function(a){var b="getString",c=a.getParent();if(c){var d=c.getVars;if(d)for(c=d.call(c),d=0;d<c.length;d++){var e=c[d];e&&(e=Blockly.Java.GetVariableType(e),"Array"===e?b="get":"Object"===e&&(b="get"))}}return[(Blockly.Java.valueToCode(a,"VAR",Blockly.Java.ORDER_NONE)||"0")+"."+b+"("+Blockly.Java.quote_(a.getFieldValue("HASHKEY"))+")",Blockly.Java.ORDER_ATOMIC]};
Blockly.Java.hash_variables_set=function(a){var b=Blockly.Java.valueToCode(a,"VALUE",Blockly.Java.ORDER_NONE)||"0";return Blockly.Java.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE)+"{"+a.getFieldValue("HASHKEY")+"} = "+b+";\n"};