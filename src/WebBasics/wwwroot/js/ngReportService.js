(function () {
    'use strict';
    var myModule = angular.module('reportModule', ['ngRoute']);

    myModule.service('reportService', function ($http) {
        this.criteriaFields = [];
        this.resultSet = {};
        this.GroupBy = "default";
        this.OrderBy = "default";
        this.selectedId = "";
        var me = this;   //use me to hold a reference to the service inside callbacks as "this" points to different objects in different contexts

        //-- -------------------------------------------- --

        this.init = function (criteriaFields) {
            this.criteriaFields = criteriaFields;
        };
        //-- -------------------------------------------- --

        this.Criteria = function () {
            var objCriteria = { displayFields: [], valueFilters: [], rangeFilters: [], groupBy: [], orderBy: [] };

            objCriteria.groupBy.push(this.GroupBy);
            objCriteria.orderBy.push(this.OrderBy);

            $.each(this.criteriaFields, function (i, field) {
                if (field.isDisplayChecked) {
                    objCriteria.displayFields.push(field.field);
                }
            });
            $.each(this.criteriaFields, function (i, field) {
                if (field.isValueFilter && field.isFilterChecked) {
                    var filter = { field: field.field, value: field.filterControlValue };
                    objCriteria.valueFilters.push(filter);
                }
            });
            $.each(this.criteriaFields, function (i, field) {
                if (field.isRangeFilter && field.isFilterChecked) {
                    var filter = { field: field.field, fromValue: field.filterControlFromValue, toValue: field.filterControlToValue };
                    objCriteria.rangeFilters.push(filter);
                }
            });

            return objCriteria;
        };
        //-- -------------------------------------------- --

        this.clickValueFilter = function (field) {

            if (field.isFilterChecked) {

                field.isDisplayChecked = false;
                field.isDisplayDisabled = true;
                field.isGroupDisabled = true;
                field.isOrderDisabled = true;
            } else {
                field.isDisplayDisabled = false;
                field.isGroupDisabled = false;
                field.isOrderDisabled = false;
                field.filterControlValue = "";
            }
        };
        //-- -------------------------------------------- --

        this.clickGroupBy = function (field) {

            this.resetGroupBy();
            this.GroupBy = field.field;                             //in case function is called from other codes
            field.isGroupChecked = true;

            field.isDisplayChecked = false;
            field.isDisplayDisabled = true;

            field.isFilterChecked = false;
            field.isFilterDisabled = true;

            if (field.isOrderChecked) {                             //set order to default
                this.clickOrderBy(this.criteriaFields[0]);
            }
            field.isOrderChecked = false;
            field.isOrderDisabled = true;
        };
        //-- -------------------------------------------- --

        this.clickOrderBy = function (field) {
            this.OrderBy = field.field;                             //in case function is called from other codes
            field.isOrderChecked = true;
            field.isDisplayChecked = true;
        };
        //-- -------------------------------------------- --

        this.resetGroupBy = function () {
            $.each(this.criteriaFields, function (i, field) {
                if (field.isGroupChecked) {
                    field.isGroupChecked = false;
                    field.isFilterDisabled = false;
                    field.isDisplayDisabled = false;
                    field.isOrderDisabled = false;
                }
            });
        };
        //-- -------------------------------------------- --

        this.preview = function (callerResultset) {
            var req = {
                method: 'POST',
                url: apiPath + "getReports",
                headers: { 'Content-Type': 'application/json' },
                data: this.Criteria()
            }

            $http(req).then(function successCallback(response) {
                    me.resultSet = response.data; // response.data["Data"];
                callerResultset(me.resultSet);
                ShowInfo("ngService.success= ", me.resultSet);
            }
            , function errorCallback(response) {
                httpErrorHandler(response);
            }
            );

            // this.resultSet = [{ id: "1", name: "Emp1" }, { id: "2", name: "Emp22" }, { id: "3", name: "Emp333" }];
            ShowInfo("ngService.return= ", me.resultSet);
            return me.resultSet;
        };
        //-- -------------------------------------------- --
        this.select = function (id) {
            this.selectedId = id;
            return id;
        };
        //-- -------------------------------------------- --

    });

})();


