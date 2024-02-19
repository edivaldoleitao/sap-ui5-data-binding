sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("sap.databinding2.project3.controller.View1", {
            onInit: function () {
                var obj = {
                    name: "Ronaldo",
                    last_name: "Santos",
                    age: 35,
                    address: {
                    edit: false,
                    street: {
                    name: "Rua Teste",
                    number: 13,
                    },
                    city: "Itatiba",
                    state: "SP"
                    },
                    skills: [{name:"ui5"}, {name:"hana"},{name:"abap"},{name:"java"},{name:"cpi"}],
                    fan_of: [
                    {
                    name: "Pele",
                    job: "Former soccer player"
                    },
                    {
                    name: "Michael Jordan",
                    job: "Basketball player"
                    },
                    {
                    name: "Renato Russo",
                    job: "Singer"
                    },
                    {
                    name: "Axl Rose",
                    job: "Singer"
                    }
                    ],
                    social: [
                    {
                    name: "Twitter",
                    value: "http://twitter.com/"
                    },
                    {
                    name: "Linkedin",
                    value: "http://www.linkedin.com/"
                    }
                    ]
                    };

                    var model = new sap.ui.model.json.JSONModel(obj);
                    this.getView().setModel(model,"perfil");
            }
        });
    });
