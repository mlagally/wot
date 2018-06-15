// Author: Michael.Lagally@oracle.com
// Created: 19.3.2018
// Last modified: 7.5.2018

"use strict";

var fs = require("fs");
var path = require("path");
var baseDir = ".";

//console.log(`td-dm started`);

var filename=process.argv[2];

var verbose=process.argv[3] ==="-v";

var content=fs.readFileSync('./'+filename);
var path=filename.substring(0, filename.lastIndexOf("/"));
// get package directory name
var pkg=path.substring(path.lastIndexOf("/")+1);
// strip path and extension
var plainfn=path.substring(filename.lastIndexOf("/")+1, filename.lastIndexOf("."));

var td=JSON.parse(content);
if (verbose) console.log(td);

if (verbose) console.log("-----");

var dm={};
dm.name=td.name;
dm.description=td.base;
dm.urn="urn:com:"+pkg+":"+td.name;

var now=new Date(Date.now());
dm.createdAsString=now.toISOString();
dm.created=now.valueOf();
dm.lastModifiedAsString=now.toISOString();
dm.lastModified=now.valueOf();
dm.userLastModified="auto-generated by td2dm converter";
dm.attributes=[];
dm.actions=[];
//dm.formats=[];
//dm.links=[];

for(var exKey in td.interaction) {
    if (verbose) console.log("key:"+exKey+", value:"+td.interaction[exKey]);
    var iac=td.interaction[exKey];
    if (verbose) console.log(iac);
    if (verbose) console.log(iac["@type"][0]); // property, action or event
    var iacType=iac["@type"][0]

    if (iacType === "Property") {
      if (verbose) console.log("===== Prop ========");
      var prop={};
      prop.name=iac.name;
      prop.description=iac.form[0].href;
      prop.type=iac.schema.type.toUpperCase();
      if (iac.schema.minimum != iac.schema.maximum) {
        prop.range=iac.schema.minimum+","+iac.schema.maximum;
      }
      prop.writable=iac.writable;
      dm.attributes.push(prop);
      if (verbose) console.log(prop);

    } else if (iacType === "Action" ) {
      var act={};
      act.name=iac.name;
      act.description=iac.form[0].href;
      dm.actions.push(act);
      if (verbose) console.log(act);

    } else if (iacType === "Event" ) {
      var evt={};
      evt.name=iac.name;
      evt.description=iac.form[0].href;
      if (verbose) console.log(act);
    } else {
      process.exit(-1);
    }

}
if (verbose) console.log("-----");

console.log(JSON.stringify(dm, null, "\t"));