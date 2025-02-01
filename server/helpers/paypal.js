const paypal = require("paypal-rest-sdk");

paypal.configure({
    mode:"sandbox",
    client_id: "Ac1l3qA0u5gvrxSk569W3PAfq2TZdNGf5J5PTg59TlAMrfgnkiMNsbN55a_2oNP-HfonI9g7NyrzXKAv",
    client_secret: "EKfHv76T3Zlx9BqTNJqbh4xUaKN2MrKyKm5yV2PhzX7eimUmHvFjjbZ7JfgLFa4t_4BwMijjyOSZP-J-",
});

module.exports = paypal;
