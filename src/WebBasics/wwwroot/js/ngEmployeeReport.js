
    var app = angular.module('appReportEmployee', ['ngRoute', 'reportModule']);

    app.controller('controllerReportEmployee', ['reportService', function (reportService) {
        var me = this;
        this.CriteriaFields = [];
        this.resultSet = [];
        this.selectedId = "";

        this.init = function () {
            
            var field;
            field = CriteriaField( "default", "default");
            field.isGroupChecked = true;
            field.isOrderChecked = true;
            this.CriteriaFields.push(field);

            field = CriteriaField("id", "Id");
            field.isValueFilter = false;
            this.CriteriaFields.push(field);

            field = CriteriaField("name", "Name");
            field.isRangeFilter = false;
            this.CriteriaFields.push(field);

            reportService.init(this.CriteriaFields);
        };

        //-- -------------------------------------------- --

        this.Criteria = function () {
            return reportService.Criteria();
        };
        //-- -------------------------------------------- --

        this.clickValueFilter = function (field) {
            reportService.clickValueFilter(field);
        };
        //-- -------------------------------------------- --

        this.clickGroupBy = function (field) {
            reportService.clickGroupBy(field);
        };
        //-- -------------------------------------------- --

        this.clickOrderBy = function (field) {
            reportService.clickOrderBy(field);
        };
        //-- -------------------------------------------- --

        this.resetGroupBy = function () {
            reportService.resetGroupBy();
        };
        //-- -------------------------------------------- --
        this.preview = function () {
            reportService.preview(me.populateResultset);
        };
        //-- -------------------------------------------- --
        this.select = function (id) {
            this.selectedId = reportService.select(id);
        };
        //-- -------------------------------------------- --

        this.not = function (boolValue) {
            return !boolValue;
        };
        //-- -------------------------------------------- --

        this.populateResultset = function (obj) {
            me.resultSet = obj['Data'];
        };
        //-- -------------------------------------------- --

      this.init();

    } ] );
