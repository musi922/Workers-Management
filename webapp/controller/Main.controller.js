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
                synchronizationMode: "None"
            });
            
            this.getView().setModel(oModel);
        },
        
        onCreateProductPress: function () {
            let oDialog = this.byId("createProduct");
            oDialog.open();
        },
        
        onCloseProductDialog: function () {
            this.byId("createProductDialog").close();
        },

        onCreateProduct: async function () {
            try {
                const oModel = this.getView().getModel();
                const oList = oModel.bindList("/Workers");
                
                const newProduct = {
                    ID: this.byId("productIdInput").getValue(),
                    firstName: this.byId("productNameInput").getValue(),
                    lastName: this.byId("productDescriptionInput").getValue(),
                    email: this.byId("productPriceInput").getValue(),
                    position: this.byId("productPositionInput").getValue(),
                    salary: this.byId("Salary").getValue()
                };

                const oContext = oList.create(newProduct);
                
                await oContext.created();
                
                MessageBox.success("Worker created successfully");
                this.byId("createProduct").close();
            } catch (error) {
                MessageBox.error("Error creating Worker: " + error.message);
                console.error(error);
            }
        },

        onDeletePress: async function (oEvent) {
            try {
                const oContext = oEvent.getSource().getBindingContext();
                
                const userConfirmed = await new Promise((resolve) => {
                    MessageBox.confirm("Are you sure you want to delete this Worker?", {
                        actions: [MessageBox.Action.YES, MessageBox.Action.NO],
                        onClose: (sAction) => {
                            resolve(sAction === MessageBox.Action.YES);
                        }
                    });
                });

                if (userConfirmed) {
                    await oContext.delete();
                    MessageBox.success("Worker deleted successfully");
                }
            } catch (error) {
                MessageBox.error("Error deleting Worker: " + error.message);
                console.error(error);
            }
        }
    });
});