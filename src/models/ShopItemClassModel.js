
class ShopItemClassModel {
    constructor(brand, title, description, descriptionFull, price, currency)
    {
        this.brand = brand.typeOf(String); 
        this.title = title.typeOf(String);
        this.description = description.typeOf(String);
        this.descriptionFull = descriptionFull.typeOf(String);
        this.price = price.typeOf(Number);
        this.currency = currency.typeOf(String);
    }
}
export default ShopItemClassModel;