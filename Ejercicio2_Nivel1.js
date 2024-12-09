db.createCollection("glasses", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "glasses",
      "required": ["brand", "frame", "supplier", "price", "bought_by"],
      "properties": {
        "brand": {
          "bsonType": "string"
        },
        "frame": {
          "enum": 
        },
        "supplier": {
          "bsonType": "object",
          "title": "object",
          "required": ["name", "phone", "adress"],
          "properties": {
            "name": {
              "bsonType": "string"
            },
            "phone": {
              "bsonType": "int"
            },
            "adress": {
              "bsonType": "object",
              "title": "object",
              "required": ["street", "number", "postal_code", "door", "city", "country"],
              "properties": {
                "street": {
                  "bsonType": "string"
                },
                "number": {
                  "bsonType": "int"
                },
                "postal_code": {
                  "bsonType": "int"
                },
                "door": {
                  "bsonType": "int"
                },
                "city": {
                  "bsonType": "string"
                },
                "country": {
                  "bsonType": "string"
                }
              }  
            }
          }  
        },
        "": {
          "bsonType": "undefined"
        },
        "": {
          "bsonType": "undefined"
        },
        "": {
          "bsonType": "undefined"
        },
        "": {
          "bsonType": "undefined"
        },
        "": {
          "bsonType": "undefined"
        },
        "price": {
          "bsonType": "decimal"
        },
        "bought_by": {
          "bsonType": "object",
          "title": "object",
          "required": ["customer", "date"],
          "properties": {
            "customer": {
              "bsonType": "object",
              "title": "object",
              "required": ["id_customer", "name", "addre", "phone_number", "register_date"],
              "properties": {
                "id_customer": {
                  "bsonType": "int"
                },
                "name": {
                  "bsonType": "string"
                },
                "addre": {
                  "bsonType": "object",
                  "title": "object",
                  "required": ["street", "number", "phone", "postal_code"],
                  "properties": {
                    "street": {
                      "bsonType": "string"
                    },
                    "number": {
                      "bsonType": "int"
                    },
                    "phone": {
                      "bsonType": "int"
                    },
                    "postal_code": {
                      "bsonType": "int"
                    }
                  }  
                },
                "phone_number": {
                  "bsonType": "int"
                },
                "register_date": {
                  "bsonType": "timestamp"
                }
              }  
            },
            "date": {
              "bsonType": "timestamp"
            }
          }  
        }
      }  
    } 
  }
});
