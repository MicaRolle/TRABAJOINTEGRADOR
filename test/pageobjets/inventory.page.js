class InventoryPage  {
   //**SORT**
   
   get sortBtn () { return $('.product_sort_container') }
   get sortAz () { return $('[value="az"]') }
   get sortZa () { return $('[value="za"]') }
   get sortLtH () { return $('[value="lohi"]') }
   get sortHtL () { return $('[value="hilo"]') }

   //**PRODUCTS**

   //BACK PACK
    get bpTitle () { return $('#item_4_title_link') }
    get bpImg () { return $('#item_4_img_link') }    
    get bpAdd () { return $('#add-to-cart-sauce-labs-backpack') }
    get bpDelete () { return $('#remove-sauce-labs-backpack') }
  
   //LIGTH
    get lightTitle () { return $('#item_0_title_link') }
    get lightImg () { return $('#item_0_img_link') }    
    get lightAdd () { return $('#add-to-cart-sauce-labs-bike-light') }
    get lightDelete () { return $('#remove-sauce-labs-bike-light') }

   //SHIRT
    get boltTShirtTitle () { return $('#item_1_title_link') }
    get boltTShirtImg () { return $('#item_1_img_link') }    
    get boltTShirtAdd () { return $('#add-to-cart-sauce-labs-bolt-t-shirt') }
    get boltTShirtDelete () { return $('#remove-sauce-labs-bolt-t-shirt') }
    
   //JACKET
    get jacketTitle () { return $('#item_5_title_link') }
    get jacketImg () { return $('#item_5_img_link') }    
    get jacketAdd () { return $('#add-to-cart-sauce-labs-fleece-jacket') }
    get jacketDelete () { return $('#remove-sauce-labs-fleece-jacket') }

   // ONESIE SHIRT
    get onesieShirtTitle () { return $('#item_2_title_link') }
    get onesieShirtImg () { return $('#item_2_img_link') }    
    get onesieShirtAdd () { return $('#add-to-cart-sauce-labs-onesie') }
    get onesieShirtDelete () { return $('#remove-sauce-labs-onesie') }

   // RED T-SHIRT
    get redTshirtTitle () { return $('#item_3_title_link') }
    get redTshirtImg () { return $('#item_3_img_link') }    
    get redTshirtAdd () { return $('[name="add-to-cart-test.allthethings()-t-shirt-(red)"]') }
    get redTshirtDelete () { return $('[name="remove-test.allthethings()-t-shirt-(red)"]') }
  
   // MEDIA 

    get twitter () { return $('.social_twitter a') }
    get facebook () { return $('.social_facebook a') }
    get linkedin () { return $('.social_linkedin a') }

   // INVENTORY ITEMS
    get inventoryItemName () { return $$('.inventory_item_name') }
    get inventoryItemDesc () { return $$('.inventory_item_desc') }
    get inventoryItemPrice () { return $$('.inventory_item_price') }
    get inventoryFirstItem () { return this.inventoryItemName[0] }

   // STEPS
    get title () { return $('.title')}
    get btnContShopping () { return $('#continue-shopping') }
    get btnCheckout () { return $('#checkout') }
      

    //MET
    open () {
        return browser.url('https://www.saucedemo.com/inventory.html');
    }

    addAllProducts () {
        this.bpAdd.click();
        this.lightAdd.click();
        this.boltTShirtAdd.click();
        this.jacketAdd.click();
        this.onesieShirtAdd.click();
        this.redTshirtAdd.click();
    }
    removeAllProducts () {
        this.bpDelete.click();
        this.lightDelete.click();
        this.boltTShirtDelete.click();
        this.jacketDelete.click();
        this.onesieShirtDelete.click();
        this.redTshirtDelete.click();
    }
}

module.exports = new InventoryPage();