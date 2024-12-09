db.createCollection("Customers", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "Customers",
      "required": ["name", "address", "phone", "email", "register_date", "Last_shopping"],
      "properties": {
        "name": {
          "bsonType": "string"
        },
        "address": {
          "bsonType": "object",
          "title": "object",
          "required": ["street", "number", "floor", "door", "city", "potal_code", "country"],
          "properties": {
            "street": {
              "bsonType": "string"
            },
            "number": {
              "bsonType": "int"
            },
            "floor": {
              "bsonType": "int"
            },
            "door": {
              "bsonType": "int"
            },
            "city": {
              "bsonType": "string"
            },
            "potal_code": {
              "bsonType": "int"
            },
            "country": {
              "bsonType": "string"
            }
          }  
        },
        "phone": {
          "bsonType": "int"
        },
        "email": {
          "bsonType": "string"
        },
        "register_date": {
          "bsonType": "timestamp"
        },
        "recomended_by": {
          "bsonType": "int"
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
        "": {
          "bsonType": "undefined"
        },
        "Last_shopping": {
          "bsonType": "object",
          "title": "object",
          "required": ["glasses", "emploee", "date"],
          "properties": {
            "glasses": {
              "bsonType": "object",
              "title": "object",
              "required": ["brand ", "graduation", "frame_type", "frame_color", "glass_color", "price"],
              "properties": {
                "brand ": {
                  "bsonType": "string"
                },
                "graduation": {
                  "bsonType": "object",
                  "title": "object",
                  "required": ["right_eye", "left_eye"],
                  "properties": {
                    "right_eye": {
                      "bsonType": "decimal"
                    },
                    "left_eye": {
                      "bsonType": "decimal"
                    }
                  }  
                },
                "frame_type": {
                  "enum": 
                },
                "frame_color": {
                  "bsonType": "string"
                },
                "glass_color": {
                  "bsonType": "string"
                },
                "price": {
                  "bsonType": "decimal"
                }
              }  
            },
            "emploee": {
              "bsonType": "int"
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
