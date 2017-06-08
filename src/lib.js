'use strict'

const listing =
  (name, price) => ({
    name,
    price
  })

const cart =
  (customer, ...items) => ({
    customer,
    items
  })

const listedPrice =
  listing =>
    name =>
      name === listing.name
        ? listing.price
        : 0

const customerItemsTotal = (listings, items) => {
  let total = 0
  for (var i = 0; i < listings.length; i++) {
    for (var j = 0; j < items.length; j++) {
       if (listings[i].name === items[j]) {
         total = total + listings[i].price
       }
    }
  }

  return total
}

const customerObjectCreater = (cust, listings) => {
  let customerObject = {customer: {}, total: 0}

  const mapper = cust.items.filter(item => listings.filter(list => {
    let listingsTest = listedPrice(list)
    return listingsTest(item)
  }))

  console.log(mapper)

  let total = customerItemsTotal(listings, cust.items)
  customerObject.customer = cust
  customerObject.total = total
  return customerObject
}

/**
 * transform carts into an array of { customer, total }
 */
const calculateTotals =
  listings =>
    carts => {
      const customers = []
      for (let cart of carts) {
        customers.push(customerObjectCreater(cart, listings))
      }
      return customers
    }

module.exports = {
  listing,
  cart,
  calculateTotals
}
