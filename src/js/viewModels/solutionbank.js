/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your dashboard ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout','ojs/ojaccordion', 'ojs/ojradioset', 'ojs/ojlabel'],
  function (oj, ko, $) {
    var self = this;

    // CATEGORIES VARIABLE
    self.catgoryList = ko.observableArray([]);

    // ASSETTYPE VARIABLE
    self.assetTypeList = ko.observableArray([]);

    
    function DashboardViewModel() {

      // GET ALL CATEGORIES
      getAllCategories = function () {
        $.getJSON('http://innovate.us.oracle.com/tab/resources/view/categories/all', function (data) {
          self.catgoryList(data.categories);
            
          console.log("--- " + ko.toJSON(self.catgoryList));
        });
      }

      getAllAssetTypes = function () {
        $.getJSON('http://innovate.us.oracle.com/tab/resources/view/assettypes', function (data) {
          self.assetTypeList(data.assetTypes);
          console.log("--- " + self.assetTypeList.length);

          for (var i = 0; i < assetTypeList.length; i++) {

          }

        });
      }
      
      myFunction=function(data) {
            var id=data.name;
            var x = document.getElementById(id);
            if (x.className.indexOf("w3-show") == -1) {
                x.className += " w3-show";
            } else { 
                x.className = x.className.replace(" w3-show", "");
            }
        }

      getAllCategories();
      getAllAssetTypes();

    }
    return new DashboardViewModel();
  }
);