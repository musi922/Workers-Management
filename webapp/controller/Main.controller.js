sap.ui.define([
    "./BaseController",
    "sap/m/MessageBox",
    "sap/ui/model/odata/v4/ODataModel"
], function (BaseController, MessageBox, ODataModel) {
    "use strict";

    return BaseController.extend("workersWebsite.controller.Main", {
        onInit: function () {
            const oModel = new ODataModel({
                serviceUrl: "http://localhost:4000/odata/",
                synchronizationMode: "None",
               
            });
            
            this.getView().setModel(oModel);
                       
        }
    });
});