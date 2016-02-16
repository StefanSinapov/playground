+ function ($) {
    'use strict';

    // UPLOAD CLASS DEFINITION
    // ======================

    var dropZone = document.getElementById('drop-zone');
    var textarea = document.getElementById('xml-text');
    var file = document.getElementById('upload-files');
    var btnGenerate = document.getElementById('btn-generate');
    var xmlData = 0,
        schemaData = 0,
        xmlFileName,
        schemaFileName;

    function loadXmlDoc(filename) {
        if (window.ActiveXObject) {
            window.xhttp = new ActiveXObject("Msxml2.XMLHTTP");
        }
        else {
            window.xhttp = new XMLHttpRequest();
        }
        xhttp.open("GET", filename, false);
        try { xhttp.responseType = "msxml-document" } catch (err) { } // Helping IE11
        xhttp.send("");
        return xhttp.responseXML;
    }

    var validateXml = function () {
        schemaData = loadXmlDoc('Schemas/xmlTech2015_16_SI_fn61714_winter.xsd');
        schemaFileName = 'xmlTech2015_16_SI_fn61714_winter.xsd';
        var successLbl = ".bg-success";
        var errorLbl = ".bg-danger";
        if (!xmlData) { $(errorLbl).text("Set XML file"); return false; }
        if (!schemaData) { $(errorLbl).text("Set Schema file"); return false; }

        schemaData = schemaData.xml;

        var Module = {
            xml: xmlData,
            schema: schemaData,
            arguments: ["--noout", "--schema", schemaFileName, xmlFileName]
        };

        var result = validateXML(Module);
        if (result.search("xml validates") > 0) {
            $(successLbl).text('Document validates against the schema!');
            return true;
        } else {
            $(errorLbl).text('Document does not validate. \n ' + result);
            return false;

        }
    }

    var generate = function () {

        if (validateXml()) {
            var xsl = loadXmlDoc('Transformations/xmlTech2015_16_SI_fn61714_winter.xslt');

            // code for IE
            var resultDocument;

            if (window.ActiveXObject || window.xhttp.responseType === "msxml-document") {
                var xmlDoc = new ActiveXObject("Msxml2.DOMDocument.3.0");
                xmlDoc.async = "false";
                xmlDoc.loadXML(xmlData);

                var xlsDoc = new ActiveXObject("Msxml2.DOMDocument.3.0");
                xlsDoc.async = "false";
                xlsDoc.loadXML(xsl.xml);

                resultDocument = xmlDoc.transformNode(xlsDoc);
                $("#example").append(resultDocument);
            } else if (document.implementation && document.implementation.createDocument) {
                var oParser = new DOMParser();
                var xmlElement = oParser.parseFromString(xmlData, "text/xml");
                var xsltProcessor = new XSLTProcessor();
                xsltProcessor.importStylesheet(xsl);
                resultDocument = xsltProcessor.transformToFragment(xmlElement, document);
                $("#example").append(resultDocument);
            }
        }

    }

    file.addEventListener('change', function (e) {

        var files = e.target.files;
        var filestring = '';

        for (var i = 0; i < files.length; i++) {
            var f = files[i];
            var filereader = new FileReader();
            filestring = "<strong>" + escape(f.name) +
                        "</strong> (" + (f.type || "n/a") + "): " + f.size + " bytes - " +
                        "<strong>last modified:</strong> " + (f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : "n/a");
            filereader.readAsText(f);
            filereader.onload = (function (theFile) {
                return function (e) {
                    xmlData = e.target.result;
                    xmlFileName = f.name;
                };
            })(f);
        }

        $("#drop-zone").html(filestring).css("background", "#B9B9F4").css("border", "2px solid #2222D3").css('color', '#000000');

        textarea.disabled = true;
        btnGenerate.disabled = false;//!(schemaData.length > 0 && xmlData.length > 0 && transformData.length > 0);
    });

    textarea.addEventListener('change', function (e) {
        xmlData = e.target.innerText;
        xmlFileName = 'input.xml';
        btnGenerate.disabled = (xmlData.length <= 0);
    });

    btnGenerate.addEventListener('click', function (e) {
        generate();
    });

    dropZone.ondrop = function (e) {
        e.preventDefault();

        this.className = 'upload-drop-zone';
        file.disabled = true;
        textarea.disabled = true;


        var fileObject = e.dataTransfer,
			files = fileObject.files, filestring;

        var outputdiv = "#" + $(this).attr("id");

        for (var i = 0; i < files.length; i++) {
            var f = files[i];
            var filereader = new FileReader();

            filestring = "<strong>" + escape(f.name) +
							"</strong> (" + (f.type || "n/a") + "): " + f.size + " bytes - " +
							"<strong>last modified:</strong> " + (f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : "n/a");
            filereader.readAsText(f);
            filereader.onload = (function (theFile) {
                return function (e) {
                    xmlData = e.target.result;
                    xmlFileName = f.name;
                };
            })(f);
        }

        $(outputdiv).html(filestring).css("background", "#B9B9F4").css("border", "2px solid #2222D3").css('color', '#000000');
        // TODO: change name 

        btnGenerate.disabled = false;
    }

    dropZone.ondragover = function () {
        this.className = 'upload-drop-zone drop';
        return false;
    }

    dropZone.ondragleave = function () {
        this.className = 'upload-drop-zone';
        return false;
    }

}(jQuery);