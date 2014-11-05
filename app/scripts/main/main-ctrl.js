'use strict';

angular.module('zwebapp')
  .controller('MainCtrl', [ '$scope','$http',  function ($scope, $http) {
  	$scope.taxTypes = taxTypes;
  	$scope.countries = countries;

    $scope.print = function(){
      var url = "";
      $http.post(url, $scope.invoice).success(function(data) {
        
      }).error(function(result) {
        
      });
    }

    $scope.removeItem = function(index){
      $scope.invoice.trade.items.splice(index, 1);
    }

    $scope.addItem = function(){
      var newItem = {
        "lineDocument" : null,
        "agreement" : null,
        "delivery" : {
          "shipTo" : null,
          "ultimateShipTo" : null,
          "actualDelivery" : null,
          "billed" : {
            "value" : 20.0000,
            "unitCode" : "C62",
            "unit" : "UNIT"
          },
          "chargeFree" : null,
          "packageQuantity" : null,
          "despatchAdvice" : null,
          "receivingAdvice" : null,
          "deliveryNote" : null
        },
        "settlement" : {
          "tradeTax" : [ ],
          "billingPeriod" : null,
          "bookingReference" : null,
          "monetarySummation" : {
            "lineTotal" : {
              "value" : 198.00,
              "currency" : "EUR"
            },
            "totalAllowanceCharge" : null
          }
        },
        "product" : {
          "globalId" : {
            "value" : "4012345001235",
            "schemeId" : "0160"
          },
          "sellerAssignedId" : "TB100A4",
          "buyerAssignedId" : null,
          "name" : "GTIN: 4012345001235\n               Unsere Art.-Nr.: TB100A4\n               Trennblätter A4",
          "description" : null,
          "characteristics" : [ ],
          "classifications" : [ ],
          "origins" : [ ],
          "containedProducts" : [ ]
        }
      };

      $scope.invoice.trade.items.push(newItem);
    }

  	$scope.invoice = {
  "context" : {
    "test" : true,
    "businessProcess" : null,
    "guideline" : {
      "namespace" : "urn:ferd:CrossIndustryDocument:invoice:",
      "version" : "V1P0",
      "conformanceLevel" : "BASIC"
    }
  },
  "header" : {
    "invoiceNumber" : "471102",
    "name" : "RECHNUNG",
    "code" : "_380",
    "issued" : 1362438000000,
    "copy" : false,
    "languages" : [ ],
    "notes" : [ {
      "contentCode" : null,
      "contents" : [ "Rechnung gemäß Bestellung vom 01.03.2013." ],
      "subjectCode" : null
    }, {
      "contentCode" : null,
      "contents" : [ "Lieferant GmbH\n            Lieferantenstraße 20\n            80333 München\n            Deutschland\n            Geschäftsführer: Hans Muster\n            Handelsregisternummer: H A 123\n         " ],
      "subjectCode" : null
    }, {
      "contentCode" : null,
      "contents" : [ "Unsere GLN: 4000001123452\n            Ihre GLN: 4000001987658\n            Ihre Kundennummer: GE2020211\n\n\n            Zahlbar innerhalb 30 Tagen netto bis 04.04.2013, 3% Skonto innerhalb 10 Tagen bis 15.03.2013." ],
      "subjectCode" : null
    } ],
    "contractualDueDate" : null
  },
  "trade" : {
    "agreement" : {
      "buyerReference" : null,
      "seller" : {
        "id" : null,
        "globalId" : [ ],
        "name" : "Lieferant GmbH",
        "contact" : null,
        "address" : {
          "postcode" : "80333",
          "lineOne" : "Lieferantenstraße 20",
          "lineTwo" : null,
          "city" : "München",
          "country" : "DE"
        },
        "taxRegistrations" : [ {
          "type" : "FC",
          "taxNumber" : "201/113/40209"
        }, {
          "type" : "VA",
          "taxNumber" : "DE123456789"
        } ]
      },
      "buyer" : {
        "id" : null,
        "globalId" : [ ],
        "name" : "Kunden AG Mitte",
        "contact" : null,
        "address" : {
          "postcode" : "69876",
          "lineOne" : "Hans Muster",
          "lineTwo" : "Kundenstraße 15",
          "city" : "Frankfurt",
          "country" : "DE"
        },
        "taxRegistrations" : [ ]
      },
      "productEndUser" : null,
      "deliveryTerms" : null,
      "buyerOrder" : null,
      "contract" : null,
      "additional" : [ ],
      "customerOrder" : null
    },
    "delivery" : {
      "shipTo" : null,
      "ultimateShipTo" : null,
      "actualDelivery" : 1362438000000,
      "relatedConsignment" : null,
      "shipFrom" : null,
      "despatchAdvice" : null,
      "deliveryNote" : null
    },
    "settlement" : {
      "paymentReference" : "2013-471102",
      "currency" : "EUR",
      "invoicee" : null,
      "payee" : null,
      "paymentMeans" : [ {
        "code" : null,
        "informations" : [ ],
        "payerAccount" : null,
        "payeeAccount" : {
          "iban" : "DE08700901001234567890",
          "proprietaryID" : null
        },
        "payerInstitution" : null,
        "payeeInstitution" : {
          "bic" : "GENODEF1M04",
          "germanBankleitzahl" : null,
          "name" : null
        },
        "clientCreditorId" : null
      } ],
      "tradeTax" : [ {
        "calculated" : {
          "value" : 37.62,
          "currency" : "EUR"
        },
        "type" : "VAT",
        "exemptionReason" : null,
        "basis" : {
          "value" : 198.00,
          "currency" : "EUR"
        },
        "lineTotal" : null,
        "allowanceCharge" : null,
        "category" : null,
        "percentage" : 19.00
      } ],
      "billingPeriod" : null,
      "allowanceCharge" : [ ],
      "serviceCharge" : [ ],
      "paymentTerms" : [ ],
      "monetarySummation" : {
        "lineTotal" : {
          "value" : 198.00,
          "currency" : "EUR"
        },
        "chargeTotal" : {
          "value" : 0.00,
          "currency" : "EUR"
        },
        "allowanceTotal" : {
          "value" : 0.00,
          "currency" : "EUR"
        },
        "taxBasisTotal" : {
          "value" : 198.00,
          "currency" : "EUR"
        },
        "taxTotal" : {
          "value" : 37.62,
          "currency" : "EUR"
        },
        "grandTotal" : {
          "value" : 235.62,
          "currency" : "EUR"
        },
        "totalPrepaid" : null,
        "duePayable" : null
      },
      "receivableBookingReference" : null
    },
    "items" : [ {
      "lineDocument" : null,
      "agreement" : null,
      "delivery" : {
        "shipTo" : null,
        "ultimateShipTo" : null,
        "actualDelivery" : null,
        "billed" : {
          "value" : 20.0000,
          "unitCode" : "C62",
          "unit" : "UNIT"
        },
        "chargeFree" : null,
        "packageQuantity" : null,
        "despatchAdvice" : null,
        "receivingAdvice" : null,
        "deliveryNote" : null
      },
      "settlement" : {
        "tradeTax" : [ ],
        "billingPeriod" : null,
        "bookingReference" : null,
        "monetarySummation" : {
          "lineTotal" : {
            "value" : 198.00,
            "currency" : "EUR"
          },
          "totalAllowanceCharge" : null
        }
      },
      "product" : {
        "globalId" : {
          "value" : "4012345001235",
          "schemeId" : "0160"
        },
        "sellerAssignedId" : "TB100A4",
        "buyerAssignedId" : null,
        "name" : "GTIN: 4012345001235\n               Unsere Art.-Nr.: TB100A4\n               Trennblätter A4",
        "description" : null,
        "characteristics" : [ ],
        "classifications" : [ ],
        "origins" : [ ],
        "containedProducts" : [ ]
      }
    } ]
  }
}

}]);
