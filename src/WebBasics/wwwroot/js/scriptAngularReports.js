(function () {
    'use strict';
    var app = angular.module('myApp', []);
    /*-- -------------------------------------------- --*/

    app.controller('myController', function () {

        this.CriteriaFields = [];
        this.GroupBy = "default";
        this.OrderBy = "default";
        /*-- -------------------------------------------- --*/

        this.Criteria = function () {
            var objCriteria = { displayFields: [], valueFilters: [], rangeFilters: [], groupByFields: [], orderByFields: [] };

            objCriteria.groupByFields.push(this.GroupBy);
            objCriteria.orderByFields.push(this.OrderBy);

            $.each(this.CriteriaFields, function (i, field) {
                if (field.isDisplayChecked) {
                    objCriteria.displayFields.push(field.field);
                }
            });
            $.each(this.CriteriaFields, function (i, field) {
                if (field.isValueFilter && field.isFilterChecked) {
                    var filter = { filter: field.field, value: field.filterControlValue };
                    objCriteria.valueFilters.push(filter);
                }
            });
            $.each(this.CriteriaFields, function (i, field) {
                if (field.isRangeFilter && field.isFilterChecked) {
                    var filter = { filter: field.field, fromValue: field.filterControlFromValue, toValue: field.filterControlToValue };
                    objCriteria.rangeFilters.push(filter);
                }
            });

            return objCriteria;
        };
        /*-- -------------------------------------------- --*/

        this.init = function () {
            var field;
            field = new CriteriaField("default", "default");
            field.isGroupChecked = true;
            field.isOrderChecked = true;
            this.CriteriaFields.push(field);

            field = new CriteriaField("id", "Id");
            field.isValueFilter = false;
            this.CriteriaFields.push(field);

            field = new CriteriaField("name", "Name");
            field.isRangeFilter = false;
            this.CriteriaFields.push(field);
        };
        /*-- -------------------------------------------- --*/

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
        /*-- -------------------------------------------- --*/

        this.clickGroupBy = function (field) {

            this.resetGroupBy();
            this.GroupBy = field.field;                             //in case function is called from other codes
            field.isGroupChecked = true;

            field.isDisplayChecked = false;
            field.isDisplayDisabled = true;

            field.isFilterChecked = false;
            field.isFilterDisabled = true;

            if (field.isOrderChecked) {                             //set order to default
                this.clickOrderBy(this.CriteriaFields[0]);
            }
            field.isOrderChecked = false;
            field.isOrderDisabled = true;
        };
        /*-- -------------------------------------------- --*/

        this.clickOrderBy = function (field) {
            this.OrderBy = field.field;                             //in case function is called from other codes
            field.isOrderChecked = true;
            field.isDisplayChecked = true;
        };
        /*-- -------------------------------------------- --*/

        this.resetGroupBy = function () {
            $.each(this.CriteriaFields, function (i, field) {
                if (field.isGroupChecked) {
                    field.isGroupChecked = false;
                    field.isFilterDisabled = false;
                    field.isDisplayDisabled = false;
                    field.isOrderDisabled = false;
                }
            });
        };
        /*-- -------------------------------------------- --*/

        this.not = function (boolValue) {
            return !boolValue;
        };
        /*-- -------------------------------------------- --*/

        this.init();
    });
})();

/*-- -------------------------------------------- --*/

var CriteriaField = function (field, caption) {
    this.field = field;
    this.caption = caption;

    this.isDisplay = true;
    this.isValueFilter = true;
    this.isRangeFilter = true;
    this.isGroupBy = true;
    this.isOrderBy = true;

    this.isDisplayChecked = false;
    this.isDisplayDisabled = false;

    this.isFilterChecked = false;
    this.isFilterDisabled = false;

    this.filterControlType = "text";

    this.filterControlDisabled = false;
    this.filterControlValue = "";

    this.filterControlFromDisabled = false;
    this.filterControlFromValue = "";

    this.filterControlToDisabled = false;
    this.filterControlToValue = "";

    this.isGroupChecked = false;            //to keep track of control behaviuor
    this.isGroupDisabled = false;

    this.isOrderChecked = false;            //to keep track of control behaviuor
    this.isOrderDisabled = false;
};

