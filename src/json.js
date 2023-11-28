export const json = {
    "questionTitlePattern": "numTitleRequire",
    "questionStartIndex": "№1", 
    "requiredText": "(*)",
    "pages": [{
      "title": "Page {pageno} of {pagecount}",
      "elements": [{
        "type": "matrix",
        "name": "qualities",
        "title": "Please indicate if you agree or disagree with the following statements",
        "isRequired": true,
        "columns": [{
          "value": 5,
          "text": "Strongly agree"
        }, {
          "value": 4,
          "text": "Agree"
        }, {
          "value": 3,
          "text": "Neutral"
        }, {
          "value": 2,
          "text": "Disagree"
        }, {
          "value": 1,
          "text": "Strongly disagree"
        }],
        "rows": [{
          "value": "affordable",
          "text": "Product is affordable"
        }, {
          "value": "does-what-it-claims",
          "text": "Product does what it claims"
        }, {
          "value": "easy-to-use",
          "text": "Product is easy to use"
        }]
      }, {
        "type": "rating",
        "name": "satisfaction-score",
        "title": "How satisfied are you with our product?",
        "mininumRateDescription": "Not satisfied",
        "maximumRateDescription": "Completely satisfied",
        "isRequired": true
      }, {
        "type": "comment",
        "name": "suggestions",
        "title": "What would make you more satisfied with our product?"
      }]
    }, {
      "title": "Page {pageno} of {pagecount}",
      "elements": [{
        "type": "radiogroup",
        "name": "price-comparison",
        "title": "Compared to our competitors, do you feel our product is:",
        "choices": [
          "Less expensive",
          "Priced about the same",
          "More expensive",
          "Not sure"
        ],
        "isRequired": true
      }, {
        "type": "radiogroup",
        "name": "current-price",
        "title": "Do you feel our current price is merited by our product?",
        "choices": [
          "correct|Yes, the price is about right",
          "low|No, the price is too low for your product",
          "high|No, the price is too high for your product"
        ],
        "isRequired": true
      }, {
        "type": "multipletext",
        "name": "price-limits",
        "title": "What is the highest and lowest price you would pay for a product like ours?",
        "items": [{
          "name": "highest",
          "title": "Highest"
        }, {
          "name": "lowest",
          "title": "Lowest"
        }]
      }]
    }, {
      "title": "Page {pageno} of {pagecount}",
      "elements": [{
        "type": "text",
        "name": "email",
        "title": "Please leave your email address if you would like us to contact you."
      }]
    }]
  };