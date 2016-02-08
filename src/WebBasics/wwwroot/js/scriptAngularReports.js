(function () {
    'use strict';
    var app = angular.module('myApp', []);
    /*-- -------------------------------------------- --*/

    app.controller('myController', function () {

        this.criteriaFields = [];
        this.GroupBy = "default";
        this.OrderBy = "default";
        /*-- -------------------------------------------- --*/

        this.Criteria = function () {
            var objCriteria = { displayFields: [], valueFilters: [], rangeFilters: [], groupByFields: [], orderByFields: [] };

            objCriteria.groupByFields.push(this.GroupBy);
            objCriteria.orderByFields.push(this.OrderBy);
            $.each(this.criteriaFields, function (i, field) {
                if (field.ckDisplayChecked) {
                    objCriteria.displayFields.push(field.field);
                }
            });
            $.each(this.criteriaFields, function (i, field) {
                if (field.isValueFilter && field.ckFilterChecked) {
                    var filter = { filter: field.field, value: field.filterControlValue };
                    objCriteria.valueFilters.push(filter);
                }
            });
            $.each(this.criteriaFields, function (i, field) {
                if (field.isRangeFilter && field.ckFilterChecked) {
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
            field.rdGroupChecked = true;
            field.rdOrderChecked = true;
            this.criteriaFields.push(field);

            field = new CriteriaField("id", "Id");
            field.isValueFilter = false;
            this.criteriaFields.push(field);

            field = new CriteriaField("name", "Name");
            field.isRangeFilter = false;
            this.criteriaFields.push(field);
        };
        /*-- -------------------------------------------- --*/

        this.clickValueFilter = function (field) {

            if (field.ckFilterChecked) {

                field.ckDisplayChecked = false;
                field.ckDisplayDisabled = true;
                field.rdGroupDisabled = true;
            } else {
                field.ckDisplayDisabled = false;
                field.rdGroupDisabled = false;
                field.filterControlValue = "";
            }
        };
        /*-- -------------------------------------------- --*/

        this.clickGroupBy = function (field) {

            this.resetGroupBy();
            this.GroupBy = field.field;                             //in case function is called from other codes
            field.rdGroupChecked = true;

            field.ckDisplayChecked = false;
            field.ckDisplayDisabled = true;

            field.ckFilterChecked = false;
            field.ckFilterDisabled = true;

            if (field.rdOrderChecked) {                             //set order to default
                this.clickOrderBy(this.criteriaFields[0]);
            }
            field.rdOrderChecked = false;
            field.rdOrderDisabled = true;
        };
        /*-- -------------------------------------------- --*/
        this.clickOrderBy = function (field) {
            this.OrderBy = field.field;                             //in case function is called from other codes
            field.rdOrderChecked = true;
            field.ckDisplayChecked = true;
        };
        /*-- -------------------------------------------- --*/
        this.resetGroupBy = function () {
            $.each(this.criteriaFields, function (i, field) {
                if (field.rdGroupChecked) {
                    field.rdGroupChecked = false;
                    field.ckFilterDisabled = false;
                    field.ckDisplayDisabled = false;
                    field.rdOrderDisabled = false;
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

    this.ckDisplayChecked = false;
    this.ckDisplayDisabled = false;

    this.ckFilterChecked = false;
    this.ckFilterDisabled = false;

    this.filterControlType = "text";

    this.filterControlDisabled = false;
    this.filterControlValue = "";

    this.filterControlFromDisabled = false;
    this.filterControlFromValue = "";

    this.filterControlToDisabled = false;
    this.filterControlToValue = "";

    this.rdGroupChecked = false;            //to keep track of control behaviuor
    this.rdGroupDisabled = false;

    this.rdOrderChecked = false;            //to keep track of control behaviuor
    this.rdOrderDisabled = false;
};

