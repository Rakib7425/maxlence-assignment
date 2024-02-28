const dbConfig = {
    production: {
        "DB_HOST": "maxlence-rakib7425.a.aivencloud.com",
        "DB_PORT": 24575,
        "DB_NAME": "maxlence",
        "DB_USER_NAME": "avnadmin",
        "DB_PASSWORD": "AVNS_itRf149A2SChID400S0",

    },
    development: {
        "DB_HOST": "localhost",
        "DB_PORT": 3306,
        "DB_NAME": "maxlence",
        "DB_USER_NAME": "root",
        "DB_PASSWORD": ""
    },
    testing: {
        "DB_HOST": "localhost",
        "DB_PORT": 3306,
        "DB_NAME": "maxlence_test",
        "DB_USER_NAME": "root",
        "DB_PASSWORD": ""
    }
}

module.exports = dbConfig;
